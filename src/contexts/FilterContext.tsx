import React, { createContext, useContext, useState } from 'react'

type Filter = 'all' | 'active' | 'completed'

const FilterContext = createContext<{
  filter: Filter
  setFilter: (f: Filter) => void
}>({ filter: 'all', setFilter: () => null })

export const FilterProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [filter, setFilter] = useState<Filter>('all')
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)
