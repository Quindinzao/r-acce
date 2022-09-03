// External libraries
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${props => props.theme.colors.secondary};
`

export const Content = styled.View`
  align-items: center;
  justify-content: flex-start;

  margin-right: 18px;
  margin-left: 18px;
`

export const TextCardNumber = styled.Text`
  position: absolute;
  left: 28px;
  bottom: 53px;

  font-family: ${props => props.theme.fonts.h4};
  font-size: 20px;
  color: ${props => props.theme.colors.soft};
`

export const TextSecurityCode = styled.Text`
  position: absolute;
  left: 28px;
  bottom: 40px;

  font-family: ${props => props.theme.fonts.h4};
  font-size: 12px;
  color: ${props => props.theme.colors.soft};
`

export const TextExpirationDate = styled.Text`
  position: absolute;
  left: 158px;
  bottom: 40px;

  font-family: ${props => props.theme.fonts.h4};
  font-size: 12px;
  color: ${props => props.theme.colors.soft};
`
