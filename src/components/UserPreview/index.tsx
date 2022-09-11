// External libraries
import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'

// Routes
import { propsStack } from '../../routes/models'

// Services
import data from '../../services/data.json'

// Contexts
import { AuthContext } from '../../contexts/Auth'

// Assets
import UserPicture from '../../assets/images/user_picture.svg'
import Settings from '../../assets/images/settings.svg'

// Styled
import { Container, Content, Text, TextContent } from './styles'

const UserPreview: React.FC = () => {
  const navigation = useNavigation<propsStack>()
  const dataContext = useContext(AuthContext)
  const dataUser = data.users.find(value => {
    if (value.email === dataContext.authData?.email) {
      return value
    }
  })
  return (
    <Container>
      <Content>
        <UserPicture width={64} height={64} />
        <TextContent>
          <Text>{dataUser?.username}</Text>
          <Text>${dataUser?.amount}</Text>
        </TextContent>
      </Content>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate('Settings')}>
        <Settings />
      </TouchableOpacity>
    </Container>
  )
}

export default UserPreview
