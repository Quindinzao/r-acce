// External libraries
import React from 'react'
import { ThemeProvider } from 'styled-components/native'

// Contexts
import { AuthProvider } from './contexts/Auth'

// Routes
import Routes from './routes'

// Styled
import theme from './styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
