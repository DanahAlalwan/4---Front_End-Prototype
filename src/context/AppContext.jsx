
import { createContext, useContext, useState } from 'react'
import { brands } from '../data/mockData'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )
  }

  return (
    <AppContext.Provider value={{ brands, favorites, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}