import React from 'react'
import { State, Store } from '@sambego/storybook-state'
import Input from '../atoms/Input'

export const Basic = () => {
  const store = new Store({
    value: '',
  })

  return (
    <div style={{ width: 300 }}>
      <State store={store}>
        <Input onChange={(event) => store.set({ value: event.target.value })} />
      </State>
    </div>
  )
}

export const BoxSize = () => {
  const store = new Store({
    value: '',
  })

  return (
    <div style={{ width: 300 }}>
      <State store={store}>
        <Input
          placeholder='Type something!'
          onChange={(event) => store.set({ value: event.target.value })}
          key={1}
        />
        <br />
        <Input
          placeholder='Type something!'
          onChange={(event) => store.set({ value: event.target.value })}
          key={2}
        />
        <br />
        <Input
          placeholder='Type something!'
          onChange={(event) => store.set({ value: event.target.value })}
          key={3}
        />
      </State>
    </div>
  )
}

export const TextSize = () => {
  const store = new Store({
    value: '',
  })

  return (
    <div style={{ width: 300 }}>
      <State store={store}>
        <Input
          placeholder='Type something!'
          onChange={(event) => store.set({ value: event.target.value })}
          key={4}
        />
        <br />
        <Input
          placeholder='Type something!'
          onChange={(event) => store.set({ value: event.target.value })}
          key={5}
        />
        <br />
        <Input
          placeholder='Type something!'
          onChange={(event) => store.set({ value: event.target.value })}
          key={6}
        />
      </State>
    </div>
  )
}

export const Border = () => {
  const store = new Store({
    value: '',
  })

  return (
    <div style={{ width: 300 }}>
      <State store={store}>
        <Input
          placeholder='Type something!'
          borderColor='gold'
          rounded={5}
          onChange={(event) => store.set({ value: event.target.value })}
          key={7}
        />
        <br />
        <Input
          placeholder='Type something!'
          borderColor='blue'
          rounded={8}
          onChange={(event) => store.set({ value: event.target.value })}
          key={8}
        />
        <br />
        <Input
          placeholder='Type something!'
          borderColor='green'
          rounded={12}
          onChange={(event) => store.set({ value: event.target.value })}
          key={9}
        />
      </State>
    </div>
  )
}

export default {
  title: 'Input',
  component: Basic
}
