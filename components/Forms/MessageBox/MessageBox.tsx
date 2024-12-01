import { memo } from 'react'
import type { ReactNode } from 'react'
import { MessageBoxBase } from './MessageBoxBase'
import { ErrorMessage } from './ErrorMessage'

export const MessageBox = memo(
  ({ text, type }: { text: string; type: 'error' }) => {
    let children: ReactNode

    switch (type) {
      case 'error':
        children = <ErrorMessage text={text} />
        break
      default:
        children = null
    }

    return <MessageBoxBase>{children}</MessageBoxBase>
  },
)
