'use client';

import Link from 'next/link';
import { useThemeContext } from '@/hooks/useThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <header className='flex w-full items-center justify-between bg-[var(--color-background)] px-4 py-6 shadow-md md:px-8 lg:px-16'>
      <nav className='space-x-4'>
        <Link href='/' className='text-lg font-semibold'>
          Personal Site
        </Link>
        <Link
          href='/projects'
          className='text-sm hover:text-[var(--color-primary)] md:text-base'>
          Projects
        </Link>
        <Link
          href='/contact'
          className='text-sm hover:text-[var(--color-primary)] md:text-base'>
          Contact
        </Link>
      </nav>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}
