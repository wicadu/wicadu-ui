import React from 'react'
import styled from '@emotion/styled'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  className: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
}

type Props = InferProps<typeof propTypes>

const defaultProps = {
  width: 40,
  height: 40,
  color: 'black'
}

function Spin ({ className }: Props) {
  return (
    <div className={className}>
      <div className='double-bounce1' />
      <div className='double-bounce2' />
    </div>
  )
}

const WrapperSpin = styled(Spin)`
  & {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    position: relative;

    .double-bounce1,
    .double-bounce2 {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: ${({ color }) => color};
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      
      -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
      animation: sk-bounce 2.0s infinite ease-in-out;
    }
    
    .double-bounce2 {
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }
    
    @-webkit-keyframes sk-bounce {
      0%, 100% { -webkit-transform: scale(0.0) }
      50% { -webkit-transform: scale(1.0) }
    }
    
    @keyframes sk-bounce {
      0%, 100% { 
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
      } 50% { 
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
    }
  }
`

Spin.propTypes = propTypes
WrapperSpin.defaultProps = defaultProps

export default WrapperSpin
