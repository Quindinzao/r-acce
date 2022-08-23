// External libraries
import React from 'react'

// Components
import UserPreview from '../UserPreview'
import Benefits from '../Benefits'

// Styled
import { Container } from './styles'

const UserContent: React.FC = () => {
  return (
    <Container>
      <UserPreview />
      <Benefits />
    </Container>
  )
}

export default UserContent
