import { useLocation, useNavigate } from "react-router-dom"
import Navbar from "../components/ui/Default/Navbar"
import { useState } from "react"

const Payment = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state
  const [showXendit, setShowXendit] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

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

  // Simulate backend call to get Xendit token
  const handleXenditPay = (e) => {
    e.preventDefault()
    // Here you would call your backend to create a Xendit invoice and get a token
    // For now, we just show the mock Drop-in UI
    setShowXendit(true)
    setTimeout(() => setPaymentSuccess(true), 2500) // Simulate payment success
  }

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
          {/* Xendit Drop-in UI mock */}
          {!showXendit && !paymentSuccess && (
            <form className="mt-8 flex flex-col gap-4" onSubmit={handleXenditPay}>
              {/* In real Xendit integration, you would NOT collect card details here. */}
              <button type="submit" className="w-full py-4 mt-2 rounded-xl bg-[#FF6B35] hover:bg-[#FF5722] text-white font-bold text-lg shadow transition">Pay with Xendit</button>
              <div className="text-xs text-gray-400 text-center">You will be redirected to a secure Xendit payment page.</div>
            </form>
          )}
          {showXendit && !paymentSuccess && (
            <div className="flex flex-col items-center justify-center mt-8">
              <div className="w-full bg-[#f7f7f9] rounded-xl p-8 flex flex-col items-center animate-pulse">
                <img src="https://assets-global.website-files.com/5f6b719079b2b2c6c1e4b6c7/5f6b719079b2b2e1cbe4b6e2_xendit-logo.svg" alt="Xendit" className="w-32 mb-4" />
                <div className="text-lg font-bold text-gray-700 mb-2">Redirecting to Xendit...</div>
                <div className="text-sm text-gray-500">Please wait while we process your payment.</div>
              </div>
            </div>
          )}
          {paymentSuccess && (
            <div className="flex flex-col items-center justify-center mt-8">
              <div className="w-full bg-[#f7f7f9] rounded-xl p-8 flex flex-col items-center">
                <img src="https://assets-global.website-files.com/5f6b719079b2b2c6c1e4b6c7/5f6b719079b2b2e1cbe4b6e2_xendit-logo.svg" alt="Xendit" className="w-32 mb-4" />
                <div className="text-lg font-bold text-green-600 mb-2">Payment Successful!</div>
                <div className="text-sm text-gray-500">Thank you for your payment. Your booking is confirmed.</div>
                <button className="mt-6 bg-[#FF6B35] hover:bg-[#FF5722] text-white font-bold px-6 py-3 rounded-xl" onClick={() => navigate("/")}>Back to Home</button>
              </div>
            </div>
          )}
        </div>
        {/* Support Widget */}
        <div className="mt-10 w-full max-w-lg mx-auto bg-white/60 border border-[#fff7f2] rounded-2xl shadow p-8 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-2">Any concern?</h3>
          <p className="text-gray-600 mb-6">Confused about something? Our customer support team is here to help you 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a href="mailto:support@bnbcarrental.com" className="flex-1 flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#FF5722] text-white font-bold py-3 px-6 rounded-lg shadow transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" /></svg>
              Email Support
            </a>
            <a href="tel:+639123456789" className="flex-1 flex items-center justify-center gap-2 border-2 border-[#FF6B35] text-[#FF6B35] font-bold py-3 px-6 rounded-lg shadow transition hover:bg-[#fff7f2]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h.75a2.25 2.25 0 002.25-2.25v-2.25a.75.75 0 00-.75-.75h-3.063a.75.75 0 00-.75.648l-.375 2.25a12.035 12.035 0 01-7.227-7.227l2.25-.375a.75.75 0 00.648-.75V3a.75.75 0 00-.75-.75H4.5A2.25 2.25 0 002.25 4.5v.75z" /></svg>
              Call Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment 