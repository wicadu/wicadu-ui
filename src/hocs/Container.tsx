import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from '@emotion/styled'

const propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

const Container = ({ children, ...props }: Props) => {
  return <Div {...props}>{children}</Div>
}

const Div = styled.div`
  width: 90%;
  max-width: 1140px;
  height: 100%;
  position: relative;

  ${({ fluid }: Props) => fluid && `
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
  `}
`

Container.propTypes = propTypes

export default Container