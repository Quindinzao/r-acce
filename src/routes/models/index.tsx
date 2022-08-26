import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type propsNavigationStack = {
  Welcome: undefined
  EmailValidation: undefined
  PasswordValidation: { email: string }
  TabRoutes: undefined
  NewTravel: undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>
export type propsPasswordValidationStack = NativeStackScreenProps<
  propsNavigationStack,
  'PasswordValidation'
>
