import React, { useMemo } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from '@emotion/styled'

import Form from '../hocs/Form'
import Colors from '../constants/colors'

enum inputType {
  primary = 'primary',
}

enum inputSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

const propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  htmlType: PropTypes.string,
  name: PropTypes.string.isRequired,
  validations: PropTypes.object,
  size: PropTypes.oneOf<inputSizes>([
    inputSizes.small,
    inputSizes.medium,
    inputSizes.large
  ]),
  fullWidth: PropTypes.bool,
  type: PropTypes.oneOf<inputType>([
    inputType.primary,
  ])
}

type Props = InferProps<typeof propTypes>

const defaultProps = {
  htmlType: 'text',
  size: inputSizes.small,
  type: inputType.primary
}

function Input ({ label, name, htmlType, ...props }: Props) {
  const { register, errors } = Form.useForm()
  const errorMessage = useMemo(() => errors?.[name]?.message, [errors, name])

  return (
    <Wrapper {...props} error={Boolean(errorMessage)}>
      {label && <label htmlFor={name}>{label}</label>}
      <input {...props} ref={register} id={name} name={name} type={htmlType} />
       {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & {
    display: grid;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      display: none;
      -webkit-appearance: none;
      margin: 0;
    }

    input[type=number] {
      -moz-appearance: textfield;
    }

    textarea:focus, input:focus {
      outline: none;
      box-shadow: 0 0 1px 1px ${() => Colors.lightGray};
    }

    input {
      border-radius: 5px;
      padding: 5px 10px;

      ${({ size, fullWidth }) => {
        if (size === inputSizes.small) return `
          height: 35px;
          width: ${fullWidth ? '100%' : '160px'};
        `
        if (size === inputSizes.medium) return `
          height: 42px;
          width: ${fullWidth ? '100%' : '240px'};
        `
        if (size === inputSizes.large) return `
          height: 50px;
          width: ${fullWidth ? '100%' : '300px'};
        `
      }}

      ${({ type }) => {
        if (type === inputType.primary) return `
          border: none;
        `
      }}

      ${({ error }) => error && `
          border: 1px solid ${Colors.error};
          border-radius: 5px;
      `}
    }
  }
`

const ErrorMessage = styled.small`
  & {
    color: ${Colors.error};
    text-align: end;
    padding: 0 5px;
  }
`

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
