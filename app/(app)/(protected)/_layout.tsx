import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@hooks'
import { MAIN_CONTAINER_BACKGROUND } from '@constants'
import { HeaderBackButton } from '@components'
import { getScreenTitle } from '@utils'

const Layout = () => {
  const data = useAuth()

  if (!data) {
    return <Redirect href="/login" />
  }

  return (
    <Stack
      screenOptions={({ route }) => ({
        title: getScreenTitle({ data, routeName: route.name }),
        headerShown: true,
        headerShadowVisible: false,
        headerStyle: { backgroundColor: MAIN_CONTAINER_BACKGROUND },
        headerLeft: ({ canGoBack }) => canGoBack && <HeaderBackButton />,
      })}
    />
  )
}

export default Layout
