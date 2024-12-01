import { useEffect, useRef } from 'react'
import { useAuth } from './useAuth'

export const useScreenTitle = () => {
  const title = useRef('')
  const data = useAuth()

  useEffect(() => {
    title.current = data ? `${data.firstName} ${data.lastName}` : ''
  }, [data])

  return { title: title.current }
}
