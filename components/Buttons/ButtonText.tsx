import { StyleSheet, Text } from 'react-native'
import {
  FONT_COLOR_DARK,
  FONT_COLOR_LIGHT,
  FONT_WEIGHT_NORMAL,
} from './constants'

export const ButtonText = ({
  title,
  color = 'light',
}: {
  title: string
  color?: 'light' | 'dark'
}) => <Text style={{ ...styles.text, ...styles[color] }}>{title}</Text>

const styles = StyleSheet.create({
  text: {
    fontWeight: FONT_WEIGHT_NORMAL,
  },
  light: { color: FONT_COLOR_LIGHT },
  dark: { color: FONT_COLOR_DARK },
})
