import { FC, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

type Props = {
  children: ReactNode
}

export const Span: FC<Props> = ({ children }) => {
  return (
    <Box as="span" display="inline-block" lineHeight="base" textAlign={{ base: 'center', md: 'inherit' }}>
      {children}
    </Box>
  )
}
