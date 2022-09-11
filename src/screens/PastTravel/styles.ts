// External libraries
import { Dimensions, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${props => props.theme.colors.secondary};
`

export const Content = styled.View`
  flex: 1;

  justify-content: space-between;
`

export const MapViewContent = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.secondary};
`

export const PastTravelStatus = styled.View`
  height: 36px;

  margin-bottom: 15px;
  margin-right: 18px;
  margin-left: 18px;

  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;

  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${props => props.theme.colors.quaternary};
`

export const PastTravelText = styled.Text`
  margin-bottom: 4px;

  color: ${props => props.theme.colors.soft};
  font-family: ${props => props.theme.fonts.h4};
  font-size: 18px;
`

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  mapView: {
    width: width - 36,
    height: height - 360,
    marginTop: 18,
    marginBottom: 32,
  },
})

export default styles
