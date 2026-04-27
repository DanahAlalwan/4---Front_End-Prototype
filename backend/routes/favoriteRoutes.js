const express = require('express')
const {
    getMyFavorites,
    addFavorite,
    removeFavorite,
} = require('../controllers/favoriteController')
const { protect, authorizeRoles } = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/', protect, authorizeRoles('customer'), getMyFavorites)
router.post('/', protect, authorizeRoles('customer'), addFavorite)
router.delete('/:brandId', protect, authorizeRoles('customer'), removeFavorite)

module.exports = router