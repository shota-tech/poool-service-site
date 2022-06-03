import { FC, ReactNode } from 'react'
import { Heading, Text, VStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

type Props = {
  children: ReactNode
}

export const Step: FC<Props> = ({ children }) => {
  return (
    <VStack justify="center" align="center" spacing={8} w="xs" p={8} rounded="xl" shadow="2xl" bg="gray.50">
      {children}
    </VStack>
  )
}

type StepHeaderProps = {
  children: ReactNode
}

export const StepHeader: FC<StepHeaderProps> = ({ children }) => {
  return (
    <Heading size="lg" color="teal.500" textAlign="center" lineHeight="base">
      {children}
    </Heading>
  )
}

type StepIconProps = {
  icon: IconType
}

export const StepIcon: FC<StepIconProps> = ({ icon }) => {
  return <Icon as={icon} boxSize={32} color="teal.500" />
}

type StepDescriptionProps = {
  children: ReactNode
}

export const StepDescription: FC<StepDescriptionProps> = ({ children }) => {
  return (
    <Text fontSize={16} color="gray.800">
      {children}
    </Text>
  )
}
