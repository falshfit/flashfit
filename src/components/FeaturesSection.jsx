import { motion } from 'framer-motion';

const features = [
  { icon: '⚡', title: '30-Minute Delivery', description: 'Get your fashion fix in just 30 minutes.' },
  { icon: '👕', title: 'Try Before You Buy', description: 'Only pay for what you love after trying.' },
  { icon: '🛍', title: 'Curated Collections', description: 'Trending styles selected just for you.' },
  { icon: '↩', title: 'Hassle-Free Returns', description: 'Easy returns at your doorstep.' },
  { icon: '🎁', title: 'Exclusive Offers', description: 'Special discounts and early access sales.' },
  { icon: '🔒', title: 'Secure Payments', description: 'Fast and secure payment options.' },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose FlashFit?</h2>
          <p className="text-gray-600">Reimagining fashion delivery to make shopping faster, easier, and more convenient than ever before.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;