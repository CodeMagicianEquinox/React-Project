// src/data/products.js
const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 79.99,
    category: "Electronics",
    rating: 4.6,
    image: "https://picsum.photos/seed/headphones/600/400",
    description: "Comfortable on-ear design with 30hr battery life."
  },
  {
    id: 2,
    title: "Fitness Smartwatch",
    price: 129.0,
    category: "Electronics",
    rating: 4.2,
    image: "https://picsum.photos/seed/watch/600/400",
    description: "Heart-rate, sleep tracking, and GPS built-in."
  },
  {
    id: 3,
    title: "Insulated Water Bottle",
    price: 24.99,
    category: "Home",
    rating: 4.9,
    image: "https://picsum.photos/seed/bottle/600/400",
    description: "Keeps drinks cold 24h / hot 12h. BPA-free."
  },
  {
    id: 4,
    title: "Organic Cotton T-Shirt",
    price: 19.5,
    category: "Apparel",
    rating: 4.3,
    image: "https://picsum.photos/seed/shirt/600/400",
    description: "Soft, breathable, and sustainably sourced."
  },
  {
    id: 5,
    title: "4K Streaming Stick",
    price: 39.99,
    category: "Electronics",
    rating: 4.4,
    image: "https://picsum.photos/seed/stream/600/400",
    description: "Dolby Vision, dual-band Wi-Fi, voice remote."
  },
  {
    id: 6,
    title: "Ceramic Coffee Mug",
    price: 12.0,
    category: "Home",
    rating: 4.1,
    image: "https://picsum.photos/seed/mug/600/400",
    description: "Dishwasher safe, 12oz, matte finish."
  }
];

export const CATEGORIES = ["All", "Electronics", "Home", "Apparel"];
export default products;
