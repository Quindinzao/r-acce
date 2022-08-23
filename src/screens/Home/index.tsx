// External libraries
import React from 'react'
import { ScrollView } from 'react-native'

// Components
import Friends from '../../components/Friends'
import Savings from '../../components/Savings'
import TravelDanger from '../../components/TravelDanger'
import UserContent from '../../components/UserContent'

// Styled
import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <ScrollView>
        <UserContent />
        <Friends />
        <Savings />
        <TravelDanger />
      </ScrollView>
    </Container>
  )
}

export default Home
