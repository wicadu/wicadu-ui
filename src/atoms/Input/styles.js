import styled from 'styled-components';

const InputWrapper = styled.input`
  padding: 8px 16px;
  width: 100%;
  font-size: ${({ textSize }) => `${textSize}px`};
  height: ${({ size }) => `${size}px`};
  border: 1px solid ${({ borderColor }) => borderColor};
  ${({ rounded }) => rounded && `border-radius: ${rounded}px`}

  &:disabled,
  &[disabled] {
    background-color: #9c9a9f;
    cursor: not-allowed;
    color: #808080;
  }
`;

export default InputWrapper;
