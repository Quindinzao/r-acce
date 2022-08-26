// External libraries
import { Dimensions, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${props => props.theme.colors.secondary};
`

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  mapView: {
    width: width,
    height: height - 80,
  },
})

export default styles
