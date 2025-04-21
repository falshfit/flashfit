import { motion } from 'framer-motion';

const products = [
  {
    title: 'Casual Shirt',
    price: '₹999',
    oldPrice: '₹1499',
    rating: '4.5',
    badge: 'New Arrival',
  },
  {
    title: 'Elegant Dress',
    price: '₹1799',
    oldPrice: '₹2299',
    rating: '4.8',
    badge: 'Bestseller',
  },
  {
    title: 'Sports Sneakers',
    price: '₹2499',
    oldPrice: '₹2999',
    rating: '4.7',
    badge: 'Hot Deal',
  },
];

function ProductsSection() {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Trending Products</h2>
          <p className="text-gray-600">Discover what's hot and trending now!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-56 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <span className="text-sm bg-[#f3423a] text-white rounded-full px-3 py-1">
                    {product.badge}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#f3423a] font-bold">
                    {product.price}
                  </span>
                  <span className="text-gray-400 line-through">₹1499</span>
                </div>
                <div className="flex items-center text-yellow-400">
                  {' '}
                  ⭐ {product.rating}{' '}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
