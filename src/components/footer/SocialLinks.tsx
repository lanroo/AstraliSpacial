import { Github, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { Icon: Github, href: '#', label: 'GitHub' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' }
];

export const SocialLinks = () => {
  return (
    <div>
      <h3 className="font-semibold mb-4">Connect</h3>
      <div className="flex space-x-4">
        {socialLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
};