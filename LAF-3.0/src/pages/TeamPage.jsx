import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  GraduationCap,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

import conAshok from "../assets/LAF/CONVENORS/Ar. Ashok Kumar.png";
import conRajat from "../assets/LAF/CONVENORS/Ar. Rajat Kant Mittal.png";
import conRanjan from "../assets/LAF/CONVENORS/Ar. Ranjan Shukla.png";
import conAnupam from "../assets/LAF/CONVENORS/Ar. Anupam Mittal.png";

import dirPrashant from "../assets/LAF/CURATORIAL DIRECTORS/Ar. PRASHANT PAL SINGH.png";
import dirDevesh from "../assets/LAF/CURATORIAL DIRECTORS/Ar. Devesh Mani Tripathi.png";
import dirNeeraj from "../assets/LAF/CURATORIAL DIRECTORS/Ar. Neeraj Kushwaha.png";

import curJagbir from "../assets/LAF/CURATORS/Ar. Jagbir Singh.png";
import curSabina from "../assets/LAF/CURATORS/Ar. Sabina Singh.png";
import curJitendra from "../assets/LAF/CURATORS/Ar. Jitendra Kr. Tripathi.png";
import curVipul from "../assets/LAF/CURATORS/Ar. Vipul Varshney1.png";
import curAninda from "../assets/LAF/CURATORS/Ar.Aninda Sircar.png";
import curSanjay from "../assets/LAF/CURATORS/Ar.Sanjay Mathur.png";
import curArvind from "../assets/LAF/CURATORS/Ar. Arvind Yadav.png";

import jcFaraz from "../assets/LAF/JOINT COORDINATOR/Ar. Faraz Usmani.png";
import jcAlok from "../assets/LAF/JOINT COORDINATOR/Ar. Alok Kumar.png";
import jcVishal from "../assets/LAF/JOINT COORDINATOR/Ar. Vishal Jain.png";
import jcLayak from "../assets/LAF/JOINT COORDINATOR/Ar.Layak Singh.png";
import jcPragya from "../assets/LAF/JOINT COORDINATOR/Ar Pragya Singh.png";
import jcChhaya from "../assets/LAF/JOINT COORDINATOR/Ar. Chhaya Shukla.png";
import jcPaarul from "../assets/LAF/JOINT COORDINATOR/Ar Paarul Saxena.png";
import jcRajit from "../assets/LAF/JOINT COORDINATOR/Ar. Rajit Agrawal.png";
import jcGaurav from "../assets/LAF/JOINT COORDINATOR/GAURAV GUPTA.png";
import jcAshutoshS from "../assets/LAF/JOINT COORDINATOR/Ar. Ashutosh Sahu.png";
import jcDevyani from "../assets/LAF/JOINT COORDINATOR/Ar. Devyani Dayal.png";
import jcShipra from "../assets/LAF/JOINT COORDINATOR/SHIPRA SINGH.png";
import jcRohit from "../assets/LAF/JOINT COORDINATOR/Ar. Rohit Gupta.png";
import jcPankaj from "../assets/LAF/JOINT COORDINATOR/Ar. Pankaj Mishra.png";
import jcAshutoshG from "../assets/LAF/JOINT COORDINATOR/Ar. Ashutosh Gupta.png";
import jcDeepti from "../assets/LAF/JOINT COORDINATOR/Ar. Deepti Pandey.png";
import jcSwati from "../assets/LAF/JOINT COORDINATOR/Ar. Swati Bhatia.png";
import jcYati from "../assets/LAF/JOINT COORDINATOR/Ar. Yati Kumar Mishra.png";
import jcNishant from "../assets/LAF/JOINT COORDINATOR/Ar. Nishant Upadhyay.png";
import jcKabir from "../assets/LAF/JOINT COORDINATOR/Kabir Kumar.png";
import jcKartikey from "../assets/LAF/JOINT COORDINATOR/Kartikey Verma.png";
import jcRP from "../assets/LAF/JOINT COORDINATOR/RP. Gangwar.png";

import coPuneet from "../assets/LAF/COORDINATORS/Ar. Puneet Srivastava.png";
import coAshish from "../assets/LAF/COORDINATORS/Ar. Ashish Gupta.png";
import coDPSingh from "../assets/LAF/COORDINATORS/Ar. D.P. Singh.png";
import coAnita from "../assets/LAF/COORDINATORS/Ar. Anita Srivastava.png";
import coRitu from "../assets/LAF/COORDINATORS/Ar. Ritu Gulati.png";
import coShubhra from "../assets/LAF/COORDINATORS/Ar. Shubhra Mittal.png";
import coAwadhesh from "../assets/LAF/COORDINATORS/Ar. Awadhesh Verma.png";
import coAnuj from "../assets/LAF/COORDINATORS/Ar. Anuj Tandon.png";
import coSandeep from "../assets/LAF/COORDINATORS/Ar. Sandeep Nagi.jpeg";
import coShubhendra from "../assets/LAF/COORDINATORS/Ar. Shubhendra Bajpal.png";
import coDeeptri from "../assets/LAF/COORDINATORS/Ar. Deeptri Jayant.png";
import coAvanish from "../assets/LAF/COORDINATORS/Ar. Avanish Gangwar.png";
import coBrijesh from "../assets/LAF/COORDINATORS/Ar. Brijesh Kumar.png";
import coHitesh from "../assets/LAF/COORDINATORS/Ar. Hitesh Kumar.png";
import coNamit from "../assets/LAF/COORDINATORS/Ar. Namit Tandon.png";
import coVandana from "../assets/LAF/COORDINATORS/Ar. Vandana Patel.png";
import coPrashant from "../assets/LAF/COORDINATORS/Ar. Prashant K.Singh.png";
import coAmit from "../assets/LAF/COORDINATORS/Ar. Amit Singh.png";
import coRohit from "../assets/LAF/COORDINATORS/Ar. Rohit Parmar.png";
import coShikhar from "../assets/LAF/COORDINATORS/Ar. Shikhar Singh.png";
import coShriyak from "../assets/LAF/COORDINATORS/Ar. SHRIYAK SINGH.png";
import coAkash from "../assets/LAF/COORDINATORS/Ar. Akash Hemnani.png";
import coRajarshi from "../assets/LAF/COORDINATORS/Ar. Rajarshi.png";
import coAlok from "../assets/LAF/COORDINATORS/Ar. Alok Maurya.png";

export const convenorLeadershipMembers = [
  {
    id: "con-4",
    name: "Ar. Ashok Kumar",
    role: "Festival Convenor",
    image: conAshok,
    badge: "CONVENOR 04",
  },
  {
    id: "con-1",
    name: "Ar. Rajat Kant Mittal",
    role: "Festival Convenor",
    image: conRajat,
    badge: "CONVENOR 01",
  },
  {
    id: "con-2",
    name: "Ar. Ranjan Shukla",
    role: "Festival Convenor",
    image: conRanjan,
    badge: "CONVENOR 02",
  },
  {
    id: "con-3",
    name: "Ar. Anupam Mittal",
    role: "Festival Convenor",
    image: conAnupam,
    badge: "CONVENOR 03",
  },
];

export const curatorialDirectors = [
  {
    id: "dir-1",
    name: "Ar. Prashant Pal Singh",
    role: "Curatorial Director",
    image: dirPrashant,
    badge: "DIRECTOR 01",
  },
  {
    id: "dir-2",
    name: "Ar. Devesh Mani Tripathi",
    role: "Curatorial Director",
    image: dirDevesh,
    badge: "DIRECTOR 02",
  },
  {
    id: "dir-3",
    name: "Ar. Neeraj Kushwaha",
    role: "Curatorial Director",
    image: dirNeeraj,
    badge: "DIRECTOR 03",
  },
];

export const coreCommitteeMembers = [
  { id: "cc-1", name: "Ar. Jagbir Singh", role: "Lead Curator", image: curJagbir },
  { id: "cc-2", name: "Ar. Sabina Singh", role: "Lead Curator", image: curSabina },
  { id: "cc-3", name: "Ar. Jitendra Kr. Tripathi", role: "Lead Curator", image: curJitendra },
  { id: "cc-4", name: "Ar. Vipul Varshney", role: "Core Committee Member", image: curVipul },
  { id: "cc-5", name: "Ar. Aninda Sircar", role: "Core Committee Member", image: curAninda },
  { id: "cc-7", name: "Ar. Arvind Yadav", role: "Core Committee Member", image: curArvind },
  { id: "cc-6", name: "Ar. Sanjay Mathur", role: "Core Committee Member", image: curSanjay },
];

export const advisorsMentorsMembers = [
  // Row 1
  { id: "jc-17", name: "Ar. Swati Bhatia", role: "Joint Coordinator", image: jcSwati },
  { id: "jc-16", name: "Ar. Deepti Pandey", role: "Joint Coordinator", image: jcDeepti },
  { id: "jc-1", name: "Ar. Faraz Usmani", role: "Joint Coordinator", image: jcFaraz },
  { id: "jc-22", name: "Ar. R.P Gangwar", role: "Joint Coordinator", image: jcRP },
  { id: "jc-10", name: "Ar. Ashutosh Sahu", role: "Joint Coordinator", image: jcAshutoshS },
  { id: "jc-8", name: "Ar. Rajit Agarwal", role: "Joint Coordinator", image: jcRajit },
  { id: "jc-3", name: "Ar. Vishal Jain", role: "Joint Coordinator", image: jcVishal },
  { id: "jc-4", name: "Ar. Layak Singh", role: "Joint Coordinator", image: jcLayak },
  { id: "jc-14", name: "Ar. Pankaj Mishra", role: "Joint Coordinator", image: jcPankaj },
  { id: "jc-9", name: "Ar. Gaurav Gupta", role: "Joint Coordinator", image: jcGaurav },
  { id: "jc-21", name: "Ar. Kartikey Verma", role: "Joint Coordinator", image: jcKartikey },

  // Row 2
  { id: "jc-13", name: "Ar. Rohit Gupta", role: "Joint Coordinator", image: jcRohit },
  { id: "jc-2", name: "Ar. Alok Kumar", role: "Joint Coordinator", image: jcAlok },
  { id: "jc-5", name: "Ar. Pragya Singh", role: "Joint Coordinator", image: jcPragya },
  { id: "jc-7", name: "Ar. Paarul Saxena", role: "Joint Coordinator", image: jcPaarul },
  { id: "jc-11", name: "Ar. Devyani Dayal", role: "Joint Coordinator", image: jcDevyani },
  { id: "jc-12", name: "Ar. Shipra Singh", role: "Joint Coordinator", image: jcShipra },
  { id: "jc-6", name: "Ar. Chhaya Shukla", role: "Joint Coordinator", image: jcChhaya },
  { id: "jc-20", name: "Ar. Kabir Kumar", role: "Joint Coordinator", image: jcKabir },
  { id: "jc-19", name: "Ar. Nishant Upadhyay", role: "Joint Coordinator", image: jcNishant },
  { id: "jc-15", name: "Ar. Ashutosh Gupta", role: "Joint Coordinator", image: jcAshutoshG },
  { id: "jc-18", name: "Ar. Yati K. Mishra", role: "Joint Coordinator", image: jcYati },
];

export const studentVolunteers = [
  { id: "sv-1", name: "Ar. Puneet Srivastava", role: "Event Coordinator", image: coPuneet },
  { id: "sv-2", name: "Ar. Ashish Gupta", role: "Event Coordinator", image: coAshish },
  { id: "sv-3", name: "Ar. D. P. Singh", role: "Event Coordinator", image: coDPSingh },
  { id: "sv-4", name: "Ar. Anita Srivastava", role: "Event Coordinator", image: coAnita },
  { id: "sv-5", name: "Ar. Ritu Gulati", role: "Event Coordinator", image: coRitu },
  { id: "sv-6", name: "Ar. Shubhra Mittal", role: "Event Coordinator", image: coShubhra },
  { id: "sv-7", name: "Ar. Awadhesh Verma", role: "Event Coordinator", image: coAwadhesh },
  { id: "sv-8", name: "Ar. Anuj Tandon", role: "Event Coordinator", image: coAnuj },
  { id: "sv-9", name: "Ar. Sandeep Negi", role: "Event Coordinator", image: coSandeep },
  { id: "sv-10", name: "Ar. Shubhendra Bajpai", role: "Event Coordinator", image: coShubhendra },
  { id: "sv-11", name: "Ar. Deepti Jayant", role: "Event Coordinator", image: coDeeptri },
  { id: "sv-12", name: "Ar. Avanish Gangwar", role: "Event Coordinator", image: coAvanish },
  { id: "sv-13", name: "Ar. Brijesh Kumar", role: "Event Coordinator", image: coBrijesh },
  { id: "sv-14", name: "Ar. Hitesh Kumar", role: "Event Coordinator", image: coHitesh },
  { id: "sv-15", name: "Ar. Namit Tandon", role: "Event Coordinator", image: coNamit },
  { id: "sv-16", name: "Ar. Vandana Patel", role: "Event Coordinator", image: coVandana },
  { id: "sv-17", name: "Ar. Prashant K. Singh", role: "Event Coordinator", image: coPrashant },
  { id: "sv-18", name: "Ar. Amit Singh", role: "Event Coordinator", image: coAmit },
  { id: "sv-19", name: "Ar. Rohit Parmar", role: "Event Coordinator", image: coRohit },
  { id: "sv-20", name: "Ar. Shikhar Singh", role: "Event Coordinator", image: coShikhar },
  { id: "sv-21", name: "Ar. Shriyak Singh", role: "Event Coordinator", image: coShriyak },
  { id: "sv-22", name: "Ar. Akash Hemnani", role: "Event Coordinator", image: coAkash },
  { id: "sv-23", name: "Ar. Rajarshi", role: "Event Coordinator", image: coRajarshi },
  { id: "sv-24", name: "Ar. Alok Maurya", role: "Event Coordinator", image: coAlok },
];

export default function TeamPage({ isEmbedded = false }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isEmbedded) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isEmbedded]);

  return (
    <div
      id={isEmbedded ? "festival-team" : undefined}
      className={
        isEmbedded
          ? "relative pt-8 sm:pt-12 pb-4 sm:pb-6 bg-[#FAF8F5] text-[#171717] font-sans selection:bg-[#D4AF37]/30 border-t border-[#E8E2D8]"
          : "min-h-screen bg-[#FAF7F2] text-[#171717] font-sans selection:bg-[#D4AF37]/30"
      }
    >
      {/* Background Architectural Watermark & Lines */}
      <div className={`${isEmbedded ? "absolute" : "fixed"} inset-0 pointer-events-none z-0 overflow-hidden`}>
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
              "transparent",
          }}
        />
        <div className="absolute left-[6%] top-0 bottom-0 w-px bg-gradient-to-b from-[#FB7801]/20 via-[#930777]/15 to-transparent" />
        <div className="absolute right-[6%] top-0 bottom-0 w-px bg-gradient-to-b from-[#FB7801]/20 via-[#930777]/15 to-transparent" />
      </div>

      <div className={`relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 ${isEmbedded ? "pt-2 pb-0" : "pt-8 pb-24"}`}>
        
        {/* Top Breadcrumbs & Back button */}
        {!isEmbedded && (
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors rounded-full px-4 py-2 shadow-md border border-white/20"
              style={{ background: "#D8232A" }}
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
              <Link to="/" className="hover:text-[#D8232A] transition-colors">LAF 3.0</Link>
              <ChevronRight className="w-3 h-3 text-[#D8232A]" />
              <span>TEAM</span>
            </div>
          </div>
        )}

        {/* Main Event Title Banner - Themed Red Badges (Matching Image 2) */}
        <div className="flex flex-col items-start gap-1 sm:gap-1.5 mb-10 sm:mb-12">
          <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight inline-block leading-tight">
            EVENT Convenors, Curators, Curatorial Directors,
          </h2>
          <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight inline-block leading-tight">
            Coordinators & Joint Coordinators
          </h2>
        </div>

        {/* 1. Convenors Section */}
        <div className="mb-16">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[#1E3A8A] text-center mb-8 sm:mb-10 tracking-tight">
            Convenors
          </h2>

          <div className="flex flex-wrap items-start justify-center gap-3 sm:gap-3.5 md:gap-4 max-w-4xl mx-auto">
            {convenorLeadershipMembers.map((c, index) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center w-28 sm:w-32 md:w-36"
              >
                {/* Red Curved Arch Frame (Reduced Height) */}
                <div className="relative w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-t-full border-2 border-[#D8232A] bg-white overflow-hidden flex items-end justify-center shadow-xs group-hover:shadow-[0_8px_24px_rgba(216,35,42,0.18)] transition-all duration-300">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-[84%] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Name Only */}
                <div className="mt-3.5 w-full flex flex-col items-center">
                  <h3 className="font-sans font-bold text-xs sm:text-sm md:text-base text-neutral-800 group-hover:text-[#D8232A] transition-colors leading-snug">
                    {c.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Curators Section */}
        <div className="mb-16">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[#1E3A8A] text-center mb-8 sm:mb-10 tracking-tight">
            Curators
          </h2>

          <div className="flex flex-wrap items-start justify-center gap-3 sm:gap-3.5 md:gap-4 max-w-6xl mx-auto">
            {coreCommitteeMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col items-center text-center w-28 sm:w-32 md:w-36"
              >
                {/* Red Curved Arch Frame (Reduced Height) */}
                <div className="relative w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-t-full border-2 border-[#D8232A] bg-white overflow-hidden flex items-end justify-center shadow-xs group-hover:shadow-[0_8px_24px_rgba(216,35,42,0.18)] transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[84%] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Name Only */}
                <div className="mt-3.5 w-full flex flex-col items-center">
                  <h3 className="font-sans font-bold text-xs sm:text-sm md:text-base text-neutral-800 group-hover:text-[#D8232A] transition-colors leading-snug">
                    {member.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Curatorial Directors Section */}
        <div className="mb-16">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[#1E3A8A] text-center mb-8 sm:mb-10 tracking-tight">
            Curatorial Directors
          </h2>

          <div className="flex flex-wrap items-start justify-center gap-3 sm:gap-3.5 md:gap-4 max-w-3xl mx-auto">
            {curatorialDirectors.map((d, index) => (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center w-28 sm:w-32 md:w-36"
              >
                {/* Red Curved Arch Frame (Reduced Height) */}
                <div className="relative w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-t-full border-2 border-[#D8232A] bg-white overflow-hidden flex items-end justify-center shadow-xs group-hover:shadow-[0_8px_24px_rgba(216,35,42,0.18)] transition-all duration-300">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-[84%] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Name Only */}
                <div className="mt-3.5 w-full flex flex-col items-center">
                  <h3 className="font-sans font-bold text-xs sm:text-sm md:text-base text-neutral-800 group-hover:text-[#D8232A] transition-colors leading-snug">
                    {d.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Coordinators Section */}
        <div className="mb-16">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[#1E3A8A] text-center mb-8 sm:mb-10 tracking-tight">
            Coordinators
          </h2>

          <div className="flex flex-wrap items-start justify-center gap-3 sm:gap-3.5 md:gap-4 max-w-7xl mx-auto">
            {studentVolunteers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.4) }}
                className="group flex flex-col items-center text-center w-28 sm:w-32 md:w-36"
              >
                {/* Red Curved Arch Frame (Reduced Height) */}
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
                  <h3 className="font-sans font-bold text-xs sm:text-[13px] text-neutral-800 group-hover:text-[#D8232A] transition-colors leading-snug">
                    {member.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5. Joint Coordinators Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[#1E3A8A] text-center mb-8 sm:mb-10 tracking-tight">
            Joint Coordinators
          </h2>

          <div className="flex flex-wrap items-start justify-center gap-3 sm:gap-3.5 md:gap-4 max-w-7xl mx-auto">
            {advisorsMentorsMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.4) }}
                className="group flex flex-col items-center text-center w-28 sm:w-32 md:w-36"
              >
                {/* Red Curved Arch Frame (Reduced Height) */}
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
                  <h3 className="font-sans font-bold text-xs sm:text-[13px] text-neutral-800 group-hover:text-[#D8232A] transition-colors leading-snug">
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