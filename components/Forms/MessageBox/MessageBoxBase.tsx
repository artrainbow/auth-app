import React from 'react'
import type { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  BORDER_RADIUS,
  ERROR_COLOR,
  HEIGHT,
  MARGIN,
  PADDING,
} from '../constants'

export const MessageBoxBase = ({ children }: { children: ReactNode }) => (
  <View style={styles.errorContainer}>{children}</View>
)

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: ERROR_COLOR,
    height: HEIGHT,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: PADDING,
    marginBottom: MARGIN,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
