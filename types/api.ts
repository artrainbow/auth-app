import type { ExpoConfig } from '@expo/config-types'

export type ExpoConfigExtended = ExpoConfig & {
  extra: {
    apiUrl: string
  }
}
