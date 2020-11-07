import React from 'react';
import PropTypes from 'prop-types';
// styles
import InputWrapper from './styles';

const Input = (props) => {
  function onChangeHandle(event) {
    event.persist();
    const { disabled, onChange } = props;

    if (!disabled) {
      onChange(event);
    }
  }

  const {
    placeholder,
    borderColor,
    className,
    disabled,
    textSize,
    dataSet,
    rounded,
    value,
    size,
    type,
    name,
    id,
  } = props;

  return (
    <InputWrapper
      borderColor={borderColor}
      placeholder={placeholder}
      className={className}
      onChange={onChangeHandle}
      textSize={textSize}
      disabled={disabled}
      data-id={dataSet}
      rounded={rounded}
      value={value}
      name={name}
      type={type}
      size={size}
      id={id}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  borderColor: PropTypes.string,
  className: PropTypes.string,
  textSize: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  rounded: PropTypes.number,
  dataSet: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.string,
  type: PropTypes.oneOf(['password', 'number', 'email', 'color', 'text', 'date']),
  size: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  borderColor: '',
  className: '',
  disabled: false,
  value: '',
  textSize: 16,
  rounded: 0,
  dataSet: '',
  type: 'text',
  size: 24,
  id: '',
  name: null,
};

export default Input;
