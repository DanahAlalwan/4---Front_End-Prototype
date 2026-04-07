
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <h2>Nakhla</h2>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/login">Login</Link>
    </nav>
  )
}