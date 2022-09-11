// External libraries
import React, { useContext } from 'react'
import { View } from 'react-native'
import { useTheme } from 'styled-components/native'

// Components
import Header from '../../components/Header'
import Touchable from '../../components/Touchable'

// Contexts
import { AuthContext, useAuth } from '../../contexts/Auth'

// Services
import data from '../../services/data.json'

// Assets
import LogOut from '../../assets/images/logout.svg'

// Styled
import { Container, ContentSettings, RowSettings, TextSetting } from './styles'

const Settings: React.FC = () => {
  const { signOut } = useAuth()
  const { colors } = useTheme()
  const dataContext = useContext(AuthContext)
  const dataUser = data.users.find(value => {
    if (value.email === dataContext.authData?.email) {
      return value
    }
  })
  const formattedCardNumber = dataUser?.card_number.replace(
    /(\d{4})(\d{4})(\d{4})(\d{4})/,
    '$1.$2.$3.$4',
  )
  return (
    <Container>
      <Header title="Settings" />
      <ContentSettings>
        <View>
          <RowSettings>
            <TextSetting>Name:</TextSetting>
            <TextSetting>{dataUser?.username}</TextSetting>
          </RowSettings>
          <RowSettings>
            <TextSetting>E-mail:</TextSetting>
            <TextSetting>{dataUser?.email}</TextSetting>
          </RowSettings>
          <RowSettings>
            <TextSetting>Card number:</TextSetting>
            <TextSetting>{formattedCardNumber}</TextSetting>
          </RowSettings>
          <RowSettings>
            <TextSetting>Card security number:</TextSetting>
            <TextSetting>{dataUser?.card_security_code}</TextSetting>
          </RowSettings>
          <RowSettings>
            <TextSetting>Card expiration date:</TextSetting>
            <TextSetting>{dataUser?.card_expiration_date}</TextSetting>
          </RowSettings>
        </View>
        <Touchable
          title="Sign out"
          touchableType="filled"
          backgroundColor={colors.primary}
          color={colors.secondary}
          margin="8px 0px 0px 0px"
          onPress={() => signOut()}
          image={<LogOut rotation={180} />}
        />
      </ContentSettings>
    </Container>
  )
}

export default Settings
