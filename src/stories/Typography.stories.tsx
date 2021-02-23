import React from 'react'

import Typography from '../atoms/Typography'
import Theme from '../hocs/Theme'

export const Basic = () => (
  <Theme>
    <Typography>Defaul render like as tag 'p'</Typography>
  </Theme>
)

export const Types = () => (
  <Theme>
    <Typography type='title'>Title: Should be used for very important titles such as Pages Title</Typography>
    <Typography type='title-2'>Title-2: Should be used for important titles such as section headings</Typography>
    <Typography type='title-3'>Title-3: Should be used for a some article headers.</Typography>
    <Typography type='title-4'>Title-4: Should use for unimportant headers.</Typography>
    <Typography>Default: Should use for almost all paragraphs.</Typography>
    <Typography type='description'>Description: It's like as default but with different color</Typography>
  </Theme>
)

export default {
  title: 'Typography',
  component: Basic
}
