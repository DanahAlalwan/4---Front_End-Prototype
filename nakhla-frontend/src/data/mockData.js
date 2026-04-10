export const categories = [
  'Fashion',
  'Perfume',
  'Abayas',
  'Accessories',
  'Beauty'
]
import moonImg from '../assets/images/moonglaze.png'
import moonLogo from '../assets/images/moonglaLogo.png'

import locaImg from '../assets/images/loca.png'
import locaLogo from '../assets/images/locaLogo.png'
export const brands = [
  {
    id: 1,
    name: 'Moon Glaze',
    category: 'beauty',
    description: 'Since starting as a makeup artistin 2015, Yara has been known for her signature dewy looks. Following on from starting her skincare line, emphasising the core for any ﬂawless makeup look is healthy skin.',
    website: 'https://moonglaze.co',
    image: moonImg,
    logo: moonLogo,
    popularity: 85,
    createdAt: '2025-04-10',
    rating: 4.9,
    reviews: []
  },

    {
      id: 2,
      name: 'Loca',
      category: 'beauty',
      description: 'A Saudi makeup brand offering trendy and affordable cosmetics designed for everyday beauty looks.',
      website: 'https://locabeautysa.com',
      image: locaImg,
      logo: locaLogo,
      popularity: 78,
      createdAt: '2025-03-20',
      rating: 4.3,
      reviews: []
    },

]

export const verificationRequests = [
  { id: 1, brandName: 'Noor Accessories', owner: 'Reham', status: 'Pending' },
  { id: 2, brandName: 'Hala Beauty', owner: 'Batool', status: 'Pending' }
]