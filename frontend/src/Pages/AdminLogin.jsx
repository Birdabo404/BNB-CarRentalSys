import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

const AdminLogin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Will be implemented with API
      console.log("Admin login attempt with:", { username, password })
      navigate("/admin/dashboard")
    } catch (err) {
      setError("Invalid admin credentials")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#f7f7f9] to-[#f0f4fa] px-2 py-8">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Admin Login</h2>
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="username" className="block text-gray-700 font-medium">Username</label>
            <input 
              id="username" 
              type="text" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              className="w-full rounded-xl border border-gray-200 py-3 px-4 focus:ring-2 focus:ring-[#FF6B35]"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input 
              id="password" 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className="w-full rounded-xl border border-gray-200 py-3 px-4 focus:ring-2 focus:ring-[#FF6B35]"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <Button 
            type="submit" 
            className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white font-bold text-lg rounded-xl shadow-md py-4"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin 