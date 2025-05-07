import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import ExploreCars from "./Pages/ExploreCars"
import Payment from "./Pages/Payment"
import Dashboard from "./Pages/Dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/models" element={<ExploreCars />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<div className="pt-32 container mx-auto px-4">Contact Page</div>} />
      </Routes>
    </Router>
  )
}

export default App
