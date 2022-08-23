// External libraries
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.secondary};
`

export const TextContainer = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 20px;
  font-family: ${props => props.theme.fonts.h4};
`
