import { useState } from 'react'
import heroImg from '../assets/images/hero.jpg'
import fashionImg from '../assets/images/fashion.jpg'
import perfumeImg from '../assets/images/perfume.jpg'
import beautyImg from '../assets/images/beauty.jpg'
import abayasImg from '../assets/images/najed_abaya.jpg'
import { Link } from "react-router-dom"
import { useAppContext } from '../context/AppContext'

const accessoriesImg = fashionImg

export default function HomePage() {
  const { brands, favorites, toggleFavorite } = useAppContext()

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredResults, setFilteredResults] = useState([])

  // Random 4 featured brands
  const featuredBrands = [...brands]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)

  // Search function
  const handleSearch = () => {
    const results = brands.filter((brand) =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.category.some(cat =>
        cat.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )

    setFilteredResults(results)
  }

  return (
    <div className="page">

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(12,122,67,0.96) 0%, rgba(22,153,90,0.88) 48%, rgba(22,153,90,0.68) 100%), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content">
          <h1>Discover Saudi Local Brands</h1>
          <p>Support local businesses through one trusted platform.</p>

          <div className="search-row">
            <input
              type="text"
              placeholder="Search brands or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn" onClick={handleSearch}>
              Browse
            </button>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchTerm && (
        <>
          <h2 style={{ margin: '24px 0 16px' }}>Search Results</h2>
          <div className="grid grid-4" style={{ marginBottom: '32px' }}>
            {filteredResults.length > 0 ? (
              filteredResults.map((brand) => {
                const isFavorite = favorites.includes(brand.id)

                return (
                  <div key={brand.id} className="brand-card">
                    <img src={brand.image} alt={brand.name} className="brand-img" />
                    <h3>{brand.name}</h3>
                    <p>{brand.category.join(', ')}</p>
                    <p>⭐ {brand.rating}</p>

                    <div className="card-actions">
                      <Link to={`/brand/${brand.id}`}>
                        <button className="btn">View Details</button>
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
              })
            ) : (
              <p>No brands found.</p>
            )}
          </div>
        </>
      )}

      {/* Categories */}
      <h2 style={{ marginBottom: '16px' }}>Categories</h2>

      <div className="grid grid-4" style={{ marginBottom: '32px' }}>
        <Link to="/category/fashion" className="category-card">
          <div className="category-card-content">
            <h3>Fashion</h3>
            <p>Browse Saudi brands in Fashion</p>
          </div>
          <img src={fashionImg} alt="Fashion" className="category-img" />
        </Link>

        <Link to="/category/perfume" className="category-card">
          <div className="category-card-content">
            <h3>Perfume</h3>
            <p>Browse Saudi brands in Perfume</p>
          </div>
          <img src={perfumeImg} alt="Perfume" className="category-img" />
        </Link>

        <Link to="/category/abayas" className="category-card">
          <div className="category-card-content">
            <h3>Abayas</h3>
            <p>Browse Saudi brands in Abayas</p>
          </div>
          <img src={abayasImg} alt="Abayas" className="category-img" />
        </Link>

        <Link to="/category/accessories" className="category-card">
          <div className="category-card-content">
            <h3>Accessories</h3>
            <p>Browse Saudi brands in Accessories</p>
          </div>
          <img src={accessoriesImg} alt="Accessories" className="category-img" />
        </Link>

        <Link to="/category/beauty" className="category-card">
          <div className="category-card-content">
            <h3>Beauty</h3>
            <p>Browse Saudi brands in Beauty</p>
          </div>
          <img src={beautyImg} alt="Beauty" className="category-img" />
        </Link>
      </div>

      {/* Featured Brands */}
      <h2 style={{ marginBottom: '16px' }}>Featured Brands</h2>

      <div className="grid grid-4">
        {featuredBrands.map((brand) => {
          const isFavorite = favorites.includes(brand.id)

          return (
            <div key={brand.id} className="brand-card">
              <img src={brand.image} alt={brand.name} className="brand-img" />
              <h3>{brand.name}</h3>
              <p>{brand.category.join(', ')}</p>
              <p>⭐ {brand.rating}</p>

              <div className="card-actions">
                <Link to={`/brand/${brand.id}`}>
                  <button className="btn">View Details</button>
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
        })}
      </div>
    </div>
  )
}