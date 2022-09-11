import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type propsNavigationStack = {
  Welcome: undefined
  EmailValidation: undefined
  PasswordValidation: { email: string }
  TabRoutes: undefined
  Settings: undefined
  NewTravel: undefined
  PastTravel: {
    pastTravelItem: {
      id: number
      origin: {
        latitude: number
        longitude: number
      }
      destination: {
        latitude: number
        longitude: number
      }
      price: number
      time: string
    }
  }
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>
export type propsPasswordValidationStack = NativeStackScreenProps<
  propsNavigationStack,
  'PasswordValidation'
>
export type propsPastTravel = NativeStackScreenProps<
  propsNavigationStack,
  'PastTravel'
>
