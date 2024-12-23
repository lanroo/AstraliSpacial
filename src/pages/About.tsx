import { motion } from 'framer-motion';
import '../index.css';

export const About = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden pt-16">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Astralis</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dedicated to showcasing humanity's greatest space achievements and inspiring the next generation of explorers.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="https://img.freepik.com/fotos-gratis/remix-estetico-de-ceu-estrelado-com-fundo-de-galaxia-escura-e-estrada_53876-129797.jpg?t=st=1734916246~exp=1734919846~hmac=00c6e8eba9bccce07867359742dc48875c482a5434e7de6865c3dfea858ded72&w=740"
              alt="Space"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-300">
              Astralis aims to bridge the gap between space exploration and public understanding. 
              We believe that by making space science accessible and engaging, we can inspire the next 
              generation of scientists, engineers, and explorers.
            </p>
            <p className="text-gray-300">
              Through interactive experiences and comprehensive information about space missions, 
              technology, and discoveries, we're helping to shape the future of space exploration.
            </p>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          {[{
              title: "Education",
              description: "Providing accessible space science education for all ages",
              icon: "\u{1F393}"
            },
            {
              title: "Innovation",
              description: "Showcasing cutting-edge space technology and research",
              icon: "\u{1F680}"
            },
            {
              title: "Inspiration",
              description: "Inspiring the next generation of space explorers",
              icon: "\u{2728}"
            }
          ].map((item, index) => (
            <div key={index} className="feature-item">
              <div className="feature-item-icon">{item.icon}</div>
              <h3 className="feature-item-title">{item.title}</h3>
              <p className="feature-item-description">{item.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[{
              question: "What is Astralis?",
              answer: "Astralis is a platform dedicated to promoting space exploration and education."
            }, {
              question: "How can I join the mission?",
              answer: "You can join by subscribing to our newsletter and participating in our community events."
            }].map((faq, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
