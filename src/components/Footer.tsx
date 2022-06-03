import { Flex, Box, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box as="footer" h={12}>
      <Flex direction="row" h="full" px={4} justify="center" align="center">
        <Text color="gray.800">Have a nice poo!!!</Text>
      </Flex>
    </Box>
  )
}
