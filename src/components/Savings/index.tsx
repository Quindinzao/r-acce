// External libraries
import React from 'react'

// Assets
import Profits from '../../assets/images/profits.svg'

// Services
import data from '../../services/data.json'

// Styled
import { Container, Content, SavingsText } from './styles'

const Savings: React.FC = () => {
  return (
    <Container>
      <Content activeOpacity={0.5}>
        <Profits />
        <SavingsText>
          You saved ${data.users[0].savings_week} on travel this week and $
          {data.users[0].savings_month} this month!
        </SavingsText>
      </Content>
    </Container>
  )
}

export default Savings
