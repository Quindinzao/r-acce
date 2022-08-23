// External libraries
import React from 'react'

// Styled
import { Container, ImageContent, TouchableText } from './styles'

interface TouchableProps {
  touchableType: 'filled' | 'outlined'

  title?: string
  image?: any
  onPress?: () => void
  margin?: string
  padding?: string
  backgroundColor?: string
  color?: string
}

const Touchable: React.FC<TouchableProps> = ({
  touchableType,
  title,
  image,
  onPress,
  margin,
  padding,
  backgroundColor,
  color,
}) => {
  return (
    <Container
      touchableType={touchableType}
      margin={margin}
      padding={padding}
      backgroundColor={backgroundColor}
      activeOpacity={0.7}
      onPress={onPress}>
      <TouchableText touchableType={touchableType} color={color}>
        {title}
      </TouchableText>
      <ImageContent>{image}</ImageContent>
    </Container>
  )
}

export default Touchable
