import { FC, ReactNode } from 'react'
import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react'

type Props = {
  src: string
  name: string
  children: ReactNode
}

export const Avatar: FC<Props> = ({ src, name, children }) => {
  return (
    <Stack direction="column" justify="center" align="center" spacing={8}>
      <Image src={src} alt={name} boxSize="3xs" objectFit="cover" borderRadius="full" />
      <Heading size="lg">{name}</Heading>
      <Box w="xs" overflowWrap="anywhere">
        <Text>{children}</Text>
      </Box>
    </Stack>
  )
}
