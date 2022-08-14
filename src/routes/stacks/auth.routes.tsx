// External libraries
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Welcome from '../../screens/Welcome'
import EmailValidation from '../../screens/EmailValidation'
import PasswordValidation from '../../screens/PasswordValidation'

// Routes
import { propsNavigationStack } from '../models'

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

const AuthStack: React.FC = () => {
  return (
    <Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="EmailValidation" component={EmailValidation} />
      <Screen name="PasswordValidation" component={PasswordValidation} />
    </Navigator>
  )
}

export default AuthStack
