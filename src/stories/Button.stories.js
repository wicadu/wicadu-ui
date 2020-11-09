import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../atoms/Button';


export const Basic = () => (
  <>
    <Button>Click!</Button>
  </>
)

export const BackgroundColor = () => (
  <>
    <Button bgColor="blue">bgColor: blue</Button>
    <br />
    <br />
    <Button bgColor="red">bgColor: red</Button>
    <br />
    <br />
    <Button bgColor="red" color="white">
      color: white
    </Button>
    <br />
    <br />
    <Button bgColor="green" color="#fff">
      color: #fff
    </Button>
  </>
)

export const Sizes = () => (
  <>
    <Button fullWidth>fullWidth / 450px</Button>
    <br />
    <br />
    <div style={{ width: '450px' }}>
      <Button fullWidth>fullWidth / 450px</Button>
    </div>
    <br />
    <br />
    <div style={{ width: '150px' }}>
      <Button fullWidth>fullWidth / 150px</Button>
    </div>
  </>
)

export const Inverse = () => (
  <>
    <Button bgColor="blue" color="white">
      (no) inverse
    </Button>
    <br />
    <br />
    <Button inverse bgColor="blue" color="white">
      Inverse
    </Button>
  </>
)

export const AsTextLink = () => (
  <>
    <Button asTextLink bgColor="red" color="red">
      Icon Left
    </Button>
    <br />
    <br />
    <Button asTextLink bgColor="red" color="red">
      pagar cuota participacion Icon right
    </Button>
  </>
)

export default {
  title: 'Button',
  component: Basic
}
