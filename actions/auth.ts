import { LoginOutput, LoginParams } from '@types'
import { API_AUTH_LOGIN, AUTH_CACHE_MIN } from '@constants'

export const login = async ({
  username,
  password,
}: LoginParams): Promise<LoginOutput> => {
  const response = await fetch(API_AUTH_LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, expiresInMins: 0 }),
    credentials: 'include',
  })

  if (!response.ok) {
    const { message } = (await response.json()) || {}
    throw new Error(message)
  }

  return response.json()
}

export const logout = () => {}
