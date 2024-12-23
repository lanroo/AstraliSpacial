import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@astralis.com',
    delay: 0.2,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    delay: 0.3,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Space Center, Houston, TX',
    delay: 0.4,
  },
  {
    icon: Globe,
    label: 'Operating Hours',
    value: '24/7 Earth Time',
    delay: 0.5,
  },
];

export const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {contactDetails.map(({ icon: Icon, label, value, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay }}
          className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-blue-500/20 rounded-lg p-3">
              <Icon className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-200">{label}</h3>
              <p className="text-gray-400">{value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};