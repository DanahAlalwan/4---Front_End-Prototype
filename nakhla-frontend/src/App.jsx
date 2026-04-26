import { Routes, Route, Navigate } from 'react-router-dom'
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

import { useAppContext } from './context/AppContext'

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAppContext()

  if (!user.isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />
  }

  return children
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/category/:name"
          element={
            <ProtectedRoute>
              <CategoryPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/brand/:id"
          element={
            <ProtectedRoute>
              <BrandProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/favorites"
          element={
            <ProtectedRoute allowedRoles={['customer']}>
              <FavoritesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/brand-owner"
          element={
            <ProtectedRoute allowedRoles={['brand-owner']}>
              <BrandOwnerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-brand-profile"
          element={
            <ProtectedRoute allowedRoles={['brand-owner']}>
              <CreateBrandProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/submit-verification"
          element={
            <ProtectedRoute allowedRoles={['brand-owner']}>
              <SubmitVerificationPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/verification-requests"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <VerificationRequestsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-categories"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <ManageCategoriesPage />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </div>
  )
}