// External libraries
import React from 'react'
import { ThemeProvider } from 'styled-components/native'

// Components
import Welcome from './screens/Welcome'

// Styled
import theme from './styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  )
}

export default App
