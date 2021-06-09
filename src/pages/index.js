import { useQuery } from 'react-query'
import { Box } from '@chakra-ui/react'

import { App } from 'systems/Core'
import { TodoList, AddTodo, api } from 'systems/Todo'

export default function Home() {
  const query = ['todos', { completed: false }]
  const { isLoading, data: todos } = useQuery(query, api.fetchAll)

  return (
    <App isLoading={isLoading}>
      <AddTodo />
      <TodoList todos={todos} />
      {todos && !todos.length && (
        <Box color="gray.500">There's no todo added</Box>
      )}
    </App>
  )
}
