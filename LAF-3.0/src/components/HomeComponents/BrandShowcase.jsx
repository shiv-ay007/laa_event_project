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
      className="relative overflow-hidden bg-[#FAF8F5] pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14 select-none font-sans border-t border-[#FED7AA]/50"
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

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-[1400px] px-3 sm:px-8 lg:px-12">
        {/* ================= SECTION HEADING & RIGHT BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-10"
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

          {/* 🚀 Banner Image Increased Size */}
          <div className="flex items-center justify-start md:justify-end shrink-0">
            <img
              src={centerBrandBanner}
              alt="Key Brands Presence in Past - Lucknow Architecture Festival"
              className="h-20 sm:h-24 md:h-26 lg:h-28 w-auto object-contain rounded-xl shadow-sm border border-orange-200/80"
            />
          </div>
        </motion.div>

        {/* ================= BRAND LOGOS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // 🚀 Reduced Gaps
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-3 sm:gap-x-4 md:gap-x-5 gap-y-4 sm:gap-y-5 md:gap-y-6 items-center justify-items-center"
        >
          {allBrands.map((brand) => (
            <div
              key={brand.id}
              // 🚀 Added Thin Red Border & Slightly smaller height box
              className="w-full h-20 sm:h-24 md:h-26 flex items-center justify-center p-2.5 sm:p-3 rounded-xl bg-white border border-[#D8232A]/30 hover:border-[#D8232A] shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.03] cursor-pointer group"
            >
              <img
                src={brand.img}
                alt={brand.name || "Brand Partner"}
                loading="lazy"
                className="max-h-[88%] max-w-[90%] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}