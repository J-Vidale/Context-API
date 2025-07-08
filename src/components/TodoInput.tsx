import React, { useState } from 'react'
import { useTodos } from '../contexts/TodoContext'

export const TodoInput: React.FC = () => {
  const [text, setText] = useState('')
  const { dispatch } = useTodos()

  const add = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD', text })
      setText('')
    }
  }

  return (
    <div>
      <input
        placeholder="What needs to be done?"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && add()}
      />
      <button onClick={add}>Add Todo</button>
    </div>
  )
}
