import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import layoutImage from "../../assets/images/LAFmap.png";

// Participating Chapters Logos
import pc1 from "../../assets/images/pc1.webp"; // Agra Architects Association
import pc2 from "../../assets/images/pc2.webp"; // Meerut Architects Association
import pc3 from "../../assets/images/pc3.webp"; // Ghaziabad Architects Association
import pc5 from "../../assets/images/pc5.webp"; // Architects Association Noida
import pc6 from "../../assets/images/pc6.webp"; // Indian Institute of Interior Designers (Jaipur)
import pc7 from "../../assets/images/pc7.webp"; // Allahabad Association
import pc8 from "../../assets/images/pc8.webp"; // Varanasi Architects Association

// Knowledge Partners Logos
import kp1 from "../../assets/images/kp1.webp"; // Amity University
import kp2 from "../../assets/images/kp2.webp"; // BBD University
import kp3 from "../../assets/images/kp3.webp"; // Faculty of Architecture & Planning (FOA)
import fb4 from "../../assets/images/fb4.webp"; // Integral University
import kb5 from "../../assets/images/kb5.webp"; // Surfaces Reporter
import kp6 from "../../assets/images/kp6.webp"; // WADE ASIA

const participatingChapters = [
  { id: "pc-1", name: "Agra Architects Association", logo: pc1 },
  { id: "pc-2", name: "Meerut Architects Association", logo: pc2 },
  { id: "pc-3", name: "Ghaziabad Architects Association", logo: pc3 },
  { id: "pc-4", name: "Architects Association Noida", logo: pc5 },
  { id: "pc-5", name: "Indian Institute of Interior Designers", logo: pc6 },
  { id: "pc-6", name: "Allahabad Association", logo: pc7 },
  { id: "pc-7", name: "Varanasi Architects Association", logo: pc8 },
];

const knowledgePartners = [
  { id: "kp-1", name: "Amity University", logo: kp1 },
  { id: "kp-2", name: "BBD University", logo: kp2 },
  { id: "kp-3", name: "Faculty of Architecture & Planning", logo: kp3 },
  { id: "kp-4", name: "Integral University", logo: fb4 },
  { id: "kp-5", name: "Surfaces Reporter", logo: kb5 },
  { id: "kp-6", name: "WADE ASIA", logo: kp6 },
];

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
            Location  & Layout
          </h2>
          {/* <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
            & Layout
          </h2> */}
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

        {/* =====================================================
            PARTICIPATING CHAPTERS
        ====================================================== */}
        <div className="mt-14 sm:mt-18 pt-10 sm:pt-14 border-t border-[#E8E2D8]">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10"
          >
            <h3 className="bg-[#D8232A] text-white px-3.5 py-1 text-2xl sm:text-3xl md:text-[34px] font-bold tracking-tight inline-block leading-tight">
              Participating Chapters
            </h3>
          </motion.div>

          {/* Chapters Logo Grid (7 columns on large desktop, matching reference design) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4"
          >
            {participatingChapters.map((chapter) => (
              <div
                key={chapter.id}
                className="group relative flex items-center justify-center bg-white border border-[#E8E2D8] hover:border-[#D8232A] rounded-2xl p-3 sm:p-4 h-24 sm:h-28 lg:h-32 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(216,35,42,0.12)] hover:-translate-y-1"
              >
                <img
                  src={chapter.logo}
                  alt={chapter.name}
                  loading="lazy"
                  className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* =====================================================
            KNOWLEDGE PARTNERS
        ====================================================== */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-14 border-t border-[#E8E2D8]">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10"
          >
            <h3 className="bg-[#D8232A] text-white px-3.5 py-1 text-2xl sm:text-3xl md:text-[34px] font-bold tracking-tight inline-block leading-tight">
              Knowledge Partners
            </h3>
          </motion.div>

          {/* Knowledge Partners Logo Grid (6 columns on desktop, matching reference design) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-3.5 sm:gap-4"
          >
            {knowledgePartners.map((partner) => (
              <div
                key={partner.id}
                className="group relative flex items-center justify-center bg-white border border-[#E8E2D8] hover:border-[#D8232A] rounded-2xl p-3 sm:p-4 h-24 sm:h-28 lg:h-32 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(216,35,42,0.12)] hover:-translate-y-1"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationLayoutSection;
