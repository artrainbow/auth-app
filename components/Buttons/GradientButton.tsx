import { memo } from 'react'
import { type GestureResponderEvent, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ButtonBase } from './ButtonBase'
import { ButtonText } from './ButtonText'
import {
  BORDER_RADIUS,
  GRADIENT_COLORS,
  PADDING_HORIZONTAL,
  PADDING_VERTICAL,
} from './constants'

type GradientButtonProps = {
  title: string
  disabled?: boolean
  onPress: (event: GestureResponderEvent) => void
}

export const GradientButton = memo(
  <T extends unknown[]>({ title, disabled, onPress }: GradientButtonProps) => (
    <ButtonBase disabled={disabled} onPress={onPress}>
      <LinearGradient
        style={styles.gradient}
        colors={[GRADIENT_COLORS[0], GRADIENT_COLORS[1]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <ButtonText title={title} />
      </LinearGradient>
    </ButtonBase>
  ),
)

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: PADDING_VERTICAL,
    paddingHorizontal: PADDING_HORIZONTAL,
    borderRadius: BORDER_RADIUS,
  },
})
