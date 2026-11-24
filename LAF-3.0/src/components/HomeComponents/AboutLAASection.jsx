import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  UsersRound,
  Sparkles,
  GraduationCap,
  BookOpen,
  Trophy,
  Coffee,
  Palette,
  CalendarDays,
  Newspaper,
  PenLine,
  Scale,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  UserCheck,
  Search,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

// ==========================================
// IMAGES IMPORTS
// ==========================================
import lucknowImg from "../../assets/images/lucknow-img.webp";
// Mentor & Patrons from src/assets/LAF/
import mentorImage from "../../assets/LAF/Mentor/Ar. D.C. Thapar.webp";
import con4Img from "../../assets/LAF/Patron/Ar. Ashok Kumar.webp";
import patron2Img from "../../assets/LAF/Patron/Ar. Ajai Behl.webp";
import patron3Img from "../../assets/LAF/Patron/Dr. Vandana Sehgal.webp";
import patron4Img from "../../assets/LAF/Patron/Ar. Sanjay Sinha.webp";

// LAA Committee images from src/assets/LAF/
import acadSuparna from "../../assets/LAF/Academic Committee/Ar. Suparna Sircar.webp";
import acadRitu from "../../assets/LAF/Academic Committee/Ar. Ritu Gulati.webp";
import eduDPSingh from "../../assets/LAF/Edu Formation Committee/Ar. D.P. Singh.webp";
import eduDeepti from "../../assets/LAF/Edu Formation Committee/Ar. Deepti Pandey.webp";
import sportsShubhendra from "../../assets/LAF/Sports Committee/Ar. Shubhendra Bajpal.webp";
import sportsSandeep from "../../assets/LAF/Sports Committee/Ar. Sandeep Negi.webp";
import hospVaibhav from "../../assets/LAF/Hospitality & Welfare Committee/Ar. VAIBHAV GOEL.webp";
import hospAviral from "../../assets/LAF/Hospitality & Welfare Committee/av-2.webp";
import cultShubhra from "../../assets/LAF/Cultural & Exhibition Committee/Ar. Shubhra Mittal.webp";
import cultRohit from "../../assets/LAF/Cultural & Exhibition Committee/Ar. Rohit Parmar.webp";

import eventAvinash from "../../assets/LAF/Event Management Committee/Ar. AVINASH GHAI.webp";
import eventPragya from "../../assets/LAF/Event Management Committee/Ar. Pragya Singh.webp";
import memberVandana from "../../assets/LAF/Membership & Directory Committee/Ar. Vandana Srivastav.webp";
import memberPrabhawati from "../../assets/LAF/Membership & Directory Committee/Ar. Prabhawati Suri.webp";
import mediaRepunjay from "../../assets/LAF/Media & Protocol Committee/Ar. Repunjay Patel.webp";
import mediaPrashant from "../../assets/LAF/Media & Protocol Committee/Ar. Prashant Singh.webp";
import govtAsheesh from "../../assets/LAF/Governments Interaction & Professional Practice/Ar. Asheesh Srivastava.webp";
import govtAnupam from "../../assets/LAF/Governments Interaction & Professional Practice/Ar. Anupam Mittal.webp";
import legalAninda from "../../assets/LAF/Legal Committee/Ar.Aninda Sircar.webp";
import legalNeeraj from "../../assets/LAF/Legal Committee/Ar. Neeraj Kushwaha.webp";
import spouseAnita from "../../assets/LAF/Spouses Committee/Ar. Anita Srivastava.webp";
import spouseSmita from "../../assets/LAF/Spouses Committee/Ar. Smita Nigam.webp";
import lsrRajneesh from "../../assets/LAF/LSR Committee (LAA Social Responsibility)/Ar. Rajneesh Agarwal.webp";
import lsrAnshu from "../../assets/LAF/LSR Committee (LAA Social Responsibility)/ANSHU SINGH.webp";

// LAF Logo
import lafLogo from "../../assets/images/logo-transparent.webp";

import con1Img from "../../assets/images/co-3.webp";
import con2Img from "../../assets/images/conveners-2.webp";
import con3Img from "../../assets/images/conveners-3.webp";

import cc1Img from "../../assets/images/cc-1.webp";
import cc2Img from "../../assets/images/cc-2.webp";
import cc3Img from "../../assets/images/co-10.webp";
import cc4Img from "../../assets/images/cc-4.webp";
import cc5Img from "../../assets/images/cc-5.webp";
import cc6Img from "../../assets/images/cc-6.webp";

import jc1Img from "../../assets/images/am1-1.webp";
import jc2Img from "../../assets/images/am1-2.webp";
import jc3Img from "../../assets/images/am2-1.webp";
import jc4Img from "../../assets/images/am2-2.webp";
import jc5Img from "../../assets/images/am3-1.webp";
import jc6Img from "../../assets/images/am3-2.webp";
import jc7Img from "../../assets/images/am4-1.webp";
import jc8Img from "../../assets/images/am4-2.webp";
import jc9Img from "../../assets/images/co-9.webp";
import jc10Img from "../../assets/images/am5-2.webp";
import jc11Img from "../../assets/images/am6-1.webp";
import jc12Img from "../../assets/images/committee1.webp";
import jc13Img from "../../assets/images/am7-1.webp";
import jc14Img from "../../assets/images/am7-2.webp";
import jc15Img from "../../assets/images/am8-1.webp";
import jc16Img from "../../assets/images/am9-1.webp";
import jc17Img from "../../assets/images/am9-2.webp";
import jc18Img from "../../assets/images/am10-1.webp";
import jc19Img from "../../assets/images/am10-2.webp";
import jc20Img from "../../assets/images/am11-1.webp";
import jc21Img from "../../assets/images/am11-2.webp";
import jc22Img from "../../assets/images/am12-1.webp";
import jc23Img from "../../assets/images/am12-2.webp";
import jc24Img from "../../assets/images/am13-1.webp";
import jc25Img from "../../assets/images/am13-2.webp";
import jc26Img from "../../assets/images/am14-2.webp";
import jc27Img from "../../assets/images/am16-2.webp";
import jc28Img from "../../assets/images/am17-1.webp";
import jc29Img from "../../assets/images/am17-2.webp";

import sp2Img from "../../assets/images/54f541e1-f042-457e-9b6c-aedadf9664ef.webp";

// Helper function to resolve convener circular photo avatars
const getMemberAvatar = (name, customImg) => {
  if (customImg) return customImg;
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=181716&color=D4AF37&bold=true&size=128`;
};

// Helper function to generate member initials for avatar placeholder
const getMemberInitials = (name) => {
  if (!name) return "LAF";
  const cleanName = name
    .replace(/^(Ar\.|Dr\.|Er\.|Prof\.|Mr\.|Mrs\.|Ms\.)\s*/i, "")
    .trim();
  const words = cleanName.split(/\s+/).filter(Boolean);
  if (words.length === 0) return "LAF";
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

// Member Card Component
const MemberCard = ({ member, index }) => {
  const [imgError, setImgError] = useState(false);
  const initials = getMemberInitials(member.name);
  const formattedIndex = index < 10 ? `0${index}` : index;

  return (
    <div className="group relative flex flex-col items-center justify-between p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-white hover:bg-[#FDFBF7] border border-[#E6DFD3] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer text-center w-full h-full hover:-translate-y-1 overflow-hidden">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full p-1 bg-gradient-to-b from-[#E6DFD3] via-[#D4AF37]/50 to-[#E6DFD3] transition-all duration-300 shadow-sm group-hover:shadow-[0_0_22px_rgba(216,35,42,0.2)] mb-3 sm:mb-4">
        <div className="w-full h-full rounded-full bg-white overflow-hidden border-2 border-white flex items-center justify-center">
          {member.image && !imgError ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2D2426] via-[#1D171A] to-[#120F11] flex flex-col items-center justify-center border-2 border-white/90 shadow-inner group-hover:border-white transition-colors duration-300">
              <span className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#FDEEE9] group-hover:text-amber-200 tracking-wider select-none">
                {initials}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="w-full flex-1 flex flex-col justify-center">
        <span
          className="text-[9.5px] font-mono tracking-widest font-bold uppercase block truncate"
          style={{
            background: "#D8232A",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          LAF 3.0 · #{formattedIndex}
        </span>
        <h4 className="font-serif text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#D8232A] transition-colors mt-1 leading-snug line-clamp-2 min-h-[2.5rem] flex items-center justify-center">
          {member.name}
        </h4>
        <p className="text-[11px] sm:text-xs text-neutral-500 font-medium mt-1 truncate">
          {member.role}
        </p>
      </div>

      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
        style={{
          background: "#D8232A",
        }}
      />
    </div>
  );
};

// Committee Slider Row Component
const CommitteeSliderRow = ({ committee, index }) => {
  const IconComponent = committee.icon || GraduationCap;

  const allMembers = React.useMemo(() => {
    const convenersList = (committee.conveners || []).map((c) => ({
      name: c.name,
      role: c.role || "Convener",
      image: c.image || null,
    }));

    const membersList = (committee.members || []).map((m) => {
      if (typeof m === "string") {
        return {
          name: m,
          role: "Committee Member",
          image: null,
        };
      }
      return {
        name: m.name,
        role: m.role || "Committee Member",
        image: m.image || null,
      };
    });

    return [...convenersList, ...membersList];
  }, [committee]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="mb-14"
    >
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6DFD3] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-3xl"
          style={{
            background: "#D8232A",
          }}
        />
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-400/5 to-purple-400/5 rounded-full blur-3xl pointer-events-none" />

        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EC2656] animate-pulse shrink-0" />
            <span
              className="text-xs font-mono font-bold tracking-[0.3em] uppercase"
              style={{
                background: "#D8232A",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {committee.id} · {committee.category?.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-gradient-to-br from-orange-50 to-purple-50 border border-orange-100/80 flex items-center justify-center text-[#D8232A] shrink-0 shadow-2xs">
              <IconComponent size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 group-hover:text-[#D8232A] transition-colors">
              {committee.title}
            </h3>
          </div>

          {committee.subtitle && (
            <p className="mt-2 text-xs sm:text-sm font-mono tracking-wider text-neutral-500 uppercase">
              {committee.subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4 self-start md:self-auto shrink-0">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#D8232A] uppercase bg-gradient-to-r from-orange-50 to-purple-50 px-4 py-2 rounded-full border border-orange-100 shadow-2xs">
            MEMBERS ({allMembers.length.toString().padStart(2, "0")})
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
        {allMembers.map((member, idx) => (
          <MemberCard key={member.name + idx} member={member} index={idx + 1} />
        ))}
      </div>
    </motion.div>
  );
};

// ==========================================
// DATA
// ==========================================

const mentorData = {
  name: "Ar. D.C. Thapar",
  role: "Honorary Mentor",
  badge: "MENTOR",
  tag: "LAA GUIDANCE",
  image: mentorImage,
  quote: "Experience that shapes the next generation of architects.",
};

const patronsData = [
  {
    name: "Ar. Ashok Kumar",
    role: "Patron",
    badge: "PATRON",
    image: con4Img,
  },
  {
    name: "Ar. Ajai Behl",
    role: "Patron",
    badge: "PATRON",
    image: patron2Img,
  },
  {
    name: "Dr. Vandana Sehgal",
    role: "Patron",
    badge: "PATRON",
    image: patron3Img,
  },
  {
    name: "Ar. Sanjay Sinha",
    role: "Patron",
    badge: "PATRON",
    image: patron4Img,
  },
];

const committeesData = [
  {
    id: "01",
    title: "Academic Committee",
    category: "Education & Culture",
    icon: GraduationCap,
    subtitle: "Knowledge · Education · Pedagogy",
    conveners: [
      { name: "Ar. Suparna Sircar", role: "Convener", image: sp2Img },
      { name: "Dr. Ritu Gulati", role: "Co-Convener", image: jc12Img },
    ],
    members: [
      "Ar. Vivek Karmakar",
      "Ar. Mohit Kumar Agarwal",
      "Ar. Gaurav Singh",
      "Ar. Shalini Diwaker",
      "Ar. Juwairia Qamruddin",
    ],
  },
  {
    id: "02",
    title: "Edu-Formation Committee",
    category: "Education & Culture",
    icon: BookOpen,
    subtitle: "Skill Development · Professional Training",
    conveners: [
      { name: "Ar. D. P. Singh", role: "Convener", image: con1Img },
      { name: "Ar. Deepti Pandey Rana", role: "Co-Convener", image: jc24Img },
    ],
    members: [
      "Ar. Deepti Sagar",
      "Ar. Amit Raj",
      "Ar. Vaibhav Kulshrestha",
      "Ar. Prashant Tiwari",
      "Ar. Kabir Kumar",
    ],
  },
  {
    id: "03",
    title: "Sports Committee",
    category: "Community & Welfare",
    icon: Trophy,
    subtitle: "Community Fitness · Tournaments",
    conveners: [
      { name: "Ar. Shubhendra Bajpayee", role: "Convener", image: cc3Img },
      { name: "Ar. Sandeep Negi", role: "Co-Convener", image: jc9Img },
    ],
    members: [
      "Ar. Vinay Vishwkarma",
      "Ar. Soharab Khan",
      "Ar. Pallav Pratiyogi",
      "Ar. Chandan Bhardwaj",
    ],
  },
  {
    id: "04",
    title: "Hospitality & Welfare Committee",
    category: "Community & Welfare",
    icon: Coffee,
    subtitle: "Member Relations · Guest Experience",
    conveners: [
      { name: "Ar. Vaibhav Goel", role: "Convener", image: cc4Img },
      { name: "Ar. Aviral Agarwal", role: "Co-Convener", image: jc7Img },
    ],
    members: [
      "Ar. Kalankar Raj Gupta",
      "Ar. Salman Nasir",
      "Ar. Pankaj Singh",
      "Ar. Ravi Verma",
    ],
  },
  {
    id: "05",
    title: "Cultural & Exhibition Committee",
    category: "Education & Culture",
    icon: Palette,
    subtitle: "Art · Heritage · Architectural Exhibits",
    conveners: [
      { name: "Ar. Namit Tondon", role: "Convener", image: cc5Img },
      { name: "Ar. Nishant Upadhyay", role: "Co-Convener", image: jc27Img },
    ],
    members: [
      "Ar. Rohit Agarwal",
      "Dr. Anjaneya Sharma",
    ],
  },
  {
    id: "06",
    title: "Event Management Committee",
    category: "Operations & Media",
    icon: CalendarDays,
    subtitle: "Event Operations · Logistics & Hosting",
    conveners: [
      { name: "Ar. Shipra Singh", role: "Convener", image: jc11Img },
      { name: "Ar. Krishna Mohan Prajapati", role: "Co-Convener", image: cc6Img },
    ],
    members: [
      "Ar. Shishir Srivastva",
      "Ar. Abhishek Baidya",
      "Ar. Ashutosh Gupta",
    ],
  },
  {
    id: "07",
    title: "Membership & Directory Committee",
    category: "Operations & Media",
    icon: UsersRound,
    subtitle: "Network Growth · Member Registry",
    conveners: [
      { name: "Ar. Awadhesh Verma", role: "Convener", image: con2Img },
      { name: "Ar. Imran Khan", role: "Co-Convener", image: jc3Img },
    ],
    members: [
      "Ar. Alok Kumar",
      "Ar. Vishal Mathur",
    ],
  },
  {
    id: "08",
    title: "Media & Protocol Committee",
    category: "Operations & Media",
    icon: Newspaper,
    subtitle: "Press Relations · Branding & Outreach",
    conveners: [
      { name: "Ar. Prafull Gupta", role: "Convener", image: cc1Img },
      { name: "Ar. Priyanka Rastogi", role: "Co-Convener", image: jc25Img },
    ],
    members: [
      "Ar. Rohit Verma",
      "Ar. Shrish Pratap Singh",
      "Ar. Vandana Patel",
    ],
  },
  {
    id: "09",
    title: "Governments Interaction & Professional Practice Committee",
    category: "Operations & Media",
    icon: PenLine,
    subtitle: "Journal Publications · Design Standards",
    conveners: [
      { name: "Ar. Sushil Gupta", role: "Convener", image: cc3Img },
      { name: "Ar. Shiyak Singh", role: "Co-Convener", image: jc10Img },
    ],
    members: [
      "Ar. Saurav Verma",
      "Ar. Rajarshi",
      "Ar. Sayan Munshi",
    ],
  },
  {
    id: "10",
    title: "Legal Committee",
    category: "Practice & Governance",
    icon: Scale,
    subtitle: "Governance · Advisory & Professional Ethics",
    conveners: [
      { name: "Ar. Sanjeev Kumar Singh", role: "Convener", image: cc4Img },
      { name: "Ar. Arvind Gupta", role: "Co-Convener", image: jc23Img },
    ],
    members: [
      "Ar. Ashish Gupta",
      "Ar. Nitin Singh",
      "Ar. Alok Srivastava",
    ],
  },
  {
    id: "11",
    title: "Spouses Committee",
    category: "Community & Welfare",
    icon: HeartHandshake,
    subtitle: "Community Bonding · Family Welfare",
    conveners: [
      { name: "Ar. Vivek Agarwal", role: "Convener", image: con3Img },
      { name: "Ar. Faraj Ahmad Usmani", role: "Co-Convener", image: jc3Img },
    ],
    members: [
      "Ar. Umesh Gupta",
      "Ar. Gaurav Gupta",
      "Ar. Narayan Pandey",
    ],
  },
  {
    id: "12",
    title: "LSR Committee (LAA Social Responsibility)",
    category: "Community & Welfare",
    icon: Sparkles,
    subtitle: "Civic Outreach · Sustainable Urban Impact",
    conveners: [
      { name: "Ar. Shikhar Singh", role: "Convener", image: jc16Img },
      { name: "Ar. Roli Singh", role: "Co-Convener", image: jc17Img },
    ],
    members: [
      "Ar. Akhilesh Pal",
      "Ar. Utkarsh Shukla",
    ],
  },
  {
    id: "13",
    title: "Governments Interaction & Professional Practice",
    category: "Practice & Governance",
    icon: Landmark,
    subtitle: "Urban Policy · Govt Liaison & Standards",
    conveners: [
      { name: "Ar. Anupam Mittal", role: "Convener", image: con3Img },
      { name: "Ar. Rajat Kant Mittal", role: "Co-Convener", image: con1Img },
    ],
    members: [
      "LAA Governance Wing",
      "Policy & Urban Affairs Panel",
    ],
  },
];

const laaCommitteesDisplay = [
  {
    id: "acad",
    title: "Academic Committee",
    leads: [
      {
        name: "Ar. Suparna Sircar",
        image: acadSuparna,
        members: ["Ar. Vivek Karmakar", "Ar. Gaurav Singh", "Ar. Juwairia Qamruddin"],
      },
      {
        name: "Dr. Ritu Gulati",
        image: acadRitu,
        members: ["Ar. Mohit Kumar Agarwal", "Ar. Shalini Diwaker"],
      },
    ],
  },
  {
    id: "edu",
    title: "Edu-Formation Committee",
    leads: [
      {
        name: "Ar. D. P. Singh",
        image: eduDPSingh,
        members: ["Ar. Amit Raj", "Ar. Vaibhav Kulshrestha", "Ar. Kabir Kumar"],
      },
      {
        name: "Ar. Deepti Pandey Rana",
        image: eduDeepti,
        members: ["Ar. Deepti Sagar", "Ar. Prashant Tiwari"],
      },
    ],
  },
  {
    id: "sports",
    title: "Sports Committee",
    leads: [
      {
        name: "Ar. Shubhendra Bajpayee",
        image: sportsShubhendra,
        members: ["Ar. Vinay Vishwkarma", "Ar. Pallav Pratiyogi"],
      },
      {
        name: "Ar. Sandeep Negi",
        image: sportsSandeep,
        members: ["Ar. Soharab Khan", "Ar. Chandan Bhardwaj"],
      },
    ],
  },
  {
    id: "hosp",
    title: "Hospitality & Welfare Committee",
    leads: [
      {
        name: "Ar. Vaibhav Goel",
        image: hospVaibhav,
        members: ["Ar. Kalankar Raj Gupta", "Ar. Pankaj Singh"],
      },
      {
        name: "Ar. Aviral Agarwal",
        image: hospAviral,
        members: ["Ar. Salman Nasir", "Ar. Ravi Verma"],
      },
    ],
  },
  {
    id: "cult",
    title: "Cultural & Exhibition Committee",
    leads: [
      {
        name: "Ar. Shubhra Mittal",
        image: cultShubhra,
        members: ["Ar. Namit Tondon", "Ar. Rohit Agarwal"],
      },
      {
        name: "Ar. Rohit Parmar",
        image: cultRohit,
        members: ["Ar. Nishant Upadhyay", "Dr. Anjaneya Sharma"],
      },
    ],
  },
  {
    id: "event",
    title: "Event Management Committee",
    leads: [
      {
        name: "Ar. Avinash Ghai",
        image: eventAvinash,
        members: ["Ar. Shipra Singh", "Ar. Shishir Srivastava", "Ar. Ashutosh Gupta"],
      },
      {
        name: "Ar. Pragya Singh",
        image: eventPragya,
        members: ["Ar. Krishna Mohan Prajapati", "Ar. Abhishek Baidya"],
      },
    ],
  },
  {
    id: "member",
    title: "Membership & Directory Committee",
    leads: [
      {
        name: "Ar. Vandana Srivastva",
        image: memberVandana,
        members: ["Ar. Awadhesh Verma", "Ar. Alok Kumar"],
      },
      {
        name: "Ar. Prabhawati Suri",
        image: memberPrabhawati,
        members: ["Ar. Imran Khan", "Ar. Vishal Mathur"],
      },
    ],
  },
  {
    id: "media",
    title: "Media & Protocol Committee",
    leads: [
      {
        name: "Ar. Repunjay Patel",
        image: mediaRepunjay,
        members: ["Ar. Prafull Gupta", "Ar. Rohit Verma", "Ar. Vandana Patel"],
      },
      {
        name: "Ar. Prashant Singh",
        image: mediaPrashant,
        members: ["Ar. Priyanka Rastogi", "Ar. Shrish Pratap Singh"],
      },
    ],
  },
  {
    id: "govt",
    title: "Governments Interaction & Professional Practice Committee",
    leads: [
      {
        name: "Ar. Asheesh Srivastava",
        image: govtAsheesh,
        members: [],
      },
      {
        name: "Ar. Anupam Mittal",
        image: govtAnupam,
        members: [],
      },
    ],
  },
  {
    id: "legal",
    title: "Legal Committee",
    leads: [
      {
        name: "Ar. Aninda Sircar",
        image: legalAninda,
        members: ["Ar. Sanjeev Kumar Singh", "Ar. Ashish Gupta", "Ar. Alok Srivastava"],
      },
      {
        name: "Ar. Neeraj Kushwaha",
        image: legalNeeraj,
        members: ["Ar. Arvind Gupta", "Ar. Nitin Singh"],
      },
    ],
  },
  {
    id: "spouse",
    title: "Spouses Committee",
    leads: [
      {
        name: "Ar. Anita Srivastava",
        image: spouseAnita,
        members: ["Ar. Vivek Agarwal", "Ar. Umesh Gupta", "Ar. Narayan Pandey"],
      },
      {
        name: "Ar. Smita Nigam",
        image: spouseSmita,
        members: ["Ar. Faraj Ahmad Usmani", "Ar. Gaurav Gupta"],
      },
    ],
  },
  {
    id: "lsr",
    title: "LSR Committee ( LAA Social Responsibility)",
    leads: [
      {
        name: "Ar. Rajneesh Agarwal",
        image: lsrRajneesh,
        members: ["Ar. Shikhar Singh", "Ar. Akhilesh Pal"],
      },
      {
        name: "Ar. Anshu Singh",
        image: lsrAnshu,
        members: ["Ar. Roli Singh", "Ar. Utkarsh Shukla"],
      },
    ],
  },
];

const categories = ["All", "Education & Culture", "Operations & Media", "Practice & Governance", "Community & Welfare"];

const AboutLAASection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCommittees = committeesData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.conveners &&
        item.conveners.some((c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase())
        )) ||
      (item.members &&
        item.members.some((m) =>
          (typeof m === "string" ? m : m.name)
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        ));
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="about-laa"
      className="relative overflow-hidden bg-[#FAF8F5] text-[#171717] pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 font-sans"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(234,88,12,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(234,88,12,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute -left-40 top-40 w-[500px] h-[500px] rounded-full border border-[#F97316]/10" />
        <div className="absolute -left-20 top-60 w-[350px] h-[350px] rounded-full border border-[#F97316]/10" />
        <div className="absolute -right-40 bottom-20 w-[550px] h-[550px] rounded-full border border-[#F97316]/10" />
        <div className="absolute right-[10%] top-[24%] h-[320px] w-[320px] rounded-full border border-[#F97316]/10" />
        <div className="absolute left-[8%] top-[15%] h-24 w-24 border-l border-t border-[#EA580C]/15" />
        <div className="absolute bottom-[10%] right-[8%] h-24 w-24 border-b border-r border-[#EA580C]/15" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-3 sm:px-8 lg:px-12">
                
        {/* =====================================================
            ABOUT LAA HERO PRESENTATION CARD
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white rounded-[32px] sm:rounded-[38px] border border-[#FED7AA]/80 shadow-[0_8px_36px_rgba(234,88,12,0.06)] p-6 sm:p-10 lg:p-12 overflow-hidden"
        >

          {/* MAIN CONTENT */}
          <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10 xl:gap-12">
            {/* LEFT COLUMN */}
            <div className="w-full lg:w-[46%] xl:w-[44%] flex flex-col items-center lg:items-start text-center lg:text-left justify-between pt-2">
              <div className="w-full flex flex-col items-start gap-1.5 mb-2">
                <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
                  About  LAA
                </h2>
                <p className="mt-2 text-xs sm:text-[12.5px] font-mono font-bold uppercase tracking-[0.28em] text-neutral-800">
                  LUCKNOW ARCHITECTS ASSOCIATION
                </p>
              </div>

              {/* Image */}
              <div className="w-full mt-6 sm:mt-7 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-[#FED7AA] group relative h-48 sm:h-56 lg:h-52 xl:h-56">
                <img
                  src={lucknowImg}
                  alt="Famous Lucknow Heritage Monument - Rumi Darwaza"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white pointer-events-none">
                  <span className="text-[11px] font-semibold tracking-wide drop-shadow-sm">
                    Heritage of Lucknow
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#FED7AA] bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
                    Est. 1960s
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-[1.5px] bg-[#F97316] self-stretch my-2 shrink-0" />

            {/* RIGHT COLUMN */}
            <div className="flex-1 flex flex-col justify-between pt-1">
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15.5px] leading-relaxed text-neutral-800 font-normal">
                  Founded in the late 1960s by a group of distinguished architects, the{' '}
                  <strong className="font-bold text-[#D91A5B]">
                    Lucknow Architects Association (LAA)
                  </strong>
                  , is a forum for empowering individuals working in terms of professional development,
                  business development and net-working, and leadership in our community.
                </p>

                <p className="text-[14px] sm:text-[15.5px] leading-relaxed text-neutral-800 font-normal">
                  Since, its founding, the organization has expanded not only physically, with a rise
                  in the number of individual members and member firms, but also significantly in the
                  community's perception of it, thanks to its programs, opportunities for networking,
                  and community awards.
                </p>

                <div className="bg-[#FFF8F4] border border-[#FDBA74]/50 rounded-2xl p-4 sm:p-4.5 flex items-center gap-4 mt-5 shadow-2xs">
                  <div className="shrink-0 text-[#EA580C]">
                    <UsersRound size={28} strokeWidth={2.2} />
                  </div>
                  <div className="w-px h-10 bg-orange-300 shrink-0" />
                  <p className="font-serif italic text-sm sm:text-[14.5px] text-[#831843] leading-relaxed font-medium">
                    LAA provides a common forum for co-operation among individuals and businesses in the
                    architectural community and among building specialists.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= 3 STATS HORIZONTAL STRIP ================= */}
          {/* 🚀 FIX: Changed text colors to Red (#D8232A) */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-10 border-t border-[#FED7AA]/60 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4 items-center w-full">
            {/* STAT 1 */}
            <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-5 md:pl-4 lg:pl-8">
              <div className="w-14 h-14 rounded-2xl bg-white border border-orange-200/90 shadow-sm flex items-center justify-center shrink-0">
                <CalendarDays className="w-7 h-7 text-[#D8232A]" strokeWidth={2} />
              </div>
              <div className="w-[165px] sm:w-[185px] md:w-auto text-left">
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-[#D8232A] font-bold">
                  ESTABLISHED
                </span>
                <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#D8232A] leading-tight mt-0.5">
                  1960s
                </span>
                <div className="w-14 h-[3.5px] rounded-full bg-[#D8232A] mt-1.5" />
              </div>
            </div>

            {/* STAT 2 */}
            <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-5 md:border-l md:border-neutral-200/80 md:pl-8">
              <div className="w-14 h-14 rounded-2xl bg-white border border-orange-200/90 shadow-sm flex items-center justify-center shrink-0">
                <UsersRound className="w-7 h-7 text-[#D8232A]" strokeWidth={2} />
              </div>
              <div className="w-[165px] sm:w-[185px] md:w-auto text-left">
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-[#D8232A] font-bold">
                  COMMITTEES
                </span>
                <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#D8232A] leading-tight mt-0.5">
                  13 Wings
                </span>
                <div className="w-14 h-[3.5px] rounded-full bg-[#D8232A] mt-1.5" />
              </div>
            </div>

            {/* STAT 3 */}
            <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-5 md:border-l md:border-neutral-200/80 md:pl-8">
              <div className="w-14 h-14 rounded-2xl bg-white border border-purple-200/90 shadow-sm flex items-center justify-center shrink-0">
                <Landmark className="w-7 h-7 text-[#D8232A]" strokeWidth={2} />
              </div>
              <div className="w-[165px] sm:w-[185px] md:w-auto text-left">
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-[#D8232A] font-bold">
                  PILLARS
                </span>
                <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#D8232A] leading-tight mt-0.5">
                  5 Leadership
                </span>
                <div className="w-14 h-[3.5px] rounded-full bg-[#D8232A] mt-1.5" />
              </div>
            </div>
          </div>

          {/* BOTTOM TAG STRIP */}
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 select-none px-4">
            <span className="hidden sm:block w-12 sm:w-20 h-px bg-orange-300" />
            <span className="text-[11px] sm:text-[12.5px] font-mono font-bold tracking-[0.14em] sm:tracking-[0.28em] text-neutral-800 uppercase">
              ARCHITECTURE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] shrink-0" />
            <span className="text-[11px] sm:text-[12.5px] font-mono font-bold tracking-[0.14em] sm:tracking-[0.28em] text-neutral-800 uppercase">
              COMMUNITY
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] shrink-0" />
            <span className="text-[11px] sm:text-[12.5px] font-mono font-bold tracking-[0.14em] sm:tracking-[0.28em] text-neutral-800 uppercase">
              LEADERSHIP
            </span>
            <span className="hidden sm:block w-12 sm:w-20 h-px bg-orange-300" />
          </div>
        </motion.div>

        {/* 🚀 FIX: REMOVED "ORGANIZATIONAL WINGS & PILLARS" SECTION ENTIRELY */}

        {/* =====================================================
            MENTOR & PATRONS SHOWCASE (RED CURVED ARCH DESIGN)
        ====================================================== */}
        <div className="mt-14 sm:mt-16 mb-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 sm:gap-14 lg:gap-24 xl:gap-28 max-w-7xl mx-auto">
            {/* 1. MENTOR SECTION */}
            <div className="flex flex-col items-center shrink-0">
              <h3 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[#1E3A8A] text-center mb-6 sm:mb-8 tracking-tight">
                Mentor
              </h3>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col items-center text-center w-full max-w-[160px]"
              >
                {/* Red Curved Arch Frame (Equal Box) */}
                <div className="relative w-28 h-40 sm:w-32 sm:h-44 md:w-36 md:h-48 rounded-t-full border-2 border-[#D8232A] bg-white overflow-hidden flex items-end justify-center shadow-xs group-hover:shadow-[0_8px_24px_rgba(216,35,42,0.18)] transition-all duration-300">
                  <img
                    src={mentorData.image}
                    alt={mentorData.name}
                    className="w-full aspect-square object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Name Only */}
                <div className="mt-3.5 w-full flex flex-col items-center">
                  <h4 className="font-sans font-bold text-xs sm:text-sm md:text-base text-neutral-800 group-hover:text-[#D8232A] transition-colors leading-snug">
                    {mentorData.name}
                  </h4>
                </div>
              </motion.div>
            </div>

            {/* 2. PATRONS SECTION */}
            <div className="flex flex-col items-center">
              <h3 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[#1E3A8A] text-center mb-6 sm:mb-8 tracking-tight">
                Patrons
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
                {patronsData.map((person, index) => (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    className="group flex flex-col items-center text-center w-full max-w-[160px]"
                  >
                    {/* Red Curved Arch Frame (Equal Box) */}
                    <div className="relative w-28 h-40 sm:w-32 sm:h-44 md:w-36 md:h-48 rounded-t-full border-2 border-[#D8232A] bg-white overflow-hidden flex items-end justify-center shadow-xs group-hover:shadow-[0_8px_24px_rgba(216,35,42,0.18)] transition-all duration-300">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full aspect-square object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Name Only */}
                    <div className="mt-3.5 w-full flex flex-col items-center">
                      <h4 className="font-sans font-bold text-xs sm:text-sm md:text-base text-neutral-800 group-hover:text-[#D8232A] transition-colors leading-snug">
                        {person.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            LAA COMMITTEES FOR LAF 3.0 SHOWCASE
        ====================================================== */}
        <div id="committees" className="mt-20 sm:mt-24">
          {/* HEADER: THEMED RED BADGE + LAF 3.0 LOGO */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[#E6DFD3] mb-12 sm:mb-14">
            <div>
              <div className="inline-block bg-[#D8232A] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl shadow-xs">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                  LAA Committee
                </h2>
                <div className="text-xs sm:text-sm font-bold text-white/90 tracking-wide mt-0.5">
                  for LAF 3.0
                </div>
              </div>
            </div>

            {/* Right: LAF Logo */}
            <div className="hidden sm:flex items-center">
              <img
                src={lafLogo}
                alt="Lucknow Architecture Festival LAF 3.0"
                className="h-11 sm:h-13 md:h-14 w-auto object-contain drop-shadow-sm"
              />
            </div>
          </div>

          {/* 3 COLUMNS PER ROW GRID (DESIGNED ONLY FOR FOLDERS PRESENT) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {laaCommitteesDisplay.map((committee, idx) => (
              <motion.div
                key={committee.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                {/* Committee Title */}
                <h3 className="font-sans font-bold text-lg sm:text-xl text-[#1E3A8A] text-center mb-6 min-h-[3rem] flex items-center justify-center">
                  {committee.title}
                </h3>

                {/* 2 Leads in Red Curved Arch Boxes side-by-side */}
                <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full max-w-sm justify-items-center">
                  {committee.leads.map((lead) => (
                    <div key={lead.name} className="group flex flex-col items-center text-center w-28 sm:w-32 md:w-36">
                      {/* Red Curved Arch Frame (Matching Intellect Council Box Size) */}
                      <div className="relative w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-t-full border-2 border-[#D8232A] bg-white overflow-hidden flex items-end justify-center shadow-xs group-hover:shadow-[0_8px_24px_rgba(216,35,42,0.18)] transition-all duration-300">
                        <img
                          src={lead.image}
                          alt={lead.name}
                          className="w-full h-[84%] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Lead Name */}
                      <h4 className="mt-3 font-sans font-bold text-xs sm:text-[13px] text-neutral-800 group-hover:text-[#D8232A] transition-colors leading-tight text-center">
                        {lead.name}
                      </h4>

                      {/* Members List Under Lead */}
                      {lead.members && lead.members.length > 0 && (
                        <div className="mt-2 flex flex-col items-center gap-0.5 w-full">
                          {lead.members.map((m) => (
                            <p
                              key={m}
                              className="text-[11px] sm:text-xs text-neutral-600 leading-snug text-center"
                            >
                              {m}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CLOSING STATEMENT BANNER (THEMED RED) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 sm:mt-16 border-y border-[#E6DFD3] py-8 sm:py-10"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-[#D8232A]">
                THE LAA VISION
              </span>

              <h3 className="mt-3 max-w-3xl font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#171717]">
                Building a stronger architectural community through{" "}
                <span className="font-serif italic font-bold text-[#D8232A]">
                  ideas, collaboration and shared purpose.
                </span>
              </h3>
            </div>

            <a
              href="#committees"
              className="group flex items-center justify-between bg-[#D8232A] hover:bg-[#BF1E24] border border-[#D8232A] px-6 py-4.5 text-white transition-all duration-300 shadow-md hover:shadow-[0_10px_28px_rgba(216,35,42,0.35)] rounded-2xl relative overflow-hidden min-w-[260px]"
            >
              <div>
                <span className="block text-[9.5px] font-mono font-bold tracking-[0.25em] text-white/80 uppercase">
                  STRUCTURE
                </span>
                <span className="mt-0.5 block text-xs sm:text-sm font-bold tracking-wide text-white">
                  EXPLORE ALL COMMITTEES
                </span>
              </div>
              <div className="w-9 h-9 rounded-xl bg-white/20 border border-white/30 group-hover:bg-white group-hover:text-[#D8232A] flex items-center justify-center transition-all duration-300 text-white ml-4">
                <ArrowUpRight size={18} />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutLAASection;