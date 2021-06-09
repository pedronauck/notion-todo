import { useQuery } from 'react-query'
import { Box } from '@chakra-ui/react'

import { App } from 'systems/Core'
import { TodoList, AddTodo, api } from 'systems/Todo'

export default function CompletedTodos() {
  const query = ['todos', { completed: true }]
  const { isLoading, data: todos } = useQuery(query, api.fetchCompleted)

  return (
    <App isLoading={isLoading}>
      <AddTodo />
      <TodoList todos={todos} />
      {todos && !todos.length && (
        <Box color="gray.500">There's no todo completed</Box>
      )}
    </App>
  )
}
