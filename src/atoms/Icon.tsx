import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from '@emotion/styled'

const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  name: PropTypes.string
}

const defaultProps = {
  size: 25,
  name: null
}

type Props = InferProps<typeof propTypes>

const Icon = ({ name: className, ...props }: Props) => {
  return <I {...props} className={className} />
}

const I = styled.i`
  font-size: ${({ size }) => `${size}px`};
  color: ${({ theme, color }) => `${color || theme.colors.black} !important`};
`

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

export default Icon
