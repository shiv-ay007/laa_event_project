import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Search,
  GraduationCap,
  BookOpen,
  Trophy,
  Coffee,
  Palette,
  CalendarDays,
  UsersRound,
  Newspaper,
  PenLine,
  Scale,
  HeartHandshake,
  Sparkles,
  Landmark,
} from "lucide-react";

// Images imports for Committees
import con1Img from "../assets/images/co-3.png";
import con2Img from "../assets/images/conveners-2.webp";
import con3Img from "../assets/images/conveners-3.webp";

import cc1Img from "../assets/images/cc-1.webp";
import cc3Img from "../assets/images/co-10.png";
import cc4Img from "../assets/images/cc-4.webp";
import cc5Img from "../assets/images/cc-5.webp";
import cc6Img from "../assets/images/cc-6.webp";

import jc3Img from "../assets/images/am2-1.webp";
import jc7Img from "../assets/images/am4-1.webp";
import jc9Img from "../assets/images/co-9.png";
import jc10Img from "../assets/images/am5-2.webp";
import jc11Img from "../assets/images/am6-1.webp";
import jc12Img from "../assets/images/committee1.webp";
import jc16Img from "../assets/images/am9-1.webp";
import jc17Img from "../assets/images/am9-2.webp";
import jc23Img from "../assets/images/am12-2.webp";
import jc24Img from "../assets/images/am13-1.webp";
import jc25Img from "../assets/images/am13-2.webp";
import jc27Img from "../assets/images/am16-2.webp";

import sp2Img from "../assets/images/54f541e1-f042-457e-9b6c-aedadf9664ef.webp";

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
    <div className="group relative flex flex-col items-center justify-between p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-white hover:bg-[#FDFBF7] border border-[#E6DFD3] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(236,38,86,0.12)] transition-all duration-300 cursor-pointer text-center w-full h-full hover:-translate-y-1 overflow-hidden">
      {/* Avatar circular frame */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full p-1 bg-gradient-to-b from-[#FB7801] via-[#EC2656] to-[#930777] transition-all duration-300 shadow-sm group-hover:shadow-[0_0_22px_rgba(236,38,86,0.25)] mb-3 sm:mb-4">
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
            background: "linear-gradient(90deg, #FB7801, #930777)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          LAF 3.0 · #{formattedIndex}
        </span>
        <h4 className="font-serif text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#EC2656] transition-colors mt-1 leading-snug line-clamp-2 min-h-[2.5rem] flex items-center justify-center">
          {member.name}
        </h4>
        <p className="text-[11px] sm:text-xs text-neutral-500 font-medium mt-1 truncate">
          {member.role}
        </p>
      </div>

      {/* Bottom Shimmer Line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
        style={{
          background: "linear-gradient(90deg, #FB7801, #EC2656, #930777, #3C086E)",
        }}
      />
    </div>
  );
};

// Committee Slider Row Component
const CommitteeSliderRow = ({ committee, index }) => {
  const IconComponent = committee.icon || GraduationCap;

  const allMembers = useMemo(() => {
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
      {/* COMMITTEE HEADING CARD */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6DFD3] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 relative overflow-hidden">
        {/* Theme Top Accent Bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-3xl"
          style={{
            background:
              "linear-gradient(90deg, #FB7801 0%, #EC2656 25%, #930777 75%, #3C086E 100%)",
          }}
        />

        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-400/5 to-purple-400/5 rounded-full blur-3xl pointer-events-none" />

        <div>
          {/* Top Category Tag */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EC2656] animate-pulse shrink-0" />
            <span
              className="text-xs font-mono font-bold tracking-[0.3em] uppercase"
              style={{
                background: "linear-gradient(90deg, #FB7801, #930777)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {committee.id} · {committee.category?.toUpperCase()}
            </span>
          </div>

          {/* Heading + Icon */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-gradient-to-br from-orange-50 to-purple-50 border border-orange-100/80 flex items-center justify-center text-[#EC2656] shrink-0 shadow-2xs">
              <IconComponent size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 group-hover:text-[#EC2656] transition-colors">
              {committee.title}
            </h3>
          </div>

          {/* Subtitle */}
          {committee.subtitle && (
            <p className="mt-2 text-xs sm:text-sm font-mono tracking-wider text-neutral-500 uppercase">
              {committee.subtitle}
            </p>
          )}
        </div>

        {/* MEMBER COUNT BADGE */}
        <div className="flex items-center gap-4 self-start md:self-auto shrink-0">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#EC2656] uppercase bg-gradient-to-r from-orange-50 to-purple-50 px-4 py-2 rounded-full border border-orange-100 shadow-2xs">
            MEMBERS ({allMembers.length.toString().padStart(2, "0")})
          </span>
        </div>
      </div>

      {/* COMMITTEE MEMBERS RESPONSIVE GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
        {allMembers.map((member, idx) => (
          <MemberCard key={member.name + idx} member={member} index={idx + 1} />
        ))}
      </div>
    </motion.div>
  );
};

// Committees Data
export const committeesData = [
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
    title: "Editorial, Publication & Graphics",
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

export const categories = [
  "All",
  "Education & Culture",
  "Operations & Media",
  "Practice & Governance",
  "Community & Welfare",
];

export default function CommitteesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredCommittees = useMemo(() => {
    return committeesData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.conveners || []).some((c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        (item.members || []).some((m) =>
          typeof m === "string"
            ? m.toLowerCase().includes(searchQuery.toLowerCase())
            : m.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#171717] font-sans selection:bg-[#D4AF37]/30">
      {/* Background Architectural Blueprint Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.2]"
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

      {/* Top Breadcrumb Bar */}
      <div className="relative z-10 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-4">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors rounded-full px-4 py-2 shadow-md border border-white/20"
            style={{
              background:
                "linear-gradient(90deg, #FB7801 0%, #EC2656 60%, #930777 100%)",
            }}
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
            <Link to="/" className="hover:text-[#EC2656] transition-colors">
              LAF 3.0
            </Link>
            <ChevronRight className="w-3 h-3 text-[#930777]" />
            <span
              className="font-bold"
              style={{
                background: "linear-gradient(90deg, #FB7801, #930777)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              LAA COMMITTEES
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
        {/* HEADER & FILTER BAR */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#E6DFD3] pb-6 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EC2656]"></span>
                </span>
                <span
                  className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase"
                  style={{
                    background: "linear-gradient(90deg, #FB7801, #930777)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  LAA WORKING STRUCTURE
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
                LAA{" "}
                <span
                  className="italic font-serif font-normal"
                  style={{
                    background:
                      "linear-gradient(90deg, #FB7801, #EC2656, #930777)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Committees
                </span>
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-xl">
                Explore the working committees of Lucknow Architects Association powering the architecture fraternity and LAF 3.0.
              </p>
            </div>

            {/* SEARCH BAR */}
            <div className="relative w-full lg:w-72">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <input
                type="text"
                placeholder="Search committee or member..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#E6DFD3] text-xs focus:outline-hidden focus:border-[#EC2656]/60 focus:ring-1 focus:ring-[#EC2656]/30 transition-all placeholder:text-neutral-400 shadow-2xs"
              />
            </div>
          </div>

          {/* CATEGORY TABS */}
          <div className="flex items-center gap-2 overflow-x-auto pt-6 pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
                  px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all duration-300 cursor-pointer
                  ${
                    selectedCategory === cat
                      ? "text-white shadow-sm font-semibold"
                      : "bg-white hover:bg-[#FDFBF7] text-neutral-700 border border-[#E6DFD3] hover:border-[#EC2656]/40 font-medium"
                  }
                `}
                style={
                  selectedCategory === cat
                    ? {
                        background:
                          "linear-gradient(90deg, #FB7801 0%, #EC2656 40%, #930777 80%, #3C086E 100%)",
                      }
                    : undefined
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* COMMITTEES LIST */}
        <div>
          <AnimatePresence mode="popLayout">
            {filteredCommittees.map((item, index) => (
              <CommitteeSliderRow
                key={item.id + item.title}
                committee={item}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredCommittees.length === 0 && (
          <div className="text-center py-16 bg-white/50 rounded-2xl border border-[#E6DFD3]">
            <p className="text-neutral-500 font-serif text-lg">
              No committee or member found matching "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-5 py-2 rounded-full text-white text-xs font-medium transition-all shadow-sm cursor-pointer"
              style={{
                background: "linear-gradient(90deg, #FB7801, #EC2656, #930777)",
              }}
            >
              Reset Search Filters
            </button>
          </div>
        )}

        {/* CLOSING STATEMENT BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 sm:mt-16 border-y border-[#D9D0C2] py-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[9.5px] font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                THE LAA VISION
              </span>
              <h3 className="mt-2 max-w-3xl font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#171717]">
                Building a stronger architectural community through{" "}
                <span className="font-serif italic text-[#B77A27]">
                  ideas, collaboration and shared purpose.
                </span>
              </h3>
            </div>

            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:scale-105 shrink-0"
              style={{
                background:
                  "linear-gradient(90deg, #FB7801 0%, #EC2656 60%, #930777 100%)",
              }}
            >
              <span>Explore Festival Team</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
