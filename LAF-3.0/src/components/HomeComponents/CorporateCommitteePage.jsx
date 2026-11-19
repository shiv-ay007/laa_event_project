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

// TODO: Replace '#' with actual image imports
// import corp1Img from "../assets/images/corp-1.png";
// import corp2Img from "../assets/images/corp-2.png";
// import corp3Img from "../assets/images/corp-3.png";
// import corp4Img from "../assets/images/corp-4.png";
// import corp5Img from "../assets/images/corp-5.png";
// import corp6Img from "../assets/images/corp-6.png";

const corp1Img = "#";
const corp2Img = "#";
const corp3Img = "#";
const corp4Img = "#";
const corp5Img = "#";
const corp6Img = "#";

export const corporateCommitteeMembers = [
  { id: "corp-1", name: "Mr. Anurag Aggarwal", role: "Corporate Committee Member", image: corp1Img },
  { id: "corp-2", name: "Mr. Kamaljeet Singh", role: "Corporate Committee Member", image: corp2Img },
  { id: "corp-3", name: "Mr. Karunesh Verma", role: "Corporate Committee Member", image: corp3Img },
  { id: "corp-4", name: "Mr. Rajeev Agrawal", role: "Corporate Committee Member", image: corp4Img },
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
        <div
          className="absolute top-0 left-0 right-0 h-[420px] opacity-[0.055] pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, #FB7801 0%, #EC2656 25%, #930777 60%, #3C086E 100%)",
          }}
        />
        <div className="absolute left-[6%] top-0 bottom-0 w-px bg-gradient-to-b from-[#FB7801]/20 via-[#930777]/15 to-transparent" />
        <div className="absolute right-[6%] top-0 bottom-0 w-px bg-gradient-to-b from-[#FB7801]/20 via-[#930777]/15 to-transparent" />
      </div>

      {/* Main Content Area - Hero aur Back button hta diya gaya hai */}
      <div className={`relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 ${isEmbedded ? "pt-2 pb-10" : "pt-12 pb-24"}`}>
        
        {/* Corporate Committee Members Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-8 gap-4 rounded-3xl p-6 sm:p-8 border border-white/40 shadow-sm relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #fff9f0 0%, #fdf4ff 60%, #f5f0ff 100%)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl"
              style={{ background: "linear-gradient(90deg, #FB7801 0%, #EC2656 25%, #930777 75%, #3C086E 100%)" }} />
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Building2 className="w-4 h-4 text-orange-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#EC2656] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase"
                  style={{ background: "linear-gradient(90deg, #FB7801, #930777)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  01 · CORPORATE COMMITTEE MEMBERS
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717]">
                Corporate Committee
              </h2>
            </div>
            <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full border border-white/40 shadow-sm self-start sm:self-auto text-white"
              style={{ background: "linear-gradient(90deg, #FB7801, #EC2656, #930777)" }}>
              MEMBERS ({corporateCommitteeMembers.length})
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {corporateCommitteeMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-[#fff9f0] hover:to-[#fdf4ff] border border-[#E6DFD3] hover:border-transparent shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer text-center relative overflow-hidden"
              >
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 transition-all duration-300 shadow-md mb-4"
                  style={{ background: "linear-gradient(135deg, #E6DFD3, #D4AF37 50%, transparent)" }}
                >
                  <div className="w-full h-full rounded-full bg-white overflow-hidden border-2 border-white flex items-center justify-center group-hover:shadow-[0_0_18px_rgba(236,38,86,0.18)] transition-all duration-300">
                    {member.image === "#" ? (
                      <span className="text-2xl font-serif font-bold text-neutral-300 select-none">#</span>
                    ) : (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <span className="text-[9.5px] font-mono tracking-widest font-bold uppercase block truncate"
                    style={{ background: "linear-gradient(90deg, #FB7801, #930777)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    LAF 3.0 · #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <h3 className="font-serif text-base font-bold text-neutral-900 group-hover:text-[#EC2656] transition-colors mt-1 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium mt-1">
                    {member.role}
                  </p>
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