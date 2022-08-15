// External libraries
import React from 'react'

// Styled
import { Container, TouchableText } from './styles'

interface TouchableProps {
  touchableType: 'filled' | 'outlined'

  title?: string
  onPress?: () => void
  margin?: string
  padding?: string
}

const Touchable: React.FC<TouchableProps> = ({
  touchableType,
  title,
  onPress,
  margin,
  padding,
}) => {
  return (
    <Container
      touchableType={touchableType}
      margin={margin}
      padding={padding}
      activeOpacity={0.7}
      onPress={onPress}>
      <TouchableText touchableType={touchableType}>{title}</TouchableText>
    </Container>
  )
}

export default Touchable
