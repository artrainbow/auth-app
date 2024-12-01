import { useState } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import {
  DEFAULT_COLOR,
  BORDER_RADIUS,
  BORDER_WIDTH,
  ERROR_COLOR,
  FOCUSED_COLOR,
  HEIGHT,
  MARGIN,
  PADDING,
  FONT_SIZE_SMALL,
  FONT_SIZE_REGULAR,
  WHITE_COLOR,
} from '../constants'

type InputBaseProps = {
  value: string
  label: string
  placeholder: string
  error: boolean
  onChangeText: (text: string) => void
}

export const InputBase = ({
  value,
  label,
  placeholder,
  error,
  onChangeText,
}: InputBaseProps) => {
  const [focused, setFocused] = useState(false)

  return (
    <View
      style={[
        styles.container,
        focused && styles.focusedContainer,
        error && styles.errorContainer,
      ]}
    >
      {focused && (
        <View style={styles.label}>
          <Text
            style={[
              styles.labelText,
              focused && styles.focusedText,
              error && styles.errorText,
            ]}
          >
            {label}
          </Text>
        </View>
      )}
      <TextInput
        style={[styles.input, focused && styles.focusedInput]}
        placeholderTextColor={error ? ERROR_COLOR : DEFAULT_COLOR}
        placeholder={focused ? '' : placeholder}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        autoCorrect={false}
        selectTextOnFocus={false}
        spellCheck={false}
        autoComplete="off"
        autoCapitalize="none"
        keyboardType="default"
        textContentType="none"
        importantForAutofill="no"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEIGHT,
    backgroundColor: WHITE_COLOR,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: PADDING,
    paddingVertical: 0,
    marginBottom: MARGIN,
    borderWidth: BORDER_WIDTH,
    borderColor: DEFAULT_COLOR,
    justifyContent: 'center',
  },
  input: {
    height: HEIGHT,
    fontSize: FONT_SIZE_REGULAR,
  },
  label: {
    flex: 1,
  },
  labelText: {
    fontSize: FONT_SIZE_SMALL,
  },
  errorText: {
    color: ERROR_COLOR,
  },
  errorContainer: {
    borderColor: ERROR_COLOR,
    marginBottom: 4,
  },
  focusedText: {
    color: FOCUSED_COLOR,
  },
  focusedContainer: {
    borderColor: FOCUSED_COLOR,
    justifyContent: 'flex-end',
    paddingVertical: 8,
  },
  focusedInput: {
    height: FONT_SIZE_REGULAR,
    fontSize: FONT_SIZE_SMALL,
  },
})
