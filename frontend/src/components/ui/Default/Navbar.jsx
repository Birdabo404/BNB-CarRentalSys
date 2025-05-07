"use client"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

// Skeuomorphic and animation styles for the navbar
const skeuoNavbarStyles = `
.skeuo-navbar {
  background: rgba(250,250,252,0.85);
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px 0 rgba(30, 41, 59, 0.08), 0 1.5px 0 #fff inset;
  border: 1.5px solid #ececec;
  margin: 0.75rem auto;
  max-width: 98vw;
  padding: 0.5rem 2rem;
  position: relative;
  transition: background 0.3s, box-shadow 0.3s, border 0.3s;
  backdrop-filter: blur(12px);
}
.skeuo-navbar-dark {
  background: rgba(24,24,32,0.85);
  border: 1.5px solid #23232b;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.18), 0 1.5px 0 #23232b inset;
}
.skeuo-navlink {
  position: relative;
  padding: 0.5rem 1.25rem;
  border-radius: 1rem;
  color: #222;
  font-weight: 500;
  transition: color 0.25s, background 0.25s;
  z-index: 1;
  overflow: hidden;
}
.skeuo-navlink:hover, .skeuo-navlink:focus {
  color: #FF6B35;
  background: rgba(255,107,53,0.08);
  box-shadow: 0 2px 8px 0 rgba(255,107,53,0.08);
}
.skeuo-navlink-active {
  color: #FF6B35;
  background: rgba(255,107,53,0.13);
  box-shadow: 0 2px 12px 0 rgba(255,107,53,0.13);
}
.skeuo-navlink-dark {
  color: #eee;
}
.skeuo-navlink-dark:hover, .skeuo-navlink-dark:focus {
  color: #FFB385;
  background: rgba(255,107,53,0.10);
}
.skeuo-navlink-active-dark {
  color: #FFB385;
  background: rgba(255,107,53,0.18);
}
.skeuo-navbar-toggle {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.4rem;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.skeuo-navbar-toggle:hover {
  background: rgba(255,107,53,0.10);
}
.skeuo-navbar-toggle-dark:hover {
  background: rgba(255,107,53,0.18);
}
`;

if (typeof document !== 'undefined' && !document.getElementById('skeuo-navbar-styles')) {
  const style = document.createElement('style');
  style.id = 'skeuo-navbar-styles';
  style.innerHTML = skeuoNavbarStyles;
  document.head.appendChild(style);
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/models", label: "Explore Cars" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full" style={{pointerEvents: 'none'}}>
      <nav className={`skeuo-navbar${darkMode ? ' skeuo-navbar-dark' : ''}`} style={{pointerEvents: 'auto'}}>
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" style={{textDecoration: 'none'}}>
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
            <span className={`font-extrabold text-2xl ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>BNB Cars</span>
            <span className={`font-extrabold text-2xl ${darkMode ? 'text-orange-300' : 'text-orange-500'}`}>Rental</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-2">
              {navLinks.map(link => {
                const isActive = location.pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`skeuo-navlink${darkMode ? ' skeuo-navlink-dark' : ''}${isActive ? (darkMode ? ' skeuo-navlink-active-dark' : ' skeuo-navlink-active') : ''}`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
            <Link to="/login">
              <Button variant="ghost" className="text-gray-700 dark:text-gray-200 transition-transform duration-300 hover:scale-105">
                <span className="flex items-center">→ Login</span>
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white transition-transform duration-300 hover:scale-105">
                Sign Up
              </Button>
            </Link>
            <button
              className={`skeuo-navbar-toggle${darkMode ? ' skeuo-navbar-toggle-dark' : ''}`}
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode(dm => !dm)}
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-300 animate-spin-slow" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden skeuo-navbar-toggle"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white/90 dark:bg-[#181820]/90 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
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
                  <span className="font-bold text-gray-900 dark:text-gray-100">BNB Car</span>
                  <span className="font-bold text-[#FF6B35] dark:text-orange-300"> Rental</span>
                </div>
              </div>
              <button
                className="skeuo-navbar-toggle"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map(link => {
                const isActive = location.pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`skeuo-navlink${darkMode ? ' skeuo-navlink-dark' : ''}${isActive ? (darkMode ? ' skeuo-navlink-active-dark' : ' skeuo-navlink-active') : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
            <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col gap-3">
                <Link to="/login" className="w-full">
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" className="w-full">
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#FF5722]">Sign Up</Button>
                </Link>
                <button
                  className={`skeuo-navbar-toggle mt-2${darkMode ? ' skeuo-navbar-toggle-dark' : ''}`}
                  aria-label="Toggle dark mode"
                  onClick={() => setDarkMode(dm => !dm)}
                >
                  {darkMode ? <Sun className="w-5 h-5 text-yellow-300 animate-spin-slow" /> : <Moon className="w-5 h-5 text-gray-700" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
