import { DATE_SEGMENT_PARTS, type DateSegmentPart, EDITABLE_SEGMENT_PARTS, type Formatter, type Granularity, type HourCycle, type SegmentContentObj, type SegmentPart, type SegmentValueObj, TIME_SEGMENT_PARTS, type TimeSegmentPart, getOptsByGranularity, getPlaceholder, isDateSegmentPart, isSegmentPart, isZonedDateTime, toDate } from '@/shared'
import type { DateValue } from '@internationalized/date'
import type { Ref } from 'vue'

const calendarDateTimeGranularities = ['hour', 'minute', 'second']

type SyncSegmentValuesProps = {
  value: DateValue
  formatter: Formatter
}

export function syncSegmentValues(props: SyncSegmentValuesProps) {
  const { formatter } = props

  const dateValues = DATE_SEGMENT_PARTS.map((part) => {
    return [part, props.value[part]]
  })
  if ('hour' in props.value) {
    const timeValues = TIME_SEGMENT_PARTS.map((part) => {
      if (part === 'dayPeriod')
        return [part, formatter.dayPeriod(toDate(props.value))]
      return [part, props.value[part as keyof DateValue]]
    })

    const mergedSegmentValues = [...dateValues, ...timeValues]
    return Object.fromEntries(mergedSegmentValues) as SegmentValueObj
  }

  return Object.fromEntries(dateValues) as SegmentValueObj
}

export function initializeSegmentValues(granularity: Granularity) {
  const initialParts = EDITABLE_SEGMENT_PARTS.map((part) => {
    if (part === 'dayPeriod')
      return [part, 'AM']

    return [part, null]
  }).filter(([key]) => {
    if (key === 'literal' || key === null)
      return false
    if (granularity === 'day')
      return !calendarDateTimeGranularities.includes(key)
    else return true
  })

  return Object.fromEntries(initialParts)
}

type SharedContentProps = {
  granularity: Granularity
  dateRef: Ref<DateValue>
  formatter: Formatter
  hideTimeZone: boolean
  hourCycle: HourCycle
}

type CreateContentObjProps = SharedContentProps & {
  segmentValues: SegmentValueObj
  locale: string
}

type CreateContentArrProps = SharedContentProps & {
  contentObj: SegmentContentObj
}

function createContentObj(props: CreateContentObjProps) {
  const { segmentValues, formatter, locale } = props
  function getPartContent(part: DateSegmentPart | TimeSegmentPart) {
    if ('hour' in segmentValues) {
      const value = segmentValues[part]
      if (value !== null) {
        return formatter.part(props.dateRef.value.set({ [part]: value }), part, {
          hourCycle: props.hourCycle === 24 ? 'h24' : undefined,
        })
      }
      else {
        return getPlaceholder(part, '', locale)
      }
    }
    else {
      if (isDateSegmentPart(part)) {
        const value = segmentValues[part]
        if (value !== null)
          return formatter.part(props.dateRef.value.set({ [part]: value }), part)

        else
          return getPlaceholder(part, '', locale)
      }
      return ''
    }
  }

  const content = Object.keys(segmentValues).reduce((obj, part) => {
    if (!isSegmentPart(part))
      return obj
    if ('hour' in segmentValues && part === 'dayPeriod') {
      const value = segmentValues[part]

      if (value !== null)
        obj[part] = value

      else
        obj[part] = getPlaceholder(part, 'AM', locale)
    }
    else {
      obj[part] = getPartContent(part)
    }

    return obj
  }, {} as SegmentContentObj)

  return content
}

function createContentArr(props: CreateContentArrProps) {
  const { granularity, formatter, contentObj, hideTimeZone, hourCycle } = props
  const parts = formatter.toParts(props.dateRef.value, getOptsByGranularity(granularity, hourCycle))

  const segmentContentArr = parts
    .map((part) => {
      const defaultParts = ['literal', 'timeZoneName', null]

      if (defaultParts.includes(part.type) || !isSegmentPart(part.type)) {
        return {
          part: part.type,
          value: part.value,
        }
      }

      return {
        part: part.type,
        value: contentObj[part.type],
      }
    })
    .filter((segment): segment is { part: SegmentPart; value: string } => {
      if (segment.part === null || segment.value === null)
        return false
      if (segment.part === 'timeZoneName' && (!isZonedDateTime(props.dateRef.value) || hideTimeZone))
        return false

      return true
    })

  return segmentContentArr
}

type CreateContentProps = CreateContentObjProps

export function createContent(props: CreateContentProps) {
  const contentObj = createContentObj(props)

  const contentArr = createContentArr({
    contentObj,
    ...props,
  })

  return {
    obj: contentObj,
    arr: contentArr,
  }
}
