import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

import * as api from '../api'

export const AddTodo = () => {
  const [text, setText] = useState('')
  const queryClient = useQueryClient()

  const addTodo = useMutation(api.addTodo, {
    onSuccess: () => {
      setText('')
      queryClient.invalidateQueries('todos')
    },
  })

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleAddTodo = () => {
    addTodo.mutate(text)
  }

  return (
    <InputGroup size="md" mb={4}>
      <Input
        pr="4.5rem"
        type="text"
        placeholder="Type your todo..."
        value={text}
        onChange={handleChange}
        isDisabled={addTodo.isLoading}
      />
      <InputRightElement width="4.5rem">
        <Button
          colorScheme="pink"
          h="1.75rem"
          size="sm"
          onClick={handleAddTodo}
        >
          Add
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
