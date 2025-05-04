"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Star, Shield, Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Orange Section with Animation */}
      <div className="w-full md:w-1/2 bg-[#FF6B35] relative overflow-hidden">
        {/* Animated blurred circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white opacity-10 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-white opacity-10 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 p-12 h-full flex flex-col">
          {/* Logo */}
          <div className="flex items-center mb-20">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-white"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <span className="ml-3 text-white text-2xl font-bold">BNB Car Rental</span>
          </div>

          {/* Main Content */}
          <div className="flex-grow flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Your Journey
              <br />
              Begins Here
            </h1>
            <p className="text-white/90 text-lg mb-12 max-w-md">
              Experience premium car rental services with unlimited miles and flexible pickup options.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">Premium Fleet</h3>
                <p className="text-white/80">Top-tier vehicles</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">Secure Booking</h3>
                <p className="text-white/80">Protected transactions</p>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-white text-3xl font-bold">50K+</p>
                  <p className="text-white/80 text-sm">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-white text-3xl font-bold">100+</p>
                  <p className="text-white/80 text-sm">Premium Cars</p>
                </div>
                <div className="text-center">
                  <p className="text-white text-3xl font-bold">4.9/5</p>
                  <p className="text-white/80 text-sm">User Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Login to Your Account</h2>
            <p className="text-gray-600">Welcome back! Please enter your details</p>
          </div>

          <form className="space-y-6">
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
              <div className="flex justify-between">
                <label htmlFor="password" className="block text-gray-700 font-medium">
                  Password
                </label>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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
              <div className="flex justify-end">
                <Link to="/forgot-password" className="text-[#FF6B35] hover:text-[#FF5722] text-sm">
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white py-6 h-auto transition-transform duration-300 hover:scale-[1.02]"
            >
              <LogIn className="mr-2 h-5 w-5" /> Sign in
            </Button>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-300 absolute w-full"></div>
              <span className="bg-white px-4 text-sm text-gray-500 relative">or</span>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 px-4 text-gray-700 hover:bg-gray-50 transition-all duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z"
                  fill="#4285F4"
                />
                <path
                  d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z"
                  fill="#34A853"
                />
                <path
                  d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z"
                  fill="#FBBC05"
                />
                <path
                  d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z"
                  fill="#EB4335"
                />
              </svg>
              Sign in with Google
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#FF6B35] hover:text-[#FF5722] font-medium">
              Sign up
            </Link>
          </p>

          <div className="mt-8 text-center">
            <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
