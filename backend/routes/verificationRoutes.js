const express = require('express')
const {
  submitVerificationRequest,
  getVerificationRequests,
  updateVerificationStatus,
} = require('../controllers/verificationController')
const { protect, authorizeRoles } = require('../middleware/authMiddleware')

const router = express.Router()

router.post(
  '/',
  protect,
  authorizeRoles('brand-owner'),
  submitVerificationRequest
)

router.get(
  '/',
  protect,
  authorizeRoles('admin'),
  getVerificationRequests
)

router.put(
  '/:id',
  protect,
  authorizeRoles('admin'),
  updateVerificationStatus
)

module.exports = router