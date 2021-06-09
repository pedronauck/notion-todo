import { useState } from 'react'
import { Checkbox, Flex, Spinner } from '@chakra-ui/react'
import { useMutation, useQueryClient, useIsFetching } from 'react-query'

import * as api from '../api'

export const TodoItem = ({ todo }) => {
  const title = todo.properties.name.title[0].plainText
  const initialIsChecked = todo.properties.done.checkbox

  const queryClient = useQueryClient()
  const [isChecked, setChecked] = useState(initialIsChecked)
  const [isHidden, setHidden] = useState(false)

  const { mutate, isLoading } = useMutation(api.updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
      setHidden(true)
    },
  })

  const handleUpdateTodo = (id) => (e) => {
    const done = e.target.checked
    setChecked(done)
    mutate({ id, done })
  }

  if (isHidden) return null
  return (
    <Flex justifyContent="space-between">
      <Checkbox
        key={todo.id}
        isChecked={isChecked}
        onChange={handleUpdateTodo(todo.id)}
        isDisabled={isLoading}
      >
        {title}
      </Checkbox>
      {Boolean(isLoading) && <Spinner size="xs" />}
    </Flex>
  )
}
