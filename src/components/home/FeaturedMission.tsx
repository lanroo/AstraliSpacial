import { motion } from 'framer-motion';

interface FeaturedMissionProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export const FeaturedMission = ({ title, description, image, index }: FeaturedMissionProps) => {
  return (
    <motion.div
      className="bg-black/30 backdrop-blur-md rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};