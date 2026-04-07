import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function BrandCard({ brand }) {
  const { favorites, toggleFavorite } = useAppContext()
  const isFavorite = favorites.includes(brand.id)

  return (
    <div className="brand-card">
      <img src={brand.image} alt={brand.name} className="brand-img" />

      <h3>{brand.name}</h3>
      <p>{brand.category}</p>
      <p>⭐ {brand.rating}</p>

      <div className="card-actions">
        <Link to={`/brand/${brand.id}`} className="btn">
          View Details
        </Link>

        <button
          className="btn btn-outline"
          onClick={() => toggleFavorite(brand.id)}
        >
          {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
        </button>
      </div>
    </div>
  )
}