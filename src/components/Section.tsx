import { FC, ReactNode } from 'react'
import { Box, Container } from '@chakra-ui/react'

type Props = {
  teal?: boolean
  children: ReactNode
}

export const Section: FC<Props> = ({ teal, children }) => {
  return (
    <Box bg={teal ? 'teal.500' : 'inherit'}>
      <Container maxW="container.lg" px={4}>
        {children}
      </Container>
    </Box>
  )
}
