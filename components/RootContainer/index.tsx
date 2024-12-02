import React from 'react'
import type { ReactNode } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MAIN_CONTAINER_BACKGROUND } from '@constants'
import { MAIN_CONTAINER_PADDING } from './constants'

export const RootContainer = ({
  children,
  position = 'center',
}: {
  children: ReactNode
  position?: 'top' | 'center' | 'bottom'
}) => (
  <SafeAreaView style={styles.root}>
    <KeyboardAwareScrollView
      contentContainerStyle={[styles.container, styles[position]]}
    >
      {children}
    </KeyboardAwareScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: MAIN_CONTAINER_BACKGROUND,
  },
  container: {
    flex: 1,
    padding: MAIN_CONTAINER_PADDING,
  },
  top: { justifyContent: 'flex-start' },
  center: { justifyContent: 'center' },
  bottom: { justifyContent: 'flex-end' },
})
