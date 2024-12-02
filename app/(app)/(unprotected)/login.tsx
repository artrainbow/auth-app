import React from 'react'
import { useAuthQuery } from '@hooks'
import { AuthForm, RootContainer } from '@components'

const LoginScreen = () => {
  const {
    signIn,
    username,
    password,
    errorFormValidation,
    errorServerValidation,
    setUsername,
    setPassword,
  } = useAuthQuery()

  return (
    <RootContainer>
      <AuthForm
        username={username}
        password={password}
        errorFormValidation={errorFormValidation}
        errorServerValidation={errorServerValidation}
        setPassword={setPassword}
        setUsername={setUsername}
        signIn={signIn}
      />
    </RootContainer>
  )
}

export default LoginScreen
