import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import BrandCard from '../components/BrandCard'
import { useAppContext } from '../context/AppContext'

export default function CategoryPage() {
  const { name } = useParams()
  const { brands } = useAppContext()
  const [sortBy, setSortBy] = useState('Newest')

  const filteredBrands = useMemo(() => {
    const result = brands.filter(
      (brand) => brand.category.includes(name.toLowerCase())
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
  }, [brands, name, sortBy])

  return (
    <div className="page">
      <div className="page-header">
        <h2>{name} Brands</h2>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option>Newest</option>
          <option>Popular</option>
          <option>A-Z</option>
        </select>
      </div>

      <div className="grid grid-3">
        {filteredBrands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  )
}