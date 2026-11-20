import React from 'react';
import { Link } from 'react-router-dom';
import heroBgImage from '../../assets/images/hero-page_img.PNG';

const HeroSection = () => {
  return (
    <Link to="/register" className="block w-full select-none group">
      
      {/* 
        Section ko flexible rakha hai. 
        min-h-screen ya specific height di ja sakti hai agar zaroorat ho, 
        par yahan hum image ko container ke hisaab se fit kar rahe hain.
      */}
      <section className="relative w-full overflow-hidden bg-[#F7F4EE] cursor-pointer flex items-center justify-center">
        
        {/* 🚀 FIX: object-cover aur h-full use kiya taaki image pure area ko cover kare aur niche white na dikhe */}
        <img
          src={heroBgImage}
          alt="LAF 3.0 Hero"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
        />

        {/* Hover karne par ek halka sa premium dark overlay effect */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
        
      </section>
    </Link>
  );
};

export default HeroSection;