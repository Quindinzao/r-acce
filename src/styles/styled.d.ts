import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string // #1C1919
      secondary: string // #FFF8EC
      terciary: string // #654E4E

      default: string // #CAD9C8
      emphasis: string // #FFCC00
    }

    fonts: {
      title: string // Lexend Tera - Regular - 24px
      button: string // Mulish - Bold - 20px
    }
  }
}
