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

// Corporate Committee Images
import corp1Img from "../../assets/LAF/CORPORATE COMMITTEE/Mr. Anurag Agarwal.webp";
import corp2Img from "../../assets/LAF/CORPORATE COMMITTEE/Mr. Kamaljeet Singh.webp";
import corp3Img from "../../assets/LAF/CORPORATE COMMITTEE/Mr. Karunesh Verma.webp";
import corp4Img from "../../assets/LAF/CORPORATE COMMITTEE/Mr. Rajiv Agarwal.webp";
import corp5Img from "../../assets/LAF/CORPORATE COMMITTEE/Mr. Manuj Sharma.webp";
import corp6Img from "../../assets/LAF/CORPORATE COMMITTEE/Mr. Sandeep Singhal.webp";

// Office Bearers Images
import obPrashant from "../../assets/LAF/Office Bearers/Ar. PRASHANT PAL SINGH.webp";
import obRepunjay from "../../assets/LAF/Office Bearers/Ar. Repunjay Patel.webp";
import obAvinash from "../../assets/LAF/Office Bearers/Ar. AVINASH GHAI.webp";
import obAshutosh from "../../assets/LAF/Office Bearers/Ar. ASHUTOSH VERMA.webp";
import obPushpendra from "../../assets/LAF/Office Bearers/Ar. Pushpendra Kumar.webp";
import obRahul from "../../assets/LAF/Office Bearers/Ar. Rahul Jadon.webp";
import obNaveen from "../../assets/LAF/Office Bearers/Ar. NAVEEN SINGH.webp";

// Executive Committee Images
import ecGopal from "../../assets/LAF/Executive Comittee/Ar. GOPAL TRIPATHI.webp";
import ecAnshu from "../../assets/LAF/Executive Comittee/Ar. ANSHU SINGH.webp";
import ecUmesh from "../../assets/LAF/Executive Comittee/Ar. UMESH KUMAR GUPTA.webp";
import ecAlok from "../../assets/LAF/Executive Comittee/Ar. ALOK KUMAR VERMA.webp";
import ecVaibhav from "../../assets/LAF/Executive Comittee/Ar. VAIBHAV GOEL.webp";
import ecHimanshu from "../../assets/LAF/Executive Comittee/himanshu-2.webp";
import ecRoli from "../../assets/LAF/Executive Comittee/Ar. ROLI SINGH.webp";
import ecAnjaneya from "../../assets/LAF/Executive Comittee/Ar. ANJANEYA SHARMA.webp";
import ecNitin from "../../assets/LAF/Executive Comittee/Ar. NITIN SAXENA.webp";
import ecPrashant from "../../assets/LAF/Executive Comittee/Ar. PRASHANT TIWARI.webp";
import ecShalini from "../../assets/LAF/Executive Comittee/Ar. Shalini Diwaker.webp";
import ecMohd from "../../assets/LAF/Executive Comittee/Ar. MOHD. SOHRAB KHAN.webp";
import ecJuwairiya from "../../assets/LAF/Executive Comittee/Ar. Juwairiya Qamruddin.webp";
import ecKrishna from "../../assets/LAF/Executive Comittee/Ar. KRISHNA MOHAN PRAJAPATI.webp";
import ecAkhilesh from "../../assets/LAF/Executive Comittee/Ar. AKHILESH PAL.webp";

// Intellect Council Images
import icRanjan from "../../assets/LAF/Intellect Council/Ar. Ranjan Shukla.webp";
import icRajiv from "../../assets/LAF/Intellect Council/Ar. Rajiv Kacker.webp";
import icAsthana from "../../assets/LAF/Intellect Council/Ar. K.K.Asthana.webp";
import icKeshav from "../../assets/LAF/Intellect Council/Ar. Keshav Kumar.webp";
import icJagbir from "../../assets/LAF/Intellect Council/Ar. Jagbir Singh.webp";
import icSabahat from "../../assets/LAF/Intellect Council/Ar. MD. Sabahat.webp";
import icSabina from "../../assets/LAF/Intellect Council/Ar. Sabina Singh.webp";
import icSanjay from "../../assets/LAF/Intellect Council/Ar.Sanjay Mathur.webp";
import icRajat from "../../assets/LAF/Intellect Council/Ar. Rajat Kant Mittal.webp";
import icVipul from "../../assets/LAF/Intellect Council/Ar. Vipul Varshney.webp";

export const corporateCommitteeMembers = [
  { id: "corp-1", name: "Mr. Anurag Agarwal", role: "Corporate Committee Member", image: corp1Img },
  { id: "corp-2", name: "Mr. Kamaljeet Singh", role: "Corporate Committee Member", image: corp2Img },
  { id: "corp-3", name: "Mr. Karunesh Verma", role: "Corporate Committee Member", image: corp3Img },
  { id: "corp-4", name: "Mr. Rajiv Agarwal", role: "Corporate Committee Member", image: corp4Img },
  { id: "corp-5", name: "Mr. Manuj Sharma", role: "Corporate Committee Member", image: corp5Img },
  { id: "corp-6", name: "Mr. Sandeep Singhal", role: "Corporate Committee Member", image: corp6Img },
];

export const officeBearersMembers = [
  { id: "ob-1", name: "Ar. Prashant Pal Singh", role: "IMMEDIATE PAST PRESIDENT", image: obPrashant },
  { id: "ob-2", name: "Ar. Repunjay Patel", role: "PRESIDENT", image: obRepunjay },
  { id: "ob-3", name: "Ar. Avinash Ghai", role: "VICE PRESIDENT", image: obAvinash },
  { id: "ob-4", name: "Ar. Ashutosh Verma", role: "GENERAL SECRETARY", image: obAshutosh },
  { id: "ob-5", name: "Ar. Pushpendra Kumar", role: "JOINT SECRETARY", image: obPushpendra },
  { id: "ob-6", name: "Ar. Rahul Jadon", role: "JOINT SECRETARY", image: obRahul },
  { id: "ob-7", name: "Ar. Naveen Singh", role: "TREASURER", image: obNaveen },
];

export const executiveCommitteeMembers = [
  { id: "ec-1", name: "Ar. Gopal Tripathi", image: ecGopal },
  { id: "ec-2", name: "Ar. Anshu Singh", image: ecAnshu },
  { id: "ec-3", name: "Ar. Umesh Kumar Gupta", image: ecUmesh },
  { id: "ec-4", name: "Ar. Alok Kumar Verma", image: ecAlok },
  { id: "ec-5", name: "Ar. Vaibhav Goel", image: ecVaibhav },
  { id: "ec-6", name: "Ar. Himanshu Diwakar", image: ecHimanshu },
  { id: "ec-7", name: "Ar. Roli Singh", image: ecRoli },
  { id: "ec-8", name: "Ar. Anjaneya Sharma", image: ecAnjaneya },
  { id: "ec-9", name: "Ar. Nitin Saxena", image: ecNitin },
  { id: "ec-10", name: "Ar. Prashant Tiwari", image: ecPrashant },
  { id: "ec-11", name: "Ar. Shalini Diwaker", image: ecShalini },
  { id: "ec-12", name: "Ar. Mohammad Sohrab Khan", image: ecMohd },
  { id: "ec-13", name: "Ar. Juwairiya Qamruddin", image: ecJuwairiya },
  { id: "ec-14", name: "Ar. Krishan Mohan Prajapati", image: ecKrishna },
  { id: "ec-15", name: "Ar. Akhilesh Pal", image: ecAkhilesh },
];

export const intellectCouncilMembers = [
  { id: "ic-1", name: "Ar. Ranjan Shukla", image: icRanjan },
  { id: "ic-2", name: "Ar. Rajiv Kacker", image: icRajiv },
  { id: "ic-3", name: "Ar. K.K. Asthana", image: icAsthana },
  { id: "ic-4", name: "Ar. Keshav Kumar", image: icKeshav },
  { id: "ic-5", name: "Ar. Jagbir Singh", image: icJagbir },
  { id: "ic-6", name: "Ar. Md. Sabahat", image: icSabahat },
  { id: "ic-7", name: "Ar. Sabina Singh", image: icSabina },
  { id: "ic-8", name: "Ar. Sanjay Mathur", image: icSanjay },
  { id: "ic-9", name: "Ar. Rajatkant", image: icRajat },
  { id: "ic-10", name: "Ar. Vipul Varshney", image: icVipul },
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
          ? "relative pt-2 sm:pt-4 pb-8 sm:pb-12 bg-[#FAF8F5] text-[#171717] font-sans selection:bg-[#D4AF37]/30"
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
      <div className={`relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 ${isEmbedded ? "pt-0 pb-4" : "pt-12 pb-24"}`}>
        
        {/* Corporate Committee Members Section */}
        <div className="mb-14 sm:mb-16">
          <div className="flex flex-col items-start gap-1 mb-8">
            <span className="bg-[#D8232A] text-white px-3.5 py-1 text-2xl sm:text-3xl font-bold tracking-tight inline-block leading-tight">
              LAF 3.0
            </span>
            <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight inline-block leading-tight">
              Corporate Committee
            </h2>
          </div>

          <div className="flex flex-wrap items-start justify-start gap-3 sm:gap-3.5 md:gap-4 max-w-7xl">
            {corporateCommitteeMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="group flex flex-col items-center text-center w-28 sm:w-32 md:w-36"
              >
                {/* Red Curved Arch Frame */}
                <div className="relative w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-t-full border-2 border-[#D8232A] bg-white overflow-hidden flex items-end justify-center shadow-xs group-hover:shadow-[0_8px_24px_rgba(216,35,42,0.18)] transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[84%] object-cover object-top group-hover:scale-105 transition-transform duration-500"
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

        {/* 1. Office Bearers Section */}
        <div className="mb-14 sm:mb-16">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[#1E3A8A] text-center mb-8 sm:mb-10 tracking-tight uppercase">
            Office Bearers
          </h2>

          <div className="flex flex-wrap items-start justify-center gap-3 sm:gap-3.5 md:gap-4 max-w-7xl mx-auto">
            {officeBearersMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group flex flex-col items-center text-center w-28 sm:w-32 md:w-36"
              >
                {/* Red Curved Arch Frame */}
                <div className="relative w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-t-full border-2 border-[#D8232A] bg-white overflow-hidden flex items-end justify-center shadow-xs group-hover:shadow-[0_8px_24px_rgba(216,35,42,0.18)] transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[84%] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Name & Role */}
                <div className="mt-3 w-full flex flex-col items-center">
                  <h3 className="font-sans font-bold text-xs sm:text-sm text-neutral-800 group-hover:text-[#D8232A] transition-colors leading-snug">
                    {member.name}
                  </h3>
                  {member.role && (
                    <p className="mt-1 font-sans font-bold text-[10px] sm:text-xs text-neutral-700 tracking-wide uppercase leading-tight">
                      {member.role}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Executive Committee Section */}
        <div className="mb-14 sm:mb-16">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[#1E3A8A] text-center mb-8 sm:mb-10 tracking-tight uppercase">
            Executive Committee
          </h2>

          <div className="flex flex-wrap items-start justify-center gap-3 sm:gap-3.5 md:gap-4 max-w-7xl mx-auto">
            {executiveCommitteeMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group flex flex-col items-center text-center w-28 sm:w-32 md:w-36"
              >
                {/* Red Curved Arch Frame */}
                <div className="relative w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-t-full border-2 border-[#D8232A] bg-white overflow-hidden flex items-end justify-center shadow-xs group-hover:shadow-[0_8px_24px_rgba(216,35,42,0.18)] transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[84%] object-cover object-top group-hover:scale-105 transition-transform duration-500"
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

        {/* 3. Intellect Council Section */}
        <div className="mb-8 sm:mb-10">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[#1E3A8A] text-center mb-8 sm:mb-10 tracking-tight uppercase">
            Intellect Council
          </h2>

          <div className="flex flex-wrap items-start justify-center gap-3 sm:gap-3.5 md:gap-4 max-w-7xl mx-auto">
            {intellectCouncilMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group flex flex-col items-center text-center w-28 sm:w-32 md:w-36"
              >
                {/* Red Curved Arch Frame */}
                <div className="relative w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-t-full border-2 border-[#D8232A] bg-white overflow-hidden flex items-end justify-center shadow-xs group-hover:shadow-[0_8px_24px_rgba(216,35,42,0.18)] transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[84%] object-cover object-top group-hover:scale-105 transition-transform duration-500"
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
