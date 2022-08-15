// External libraries
import React from 'react'

// Components
import Touchable from '../../components/Touchable'
import ButtonSignIn from '../../components/ButtonSignIn'

// Assets
import Google from '../../assets/images/google.svg'
import Facebook from '../../assets/images/facebook.svg'
import Uber from '../../assets/images/uber.svg'

// Styled
import { Container, SocialLoginContent, Title } from './styles'

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
      <SocialLoginContent>
        <ButtonSignIn image={<Google />} />
        <ButtonSignIn image={<Facebook />} />
        <ButtonSignIn image={<Uber />} />
      </SocialLoginContent>
    </Container>
  )
}

export default Welcome
