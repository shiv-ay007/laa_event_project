import React from "react";
import { motion } from "framer-motion";
import {
  topRowBrands,
  bottomRowBrands,
} from "../../assets/images/brands/brandsData";

export default function BrandShowcase() {
  // Duplicate for seamless infinite marquee loop
  const topLoop = [...topRowBrands, ...topRowBrands];
  const bottomLoop = [...bottomRowBrands, ...bottomRowBrands];

  return (
    <section
      id="brand-showcase"
      className="relative overflow-hidden bg-[#FAF8F5] pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 select-none font-sans border-t border-[#FED7AA]/50"
    >
      {/* Marquee Keyframes Animation Styling */}
      <style>{`
        @keyframes marquee-slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-slide-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .marquee-left-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-slide-left 55s linear infinite;
        }
        .marquee-right-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-slide-right 55s linear infinite;
        }
        .marquee-left-track:hover,
        .marquee-right-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Signature Architectural Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADING & SUBTITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-start gap-1.5 mb-8"
        >
          <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
            Industry Partners
          </h2>
          <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
            Brands That Shape The Future
          </h2>

          <p className="mt-2.5 text-sm sm:text-base md:text-lg text-neutral-600 font-sans max-w-2xl leading-relaxed">
            A collective of leading brands supporting architecture, design,
            construction and the built environment.
          </p>
        </motion.div>

        {/* ================= DUAL MARQUEE SHOWCASE WITH SEPARATED CENTER CARD ================= */}
        <div className="relative py-2 sm:py-4">
          {/* Subtle Left & Right Edge Faders */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent z-10" />

          {/* Row 1 Indicator: Slides Right to Left */}
          <div className="flex items-center justify-end gap-2 mb-2.5 px-4 sm:px-6">
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#D8232A] flex items-center gap-1.5 uppercase font-sans">
              <span className="text-sm leading-none">←</span> SLIDES RIGHT TO LEFT
            </span>
            <div className="w-12 sm:w-20 h-[1px] bg-[#D8232A]/30" />
          </div>

          {/* ================= ROW 1: SLIDES RIGHT TO LEFT ================= */}
          <div className="overflow-hidden py-1 sm:py-1.5">
            <div className="marquee-left-track gap-3 sm:gap-4 md:gap-5">
              {topLoop.map((brand, idx) => (
                <div
                  key={`top-${brand.id}-${idx}`}
                  className="w-[110px] sm:w-[130px] md:w-[145px] h-[72px] sm:h-[82px] md:h-[90px] shrink-0 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_3px_12px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-[#D8232A]/50 p-2 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <img
                    src={brand.img}
                    alt="Brand Partner"
                    loading="lazy"
                    className="w-full h-full object-contain filter transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ================= ROW 2: SLIDES LEFT TO RIGHT ================= */}
          <div className="overflow-hidden py-1 sm:py-1.5 mt-2 sm:mt-3 md:mt-4">
            <div className="marquee-right-track gap-3 sm:gap-4 md:gap-5">
              {bottomLoop.map((brand, idx) => (
                <div
                  key={`bottom-${brand.id}-${idx}`}
                  className="w-[110px] sm:w-[130px] md:w-[145px] h-[72px] sm:h-[82px] md:h-[90px] shrink-0 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_3px_12px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-[#D8232A]/50 p-2 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <img
                    src={brand.img}
                    alt="Brand Partner"
                    loading="lazy"
                    className="w-full h-full object-contain filter transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 Indicator: Slides Left to Right */}
          <div className="flex items-center justify-start gap-2 mt-2.5 px-4 sm:px-6">
            <div className="w-12 sm:w-20 h-[1px] bg-[#D8232A]/30" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#D8232A] flex items-center gap-1.5 uppercase font-sans">
              SLIDES LEFT TO RIGHT <span className="text-sm leading-none">→</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
