// External libraries
import { useNavigation } from '@react-navigation/native'
import React from 'react'

// Routes
import { propsStack } from '../../routes/models'

// Assets
import Arrow from '../../assets/images/arrow.svg'

// Styled
import { Container, ButtomBack, TitleHeader } from './styles'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation<propsStack>()

  return (
    <Container>
      <ButtomBack
        activeOpacity={0.7}
        onPress={() => navigation.navigate('TabRoutes')}>
        <Arrow width={25} />
      </ButtomBack>
      <TitleHeader>{title}</TitleHeader>
    </Container>
  )
}

export default Header
