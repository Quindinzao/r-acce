// External libraries
import React from 'react'
import { ScrollView } from 'react-native'

// Components
import Benefits from '../../components/Benefits'
import Friends from '../../components/Friends'
import Savings from '../../components/Savings'
import TravelDanger from '../../components/TravelDanger'
import UserPreview from '../../components/UserPreview'

// Styled
import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <UserPreview />
      <ScrollView>
        <Benefits />
        <Friends />
        <Savings />
        <TravelDanger />
      </ScrollView>
    </Container>
  )
}

export default Home
