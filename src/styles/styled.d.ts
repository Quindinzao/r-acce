import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secondary: string
      terciary: string
      quaternary: string

      danger: string

      default: string
      emphasis: string
    }

    fonts: {
      h1: string
      h4: string
    }
  }
}
