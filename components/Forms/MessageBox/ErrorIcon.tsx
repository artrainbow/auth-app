import { MaterialIcons } from '@expo/vector-icons'
import { ICON_SIZE_REGULAR, MARGIN, WHITE_COLOR } from '../constants'
import React from 'react'
import { StyleSheet } from 'react-native'

export const ErrorIcon = () => (
  <MaterialIcons
    name="error-outline"
    size={ICON_SIZE_REGULAR}
    color={WHITE_COLOR}
    style={styles.errorIcon}
  />
)

const styles = StyleSheet.create({
  errorIcon: {
    marginRight: MARGIN,
  },
})
