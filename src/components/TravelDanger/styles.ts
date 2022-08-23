// External libraries
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 132px;

  margin-bottom: 18px;
  padding-right: 18px;
  padding-left: 18px;
`

export const Content = styled.TouchableOpacity`
  width: 100%;
  height: 100%;

  padding-right: 24px;
  padding-left: 24px;

  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  background-color: ${props => props.theme.colors.danger};
  border-radius: 6px;
`

export const DangerText = styled.Text`
  flex: 1;
  margin-left: 18px;

  color: ${props => props.theme.colors.secondary};
  font-size: 20px;
  font-family: ${props => props.theme.fonts.h4};
`
