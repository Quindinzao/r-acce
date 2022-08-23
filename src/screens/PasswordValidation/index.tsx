// External libraries
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

// Components
import TextInput from '../../components/TextInput'
import Touchable from '../../components/Touchable'

// Routes
import { propsPasswordValidationStack, propsStack } from '../../routes/models'

// Contexts
import { useAuth } from '../../contexts/Auth'

// Assets
import Arrow from '../../assets/images/arrow.svg'

// Styled
import { ButtonBack, Container, TitleHeader } from './styles'

const PasswordValidation: React.FC<propsPasswordValidationStack> = ({
  route,
}) => {
  const { colors } = useTheme()
  const { signIn } = useAuth()
  const navigation = useNavigation<propsStack>()

  const email = route.params.email
  const [password, setPassword] = useState('')

  const contentContainerStyle = {
    flexGrow: 1,
  }

  return (
    <ScrollView
      contentContainerStyle={contentContainerStyle}
      keyboardShouldPersistTaps="handled">
      <Container type="header" justifyContent="flex-start">
        <TitleHeader>ACCE | PASSWORD</TitleHeader>
        <ButtonBack activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <Arrow width={25} />
        </ButtonBack>
      </Container>
      <Container type="body" justifyContent="flex-end">
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(event: string) => setPassword(event)}
          autoCapitalize="none"
          autoFocus
          secureTextEntry
        />
        <Touchable
          title="Sign In"
          touchableType="filled"
          backgroundColor={colors.primary}
          color={colors.secondary}
          margin="8px 0px 0px 0px"
          onPress={() => signIn(email, password)}
          image={<Arrow width={20} />}
        />
      </Container>
    </ScrollView>
  )
}

export default PasswordValidation
