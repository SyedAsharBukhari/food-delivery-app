import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./PartnersSlider.css"; // custom CSS

const PartnersSlider = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const logos = [
    "https://assets.designhill.com/design-blog/wp-content/uploads/2024/07/Mascot-logo-1.jpg",
    "https://img.freepik.com/premium-vector/burger-logo_1366-144.jpg?semt=ais_hybrid&w=740&q=80",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/organic-food-logo,-food-brand-logo,restaurant-design-template-b5e3f80a7b8822489da7da4c033ab6ae_screen.jpg?ts=1661940494",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzT5BPigKinvr7EUl5hjcJWIkmQXqlcHT3w&s",
    "https://fabrikbrands.com/wp-content/uploads/Famous-Fast-Food-Logos-20-1200x750.png",
    "https://www.designmantic.com/blog/wp-content/uploads/2021/09/Food-and-Beverage-Logo-1.jpg",
    "https://cdn.logojoy.com/wp-content/uploads/2018/05/01105908/1271.png",
  ];

  return (
    <div className="partners-container">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-5">Our Partners</h1>
      <Slider {...settings} className="customer-logos">
        {logos.map((logo, index) => (
          <div className="slide" key={index}>
            <img src={logo} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersSlider;
