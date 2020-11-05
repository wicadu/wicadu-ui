import React from 'react';
import PropTypes from 'prop-types';
// styles
import Wrapper from './styles';

const Button = (props) => {
  function onClickHandle(event) {
    const { onClick, disabled } = props;

    if (!disabled) {
      onClick(event);
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
  } = props;

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
      type="button"
    >
      {children}
    </Wrapper>
  );
};

Button.propTypes = {
  asTextLink: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  iconRight: PropTypes.node,
  iconLeft: PropTypes.node,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  dataset: PropTypes.string,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  inverse: PropTypes.bool,
  color: PropTypes.string,
  width: PropTypes.number,
};

Button.defaultProps = {
  onClick() {},
  asTextLink: false,
  fullWidth: false,
  className: '',
  iconRight: null,
  disabled: false,
  datasets: null,
  iconLeft: null,
  bgColor: '',
  inverse: false,
  width: 0,
  color: '',
};

export default Button;
