import heroImg from '../assets/images/hero.jpg'
import fashionImg from '../assets/images/fashion.jpg'
import perfumeImg from '../assets/images/perfume.jpg'
import beautyImg from '../assets/images/beauty.jpg'
import abayasImg from '../assets/images/najed_abaya.jpg'
import safaImg from '../assets/images/safa_abaya.jpg'

const accessoriesImg = fashionImg
const wardanImg = beautyImg
const najdImg = perfumeImg
const palmImg = fashionImg

export default function HomePage() {
  return (
      <div className="page">
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
              <input type="text" placeholder="Search brands or categories..." />
              <button className="btn">Browse</button>
            </div>
          </div>
        </section>

        <h2 style={{ marginBottom: '16px' }}>Categories</h2>
        <div className="grid grid-4" style={{ marginBottom: '32px' }}>
          <div className="category-card">
            <div className="category-card-content">
              <h3>Fashion</h3>
              <p>Browse Saudi brands in Fashion</p>
            </div>
            <img src={fashionImg} alt="Fashion" className="category-img" />
          </div>

          <div className="category-card">
            <div className="category-card-content">
              <h3>Perfume</h3>
              <p>Browse Saudi brands in Perfume</p>
            </div>
            <img src={perfumeImg} alt="Perfume" className="category-img" />
          </div>

          <div className="category-card">
            <div className="category-card-content">
              <h3>Abayas</h3>
              <p>Browse Saudi brands in Abayas</p>
            </div>
            <img src={abayasImg} alt="Abayas" className="category-img" />
          </div>

          <div className="category-card">
            <div className="category-card-content">
              <h3>Accessories</h3>
              <p>Browse Saudi brands in Accessories</p>
            </div>
            <img src={accessoriesImg} alt="Accessories" className="category-img" />
          </div>

          <div className="category-card">
            <div className="category-card-content">
              <h3>Beauty</h3>
              <p>Browse Saudi brands in Beauty</p>
            </div>
            <img src={beautyImg} alt="Beauty" className="category-img" />
          </div>
        </div>

        <h2 style={{ marginBottom: '16px' }}>Featured Brands</h2>
        <div className="grid grid-4">
          <div className="brand-card">
            <img src={wardanImg} alt="Wardan Saudi" className="brand-img" />
            <h3>Wardan Saudi</h3>
            <p>Beauty</p>
            <p>⭐ 4.5</p>
            <div className="card-actions">
              <button className="btn">View Details</button>
              <button className="btn btn-outline">Remove Favorite</button>
            </div>
          </div>

          <div className="brand-card">
            <img src={najdImg} alt="Najd Perfumes" className="brand-img" />
            <h3>Najd Perfumes</h3>
            <p>Perfume</p>
            <p>⭐ 4.2</p>
            <div className="card-actions">
              <button className="btn">View Details</button>
              <button className="btn btn-outline">Add Favorite</button>
            </div>
          </div>

          <div className="brand-card">
            <img src={safaImg} alt="Safa Abayas" className="brand-img" />
            <h3>Safa Abayas</h3>
            <p>Abayas</p>
            <p>⭐ 4.8</p>
            <div className="card-actions">
              <button className="btn">View Details</button>
              <button className="btn btn-outline">Remove Favorite</button>
            </div>
          </div>

          <div className="brand-card">
            <img src={palmImg} alt="Palm Fashion" className="brand-img" />
            <h3>Palm Fashion</h3>
            <p>Fashion</p>
            <p>⭐ 4.4</p>
            <div className="card-actions">
              <button className="btn">View Details</button>
              <button className="btn btn-outline">Add Favorite</button>
            </div>
          </div>
        </div>
      </div>
  )
}