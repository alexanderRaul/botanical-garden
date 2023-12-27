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
    <div className="space-x-10 text-[1.5em] mt-[32px]">
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
