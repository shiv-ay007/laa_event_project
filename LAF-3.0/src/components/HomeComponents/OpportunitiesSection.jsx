import React from 'react';
import { motion } from 'framer-motion';



// ================= 2. ICONS TAILORED TO REFERENCE DESIGN =================
const IconNetwork = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="8" r="3.5" />
    <circle cx="7" cy="18" r="3" />
    <circle cx="25" cy="18" r="3" />
    <path d="M12 28 C12 24 14 22 16 22 C18 22 20 24 20 28" />
    <path d="M4 28 C4 25 5.5 24 7 24" />
    <path d="M28 28 C28 25 26.5 24 25 24" />
    <path d="M10 16 L14 10" />
    <path d="M22 16 L18 10" />
  </svg>
);

const IconCube = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3 L27 9 L27 21 L16 27 L5 21 L5 9 Z" />
    <path d="M16 3 L16 27" />
    <path d="M5 9 L16 15 L27 9" />
    <circle cx="16" cy="15" r="2.5" fill={color} />
  </svg>
);

const IconHandshake = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14 L10 8 L18 13 L22 9 L28 14" />
    <path d="M7 17 L12 22 L16 18 L20 22 L25 17" />
    <path d="M11 15 L14 18" />
    <path d="M18 14 L21 17" />
  </svg>
);

const IconRocket = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3 C21 6 24 11 24 17 L19 22 L10 13 L15 8 C15 8 16 3 16 3 Z" />
    <circle cx="17" cy="12" r="2" fill={color} />
    <path d="M10 13 L6 14 L9 18" />
    <path d="M19 22 L18 26 L14 23" />
    <path d="M9 23 L4 28 M8 27 L13 22" />
  </svg>
);

const IconDistributorsTree = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="6" r="3" />
    <path d="M16 9 V16" />
    <path d="M7 16 H25" />
    <path d="M7 16 V22" />
    <path d="M16 16 V22" />
    <path d="M25 16 V22" />
    <circle cx="7" cy="25" r="3" />
    <circle cx="16" cy="25" r="3" />
    <circle cx="25" cy="25" r="3" />
  </svg>
);

const IconTrending = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 27 H28" />
    <rect x="7" y="18" width="4" height="9" rx="1" />
    <rect x="14" y="13" width="4" height="14" rx="1" />
    <rect x="21" y="8" width="4" height="19" rx="1" />
    <path d="M6 14 L14 8 L20 12 L26 4" />
    <path d="M22 4 H26 V8" />
  </svg>
);

const IconDecisionMakers = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Center Leader Star */}
    <path d="M16 2 L17.5 5.5 L21 6 L18.5 8.5 L19 12 L16 10 L13 12 L13.5 8.5 L11 6 L14.5 5.5 Z" fill={color} />
    {/* People */}
    <circle cx="16" cy="18" r="3" />
    <circle cx="8" cy="20" r="2.5" />
    <circle cx="24" cy="20" r="2.5" />
    <path d="M12 28 C12 24.5 13.8 23 16 23 C18.2 23 20 24.5 20 28" />
    <path d="M5 28 C5 26 6.3 25 8 25" />
    <path d="M27 28 C27 26 25.7 25 24 25" />
  </svg>
);

const IconDatabase = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="16" cy="7" rx="10" ry="3.5" />
    <path d="M6 7 V14 C6 16 10.5 17.5 16 17.5 C21.5 17.5 26 16 26 14 V7" />
    <path d="M6 14 V21 C6 23 10.5 24.5 16 24.5 C21.5 24.5 26 23 26 21 V14" />
  </svg>
);

const IconFeedback = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 6 C5 4.3 6.3 3 8 3 H24 C25.7 3 27 4.3 27 6 V19 C27 20.7 25.7 22 24 22 H11 L5 27 V6 Z" />
    <circle cx="11" cy="12.5" r="1.5" fill={color} />
    <circle cx="16" cy="12.5" r="1.5" fill={color} />
    <circle cx="21" cy="12.5" r="1.5" fill={color} />
  </svg>
);

const IconMarketKnowledge = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="14" r="8" />
    <path d="M20 20 L28 28" />
    <path d="M9 16 L12 13 L15 15 L19 10" />
    <path d="M16 10 H19 V13" />
  </svg>
);

// ================= 3. OPPORTUNITIES DATA =================
const opportunities = [
  // ROW 1
  {
    id: 1,
    icon: IconNetwork,
    color: '#D8232A',
    accentGrad: 'from-[#D8232A] to-[#D8232A]',
    text: 'Connect to architects, institutional buyers, experts, interior designers and other professionals',
  },
  {
    id: 2,
    icon: IconCube,
    color: '#D8232A',
    accentGrad: 'from-[#D8232A] to-[#D8232A]',
    text: 'Showcase your competitive advantage in product design, features, and cost benefits',
  },
  {
    id: 3,
    icon: IconHandshake,
    color: '#D8232A',
    accentGrad: 'from-[#D8232A] to-[#D8232A]',
    text: 'Connect with your end users directly to make them experience the touch',
  },
  {
    id: 4,
    icon: IconRocket,
    color: '#D8232A',
    accentGrad: 'from-[#D8232A] to-[#D8232A]',
    text: 'Opportunity to present your innovations and new range of products',
  },
  {
    id: 5,
    icon: IconDistributorsTree,
    color: '#D8232A',
    accentGrad: 'from-[#D8232A] to-[#D8232A]',
    text: 'Simultaneously reach out to potential agents, distributors and wholesalers',
  },
  // ROW 2
  {
    id: 6,
    icon: IconTrending,
    color: '#D8232A',
    accentGrad: 'from-[#D8232A] to-[#D8232A]',
    text: 'Consolidate trade relationships and opportunity to book on-spot orders',
  },
  {
    id: 7,
    icon: IconDecisionMakers,
    color: '#D8232A',
    accentGrad: 'from-[#D8232A] to-[#D8232A]',
    text: 'Meet key buying decision makers from different segments of prospective buyers',
  },
  {
    id: 8,
    icon: IconDatabase,
    color: '#D8232A',
    accentGrad: 'from-[#D8232A] to-[#D8232A]',
    text: 'Build a database of potential buyers',
  },
  {
    id: 9,
    icon: IconFeedback,
    color: '#D8232A',
    accentGrad: 'from-[#D8232A] to-[#D8232A]',
    text: 'Get instant feedback on products, prices and innovations',
  },
  {
    id: 10,
    icon: IconMarketKnowledge,
    color: '#D8232A',
    accentGrad: 'from-[#D8232A] to-[#D8232A]',
    text: 'Gain first-hand knowledge of market segments, trends, consumer preferences and retailers needs',
  },
];

const OpportunitiesSection = () => {
  return (
    <section className="relative w-full bg-[#FAF8F5] pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden font-sans">
      {/* Outer constraint matching Navbar Width */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* ================= THE MAIN FRAMED CONTAINER (Border Removed as Requested) ================= */}
        <div className="relative bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_4px_30px_rgba(0,0,0,0.04)] p-6 sm:p-8 lg:p-9 xl:p-10 overflow-hidden">
          {/* ================= MAIN FLEX LAYOUT (LEFT HEADING + RIGHT 10 SLANTED CARDS) ================= */}
          <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-7 xl:gap-8">
            {/* ================= LEFT COLUMN: HEADING ================= */}
                       {/* ================= LEFT COLUMN: HEADING ================= */}
            <div className="w-full lg:w-[250px] xl:w-[275px] flex-shrink-0 flex flex-col justify-center lg:pt-0 pt-2">
              {/* Header Titles matching red badge theme */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start gap-1.5 mb-2"
              >
                <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight inline-block leading-tight">
                  Bouquet of
                </h2>
                <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight inline-block leading-tight">
                  Opportunities
                </h2>
              </motion.div>
            </div>

            {/* ================= RIGHT COLUMN: 5 x 2 GRID OF SLANTED CARDS ================= */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 xl:gap-4">
              {opportunities.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.04 }}
                    className="group relative"
                  >
                    {/* The Slanted Card Box */}
                    <div className="h-full rounded-2xl bg-white border border-[#E8E2D8] group-hover:border-[#D8232A]/50 shadow-xs group-hover:shadow-md group-hover:-translate-y-1.5 transition-all duration-300 p-4 sm:p-4.5 flex flex-col items-center justify-between text-center min-h-[175px] sm:min-h-[185px] xl:min-h-[195px] transform sm:-skew-x-[6deg]">
                      {/* Un-skew Container for Inner Content (ensures text & icon stay 100% straight and crisp) */}
                      <div className="w-full flex-1 flex flex-col items-center justify-between transform sm:skew-x-[6deg]">
                        {/* Top Icon */}
                        <div className="mt-1 transition-transform duration-300 group-hover:scale-110">
                          <IconComponent color={item.color} />
                        </div>

                        {/* Middle Content Text */}
                        <p className="my-2.5 text-[12px] sm:text-[12.5px] xl:text-[13px] font-semibold text-[#0E1B38] leading-[1.32] tracking-tight">
                          {item.text}
                        </p>

                        {/* Bottom Colored Accent Pill */}
                        <div
                          className={`w-12 h-[3.5px] rounded-full bg-gradient-to-r ${item.accentGrad} mt-auto`}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
