import { FC } from 'react'
import { Box } from '@chakra-ui/react'

type Props = {
  direction: 'column' | 'row'
  color: string
}

export const Triangle: FC<Props> = ({ direction, color }) => {
  return (
    <Box position="relative" w={8} h={8}>
      <Box
        w={0}
        h={0}
        position="absolute"
        top={direction === 'column' ? 2 : 0}
        left={direction === 'column' ? 0 : 2}
        border={16}
        borderStyle="solid"
        borderTopColor={direction === 'column' ? color : 'transparent'}
        borderRightColor="transparent"
        borderBottomColor="transparent"
        borderLeftColor={direction === 'column' ? 'transparent' : color}
      />
    </Box>
  )
}
