// External libraries
import React from 'react'

// Styled
import { Container, TouchableText } from './styles'

interface TouchableProps {
  title: string
  touchableType: 'filled' | 'outlined'

  margin?: string
  padding?: string
}

const Touchable: React.FC<TouchableProps> = ({
  title,
  touchableType,
  margin,
  padding,
}) => {
  return (
    <Container
      touchableType={touchableType}
      margin={margin}
      padding={padding}
      opacity={0}>
      <TouchableText touchableType={touchableType}>{title}</TouchableText>
    </Container>
  )
}

export default Touchable
