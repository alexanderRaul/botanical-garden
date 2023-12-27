import type { Metadata } from 'next';
import { lightFont } from './fonts/localFonts'
import SmoothScroll from './SmoothScroll';
import PathBar from './ui/PathBar';
import './globals.css'

export const metadata: Metadata = {
  title: 'botanical-garden',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lightFont.className} text-[1vw] font-normal leading-none min-h-[100vh] bg-[#010101] text-[#f9f9f9] box-border`}>
        <header>
          <PathBar />
        </header>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
