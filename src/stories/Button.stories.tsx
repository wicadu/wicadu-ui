import React from 'react'

import styled from '@emotion/styled'

import Theme from '../hocs/Theme'
import Button from '../atoms/Button'

const Group = styled.div`
  margin-bottom: 25px;
`

const GroupItem = styled.div`
  margin-bottom: 10px;
`

export const Basic = () => (
  <Theme>
    <Button>Click me!</Button>
  </Theme>
)

export const Sizes = () => (
  <Theme>
    <GroupItem>
      <p>Small</p>
      <Button>Default (Small)</Button>
    </GroupItem>
    <GroupItem>
      <p>Medium</p>
      <Button size='medium'>Size medium</Button>
    </GroupItem>
    <GroupItem>
      <p>Large</p>
      <Button size='large'>Size large</Button>
    </GroupItem>
    <GroupItem>
      <p>FullWidth (Take 100% independent of the size property)</p>
      <Button fullWidth>Size fullWidth</Button>
    </GroupItem>
  </Theme>
)

export const Types = () => (
  <Theme>
    <GroupItem>
      <p>Primary</p>
      <Button type='primary'>Type: Primary</Button>
    </GroupItem>
    <GroupItem>
      <p>Ghost</p>
      <Button type='ghost'>Type: Ghost</Button>
    </GroupItem>
  </Theme>
)

export const Inverse = () => (
  <Theme>
    <GroupItem>
      <p>Primary inverse</p>
      <Button type='primary' inverse>Type: Primary</Button>
    </GroupItem>
    <GroupItem>
      <p>Ghost inverse</p>
      <Button type='ghost' inverse>Type: Ghost</Button>
    </GroupItem>
  </Theme>
)

export const Loading = () => (
  <Theme>
    <Group>
      <p>Sizes: </p>
      <GroupItem>
        <Button loading />
      </GroupItem>
      <GroupItem>
        <Button loading size='medium' />
      </GroupItem>
      <GroupItem>
        <Button loading size='large' />
      </GroupItem>
    </Group>

    <Group>
      <p>Types: </p>
      <GroupItem>
        <Button loading />
      </GroupItem>
      <GroupItem>
        <Button loading type='ghost' />
      </GroupItem>
      <GroupItem>
        <Button loading type='link' size='medium' />
      </GroupItem>
    </Group>

    <Group>
      <p>Inverse: </p>
      <GroupItem>
        <Button loading inverse>Is this default size</Button>
      </GroupItem>
      <GroupItem>
        <Button loading type='ghost' inverse>Is this default size</Button>
      </GroupItem>
    </Group>
  </Theme>
)


export default {
  title: 'Button',
  component: Basic
}
