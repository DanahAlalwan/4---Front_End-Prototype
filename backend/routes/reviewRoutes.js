const express = require('express')
const {
    getReviewsByBrand,
    createReview,
    deleteReview,
} = require('../controllers/reviewController')
const { protect, authorizeRoles } = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/brand/:brandId', getReviewsByBrand)
router.post('/', protect, authorizeRoles('customer'), createReview)
router.delete('/:id', protect, deleteReview)

module.exports = router