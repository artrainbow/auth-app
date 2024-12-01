import { AUTH_CACHE } from '@constants'
import { LoginOutput } from '@types'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import { login } from '@actions'
import { useAuthForm } from './useAuthForm'

export const useAuth = () => {
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

  const query = useQuery<LoginOutput, Error, LoginOutput>(
    {
      queryKey: ['auth', { username, password }],
      queryFn: () => login({ username, password }),
      enabled: false,
      staleTime: 0,
      retry: 0,
      gcTime: AUTH_CACHE,
    },
    queryClient,
  )

  const { isPending, isError, isSuccess, data, refetch, error } = query

  const handleSignIn = () => {
    if (!username || !password) {
      setErrorFormValidation({
        username: !username ? 'Username is required' : '',
        password: !password ? 'Password is required' : '',
      })
    } else {
      setErrorFormValidation({ username: '', password: '' })
      refetch()
        .then(res => {
          if (res.isSuccess && res.data) {
            queryClient.setQueryData(['auth', { username, password }], res.data)
            router.replace({ pathname: 'profile' })
          } else if (res.isError) {
            setErrorServerValidation(
              res.error?.message || 'Network response was not ok',
            )
          } else {
            setErrorServerValidation('Network response was not ok')
          }
        })
        .catch(error => {
          setErrorServerValidation(
            error?.message || 'Network response was not ok',
          )
        })
    }
  }

  const handleSignOut = () => {
    queryClient.removeQueries({ queryKey: ['auth', { username, password }] })
    router.replace({ pathname: 'login' })
  }

  return {
    auth: isSuccess,
    signIn: handleSignIn,
    signOut: handleSignOut,
    data,
    username,
    password,
    errorFormValidation,
    errorServerValidation,
    setUsername,
    setPassword,
  }
}
