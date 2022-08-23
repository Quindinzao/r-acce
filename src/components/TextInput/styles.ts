import styled from 'styled-components/native'

export const Container = styled.TextInput.attrs({
  placeholderTextColor: '#999393',
})`
  width: 100%;
  height: 48px;

  padding-left: 24px;

  border: 2px solid ${props => props.theme.colors.terciary};
  border-radius: 24px;

  font-size: 18px;
  font-family: ${props => props.theme.fonts.h4};
`
