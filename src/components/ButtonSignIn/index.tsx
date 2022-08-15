// External libraries
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { useTheme } from 'styled-components/native'

// Styled
import { Container } from './styles'

interface ButtonSignInProps {
  image: any
}

const ButtonSignIn: React.FC<ButtonSignInProps> = ({ image }) => {
  const { colors } = useTheme()

  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async () => {
    setIsLoading(true)
    // Substituir auth pela função responsável pelo login com as respectivas mídias
    const auth = await AsyncStorage.getItem('@AuthData')

    // try/catch do acesso aos dados da respectiva mídia
    setTimeout(() => {
      if (auth) {
        console.warn('IS OK')
      } else {
        Alert.alert('Oops! :/', 'This feature has not yet been implemented.')
      }
      setIsLoading(false)
    }, 3000)
  }

  return (
    <Container activeOpacity={0.7} onPress={handleSignIn}>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.quaternary} />
      ) : (
        image
      )}
    </Container>
  )
}

export default ButtonSignIn
