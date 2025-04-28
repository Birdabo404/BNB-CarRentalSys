import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import {MouseTrail} from '@stichiboi/react-elegant-mouse-trail';

function App() {
  return (
    <>
    <MouseTrail />
    <NavBar />
    

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
