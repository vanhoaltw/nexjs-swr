import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="border-b-2 border-slate-200 bg-white">
        <div className="flex justify-between items-center mx-auto px-5 py-3">
        <Link href="/" className='text-xl font-extra-light'>Super Hero</Link>
        <Link href="add-hero" className='bg-blue-600 text-white px-3 py-1 rounded-sm'>Add Hero</Link>
        </div>
    </nav>

  )
}

export default NavBar