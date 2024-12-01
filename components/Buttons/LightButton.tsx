import { memo } from 'react'
import { type GestureResponderEvent, StyleSheet } from 'react-native'
import { ButtonBase } from './ButtonBase'
import { ButtonText } from './ButtonText'
import {
  BACKGROUND_COLOR_LIGHT,
  BORDER_COLOR_LIGHT,
  BORDER_RADIUS,
  BORDER_WIDTH,
  PADDING_HORIZONTAL,
  PADDING_VERTICAL,
} from './constants'

type LightButtonProps = {
  title: string
  disabled?: boolean
  onPress: (event: GestureResponderEvent) => void
}

export const LightButton = memo(
  <T extends unknown[]>({ title, disabled, onPress }: LightButtonProps) => (
    <ButtonBase disabled={disabled} onPress={onPress} style={styles.gray}>
      <ButtonText title={title} color="dark" />
    </ButtonBase>
  ),
)

const styles = StyleSheet.create({
  gray: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: PADDING_VERTICAL,
    paddingHorizontal: PADDING_HORIZONTAL,
    borderRadius: BORDER_RADIUS,
    backgroundColor: BACKGROUND_COLOR_LIGHT,
    borderWidth: BORDER_WIDTH,
    borderColor: BORDER_COLOR_LIGHT,
  },
})
