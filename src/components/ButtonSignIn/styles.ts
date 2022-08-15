// External libraries
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 48px;
  height: 48px;

  align-items: center;
  justify-content: center;

  border-radius: 24px;

  background-color: ${props => props.theme.colors.secondary};
`
