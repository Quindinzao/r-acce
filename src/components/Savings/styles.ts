// External libraries
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 96px;

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
  justify-content: flex-start;
  flex-direction: row;

  border: 2px solid ${props => props.theme.colors.quaternary};
  border-radius: 6px;
`

export const SavingsText = styled.Text`
  flex: 1;
  margin-left: 18px;

  color: ${props => props.theme.colors.quaternary};
  font-size: 16px;
  font-family: ${props => props.theme.fonts.h4};
`
