import { motion } from 'framer-motion';
import { Rocket, Satellite, Radio, Cpu } from 'lucide-react';

const technologies = [
  {
    icon: Rocket,
    title: "Propulsion Systems",
    description: "Advanced rocket engines powering our journey to the stars",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Satellite,
    title: "Satellite Technology",
    description: "Next-generation communication and observation satellites",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Radio,
    title: "Communication Systems",
    description: "Deep space communication networks and protocols",
    image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Cpu,
    title: "Space Computing",
    description: "Radiation-hardened computers for space missions",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  }
];

export const Technology = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Space Technology</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Exploring the cutting-edge technologies that make space exploration possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-semibold">{tech.title}</h3>
                  </div>
                  <p className="text-gray-300">{tech.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};