// External libraries
import Geolocation from '@react-native-community/geolocation'
import React, { useEffect, useState } from 'react'
import { PermissionsAndroid, Platform } from 'react-native'
import MapView, { MapPressEvent, Marker } from 'react-native-maps'
import { useTheme } from 'styled-components/native'

// Components
import Header from '../../components/Header'

// Styled
import styles, { Container } from './styles'

interface RegionProps {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

interface MarkersProps {
  coords: {
    latitude: any
    longitude: any
  }
  pinColor: any
}

const NewTravel: React.FC = () => {
  const { colors } = useTheme()
  const [region, setRegion] = useState<RegionProps>()
  const [markers, setMarkers] = useState<MarkersProps>()

  useEffect(() => {
    getMyLocation()
  }, [])

  const getMyLocation = () => {
    Geolocation.getCurrentPosition(
      info => {
        setRegion({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        })
      },
      () => {
        console.warn('something went wrong')
      },
      {
        enableHighAccuracy: true,
        timeout: 2000,
      },
    )
  }

  const newMarker = (e: MapPressEvent) => {
    const dataMark = {
      coords: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
      },
      pinColor: colors.danger,
    }

    setRegion({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })

    setMarkers(dataMark)
  }

  return (
    <Container>
      <Header title="New Travel" />
      <MapView
        style={styles.mapView}
        onMapReady={() => {
          Platform.OS === 'android' &&
            PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            )
        }}
        initialRegion={region}
        loadingEnabled
        showsUserLocation
        zoomEnabled
        onPress={(event: MapPressEvent) => newMarker(event)}>
        {markers && (
          <Marker coordinate={markers.coords} pinColor={markers.pinColor} />
        )}
      </MapView>
    </Container>
  )
}

export default NewTravel
