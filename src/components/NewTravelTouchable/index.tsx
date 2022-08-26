// External libraries
import { useNavigation } from '@react-navigation/native'
import React from 'react'

// Routes
import { propsStack } from '../../routes/models'

// Styled
import { Container, Content, TextTouchable } from './styles'

const NewTravelTouchable: React.FC = () => {
  const navigation = useNavigation<propsStack>()

  return (
    <Container>
      <Content
        activeOpacity={0.5}
        onPress={() => navigation.navigate('NewTravel')}>
        <TextTouchable>New travel</TextTouchable>
      </Content>
    </Container>
  )
}

export default NewTravelTouchable
