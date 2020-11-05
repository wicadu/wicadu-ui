import styled from 'styled-components';
import { darken } from 'polished';

const Wrapper = styled.button`
  border-radius: 4px;
  line-height: 24px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  height: 48px;
  border: 0;
  
  ${({ asTextLink }) =>
    !asTextLink &&
    `
    padding: 12px 24px;
    filter: drop-shadow(0 2px 2px rgba(187, 188, 188, 0.35));
  `}

  ${({ fullWidth, width }) =>
    fullWidth ? 'width: 100%;' : `width: ${width ? `${width}px;` : 'auto;'}`}

  ${({ bgColor, asTextLink, inverse, color }) => {
    return inverse
      ? `
        background-color: ${asTextLink ? 'transparent' : color};
        ${!asTextLink && `border: 1px solid ${bgColor};`}
        color: ${bgColor};
        path {
          fill: ${bgColor};
        }
        `
      : `
        background-color: ${asTextLink ? 'transparent' : bgColor};
        color: ${color};
      `;
  }}

  &:hover {
    ${({ bgColor, color, inverse, asTextLink }) => {
      return inverse
        ? `
        ${bgColor && !asTextLink && `background-color: ${darken(0.08, color)};`}
        ${color && `color: ${darken(0.06, bgColor)};`}
      `
        : `
        ${bgColor && !asTextLink && `background-color: ${darken(0.08, bgColor)};`}
        ${color && `color: ${darken(0.06, color)};`}
      `;
    }}
  }

  &:disabled,
  &[disabled] {
    background-color: #d6d0d5;
    cursor: not-allowed;
  }
`;

export default Wrapper;
