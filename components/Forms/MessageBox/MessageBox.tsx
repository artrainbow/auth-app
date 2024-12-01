import React from 'react'
import { MessageBoxBase } from './MessageBoxBase'
import { MessageErrorText } from './MessageErrorText'

export const MessageBox = ({ text }) => {
  return (
    <MessageBoxBase>
      <MessageErrorText text={text} />
    </MessageBoxBase>
  )
}
