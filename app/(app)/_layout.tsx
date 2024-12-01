import React from 'react'
import { Stack } from 'expo-router'
import { HEADER_TINT_COLOR, MAIN_CONTAINER_BACKGROUND } from '@constants'
import { useScreenTitle } from '@hooks'
import { getScreenOptions } from '@utils'
import { Route } from '@types'

const Layout = () => {
  const { title } = useScreenTitle()

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerBackButtonDisplayMode: 'minimal',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: MAIN_CONTAINER_BACKGROUND,
        },
        headerTintColor: HEADER_TINT_COLOR,
      }}
    >
      <Stack.Screen name="(unprotected)" />
      <Stack.Screen
        name="(protected)"
        options={({ route }) =>
          getScreenOptions({
            route: route as Route,
            title,
            options: { headerShown: true },
          })
        }
      />
    </Stack>
  )
}

export default Layout
