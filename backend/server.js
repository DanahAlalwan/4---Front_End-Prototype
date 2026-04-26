const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

const authRoutes = require('./routes/authRoutes')
const brandRoutes = require('./routes/brandRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
const favoriteRoutes = require('./routes/favoriteRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const verificationRoutes = require('./routes/verificationRoutes')

const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config()
connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Nakhla Backend API is running',
  })
})

app.use('/api/auth', authRoutes)
app.use('/api/brands', brandRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/favorites', favoriteRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/verification', verificationRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})