import { useParams } from 'react-router-dom'
import ReviewForm from '../components/ReviewForm'
import { useAppContext } from '../context/AppContext'

export default function BrandProfilePage() {
  const { id } = useParams()
  const { brands, toggleFavorite, favorites } = useAppContext()

  const brand = brands.find((item) => item.id === Number(id))

  if (!brand) {
    return <p className="page">Brand not found.</p>
  }

  const isFavorite = favorites.includes(brand.id)

  return (
    <div className="page">
      <div className="brand-profile">
        <img src={brand.image} alt={brand.name} className="cover-image" />

        <div className="brand-info">
          <img src={brand.logo} alt={brand.name} className="brand-logo" />
          <h2>{brand.name}</h2>
          <p>{brand.description}</p>
          <p>
            <strong>Category:</strong> {brand.category}
          </p>
          <p>
            <strong>Average Rating:</strong> ⭐️ {brand.rating}
          </p>

          <div className="card-actions">
            <a
              href={brand.website}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Visit Website
            </a>

            <button
              className="btn btn-outline"
              onClick={() => toggleFavorite(brand.id)}
            >
              {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>

      <ReviewForm brandId={brand.id} />

      <div className="reviews-list">
        <h3>Customer Reviews</h3>

        {brand.reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          brand.reviews.map((review) => (
            <div key={review.id} className="review-card">
              <p>
                <strong>{review.user}</strong>
              </p>
              <p>⭐️ {review.stars}</p>
              <p>{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
} 
