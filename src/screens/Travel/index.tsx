// External libraries
import React from 'react'

// Components
import UserPreview from '../../components/UserPreview'
import NewTravelTouchable from '../../components/NewTravelTouchable'

// Styled
import { Container } from './styles'
import PastTravelItemList from '../../components/PastTravelItemList'

const Travel: React.FC = () => {
  return (
    <Container>
      <UserPreview />
      <NewTravelTouchable />
      <PastTravelItemList />
    </Container>
  )
}

export default Travel
