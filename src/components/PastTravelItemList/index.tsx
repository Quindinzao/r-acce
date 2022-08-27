// External libraries
import React, { useContext } from 'react'

// Context
import { AuthContext } from '../../contexts/Auth'

// Routes
import { propsStack } from '../../routes/models'

// Services
import data from '../../services/data.json'

// Assets
import AirTransport from '../../assets/images/air_transport.svg'
import CarTransport from '../../assets/images/car_transport.svg'

// Styled
import { PastTravelList, PastTravelItem, PastTravelPrice } from './styles'
import { useNavigation } from '@react-navigation/native'

const PastTravelItemList: React.FC = () => {
  const navigation = useNavigation<propsStack>()
  const dataContext = useContext(AuthContext)
  const dataUser = data.users.find(value => {
    if (value.email === dataContext.authData?.email) {
      return value
    }
  })

  return (
    <PastTravelList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item: { id: number }) => item.id}
      data={dataUser?.past_travel}
      renderItem={(pastTravelItem: {
        item: {
          id: number
          origin: {
            latitude: number
            longitude: number
          }
          destination: {
            latitude: number
            longitude: number
          }
          price: number
          time: string
          type: string
        }
      }) => {
        return (
          <PastTravelItem
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate('PastTravel', {
                pastTravelItem: {
                  id: pastTravelItem.item.id,
                  origin: {
                    latitude: pastTravelItem.item.origin.latitude,
                    longitude: pastTravelItem.item.origin.longitude,
                  },
                  destination: {
                    latitude: pastTravelItem.item.destination.latitude,
                    longitude: pastTravelItem.item.destination.longitude,
                  },
                  price: pastTravelItem.item.price,
                  time: pastTravelItem.item.time,
                },
              })
            }>
            <PastTravelPrice>${pastTravelItem.item.price}</PastTravelPrice>
            {pastTravelItem.item.type === 'airplane' && <AirTransport />}
            {pastTravelItem.item.type === 'car' && <CarTransport />}
          </PastTravelItem>
        )
      }}
    />
  )
}

export default PastTravelItemList
