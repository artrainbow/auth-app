import { useQueryClient } from '@tanstack/react-query'
import { LoginOutput } from '@types'

export const useAuth = (): LoginOutput | undefined => {
  const queryClient = useQueryClient()
  return queryClient.getQueryData(['auth'])
}
