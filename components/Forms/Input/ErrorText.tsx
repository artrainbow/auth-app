import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { ERROR_COLOR, FONT_SIZE_SMALL, MARGIN_ERROR } from '../constants'

export const ErrorText = ({ text }: { text: string }) => (
  <Text style={styles.errorText}>{text}</Text>
)

const styles = StyleSheet.create({
  errorText: {
    fontSize: FONT_SIZE_SMALL,
    color: ERROR_COLOR,
    marginBottom: MARGIN_ERROR,
    alignSelf: 'flex-start',
  },
})
