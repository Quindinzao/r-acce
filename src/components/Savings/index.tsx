// External libraries
import React, { useContext } from 'react'

// Context
import { AuthContext } from '../../contexts/Auth'

// Services
import data from '../../services/data.json'

// Assets
import Profits from '../../assets/images/profits.svg'

// Styled
import { Container, Content, SavingsText } from './styles'

const Savings: React.FC = () => {
  const dataContext = useContext(AuthContext)
  const dataUser = data.users.find(value => {
    if (value.email === dataContext.authData?.email) {
      return value
    }
  })

  return (
    <Container>
      <Content activeOpacity={0.5}>
        <Profits />
        <SavingsText>
          You saved ${dataUser?.savings_week} on travel this week and $
          {dataUser?.savings_month} this month!
        </SavingsText>
      </Content>
    </Container>
  )
}

export default Savings
