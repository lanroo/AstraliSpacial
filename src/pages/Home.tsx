import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { StarField } from '../components/StarField/StarField';
import { FeaturedMissions } from '../components/home/FeaturedMissions';

export const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      <StarField interactive={true} />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="text-center z-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex justify-center mb-8"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Rocket className="w-16 h-16 text-blue-400" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Explore The Cosmos
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Embark on a journey through space and time. Discover the wonders of our universe
            and humanity's quest to reach for the stars.
          </p>
          <motion.button
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Journey
          </motion.button>
        </motion.div>
      </section>

      <FeaturedMissions />
    </div>
  );
};