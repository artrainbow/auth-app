import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import {
  BACKGROUND_COLOR,
  BORDER_COLOR,
  BORDER_RADIUS,
  BORDER_WIDTH,
  ERROR_COLOR,
  FOCUSED_COLOR,
  HEIGHT,
  MARGIN_INPUT,
  PADDING_INPUT,
} from './constants'

export const InputBase = ({
  value,
  label,
  placeholder,
  error,
  onChangeText,
}) => {
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
        placeholderTextColor={error ? ERROR_COLOR : BORDER_COLOR}
        placeholder={focused ? '' : placeholder}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        contextMenuHidden
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
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: PADDING_INPUT,
    paddingVertical: 0,
    marginBottom: MARGIN_INPUT,
    borderWidth: BORDER_WIDTH,
    borderColor: BORDER_COLOR,
    justifyContent: 'center',
  },
  input: {
    height: HEIGHT,
    fontSize: 16,
  },
  label: {
    flex: 1,
  },
  labelText: {
    fontSize: 12,
    fontWeight: 400,
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
    height: 16,
    fontSize: 12,
  },
})
