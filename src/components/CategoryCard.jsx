import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category}`} className="category-card">
      <h3>{category}</h3>
      <p>Browse Saudi brands in {category}</p>
    </Link>
  )
}