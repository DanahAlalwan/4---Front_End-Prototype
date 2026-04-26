const Favorite = require('../models/Favorite')
const Brand = require('../models/Brand')

const getMyFavorites = async (req, res) => {
  const favorites = await Favorite.find({ user: req.user._id })
    .populate('brand')
    .sort({ createdAt: -1 })

  res.json(favorites)
}

const addFavorite = async (req, res) => {
  const { brandId } = req.body

  if (!brandId) {
    res.status(400)
    throw new Error('Brand ID is required')
  }

  const brand = await Brand.findById(brandId)

  if (!brand) {
    res.status(404)
    throw new Error('Brand not found')
  }

  const exists = await Favorite.findOne({
    user: req.user._id,
    brand: brandId,
  })

  if (exists) {
    res.status(400)
    throw new Error('Brand is already in favorites')
  }

  const favorite = await Favorite.create({
    user: req.user._id,
    brand: brandId,
  })

  res.status(201).json(favorite)
}

const removeFavorite = async (req, res) => {
  const favorite = await Favorite.findOne({
    user: req.user._id,
    brand: req.params.brandId,
  })

  if (!favorite) {
    res.status(404)
    throw new Error('Favorite not found')
  }

  await favorite.deleteOne()

  res.json({
    message: 'Favorite removed successfully',
  })
}

module.exports = {
  getMyFavorites,
  addFavorite,
  removeFavorite,
}