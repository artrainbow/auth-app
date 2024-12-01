import { StyleSheet, Text } from 'react-native'
import React from 'react'

export const MessageErrorText = ({ text }: { text: string }) => {
  return <Text style={styles.errorText}>{text}</Text>
}

const styles = StyleSheet.create({
  errorText: {
    color: 'white',
    fontSize: 14,
  },
})
