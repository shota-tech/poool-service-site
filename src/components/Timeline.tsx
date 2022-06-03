import { FC, ReactNode } from 'react'
import { Box, Center, Heading, Text, Stack, VStack, HStack } from '@chakra-ui/react'

export const TimelineForMobile = () => {
  return (
    <VStack spacing={-1} align="start">
      <Diagram w={24}>
        <Arrow direction="column" startColor="teal.50" endColor="teal.50" isStart />
      </Diagram>
      <ReleaseForMobile name="α版" term="2022 Q3" color="teal.50">
        【限定公開】
        <br />
        ・腸内細菌検査
        <br />
        ・データ登録/管理
      </ReleaseForMobile>
      <Diagram w={24}>
        <Arrow direction="column" startColor="teal.50" endColor="teal.100" />
      </Diagram>
      <ReleaseForMobile name="β版" term="2023 Q1" color="teal.100">
        【限定公開】
        <br />
        ・腸内細菌サービス利用
        <br />
        ・データ売買
      </ReleaseForMobile>
      <Diagram w={24}>
        <Arrow direction="column" startColor="teal.100" endColor="teal.200" />
      </Diagram>
      <ReleaseForMobile name="V1" term="2023 Q2" color="teal.200">
        【一般公開】
        <br />
        ・腸内細菌サービス利用
        <br />
        ・データ売買
      </ReleaseForMobile>
      <Diagram w={24}>
        <Arrow direction="column" startColor="teal.200" endColor="teal.300" />
      </Diagram>
      <ReleaseForMobile name="V2" term="2023 Q3" color="teal.300">
        【一般公開】
        <br />
        ・生活習慣データ記録
      </ReleaseForMobile>
      <Diagram w={24}>
        <Arrow direction="column" startColor="teal.300" endColor="teal.300" isEnd />
      </Diagram>
    </VStack>
  )
}

export const TimelineForPC = () => {
  return (
    <HStack spacing={-1} align="center">
      <Diagram>
        <Arrow direction="row" startColor="teal.50" endColor="teal.50" isStart />
      </Diagram>
      <ReleaseForPC name="α版" term="2022 Q3" color="teal.50">
        【限定公開】
        <br />
        ・腸内細菌検査
        <br />
        ・データ登録/管理
      </ReleaseForPC>
      <Diagram>
        <Arrow direction="row" startColor="teal.50" endColor="teal.100" />
      </Diagram>
      <ReleaseForPC name="β版" term="2023 Q1" color="teal.100">
        【限定公開】
        <br />
        ・腸内細菌サービス利用
        <br />
        ・データ売買
      </ReleaseForPC>
      <Diagram>
        <Arrow direction="row" startColor="teal.100" endColor="teal.200" />
      </Diagram>
      <ReleaseForPC name="V1" term="2023 Q2" color="teal.200">
        【一般公開】
        <br />
        ・腸内細菌サービス利用
        <br />
        ・データ売買
      </ReleaseForPC>
      <Diagram>
        <Arrow direction="row" startColor="teal.200" endColor="teal.300" />
      </Diagram>
      <ReleaseForPC name="V2" term="2023 Q3" color="teal.300">
        【一般公開】
        <br />
        ・生活習慣データ記録
      </ReleaseForPC>
      <Diagram>
        <Arrow direction="row" startColor="teal.300" endColor="teal.300" isEnd />
      </Diagram>
    </HStack>
  )
}

type ReleaseForMobileProps = {
  name: string
  term: string
  color: string
  children: ReactNode
}

const ReleaseForMobile: FC<ReleaseForMobileProps> = ({ name, term, color, children }) => {
  return (
    <HStack spacing={8}>
      <Diagram>
        <Circle size={24} bg={color}>
          {name}
        </Circle>
      </Diagram>
      <VStack align="start" justify="start" spacing={2} h={24}>
        <Heading color="gray.50" size="md">
          {term}
        </Heading>
        <Text color="gray.50" fontSize={16} fontWeight="bold" whiteSpace="nowrap">
          {children}
        </Text>
      </VStack>
    </HStack>
  )
}

type ReleaseForPCProps = {
  name: string
  term: string
  color: string
  children: ReactNode
}

const ReleaseForPC: FC<ReleaseForPCProps> = ({ name, term, color, children }) => {
  return (
    <VStack align="center" justify="center" spacing={8}>
      <VStack align="center" justify="end" h={16} w={24}>
        <Heading color="gray.50" size="md">
          {term}
        </Heading>
      </VStack>
      <Diagram>
        <Circle size={24} bg={color}>
          {name}
        </Circle>
      </Diagram>
      <VStack align="start" justify="start" h={16} w={24}>
        <Text color="gray.50" fontSize={16} fontWeight="bold" whiteSpace="nowrap">
          {children}
        </Text>
      </VStack>
    </VStack>
  )
}

type DiagramProps = {
  w?: number
  children: ReactNode
}

const Diagram: FC<DiagramProps> = ({ w, children }) => {
  return (
    <Center h="full" w={w} position="relative">
      {children}
    </Center>
  )
}

type ArrowProps = {
  direction: 'column' | 'row'
  startColor: string
  endColor: string
  isStart?: boolean
  isEnd?: boolean
}

const Arrow: FC<ArrowProps> = ({ direction, startColor, endColor, isStart, isEnd }) => {
  const to = direction === 'column' ? 'to-b' : 'to-r'
  const bgGradient = `linear(${to}, ${startColor}, ${endColor})`
  return (
    <Stack direction={direction} spacing={-1} justify="center" align="center">
      {isStart && <Box w={4} h={4} rounded="50%" bg={startColor} />}
      <Box w={direction === 'column' ? 1.5 : 32} h={direction === 'column' ? 20 : 1.5} bgGradient={bgGradient} />
      {isEnd && (
        <Box
          w={0}
          h={0}
          border={12}
          borderStyle="solid"
          borderTopColor={direction === 'column' ? endColor : 'transparent'}
          borderRightColor="transparent"
          borderBottomColor="transparent"
          borderLeftColor={direction === 'column' ? 'transparent' : endColor}
        />
      )}
    </Stack>
  )
}

type CircleProps = {
  size: number
  bg: string
  children: ReactNode
}

const Circle: FC<CircleProps> = ({ size, bg, children }) => {
  return (
    <Center w={size} h={size} bg={bg} rounded="50%">
      <Heading color="gray.800" size="md">
        {children}
      </Heading>
    </Center>
  )
}
