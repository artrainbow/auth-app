import { memo } from 'react'
import { ErrorText } from './ErrorText'
import { InputBase } from './InputBase'

type InputProps = {
  value: string
  label: string
  placeholder: string
  error: string
  onChangeText: (text: string) => void
}

export const Input = memo(
  ({ value, label, placeholder, error, onChangeText }: InputProps) => (
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
  ),
)
