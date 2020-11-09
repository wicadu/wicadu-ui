import React from 'react'
import PropTypes from 'prop-types'
// styles
import InputWrapper from './styles'

const propTypes = {
  placeholder: PropTypes.string,
  borderColor: PropTypes.string,
  className: PropTypes.string,
  fontSize: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  rounded: PropTypes.number,
  dataSet: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.string,
  type: PropTypes.oneOf(['password', 'number', 'text']),
  height: PropTypes.number,
  name: PropTypes.string,
}

const defaultProps = {
  placeholder: '',
  borderColor: 'transparent',
  className: '',
  disabled: false,
  value: '',
  fontSize: 16,
  rounded: 15,
  dataSet: '',
  type: 'text',
  height: 15,
  name: null,
}

const Input = (props) => {
  function onChangeHandle(event) {
    event.persist()
    const { disabled, onChange } = props

    if (!disabled) {
      onChange(event)
    }
  }

  const {
    placeholder,
    borderColor,
    className,
    disabled,
    fontSize,
    dataSet,
    rounded,
    value,
    height,
    type,
    name,
  } = props

  return (
    <InputWrapper
      borderColor={borderColor}
      placeholder={placeholder}
      className={className}
      onChange={onChangeHandle}
      fontSize={fontSize}
      disabled={disabled}
      data-id={dataSet}
      rounded={rounded}
      value={value}
      name={name}
      type={type}
      height={height}
    />
  )
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
