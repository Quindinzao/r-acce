// External libraries
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import NewTravel from '../../screens/NewTravel'

// Routes
import TabRoutes from '../custom/tab.routes'
import { propsNavigationStack } from '../models'

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

const AppStack: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="TabRoutes" component={TabRoutes} />
      <Screen name="NewTravel" component={NewTravel} />
    </Navigator>
  )
}

export default AppStack
