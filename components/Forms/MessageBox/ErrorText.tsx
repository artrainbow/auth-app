import { StyleSheet, Text } from 'react-native'
import { FONT_SIZE_NORMAL, WHITE_COLOR } from '../constants'

export const ErrorText = ({ text }: { text: string }) => {
  return <Text style={styles.errorText}>{text}</Text>
}

const styles = StyleSheet.create({
  errorText: {
    color: WHITE_COLOR,
    fontSize: FONT_SIZE_NORMAL,
  },
})
