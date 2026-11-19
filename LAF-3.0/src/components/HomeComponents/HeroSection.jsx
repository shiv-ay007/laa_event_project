import React from 'react';
import { Link } from 'react-router-dom';
import heroBgImage from '../../assets/images/hero-page_img.PNG';

const HeroSection = () => {
  return (
    // Pura section ek Link hai, click karne par /register par jayega
    <Link to="/register" className="block w-full select-none group">
      
      {/* 
        Section ki fixed height hata di hai. Ab ye image ke size ke hisaab se adjust hoga.
        'overflow-hidden' rakha hai taaki koi extra scroll na aaye.
      */}
      <section className="relative w-full overflow-hidden bg-[#07090E] cursor-pointer flex items-center justify-center">
        
        {/* 🚀 Image tag ka use kiya hai taaki poori image bina cut hue dikhe */}
        <img
          src={heroBgImage}
          alt="LAF 3.0 Hero"
          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01]"
        />

        {/* Hover karne par ek halka sa premium dark overlay effect */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
        
      </section>
    </Link>
  );
};

export default HeroSection;