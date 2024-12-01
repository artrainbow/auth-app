import type { ReactNode } from 'react'
import type { GestureResponderEvent } from 'react-native'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import debounce from 'debounce'
import { DEBOUNCE_TIMEOUT, DISABLED_OPACITY } from './constants'

type ButtonBaseProps = {
  children: ReactNode
  style?: ViewStyle
  disabled?: boolean
  onPress: (event: GestureResponderEvent) => void
}

export const ButtonBase = <T extends unknown[]>({
  children,
  style = {},
  disabled = false,
  onPress,
}: ButtonBaseProps) => {
  const handlePress = debounce(onPress, DEBOUNCE_TIMEOUT, { immediate: true })

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={handlePress}
      style={{
        ...styles.button,
        ...styles[disabled ? 'disabled' : 'enabled'],
        ...style,
      }}
    >
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: { width: '100%' },
  enabled: { opacity: 1 },
  disabled: { opacity: DISABLED_OPACITY },
})
