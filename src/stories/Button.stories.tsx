import React from 'react'

import Theme from '../hocs/Theme'
import Button from '../atoms/Button'

export const Basic = () => (
  <Theme>
    <Button>Click me!</Button>
  </Theme>
)

export const Types = () => (
  <Theme>
    <div>
      <p>Primary</p>
      <Button type='primary'>Type: Primary</Button>
    </div>
    <div>
      <p>Ghost</p>
      <Button type='ghost'>Type: Ghost</Button>
    </div>
  </Theme>
)

export const Inverse = () => (
  <Theme>
    <div>
      <p>Primary inverse</p>
      <Button type='primary' inverse>Type: Primary</Button>
    </div>
    <div>
      <p>Ghost inverse</p>
      <Button type='ghost' inverse>Type: Ghost</Button>
    </div>
  </Theme>
)


export default {
  title: 'Button',
  component: Basic
}
