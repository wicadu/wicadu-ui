import React from 'react'
import Form from '../hocs/Form'
import styled from '@emotion/styled'
import PropTypes, { InferProps } from 'prop-types'

enum inputSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

const propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  validations: PropTypes.object,
  size: PropTypes.oneOf<inputSizes>([
    inputSizes.small,
    inputSizes.medium,
    inputSizes.large
  ]),
  fullWidth: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

const defaultProps = {
  type: 'text',
  size: inputSizes.small,
}

function Input ({ className, label, name, ...props }: Props) {
  const { register, errors } = Form.useForm()

  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <div>
        <input ref={register} id={name} name={name} {...props} />
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
    }
  }
`

Input.propTypes = propTypes
WrapperInput.defaultProps = defaultProps

export default WrapperInput
