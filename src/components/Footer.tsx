import { Link } from 'react-router-dom';
import SaturnIcon from '../images/solar-system-svgrepo-com.svg';

export const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-md text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <img src={SaturnIcon} alt="Saturn Icon" className="w-6 h-6 text-blue-400" />
              <span className="font-bold text-lg">Astralis</span>
            </div>
            <p className="text-sm text-gray-400">
              Exploring the frontiers of space technology and human achievement.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/missions" className="hover:text-white transition-colors">Missions</Link></li>
              <li><Link to="/technology" className="hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Image Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Astralis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};