import React from 'react'
import t from '@translations'
import { GradientButton } from '../Buttons/GradientButton'
import { Input } from './Input'
import { MessageBox } from './MessageBox'
import { LoginErrorState } from '@types'

export const AuthForm = ({
  username,
  password,
  errorFormValidation,
  errorServerValidation,
  setPassword,
  setUsername,
  signIn,
}: {
  username: string
  password: string
  errorFormValidation: LoginErrorState
  errorServerValidation: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  setUsername: React.Dispatch<React.SetStateAction<string>>
  signIn: () => void
}) => {
  return (
    <>
      <Input
        value={username}
        label={t.username_label}
        placeholder={t.username_placeholder}
        error={errorFormValidation.username}
        onChangeText={setUsername}
      />
      <Input
        value={password}
        label={t.password_label}
        placeholder={t.password_placeholder}
        // @ts-ignore
        secureTextEntry
        error={errorFormValidation.password}
        onChangeText={setPassword}
      />
      {Boolean(errorServerValidation) && (
        <MessageBox text={errorServerValidation} />
      )}
      <GradientButton
        title={t.login}
        disabled={!username && !password}
        onPress={signIn}
      />
    </>
  )
}
