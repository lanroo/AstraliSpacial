import { motion } from 'framer-motion';
import { MissionCard } from '../components/MissionCard';

const missions = [
  {
    title: "Mars Perseverance Rover",
    description: "Searching for signs of ancient microbial life on Mars",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=800",
    date: "Launched: July 30, 2020",
    status: "ongoing" as const
  },
  {
    title: "James Webb Space Telescope",
    description: "Observing the universe's earliest galaxies",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
    date: "Launched: December 25, 2021",
    status: "ongoing" as const
  },
  {
    title: "Artemis Program",
    description: "Returning humans to the Moon",
    image: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&q=80&w=800",
    date: "Planned: 2024-2025",
    status: "planned" as const
  }
];

export const Missions = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Space Missions</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover past, present, and future missions pushing the boundaries of space exploration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <MissionCard
              key={index}
              {...mission}
            />
          ))}
        </div>
      </div>
    </div>
  );
};