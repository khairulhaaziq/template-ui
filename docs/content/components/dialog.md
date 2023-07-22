---
outline: deep
metaTitle: Dialog
metaDescription: A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
name: dialog
aria: https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal
---

<script setup> 
import DemoDialog from '../../components/demo/Dialog/index.vue' 
</script>

# Dialog

<Description>
A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
</Description>

<HeroContainer>
<DemoDialog />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Dialog/index.vue

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features

<Highlights
  :features="[
    'Supports modal and non-modal modes.',
    'Focus is automatically trapped when modal.',
    'Can be controlled or uncontrolled.',
    '<span> Manages screen reader announcements with <Code>Title</Code> and<Code>Description</Code> components.</span>',
    'Esc closes the component automatically.',
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
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
  DialogClose,
  DialogPortal,
  DialogTitle,
  DialogDescription,
} from "radix-vue";
</script>

<template>
  <DialogRoot>
    <DialogTrigger />
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle />
        <DialogDescription />
        <DialogClose />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a dialog

<PropsTable
  :data="[
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: '<span>The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.</span>',
    },
    {
      name: 'open',
      type: 'boolean',
      description: '<span>The controlled open state of the dialog Must be binded with <Code>v-model</Code>.</span>',
    },
    {
      name: 'modal',
      required: false,
      type: 'boolean',
      default: 'true',
      description: '<span>The modality of the dialog When set to <Code>true</Code>, interaction with outside elements will be disabled and only dialog content will be visible to screen readers.</span>',
    },
  ]"
/>

### Trigger

The button that opens the dialog

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

### Portal

When used, portals your overlay and content parts into the `body`.

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

### Overlay

A layer that covers the inert portion of the view when the dialog is open.

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

### Content

Contains content to be rendered in the open dialog

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
  ]"
/>

### Close

The button that closes the dialog

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

### Title

An accessible title to be announced when the dialog is opened.

If you want to hide the title, wrap it inside our Visually Hidden utility like this `<VisuallyHidden asChild>`.

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

### Description

An optional accessible description to be announced when the dialog is opened.

If you want to hide the description, wrap it inside our Visually Hidden utility like this `<VisuallyHidden asChild>`. If you want to remove the description entirely, remove this part and pass `aria-describedby="undefined}` to `DialogContent`.

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

### Close after asynchronous form submission

Use the controlled props to programmatically close the Dialog after an async operation has completed.

```vue line=10,11,15,20-27,29
<script setup>
import { DialogRoot, DialogTrigger, DialogContent, DialogOverlay, DialogPortal } from "radix-vue";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));
const open = ref(false);
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger>Open</DialogTrigger>
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <form
          @submit="
            (event) => {
              wait().then(() => (open = false));
              event.preventDefault();
            }
          "
        >
          <!-- some inputs -->
          <button type="submit">Submit</button>
        </form>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
```

### Scrollable overlay

Move the content inside the overlay to render a dialog with overflow.

```vue
// index.vue
<script setup>
import { DialogRoot, DialogTrigger, DialogContent, DialogOverlay, DialogPortal } from "radix-vue";
import "./styles.css";
</script>

<template>
  <DialogRoot>
    <DialogTrigger />
    <DialogPortal>
      <DialogOverlay class="DialogOverlay">
        <DialogContent class="DialogContent">...</DialogContent>
      </DialogOverlay>
    </DialogPortal>
  </DialogRoot>
</template>
```

```css
/* styles.css */
.DialogOverlay {
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
}

.DialogContent {
  min-width: 300px;
  background: white;
  padding: 30px;
  border-radius: 4px;
}
```

### Custom portal container

Customise the element that your dialog portals into.

```vue line=10,16,22
<script setup>
import { DialogRoot, DialogTrigger, DialogContent, DialogOverlay, DialogPortal } from "radix-vue";

const container = ref(null);
</script>
<template>
  <div>
    <DialogRoot>
      <DialogTrigger />
      <DialogPortal container="container">
        <DialogOverlay />
        <DialogContent>...</DialogContent>
      </DialogPortal>
    </DialogRoot>

    <div ref="container" />
  </div>
</template>
```

## Accessibility

Adheres to the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal).

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Space'],
      description: 'Opens/closes the dialog',
    },
    {
      keys: ['Enter'],
      description: 'Opens/closes the dialog',
    },
    {
      keys: ['Tab'],
      description: 'Moves focus to the next focusable element.',
    },
    {
      keys: ['Shift + Tab'],
      description: 'Moves focus to the previous focusable element.',
    },
    {
      keys: ['Esc'],
      description: '<span>Closes the dialog and moves focus to <Code>DialogTrigger</Code>.</span>',
    },
  ]"
/>

<!--TODO
## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract the overlay and the close button

This example abstracts the `DialogOverlay` and `DialogClose` parts.

#### Usage

```vue
<script setup>
import { Dialog, DialogTrigger, DialogContent } from './your-dialog';
</script>

<template>
  <Dialog>
    <DialogTrigger>Dialog trigger</DialogTrigger>
    <DialogContent>Dialog Content</DialogContent>
  </Dialog>
</template>
```

#### Implementation

```vue
// your-dialogvue
import React from 'react';
import * as DialogPrimitive from 'radix-vue';
import { Cross1Icon } from '@radix-ui/react-icons';

export const DialogContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay />
      <DialogPrimitive.Content {...props} ref="forwardedRef}>
        {children}
        <DialogPrimitive.Close aria-label="Close">
          <Cross1Icon />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
```
-->

<!-- TODO: denniss - fix react stuff -->
