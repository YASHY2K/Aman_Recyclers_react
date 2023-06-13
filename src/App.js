import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/Aboutus';
import MeetTheTeam from './components/Team';
import ContactUs from './components/Contactus';
import Home from './components/Home';
import Footer from './components/Footer';
import Warehouse from './components/Warehouse';
import Factory from './components/Factory';
// import { useState } from 'react'
import './App.css'
import './gif.css'

function App() {
  // const [count, setCount] = useState(0)
  const production = false
  if(production){
    return (
      <div className="d-flex align-items-center justify-content-center temp">
        <h5 className='d-inline'>Site is under maintenance</h5>
        <span class="loader"></span>
      </div>
    )
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<MeetTheTeam />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/Warehouse" element={<Warehouse />} />
          <Route path="/Factory" element={<Factory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
