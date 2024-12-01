import React from 'react'
import { Stack } from 'expo-router'
import { useAuth } from '@hooks'
import { HEADER_TINT_COLOR, MAIN_CONTAINER_BACKGROUND } from '@constants'

const Layout = () => {
  const { data } = useAuth()

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerBackButtonDisplayMode: 'minimal',
        headerBackTintColor: HEADER_TINT_COLOR,
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
        options={({ route }) => ({
          headerShown: true,
          title: data ? `${data.firstName} ${data.lastName}` : route.name,
        })}
      />
    </Stack>
  )
}

export default Layout
