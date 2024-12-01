import React from 'react'
import { useAuth } from '@hooks'
import { RootContainer, LightButton } from '@components'
import t from '@translations'

const ProfileScreen = () => {
  const { signOut } = useAuth()

  return (
    <RootContainer position="top">
      <LightButton title={t.logout} onPress={signOut} />
    </RootContainer>
  )
}

export default ProfileScreen
