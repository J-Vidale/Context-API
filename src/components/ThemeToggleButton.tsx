import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

export const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  return <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'}</button>
}
