// External libraries
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.secondary};
`

export const ContentSettings = styled.View`
  flex: 1;
  margin-top: 12px;
  padding: 18px;

  justify-content: space-between;
`

export const RowSettings = styled.View`
  margin-bottom: 24px;
  padding-bottom: 8px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #d6c2b4;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const TextSetting = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 17px;
  font-family: ${props => props.theme.fonts.h4};
`
