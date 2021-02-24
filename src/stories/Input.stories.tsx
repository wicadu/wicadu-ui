import React from 'react'
import { State, Store } from '@sambego/storybook-state'

import Theme from '../hocs/Theme'
import Input from '../atoms/Input'

export const Basic = () => {
  const store = new Store({
    value: '',
  })

  return (
    <Theme>
      <div style={{ width: 185 }}>
        <State store={store}>
          <Input onChange={(event) => store.set({ value: event.target.value })} />
        </State>
      </div>
    </Theme>
  )
}


export default {
  title: 'Input',
  component: Basic
}
