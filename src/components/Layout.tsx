import { FC, ReactNode } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Header, Footer } from '@/components'

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh" w="full" bg="gray.50">
      <Header />
      <Box as="main" flex={1}>
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}
