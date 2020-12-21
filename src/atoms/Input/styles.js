import styled from 'styled-components'

const InputWrapper = styled.input`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  width: 100%;
  height: ${({ height }) => `${height}px`};
  padding: 20px 17px;
  margin: 10px;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: ${({ rounded }) => `${rounded}px`};
  outline: none;

  &:disabled,
  &[disabled] {
    background-color: #9c9a9f;
    cursor: not-allowed;
    color: #808080;
  }
`

export default InputWrapper
