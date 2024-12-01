export type LoginOutput = {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  accessToken: string
  refreshToken: string
}

export type LoginParams = {
  username: string
  password: string
}

export type LoginErrorState = {
  username: string
  password: string
}
