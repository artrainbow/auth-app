import type { ParamListBase, RouteProp } from '@react-navigation/native'

export type Route = RouteProp<ParamListBase, string> & {
  params?: { screen: string }
}
