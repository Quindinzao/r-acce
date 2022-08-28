// External libraries
import React from 'react'
import { Alert, PermissionsAndroid, Platform, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { useTheme } from 'styled-components/native'

// Components
import Header from '../../components/Header'

// Routes
import { propsPastTravel } from '../../routes/models'

// Styled
import styles, {
  Container,
  Content,
  MapViewContent,
  PastTravelStatus,
  PastTravelText,
} from './styles'

const PastTravel: React.FC<propsPastTravel> = ({ route }) => {
  const { colors } = useTheme()
  const pastTravelItem = route.params.pastTravelItem
  const origin = pastTravelItem.origin
  const destination = pastTravelItem.destination

  return (
    <Container>
      <Header title={'Past Travel #' + route.params.pastTravelItem.id} />
      <Content>
        <MapViewContent>
          <MapView
            style={styles.mapView}
            onMapReady={() => {
              Platform.OS === 'android' &&
                PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                )
            }}
            initialRegion={{
              latitude: origin.latitude,
              longitude: origin.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            loadingEnabled
            zoomEnabled>
            <>
              <Marker coordinate={origin} pinColor={colors.danger} />
              <Marker coordinate={destination} pinColor={colors.danger} />
              <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={'AIzaSyCFpO6MAYw5GIErpFdXymewwe1RfB79Zxg'}
              />
              {Alert.alert(
                'OOPS!',
                'The "Travel" function is not activated as payment is required and this app has training functionality only.',
              )}
            </>
          </MapView>
        </MapViewContent>
        <View>
          <PastTravelStatus>
            <PastTravelText>Price:</PastTravelText>
            <PastTravelText>${pastTravelItem.price}</PastTravelText>
          </PastTravelStatus>
          <PastTravelStatus>
            <PastTravelText>Time travel:</PastTravelText>
            <PastTravelText>${pastTravelItem.time}</PastTravelText>
          </PastTravelStatus>
        </View>
      </Content>
    </Container>
  )
}

export default PastTravel
