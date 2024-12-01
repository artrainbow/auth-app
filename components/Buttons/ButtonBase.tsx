import { ReactNode } from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import debounce from 'debounce'
import { DEBOUNCE_TIMEOUT } from './constants'

type ButtonBaseProps<T extends unknown[] = []> = {
  children: ReactNode
  style?: ViewStyle
  disabled?: boolean
  onPress: (...args: T) => void
}

export const ButtonBase = <T extends unknown[]>({
  children,
  style = {},
  disabled = false,
  onPress,
}: ButtonBaseProps<T>) => {
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
  disabled: { opacity: 0.32 },
})
