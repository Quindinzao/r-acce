// External libraries
import styled from 'styled-components/native'

interface ContainerProps {
  type: 'header' | 'body'
  justifyContent: string
}

export const Content = styled.View<ContainerProps>`
  padding: 18px;
  flex: 1;
  align-items: center;
  justify-content: ${props => props.justifyContent};

  background-color: ${props =>
    props.type === 'header'
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
`

export const TitleHeader = styled.Text`
  color: ${props => props.theme.colors.secondary};
  font-size: 24px;
  font-family: ${props => props.theme.fonts.h1};
  text-transform: uppercase;
`

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  left: 18px;
  top: 22px;
`
