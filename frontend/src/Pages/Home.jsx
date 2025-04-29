import { Star, Shield, Clock, CreditCard, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail"

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      <MouseTrail strokeColor="#F97316" lineWidthStart={30} />
      <section className="pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-lg">
              <div className="inline-flex items-center bg-orange-100 text-[#FF6B35] px-4 py-2 rounded-full mb-8">
                <Star className="w-4 h-4 mr-2" /> Premium Car Rental Service
              </div>

              <h1 className="text-5xl font-bold mb-8">
                Save <span className="text-[#FF6B35]">big</span> with
                <br />
                our <span className="text-[#FF6B35]">car rental</span>
              </h1>

              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Experience the freedom of the open road with our premium car rental service. Unbeatable prices,
                unlimited miles, and flexible pick-up options.
              </p>

              <div className="flex flex-wrap gap-5 mb-16">
                <Button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white px-8 py-6 rounded-lg transition-transform duration-300 hover:scale-105 h-auto">
                  Book Ride <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-6 rounded-lg border-2 h-auto transition-transform duration-300 hover:scale-105"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <Shield className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <span className="text-gray-700 font-medium">Fully Insured</span>
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
              {/* Fixed the hover effect to only apply to the image itself */}
              <div className="relative z-10">
                <img
                  src="./public/Honda-civic.png"
                  alt="Honda-Civic-PNG"
                  className="rounded-lg object-cover w-full h-auto transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute top-6 right-6 bg-[#FF6B35] px-6 py-3 rounded-full shadow-md text-white font-medium">
                  Best Prices Guaranteed
                </div>

                <div className="absolute -bottom-6 right-12 bg-white p-4 rounded-lg shadow-md">
                  <p className="font-medium text-gray-900">Latest Models</p>
                  <p className="text-sm text-gray-500">Premium Selection</p>
                </div>
              </div>

              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-gray-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-5xl font-bold text-[#FF6B35]">50+</p>
            <p className="text-gray-600 mt-2 font-medium">Car Models</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-[#FF6B35]">98%</p>
            <p className="text-gray-600 mt-2 font-medium">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-[#FF6B35]">24/7</p>
            <p className="text-gray-600 mt-2 font-medium">Support</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
