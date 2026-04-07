
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CategoryPage from './pages/CategoryPage'
import BrandProfilePage from './pages/BrandProfilePage'
import FavoritesPage from './pages/FavoritesPage'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/brand/:id" element={<BrandProfilePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  )
}