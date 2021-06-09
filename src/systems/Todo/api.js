import axios from 'axios'

const client = axios.create({ url: '/' })

export const fetchAll = async () => {
  const { data } = await client.get('/api/todos')
  return data
}

export const fetchCompleted = async () => {
  const { data } = await client.get('/api/todos?completed=true')
  return data
}

export const addTodo = async (text) => {
  const { data } = await client.patch('/api/todos/add', { text })
  return data
}

export const updateTodo = async (query) => {
  const { data } = await client.patch('/api/todos/update', query)
  return data
}
