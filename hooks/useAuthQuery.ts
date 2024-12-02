import { useCallback, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import { login } from '@actions'
import t from '@translations'
import type { LoginOutput } from '@types'
import { AUTH_QUERY_KEY } from '@constants'
import { useAuthForm } from './useAuthForm'

export const useAuthQuery = () => {
  const {
    username,
    password,
    errorFormValidation,
    setUsername,
    setPassword,
    setErrorFormValidation,
  } = useAuthForm()
  const router = useRouter()
  const queryClient = useQueryClient()
  const [errorServerValidation, setErrorServerValidation] = useState('')

  const handleError = (error: Error) => {
    setErrorServerValidation(error.message || t.default_server_error)
  }

  const handleSuccess = (data: LoginOutput) => {
    queryClient.setQueryData([AUTH_QUERY_KEY], data)
    router.replace({ pathname: 'profile' })
  }

  const mutation = useMutation(
    {
      mutationFn: login,
      onError: handleError,
      onSuccess: handleSuccess,
      retry: 0,
    },
    queryClient,
  )

  const handleSignIn = useCallback(() => {
    if (!username || !password) {
      setErrorFormValidation({
        username: !username ? t.username_ui_error : '',
        password: !password ? t.password_ui_error : '',
      })
    } else {
      setErrorFormValidation({ username: '', password: '' })
      mutation.mutate({ username, password })
    }
  }, [username, password])

  const handleSignOut = useCallback(() => {
    queryClient.removeQueries({ queryKey: [AUTH_QUERY_KEY] })
    router.replace({ pathname: 'login' })
  }, [])

  return {
    signIn: handleSignIn,
    signOut: handleSignOut,
    username,
    password,
    errorFormValidation,
    errorServerValidation,
    setUsername,
    setPassword,
  }
}
