import { useLocation, useNavigate } from "react-router-dom"
import Navbar from "../components/ui/Default/Navbar"
import { useState } from "react"

const Payment = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-[#f7f7f9] to-[#f0f4fa]">
        <Navbar />
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-12 max-w-lg w-full text-center mt-32">
          <h2 className="text-2xl font-bold mb-4">No Payment Data</h2>
          <p className="text-gray-600 mb-6">Please select a car and booking details first.</p>
          <button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white font-bold px-6 py-3 rounded-xl" onClick={() => navigate("/models")}>Back to Cars</button>
        </div>
      </div>
    )
  }

  const { car, pickup, startDate, endDate, days, subtotal, tax, total } = data

  const handlePayment = async () => {
    setLoading(true)
    setError(null)

    try {
      // Will be implemented with API
      console.log("Processing payment for:", {
        car,
        pickup,
        startDate,
        endDate,
        days,
        subtotal,
        tax,
        total
      })
      navigate("/dashboard")
    } catch (err) {
      setError("Payment failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f7f7f9] to-[#f0f4fa]">
      <Navbar />
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Payment Details</h1>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Vehicle</span>
                <span className="font-medium">{car.make} {car.model} ({car.year})</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Pickup Location</span>
                <span className="font-medium">{pickup}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Start Date</span>
                <span className="font-medium">{new Date(startDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">End Date</span>
                <span className="font-medium">{new Date(endDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Duration</span>
                <span className="font-medium">{days} days</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-xl font-bold mb-4">Payment Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₱{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tax (12%)</span>
                <span className="font-medium">₱{tax.toLocaleString()}</span>
              </div>
              <div className="border-t border-gray-200 my-4"></div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-[#FF6B35]">₱{total.toLocaleString()}</span>
              </div>
            </div>

            {error && (
              <div className="mt-4 text-red-500 text-center">{error}</div>
            )}

            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full mt-8 bg-[#FF6B35] hover:bg-[#FF5722] text-white font-bold py-4 rounded-xl shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processing Payment..." : "Proceed to Payment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment 