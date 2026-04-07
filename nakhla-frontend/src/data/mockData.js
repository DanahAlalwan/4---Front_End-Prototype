export const categories = [
  'Fashion',
  'Perfume',
  'Abayas',
  'Accessories',
  'Beauty'
]

export const brands = [
  {
    id: 1,
    name: 'Wardah Saudi',
    category: 'Beauty',
    description: 'A Saudi beauty brand focused on skincare and cosmetics.',
    website: 'https://example.com',
    image: 'https://via.placeholder.com/250x180',
    logo: 'https://via.placeholder.com/100',
    popularity: 90,
    createdAt: '2025-01-10',
    rating: 4.5,
    reviews: [
      { id: 1, user: 'Danah', stars: 5, comment: 'Amazing products!' },
      { id: 2, user: 'Sara', stars: 4, comment: 'Very nice quality.' }
    ]
  },
  {
    id: 2,
    name: 'Najd Perfumes',
    category: 'Perfume',
    description: 'Traditional and modern Saudi perfume collection.',
    website: 'https://example.com',
    image: 'https://via.placeholder.com/250x180',
    logo: 'https://via.placeholder.com/100',
    popularity: 80,
    createdAt: '2025-03-15',
    rating: 4.2,
    reviews: []
  },
  {
    id: 3,
    name: 'Safa Abayas',
    category: 'Abayas',
    description: 'Elegant abayas designed for modern Saudi women.',
    website: 'https://example.com',
    image: 'https://via.placeholder.com/250x180',
    logo: 'https://via.placeholder.com/100',
    popularity: 75,
    createdAt: '2024-12-20',
    rating: 4.8,
    reviews: []
  },
  {
    id: 4,
    name: 'Palm Fashion',
    category: 'Fashion',
    description: 'Local fashion brand with stylish clothing.',
    website: 'https://example.com',
    image: 'https://via.placeholder.com/250x180',
    logo: 'https://via.placeholder.com/100',
    popularity: 88,
    createdAt: '2025-02-01',
    rating: 4.4,
    reviews: []
  }
]

export const verificationRequests = [
  { id: 1, brandName: 'Noor Accessories', owner: 'Reham', status: 'Pending' },
  { id: 2, brandName: 'Hala Beauty', owner: 'Batool', status: 'Pending' }
]