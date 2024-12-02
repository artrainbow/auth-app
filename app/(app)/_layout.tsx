import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="(unprotected)" />
    <Stack.Screen name="(protected)" />
  </Stack>
)

export default Layout
