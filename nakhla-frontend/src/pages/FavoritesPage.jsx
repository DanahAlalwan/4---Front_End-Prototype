import BrandCard from '../components/BrandCard'
import { useAppContext } from '../context/AppContext'

export default function FavoritesPage() {
  const { brands, favorites } = useAppContext()

  const favoriteBrands = brands.filter((brand) =>
    favorites.includes(brand.id)
  )

  return (
    <div className="page">
      <h2>Your Favorite Brands</h2>

      {favoriteBrands.length === 0 ? (
        <p>No favorite brands yet.</p>
      ) : (
        <div className="grid grid-3">
          {favoriteBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      )}
    </div>
  )
}