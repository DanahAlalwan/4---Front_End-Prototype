const express = require('express')
const {
    getBrands,
    getBrandById,
    createBrand,
    updateBrand,
    deleteBrand,
} = require('../controllers/brandController')
const { protect, authorizeRoles } = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/', getBrands)
router.get('/:id', getBrandById)

router.post('/', protect, authorizeRoles('brand-owner', 'admin'), createBrand)
router.put('/:id', protect, authorizeRoles('brand-owner', 'admin'), updateBrand)
router.delete('/:id', protect, authorizeRoles('brand-owner', 'admin'), deleteBrand)

module.exports = router