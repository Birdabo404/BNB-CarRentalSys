import {
  Star,
  Shield,
  Clock,
  CreditCard,
  ArrowRight,
  HelpCircle,
  Car,
  MapPin,
  Calendar,
  CreditCardIcon as PaymentIcon,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail"
import Navbar from "../components/ui/Default/Navbar"
import { Link } from "react-router-dom"

// Add these styles to the top of the file if using CSS-in-JS, or move to your CSS file if preferred
const skeuoStyles = `
.skeuo-card {
  background: #f7f7f9;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px 0 rgba(30, 41, 59, 0.06), 0 1.5px 0 #fff inset;
  border: 1.5px solid #ececec;
  padding: 2.5rem 1.5rem 2.5rem 1.5rem;
  position: relative;
  min-height: 320px;
  transition: box-shadow 0.3s, background 0.3s, border 0.3s, color 0.3s;
}
.skeuo-card-hover {
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(30, 41, 59, 0.12), 0 2px 0 #fff inset;
  border: 1.5px solid #e0e0e0;
}
.skeuo-card .skeuo-card-title {
  color: #181820;
}
.skeuo-card .skeuo-card-desc {
  color: #444;
}
.skeuo-card .skeuo-card-icon {
  filter: drop-shadow(0 2px 6px rgba(30,41,59,0.10));
}
@media (max-width: 1024px) {
  .skeuo-card {
    min-height: 260px;
    padding: 2rem 1rem 2rem 1rem;
  }
}
`;

if (typeof document !== 'undefined' && !document.getElementById('skeuo-styles')) {
  const style = document.createElement('style');
  style.id = 'skeuo-styles';
  style.innerHTML = skeuoStyles;
  document.head.appendChild(style);
}

// Add city lights SVG background as a React component
const CityLightsBG = () => (
  <svg
    className="fixed inset-0 w-full h-full z-0 pointer-events-none select-none city-lights-bg"
    style={{
      minHeight: '100vh',
      minWidth: '100vw',
      filter: 'blur(32px) saturate(1.2)',
      opacity: '0.55',
      transition: 'opacity 0.4s',
    }}
    aria-hidden="true"
    viewBox="0 0 1440 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="city1" cx="0.7" cy="0.8" r="1.1">
        <stop offset="0%" stopColor="#FFD580" />
        <stop offset="80%" stopColor="#FF6B35" stopOpacity="0.2" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <radialGradient id="city2" cx="0.2" cy="0.7" r="1.1">
        <stop offset="0%" stopColor="#7ED7FF" />
        <stop offset="80%" stopColor="#3B82F6" stopOpacity="0.18" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <radialGradient id="city3" cx="0.5" cy="0.2" r="1.1">
        <stop offset="0%" stopColor="#C084FC" />
        <stop offset="80%" stopColor="#6366F1" stopOpacity="0.13" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <radialGradient id="city4" cx="0.8" cy="0.3" r="1.1">
        <stop offset="0%" stopColor="#FFB385" />
        <stop offset="80%" stopColor="#FF6B35" stopOpacity="0.13" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <ellipse cx="1200" cy="800" rx="400" ry="180" fill="url(#city1)" />
    <ellipse cx="300" cy="700" rx="320" ry="140" fill="url(#city2)" />
    <ellipse cx="800" cy="200" rx="260" ry="120" fill="url(#city3)" />
    <ellipse cx="1100" cy="300" rx="180" ry="80" fill="url(#city4)" />
  </svg>
)

// Add dark mode support for the city lights background
const cityLightsDarkStyles = `
html.dark .city-lights-bg {
  opacity: 0.38 !important;
  filter: blur(40px) brightness(0.7) saturate(1.3) !important;
}
`;
if (typeof document !== 'undefined' && !document.getElementById('city-lights-dark-styles')) {
  const style = document.createElement('style');
  style.id = 'city-lights-dark-styles';
  style.innerHTML = cityLightsDarkStyles;
  document.head.appendChild(style);
}

const Home = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <CityLightsBG />
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/80 rounded-3xl backdrop-blur-xl shadow-xl p-8">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center bg-orange-100 text-[#FF6B35] px-4 py-2 rounded-full mb-8">
                <Star className="w-4 h-4 mr-2" />
                <span className="text-red-800 text-sm">Affordable Quality Car Rentals</span>
              </div>
              <h1 className="text-5xl font-bold mb-8 text-center lg:text-left">
                Barato nga{" "}
                <span className="text-[#FF6B35] font-bold text-6xl font-monospace tracking-wider">RENTALS!</span>{" "}
                Premium na <span className="text-[#FF6B35] text-6xl">Service!</span>
              </h1>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed text-center lg:text-left">
                Explore Butuan and beyond with BNB Car Rental — where premium Quality meets affordability!
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <Shield className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <span className="text-gray-700 font-medium font-monospace">Fully Insured</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <Clock className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <span className="text-gray-700 font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <CreditCard className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <span className="text-gray-700 font-medium">Flexible Payment</span>
                </div>
              </div>
            </div>
            <div className="relative mx-auto lg:mx-0 flex items-center justify-center">
              <div className="relative z-10">
                <img
                  src="Honda-civic.png"
                  alt="Honda-Civic-PNG"
                  className="rounded-lg object-contain w-full h-auto transition-transform duration-700 hover:scale-105 bg-transparent shadow-lg"
                  style={{background: 'transparent'}}
                />
                <div className="absolute -bottom-1 right-20 bg-white p-3 rounded-lg shadow-md">
                  <p className="font-medium text-gray-900 tracking-normal text-sm">Latest Models</p>
                  <p className="text-sm text-gray-500">Premium Selection</p>
                </div>
              </div>
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-gray-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-[#FF6B35] px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-4 h-4 mr-2" /> How It Works?
            </div>
            <h2 className="text-4xl font-bold mb-4">Rent Your Dream Car in 4 Easy Steps</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've streamlined our rental process to get you on the road quickly and safely.
              <br />
              Follow these simple steps to begin your journey with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 relative">
            {/* Connecting lines between steps (visible on lg screens) */}
            <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 group">
              <div className="skeuo-card group-hover:skeuo-card-hover transition-all duration-300 ease-out">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-inner flex items-center justify-center font-bold border-2 border-orange-200 group-hover:border-orange-400 transition-all duration-300">
                  <span className="text-orange-500 group-hover:text-white group-hover:bg-orange-500 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300">1</span>
                </div>
                <div className="flex justify-center mb-6">
                  <Car className="w-12 h-12 text-blue-400 group-hover:text-blue-600 transition-all duration-300 skeuo-card-icon" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 skeuo-card-title">Select Your Car</h3>
                <p className="skeuo-card-desc text-center">
                  Choose from our wide range of premium vehicles for any occasion
                </p>
                <div className="flex justify-center mt-6">
                  <CheckCircle className="w-6 h-6 text-gray-300 group-hover:text-green-400 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 group">
              <div className="skeuo-card group-hover:skeuo-card-hover transition-all duration-300 ease-out">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-inner flex items-center justify-center font-bold border-2 border-green-200 group-hover:border-green-400 transition-all duration-300">
                  <span className="text-green-500 group-hover:text-white group-hover:bg-green-500 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300">2</span>
                </div>
                <div className="flex justify-center mb-6">
                  <MapPin className="w-12 h-12 text-green-400 group-hover:text-green-600 transition-all duration-300 skeuo-card-icon" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 skeuo-card-title">Pick-up Location</h3>
                <p className="skeuo-card-desc text-center">
                  Select from our numerous convenient pick-up and drop-off locations
                </p>
                <div className="flex justify-center mt-6">
                  <CheckCircle className="w-6 h-6 text-gray-300 group-hover:text-green-400 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 group">
              <div className="skeuo-card group-hover:skeuo-card-hover transition-all duration-300 ease-out">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-inner flex items-center justify-center font-bold border-2 border-purple-200 group-hover:border-purple-400 transition-all duration-300">
                  <span className="text-purple-500 group-hover:text-white group-hover:bg-purple-500 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300">3</span>
                </div>
                <div className="flex justify-center mb-6">
                  <Calendar className="w-12 h-12 text-purple-400 group-hover:text-purple-600 transition-all duration-300 skeuo-card-icon" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 skeuo-card-title">Pick-up Date</h3>
                <p className="skeuo-card-desc text-center">Choose your rental duration and preferred pick-up timing</p>
                <div className="flex justify-center mt-6">
                  <CheckCircle className="w-6 h-6 text-gray-300 group-hover:text-green-400 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 group">
              <div className="skeuo-card group-hover:skeuo-card-hover transition-all duration-300 ease-out">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-inner flex items-center justify-center font-bold border-2 border-orange-200 group-hover:border-orange-400 transition-all duration-300">
                  <span className="text-orange-500 group-hover:text-white group-hover:bg-orange-500 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300">4</span>
                </div>
                <div className="flex justify-center mb-6">
                  <PaymentIcon className="w-12 h-12 text-orange-400 group-hover:text-orange-600 transition-all duration-300 skeuo-card-icon" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 skeuo-card-title">Make Payment</h3>
                <p className="skeuo-card-desc text-center">Quick and secure payment with multiple payment options</p>
                <div className="flex justify-center mt-6">
                  <CheckCircle className="w-6 h-6 text-gray-300 group-hover:text-green-400 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Link to="/login">
              <Button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white px-8 py-6 rounded-lg transition-transform duration-300 hover:scale-105 h-auto">
                Book Car Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MouseTrail strokeColor="color-black" lineWidthStart={20} />
    </div>
  )
}

export default Home
