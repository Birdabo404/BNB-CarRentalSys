import { Star, Shield, Clock, CreditCard, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail"
import Navbar from "../components/ui/Default/Navbar"

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
                <Star className="w-4 h-4 mr-2" /> <span className="text-red-800 text-sm">Affordable Quality Car Rentals </span>
              </div>

              <h1 className="text-5xl font-bold mb-8">
                Barato nga <span className="text-[#FF6B35] font-bold text-6xl font-monospace tracking-wider">RENTALS!</span> Premium
                na <span className="text-[#FF6B35] text-6xl ">Service!</span>
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
  
                <div className="relative bg-black px-6 py-4 rounded-full text-white font-medium 
                 ring-2 ring-orange-500/20 ring-inset 
                 shadow-xl shadow-orange-500/10">
                Lowest Price Guaranteed
                </div>
            </div>
              {/* Fixed the hover effect to only apply to the image itself */}
              <div className="relative z-10">
                <img
                  src="./public/Honda-civic.png"
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
      <MouseTrail strokeColor="color-black" lineWidthStart={20} />
    </div>
  )
}

export default Home
