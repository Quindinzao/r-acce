// External libraries
import React from 'react'
import { ScrollView } from 'react-native'

// Components
import UserPreview from '../../components/UserPreview'
import CardImage from '../../components/CardImage'

// Styled
import { Container } from './styles'

const Wallet: React.FC = () => {
  return (
    <Container>
      <ScrollView>
        <UserPreview />
        <CardImage />
      </ScrollView>
    </Container>
  )
}

export default Wallet
