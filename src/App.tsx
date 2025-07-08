import React from 'react'
import { TodoProvider } from './contexts/TodoContext'
import { FilterProvider } from './contexts/FilterContext'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { FilterButtons } from './components/FilterButtons'
import { ThemeToggleButton } from './components/ThemeToggleButton'
import './index.css'

const Content: React.FC = () => {
  const { theme } = useTheme()
  return (
    <div
      className="app"
      style={{
        backgroundColor:
          theme === 'light' ? 'var(--bg-light)' : 'var(--bg-dark)',
        color: theme === 'light' ? 'var(--text-light)' : 'var(--text-dark)',
      }}
    >
      <ThemeToggleButton />
      <h1>What needs to be done?</h1>
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </div>
  )
}

export const App: React.FC = () => (
  <ThemeProvider>
    <TodoProvider>
      <FilterProvider>
        <Content />
      </FilterProvider>
    </TodoProvider>
  </ThemeProvider>
)
