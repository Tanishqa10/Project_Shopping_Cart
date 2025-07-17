import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 129.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    rating: 4.5,
    reviews: 234,
    inStock: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    description: 'Advanced fitness tracking with heart rate monitoring and GPS capabilities.',
    rating: 4.3,
    reviews: 156,
    inStock: true
  },
  {
    id: '3',
    name: 'Leather Crossbody Bag',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    description: 'Handcrafted genuine leather bag perfect for everyday use.',
    rating: 4.7,
    reviews: 89,
    inStock: true
  },
  {
    id: '4',
    name: 'Uno Cards Set',
    price: 12.99,
    image: 'https://images.pexels.com/photos/3738725/pexels-photo-3738725.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Food',
    description: 'Premium organic coffee beans with rich, bold flavor profile.',
    rating: 4.6,
    reviews: 312,
    inStock: true
  },
  {
    id: '5',
    name: 'Bulbs-Set of 5',
    price: 49.99,
    image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home',
    description: 'Modern LED desk lamp with adjustable brightness and USB charging port.',
    rating: 4.4,
    reviews: 67,
    inStock: true
  },
  {
    id: '6',
    name: 'Yoga Mat Premium',
    price: 49.99,
    image: 'https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Sports',
    description: 'Non-slip yoga mat with superior cushioning and durability.',
    rating: 4.8,
    reviews: 145,
    inStock: true
  },
  {
    id: '7',
    name: 'Stainless Steel Straws',
    price: 14.99,
    image: 'https://images.pexels.com/photos/3735176/pexels-photo-3735176.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Sports',
    description: 'Insulated water bottle that keeps drinks cold for 24 hours.',
    rating: 4.2,
    reviews: 98,
    inStock: true
  },
  {
    id: '8',
    name: 'Home decor Leaf shadow set',
    price: 59.99,
    image: 'https://images.pexels.com/photos/4505461/pexels-photo-4505461.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home',
    description: 'Set of 3 handcrafted ceramic pots perfect for indoor plants.',
    rating: 4.5,
    reviews: 73,
    inStock: true
  },
  {
    id: '9',
    name: 'Wireless Phone Charger',
    price: 39.99,
    image: 'https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    rating: 4.1,
    reviews: 124,
    inStock: false
  },
  {
    id: '10',
    name: 'Blocks Game',
    price: 29.99,
    image: 'https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home',
    description: 'Hand-poured soy candles with premium fragrances.',
    rating: 4.6,
    reviews: 189,
    inStock: true
  },
  {
    id: '11',
    name: 'Headphones',
    price: 149.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    description: 'Portable speaker with 360-degree sound and waterproof design.',
    rating: 4.4,
    reviews: 267,
    inStock: true
  },
  {
    id: '12',
    name: 'Silk Scarf Collection + Coat',
    price: 69.99,
    image: 'https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    description: 'Luxurious silk scarves with artistic patterns and vibrant formal colors coat.',
    rating: 4.7,
    reviews: 92,
    inStock: true
  }
];

export const categories = ['All', 'Electronics', 'Fashion', 'Food', 'Home', 'Sports'];