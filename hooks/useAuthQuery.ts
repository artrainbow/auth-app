import { useMutation } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import { login } from '@actions'
import t from '@translations'
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

  const mutation = useMutation(
    {
      mutationFn: login,
      onError: error => {
        setErrorServerValidation(error.message || t.default_server_error)
      },
      onSuccess: data => {
        queryClient.setQueryData(['auth'], data)
        router.replace({ pathname: 'profile' })
      },
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
    queryClient.removeQueries({ queryKey: ['auth'] })
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
