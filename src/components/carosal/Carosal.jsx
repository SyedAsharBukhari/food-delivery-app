import React from 'react';
import { Link } from 'react-router-dom';

const Carosal = () => {
  return (
    <section className="relative">
      <div
        className="relative w-full h-[700px] bg-no-repeat bg-cover bg-center transition-all"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303524.jpg?semt=ais_hybrid&w=740&q=80")`,
        }}
      >
        <div className="bg-black/60 flex justify-center h-full items-center py-20 md:py-28 lg:py-32 xl:py-56 px-3 md:px-4 lg:px-8">
          <div className="flex flex-col justify-center gap-5 md:gap-8 text-white">
            <div className="flex flex-col justify-center text-center gap-4">
              <h1 className="text-xl md:text-4xl lg:text-6xl font-semibold">
                Delicious Food, Delivered Fast
              </h1>
              <p className="text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
                Experience the taste of your favorite restaurants from the comfort of your home. 
                Fresh, hot, and delivered straight to your door — because you deserve the best bite every time.
              </p>
            </div>

            <div className="flex flex-row items-center justify-center gap-3 md:gap-4">
              <a
                href="#explore"
                className="bg-white text-black font-medium px-5 py-2 rounded hover:bg-gray-200 transition-all"
              >
                Explore Menu <i className="pl-2 fa-solid fa-utensils"></i>
              </a>
              <Link to="/contact" className="bg-[#E01B6F] hover:[#E01B6F] text-white font-medium px-5 py-2 rounded transition-all">
                Contact <i className="pl-2 fa-solid fa-cart-plus"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carosal;
