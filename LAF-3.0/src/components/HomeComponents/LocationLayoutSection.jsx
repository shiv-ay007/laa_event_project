import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import layoutImage from "../../assets/images/LAFmap.png";

// PDFs
import brochurePdf from "../../assets/lafpdf/lafbroucher.pdf";
import layoutPdf from "../../assets/lafpdf/layout.pdf";

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
      className="relative overflow-hidden bg-[#FAF8F5] text-[#171717] pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-[#E8E2D8]"
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

      <div className="relative z-10 max-w-[1400px] mx-auto px-3 sm:px-8 lg:px-12">
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
            DOWNLOAD BUTTONS (RED, BLACK, RED THEME)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
        >
          {[
            {
              title: "DOWNLOAD LAYOUT PLAN",
              subtitle: "Exhibition Floorplan & Stalls Map",
              file: layoutPdf,
              download: "LAF3.0 LAYOUT PLAN.pdf",
              badge: "PDF • 3.5 MB",
              theme: "red",
            },
            {
              title: "DOWNLOAD EVENT BROCHURE",
              subtitle: "Conclave Guide & Official Schedule",
              file: brochurePdf,
              download: "LAF3.0 Brochure_FINAL.pdf",
              badge: "PDF • 4.2 MB",
              theme: "black",
            },
            {
              title: "DOWNLOAD PARTICIPATION FORM",
              subtitle: "Delegate & Exhibitor Entry Form",
              file: "#participation",
              badge: "PDF • 1.8 MB",
              theme: "red",
            },
          ].map((item) => {
            const isRed = item.theme === "red";

            return (
              <a
                key={item.title}
                href={item.file}
                download={item.download}
                target={item.file?.startsWith("#") ? undefined : "_blank"}
                rel={item.file?.startsWith("#") ? undefined : "noopener noreferrer"}
                className={`group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl border shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden ${
                  isRed
                    ? "bg-[#D8232A] border-[#D8232A] hover:bg-[#BF1E24]"
                    : "bg-[#18181B] border-neutral-800 hover:border-[#D8232A]"
                }`}
              >
                {/* Shimmer Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none ${
                    isRed ? "via-white/20" : "via-[#D8232A]/15"
                  }`}
                />

                <div className="flex items-center gap-3.5 min-w-0 z-10">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 border ${
                      isRed
                        ? "bg-white/20 border-white/30 text-white group-hover:bg-white group-hover:text-[#D8232A]"
                        : "bg-white/5 border-white/10 text-[#D8232A] group-hover:bg-[#D8232A] group-hover:text-white group-hover:border-transparent"
                    }`}
                  >
                    <Download className="w-4.5 h-4.5 group-hover:translate-y-0.5 transition-transform" />
                  </div>

                  <div className="text-left truncate">
                    <div
                      className={`text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-wider transition-colors truncate ${
                        isRed
                          ? "text-white group-hover:text-white"
                          : "text-white group-hover:text-[#D8232A]"
                      }`}
                    >
                      {item.title}
                    </div>
                    <div
                      className={`text-[10.5px] truncate mt-0.5 ${
                        isRed ? "text-red-100" : "text-neutral-400"
                      }`}
                    >
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                <div className="z-10 ml-2 shrink-0">
                  <span
                    className={`text-[9.5px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-md border transition-all ${
                      isRed
                        ? "text-white bg-white/10 border-white/20 group-hover:bg-white group-hover:text-[#D8232A] group-hover:border-white"
                        : "text-neutral-300 bg-white/5 border-neutral-700 group-hover:border-[#D8232A] group-hover:text-white"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
              </a>
            );
          })}
        </motion.div>

        {/* =====================================================
            PARTICIPATING CHAPTERS
        ====================================================== */}
        <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[#E8E2D8]">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 sm:mb-6"
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
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#E8E2D8]">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 sm:mb-6"
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
