import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <header className="bg-gray-800 sticky top-0 z-[0] mx-auto flex w-full item-center justify-between border-b border-gray-500 p-5 drop-shadow-md">
        <Logo /> {}
    </header>
  );
}

export default Navbar;
