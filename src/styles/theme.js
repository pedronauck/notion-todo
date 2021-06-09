import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: 'Inter',
    heading: 'Inter',
  },
  styles: {
    global: {
      body: {
        letterSpacing: '-0.04em',
      },
    },
  },
})
