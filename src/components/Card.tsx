import { FC, ReactNode } from 'react'
import { Text, Spacer, Icon, Stack, VStack } from '@chakra-ui/react'
import { IconType } from 'react-icons'

type Props = {
  header: string
  icon: IconType
  color: string
  bgGradient: string
  reverse?: boolean
  children: ReactNode
}

export const Card: FC<Props> = ({ header, icon, color, bgGradient, reverse, children }) => {
  return (
    <Stack
      direction="column"
      h={{ base: '3xl', md: 'xl' }}
      w={{ base: 'full', md: '4xl' }}
      rounded="xl"
      shadow="2xl"
      bgGradient={bgGradient}
      spacing={{ base: 16, md: 0 }}
    >
      <VStack align={{ base: 'center', md: reverse ? 'end' : 'start' }} pt={4} px={8}>
        <Text fontSize={{ base: 80, md: 160 }} fontWeight="bold" color={color} lineHeight="none">
          {header}
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column-reverse', md: reverse ? 'row-reverse' : 'row' }}
        align={{ base: 'center', md: 'end' }}
        pb={12}
        px={8}
        h="full"
      >
        <Icon as={icon} boxSize={64} color={color} ml={{ md: reverse ? 0 : 8 }} mr={{ md: reverse ? 8 : 0 }} />
        <Spacer />
        {children}
      </Stack>
    </Stack>
  )
}
