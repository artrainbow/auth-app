import { useQueryClient } from '@tanstack/react-query'
import type { LoginOutput } from '@types'
import { AUTH_QUERY_KEY } from '@constants'

export const useAuth = (): LoginOutput | undefined => {
  const queryClient = useQueryClient()
  return queryClient.getQueryData([AUTH_QUERY_KEY])
}
