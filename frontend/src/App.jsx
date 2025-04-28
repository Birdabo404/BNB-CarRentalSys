import React from 'react'
import Navbar from './components/ui/Navbar/Navbar.jsx'
import { MouseTrail } from '@stichiboi/react-elegant-mouse-trail'

const App = () => {
  return (
    <> 
      <MouseTrail strokeColor="#F97316" lineWidthStart={30} />
      <Navbar>
        
      </Navbar>
    </>
  )
}

export default App
