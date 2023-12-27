"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: '/dashboard', label: 'Summaries' },
  { href: '/dashboard/create-event', label: 'Create Event' },
  { href: '/dashboard/create-blog-post', label: 'Create Blog Post' }
]

export default function DashboardLinks() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="mt-[32px] flex justify-between  text-[4em]  sm:text-[1.5em] sm:block  sm:space-x-10">
      {links.map(({ href, label }, index) =>
        <Link
          key={index}
          href={href}
          className={`${pathname === href ? "underline underline-offset-4" : null}`}
        >
          {label}
        </Link>
      )}
    </div>
  )
}
