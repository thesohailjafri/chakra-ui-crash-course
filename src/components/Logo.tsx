import { Box, Image, BoxProps } from '@chakra-ui/react'
import React from 'react'

interface Props extends BoxProps {
  logoVarient?: 'default' | 'white'
}
export default function Logo({ logoVarient, ...props }: Props) {
  let logoSrc =
    logoVarient === 'white'
      ? '/assets/images/logo-bookmark-white.svg'
      : '/assets/images/logo-bookmark.svg'

  return (
    <Box {...props}>
      <Image src={logoSrc} alt={'Logo'} />
    </Box>
  )
}
