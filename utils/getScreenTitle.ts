import t from '@translations'
import { LoginOutput } from '@types'

export const getScreenTitle = ({
  data,
  routeName,
}: {
  data: LoginOutput | undefined
  routeName: string
}) => {
  switch (routeName) {
    case 'profile':
      return data
        ? `${t.greeting}, ${data.firstName} ${data.lastName}`
        : routeName
    default:
      return routeName
  }
}
