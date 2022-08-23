// External libraries
import React from 'react'

// Services
import data from '../../services/data.json'

// Styled
import { BenefitItem, BenefitsList } from './styles'

const Benefits: React.FC = () => {
  return (
    <BenefitsList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item: any) => item.id}
      data={data.users[0].benefits}
      renderItem={() => <BenefitItem />}
    />
  )
}

export default Benefits
