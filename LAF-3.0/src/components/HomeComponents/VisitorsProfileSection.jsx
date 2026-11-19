import React from "react";
import { motion } from "framer-motion";

/* ==========================================================================
   CUSTOM PIXEL-PERFECT SVG ICONS (Red Theme - Increased Size)
   ========================================================================== */

const ArchitectIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6 text-[#D8232A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="10" width="14" height="26" rx="2" /><line x1="12" y1="16" x2="18" y2="16" /><line x1="12" y1="22" x2="18" y2="22" /><line x1="12" y1="28" x2="18" y2="28" /><polygon points="20,38 42,38 42,16" /><polygon points="26,34 38,34 38,22" />
  </svg>
);
const BuilderIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6 text-[#D8232A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 20a10 10 0 0 1 20 0Z" /><line x1="10" y1="20" x2="38" y2="20" strokeWidth="2.5" /><path d="M16 20v4a8 8 0 0 0 16 0v-4" /><path d="M11 38v-4a7 7 0 0 1 7-7h12a7 7 0 0 1 7 7v4" />
  </svg>
);
const CivilEngineerIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6 text-[#D8232A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="16" y="8" width="16" height="32" rx="2" /><path d="M24 8v32" strokeDasharray="3 3" /><path d="M8 38V20h8" /><path d="M32 20h8v18" /><line x1="20" y1="14" x2="28" y2="14" /><line x1="20" y1="20" x2="28" y2="20" /><line x1="20" y1="26" x2="28" y2="26" /><line x1="20" y1="32" x2="28" y2="32" />
  </svg>
);
const ContractorIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6 text-[#D8232A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22l8-8 10 10-6 6a3 3 0 0 1-4.2 0l-7.8-8Z" /><path d="M40 22l-8-8-10 10 6 6a3 3 0 0 0 4.2 0l7.8-8Z" /><path d="M18 32l4 4" /><path d="M22 36l4 4" />
  </svg>
);
const ConsultantIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6 text-[#D8232A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="18" r="4.5" /><path d="M16 34v-2a8 8 0 0 1 16 0v2" /><circle cx="12" cy="22" r="3.5" /><path d="M6 35v-1.5a6 6 0 0 1 8-4" /><circle cx="36" cy="22" r="3.5" /><path d="M34 29.5a6 6 0 0 1 8 4V35" />
  </svg>
);
const DealerIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6 text-[#D8232A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 32V18a2 2 0 0 1 2-2h14l6 5v11a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2Z" /><path d="M28 16v8h6" /><circle cx="18" cy="34" r="3.5" /><circle cx="30" cy="34" r="3.5" /><line x1="6" y1="21" x2="10" y2="21" /><line x1="4" y1="26" x2="9" y2="26" />
  </svg>
);
const BuyerIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6 text-[#D8232A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="36" r="3" /><circle cx="32" cy="36" r="3" /><path d="M8 12h5l4 18h18l4-14H15" />
  </svg>
);
const InteriorIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6 text-[#D8232A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 24v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V24" /><rect x="13" y="27" width="16" height="6" rx="2" /><path d="M8 24h4v8H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z" /><path d="M30 24h4v8h-4a2 2 0 0 0-2-2v-4a2 2 0 0 0 2-2Z" /><path d="M38 14l3-6h-6l3 6v22" /><line x1="35" y1="36" x2="41" y2="36" />
  </svg>
);
const WarehouseIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6 text-[#D8232A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 20l16-9 16 9v17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V20Z" /><rect x="17" y="24" width="14" height="15" rx="1" /><line x1="17" y1="28" x2="31" y2="28" /><line x1="17" y1="32" x2="31" y2="32" /><line x1="17" y1="36" x2="31" y2="36" />
  </svg>
);
const GovtIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6 text-[#D8232A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="24,10 8,18 40,18" /><line x1="12" y1="18" x2="12" y2="34" /><line x1="20" y1="18" x2="20" y2="34" /><line x1="28" y1="18" x2="28" y2="34" /><line x1="36" y1="18" x2="36" y2="34" /><rect x="6" y="34" width="36" height="4" rx="1" />
  </svg>
);
const EducationIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6 text-[#D8232A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="24,12 8,20 24,28 40,20" /><path d="M14 23v9c0 4 4.5 7 10 7s10-3 10-7v-9" /><path d="M40 20v14" /><circle cx="40" cy="34" r="1.5" fill="currentColor" />
  </svg>
);
const PublicIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6 text-[#D8232A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="18" r="4.5" /><path d="M16 35v-2a8 8 0 0 1 16 0v2" /><circle cx="13" cy="22" r="3.5" /><path d="M7 36v-1.5a6 6 0 0 1 8-4" /><circle cx="35" cy="22" r="3.5" /><path d="M33 30.5a6 6 0 0 1 8 4V36" />
  </svg>
);
const HomeBuyerIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6 text-[#D8232A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 22l14-11 14 11v15a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V22Z" /><path d="M20 39v-11h8v11" />
  </svg>
);
const MoreIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6 text-[#D8232A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="24" r="3.5" fill="currentColor" stroke="none" /><circle cx="24" cy="24" r="3.5" fill="currentColor" stroke="none" /><circle cx="34" cy="24" r="3.5" fill="currentColor" stroke="none" />
  </svg>
);

/* ==========================================================================
   DATA LISTS 
   ========================================================================== */

const allProfiles = [
  { icon: ArchitectIcon, title: "Architects" },
  { icon: BuilderIcon, title: "Builders & Promoters" },
  { icon: CivilEngineerIcon, title: "Civil & Structural Engineers" },
  { icon: ContractorIcon, title: "Contractors" },
  { icon: ConsultantIcon, title: "Consultants" },
  { icon: DealerIcon, title: "Dealers & Distributors" },
  { icon: BuyerIcon, title: "End Users/Buyers" },
  { icon: InteriorIcon, title: "Interior Designers" },
  { icon: WarehouseIcon, title: "Large Warehouse Builders" },
  { icon: GovtIcon, title: "Govt. Officials" },
  { icon: EducationIcon, title: "Faculties & Students" },
  { icon: PublicIcon, title: "General Public" },
  { icon: HomeBuyerIcon, title: "Prospective home buyers" },
  { icon: MoreIcon, title: "and many more" },
];

/* ==========================================================================
   VISITOR'S PROFILE COMPONENT 
   ========================================================================== */

const VisitorsProfileSection = () => {
  return (
    <section
      id="visitors-profile"
      className="relative overflow-hidden bg-[#FAF8F5] text-[#171717] py-16 sm:py-24 font-sans border-t border-[#E8E2D8]"
    >
      <span id="visitor-profile" className="absolute -top-24 pointer-events-none" />

      {/* Minimal Background Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: `linear-gradient(rgba(217, 119, 6, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 119, 6, 0.1) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* ================= HEADER ================= */}
        <div className="mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-1.5"
          >
            <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
              Visitor's Profile
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
              A curated experience connecting brands, professionals, experts, culture and the wider built-environment ecosystem.
            </p>
          </motion.div>
        </div>

        {/* ================= PREMIUM GRID LAYOUT ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {allProfiles.map((item, index) => {
            const IconComponent = item.icon;
            const delay = index * 0.05;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay }}
                // 🚀 FIX: Reduced vertical padding from p-5 to py-3 to make the box tighter
                className="group relative bg-white rounded-xl border border-gray-200 py-3 px-4 sm:px-5 flex items-center gap-4 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#D8232A]/50 transition-all duration-300 cursor-default"
              >
                {/* Icon Container - Size increased slightly and margin adjusted */}
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent />
                </div>

                {/* Title */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-[15px] font-semibold text-gray-800 group-hover:text-[#D8232A] transition-colors truncate">
                    {item.title}
                  </h3>
                </div>

                {/* Minimal Decorative Dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-[#D8232A] transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default VisitorsProfileSection;