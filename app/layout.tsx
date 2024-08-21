import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import { cn } from '@/app/lib/utils';

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
          'flex min-h-screen flex-col antialiased',
          montserrat.className,
        )}>
        <Navbar />
        <main className='relative mx-auto w-[min(100%,1200px)] p-4 md:py-10'>
          {children}
        </main>
      </body>
    </html>
  );
}
