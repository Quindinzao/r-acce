// External libraries
import styled from 'styled-components/native'

interface TouchablePropsStyled {
  touchableType: 'filled' | 'outlined'
  margin?: string
  padding?: string
}

export const Container = styled.TouchableOpacity<TouchablePropsStyled>`
  width: 100%;
  height: 48px;

  margin: ${props => (props.margin ? props.margin : '0px')};
  padding: ${props => (props.padding ? props.padding : '0px')};

  align-items: flex-start;
  justify-content: center;

  border-radius: 33px;
  border: ${props =>
    props.touchableType === 'outlined' &&
    `1px solid ${props.theme.colors.secondary}`};

  background-color: ${props =>
    props.touchableType === 'filled'
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
`

export const TouchableText = styled.Text<TouchablePropsStyled>`
  margin-left: 24px;
  color: ${props =>
    props.touchableType === 'filled'
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  font-size: 18px;
  font-family: 'Mulish-Bold';
`
