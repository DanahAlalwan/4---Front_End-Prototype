import { useState } from 'react'
import { useAppContext } from '../context/AppContext'

export default function ReviewForm({ brandId }) {
  const { addReview } = useAppContext()
  const [stars, setStars] = useState(0)
  const [comment, setComment] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (stars < 1 || stars > 5) {
      setMessage('Please select a rating from 1 to 5.')
      return
    }

    if (comment.length > 250) {
      setMessage('Comment must be 250 characters or less.')
      return
    }

    addReview(brandId, {
      id: Date.now(),
      user: 'Current User',
      stars,
      comment
    })

    setMessage('Review submitted successfully!')
    setStars(0)
    setComment('')
  }

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>Rate & Review</h3>

      <label>Rating (1-5)</label>
      <input
        type="number"
        min="1"
        max="5"
        value={stars}
        onChange={(e) => setStars(Number(e.target.value))}
      />

      <label>Comment</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        maxLength="250"
        rows="4"
      />

      <small>{comment.length}/250</small>

      <button type="submit" className="btn">
        Submit Review
      </button>

      {message && <p className="message">{message}</p>}
    </form>
  )
}