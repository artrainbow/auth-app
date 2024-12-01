import React from 'react'
import { Redirect, Slot } from 'expo-router'
import { useAuth } from '@hooks'

const Layout = () => {
  const { auth } = useAuth()

  return auth ? <Slot /> : <Redirect href="/login" />
}

export default Layout
