import { LoginOutput, LoginParams } from '@types'
import { API_AUTH_LOGIN, AUTH_API_EXPIRATION_TIMEOUT } from '@constants'

export const login = async ({
  username,
  password,
}: LoginParams): Promise<LoginOutput> => {
  const response = await fetch(API_AUTH_LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: AUTH_API_EXPIRATION_TIMEOUT,
    }),
    credentials: 'include',
  })

  if (!response.ok) {
    const { message } = (await response.json()) || {}
    throw new Error(message)
  }

  return response.json()
}
