---
outline: deep
metaTitle: Slider
metaDescription: An input where the user selects a value from within a given range.
name: slider
aria: https://www.w3.org/WAI/ARIA/apg/patterns/slidertwothumb
---

<script setup> 
import DemoSlider from '../../components/demo/Slider/index.vue' 
</script>

# Slider

<Description>
An input where the user selects a value from within a given range.
</Description>

<HeroContainer>
<DemoSlider />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Slider/index.vue

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features

<Highlights
  :features="[
    'Can be controlled or uncontrolled.',
    'Supports multiple thumbs.',
    'Supports a minimum value between thumbs.',
    'Supports touch or click on track to update value.',
    'Supports Right to Left direction.',
    'Full keyboard navigation.',
  ]"
/>

## Installation

Install the component from your command line.

```bash
npm install radix-vue
```

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from "radix-vue";
</script>

<template>
  <SliderRoot>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a slider. It will render an `input` for each thumb when used within a `form` to ensure events propagate correctly.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
    {
      name: 'defaultValue',
      required: false,
      type: 'number[]',
      description: 'The value of the slider when initially rendered. Use when you do not need to control the state of the slider.',
    },
    {
      name: 'value',
      required: false,
      type: 'number[]',
      description: '<span> The controlled value of the slider. Must be binded with <Code>v-model</Code>. </span>',
    },
    {
      name: 'onValueCommit',
      required: false,
      type: 'onValueCommit?(value: number[]): void',
      typeSimple: 'function',
      description: 'Event handler called when the value changes at the end of an interaction. Useful when you only need to capture a final value e.g. to update a backend service.',
    },
    {
      name: 'name',
      required: false,
      type: 'string',
      description: 'The name of the slider. Submitted with its owning form as part of a name/value pair.',
    },
    {
      name: 'disabled',
      required: false,
      type: 'boolean',
      default: 'false',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the slider. </span>',
    },
    {
      name: 'orientation',
      required: false,
      type: '&quot;horizontal&quot; | &quot;vertical&quot;',
      typeSimple: 'enum',
      default: '&quot;horizontal&quot;',
      description: 'The orientation of the slider.',
    },
    {
      name: 'dir',
      required: false,
      type: '&quot;ltr&quot; | &quot;rtl&quot;',
      typeSimple: 'enum',
      description: '<span> The reading direction of the slider. If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode. </span>',
    },
    {
      name: 'inverted',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Whether the slider is visually inverted.',
    },
    {
      name: 'min',
      required: false,
      type: 'number',
      default: '0',
      description: 'The minimum value for the range.',
    },
    {
      name: 'max',
      required: false,
      type: 'number',
      default: '100',
      description: 'The maximum value for the range.',
    },
    {
      name: 'step',
      required: false,
      type: 'number',
      default: '1',
      description: 'The stepping interval.',
    },
    {
      name: 'minStepsBetweenThumbs',
      required: false,
      type: 'number',
      default: '0',
      description: '<span> The minimum permitted <Code>step</Code>s between multiple thumbs. </span>',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

### Track

The track that contains the `SliderRange`.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

### Range

The range part. Must live inside `SliderTrack`.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

### Thumb

A draggable thumb. You can render multiple thumbs.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

## Examples

### Vertical orientation

Use the `orientation` prop to create a vertical slider.

```vue line=8-12
// index.vue
<script setup>
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from "radix-vue";
import "./styles.css";
</script>

<template>
  <SliderRoot class="SliderRoot" :defaultValue="[50]" orientation="vertical">
    <SliderTrack class="SliderTrack">
      <SliderRange class="SliderRange" />
    </SliderTrack>
    <SliderThumb class="SliderThumb" />
  </SliderRoot>
</template>
```

```css line=7,18,26
/* styles.css */
.SliderRoot {
  position: relative;
  display: flex;
  align-items: center;
}
.SliderRoot[data-orientation="vertical"] {
  flex-direction: column;
  width: 20px;
  height: 100px;
}

.SliderTrack {
  position: relative;
  flex-grow: 1;
  background-color: grey;
}
.SliderTrack[data-orientation="vertical"] {
  width: 3px;
}

.SliderRange {
  position: absolute;
  background-color: black;
}
.SliderRange[data-orientation="vertical"] {
  width: 100%;
}

.SliderThumb {
  display: block;
  width: 20px;
  height: 20px;
  background-color: black;
}
```

### Create a range

Add multiple thumbs and values to create a range slider.

```vue line=8,12-13
// index.vue
<script setup>
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from "radix-vue";
import "./styles.css";
</script>

<template>
  <SliderRoot :defaultValue="[25, 75]">
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
    <SliderThumb />
  </SliderRoot>
</template>
```

### Define step size

Use the `step` prop to increase the stepping interval.

```vue line=8
// index.vue
<script setup>
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from "radix-vue";
import "./styles.css";
</script>

<template>
  <SliderRoot :defaultValue="[50]" :step="10">
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderRoot>
</template>
```

### Prevent thumb overlap

Use `minStepsBetweenThumbs` to avoid thumbs with equal values.

```vue line=8-12
// index.vue
<script setup>
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from "radix-vue";
import "./styles.css";
</script>

<template>
  <SliderRoot :defaultValue="[25, 75]" :step="10" :minStepsBetweenThumbs="1">
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
    <SliderThumb />
  </SliderRoot>
</template>
```

## Accessibility

Adheres to the [Slider WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slidertwothumb).

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['ArrowRight'],
      description: '<span> Increments/decrements by the <Code>step</Code> value depending on <Code>orientation</Code>. </span>',
    },
    {
      keys: ['ArrowLeft'],
      description: '<span> Increments/decrements by the <Code>step</Code> value depending on <Code>orientation</Code>. </span>',
    },
    {
      keys: ['ArrowUp'],
      description: '<span> Increases the value by the <Code>step</Code> amount. </span>',
    },
    {
      keys: ['ArrowDown'],
      description: '<span> Decreases the value by the <Code>step</Code> amount. </span>',
    },
    {
      keys: ['PageUp'],
      description: '<span> Increases the value by a larger <Code>step</Code>. </span>',
    },
    {
      keys: ['PageDown'],
      description: '<span> Decreases the value by a larger <Code>step</Code>. </span>',
    },
    {
      keys: ['Shift + ArrowUp'],
      description: '<span> Increases the value by a larger <Code>step</Code>. </span>',
    },
    {
      keys: ['Shift + ArrowDown'],
      description: '<span> Decreases the value by a larger <Code>step</Code>. </span>',
    },
    {
      keys: ['Home'],
      description: 'Sets the value to its minimum.',
    },
    {
      keys: ['End'],
      description: 'Sets the value to its maximum.',
    },
  ]"
/>

<!--
## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract all parts

This example abstracts all of the `Slider` parts so it can be used as a self closing element.

#### Usage

```vue
import { Slider } from './your-slider'; export default () =>
<Slider :defaultValue="[25]}" />
;
```

#### Implementation

```vue
// your-slider.vue import * as SliderPrimitive from 'radix-vue'; export const
Slider = React.forwardRef((props, forwardedRef) => { const value = props.value
|| props.defaultValue; return (
<SliderPrimitive.Slider {...props} ref="{forwardedRef}">
      <SliderPrimitive.Track> <SliderPrimitive.Range />
      </SliderPrimitive.Track>
      {value.map((_, i) => '<SliderThumb key={i} />')}
    </SliderPrimitive.Slider>
  </template> });
```

## Caveats

### Mouse events are not fired

Because of [a limitation](https://github.com/radix-ui/primitives/blob/83a8c13bf66f3d9f17d77caeb187a69eb146930b/packages/react/slider/src/Slidertsx#L383-L384) we faced during implementation, the following example won't work as expected and the `onMouseDown` and `onMouseUp` event handlers won't be fired:

```vue
<SliderRoot
  onMouseDown={() => console.log('onMouseDown')}
  onMouseUp={() => console.log('onMouseUp')}
>
  …
</SliderRoot>
```

We recommend using pointer events instead (eg. `onPointerDown`, `onPointerUp`). Regardless of the above limitation, these events are better suited for cross-platform/device handling as they are fired for all pointer input types (mouse, touch, pen, etc.).
-->
