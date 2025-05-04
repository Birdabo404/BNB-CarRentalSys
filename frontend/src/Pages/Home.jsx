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

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      <Navbar />
      <section className="pt-30 pb-20">
        <div className="max-w-6xl mx-35 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-lg">
              <div className="inline-flex items-center bg-orange-100 text-[#FF6B35] px-4 py-2 rounded-full mb-8">
                <Star className="w-4 h-4 mr-2" />{" "}
                <span className="text-red-800 text-sm">Affordable Quality Car Rentals </span>
              </div>

              <h1 className="text-5xl font-bold mb-8">
                Barato nga{" "}
                <span className="text-[#FF6B35] font-bold text-6xl font-monospace tracking-wider">RENTALS!</span>{" "}
                Premium na <span className="text-[#FF6B35] text-6xl ">Service!</span>
              </h1>

              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Explore Butuan and beyond with BNB Car Rental — where premium Quality meets affordability!
              </p>

              <div className="flex flex-wrap gap-8">
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

            <div className="relative">
              <div className="absolute top-20 right-0">
                <div className="absolute -inset-1 -m-1 bg-orange-500 rounded-full blur-md opacity-20 animate-glow"></div>

                <div
                  className="relative bg-black px-6 py-4 rounded-full text-white font-medium 
                 ring-2 ring-orange-500/20 ring-inset 
                 shadow-xl shadow-orange-500/10"
                >
                  Lowest Price Guaranteed
                </div>
              </div>
              {/* Fixed the hover effect to only apply to the image itself */}
              <div className="relative z-10">
                <img
                  src="Honda-civic.png"
                  alt="Honda-Civic-PNG"
                  className="rounded-lg object-cover w-full h-auto transition-transform duration-700 hover:scale-105"
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
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative">
            {/* Connecting lines between steps (visible on lg screens) */}
            <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10">
              <div className="bg-blue-50 rounded-xl p-8 h-full">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF6B35] text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex justify-center mb-6">
                  <Car className="w-12 h-12 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Select Your Car</h3>
                <p className="text-gray-600 text-center">
                  Choose from our wide range of premium vehicles for any occasion
                </p>
                <div className="flex justify-center mt-6">
                  <CheckCircle className="w-6 h-6 text-gray-300" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10">
              <div className="bg-green-50 rounded-xl p-8 h-full">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF6B35] text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex justify-center mb-6">
                  <MapPin className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Pick-up Location</h3>
                <p className="text-gray-600 text-center">
                  Select from our numerous convenient pick-up and drop-off locations
                </p>
                <div className="flex justify-center mt-6">
                  <CheckCircle className="w-6 h-6 text-gray-300" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10">
              <div className="bg-purple-50 rounded-xl p-8 h-full">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF6B35] text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex justify-center mb-6">
                  <Calendar className="w-12 h-12 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Pick-up Date</h3>
                <p className="text-gray-600 text-center">Choose your rental duration and preferred pick-up timing</p>
                <div className="flex justify-center mt-6">
                  <CheckCircle className="w-6 h-6 text-gray-300" />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative z-10">
              <div className="bg-orange-50 rounded-xl p-8 h-full">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF6B35] text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div className="flex justify-center mb-6">
                  <PaymentIcon className="w-12 h-12 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Make Payment</h3>
                <p className="text-gray-600 text-center">Quick and secure payment with multiple payment options</p>
                <div className="flex justify-center mt-6">
                  <CheckCircle className="w-6 h-6 text-gray-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            {/* Updated to link to the login page */}
            <Link to="Login">
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
