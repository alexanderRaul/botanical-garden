'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'BOTANIC GARDEN', href: '/' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Blog', href: '/blog' },
  { name: 'Exploration', href: '/exploration' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map(({ name, href }) =>
        <Link
          href={href}
          key={name}
          className={`${pathname === href ? 'underline underline-offset-4' : ''}`}
        >
          <span className="">{name}</span>
        </Link>
      )}
    </>
  );
}
