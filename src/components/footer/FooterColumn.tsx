import { Link } from 'react-router-dom';


interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        {links.map((link, index) => (
          <li key={index}>
            {link.isExternal ? (
              <a
                href={link.href}
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link to={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};