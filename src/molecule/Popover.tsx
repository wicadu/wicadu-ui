import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from '@emotion/styled'

import useOutsideClick from '../hooks/useOutsideClick'

const propTypes = {
  elevation: PropTypes.number,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top']),
  content: PropTypes.node,
  extraSpaceBetween: PropTypes.number,
  width: PropTypes.number,
  minHeight: PropTypes.number,
  maxHeight: PropTypes.number
}

type Props = InferProps<typeof propTypes>

function Popover ({ children, content, extraSpaceBetween, ...props }: Props) {
  const [isShow, setShow] = useState<boolean>(false)

  const [contentHeight, setContentHeight] = useState<number>(0)
  const [contentWidth, setContentWidth] = useState<number>(0)

  const toggleVisibilityHandle = useCallback(() => {
    console.log(!isShow)

    setShow(!isShow)
  }, [isShow, setShow])

  const referrence = useRef(null)
  useOutsideClick(referrence, toggleVisibilityHandle, isShow)

  useEffect(() => {
    const wrapperContent = document.getElementById('wrapper-content-popover')

    setContentHeight(wrapperContent?.clientHeight)
    setContentWidth(wrapperContent?.clientWidth)
  }, [isShow])

  useEffect(() => {})

  return (
    <Wrapper ref={referrence}>
      {React.cloneElement(children, { onClick: toggleVisibilityHandle })}
      {isShow &&
        <WrapperContentPopover
          {...props}
          currentHeight={contentHeight + extraSpaceBetween}
          currentWidth={contentWidth}
          id='wrapper-content-popover'
        >
          {content}
        </WrapperContentPopover>
      }
    </Wrapper>
  )
}

export const WrapperContentPopover = styled.div`
  position: absolute;
  padding: 10px 15px;
  z-index: ${({ elevation }) => elevation};
  background-color: white;
  filter: drop-shadow(0px 6px 9px rgba(0,0,0,.34));
  border-radius: 8px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.colors.darkGray};
    border: 4px solid transparent;
    border-radius: 8px;
    background-clip: padding-box;  
  }

  ::-webkit-scrollbar {
    width: 12px;
  }


  ${({ minHeight, maxHeight, width }) => `
    ${width ? `width: ${width}px;` : 'width: auto;'}

    ${minHeight ? `min-height: ${minHeight}px;` : ''}
    ${maxHeight ? `max-height: ${maxHeight}px;` : ''}
  `}

  ${({ position, currentHeight, currentWidth }) => {

    if (position === 'bottom') {
      return `bottom: -${currentHeight}px; left: -${currentWidth/6.5}px;`
    }

    return ''
  }}  
`

const Wrapper = styled.div`
  position: relative;
`

Popover.propTypes = propTypes

Popover.defaultProps = {
  elevation: 1,
  position: 'bottom',
  content: null,
  extraSpaceBetween: 0,
  width: 0
}

export default Popover
