// Extrnal libraries
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Alert } from 'react-native'
import { authService } from '../services/authService'

export interface AuthData {
  token: string
  email: string
  username: string
}

interface AuthContextData {
  authData?: AuthData
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  isLoading: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
  children?: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadFromStorage()
  }, [])

  const loadFromStorage = async () => {
    const auth = await AsyncStorage.getItem('@AuthData')
    if (auth) {
      setAuthData(JSON.parse(auth) as AuthData)
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const signIn = async (email: string, password: string) => {
    try {
      const auth = await authService.SignIn(email, password)
      setAuthData(auth)
      AsyncStorage.setItem('@AuthData', JSON.stringify(auth))
    } catch (error: any) {
      Alert.alert(':/', error.message)
    }
  }

  const signOut = async (): Promise<void> => {
    setAuthData(undefined)
    AsyncStorage.removeItem('@AuthData')
    return
  }

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}

// Add npx pod-install to IOS platform
