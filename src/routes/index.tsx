// External libraries
import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'

// Routes
import AppStack from './stacks/app.routes'
import AuthStack from './stacks/auth.routes'

// Contexts
import { useAuth } from '../contexts/Auth'

const Routes: React.FC = () => {
  const { authData, isLoading } = useAuth()
  if (!isLoading) {
    SplashScreen.hide()
  }
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Routes
