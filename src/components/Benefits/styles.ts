// External libraries
import styled from 'styled-components/native'

export const Container = styled.View`
  padding-bottom: 24px;
  background-color: ${props => props.theme.colors.primary};
`

export const BenefitsList = styled.FlatList`
  max-height: 180px;

  margin-right: 9px;
  margin-left: 9px;
`

export const BenefitItem = styled.TouchableOpacity`
  width: 140px;
  height: 180px;

  margin-right: 9px;
  margin-left: 9px;

  border-radius: 6px;

  background-color: ${props => props.theme.colors.secondary};
`
