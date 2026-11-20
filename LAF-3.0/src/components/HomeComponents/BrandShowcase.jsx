import React from "react";
import { motion } from "framer-motion";
import {
  allBrands,
  centerBrandBanner,
} from "../../assets/images/brands/brandsData";

export default function BrandShowcase() {
  return (
    <section
      id="brand-showcase"
      className="relative overflow-hidden bg-[#FAF8F5] pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 select-none font-sans border-t border-[#FED7AA]/50"
    >
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

      {/* Main Content Container - Exactly matching Navbar width & padding */}
      <div className="relative mx-auto max-w-[1400px] px-3 sm:px-8 lg:px-12">
        {/* ================= SECTION HEADING & RIGHT BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          {/* Headings */}
          <div className="flex flex-col items-start gap-1 sm:gap-1.5">
            <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight inline-block leading-tight">
              Industry Partners
            </h2>
            <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight inline-block leading-tight">
              Brands That Shape The Future
            </h2>
          </div>

          {/* Key Brands Presence Banner (scaled to match heading height) */}
          <div className="flex items-center justify-start md:justify-end shrink-0">
            <img
              src={centerBrandBanner}
              alt="Key Brands Presence in Past - Lucknow Architecture Festival"
              className="h-16 sm:h-20 md:h-22 lg:h-24 w-auto object-contain rounded-xl shadow-sm border border-orange-200/80"
            />
          </div>
        </motion.div>

        {/* ================= BRAND LOGOS (NO BOX, DIRECT & CLEAR, LARGER SIZE) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-11 gap-x-4 sm:gap-x-6 md:gap-x-7 gap-y-5 sm:gap-y-6 md:gap-y-7 items-center justify-items-center"
        >
          {allBrands.map((brand) => (
            <div
              key={brand.id}
              className="w-full h-14 sm:h-16 md:h-18 lg:h-20 flex items-center justify-center p-1 transition-transform duration-300 hover:scale-115 cursor-pointer group"
            >
              <img
                src={brand.img}
                alt="Brand Partner"
                loading="lazy"
                className="max-h-full max-w-full w-auto h-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
