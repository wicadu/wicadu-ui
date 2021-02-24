import React from 'react';
import PropTypes, { InferProps } from 'prop-types'
import styled from '@emotion/styled';

const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  icon: PropTypes.string
}

const defaultProps = {
  size: 25,
  color: '#000',
  icon: null
}

type Props = InferProps<typeof propTypes>

const LoadIcon = ({ size, color, icon, ...props }: Props) => {
  return (
    <Icon
      {...props}
      className={icon}
      size={size}
      color={color}
    />
  );
};

const Icon = styled.i`
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color }) => `${color} !important`};
`;

LoadIcon.propTypes = propTypes
LoadIcon.defaultProps = defaultProps

export default LoadIcon;
