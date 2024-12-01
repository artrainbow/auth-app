import { useState } from 'react'
import { LoginErrorState } from '@types'

export const useAuthForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorFormValidation, setErrorFormValidation] =
    useState<LoginErrorState>({
      username: '',
      password: '',
    })

  return {
    username,
    password,
    errorFormValidation,
    setUsername,
    setPassword,
    setErrorFormValidation,
  }
}
