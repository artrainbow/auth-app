import type { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import type { Route } from '@types'

type getScreenOptionsType = {
  route: Route
  title: string | undefined
  options?: NativeStackNavigationOptions
}

export const getScreenOptions = ({
  route,
  title: screenTitle,
  options = {},
}: getScreenOptionsType) => {
  let title: string

  switch (route.params?.screen) {
    case 'profile':
      title = screenTitle ?? ''
      break
    default:
      title = route.name
  }

  return { title, ...options }
}
