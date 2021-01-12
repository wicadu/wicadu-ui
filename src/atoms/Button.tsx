import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import PropTypes, { InferProps } from 'prop-types'
import Spin from './Spin'

enum htmlType {
  button = 'button',
  submit = 'submit',
  reset = 'reset'
}

enum buttonType {
  link = 'link'
}

const propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  htmlType: PropTypes.oneOf<htmlType>([htmlType.button, htmlType.submit, htmlType.reset]),
  type: PropTypes.oneOf<buttonType>([buttonType.link]),
  loading: PropTypes.bool,
  disabled: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  htmlType: htmlType.button,
  onClick () {}
}

function Button ({ className, children, htmlType, loading, disabled, ...props }: Props) {
  const isDisabled = useMemo(() => loading || disabled, [loading, disabled])

  return (
    <button className={className} {...props} type={htmlType} disabled={isDisabled}>{loading ? <Spin /> : children}</button>
  )
}

const WrapperButton = styled(Button)`
  & {
    outline: none;

    ${({ type }) => type === buttonType.link && `
      border: 0;
      background-color: transparent;
      color: blue;
    `}
  }
`

Button.propTypes = propTypes
WrapperButton.defaultProps = defaultProps

Button.htmlType = htmlType

export default WrapperButton