import React from 'react'
import { Redirect, Slot, Stack, useRouter } from 'expo-router'
import { useAuth } from '@hooks'

const Layout = () => {
  const data = useAuth()
  return Boolean(data) ? <Slot /> : <Redirect href="/login" />
}

export default Layout
