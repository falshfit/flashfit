import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: 'Browse & Select',
    description: 'Choose your favorite items.',
  },
  { number: 2, title: 'Place Order', description: 'Add to cart and checkout.' },
  {
    number: 3,
    title: 'Quick Delivery',
    description: 'Items at your doorstep in 30 minutes.',
  },
  {
    number: 4,
    title: 'Try & Keep',
    description: 'Only pay for what you love.',
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How FlashFit Works</h2>
          <p className="text-gray-600">
            Fashion delivered to your doorstep in just four simple steps.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-8 w-64 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold bg-[#f3423a] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
