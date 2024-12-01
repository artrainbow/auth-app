import { useState } from 'react'
import { LoginErrorState } from '@types'

export const useAuthForm = () => {
  const [username, setUsername] = useState('emilys')
  const [password, setPassword] = useState('emilyspass')
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
