// External libraries
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;

  padding: 18px;

  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
`

export const TextContent = styled.View`
  height: 66px;

  align-items: flex-start;
  justify-content: center;
`

export const Text = styled.Text`
  margin-left: 18px;

  color: ${props => props.theme.colors.secondary};
  font-size: 20px;
  font-family: ${props => props.theme.fonts.h4};
  line-height: 32px;
`
