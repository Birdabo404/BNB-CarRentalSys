import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <header className="bg-gray-800 sticky top-0 z-[0] mx-auto flex w-full item-center justify-between border-b border-gray-500 p-5 drop-shadow-md">
        <Logo></Logo>
        <h1 className="text-white pt-4.5"> Home </h1>
    </header>
  )
}

export default Navbar
