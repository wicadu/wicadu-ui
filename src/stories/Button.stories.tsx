import React from 'react'
import Button from '../atoms/Button'

export const Basic = () => (
  <>
    <Button>Click me!</Button>
  </>
)

export const Types = () => (
  <>
    <div>
      <p>Primary</p>
      <Button type='primary'>Type: Primary</Button>
    </div>
    <div>
      <p>Ghost</p>
      <Button type='ghost'>Type: Ghost</Button>
    </div>
  </>
)

export const Inverse = () => (
  <>
    <div>
      <p>Primary inverse</p>
      <Button type='primary' inverse>Type: Primary</Button>
    </div>
    <div>
      <p>Ghost inverse</p>
      <Button type='ghost' inverse>Type: Ghost</Button>
    </div>
  </>
)


export default {
  title: 'Button',
  component: Basic
}
