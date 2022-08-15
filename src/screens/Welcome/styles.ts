// External libraries
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  padding: 18px;
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.primary};
`

export const Title = styled.Text`
  margin-bottom: 18px;

  color: ${props => props.theme.colors.secondary};
  font-size: 24px;
  font-family: ${props => props.theme.fonts.title};
  text-transform: uppercase;
`

export const SocialLoginContent = styled.View`
  width: 65%;

  margin-top: 18px;

  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`
