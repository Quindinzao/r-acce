// External libraries
import styled from 'styled-components/native'

interface TouchableContainer {
  backgroundColor?: 'primary' | 'secondary'
  color?: 'primary' | 'secondary'
}

export const Container = styled.TouchableOpacity<TouchableContainer>`
  width: 100%;
  height: 54px;

  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'primary'};

  color: ${props => (props.color ? props.color : 'primary')};
`
