import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

const AdminLogin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock admin login: username 'admin', password 'admin123'
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("mockAdminLoggedIn", "true")
      localStorage.setItem("mockAdminName", username)
      navigate("/admin/dashboard")
    } else {
      setError("Invalid admin credentials.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#f7f7f9] to-[#f0f4fa] px-2 py-8">
      <div className="w-full max-w-md skeuo-card p-8 shadow-xl rounded-3xl flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Admin Login</h2>
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="username" className="block text-gray-700 font-medium">Username</label>
            <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full rounded-xl border border-gray-200 py-3 px-4 focus:ring-2 focus:ring-[#FF6B35]" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full rounded-xl border border-gray-200 py-3 px-4 focus:ring-2 focus:ring-[#FF6B35]" />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <Button type="submit" className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white font-bold text-lg rounded-xl shadow-md py-4">Login</Button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin 