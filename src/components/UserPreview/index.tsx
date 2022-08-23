// External libraries
import React from 'react'

// Assets
import UserPicture from '../../assets/images/user_picture.svg'

// Services
import data from '../../services/data.json'

// Styled
import { Container, Text, TextContent } from './styles'

const UserPreview: React.FC = () => {
  return (
    <Container>
      <UserPicture width={64} height={64} />
      <TextContent>
        <Text>{data.users[0].username}</Text>
        <Text>${data.users[0].amount}</Text>
      </TextContent>
    </Container>
  )
}

export default UserPreview
