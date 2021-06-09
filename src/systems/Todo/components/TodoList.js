import { Stack } from '@chakra-ui/react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos }) => {
  return (
    <Stack mt={4}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Stack>
  )
}
