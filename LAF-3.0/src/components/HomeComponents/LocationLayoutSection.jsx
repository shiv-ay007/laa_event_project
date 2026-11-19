import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import layoutImage from "../../assets/images/LAFmap.png";

const LocationLayoutSection = () => {
  return (
    <section
      id="location-layout"
      className="relative overflow-hidden bg-[#FAF8F5] text-[#171717] pt-12 sm:pt-16 pb-14 sm:pb-18 border-t border-[#E8E2D8]"
    >
      {/* =====================================================
          ARCHITECTURAL BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Blueprint Graph Grid */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* =====================================================
            LEFT-ALIGNED SECTION HEADING (RED BADGE THEME)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-1.5 mb-8 sm:mb-10"
        >
          <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
            Location
          </h2>
          <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
            & Layout
          </h2>
        </motion.div>

        {/* =====================================================
            MAP DRAWING AREA (FULL CLEAN MAP CONTAINER)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Top Label */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D8232A]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#D8232A] font-mono">
                FESTIVAL MASTER PLAN
              </span>
            </div>

            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
              LAF 3.0 · PLAN 01
            </span>
          </div>

          {/* Image Frame Card */}
          <div className="relative overflow-hidden border border-[#E8E2D8] bg-white p-3 sm:p-5 lg:p-6 rounded-[28px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(216,35,42,0.1)] hover:border-[#D8232A]/50 transition-all duration-300">
            {/* Subtle Minimal Accent Marks on Corners */}
            <span className="absolute left-0 top-0 h-6 w-1 bg-[#D8232A] rounded-tl-[28px]" />
            <span className="absolute left-0 top-0 h-1 w-6 bg-[#D8232A] rounded-tl-[28px]" />

            <span className="absolute right-0 top-0 h-6 w-1 bg-[#D8232A] rounded-tr-[28px]" />
            <span className="absolute right-0 top-0 h-1 w-6 bg-[#D8232A] rounded-tr-[28px]" />

            {/* Master Plan Container — Full Unclipped Map */}
            <div className="group relative overflow-hidden bg-white rounded-2xl w-full flex items-center justify-center border border-[#F0EBE1] p-2 sm:p-4">
              <img
                src={layoutImage}
                alt="Lucknow Architecture Festival Location and Master Plan"
                className="w-full h-auto max-h-[800px] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            DOWNLOAD BUTTONS (MINIMAL ARCHITECTURAL THEME)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 sm:mt-12 grid gap-4 sm:grid-cols-3"
        >
          {[
            {
              tag: "MASTER PLAN",
              title: "DOWNLOAD LAYOUT PLAN",
              href: "/layout.pdf",
              isDownload: true,
            },
            {
              tag: "OFFICIAL BROCHURE",
              title: "DOWNLOAD EVENT BROCHURE",
              href: "#",
              isDownload: false,
            },
            {
              tag: "PARTICIPATION",
              title: "DOWNLOAD PARTICIPATION FORM",
              href: "#",
              isDownload: false,
            },
          ].map((btn) => (
            <a
              key={btn.title}
              href={btn.href}
              download={btn.isDownload}
              className="group flex items-center justify-between bg-white border border-[#E8E2D8] hover:border-[#D8232A] px-6 py-4 text-[#171717] transition-all duration-300 hover:shadow-lg rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#D8232A] group-hover:w-2 transition-all duration-300" />
              <div>
                <span className="block text-[9px] font-bold tracking-[0.25em] text-[#D8232A] uppercase font-mono">
                  {btn.tag}
                </span>
                <span className="mt-1 block text-xs sm:text-sm font-semibold tracking-wide text-neutral-800 group-hover:text-[#D8232A] transition-colors">
                  {btn.title}
                </span>
              </div>
              <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 group-hover:border-[#D8232A] group-hover:bg-[#D8232A] group-hover:text-white flex items-center justify-center transition-all duration-300 text-[#D8232A] ml-3 shrink-0">
                <Download size={16} />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LocationLayoutSection;
