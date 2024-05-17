<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'activationMode',
    'description': '<p>The activation event of the editable field</p>\n',
    'type': '\'dblclick\' | \'focus\' | \'none\'',
    'required': false,
    'default': '\'focus\''
  },
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component',
    'required': false,
    'default': '\'div\''
  },
  {
    'name': 'asChild',
    'description': '<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href=\'https://www.radix-vue.com/guides/composition.html\'>Composition</a> guide for more details.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'autoResize',
    'description': '<p>Whether the editable field should auto resize</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'defaultValue',
    'description': '<p>The default value of the editable field</p>\n',
    'type': 'string',
    'required': false,
    'default': '\'\''
  },
  {
    'name': 'dir',
    'description': '<p>The reading direction of the calendar when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n',
    'type': '\'ltr\' | \'rtl\'',
    'required': false
  },
  {
    'name': 'disabled',
    'description': '<p>Whether the editable field is disabled</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'id',
    'description': '<p>The id of the field</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'maxLength',
    'description': '<p>The maximum number of characters allowed</p>\n',
    'type': 'number',
    'required': false
  },
  {
    'name': 'modelValue',
    'description': '<p>The value of the editable field</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'name',
    'description': '<p>The name of the field</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'placeholder',
    'description': '<p>The placeholder for the editable field</p>\n',
    'type': 'string | { edit: string; preview: string; }',
    'required': false,
    'default': '\'Enter text...\''
  },
  {
    'name': 'readonly',
    'description': '<p>Whether the editable field is read-only</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'selectOnFocus',
    'description': '<p>Whether to select the text in the input when it is focused.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'startWithEditMode',
    'description': '<p>Whether to start with the edit mode active</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'submitMode',
    'description': '<p>The submit event of the editable field</p>\n',
    'type': '\'blur\' | \'none\' | \'enter\' | \'both\'',
    'required': false,
    'default': '\'blur\''
  }
]" />

<EmitsTable :data="[
  {
    'name': 'focusOutside',
    'description': '<p>Event handler called when the focus moves outside of the <code>DismissableLayer</code>.\nCan be prevented.</p>\n',
    'type': '[event: FocusOutsideEvent]'
  },
  {
    'name': 'interactOutside',
    'description': '<p>Event handler called when an interaction happens outside the <code>DismissableLayer</code>.\nSpecifically, when a <code>pointerdown</code> event happens outside or focus moves outside of it.\nCan be prevented.</p>\n',
    'type': '[event: PointerDownOutsideEvent | FocusOutsideEvent]'
  },
  {
    'name': 'pointerDownOutside',
    'description': '<p>Event handler called when the a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\nCan be prevented.</p>\n',
    'type': '[event: PointerDownOutsideEvent]'
  },
  {
    'name': 'submit',
    'description': '<p>Event handler called when a value is submitted</p>\n',
    'type': '[value: string]'
  },
  {
    'name': 'update:modelValue',
    'description': '<p>Event handler called whenever the model value changes</p>\n',
    'type': '[value: string]'
  },
  {
    'name': 'update:state',
    'description': '<p>Event handler called when the editable field changes state</p>\n',
    'type': '[state: \'cancel\' | \'submit\' | \'edit\']'
  }
]" />

<SlotsTable :data="[
  {
    'name': 'isEditing',
    'description': '<p>Whether the editable field is in edit mode</p>\n',
    'type': 'boolean'
  },
  {
    'name': 'modelValue',
    'description': '<p>The value of the editable field</p>\n',
    'type': 'string | undefined'
  },
  {
    'name': 'isEmpty',
    'description': '<p>Whether the editable field is empty</p>\n',
    'type': 'boolean'
  }
]" />
