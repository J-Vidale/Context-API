import React from 'react'
import { useTodos } from '../contexts/TodoContext'
import { useFilter } from '../contexts/FilterContext'
import { TodoItem } from './TodoItem'

export const TodoList: React.FC = () => {
  const { todos, dispatch } = useTodos()
  const { filter } = useFilter()

  const filtered = todos.filter(t => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  return (
    <div>
      {filtered.length === 0 ? (
        <p>No todos here!</p>
      ) : (
        filtered.map(todo => <TodoItem key={todo.id} todo={todo} />)
      )}
      {todos.some(t => t.completed) && (
        <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>
          Clear Completed
        </button>
      )}
    </div>
  )
}
