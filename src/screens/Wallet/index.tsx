// External libraries
import React, { useContext } from 'react'
import { Dimensions, ScrollView } from 'react-native'

// Components
import UserPreview from '../../components/UserPreview'

// Contexts
import { AuthContext } from '../../contexts/Auth'

// Services
import data from '../../services/data.json'

// Assets
import CardBackground from '../../assets/images/background_card.svg'

// Styled
import {
  Container,
  Content,
  TextCardNumber,
  TextExpirationDate,
  TextSecurityCode,
} from './styles'

const Wallet: React.FC = () => {
  const { width } = Dimensions.get('screen')
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
      <ScrollView>
        <UserPreview />
        <Content>
          <CardBackground width={width - 36} />
          <TextCardNumber>{formattedCardNumber}</TextCardNumber>
          <TextSecurityCode>
            SECURITY CODE: {dataUser?.card_security_code}
          </TextSecurityCode>
          <TextExpirationDate>
            SECURITY CODE: {dataUser?.card_expiration_date}
          </TextExpirationDate>
        </Content>
      </ScrollView>
    </Container>
  )
}

export default Wallet
