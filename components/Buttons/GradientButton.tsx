import { memo, ReactNode } from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ButtonBase } from './ButtonBase'
import { ButtonText } from './ButtonText'
import {
  BORDER_RADIUS,
  GRADIENT_COLORS,
  PADDING_HORIZONTAL,
  PADDING_VERTICAL,
} from './constants'

type GradientButtonProps<T extends unknown[] = []> = {
  title: string
  disabled?: boolean
  onPress: (...args: T) => void
}

export const GradientButton = memo(
  <T extends unknown[]>({
    title,
    disabled,
    onPress,
  }: GradientButtonProps<T>) => (
    <ButtonBase disabled={disabled} onPress={onPress}>
      <LinearGradient
        style={styles.gradient}
        colors={GRADIENT_COLORS}
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
