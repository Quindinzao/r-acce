// External libraries
import React, { useContext } from 'react'

// Context
import { AuthContext } from '../../contexts/Auth'

// Services
import data from '../../services/data.json'

// Assets
import AirTransport from '../../assets/images/air_transport.svg'
import CarTransport from '../../assets/images/car_transport.svg'

// Styled
import { PastTravelList, PastTravelItem, PastTravelPrice } from './styles'

const PastTravelItemList: React.FC = () => {
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
        item: { price: string; type: string }
      }) => {
        return (
          <PastTravelItem
            activeOpacity={0.6}
            onPress={() => console.warn('price: ', pastTravelItem.item.price)}>
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
