import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import { cn } from '@/app/lib/utils';
import ThemeContextProvider from '@/context/ThemeContext';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Personal Site',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'bg-[var(--color-background)] text-[var(--color-foreground)] antialiased',
          montserrat.className,
        )}>
        <ThemeContextProvider>
          <Navbar />
        </ThemeContextProvider>
        <main className='container mx-auto px-4 py-8 md:px-8 lg:px-16'>
          {children}
        </main>
      </body>
    </html>
  );
}
