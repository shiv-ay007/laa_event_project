import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

import corp1Img from "../../assets/LAF/CORPORATE COMMITTEE/Mr. Anurag Agarwal.png";
import corp2Img from "../../assets/LAF/CORPORATE COMMITTEE/Mr. Kamaljeet Singh.png";
import corp3Img from "../../assets/LAF/CORPORATE COMMITTEE/Mr. Karunesh Verma.png";
import corp4Img from "../../assets/LAF/CORPORATE COMMITTEE/Mr. Rajiv Agarwal.png";
import corp5Img from "../../assets/LAF/CORPORATE COMMITTEE/Mr. Manuj Sharma.png";
import corp6Img from "../../assets/LAF/CORPORATE COMMITTEE/Mr. Sandeep Singhal.png";

export const corporateCommitteeMembers = [
  { id: "corp-1", name: "Mr. Anurag Agarwal", role: "Corporate Committee Member", image: corp1Img },
  { id: "corp-2", name: "Mr. Kamaljeet Singh", role: "Corporate Committee Member", image: corp2Img },
  { id: "corp-3", name: "Mr. Karunesh Verma", role: "Corporate Committee Member", image: corp3Img },
  { id: "corp-4", name: "Mr. Rajiv Agarwal", role: "Corporate Committee Member", image: corp4Img },
  { id: "corp-5", name: "Mr. Manuj Sharma", role: "Corporate Committee Member", image: corp5Img },
  { id: "corp-6", name: "Mr. Sandeep Singhal", role: "Corporate Committee Member", image: corp6Img },
];

export function CorporateCommitteePage({ isEmbedded = true }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isEmbedded) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isEmbedded]);

  return (
    <div
      id={isEmbedded ? "corporate-committee" : undefined}
      className={
        isEmbedded
          ? "relative py-12 sm:py-16 bg-[#FAF8F5] text-[#171717] font-sans selection:bg-[#D4AF37]/30 border-t border-[#E8E2D8]"
          : "min-h-screen bg-[#FAF7F2] text-[#171717] font-sans selection:bg-[#D4AF37]/30"
      }
    >
      {/* Background Architectural Watermark & Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 7, 119, 0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(78, 12, 123, 0.07) 1px, transparent 1px)
            `,
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      {/* Main Content Area */}
      <div className={`relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 ${isEmbedded ? "pt-2 pb-10" : "pt-12 pb-24"}`}>
        
        {/* Corporate Committee Members Section */}
        <div className="mb-14">
          <div className="flex flex-col items-start gap-1 mb-8">
            <span className="bg-[#D8232A] text-white px-3.5 py-1 text-2xl sm:text-3xl font-bold tracking-tight inline-block leading-tight">
              LAF 3.0
            </span>
            <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight inline-block leading-tight">
              Corporate Committee
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-5xl justify-items-start">
            {corporateCommitteeMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="group flex flex-col items-center text-center w-full max-w-[150px]"
              >
                {/* Red Curved Arch Frame */}
                <div className="relative w-28 h-40 sm:w-32 sm:h-44 md:w-36 md:h-48 rounded-t-full border-2 border-[#D8232A] bg-white overflow-hidden flex items-end justify-center shadow-xs group-hover:shadow-[0_8px_24px_rgba(216,35,42,0.18)] transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Name Only */}
                <div className="mt-3 w-full flex flex-col items-center">
                  <h3 className="font-sans font-bold text-xs sm:text-sm text-neutral-800 group-hover:text-[#D8232A] transition-colors leading-snug">
                    {member.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorporateCommitteePage;