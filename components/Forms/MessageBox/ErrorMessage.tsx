import React from 'react'
import { ErrorIcon } from './ErrorIcon'
import { ErrorText } from './ErrorText'

export const ErrorMessage = ({ text }: { text: string }) => (
  <>
    <ErrorIcon />
    <ErrorText text={text} />
  </>
)
