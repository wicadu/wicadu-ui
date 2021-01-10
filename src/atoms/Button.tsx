import React from 'react'
import styled from '@emotion/styled'
import PropTypes, { InferProps } from 'prop-types'

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
  onClick: PropTypes.func.isRequired,
  htmlType: PropTypes.oneOf<htmlType>([htmlType.button, htmlType.submit, htmlType.reset]),
  type: PropTypes.oneOf<buttonType>([buttonType.link])
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  htmlType: htmlType.button
}

function Button ({ className, children, htmlType, onClick, ...props }: Props) {
  return <button className={className} onClick={onClick} {...props} type={htmlType}>{children}</button>
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