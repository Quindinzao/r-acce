// External libraries
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'

// Screens
import Home from '../../screens/Home'
import Travel from '../../screens/Travel'
import Wallet from '../../screens/Wallet'

// Assets
import IconHome from '../../assets/images/TabBarIcons/home.svg'
import IconHomeSelected from '../../assets/images/TabBarIcons/home_selected.svg'
import IconTravel from '../../assets/images/TabBarIcons/car.svg'
import IconTravelSelected from '../../assets/images/TabBarIcons/car_selected.svg'
import IconWallet from '../../assets/images/TabBarIcons/money.svg'
import IconWalletSelected from '../../assets/images/TabBarIcons/money_selected.svg'

const { Navigator, Screen } = createBottomTabNavigator()

const TabRoutes: React.FC = () => {
  const { colors } = useTheme()
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.primary,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 56,
        },
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <IconHomeSelected /> : <IconHome />
          },
        }}
      />
      <Screen
        name="Travel"
        component={Travel}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <IconTravelSelected /> : <IconTravel />
          },
        }}
      />
      <Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <IconWalletSelected height={28} /> : <IconWallet />
          },
          tabBarBadge: 1,
          tabBarBadgeStyle: {
            paddingTop: 2,
            backgroundColor: colors.emphasis,
            borderRadius: 5,
            fontWeight: 'bold',
          },
        }}
      />
    </Navigator>
  )
}

export default TabRoutes
