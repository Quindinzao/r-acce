// External libraries
import React from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

// Components
import Touchable from '../../components/Touchable'
import ButtonSignIn from '../../components/ButtonSignIn'

// Routes
import { propsStack } from '../../routes/models'

// Assets
import Google from '../../assets/images/google.svg'
import Facebook from '../../assets/images/facebook.svg'
import Uber from '../../assets/images/uber.svg'

// Styled
import { Container, SocialLoginContent, Title } from './styles'

const Welcome: React.FC = () => {
  const { colors } = useTheme()
  const navigation = useNavigation<propsStack>()

  const handleSignIn = () => {
    navigation.navigate('EmailValidation')
  }

  const handleSignUp = () => {
    Alert.alert('Oops! :/', 'This feature has not yet been implemented.')
  }

  return (
    <Container>
      <Title>ACCE</Title>
      <Touchable
        title="Sign In"
        touchableType="filled"
        margin="0px 0px 8px 0px"
        backgroundColor={colors.secondary}
        color={colors.primary}
        onPress={handleSignIn}
      />
      <Touchable
        title="First access"
        touchableType="outlined"
        onPress={handleSignUp}
      />
      <SocialLoginContent>
        <ButtonSignIn image={<Google color="#000" />} />
        <ButtonSignIn image={<Facebook />} />
        <ButtonSignIn image={<Uber />} />
      </SocialLoginContent>
    </Container>
  )
}

export default Welcome
