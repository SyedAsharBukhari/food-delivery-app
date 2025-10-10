import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Carosal from './components/carosal/Carosal'

function App() {

  return (
    <>
   <Navbar/>
   <Carosal/>
    </>
  )
}

export default App
