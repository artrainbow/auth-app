import { ErrorIcon } from './ErrorIcon'
import { ErrorText } from './ErrorText'

export const ErrorMessage = ({ text }: { text: string }) => {
  return (
    <>
      <ErrorIcon />
      <ErrorText text={text} />
    </>
  )
}
