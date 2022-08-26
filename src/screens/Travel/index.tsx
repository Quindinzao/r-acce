// External libraries
import React from 'react'
import { ScrollView } from 'react-native'

// Components
import UserPreview from '../../components/UserPreview'
import NewTravelTouchable from '../../components/NewTravelTouchable'

// Styled
import { Container } from './styles'

const Travel: React.FC = () => {
  return (
    <Container>
      <ScrollView>
        <UserPreview />
        <NewTravelTouchable />
      </ScrollView>
    </Container>
  )
}

export default Travel
