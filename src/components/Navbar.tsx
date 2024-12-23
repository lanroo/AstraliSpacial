import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Home, Info, Cpu, Mail, Menu, X } from 'lucide-react';
import SaturnIcon from '../images/solar-system-svgrepo-com.svg'; // Importa o SVG

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/missions', icon: Rocket, label: 'Missions' },
    { path: '/technology', icon: Cpu, label: 'Technology' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={SaturnIcon} alt="Saturn" className="w-8 h-8" /> {/* Ícone Saturno */}
            <span className="text-white font-bold text-xl">Astralis</span>
          </Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <div className="flex items-center space-x-8">
              {navItems.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-1 text-sm ${
                    location.pathname === path
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  } transition-colors duration-200`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="bg-black/80 backdrop-blur-md rounded-lg mt-2 px-4 py-4 space-y-4">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 text-sm ${
                  location.pathname === path
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                } transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar em um link
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
};
