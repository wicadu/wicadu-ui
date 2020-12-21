import React from 'react'
import PropTypes from 'prop-types'
// styles
import Wrapper from './styles'

const propTypes = {
  asTextLink: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  dataset: PropTypes.string,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  inverse: PropTypes.bool,
  color: PropTypes.string,
  width: PropTypes.number,
  padding: PropTypes.string,
  margin: PropTypes.string,
}

const defaultProps = {
  onClick() {},
  asTextLink: false,
  className: '',
  disabled: false,
  datasets: null,
  bgColor: '#5430ff',
  inverse: false,
  width: 'auto',
  color: 'white',
  padding: '0',
  margin: '0',
}

const Button = (props) => {
  function onClickHandle(event) {
    const { onClick, disabled } = props

    if (!disabled) {
      onClick(event)
    }
  }

  const {
    asTextLink,
    className,
    disabled,
    children,
    dataset,
    inverse,
    bgColor,
    width,
    color,
    padding,
    margin,
  } = props

  return (
    <Wrapper
      asTextLink={asTextLink}
      className={className}
      disabled={disabled}
      onClick={onClickHandle}
      dataset={dataset}
      inverse={inverse}
      bgColor={bgColor}
      width={width}
      color={color}
      padding={padding}
      margin={margin}
      type="button"
    >
      {children}
    </Wrapper>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
