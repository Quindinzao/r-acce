// External libraries
import React, { useContext } from 'react'

// Services
import data from '../../services/data.json'

// Contexts
import { AuthContext } from '../../contexts/Auth'

// Assets
import UserPicture from '../../assets/images/user_picture.svg'

// Styled
import { Container, Text, TextContent } from './styles'

const UserPreview: React.FC = () => {
  const dataContext = useContext(AuthContext)
  const dataUser = data.users.find(value => {
    if (value.email === dataContext.authData?.email) {
      return value
    }
  })
  return (
    <Container>
      <UserPicture width={64} height={64} />
      <TextContent>
        <Text>{dataUser?.username}</Text>
        <Text>${dataUser?.amount}</Text>
      </TextContent>
    </Container>
  )
}

export default UserPreview
