// External libraries
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { useTheme } from 'styled-components/native'

// Screens
import Home from '../../screens/Home'
import { Text } from 'react-native'

const { Navigator, Screen } = createBottomTabNavigator()

const TabRoutes: React.FC = () => {
  // const { colors } = useTheme()
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Text>A</Text>,
        }}
      />
    </Navigator>
  )
}

export default TabRoutes
