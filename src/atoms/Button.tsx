import React from 'react'
import styled from '@emotion/styled'
import PropTypes, { InferProps } from 'prop-types'

enum htmlType {
  button = 'button',
  submit = 'submit',
  reset = 'reset'
}

const propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  htmlType: PropTypes.oneOf<htmlType>([htmlType.button, htmlType.submit, htmlType.reset])
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  htmlType: htmlType.button
}

function Button ({ className, children, htmlType, onClick, ...props }: Props) {
  return <button className={className} type={htmlType} onClick={onClick} {...props}>{children}</button>
}

const WrapperButton = styled(Button)``

Button.propTypes = propTypes
Button.defaultProps = defaultProps

Button.htmlType = htmlType

export default WrapperButton