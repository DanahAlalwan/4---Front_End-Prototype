import { useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import BrandCard from '../components/BrandCard'
import { useAppContext } from '../context/AppContext'

export default function CategoryPage() {
  const { name } = useParams()
  const navigate = useNavigate()
  const { brands, categories } = useAppContext()

  const [sortBy, setSortBy] = useState('Newest')
  const selectedCategory = name?.toLowerCase() || 'beauty'

  const filteredBrands = useMemo(() => {
    const result = brands.filter((brand) =>
      brand.category.includes(selectedCategory)
    )

    if (sortBy === 'Popular') {
      return [...result].sort((a, b) => b.popularity - a.popularity)
    }

    if (sortBy === 'A-Z') {
      return [...result].sort((a, b) => a.name.localeCompare(b.name))
    }

    return [...result].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )
  }, [brands, selectedCategory, sortBy])

  return (
    <div className="page">
      <div className="page-header">
        <h2>{selectedCategory} Brands</h2>
        <p>Select any category and browse its brands.</p>
      </div>

      <div className="filters-row">
        <div>
          <label>Choose Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => navigate(`/category/${e.target.value}`)}
          >
            {categories.map((category) => (
              <option key={category} value={category.toLowerCase()}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Sort By</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option>Newest</option>
            <option>Popular</option>
            <option>A-Z</option>
          </select>
        </div>
      </div>

      {filteredBrands.length === 0 ? (
        <p>No brands found in this category.</p>
      ) : (
        <div className="brand-grid">
          {filteredBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      )}
    </div>
  )
}