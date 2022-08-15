import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secondary: string
      terciary: string
      quaternary: string

      default: string
      emphasis: string
    }

    fonts: {
      title: string
      button: string
    }
  }
}
