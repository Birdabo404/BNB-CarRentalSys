import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Car,
  Plus,
  Search,
  Edit2,
  Trash2,
  ChevronDown,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const AdminVehicles = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")

  // Mock vehicle data
  const vehicles = [
    {
      id: 1,
      make: "Toyota",
      model: "Innova",
      year: 2023,
      status: "Available",
      price: "₱3,500",
      seats: 7,
      transmission: "Automatic",
      fuelType: "Diesel",
    },
    {
      id: 2,
      make: "Honda",
      model: "City",
      year: 2024,
      status: "Reserved",
      price: "₱2,500",
      seats: 5,
      transmission: "Automatic",
      fuelType: "Gasoline",
    },
    // Add more mock vehicles as needed
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Manage Vehicles</h1>
          <Button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add New Vehicle
          </Button>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search vehicles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#111111] border border-[#222222] rounded-lg focus:outline-none focus:border-[#FF6B35]"
            />
          </div>
          <Button variant="outline" className="border-[#222222] hover:bg-[#222222]">
            <Filter className="w-4 h-4 mr-2" />
            Filters
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Vehicles Table */}
        <div className="bg-[#111111] rounded-xl border border-[#222222] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#222222]">
                  <th className="px-6 py-4 text-left text-gray-400 font-medium">Vehicle</th>
                  <th className="px-6 py-4 text-left text-gray-400 font-medium">Status</th>
                  <th className="px-6 py-4 text-left text-gray-400 font-medium">Price/Day</th>
                  <th className="px-6 py-4 text-left text-gray-400 font-medium">Seats</th>
                  <th className="px-6 py-4 text-left text-gray-400 font-medium">Transmission</th>
                  <th className="px-6 py-4 text-left text-gray-400 font-medium">Fuel Type</th>
                  <th className="px-6 py-4 text-right text-gray-400 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr
                    key={vehicle.id}
                    className="border-b border-[#222222] hover:bg-[#1A1A1A] transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#222222] flex items-center justify-center">
                          <Car className="w-5 h-5 text-[#FF6B35]" />
                        </div>
                        <div>
                          <div className="font-medium">{vehicle.make} {vehicle.model}</div>
                          <div className="text-sm text-gray-400">{vehicle.year}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          vehicle.status === "Available"
                            ? "bg-green-900/30 text-green-400"
                            : "bg-yellow-900/30 text-yellow-400"
                        }`}
                      >
                        {vehicle.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium">{vehicle.price}</td>
                    <td className="px-6 py-4 text-gray-400">{vehicle.seats} seats</td>
                    <td className="px-6 py-4 text-gray-400">{vehicle.transmission}</td>
                    <td className="px-6 py-4 text-gray-400">{vehicle.fuelType}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-[#222222]"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-[#222222] text-red-500 hover:text-red-400"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminVehicles 