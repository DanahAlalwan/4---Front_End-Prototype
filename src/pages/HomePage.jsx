
import { useAppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const { brands } = useAppContext()

  return (
    <div>
      <h1>Home</h1>
      {brands.map((b) => (
        <div key={b.id}>
          <h3>{b.name}</h3>
          <Link to={`/brand/${b.id}`}>View</Link>
        </div>
      ))}
    </div>
  )
}