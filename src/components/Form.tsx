import { FC } from 'react'
import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'

type FormTextProps = {
  id: string
  name: string
  required?: boolean
}

export const FormText: FC<FormTextProps> = ({ id, name, required }) => {
  return (
    <FormControl isRequired={!!required}>
      <FormLabel htmlFor={id} color="gray.800">
        {name}
      </FormLabel>
      <Input id={id} variant="outline" size="md" color="gray.800" />
    </FormControl>
  )
}

type FormTextareaProps = {
  id: string
  name: string
  required?: boolean
}

export const FormTextarea: FC<FormTextareaProps> = ({ id, name, required }) => {
  return (
    <FormControl isRequired={!!required}>
      <FormLabel htmlFor={id} color="gray.800">
        {name}
      </FormLabel>
      <Textarea id="message" variant="outline" size="md" color="gray.800" />
    </FormControl>
  )
}
