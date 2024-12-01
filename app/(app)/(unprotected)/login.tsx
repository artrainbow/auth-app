import React from 'react'
import { useAuth } from '@hooks'
import { AuthForm, RootContainer } from '@components'

const LoginScreen: React.FC = () => {
  const {
    signIn,
    username,
    password,
    errorFormValidation,
    errorServerValidation,
    setUsername,
    setPassword,
  } = useAuth()

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
