// External libraries
import React from 'react'

// Components
import Touchable from '../../components/Touchable'

// Assets
import Google from '../../assets/images/google.svg'
import Facebook from '../../assets/images/facebook.svg'
import Uber from '../../assets/images/uber.svg'

// Styled
import {
  Container,
  SocialMediaButton,
  SocialMediaContainer,
  Title,
} from './styles'

const Welcome: React.FC = () => {
  return (
    <Container>
      <Title>ACCE</Title>
      <Touchable
        title="Sign In"
        touchableType="filled"
        margin="0px 0px 8px 0px"
      />
      <Touchable title="First access" touchableType="outlined" />
      <SocialMediaContainer>
        <SocialMediaButton>
          <Google />
        </SocialMediaButton>
        <SocialMediaButton>
          <Facebook />
        </SocialMediaButton>
        <SocialMediaButton>
          <Uber />
        </SocialMediaButton>
      </SocialMediaContainer>
    </Container>
  )
}

export default Welcome
