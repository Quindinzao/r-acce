// External libraries
import React from 'react'

// Assets
import Discrimination from '../../assets/images/discrimination.svg'

// Styled
import { Container, Content, DangerText } from './styles'

const TravelDanger: React.FC = () => {
  return (
    <Container>
      <Content activeOpacity={0.95}>
        <Discrimination />
        <DangerText>Random message Random message Random message</DangerText>
      </Content>
    </Container>
  )
}

export default TravelDanger
