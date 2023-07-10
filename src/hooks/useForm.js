import { useState } from 'react'

export function useFormControl(initialValues = {}, formValidations = {}) {
  const [formValues, setFormValues] = useState(initialValues)

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleResetForm = () => {
    setFormValues(initialValues)
  }

  return { ...formValues, formValues, handleInputChange, handleResetForm }
}
