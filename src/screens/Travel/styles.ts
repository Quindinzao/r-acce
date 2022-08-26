// External libraries
import { Dimensions, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: ${props => props.theme.colors.secondary};
`

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  mapView: {
    width: width,
    height: height - 100,
  },
})

export default styles
