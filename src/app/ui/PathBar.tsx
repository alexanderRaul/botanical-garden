'use client'

import Link from "next/link";
import { alpinaFine, lightFont } from "../fonts/localFonts";
import { useState } from "react";

const links = [
  { href: '/schedule', label: 'schedule' },
  { href: '/blog', label: 'blog' },
  { href: '/exploration', label: 'exploration' },
]

const menuLinks = [
  { href: '/', label: 'home' },
  ...links,
  { href: '/dashboard', label: 'dashboard' },
]

export default function PathBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isOpen &&
        <div
          className="z-[90] w-[100vw] h-[100vh] bg-white fixed top-[0%] left-[0%] bottom-[0%] right-[0%] bg-clip-border text-black"
        >
          <div className="w-full h-full flex flex-col pt-[30em] px-[16px] pb-[45em]">
            <div className={`${alpinaFine.className} flex flex-col`}>

              {menuLinks.map(({ href, label }, index) =>
                <div key={index} className="text-[13em] mt-[6px]" onClick={() => setIsOpen(false)}>
                  <Link href={href}>{label}</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      }

      <div className="fixed w-full z-[99] mix-blend-difference top-[0%] text-white tracking-[.09em]" data-testid="path-bar">
        <div className="py-[24px] px-[32px] flex justify-between items-center">
          <Link href="/" className={`${lightFont.className} text-[2.5em]  sm:text-[1.2em]`}>
            Martín Cárdenas
          </Link>


          <div className="ml-auto text-[1.2em] items-center hidden sm:flex">
            {links.map(({ href, label }, index) =>
              <div key={index}>
                <Link href={href}>{label}</Link>
                <span className="text-[1.4em] mx-[20px]">/</span>
              </div>
            )}
            <Link href="/dashboard">dashboard</Link>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden block w-[40px] h-[20px] flex items-center justify-center cursor-pointer"
          >
            <div className="flex flex-col ">
              <div className="w-[32px] h-[2px] bg-[#fff] mb-[4px]" />
              <div className="w-[32px] h-[2px] bg-[#fff]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
