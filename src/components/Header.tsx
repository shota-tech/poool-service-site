import { Flex, Box, Heading, LinkBox, LinkOverlay, Spacer } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box as="header" h={16}>
      <Flex direction="row" h="full" px={8} justify="center" align="center">
        <LinkBox>
          <Heading color="teal.500">
            <LinkOverlay href="/">Poool</LinkOverlay>
          </Heading>
        </LinkBox>
        <Spacer />
      </Flex>
    </Box>
  )
}
