import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Mail, Lock, UserPlus, Eye, EyeOff, IdCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [licenseNumber, setLicenseNumber] = useState("")
  const [licenseFile, setLicenseFile] = useState(null)
  const [licensePreview, setLicensePreview] = useState(null)
  const [idFile, setIdFile] = useState(null)
  const [idPreview, setIdPreview] = useState(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLicenseFile = (e) => {
    const file = e.target.files[0]
    setLicenseFile(file)
    if (file) {
      const reader = new FileReader()
      reader.onload = (ev) => setLicensePreview(ev.target.result)
      reader.readAsDataURL(file)
    } else {
      setLicensePreview(null)
    }
  }

  const handleIdFile = (e) => {
    const file = e.target.files[0]
    setIdFile(file)
    if (file) {
      const reader = new FileReader()
      reader.onload = (ev) => setIdPreview(ev.target.result)
      reader.readAsDataURL(file)
    } else {
      setIdPreview(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Will be implemented with API
      console.log("Registration attempt with:", {
        name,
        email,
        password,
        licenseNumber,
        licenseFile,
        idFile
      })
      navigate("/dashboard")
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

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
          <span className="text-2xl font-extrabold text-black tracking-wide ">BNB</span>
          <span className="text-2xl font-extrabold text-[#FF6B35] tracking-wide">Car Rental</span>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Create an Account</h2>
        <p className="text-gray-600 mb-8 text-center">Join us and start your journey with BNB Car Rental</p>
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
            <Input 
              id="name" 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name" 
              className="py-6"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="pl-10 py-6"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="pl-10 py-6"
                required
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
          <div className="space-y-2">
            <label htmlFor="licenseNumber" className="block text-gray-700 font-medium flex items-center gap-2">
              <IdCard className="w-5 h-5 text-gray-400" /> Driver's License Number
            </label>
            <Input 
              id="licenseNumber" 
              type="text" 
              value={licenseNumber} 
              onChange={e => setLicenseNumber(e.target.value)} 
              placeholder="Enter your license number" 
              className="py-6"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium flex items-center gap-2">
              <IdCard className="w-5 h-5 text-gray-400" /> Upload Driver's License Photo
            </label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleLicenseFile} 
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#fff7f2] file:text-[#FF6B35] hover:file:bg-[#ffe3d1]"
              required
            />
            {licensePreview && <img src={licensePreview} alt="License Preview" className="mt-2 rounded-lg shadow w-full max-h-32 object-contain" />}
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium flex items-center gap-2">
              <IdCard className="w-5 h-5 text-gray-400" /> Upload Government-issued ID
            </label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleIdFile} 
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#fff7f2] file:text-[#FF6B35] hover:file:bg-[#ffe3d1]"
              required
            />
            {idPreview && <img src={idPreview} alt="ID Preview" className="mt-2 rounded-lg shadow w-full max-h-32 object-contain" />}
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <Button
            type="submit"
            className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white py-6 h-auto font-bold text-lg rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
            disabled={loading}
          >
            <UserPlus className="mr-2 h-5 w-5" /> {loading ? "Creating Account..." : "Create Account"}
          </Button>
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#FF6B35] hover:text-[#FF5722] font-medium">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register 