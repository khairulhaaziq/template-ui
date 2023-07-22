---
outline: deep
metaTitle: Popover
metaDescription: Displays rich content in a portal, triggered by a button.
name: popover
aria: https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal
---

<script setup> 
import DemoPopover from '../../components/demo/Popover/index.vue' 
</script>

# Popover

<Description>
Displays rich content in a portal, triggered by a button.
</Description>

<HeroContainer>
<DemoPopover />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Popover/index.vue

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features

<Highlights
  :features="[
    'Can be controlled or uncontrolled.',
    'Customize side, alignment, offsets, collision handling.',
    'Optionally render a pointing arrow.',
    'Focus is fully managed and customizable.',
    'Supports modal and non-modal modes.',
    'Dismissing and layering behavior is highly customizable.',
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
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from "radix-vue";
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger />
    <PopoverAnchor />
    <PopoverPortal>
      <PopoverContent>
        <PopoverClose />
        <PopoverArrow />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a popover.

<PropsTable
  :data="[
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: '<span> The open state of the popover when it is initially rendered. Use when you do not need to control its open state.</span>',
    },
    {
      name: 'open',
      type: 'boolean',
      description: '<span> The controlled open state of the popover. Must be binded with <Code>v-model</Code>.</span>',
    },
    {
      name: 'modal',
      required: false,
      type: 'boolean',
      default: 'false',
      description: '<span> The modality of the popover. When set to <Code>true</Code>, interaction with outside elements will be disabled and only popover content will be visible to screen readers.</span>',
    },
  ]"
/>

### Trigger

The button that toggles the popover. By default, the `PopoverContent` will position itself against the trigger.

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
      values: ['open', 'closed'],
    },
  ]"
/>

### Anchor

An optional element to position the `PopoverContent` against. If this part is not used, the content will position alongside the <Code>PopoverTrigger</Code>.

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

### Portal

When used, portals the content part into the `body`.

<PropsTable
  :data="[
    {
      name: 'container',
      type: 'HTMLElement',
      default: 'document.body',
      description: 'Specify a container element to portal the content into.',
    },
  ]"
/>

### Content

The component that pops out when the popover is open.

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
      name: 'onOpenAutoFocus',
      required: false,
      type: 'boolean',
      default: 'true',
      description: '<span>Event handler called when focus moves into the component after opening. It can be prevented by calling <Code>event.preventDefault</Code>.</span>',
    },
    {
      name: 'onCloseAutoFocus',
      required: false,
      type: 'boolean',
      default: 'true',
      description: '<span>Event handler called when focus moves to the trigger after closing. It can be prevented by calling <Code>event.preventDefault</Code>.</span>',
    },
    {
      name: 'onEscapeKeyDown',
      required: false,
      type: 'boolean',
      default: 'true',
      description: '<span>Event handler called when the escape key is down. It can be prevented by calling <Code>event.preventDefault</Code>.</span>',
    },
    {
      name: 'onPointerDownOutside',
      required: false,
      type: 'boolean',
      default: 'true',
      description: '<span>Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling <Code>event.preventDefault</Code>.</span>',
    },
    {
      name: 'onInteractOutside',
      type: '(event: React.FocusEvent | MouseEvent | TouchEvent) => void',
      typeSimple: 'function',
      description: '<span>Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling <Code>event.preventDefault</Code>.</span>',
    },
    {
      name: 'side',
      type: '&quot;top&quot; | &quot;right&quot; | &quot;bottom&quot; | &quot;left&quot;',
      typeSimple: 'enum',
      default: '&quot;bottom&quot;',
      description: '<span> The preferred side of the trigger to render against when open. Will be reversed when collisions occur and <Code>avoidCollisions</Code> is enabled.</span>',
    },
    {
      name: 'sideOffset',
      type: 'number',
      default: '0',
      description: '<span> <span>The distance in pixels from the trigger.</span></span>',
    },
    {
      name: 'align',
      type: '&quot;start&quot; | &quot;center&quot; | &quot;end&quot;',
      typeSimple: 'enum',
      default: '&quot;center&quot;',
      description: '<span> The preferred alignment against the trigger. May change when collisions occur.</span>',
    },
    {
      name: 'alignOffset',
      type: 'number',
      default: '0',
      description: '<span> An offset in pixels from the <Code>&quot;start&quot;</Code> or <Code>&quot;end&quot;</Code> alignment options.</span>',
    },
    {
      name: 'avoidCollisions',
      type: 'boolean',
      default: 'true',
      description: '<span> When <Code>true</Code>, overrides the <Code>side</Code> and <Code>align</Code> preferences to prevent collisions with boundary edges.</span>',
    },
    {
      name: 'collisionBoundary',
      type: 'Element | null | Array<Element | null>',
      typeSimple: 'Boundary',
      default: '[]',
      description: '<span> The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.</span>',
    },
    {
      name: 'collisionPadding',
      type: 'number | Partial<Record<Side, number>>',
      typeSimple: 'number | Padding',
      default: '0',
      description: '<span> The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: <Code>{`{ top: 20, left: 20 }`}</Code> .</span>',
    },
    {
      name: 'arrowPadding',
      type: 'number',
      default: '0',
      description: '<span> The padding between the arrow and the edges of the content. If your content has <Code>border-radius</Code>, this will prevent it from overflowing the corners.</span>',
    },
    {
      name: 'sticky',
      type: '&quot;partial&quot; | &quot;always&quot;',
      typeSimple: 'enum',
      default: '&quot;partial&quot;',
      description: '<span> The sticky behavior on the align axis. <Code>&quot;partial&quot;</Code> will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst <Code>&quot;always&quot;</Code> will keep the content in the boundary regardless.</span>',
    },
    {
      name: 'hideWhenDetached',
      type: 'boolean',
      default: 'false',
      description: '<span> Whether to hide the content when the trigger becomes fully occluded.</span>',
    },
  ]"
/>

<EmitsTable :data="[
{
name: '@open',
type: '(event: Event) => void',
description: 'Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`',
},
{
name: '@close',
type: '(event: Event) => void',
description: 'Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`',
},
{
name: '@escape-key-down',
type: '(event: KeyboardEvent) => void',
description: 'Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`',
},
{
name: '@pointer-down-outside',
type: '(event: KeyboardEvent) => void',
description: '<span>Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling <Code>event.preventDefault</Code>.</span>',
},
{
name: '@interact-outside',
type: '(event: KeyboardEvent) => void',
description: '<span>Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling <Code>event.preventDefault</Code>.</span>',
}]" />

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['open', 'closed'],
    },
    {
      attribute: '[data-side]',
      values: ['left', 'right', 'bottom', 'top'],
    },
    {
      attribute: '[data-align]',
      values: ['start', 'end', 'center'],
    },
  ]"
/>

<CssVariablesTable
  :data="[
    {
      cssVariable: '--radix-popover-content-transform-origin',
      description: ' The <Code>transform-origin</Code> computed from the content and arrow positions/offsets',
    },
    {
      cssVariable: '--radix-popover-content-available-width',
      description: 'The remaining width between the trigger and the boundary edge',
    },
    {
      cssVariable: '--radix-popover-content-available-height',
      description: 'The remaining height between the trigger and the boundary edge',
    },
    {
      cssVariable: '--radix-popover-trigger-width',
      description: 'The width of the trigger',
    },
    {
      cssVariable: '--radix-popover-trigger-height',
      description: 'The height of the trigger',
    },
  ]"
/>

### Arrow

An optional arrow element to render alongside the popover. This can be used to help visually link the anchor with the `PopoverContent`. Must be rendered inside `PopoverContent`.

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
      name: 'width',
      type: 'number',
      default: 10,
      description: '<span>The width of the arrow in pixels.</span>',
    },
    {
      name: 'height',
      type: 'number',
      default: 5,
      description: '<span>The height of the arrow in pixels.</span>',
    },
  ]"
/>

### Close

The button that closes an open popover.

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

## Examples

### Constrain the content size

You may want to constrain the width of the content so that it matches the trigger width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--radix-popover-trigger-width` and `--radix-popover-content-available-height` to support this. Use them to constrain the content dimensions.

```vue line=18
// index.vue
<script setup>
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from "radix-vue";
import "./styles.css";
</script>
;

<template>
  <PopoverRoot>
    <PopoverTrigger>…</PopoverTrigger>
    <PopoverPortal>
      <PopoverContent class="PopoverContent" :sideOffset="5"> … </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css
/* styles.css */
.PopoverContent {
  width: var(--radix-popover-trigger-width);
  max-height: var(--radix-popover-content-available-height);
}
```

### Origin-aware animations

We expose a CSS custom property `--radix-popover-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```vue line=18
// index.vue
<script setup>
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from "radix-vue";
import "./styles.css";
</script>
;

<template>
  <PopoverRoot>
    <PopoverTrigger>…</PopoverTrigger>
    <PopoverPortal>
      <PopoverContent class="PopoverContent">…</PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css line=3
/* styles.css */
.PopoverContent {
  transform-origin: var(--radix-popover-content-transform-origin);
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Collision-aware animations

We expose `data-side` and `data-align` attributes. Their values will change at runtime to reflect collisions. Use them to create collision and direction-aware animations.

```vue line=18
// index.vue
<script setup>
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from "radix-vue";
import "./styles.css";
</script>
;

<template>
  <PopoverRoot>
    <PopoverTrigger>…</PopoverTrigger>
    <PopoverPortal>
      <PopoverContent class="PopoverContent">…</PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css line=6-11
/* styles.css */
.PopoverContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.PopoverContent[data-side="top"] {
  animation-name: slideUp;
}
.PopoverContent[data-side="bottom"] {
  animation-name: slideDown;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### With custom anchor

You can anchor the content to another element if you do not want to use the trigger as the anchor.

```vue line=16-20
// index.vue
<script setup>
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from "radix-vue";
import "./styles.css";
</script>
;

<template>
  <PopoverRoot>
    <PopoverAnchor asChild>
      <div class="Row">Row as anchor <PopoverTrigger>Trigger</PopoverTrigger></div>
    </PopoverAnchor>

    <PopoverPortal>
      <PopoverContent>…</PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css
/* styles.css */
.Row {
  background-color: gainsboro;
  padding: 20px;
}
```

## Accessibility

Adheres to the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal).

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Space'],
      description: 'Opens/closes the popover.',
    },
    {
      keys: ['Enter'],
      description: 'Opens/closes the popover.',
    },
    {
      keys: ['Tab'],
      description: 'Moves focus to the next focusable element',
    },
    {
      keys: ['Shift + Tab'],
      description: 'Moves focus to the previous focusable element',
    },
    {
      keys: ['Esc'],
      description: '<span> Closes the popover and moves focus to <Code>PopoverTrigger</Code>.</span>',
    },
  ]"
/>

<!--
## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

#### Abstract the arrow and set default configuration

This example abstracts the `PopoverArrow` part and sets a default `sideOffset` configuration.

#### Usage

```vue
import { Popover, PopoverTrigger, PopoverContent } from './your-popover';

<template>
	<Popover>
		<PopoverTrigger>Popover trigger</PopoverTrigger>
		<PopoverContent>Popover content</PopoverContent>
	</Popover>
	);
</template>
```

#### Implementation

```vue
// your-popover.vue import React from 'react'; import * as PopoverPrimitive from
'radix-vue'; export const Popover = PopoverPrimitive.Root; export const
PopoverTrigger = PopoverPrimitive.Trigger; export const PopoverContent =
React.forwardRef( ({ children, ...props }, forwardedRef) => (
<PopoverPrimitive.Portal>
      <PopoverPrimitive.Content :sideOffset=5 {...props} ref={forwardedRef}>
        {children}
        <PopoverPrimitive.Arrow />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
) );
```
-->
