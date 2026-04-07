import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Nakhla</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/category/Fashion">Categories</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/brand-owner">Brand Owner</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  )
}