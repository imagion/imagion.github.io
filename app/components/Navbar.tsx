import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='w-full justify-center items-center py-6 text-center lg:flex'>
      <Link href='/' className='p-2'>
        Personal Site
      </Link>
      <Link href='/projects' className='p-2'>
        Projects
      </Link>
      <Link href='/contact' className='p-2'>
        Contract
      </Link>
    </header>
  );
}
