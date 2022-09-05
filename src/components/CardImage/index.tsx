// External libraries
import React, { useContext } from 'react'
import { Dimensions } from 'react-native'

// Contexts
import { AuthContext } from '../../contexts/Auth'

// Services
import data from '../../services/data.json'

// Assets
import CardBackground from '../../assets/images/background_card.svg'

// Styled
import {
  Container,
  TextCardNumber,
  TextExpirationDate,
  TextSecurityCode,
} from './styles'

const CardImage: React.FC = () => {
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
      <CardBackground width={width - 36} />
      <TextCardNumber>{formattedCardNumber}</TextCardNumber>
      <TextSecurityCode>
        SECURITY CODE: {dataUser?.card_security_code}
      </TextSecurityCode>
      <TextExpirationDate>
        EXPIRATION DATE: {dataUser?.card_expiration_date}
      </TextExpirationDate>
    </Container>
  )
}

export default CardImage
