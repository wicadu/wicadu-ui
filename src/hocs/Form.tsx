import React, { useCallback } from 'react'
import { useForm, useWatch, FormProvider, useFormContext } from 'react-hook-form'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired,
  opts: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  opts: {},
  onSubmit () {}
}

function Form ({ children, opts, onSubmit }: Props) {
  const methods = useForm<any>(opts)

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

Form.propTypes = propTypes
Form.defaultProps = defaultProps

Form.useForm = useFormContext
Form.useWatch = useWatch

export default Form
