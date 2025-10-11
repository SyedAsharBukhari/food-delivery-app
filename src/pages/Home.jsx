import React from 'react'
import Carosal from '../components/carosal/Carosal'
import PartnersSlider from '../components/slider/Slider'
import Products from '../components/products/Products'
import Testimonials from '../testimonial/Testimonails'

const Home = () => {
  return (
    <div>
         <Carosal/>
   <PartnersSlider/>
   <Products/>
   <Testimonials/>
    </div>
  )
}

export default Home
