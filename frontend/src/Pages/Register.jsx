import { useState } from "react"
import { Link } from "react-router-dom"
import { Mail, Lock, UserPlus, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f9] px-2 py-8">
      <div className="w-full max-w-md skeuo-card p-8 shadow-xl rounded-3xl flex flex-col items-center">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
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
          </div>
          <span className="text-2xl font-extrabold text-[#FF6B35] tracking-wide">BNB Car Rental</span>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Create an Account</h2>
        <p className="text-gray-600 mb-8 text-center">Sign up to get started with BNB Car Rental</p>
        <form className="space-y-6 w-full">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <div className="relative">
              <UserPlus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input id="name" type="text" placeholder="Enter your name" className="pl-10 py-6" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input id="email" type="email" placeholder="Enter your email" className="pl-10 py-6" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="pl-10 py-6"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white py-6 h-auto font-bold text-lg rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
          >
            Create Account
          </Button>
        </form>
        <p className="mt-8 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-[#FF6B35] hover:text-[#FF5722] font-medium">
            Login
          </Link>
        </p>
        <div className="mt-8 text-center">
          <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register 