// External libraries
import React, { useContext } from 'react'

// Context
import { AuthContext } from '../../contexts/Auth'

// Services
import data from '../../services/data.json'

// Styled
import { BenefitItem, BenefitsList } from './styles'

const Benefits: React.FC = () => {
  const dataContext = useContext(AuthContext)
  const dataUser = data.users.find(value => {
    if (value.email === dataContext.authData?.email) {
      return value
    }
  })

  return (
    <BenefitsList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item: any) => item.id}
      data={dataUser?.benefits}
      renderItem={() => <BenefitItem />}
    />
  )
}

export default Benefits
