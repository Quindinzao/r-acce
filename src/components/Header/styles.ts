// External dependencies
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 56px;

  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.primary};
`

export const ButtomBack = styled.TouchableOpacity`
  position: absolute;
  left: 18px;
  top: 18px;
`

export const TitleHeader = styled.Text`
  margin-left: 8px;
  color: ${props => props.theme.colors.secondary};
  font-size: 24px;
  font-family: ${props => props.theme.fonts.h1};
  text-transform: uppercase;
`
