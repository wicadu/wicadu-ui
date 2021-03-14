import React from 'react'

import styled from '@emotion/styled'
import Icon from './Icon'

function Notification () {
  return (
    <Wrapper>
      <Icon name='far fa-bell' />        
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & {
    cursor: pointer;
    transition: 0.5s;
    padding: 8px 12px;
    border: none;
    border-radius: 50px;
    margin: 0;
  }

  &:hover {
    background-color: ${({ theme}) => theme.colors.white}
  }
`

export default Notification
