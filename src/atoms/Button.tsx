import React, { useMemo } from 'react'
import PropTypes, { InferProps } from 'prop-types'

import styled from '@emotion/styled'

import Spin from './Spin'

enum htmlType {
  button = 'button',
  submit = 'submit',
  reset = 'reset'
}

enum buttonType {
  link = 'link',
  primary = 'primary',
  ghost = 'ghost'
}

enum buttonSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

const propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  htmlType: PropTypes.oneOf<htmlType>([
    htmlType.button,
    htmlType.submit,
    htmlType.reset
  ]),
  type: PropTypes.oneOf<buttonType>([
    buttonType.link,
    buttonType.primary,
    buttonType.ghost
  ]),
  size: PropTypes.oneOf<buttonSizes>([
    buttonSizes.small,
    buttonSizes.medium,
    buttonSizes.large
  ]),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  asTextLink: PropTypes.bool,
  inverse: PropTypes.bool,
  fullWidth: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  type: buttonType.primary,
  size: buttonSizes.small,
  htmlType: htmlType.button,
  onClick () {}
}

function Button ({ children, htmlType, loading, disabled, ...props }: Props) {
  const isDisabled = useMemo(() => loading || disabled, [loading, disabled])

  return (
    <button {...props} type={htmlType} disabled={isDisabled}>{loading ? <Spin /> : children}</button>
  )
}

const WrapperButton = styled(Button)`
  & {
    font-family: 'Cabin', sans-serif;
    padding: 5px 20px;
    border-radius: 10px;
    outline: none;
    cursor: pointer;

    ${({ loading }) => loading && `
      display: flex;
      justify-content: center;
      align-items: center;

      & > div {
        width: 18px;
        height: 18px;
      }
    `}

    ${({ size, fullWidth }) => {
      if (size === buttonSizes.small) return `
        height: 35px;
        width: ${fullWidth ? '100%' : '160px'};
      `
      if (size === buttonSizes.medium) return `
        height: 42px;
        width: ${fullWidth ? '100%' : '240px'};
      `
      if (size === buttonSizes.large) return `
        height: 50px;
        width: ${fullWidth ? '100%' : '300px'};
      `
    }}

    ${({ type, inverse, theme }) => {
      if (type === buttonType.primary) return `
        background-color: ${!inverse ? theme.colors.primary : 'white'};
        color: ${!inverse ? 'white': theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
      `

      if (type === buttonType.ghost) return `
        background-color: ${!inverse ? theme.colors.darkGray : 'white'};
        color: ${!inverse ? 'white': theme.colors.darkGray};
        border: 1px solid ${theme.colors.darkGray};
      `

      if (type === buttonType.link) return `
        border: 0;
        background-color: transparent;
        color: ${theme.colors.primary};
        padding: 5px 0;
        width: auto;
      `
    }}

    ${({ disabled, theme }) =>
      disabled && `
        background-color: ${theme.colors.lightGray};
        border: 1px solid ${theme.colors.primary};
        color: ${theme.colors.primary};
      `
    }
  }
`

Button.propTypes = propTypes
WrapperButton.defaultProps = defaultProps

Button.htmlType = htmlType

export default WrapperButton
