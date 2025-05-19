import { useState, useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Search, X, LogIn, UserPlus } from "lucide-react"
import Navbar from "../components/ui/Default/Navbar"

const ExploreCars = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = new URLSearchParams(location.search)
  const initialSearch = params.get("search") || ""
  const [search, setSearch] = useState(initialSearch)
  const [modalCar, setModalCar] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const modalRef = useRef()
  const [bookingModal, setBookingModal] = useState(false)
  const [pickup, setPickup] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [bookingError, setBookingError] = useState("")

  useEffect(() => {
    setSearch(initialSearch)
  }, [initialSearch])

  // Update URL when search changes
  useEffect(() => {
    if (search !== initialSearch) {
      navigate(`/models?search=${encodeURIComponent(search)}`)
    }
  }, [search, initialSearch, navigate])

  // Fade in transition on mount
  const [fadeIn, setFadeIn] = useState(false)
  useEffect(() => {
    setFadeIn(true)
  }, [])

  // Click outside modal to close
  useEffect(() => {
    if (!showModal) return
    const handleClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false)
        setModalCar(null)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [showModal])

  const filteredCars = cars.filter(car =>
    car.make.toLowerCase().includes(search.toLowerCase())
  )

  const handleBookNow = () => {
    // Will be implemented with actual authentication
    navigate("/login")
  }

  const openBookingModal = (car) => {
    setModalCar(car)
    setShowModal(false)
    setBookingModal(true)
    setPickup("")
    setStartDate("")
    setEndDate("")
    setBookingError("")
  }

  const handleBookingConfirm = () => {
    if (!pickup || !startDate || !endDate) {
      setBookingError("Please select pickup location, start date, and end date.")
      return
    }
    const start = new Date(startDate)
    const end = new Date(endDate)
    if (end <= start) {
      setBookingError("End date must be after start date.")
      return
    }
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24))
    const subtotal = modalCar.dailyRate * days
    const tax = subtotal * 0.12
    const total = subtotal + tax
    navigate("/payment", {
      state: {
        car: modalCar,
        pickup,
        startDate,
        endDate,
        days,
        subtotal,
        tax,
        total
      }
    })
  }

  // Add card and badge animation styles
  const cardStyles = `
  .explore-car-card {
    transition: box-shadow 0.3s cubic-bezier(.4,2,.6,1), transform 0.3s cubic-bezier(.4,2,.6,1);
    will-change: transform, box-shadow;
  }
  .explore-car-card:hover {
    transform: scale(1.045) rotateZ(-0.5deg);
    box-shadow: 0 8px 32px 0 rgba(255,107,53,0.10), 0 2px 8px 0 rgba(30,41,59,0.10);
    border-color: #FF6B35;
  }
  .animated-badge {
    animation: badgePulse 1.2s infinite alternate;
    transition: background 0.3s, color 0.3s;
  }
  @keyframes badgePulse {
    0% { background: #f0fff4; color: #22c55e; }
    100% { background: #bbf7d0; color: #16a34a; }
  }
  `;
  if (typeof document !== 'undefined' && !document.getElementById('explore-car-card-styles')) {
    const style = document.createElement('style');
    style.id = 'explore-car-card-styles';
    style.innerHTML = cardStyles;
    document.head.appendChild(style);
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-white via-[#f7f7f9] to-[#f0f4fa] flex flex-col items-center transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <section className="w-full flex flex-col items-center pt-36 pb-12 px-4">
        <div className="w-full max-w-2xl mx-auto mb-10 sticky top-8 z-20">
          <form className="relative" onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search for a car brand (e.g. Toyota, Ford, Mitsubishi…)"
              className="w-full py-4 pl-12 pr-4 rounded-2xl border border-gray-200 bg-white shadow focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-lg transition"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
          </form>
        </div>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full text-center text-gray-500 text-lg py-16">Loading cars...</div>
          ) : error ? (
            <div className="col-span-full text-center text-red-500 text-lg py-16">{error}</div>
          ) : filteredCars.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg py-16">No cars found for this brand.</div>
          ) : (
            filteredCars.map(car => (
              <div
                key={car.id}
                className={`explore-car-card bg-white border border-gray-100 rounded-2xl shadow-lg p-5 flex flex-col items-center cursor-pointer ${car.status !== 'Available' ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''}`}
                onClick={() => car.status === 'Available' && (setModalCar(car), setShowModal(true))}
              >
                <img src={car.imageURL} alt={car.make + ' ' + car.model} className="w-full h-40 object-contain rounded-xl mb-4 bg-[#f7f7f9]" />
                <div className="w-full flex flex-col items-start gap-1 mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[#FF6B35] uppercase tracking-wider bg-[#fff7f2] px-2 py-1 rounded-lg">{car.make}</span>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${car.status === 'Available' ? 'animated-badge' : 'bg-gray-200 text-gray-500'}`}
                      style={car.status === 'Available' ? { background: '#f0fff4', color: '#22c55e' } : {}}>
                      {car.status}
                    </span>
                  </div>
                  <span className="text-xl font-extrabold text-gray-900">{car.model} <span className="text-base font-medium text-gray-500">({car.year})</span></span>
                  <span className="text-sm text-gray-500 mb-1">{car.category} • {car.seats} seats</span>
                  <span className="text-xs text-gray-400">{car.transmission} • {car.fuel}</span>
                </div>
                <div className="w-full flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                  <span className="text-lg font-bold text-[#FF6B35]">₱{car.dailyRate.toLocaleString()}/day</span>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
      {/* Modal for car details and booking */}
      {showModal && modalCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all">
          <div ref={modalRef} className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative animate-zoomIn">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={() => { setShowModal(false); setModalCar(null) }}>
              <X className="w-6 h-6" />
            </button>
            <img src={modalCar.imageURL} alt={modalCar.make + ' ' + modalCar.model} className="w-full h-56 object-contain rounded-2xl mb-6" />
            <div className="mb-2">
              <span className="text-xs font-semibold text-[#FF6B35] uppercase tracking-wider">{modalCar.make}</span>
              <span className="text-lg font-bold text-gray-900 ml-2">{modalCar.model} ({modalCar.year})</span>
            </div>
            <div className="text-gray-600 mb-2">{modalCar.category} • {modalCar.seats} seats • {modalCar.transmission} • {modalCar.fuel}</div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-base font-bold text-[#FF6B35]">₱{modalCar.dailyRate.toLocaleString()}/day</span>
              <span className="text-xs px-3 py-1 rounded-full font-semibold bg-green-100 text-green-700">{modalCar.status}</span>
            </div>
            <button
              onClick={() => openBookingModal(modalCar)}
              className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white font-bold py-3 rounded-xl transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
      {/* Booking modal for pickup and dates */}
      {bookingModal && modalCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all">
          <div ref={modalRef} className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-zoomIn">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={() => { setBookingModal(false); setModalCar(null) }}>
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4">Book {modalCar.make} {modalCar.model}</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Pick-up Location</label>
              <select value={pickup} onChange={e => setPickup(e.target.value)} className="w-full rounded-xl border border-gray-200 py-3 px-4 mb-2 focus:ring-2 focus:ring-[#FF6B35]">
                <option value="">Select location...</option>
                {pickupLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>
            <div className="mb-4 flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2">Start Date</label>
                <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full rounded-xl border border-gray-200 py-3 px-4 focus:ring-2 focus:ring-[#FF6B35]" />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2">End Date</label>
                <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="w-full rounded-xl border border-gray-200 py-3 px-4 focus:ring-2 focus:ring-[#FF6B35]" />
              </div>
            </div>
            {bookingError && <div className="text-red-500 text-sm mb-2">{bookingError}</div>}
            <button
              className="w-full py-4 mt-2 rounded-xl bg-[#FF6B35] hover:bg-[#FF5722] text-white font-bold text-lg shadow transition"
              onClick={handleBookingConfirm}
            >
              Continue to Payment
            </button>
          </div>
        </div>
      )}
      <style>{`
        @keyframes zoomIn {
          0% { transform: scale(0.85); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-zoomIn { animation: zoomIn 0.25s cubic-bezier(.4,2,.6,1); }
      `}</style>
    </div>
  )
}

export default ExploreCars 