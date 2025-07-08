import React, { useState } from 'react'
import { Todo, useTodos } from '../contexts/TodoContext'

export const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const { dispatch } = useTodos()
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(todo.text)

  const save = () => {
    dispatch({ type: 'EDIT', id: todo.id, text })
    setEditing(false)
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: 'TOGGLE', id: todo.id })}
      />
      {editing ? (
        <>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && save()}
          />
          <button onClick={save}>Save</button>
        </>
      ) : (
        <>
          <span className="text" onDoubleClick={() => setEditing(true)}>
            {todo.text}
          </span>
          <button onClick={() => dispatch({ type: 'DELETE', id: todo.id })}>
            ×
          </button>
        </>
      )}
    </div>
  )
}
