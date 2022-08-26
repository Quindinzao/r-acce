// External libraries
import React from 'react'
import { ScrollView } from 'react-native'

// Components
import UserPreview from '../../components/UserPreview'

// Styled
import { Container } from './styles'

const Wallet: React.FC = () => {
  return (
    <Container>
      <ScrollView>
        <UserPreview />
      </ScrollView>
    </Container>
  )
}

export default Wallet
