const Review = require('../models/Review')
const Brand = require('../models/Brand')

const getReviewsByBrand = async (req, res) => {
  const reviews = await Review.find({ brand: req.params.brandId })
    .populate('user', 'name')
    .sort({ createdAt: -1 })

  res.json(reviews)
}

const createReview = async (req, res) => {
  const { brandId, stars, comment } = req.body

  if (!brandId || !stars) {
    res.status(400)
    throw new Error('Brand ID and stars are required')
  }

  if (stars < 1 || stars > 5) {
    res.status(400)
    throw new Error('Stars must be between 1 and 5')
  }

  const brand = await Brand.findById(brandId)

  if (!brand) {
    res.status(404)
    throw new Error('Brand not found')
  }

  const review = await Review.create({
    brand: brandId,
    user: req.user._id,
    stars,
    comment,
  })

  const reviews = await Review.find({ brand: brandId })
  const avg =
    reviews.reduce((sum, item) => sum + item.stars, 0) / reviews.length

  brand.rating = Number(avg.toFixed(1))
  await brand.save()

  res.status(201).json(review)
}

const deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id)

  if (!review) {
    res.status(404)
    throw new Error('Review not found')
  }

  if (
    review.user.toString() !== req.user._id.toString() &&
    req.user.role !== 'admin'
  ) {
    res.status(403)
    throw new Error('Not allowed to delete this review')
  }

  await review.deleteOne()

  res.json({
    message: 'Review deleted successfully',
  })
}

module.exports = {
  getReviewsByBrand,
  createReview,
  deleteReview,
}