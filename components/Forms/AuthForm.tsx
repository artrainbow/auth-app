import t from '@translations'
import React from 'react'
import { GradientButton } from '@components'
import { Input } from './Input'
// import { MessageBox } from './MessageBox'

export const AuthForm = ({
  username,
  password,
  errorFormValidation,
  errorServerValidation,
  setPassword,
  setUsername,
  signIn,
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
        secureTextEntry
        error={errorFormValidation.password}
        onChangeText={setPassword}
      />
      {/*{Boolean(errorServerValidation) && (*/}
      {/*  <MessageBox text={errorServerValidation} />*/}
      {/*)}*/}
      <GradientButton
        title={t.login}
        disabled={!username && !password}
        onPress={signIn}
      />
    </>
  )
}
