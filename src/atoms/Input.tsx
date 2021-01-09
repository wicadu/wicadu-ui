import React from 'react'
import Form from '../hocs/Form'
import styled from '@emotion/styled'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  validations: PropTypes.object
}

type Props = InferProps<typeof propTypes>

const defaultProps = {
  type: 'text'
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

const WrapperInput = styled(Input)``

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default WrapperInput