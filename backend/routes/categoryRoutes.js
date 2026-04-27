const express = require('express')
const {
    getCategories,
    createCategory,
    deleteCategory,
} = require('../controllers/categoryController')
const { protect, authorizeRoles } = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/', getCategories)
router.post('/', protect, authorizeRoles('admin'), createCategory)
router.delete('/:id', protect, authorizeRoles('admin'), deleteCategory)

module.exports = router