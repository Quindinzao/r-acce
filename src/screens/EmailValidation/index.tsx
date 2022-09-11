// External libraries
import React, { useState } from 'react'
import { Alert, ScrollView } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

// Components
import TextInput from '../../components/TextInput'
import Touchable from '../../components/Touchable'

// Routes
import { propsStack } from '../../routes/models'

// Services
import data from '../../services/data.json'

// Assets
import Arrow from '../../assets/images/arrow.svg'

// Styled
import { ButtonBack, Content, TitleHeader } from './styles'

const EmailValidation: React.FC = () => {
  const { colors } = useTheme()
  const navigation = useNavigation<propsStack>()

  const [email, setEmail] = useState('')

  const contentContainerStyle = {
    flexGrow: 1,
  }

  const handleEmailValidation = () => {
    const validation = data.users.find(value => {
      if (value.email === email.trim()) {
        return value.email
      }
    })

    if (!validation) {
      Alert.alert('Oops!', 'E-mail is not valid!')
    } else {
      navigation.navigate('PasswordValidation', { email: email.trim() })
    }
  }

  return (
    <ScrollView
      contentContainerStyle={contentContainerStyle}
      keyboardShouldPersistTaps="handled">
      <Content type="header" justifyContent="flex-start">
        <TitleHeader>ACCE | E-MAIL</TitleHeader>
        <ButtonBack activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <Arrow width={25} />
        </ButtonBack>
      </Content>
      <Content type="body" justifyContent="flex-end">
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={(event: string) => setEmail(event)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoFocus
        />
        <Touchable
          title="Continue"
          touchableType="filled"
          backgroundColor={colors.primary}
          color={colors.secondary}
          margin="8px 0px 0px 0px"
          onPress={handleEmailValidation}
          image={<Arrow width={20} />}
        />
      </Content>
    </ScrollView>
  )
}

export default EmailValidation
