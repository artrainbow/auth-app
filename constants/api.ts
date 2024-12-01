import Constants from 'expo-constants'
import type { ExpoConfigExtended } from '@types'

const expoConfig = Constants.expoConfig as ExpoConfigExtended

const API = expoConfig.extra.apiUrl

export const API_AUTH_LOGIN = `${API}/auth/login`
