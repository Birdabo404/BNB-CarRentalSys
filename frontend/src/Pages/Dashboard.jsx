import { useState, useEffect } from "react"
import Navbar from "../components/ui/Default/Navbar"

const Dashboard = () => {
  const [tab, setTab] = useState("reservations")
  const [user, setUser] = useState("")

  useEffect(() => {
    setUser(localStorage.getItem("mockUsername") || "Customer")
    const params = new URLSearchParams(window.location.search)
    if (params.get("tab")) setTab(params.get("tab"))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f7f7f9] to-[#f0f4fa] flex flex-col items-center">
      <Navbar />
      <div className="w-full max-w-3xl mx-auto mt-32 p-6 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl">
        <h2 className="text-2xl font-extrabold mb-6">Welcome, {user}!</h2>
        <div className="flex gap-4 mb-8">
          <button onClick={() => setTab("reservations")} className={`px-4 py-2 rounded-lg font-bold transition ${tab === "reservations" ? "bg-[#FF6B35] text-white" : "bg-[#fff7f2] text-[#FF6B35] hover:bg-[#ffe3d1]"}`}>My Reservations</button>
          <button onClick={() => setTab("profile")} className={`px-4 py-2 rounded-lg font-bold transition ${tab === "profile" ? "bg-[#FF6B35] text-white" : "bg-[#fff7f2] text-[#FF6B35] hover:bg-[#ffe3d1]"}`}>Profile</button>
        </div>
        {tab === "reservations" && (
          <div className="text-gray-700 text-lg text-center py-12">No reservations yet. (This will show your bookings in the future!)</div>
        )}
        {tab === "profile" && (
          <div className="text-gray-700 text-lg text-center py-12">Profile details and edit form coming soon.</div>
        )}
      </div>
    </div>
  )
}

export default Dashboard 