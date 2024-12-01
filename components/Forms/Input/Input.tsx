import React from 'react'
import { ErrorText } from './ErrorText'
import { InputBase } from './InputBase'

export const Input = ({
  value,
  label,
  placeholder,
  error,
  onChangeText,
}: {
  value: string
  label: string
  placeholder: string
  error: string
  onChangeText: (text: string) => void
}) => {
  return (
    <>
      <InputBase
        value={value}
        label={label}
        placeholder={placeholder}
        error={Boolean(error)}
        onChangeText={onChangeText}
      />
      {Boolean(error) ? <ErrorText text={error} /> : null}
    </>
  )
}
