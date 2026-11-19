import React from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  TrendingUp,
  Building2,
  Users,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

// --- GROWTH SECTOR IMAGES ---
import pilgrimageImg from "../../assets/images/laf3.0-1.webp";
import transportationImg from "../../assets/images/laf3.2.webp";
import economyImg from "../../assets/images/laf3.0-3.webp";
import sportsImg from "../../assets/images/laf3.0-4.webp";
import tourismImg from "../../assets/images/laf3.0-5.webp";
import cuisineImg from "../../assets/images/laf3.0-6.webp";
import investUpImg from "../../assets/images/laf3.0-7.webp";
import odopImg from "../../assets/images/laf3.0-8.webp";
import craftImg from "../../assets/images/laf3.0-10.webp";
import educationImg from "../../assets/images/laf3.0-12.webp";
import cultureImg from "../../assets/images/laf3.0-13.webp";

// --- HIGHLIGHT IMAGES ---
import highlight1 from "../../assets/images/card1.png";
import highlight2 from "../../assets/images/card2.png";
import highlight3 from "../../assets/images/card3.png";
import highlight4 from "../../assets/images/card4.png";

// --- NEW ABOUT SECTION IMAGES ---
import lafLogo from "../../assets/images/logo.webp"; 
import aboutRightImage from "../../assets/images/download (1).png"; 

const AboutSection = () => {
  // Unified architectural branding (Brand Red #D8232A)
  const BRAND_ACCENT = "#D8232A"; 
  const UNIFIED_COLOR = "#D8232A"; 

  const sectors = [
    { id: "pilgrimage", number: "01", name: "PILGRIMAGE", img: pilgrimageImg, color: UNIFIED_COLOR, gradient: BRAND_ACCENT },
    { id: "transportation", number: "02", name: "TRANSPORTATION", img: transportationImg, color: UNIFIED_COLOR, gradient: BRAND_ACCENT },
    { id: "economy", number: "03", name: "ECONOMY", img: economyImg, color: UNIFIED_COLOR, gradient: BRAND_ACCENT },
    { id: "sports", number: "04", name: "SPORTS", img: sportsImg, color: UNIFIED_COLOR, gradient: BRAND_ACCENT },
    { id: "tourism", number: "05", name: "TOURISM", img: tourismImg, color: UNIFIED_COLOR, gradient: BRAND_ACCENT },
    { id: "cuisine", number: "06", name: "CUISINE", img: cuisineImg, color: UNIFIED_COLOR, gradient: BRAND_ACCENT },
    { id: "invest-up", number: "07", name: "INVEST UP", img: investUpImg, color: UNIFIED_COLOR, gradient: BRAND_ACCENT },
    { id: "odop", number: "08", name: "ONE DISTRICT ONE PRODUCT", img: odopImg, color: UNIFIED_COLOR, gradient: BRAND_ACCENT },
    { id: "craft", number: "09", name: "CRAFT", img: craftImg, color: UNIFIED_COLOR, gradient: BRAND_ACCENT },
    { id: "education", number: "10", name: "EDUCATION", img: educationImg, color: UNIFIED_COLOR, gradient: BRAND_ACCENT },
    { id: "culture", number: "11", name: "CULTURE", img: cultureImg, color: UNIFIED_COLOR, gradient: BRAND_ACCENT },
  ];

  const highlights = [
    { number: "01", title: "Highest MSMEs", subtitle: "Organized & Unorganized", image: highlight1 },
    { number: "02", title: "Ease of Doing Business", subtitle: "Investor Friendly Ecosystem", image: highlight2 },
    { number: "03", title: "One Trillion Economy", subtitle: "Ambitious Growth Vision", image: highlight3 },
    { number: "04", title: "Largest State by Area", subtitle: "A Vast Urban Landscape", image: highlight4 },
  ];

  const renderSectorCard = (sector) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col items-center justify-center text-center flex-shrink-0"
    >
      {/* Number Pill */}
      <div 
        className="relative z-30 px-3.5 py-0.5 rounded-full text-white font-mono text-[11px] font-bold shadow-sm -mb-3 transition-transform duration-300 group-hover:scale-110" 
        style={{ background: sector.gradient }}
      >
        {sector.number}
      </div>
      
      {/* Circle with Arc */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Arc border using solid color to prevent SVG gradient complexity */}
        <div 
          className="absolute -top-1.5 w-[108%] h-[68%] rounded-t-full border-t-[3.5px] border-l-[3.5px] border-r-[3.5px] pointer-events-none transition-transform duration-300 group-hover:scale-105" 
          style={{ borderColor: sector.color }} 
        />
        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center p-3.5 sm:p-4 shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-neutral-100 transition-all duration-300 group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.14)] group-hover:scale-105">
          <img src={sector.img} alt={sector.name} className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain transition-transform duration-300 group-hover:scale-110 select-none" loading="lazy" />
        </div>
      </div>

      {/* Bottom Button */}
      <div 
        className="relative z-20 -mt-4 w-32 sm:w-36 lg:w-40 min-h-[34px] sm:min-h-[38px] py-1.5 px-2 rounded-xl text-center shadow-md flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-105" 
        style={{ background: sector.gradient }}
      >
        <span className="block text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase leading-snug select-none">{sector.name}</span>
      </div>
    </motion.div>
  );

  const renderArrow = () => (
    <div className="flex items-center text-[#D8232A] px-1 sm:px-2 lg:px-3 select-none">
      <div className="w-6 sm:w-10 lg:w-14 border-t-2 border-dashed border-[#D8232A]/50" />
      <svg className="w-3.5 h-3.5 text-[#D8232A] -ml-1 fill-current" viewBox="0 0 10 10">
        <path d="M 1 2 L 7 5 L 1 8 z" />
      </svg>
    </div>
  );

  return (
    <section id="about" className="relative overflow-hidden bg-[#F7F4EE] text-[#181818] py-16 lg:py-24">
      
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: `linear-gradient(rgba(120,90,40,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(120,90,40,0.07) 1px, transparent 1px)`, backgroundSize: "44px 44px" }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* ABOUT UTTAR PRADESH SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          <div className="lg:col-span-7 flex flex-col pt-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex flex-col items-start gap-1.5"
            >
              <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
                About Uttar Pradesh
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4 text-justify text-neutral-600 text-[15px] sm:text-base leading-[1.85]"
            >
              <p>The economic trend has consequently developed into a magnet for real estate. The state's lifestyle and amenities are improving because of these advancements. Being the state's capital, Lucknow has enormous potential. As a result of increases in per capita income, productivity, favourable market prices, and large credit flow in the city, demand for branded consumer goods and property has recently surged.</p>
              <p>Being a hub of heritage as well as a fast emerging economy, it attracts an influx of people from all surrounding cities, districts and villages. Lucknow offers a distinctive business philosophy that combines the city's rich cultural heritage with contemporary business methods.</p>
              <p>With the highest density of young population, UP is the richest state when we talk about the demographic resources.</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[500px]">
              <img src={aboutRightImage} alt="Architecture Heritage" className="w-full h-auto object-contain relative z-10" />
              <div className="absolute -top-10 -right-4 sm:-top-12 sm:-right-8 z-20">
                <img src={lafLogo} alt="LAF 3.0" className="w-32 sm:w-40 h-auto object-contain" />
              </div>
              <div className="absolute top-1/4 -right-10 w-[120%] h-[80%] bg-[#E32636]/5 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="relative mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {highlights.map((item, index) => {
              const isEven = index % 2 === 1;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className={`group relative flex flex-col items-center text-center transition-transform duration-500 ${isEven ? "lg:translate-y-14" : "lg:translate-y-0"}`}
                >
                  <div className="flex items-center justify-center mb-5 relative w-full">
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-[#B77A27]/30 z-0" />
                    <div className="relative z-10 bg-[#FAF7F2] border-2 border-[#B77A27] text-[#B77A27] font-mono text-xs font-bold px-4 py-1 rounded-full shadow-xs group-hover:bg-[#B77A27] group-hover:text-white transition-all duration-300">
                      [{item.number}]
                    </div>
                  </div>
                  <div className="w-full aspect-[1920/819] relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-md group-hover:border-[#B77A27] group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.03] bg-white">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* GROWTH SECTORS */}
        <section className="relative mt-24 lg:mt-32">
          <div className="relative z-10 max-w-[1400px] mx-auto">
            
            {/* 🚀 FIX: Changed items-start to items-center and added text-center */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center text-center gap-1.5 mb-12 sm:mb-14 lg:mb-16"
            >
              <h3 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
                Growth Sectors Dimensions of UP
              </h3>
              {/* <h3 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
                Dimensions of UP
              </h3> */}
              <p className="max-w-2xl mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal text-center">
                From heritage and pilgrimage to transportation, tourism and emerging economic corridors — Uttar Pradesh is shaping a new architectural and urban future.
              </p>
            </motion.div>

            {/* Desktop Flow */}
            <div className="hidden md:flex flex-col gap-12 lg:gap-14">
              <div className="flex items-center justify-center gap-2 lg:gap-4 xl:gap-6">
                {sectors.slice(0, 4).map((sector, idx) => (
                  <React.Fragment key={sector.id}>{renderSectorCard(sector)}{idx < 3 && renderArrow()}</React.Fragment>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 lg:gap-4 xl:gap-6">
                {sectors.slice(4, 8).map((sector, idx) => (
                  <React.Fragment key={sector.id}>{renderSectorCard(sector)}{idx < 3 && renderArrow()}</React.Fragment>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 lg:gap-4 xl:gap-6">
                {sectors.slice(8, 11).map((sector, idx) => (
                  <React.Fragment key={sector.id}>{renderSectorCard(sector)}{idx < 2 && renderArrow()}</React.Fragment>
                ))}
              </div>
            </div>

            {/* Mobile Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-y-10 gap-x-4">
              {sectors.map((sector) => (
                <div key={sector.id} className="flex justify-center">{renderSectorCard(sector)}</div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};

export default AboutSection;