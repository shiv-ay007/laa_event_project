import React from 'react';
import { Link } from 'react-router-dom';
import heroBgImage from '../../assets/images/hero-page_img.webp';

const HeroSection = () => {
  return (
    <Link to="/register" className="block w-full select-none group">
      <section className="relative w-full overflow-hidden bg-[#F7F4EE] cursor-pointer flex items-center justify-center">
        <img
          src={heroBgImage}
          alt="LAF 3.0 Hero"
          className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
        />

        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
      </section>
    </Link>
  );
};

export default HeroSection;