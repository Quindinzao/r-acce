// External libraries
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 44px;

  margin-top: 12px;

  margin-bottom: 18px;
  padding-right: 18px;
  padding-left: 18px;
`

export const Content = styled.TouchableOpacity`
  width: 100%;
  height: 100%;

  padding-right: 12px;
  padding-left: 12px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  border: 3px solid ${props => props.theme.colors.terciary};
  border-radius: 6px;
`

export const TextTouchable = styled.Text`
  font-size: 18px;
  font-family: ${props => props.theme.fonts.h4};
  text-transform: uppercase;
  color: ${props => props.theme.colors.terciary};
`
