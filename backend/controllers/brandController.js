const Brand = require('../models/Brand')

const getBrands = async (req, res) => {
  const { category, search } = req.query

  const filter = {}

  if (category) {
    filter.category = new RegExp(category, 'i')
  }

  if (search) {
    filter.name = new RegExp(search, 'i')
  }

  const brands = await Brand.find(filter)
    .populate('owner', 'name email')
    .sort({ createdAt: -1 })

  res.json(brands)
}

const getBrandById = async (req, res) => {
  const brand = await Brand.findById(req.params.id).populate(
    'owner',
    'name email'
  )

  if (!brand) {
    res.status(404)
    throw new Error('Brand not found')
  }

  res.json(brand)
}

const createBrand = async (req, res) => {
  const { name, description, category, logoUrl, coverUrl, website, instagram } =
    req.body

  if (!name  !category) {
    res.status(400)
    throw new Error('Name, description, and category are required')
  }

  const brand = await Brand.create({
    name,
    description,
    category,
    logoUrl,
    coverUrl,
    website,
    instagram,
    owner: req.user._id,
  })

  res.status(201).json(brand)
}

const updateBrand = async (req, res) => {
  const brand = await Brand.findById(req.params.id)

  if (!brand) {
    res.status(404)
    throw new Error('Brand not found')
  }

  if (
    brand.owner.toString() !== req.user._id.toString() &&
    req.user.role !== 'admin'
  ) {
    res.status(403)
    throw new Error('Not allowed to update this brand')
  }

  const updatedBrand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.json(updatedBrand)
}

const deleteBrand = async (req, res) => {
  const brand = await Brand.findById(req.params.id)

  if (!brand) {
    res.status(404)
    throw new Error('Brand not found')
  }

  if (
    brand.owner.toString() !== req.user._id.toString() &&
    req.user.role !== 'admin'
  ) {
    res.status(403)
    throw new Error('Not allowed to delete this brand')
  }

  await brand.deleteOne()

  res.json({
    message: 'Brand deleted successfully',
  })
}

module.exports = {
  getBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
}