import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// Organization Logos
import iudiLogo from "../../assets/images/suplogo2.png";
import ipaLogo from "../../assets/images/suplogo4.png";
import iiaLogo from "../../assets/images/suplogo1.png";
import iiidLogo from "../../assets/images/suplogo3.png";
import yacaLogo from "../../assets/images/suplogo7.png";
import fsaiLogo from "../../assets/images/suplogo5.png";
import itpiLogo from "../../assets/images/suplogo6.png";

// LAF Logo
import lafLogo from "../../assets/images/logo-transparent.png";

// Supporting Leadership Persons (from src/assets/LAF/SUPPORTING ORGANIZATIONS/)
import iudiPerson from "../../assets/LAF/SUPPORTING ORGANIZATIONS/Ar. Rajat Kant Mittal.png";
import ipaPerson from "../../assets/LAF/SUPPORTING ORGANIZATIONS/Ar. Devesh Mani Tripathi.png";
import iiaPerson from "../../assets/LAF/SUPPORTING ORGANIZATIONS/Ar. Sandeep Saraswat.png";
import iiidPerson from "../../assets/LAF/SUPPORTING ORGANIZATIONS/Ar. Aviral Agrawal.png";
import yacaPerson from "../../assets/LAF/SUPPORTING ORGANIZATIONS/Ar. Vishal Mathur (Yaka).png";
import fsaiPerson from "../../assets/LAF/SUPPORTING ORGANIZATIONS/dilip dutt.jpeg";
import itpiPerson from "../../assets/LAF/SUPPORTING ORGANIZATIONS/Tpr. Anup Kumar Srivastava.png";

const organizations = [
  {
    id: "01",
    badge: "IUDI",
    title: "INSTITUTE OF URBAN DESIGNERS INDIA",
    logo: iudiLogo,
    personImg: iudiPerson,
    person: "Ar. Rajatkant",
    fullName: "Ar. Rajat Kant Mittal",
    role: "Chairperson",
    
  },
  {
    id: "02",
    badge: "IPA",
    title: "INDIAN PLUMBING ASSOCIATION",
    logo: ipaLogo,
    personImg: ipaPerson,
    person: "Ar. Devesh Mani Tripathi",
    fullName: "Ar. Devesh Mani Tripathi",
    role: "General Secretary",
    
  },
  {
    id: "03",
    badge: "IIA",
    title: "THE INDIAN INSTITUTE OF ARCHITECTS",
    logo: iiaLogo,
    personImg: iiaPerson,
    person: "Ar. Sandeep Saraswat",
    fullName: "Ar. Sandeep Saraswat",
    role: "Chairman",
    
  },
  {
    id: "04",
    badge: "IIID",
    title: "INDIAN INSTITUTE OF INTERIOR DESIGNERS",
    logo: iiidLogo,
    personImg: iiidPerson,
    person: "Ar. Aviral Agrawal",
    fullName: "Ar. Aviral Agrawal",
    role: "Chairman",
    
  },
  {
    id: "05",
    badge: "YACA",
    title: "YOUNG ARCHITECTS CLUB ASSOCIATION",
    logo: yacaLogo,
    personImg: yacaPerson,
    person: "Ar. Vishal Mathur",
    fullName: "Ar. Vishal Mathur",
    role: "President",
    
  },
  {
    id: "06",
    badge: "FSAI",
    title: "FIRE & SECURITY ASSOCIATION OF INDIA",
    logo: fsaiLogo,
    personImg: fsaiPerson,
    person: "Lalit Dutt",
    fullName: "Lalit Dutt",
    role: "Fire & Security Association of India",
    
  },
  {
    id: "07",
    badge: "ITPI",
    title: "INSTITUTE OF TOWN PLANNERS, INDIA",
    logo: itpiLogo,
    personImg: itpiPerson,
    person: "Tpr. Anup Kumar Srivastava",
    fullName: "Tpr. Anup Kumar Srivastava",
    role: "President",
    
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function SupportingOrganizationsSection() {
  return (
    <section
      id="supporting-organizations"
      className="relative overflow-hidden bg-[#FAF8F5] pt-4 sm:pt-6 lg:pt-8 pb-3 sm:pb-4 select-none font-sans border-t border-[#E6DFD3]"
    >
      {/* Subtle architectural grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25] bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:44px_44px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-3 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER: SUPPORTING ORGANIZATIONS & LAF 3.0 LOGO
        ====================================================== */}
        <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-5 pb-5 border-b border-[#E6DFD3]/60">
          <div className="max-w-2xl">
            <div className="flex flex-col items-start gap-1.5 mb-1.5">
              <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight inline-block leading-tight">
                Supporting Organizations
              </h2>
            </div>

            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
              The Lucknow Architecture Festival has collaborated with various organisations working in close tandem.
            </p>
          </div>

          {/* Right Header: LAF 3.0 Branding */}
          <div className="flex items-center gap-4">
            <img
              src={lafLogo}
              alt="Lucknow Architecture Festival LAF 3.0"
              className="h-11 sm:h-13 md:h-14 w-auto object-contain drop-shadow-sm"
            />
          </div>
        </div>

        {/* =====================================================
            COMBINED ITEMS GRID (7 ITEMS - THIN RED BOXES)
        ====================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
        >
          {organizations.map((item, index) => {
            const isLast = index === organizations.length - 1;
            return (
              <div
                key={item.id}
                className={
                  isLast
                    ? "md:col-span-2 md:w-full md:max-w-[420px] md:mx-auto lg:col-span-1 lg:col-start-2 lg:max-w-none"
                    : ""
                }
              >
                <OrgCard item={item} />
              </div>
            );
          })}
        </motion.div>

        {/* =====================================================
            BOTTOM FOOTNOTE RIBBON
        ====================================================== */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E6DFD3] pt-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D8232A]" />
            <span>Building connections across architecture, urban planning, design, and construction sectors.</span>
          </div>
          <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-[#D8232A]">
            LAF 3.0 • INSTITUTIONAL ALLIANCES
          </span>
        </div>
      </div>
    </section>
  );
}

// Individual Supporting Organization (Thin Red Box, Red Curved Arch Portrait)
function OrgCard({ item }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col justify-center rounded-2xl border border-[#D8232A] bg-white p-4 sm:p-5 shadow-xs hover:shadow-[0_8px_24px_rgba(216,35,42,0.12)] transition-all duration-300 h-full"
    >
      {/* Main Body: Clean Logo (Left) + Red Curved Arch Portrait (Right) */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 items-center w-full my-auto">
        {/* Left: Clean Logo */}
        <div className="flex items-center justify-center p-1 sm:p-2 h-24 sm:h-28">
          <img
            src={item.logo}
            alt={item.badge}
            className="max-h-[70px] sm:max-h-[82px] w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Right: Red Curved Arch Portrait + Representative Details */}
        <div className="flex flex-col items-center text-center">
          {/* Red Curved Arch Frame (Matching Curators Height & Proportion) */}
          <div className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-t-full border-2 border-[#D8232A] bg-white overflow-hidden flex items-end justify-center shadow-xs group-hover:shadow-[0_8px_24px_rgba(216,35,42,0.18)] transition-all duration-300 shrink-0">
            <img
              src={item.personImg}
              alt={item.person}
              className="w-full h-[88%] object-cover object-top group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          {/* Representative Details */}
          <div className="mt-2.5 w-full">
            <h4 className="font-sans text-xs sm:text-[13px] font-bold text-neutral-900 group-hover:text-[#D8232A] transition-colors leading-tight">
              {item.person}
            </h4>
            <p className="text-[9.5px] sm:text-[10px] font-semibold text-[#D8232A] leading-tight uppercase tracking-wider mt-1">
              {item.role}
            </p>
            {item.chapter && (
              <p className="text-[8.5px] sm:text-[9px] text-neutral-500 leading-tight mt-0.5">
                {item.chapter}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
