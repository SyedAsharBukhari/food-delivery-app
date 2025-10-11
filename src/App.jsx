import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Carosal from './components/carosal/Carosal'
import PartnersSlider from './components/slider/Slider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Testimonials from './testimonial/Testimonails'
import Footer from './components/footer/Footer'
import Products from './components/products/Products'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <BrowserRouter>
         <Navbar/>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
         <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
