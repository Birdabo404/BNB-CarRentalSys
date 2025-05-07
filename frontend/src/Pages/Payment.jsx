import { useLocation, useNavigate } from "react-router-dom"
import Navbar from "../components/ui/Default/Navbar"

const Payment = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state

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

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-white via-[#f7f7f9] to-[#f0f4fa]">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full min-h-[80vh]">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-10 max-w-lg w-full mt-24">
          <h2 className="text-3xl font-extrabold mb-6 text-center">Payment Summary</h2>
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-4">
              <img src={car.imageURL} alt={car.make + ' ' + car.model} className="w-28 h-20 object-contain rounded-xl bg-[#f7f7f9]" />
              <div>
                <div className="text-lg font-bold text-gray-900">{car.make} {car.model} ({car.year})</div>
                <div className="text-sm text-gray-500">{car.category} • {car.seats} seats • {car.transmission} • {car.fuel}</div>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-sm text-gray-700">
              <div><span className="font-semibold">Pick-up Location:</span> {pickup}</div>
              <div><span className="font-semibold">Start Date:</span> {startDate}</div>
              <div><span className="font-semibold">End Date:</span> {endDate}</div>
              <div><span className="font-semibold">Rental Days:</span> {days}</div>
            </div>
          </div>
          <div className="border-t border-gray-200 my-4"></div>
          <div className="flex flex-col gap-2 text-lg">
            <div className="flex justify-between"><span>Subtotal</span><span>₱{subtotal.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Tax (12%)</span><span>₱{tax.toLocaleString()}</span></div>
            <div className="flex justify-between font-bold text-[#FF6B35]"><span>Total</span><span>₱{total.toLocaleString()}</span></div>
          </div>
          <form className="mt-8 flex flex-col gap-4">
            <input type="text" placeholder="Cardholder Name" className="w-full rounded-xl border border-gray-200 py-3 px-4 focus:ring-2 focus:ring-[#FF6B35]" />
            <input type="text" placeholder="Card Number" className="w-full rounded-xl border border-gray-200 py-3 px-4 focus:ring-2 focus:ring-[#FF6B35]" />
            <div className="flex gap-4">
              <input type="text" placeholder="MM/YY" className="flex-1 rounded-xl border border-gray-200 py-3 px-4 focus:ring-2 focus:ring-[#FF6B35]" />
              <input type="text" placeholder="CVC" className="flex-1 rounded-xl border border-gray-200 py-3 px-4 focus:ring-2 focus:ring-[#FF6B35]" />
            </div>
            <button type="submit" className="w-full py-4 mt-2 rounded-xl bg-[#FF6B35] hover:bg-[#FF5722] text-white font-bold text-lg shadow transition">Confirm Payment</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Payment 