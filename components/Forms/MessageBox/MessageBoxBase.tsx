import React from 'react'
import type { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export const MessageBoxBase = ({ children }: { children: ReactNode }) => {
  return (
    <View style={styles.errorContainer}>
      <MaterialIcons
        name="error-outline"
        size={20}
        color="white"
        style={styles.errorIcon}
      />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorIcon: {
    marginRight: 15,
  },
  errorText: {
    color: 'white',
    fontSize: 14,
  },
})
