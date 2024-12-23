import { motion } from 'framer-motion';

interface MissionCardProps {
  title: string;
  description: string;
  image: string;
  date?: string;
  status?: 'completed' | 'ongoing' | 'planned';
}

export const MissionCard = ({ title, description, image, date, status }: MissionCardProps) => {
  return (
    <motion.div
      className="bg-black/30 backdrop-blur-md rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          {status && (
            <span className={`px-2 py-1 rounded text-xs ${
              status === 'completed' ? 'bg-green-500/20 text-green-300' :
              status === 'ongoing' ? 'bg-blue-500/20 text-blue-300' :
              'bg-purple-500/20 text-purple-300'
            }`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          )}
        </div>
        <p className="text-gray-400">{description}</p>
        {date && (
          <p className="mt-4 text-sm text-gray-500">{date}</p>
        )}
      </div>
    </motion.div>
  );
};