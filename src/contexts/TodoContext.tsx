import React, { createContext, useContext, useReducer, useEffect } from 'react'

export interface Todo {
  id: number
  text: string
  completed: boolean
}

type State = Todo[]
type Action =
  | { type: 'ADD'; text: string }
  | { type: 'TOGGLE'; id: number }
  | { type: 'DELETE'; id: number }
  | { type: 'EDIT'; id: number; text: string }
  | { type: 'CLEAR_COMPLETED' }
  | { type: 'SET'; todos: Todo[] }

const TodoContext = createContext<{
  todos: State
  dispatch: React.Dispatch<Action>
}>({ todos: [], dispatch: () => null })

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ]
    case 'TOGGLE':
      return state.map(t =>
        t.id === action.id ? { ...t, completed: !t.completed } : t
      )
    case 'DELETE':
      return state.filter(t => t.id !== action.id)
    case 'EDIT':
      return state.map(t =>
        t.id === action.id ? { ...t, text: action.text } : t
      )
    case 'CLEAR_COMPLETED':
      return state.filter(t => !t.completed)
    case 'SET':
      return action.todos
    default:
      return state
  }
}

export const TodoProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, [], init => {
    const stored = localStorage.getItem('todos')
    return stored ? JSON.parse(stored) : init
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodos = () => useContext(TodoContext)
