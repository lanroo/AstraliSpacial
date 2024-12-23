import SaturnIcon from '../images/saturn-svgrepo-com.svg';
import { FooterColumn } from './FooterColumn';
import { SocialLinks } from './SocialLinks';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Missions', href: '/missions' },
  { label: 'Technology', href: '/technology' },
  { label: 'Contact', href: '/contact' }
];

const resourceLinks = [
  { label: 'Documentation', href: '#', isExternal: true },
  { label: 'Research Papers', href: '#', isExternal: true },
  { label: 'Image Gallery', href: '#', isExternal: true },
  { label: 'News', href: '#', isExternal: true }
];

export const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-md text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={SaturnIcon} alt="Saturn Icon" className="w-6 h-6 text-blue-400" />
              <span className="font-bold text-lg">Astralis</span>
            </div>
            <p className="text-sm text-gray-400">
              Exploring the frontiers of space technology and human achievement.
            </p>
          </div>

          <FooterColumn title="Navigation" links={navigationLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <SocialLinks />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Astralis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
