---
outline: deep
metaTitle: Checkbox
metaDescription: A control that allows the user to toggle between checked and not checked.
name: checkbox
aria: https://www.w3.org/WAI/ARIA/apg/patterns/checkbox
---

<script setup> 
import DemoCheckbox from '../../components/demo/Checkbox/index.vue' 
</script>

# Checkbox

<Description>
A control that allows the user to toggle between checked and not checked.
</Description>

<HeroContainer>
<DemoCheckbox />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Checkbox/index.vue

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features

<Highlights
  :features="[
    'Supports indeterminate state.',
    'Full keyboard navigation.',
    'Can be controlled or uncontrolled.',
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
import { CheckboxRoot, CheckboxIndicator } from "radix-vue";
</script>

<template>
  <CheckboxRoot>
    <CheckboxIndicator />
  </CheckboxRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a checkbox. An `input` will also render when used within a `form` to ensure events propagate correctly.

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
      name: 'defaultChecked',
      type: 'boolean',
      description:
        'The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.',
    },
    {
      name: 'checked',
      type: 'boolean',
      description: '<span> The controlled checked state of the checkbox Must be binded with <Code>v-model</Code>.</span>',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the checkbox </span>',
    },
    {
      name: 'required',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, indicates that the user must check the checkbox before the owning form can be submitted.</span>',
    },
    {
      name: 'name',
      type: 'string',
      description:
        'The name of the checkbox Submitted with its owning form as part of a name/value pair.',
    },
    {
      name: 'value',
      type: 'string',
      default: 'on',
      description: '<span> The value given as data when submitted with a <Code>name</Code>.</span>',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['checked', 'unchecked', 'indeterminate'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>

### Indicator

Renders when the checkbox is in a checked or indeterminate state. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

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
      attribute: '[data-state]',
      values: ['checked', 'unchecked', 'indeterminate'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>

## Examples

### Indeterminate

You can set the checkbox to `indeterminate` by taking control of its state.

```vue line=5,9-14,16-21
<script setup>
import { Icon } from "@iconify/vue";
import { CheckboxRoot, CheckboxIndicator } from "radix-vue";

const checked = ref("indeterminate");
</script>

<template>
  <StyledCheckbox v-model:checked="checked">
    <Icon icon="radix-icons:checkbox-indicator">
      <Icon icon="radix-icons:divider-horizontal" v-if="checked === 'indeterminate'" />
      <Icon icon="radix-icons:check" v-if="checked" />
    </Icon>
  </StyledCheckbox>

  <button type="button" @click="() => (checked === 'indeterminate' ? (checked = false) : (checked = 'indeterminate'))">
    Toggle indeterminate
  </button>
</template>
```

## Accessibility

Adheres to the [tri-state Checkbox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox).

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Space'],
      description: 'Checks/unchecks the checkbox',
    },
  ]"
/>
