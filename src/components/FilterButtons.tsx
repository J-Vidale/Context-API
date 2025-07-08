import React from 'react'
import { useFilter } from '../contexts/FilterContext'

export const FilterButtons: React.FC = () => {
  const { filter, setFilter } = useFilter()
  return (
    <div>
      {(['all', 'active', 'completed'] as const).map(f => (
        <button
          key={f}
          disabled={filter === f}
          onClick={() => setFilter(f)}
        >
          {f[0].toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  )
}
