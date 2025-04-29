import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../src/components/ui/Default/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
        <Route path="/models" element={<div className="pt-32 container mx-auto px-4">Models Page</div>} />
        <Route path="/contact" element={<div className="pt-32 container mx-auto px-4">Contact Page</div>} />
      </Routes>
    </Router>
  )
}

export default App
