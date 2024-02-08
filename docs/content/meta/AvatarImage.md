<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component',
    'required': false,
    'default': '\'img\''
  },
  {
    'name': 'asChild',
    'description': '<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href=\'https://www.radix-vue.com/guides/composition.html\'>Composition</a> guide for more details.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'src',
    'description': '',
    'type': 'string',
    'required': true
  }
]" />

<EmitsTable :data="[
  {
    'name': 'loadingStatusChange',
    'description': '<p>A callback providing information about the loading status of the image. &lt;br&gt;\nThis is useful in case you want to control more precisely what to render as the image is loading.</p>\n',
    'type': '[value: ImageLoadingStatus]'
  }
]" />
