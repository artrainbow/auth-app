import React from 'react'
import { useRouter } from 'expo-router'
import { HeaderBackButton as RNHeaderBackButton } from '@react-navigation/elements'
import { HEADER_TINT_COLOR } from '@constants'

export const HeaderBackButton = () => {
  const router = useRouter()
  return (
    <RNHeaderBackButton tintColor={HEADER_TINT_COLOR} onPress={router.back} />
  )
}
