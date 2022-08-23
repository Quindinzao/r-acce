// External libraries
import styled from 'styled-components/native'

export const FriendsList = styled.FlatList`
  max-height: 71px;

  margin-top: 18px;
  margin-bottom: 18px;
  margin-right: 9px;
  margin-left: 9px;
`

export const ItemFriend = styled.View`
  height: 71px;

  margin-right: 9px;
  margin-left: 9px;

  align-items: center;
  justify-content: center;
`

export const FriendName = styled.Text`
  color: #000000;
  font-family: ${props => props.theme.fonts.h4};
`
