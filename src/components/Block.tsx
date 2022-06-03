import { FC, ReactNode } from 'react'
import { Heading, Stack, VStack } from '@chakra-ui/react'

type BlockProps = {
  white?: boolean
  spacing?: 2 | 4 | 8
  align?: 'start' | 'center' | 'end'
  children: ReactNode
}

export const Block: FC<BlockProps> = ({ white, align = 'start', spacing = 4, children }) => {
  return (
    <VStack spacing={spacing} color={white ? 'gray.100' : 'gray.800'} align={{ base: 'center', md: align }}>
      {children}
    </VStack>
  )
}

type BlockTitleProps = {
  size?: 'xl' | '2xl'
  children: ReactNode
}

export const BlockTitle: FC<BlockTitleProps> = ({ size = 'xl', children }) => {
  return (
    <Heading size={size} textAlign={{ base: 'center', md: 'inherit' }} whiteSpace={{ base: 'normal', md: 'nowrap' }}>
      {children}
    </Heading>
  )
}

type BlockBodyProps = {
  width?: 'sm' | 'md' | 'xl'
  children: ReactNode
}

export const BlockBody: FC<BlockBodyProps> = ({ width = 'sm', children }) => {
  return (
    <Stack direction="column" spacing={4} w={{ base: 'full', md: width }} align="inherit">
      {children}
    </Stack>
  )
}
