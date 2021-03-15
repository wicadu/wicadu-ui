import React, { useMemo } from 'react'
import PropTypes, { InferProps } from 'prop-types'

import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

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
  fullWidth: PropTypes.bool,
  underline: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  type: buttonType.primary,
  size: buttonSizes.small,
  htmlType: htmlType.button,
  onClick () {}
}

function Button ({ children, htmlType, loading, disabled, inverse, type, ...props }: Props) {
  const { colors } = useTheme()

  const isDisabled = useMemo(() => loading || disabled, [loading, disabled])
  const spinnerColor = useMemo(() => ({
    primary: inverse ? 'primary' : 'white',
    ghost: inverse ? 'darkGray' : 'white',
    link: 'primary',
  }), [colors, type, inverse])

  return (
    <button {...props} type={htmlType} disabled={isDisabled}>
      {loading ? <Spin color={colors[spinnerColor[type]]} /> : children}
    </button>
  )
}

const WrapperButton = styled(Button)`
  & {
    font-family: 'Cabin', sans-serif;
    font-weight: 600;
    font-size: 18px;
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
        width: ${fullWidth ? '100%' : '160px'};
        height: 35px;
      `
      if (size === buttonSizes.medium) return `
        width: ${fullWidth ? '100%' : '240px'};
        height: 42px;
      `
      if (size === buttonSizes.large) return `
        width: ${fullWidth ? '100%' : '300px'};
        height: 50px;
        font-size: 18px;
      `
    }}

    ${({ type, inverse, underline, theme }) => {
      const { colors } = theme

      if (type === buttonType.primary) return `
        background-color: ${inverse ? colors.white : colors.primary};
        color: ${inverse ? colors.primary : colors.white};
        border: 1px solid ${colors.primary};
      `

      if (type === buttonType.ghost) return `
        background-color: ${inverse ? colors.white : colors.darkGray};
        color: ${inverse ? colors.darkGray : colors.white};
        border: 1px solid ${colors.darkGray};
      `

      if (type === buttonType.link) return `
        border: 0;
        background-color: transparent;
        color: ${colors.primary};
        padding: 5px 0;
        width: auto;
        text-decoration: ${underline ?  'underline' : 'none'};
      `
    }}

    ${({ disabled, type, theme }) => {
      const { colors } = theme

      if (disabled && type === buttonType.link) return `
        color: ${colors.darkGray};
      `

      if (disabled) return `
        background-color: ${colors.lightGray};
        border: 1px solid ${colors.primary};
        color: ${colors.primary};
      `
    }}
  }
`

Button.propTypes = propTypes
WrapperButton.defaultProps = defaultProps

Button.htmlType = htmlType

export default WrapperButton
