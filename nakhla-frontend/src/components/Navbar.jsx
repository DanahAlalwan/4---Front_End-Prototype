import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function Navbar() {
  const navigate = useNavigate()
  const { user, logout } = useAppContext()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Nakhla
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {user.isAuthenticated && (
          <>
            <Link to="/category/beauty">Categories</Link>

            {user.role === 'customer' && <Link to="/favorites">Favorites</Link>}

            {user.role === 'brand-owner' && (
              <>
                <Link to="/brand-owner">Brand Owner</Link>
                <Link to="/create-brand-profile">Create Brand</Link>
              </>
            )}

            {user.role === 'admin' && (
              <>
                <Link to="/admin">Admin</Link>
                <Link to="/verification-requests">Requests</Link>
                <Link to="/manage-categories">Categories Management</Link>
              </>
            )}

            <button className="nav-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

        {!user.isAuthenticated && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  )
}