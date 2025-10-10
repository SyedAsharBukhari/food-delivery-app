


// components/Carosal.jsx

import React, { useState, useEffect } from 'react';

const Carosal = () => {

  return (
    <section className="relative">
      {/* Main Slider */}
      <div
        className="relative w-full h-[700px] bg-no-repeat bg-cover bg-center transition-all"
        style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg")` }}
      >
        <div className="bg-black/60 flex justify-center h-full items-center py-20 md:py-28 lg:py-32 xl:py-56 px-3 md:px-4 lg:px-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center gap-5 md:gap-8 text-white">
            <div className="flex flex-col  justify-center text-center gap-4">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">Mukunda - Shotru - Trailer</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
              
            </div>
            <div className="flex flex-row items-center justify-center gap-3 md:gap-4">
              <a href="single-video.html" className="btn btn-secondary bg-white text-black px-4 py-2 rounded">Watch Now <i className="pl-2 fa-solid fa-play"></i></a>
              <button className="btn btn-primary bg-red-600 px-4 py-2 rounded">Add To List <i className="pl-2 fa-solid fa-plus"></i></button>

            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Carosal;
