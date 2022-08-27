// External libraries
import React from 'react'
import { Alert, PermissionsAndroid, Platform } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { useTheme } from 'styled-components/native'

// Components
import Header from '../../components/Header'

// Routes
import { propsPastTravel } from '../../routes/models'

// Styled
import styles, { Container } from './styles'

const PastTravel: React.FC<propsPastTravel> = ({ route }) => {
  const { colors } = useTheme()
  const origin = route.params.pastTravelItem.origin
  const destination = route.params.pastTravelItem.destination

  return (
    <Container>
      <Header title={'Past Travel #' + route.params.pastTravelItem.id} />
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
        showsUserLocation
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
    </Container>
  )
}

export default PastTravel
