import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { ERROR_COLOR, MARGIN_ERROR } from './constants'

export const ErrorText = ({ text }: { text: string }) => (
  <Text style={styles.errorText}>{text}</Text>
)

const styles = StyleSheet.create({
  errorText: {
    fontSize: 12,
    color: ERROR_COLOR,
    marginBottom: MARGIN_ERROR,
    alignSelf: 'flex-start',
  },
})
