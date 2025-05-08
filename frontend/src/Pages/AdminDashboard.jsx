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

  useEffect(() => {
    // Check if admin is logged in
    if (localStorage.getItem("mockAdminLoggedIn") !== "true") {
      navigate("/admin/login")
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem("mockAdminLoggedIn")
    localStorage.removeItem("mockAdminName")
    navigate("/admin/login")
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
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-[#111111] border-r border-[#222222] transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#222222]">
          {isSidebarOpen && (
            <div className="flex items-center gap-2">
              <Car className="w-6 h-6 text-[#FF6B35]" />
              <span className="font-bold text-lg">BNB Admin</span>
            </div>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-[#222222] rounded-lg transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.path}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[#222222] transition-colors group"
            >
              <item.icon className="w-5 h-5 text-gray-400 group-hover:text-[#FF6B35]" />
              {isSidebarOpen && (
                <span className="text-gray-300 group-hover:text-white">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#222222]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[#222222] transition-colors group"
          >
            <LogOut className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
            {isSidebarOpen && (
              <span className="text-gray-300 group-hover:text-red-500">
                Logout
              </span>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Dashboard Overview</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FF6B35] flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="text-gray-300">Admin</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Vehicles", value: "24", icon: Car },
              { label: "Active Reservations", value: "12", icon: Calendar },
              { label: "Total Customers", value: "156", icon: Users },
              { label: "Monthly Revenue", value: "₱45,678", icon: BarChart3 },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-[#111111] p-6 rounded-xl border border-[#222222] hover:border-[#333333] transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">{stat.label}</span>
                  <stat.icon className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-[#111111] rounded-xl border border-[#222222] p-6">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                {
                  action: "New reservation",
                  details: "Toyota Innova - 3 days",
                  time: "2 hours ago",
                },
                {
                  action: "Vehicle added",
                  details: "Honda City 2024",
                  time: "5 hours ago",
                },
                {
                  action: "Payment received",
                  details: "₱12,500 - Reservation #1234",
                  time: "1 day ago",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-[#222222] transition-colors"
                >
                  <div>
                    <div className="font-medium">{activity.action}</div>
                    <div className="text-sm text-gray-400">{activity.details}</div>
                  </div>
                  <div className="text-sm text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard 