// External libraries
import styled from 'styled-components/native'

export const PastTravelList = styled.FlatList`
  margin-bottom: 9px;
  margin-right: 18px;
  margin-left: 18px;
`

export const PastTravelItem = styled.TouchableOpacity`
  height: 49px;

  margin-bottom: 15px;
  padding-right: 12px;
  padding-left: 4px;

  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;

  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${props => props.theme.colors.quaternary};
`

export const PastTravelPrice = styled.Text`
  margin-bottom: 4px;

  color: ${props => props.theme.colors.soft};
  font-family: ${props => props.theme.fonts.h4};
  font-size: 18px;
`
