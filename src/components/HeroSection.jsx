import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        {/* Left Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Hyderabad&#39;s <span className="text-[#f3423a]">Fastest</span>{' '}
            Fashion Delivery
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Get your favorite fashion items delivered in just 30 minutes.
            Bringing the fitting room to your doorstep.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/register"
              className="bg-[#f3423a] text-white px-6 py-3 rounded-full hover:bg-[#e03d36] transition"
            >
              Join Waitlist
            </Link>
            <a
              href="#Survey"
              className="border-2 border-[#f3423a] text-[#f3423a] px-6 py-3 rounded-full hover:bg-[#f3423a] hover:text-white transition"
            >
              Survey
            </a>
          </div>
        </motion.div>

        {/* Right Image Content */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        >
          <img
            src="/images/fashion.jpg"
            alt="FlashFit Fashion Delivery"
            className="rounded-lg shadow-lg w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
