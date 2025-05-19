import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  LayoutDashboard,
  Car,
  Calendar,
  Users,
  BarChart3,
  LogOut,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Will be implemented with API
    setLoading(false)
  }, [])

  const handleLogout = async () => {
    try {
      // Will be implemented with API
      console.log("Logging out admin")
      navigate("/admin/login")
    } catch (err) {
      console.error("Logout failed:", err)
    }
  }

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
    { icon: Car, label: "Manage Vehicles", path: "/admin/vehicles" },
    { icon: Calendar, label: "Reservations", path: "/admin/reservations" },
    { icon: Users, label: "Customers", path: "/admin/customers" },
    { icon: BarChart3, label: "Reports", path: "/admin/reports" },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Mobile Sidebar Toggle */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#111111] border border-[#222222] lg:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#111111] border-r border-[#222222] transform transition-transform duration-200 ease-in-out z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Admin Panel</span>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-[#1A1A1A] transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Button
            variant="ghost"
            className="w-full flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#1A1A1A]"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`min-h-screen transition-all duration-200 ${
          isSidebarOpen ? "lg:ml-64" : ""
        }`}
      >
        <div className="p-8">
          {loading ? (
            <div className="text-center text-gray-400">Loading dashboard...</div>
          ) : error ? (
            <div className="text-center text-red-400">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Dashboard cards will be implemented with API data */}
              <div className="bg-[#111111] rounded-xl border border-[#222222] p-6">
                <h3 className="text-gray-400 mb-2">Total Vehicles</h3>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="bg-[#111111] rounded-xl border border-[#222222] p-6">
                <h3 className="text-gray-400 mb-2">Active Bookings</h3>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="bg-[#111111] rounded-xl border border-[#222222] p-6">
                <h3 className="text-gray-400 mb-2">Total Customers</h3>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="bg-[#111111] rounded-xl border border-[#222222] p-6">
                <h3 className="text-gray-400 mb-2">Revenue</h3>
                <p className="text-2xl font-bold">₱0</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard 