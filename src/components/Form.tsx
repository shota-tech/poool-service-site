import { FC } from 'react'
import { FormControl, FormLabel, FormErrorMessage, Input, Textarea } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

type FormTextProps = {
  id: string
  name: string
  placeholder?: string
  required?: boolean
}

export const FormText: FC<FormTextProps> = ({ id, name, placeholder, required }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isRequired={!!required} isInvalid={errors[id]}>
      <FormLabel htmlFor={id} color="gray.800">
        {name}
      </FormLabel>
      <Input
        id={id}
        placeholder={placeholder}
        variant="outline"
        size="md"
        color="gray.800"
        {...register(id, {
          required: required ? '必須項目です。' : false,
        })}
      />
      <FormErrorMessage>{errors[id] && errors[id].message}</FormErrorMessage>
    </FormControl>
  )
}

type FormEmailProps = {
  id: string
  name: string
  placeholder?: string
  required?: boolean
}

export const FormEmail: FC<FormEmailProps> = ({ id, name, placeholder, required }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isRequired={!!required} isInvalid={errors[id]}>
      <FormLabel htmlFor={id} color="gray.800">
        {name}
      </FormLabel>
      <Input
        id={id}
        placeholder={placeholder}
        variant="outline"
        size="md"
        color="gray.800"
        {...register(id, {
          required: required ? '必須項目です。' : false,
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: '正しい形式で入力してください。',
          },
        })}
      />
      <FormErrorMessage>{errors[id] && errors[id].message}</FormErrorMessage>
    </FormControl>
  )
}

type FormTextareaProps = {
  id: string
  name: string
  placeholder?: string
  required?: boolean
}

export const FormTextarea: FC<FormTextareaProps> = ({ id, name, placeholder, required }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isRequired={!!required} isInvalid={errors[id]}>
      <FormLabel htmlFor={id} color="gray.800">
        {name}
      </FormLabel>
      <Textarea
        id="message"
        placeholder={placeholder}
        variant="outline"
        size="md"
        color="gray.800"
        {...register(id, { required: required ? '必須項目です。' : false })}
      />
      <FormErrorMessage>{errors[id] && errors[id].message}</FormErrorMessage>
    </FormControl>
  )
}
