"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 w-full transition-all duration-300  ${
        scrolled 
        ? "bg-white/95 backdrop-blur-lg shadow-sm py-3" 
        : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-6xl mx-30 px-5 flex items-center justify-between">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-[#FF6B35]"
          >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
          </svg>
          <div className="ml-2">
            <span className="font-bold text-gray-900 text-xl">BNB Cars</span>
            <span className="font-bold text-[#FF6B35] text-xl"> Rental</span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {/* Desktop Navigation - now positioned beside auth buttons */}
          <nav className="flex items-center gap-4">
            <NavLink to="/" isActive>
              Home
            </NavLink>
            <NavLink to="/models">Models</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="text-gray-700 transition-transform duration-300 hover:scale-105">
              <span className="flex items-center">→ Login</span>
            </Button>
            <Button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white transition-transform duration-300 hover:scale-105">
              Sign Up
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-20 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-[#FF6B35]"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
                <div className="ml-2">
                  <span className="font-bold text-gray-900">BNB Car</span>
                  <span className="font-bold text-[#FF6B35]"> Rental</span>
                </div>
              </div>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-2">
              <MobileNavLink to="/" isActive>
                Home
              </MobileNavLink>
              <MobileNavLink to="/models">Models</MobileNavLink>
              <MobileNavLink to="/contact">Contact</MobileNavLink>
            </nav>
            <div className="mt-auto p-4 border-t">
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
                <Button className="w-full bg-[#FF6B35] hover:bg-[#FF5722]">Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// Desktop NavLink component with subtle hover animation
const NavLink = ({ to, children, isActive }) => {
  return (
    <Link to={to} className="relative px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
      <span className={`relative z-10 ${isActive ? "text-gray-900 font-medium" : ""}`}>{children}</span>
      {isActive && (
        <span className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-[#FF6B35] rounded-full transform -translate-x-1/2 transition-all duration-300"></span>
      )}
      <span className="absolute inset-0 rounded-full bg-gray-100 opacity-2 transform scale-95 transition-all duration-200 hover:opacity-100 hover:scale-100"></span>
    </Link>
  )
}

// Mobile NavLink component
const MobileNavLink = ({ to, children, isActive }) => {
  return (
    <Link
      to={to}
      className={`px-4 py-3 rounded-lg transition-colors ${
        isActive ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      {children}
    </Link>
  )
}

export default Navbar
