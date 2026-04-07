import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import BrandCard from '../components/BrandCard'
import { useAppContext } from '../context/AppContext'

export default function HomePage() {
  const { categories, brands } = useAppContext()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const filteredBrands = useMemo(() => {
    return brands.filter(
      (brand) =>
        brand.name.toLowerCase().includes(query.toLowerCase()) ||
        brand.category.toLowerCase().includes(query.toLowerCase())
    )
  }, [query, brands])

  return (
    <div className="page">
      <section className="hero">
        <h1>Discover Saudi Local Brands</h1>
        <p>Support local businesses through one trusted platform.</p>

        <div className="search-row">
          <input
            type="text"
            placeholder="Search brands or categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button className="btn" onClick={() => navigate('/category/Fashion')}>
            Browse
          </button>
        </div>
      </section>

      <section>
        <h2>Categories</h2>
        <div className="grid grid-4">
          {categories.map((category) => (
            <CategoryCard key={category} category={category} />
          ))}
        </div>
      </section>

      <section>
        <h2>Featured Brands</h2>
        <div className="grid grid-3">
          {(query ? filteredBrands : brands).map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </section>
    </div>
  )
}