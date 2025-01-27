import { describe, expect, it, vi } from 'vitest'
import { useSingleOrMultipleValue } from './useSingleOrMultipleValue'
import type { SingleOrMultipleTypeProps } from './types'
import { reactive } from 'vue'

function setupPropsEmits(defaultProps: SingleOrMultipleTypeProps) {
  const props = reactive(defaultProps)
  const emits = (emitName: string, ...args: any[]) => {
    if (emitName === 'update:modelValue')
      props.modelValue = args[0]
  }
  return { props, emits }
}

describe('useSingleOrMultipleValue', () => {
  it('should initialize with correct type and modelValue', () => {
    const props: SingleOrMultipleTypeProps = {
      type: 'single',
      modelValue: 'test',
    }
    const emits = vi.fn()
    const { modelValue } = useSingleOrMultipleValue(props, emits)
    expect(modelValue.value).toBe('test')
  })

  it('should change modelValue for single type', async () => {
    const { props, emits } = setupPropsEmits({
      type: 'single',
      modelValue: 'test',
    })
    const { changeModelValue, modelValue } = useSingleOrMultipleValue(props, emits)

    changeModelValue('newTest')
    expect(modelValue.value).toBe('newTest')

    changeModelValue('newTest')
    expect(modelValue.value).toBeUndefined()
  })

  it('should change modelValue for multiple type', () => {
    const { props, emits } = setupPropsEmits({
      type: 'multiple',
      modelValue: ['test'],
    })
    const { changeModelValue, modelValue } = useSingleOrMultipleValue(props, emits)

    changeModelValue('newTest')
    expect(modelValue.value).toEqual(['test', 'newTest'])

    changeModelValue('test')
    expect(modelValue.value).toEqual(['newTest'])
  })

  it('should infer type from modelValue given `single`', () => {
    const { props, emits } = setupPropsEmits({
      modelValue: 'test',
    })
    const { changeModelValue, modelValue } = useSingleOrMultipleValue(props, emits)

    changeModelValue('newTest')
    expect(modelValue.value).toEqual('newTest')

    changeModelValue('')
    expect(modelValue.value).toEqual('')
  })

  it('should infer type from modelValue given `multiple`', () => {
    const { props, emits } = setupPropsEmits({
      modelValue: ['test'],
    })
    const { changeModelValue, modelValue } = useSingleOrMultipleValue(props, emits)

    changeModelValue('newTest')
    expect(modelValue.value).toEqual(['test', 'newTest'])

    changeModelValue('test')
    expect(modelValue.value).toEqual(['newTest'])
  })

  it('should overwrite type given `single`', () => {
    const { props, emits } = setupPropsEmits({
      modelValue: ['test'],
      type: 'single',
    })
    const { changeModelValue, modelValue } = useSingleOrMultipleValue(props, emits)

    changeModelValue('newTest')
    expect(modelValue.value).toEqual('newTest')

    changeModelValue('')
    expect(modelValue.value).toEqual('')
  })

  it('should overwrite type given `multiple`', () => {
    const { props, emits } = setupPropsEmits({
      modelValue: 'test',
      type: 'multiple',
    })
    const { changeModelValue, modelValue } = useSingleOrMultipleValue(props, emits)

    changeModelValue('newTest')
    expect(modelValue.value).toEqual(['test', 'newTest'])

    changeModelValue('test')
    expect(modelValue.value).toEqual(['newTest'])
  })
})
