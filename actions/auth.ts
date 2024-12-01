import { LoginOutput, LoginParams } from '@types'
import { API_AUTH_LOGIN } from '@constants'

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

  console.log('username', { username, password, response })

  if (!response.ok) {
    const { message } = (await response.json()) || {}
    throw new Error(message)
  }

  return response.json()
}
