import React from 'react'
import { useAuthQuery } from '@hooks'
import { RootContainer, LightButton } from '@components'
import t from '@translations'

const ProfileScreen = () => {
  const { signOut } = useAuthQuery()

  return (
    <RootContainer position="top">
      <LightButton title={t.logout} onPress={signOut} />
    </RootContainer>
  )
}

export default ProfileScreen
