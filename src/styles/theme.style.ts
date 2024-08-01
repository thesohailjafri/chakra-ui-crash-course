import { extendTheme } from '@chakra-ui/react'
import { Rubik } from 'next/font/google'
const headlingFont = Rubik({
  subsets: ['latin'],
})
const bodyFont = Rubik({
  subsets: ['latin'],
})
export const theme = extendTheme({
  styles: {},
  colors: {
    primary: {
      softblue: 'hsl(231, 69%, 60%)',
      softred: 'hsl(0, 94%, 66%)',
      grayishblue: 'hsl(229, 8%, 60%)',
      verydarkblue: 'hsl(229, 31%, 21%)',
    },
  },
  components: {
    Button: {
      variants: {},
    },
  },
  Text: {
    variants: {},
  },
  Heading: {
    variants: {},
  },
  fonts: {
    heading: headlingFont.style.fontFamily,
    body: bodyFont.style.fontFamily,
  },
})
