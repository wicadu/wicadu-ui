import React from 'react'
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

function Input ({ className, label, name, htmlType, ...props }: Props) {
  const { register, errors } = Form.useForm()

  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <div>
        <input {...props} ref={register} id={name} name={name} type={htmlType} />
        {errors[name]?.message && <span>{errors[name].message}</span>}
      </div>
    </div>
  )
}

const WrapperInput = styled(Input)`
  & {
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
      border-radius: 10px;
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
    }
  }
`

Input.propTypes = propTypes
WrapperInput.defaultProps = defaultProps

export default WrapperInput
