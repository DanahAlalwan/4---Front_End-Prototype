import { createContext, useContext, useMemo, useState } from 'react'
import {
  brands as initialBrands,
  categories as initialCategories,
  verificationRequests as initialRequests,
} from '../data/mockData'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [user, setUser] = useState({
    name: '',
    role: '',
    isAuthenticated: false,
  })

  const [brands, setBrands] = useState(initialBrands)
  const [categories, setCategories] = useState(initialCategories)
  const [favorites, setFavorites] = useState([])
  const [verificationRequests, setVerificationRequests] = useState(initialRequests)

  const login = (role = 'customer') => {
    setUser({
      name: 'Current User',
      role,
      isAuthenticated: true,
    })
  }

  const logout = () => {
    setUser({
      name: '',
      role: '',
      isAuthenticated: false,
    })
    setFavorites([])
  }

  const toggleFavorite = (brandId) => {
    setFavorites((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    )
  }

  const addReview = (brandId, review) => {
    setBrands((prev) =>
      prev.map((brand) => {
        if (brand.id !== brandId) return brand

        const updatedReviews = [...brand.reviews, review]
        const avg =
          updatedReviews.reduce((sum, item) => sum + item.stars, 0) /
          updatedReviews.length

        return {
          ...brand,
          reviews: updatedReviews,
          rating: Number(avg.toFixed(1)),
        }
      })
    )
  }

  const addCategory = (category) => {
    if (!category.trim()) return
    if (categories.includes(category)) return
    setCategories((prev) => [...prev, category])
  }

  const deleteCategory = (category) => {
    setCategories((prev) => prev.filter((c) => c !== category))
  }

  const approveRequest = (id) => {
    setVerificationRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: 'Approved' } : req
      )
    )
  }

  const rejectRequest = (id) => {
    setVerificationRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: 'Rejected' } : req
      )
    )
  }

  const value = useMemo(
    () => ({
      user,
      setUser,
      login,
      logout,
      brands,
      categories,
      favorites,
      toggleFavorite,
      addReview,
      verificationRequests,
      approveRequest,
      rejectRequest,
      addCategory,
      deleteCategory,
    }),
    [user, brands, categories, favorites, verificationRequests]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}