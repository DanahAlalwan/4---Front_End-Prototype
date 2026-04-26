const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema(
  {
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    stars: {
      type: Number,
      required: [true, 'Stars are required'],
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      maxlength: 250,
      default: '',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Review', reviewSchema)