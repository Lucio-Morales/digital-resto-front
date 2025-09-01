import type { ReactNode } from 'react';

interface NavLinkProps {
  icon: ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const NavLink = ({ icon, label, href, active }: NavLinkProps) => {
  return (
    <li className="p-1">
      <a
        href={href}
        className={`text-sm font-bold flex items-center gap-4 py-3 px-4 rounded-lg transition-colors border
          ${
            active
              ? 'bg-orange-100 text-orange-500 border-orange-500'
              : 'border-zinc-300 text-zinc-600 hover:bg-zinc-200'
          }
        `}
      >
        {icon}
        <span>{label}</span>
      </a>
    </li>
  );
};

export default NavLink;
