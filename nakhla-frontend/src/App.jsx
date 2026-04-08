import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import BrandProfilePage from './pages/BrandProfilePage'
import FavoritesPage from './pages/FavoritesPage'
import BrandOwnerDashboard from './pages/BrandOwnerDashboard'
import CreateBrandProfilePage from './pages/CreateBrandProfilePage'
import SubmitVerificationPage from './pages/SubmitVerificationPage'
import AdminDashboard from './pages/AdminDashboard'
import VerificationRequestsPage from './pages/VerificationRequestsPage'
import ManageCategoriesPage from './pages/ManageCategoriesPage'

export default function App() {
  return (
      <div className="app-shell">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/category/:name" element={<CategoryPage />} />
          <Route path="/brand/:id" element={<BrandProfilePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/brand-owner" element={<BrandOwnerDashboard />} />
          <Route
              path="/brand-owner/create-profile"
              element={<CreateBrandProfilePage />}
          />
          <Route
              path="/brand-owner/submit-verification"
              element={<SubmitVerificationPage />}
          />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route
              path="/admin/requests"
              element={<VerificationRequestsPage />}
          />
          <Route
              path="/admin/categories"
              element={<ManageCategoriesPage />}
          />
        </Routes>

        <Footer />
      </div>
  )
}