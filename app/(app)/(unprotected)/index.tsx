import { useRouter } from 'expo-router'
import { GradientButton, RootContainer } from '@components'
import t from '@translations'

const HomeScreen = () => {
  const router = useRouter()

  return (
    <RootContainer>
      <GradientButton
        title={t.go_to_login}
        onPress={() => router.push({ pathname: 'profile' })}
      />
    </RootContainer>
  )
}

export default HomeScreen
