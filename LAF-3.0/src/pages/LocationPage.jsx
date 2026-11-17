import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Compass,
  Download,
  Maximize2,
  Navigation,
  Plane,
  Train,
  Car,
  Building,
  Hotel,
  Calendar,
  Clock,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  UsersRound
} from "lucide-react";

// Image Imports
import layoutImage from "../assets/images/LAF2.0-Layout-HD.webp";
import lucknowImg from "../assets/images/lucknow-img.webp";
import archImage from "../assets/images/image-6.webp";
import highlightImg from "../assets/images/heighlight.webp";

const venueZones = [
  {
    id: "z-1",
    name: "Main Conclave Auditorium & Stage",
    code: "ZONE A",
    desc: "Host to keynote addresses, expert symposia, panel discussions on SCR U.P., and grand award ceremonies.",
    features: ["500+ Seating Capacity", "HD Audio-Visual Stage", "VIP Media Box", "Live Streaming Setup"],
    color: "#B77A27"
  },
  {
    id: "z-2",
    name: "Exhibition Pavilions & Stalls",
    code: "ZONE B",
    desc: "Sprawling indoor & outdoor trade pavilions showcasing building materials, green tech, HVAC, and smart home automation.",
    features: ["Hitachi & Kubico Pavilions", "Product Demo Arenas", "Live Testing Stations", "Stall Aisles"],
    color: "#8B5CF6"
  },
  {
    id: "z-3",
    name: "Art & Cultural Lawn",
    code: "ZONE C",
    desc: "Open-air lawn for student art contest displays, heritage installations, craft stalls, and evening musical galas.",
    features: ["Student Thesis Displays", "Live Sculpting", "Awadhi Craft Stalls", "Selfie Landmarks"],
    color: "#EC4899"
  },
  {
    id: "z-4",
    name: "VIP & B2B Delegate Lounge",
    code: "ZONE D",
    desc: "Exclusive networking lounge equipped with private meeting pods, instant banking/financing desks, and media suites.",
    features: ["On-spot Loan Appraisal", "Private B2B Pods", "Press Conference Desk", "Executive Catering"],
    color: "#10B981"
  },
  {
    id: "z-5",
    name: "Food Court & Circulation Walkways",
    code: "ZONE E",
    desc: "Lively food pavilions serving authentic Awadhi delicacies, artisan coffee lounges, and spacious circulation walkways.",
    features: ["Famous Awadhi Cuisine", "Rest Areas", "Information Desks", "Emergency Help Desks"],
    color: "#F97316"
  }
];

const travelRoutes = [
  {
    id: "t-1",
    mode: "By Air",
    icon: Plane,
    title: "Chaudhary Charan Singh International Airport (LKO)",
    distance: "Approx. 18-25 KM (30 Mins via Shaheed Path)",
    details: "Direct daily flights connecting Lucknow to New Delhi, Mumbai, Bengaluru, Hyderabad, Dubai, Muscat and major hubs.",
    tip: "Pre-paid airport taxis and cab aggregators (Uber/Ola) are available 24/7 at the arrival terminal."
  },
  {
    id: "t-2",
    mode: "By Rail",
    icon: Train,
    title: "Lucknow Charbagh Railway Station (LKO / LJN)",
    distance: "Approx. 12-15 KM (20-25 Mins)",
    details: "High-speed connectivity via Vande Bharat Express, Shatabdi, and Rajdhani from Delhi, Kanpur, Varanasi, and Kolkata.",
    tip: "Lucknow Metro directly connects Charbagh station to key city centers."
  },
  {
    id: "t-3",
    mode: "By Road / Expressway",
    icon: Car,
    title: "Agra-Lucknow & Purvanchal Expressways",
    distance: "Seamless City Access via Shaheed Path Outer Ring Road",
    details: "World-class 6-lane expressways linking Delhi NCR (approx 4.5 hrs drive via Yamuna & Agra Expressway).",
    tip: "Shaheed Path provides signal-free access directly to the festival venue corridor."
  }
];

const luxuryHotels = [
  {
    name: "Taj Mahal Lucknow",
    location: "Gomti Nagar, Lucknow",
    category: "5-Star Luxury Heritage",
    distance: "15 mins from venue",
    tag: "Official Partner Hotel"
  },
  {
    name: "The Centrum Lucknow",
    location: "Ansal API Golf City, Lucknow",
    category: "5-Star Resort & Convention Center",
    distance: "10 mins from venue",
    tag: "Convention Hub"
  },
  {
    name: "Hyatt Regency Lucknow",
    location: "Vibhuti Khand, Gomti Nagar",
    category: "5-Star Business Luxury",
    distance: "15 mins from venue",
    tag: "Business Hotel"
  },
  {
    name: "Hilton Garden Inn",
    location: "Gomti Nagar Extension",
    category: "4-Star Premium",
    distance: "12 mins from venue",
    tag: "Modern Stay"
  }
];

const LocationPage = () => {
  const [selectedZone, setSelectedZone] = useState("z-1");
  const [isMapZoomed, setIsMapZoomed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const activeZoneObj = venueZones.find((z) => z.id === selectedZone) || venueZones[0];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F172A] font-sans selection:bg-[#EC2656]/20 selection:text-[#0B1536] relative overflow-x-clip">
      
      {/* =========================================================
          1. HERO HEADER MATCHING HOME PAGE THEME
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#FAF8F5] text-[#0F172A] pt-8 pb-12 border-b border-[#FED7AA]/60">
        
        {/* Background Architectural Grid (Matches Home Page) */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.32]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(217, 119, 6, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(217, 119, 6, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "36px 36px",
            }}
          />
          <div className="absolute -left-32 top-10 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-orange-200/25 to-amber-200/10 blur-3xl" />
          <div className="absolute -right-32 bottom-10 w-[460px] h-[460px] rounded-full bg-gradient-to-tl from-purple-200/25 to-pink-200/10 blur-3xl" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B1536] hover:text-[#EA580C] transition-colors bg-white/90 border border-[#FED7AA] hover:border-[#F97316] rounded-full px-4 py-2 shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
              <Link to="/" className="hover:text-[#EA580C] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#E11D48]" />
              <span className="text-[#E11D48] font-bold">Location &amp; Master Plan</span>
            </div>
          </div>

          <div className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 border-[2px] border-[#F97316] shadow-[0_4px_30px_rgba(249,115,22,0.06)] relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              
              {/* Left Hero Content */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-50 to-rose-50 border border-[#FED7AA] text-[#EA580C] text-xs font-mono font-bold tracking-[0.2em] uppercase">
                  <MapPin className="w-3.5 h-3.5 text-[#EA580C] animate-pulse" />
                  <span>Host City &amp; Venue Master Plan</span>
                </div>

                <div>
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] text-[#0B1536]">
                    Festival{" "}
                    <span
                      className="italic text-transparent bg-clip-text"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #F97316 0%, #EC2656 55%, #7C2D92 100%)",
                      }}
                    >
                      Location
                    </span>{" "}
                    &amp; Layout
                  </h1>
                  <div className="w-24 sm:w-32 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-4" />
                </div>

                <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Explore the master plan layout, venue zoning, travel directions, and hospitality guide for Lucknow Architecture Festival 3.0 in Awadh's cultural capital.
                </p>

                {/* Quick Stat Banner */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-orange-50/70 to-white border border-[#FED7AA]/80 hover:border-[#F97316] transition-colors shadow-2xs">
                    <div className="text-xl font-serif font-bold text-[#EA580C]">Lucknow</div>
                    <div className="text-[11px] text-neutral-600 uppercase tracking-wider font-mono mt-0.5">Uttar Pradesh, India</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-rose-50/70 to-white border border-[#FED7AA]/80 hover:border-[#E11D48] transition-colors shadow-2xs">
                    <div className="text-xl font-serif font-bold text-[#E11D48]">22 - 24</div>
                    <div className="text-[11px] text-neutral-600 uppercase tracking-wider font-mono mt-0.5">January 2027</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-50/70 to-white border border-[#FED7AA]/80 hover:border-[#7C2D92] transition-colors shadow-2xs">
                    <div className="text-xl font-serif font-bold text-[#7C2D92]">Plan 01</div>
                    <div className="text-[11px] text-neutral-600 uppercase tracking-wider font-mono mt-0.5">Master Plan HD</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-50/70 to-white border border-[#FED7AA]/80 hover:border-[#D97706] transition-colors shadow-2xs">
                    <div className="text-xl font-serif font-bold text-[#D97706]">05 Zones</div>
                    <div className="text-[11px] text-neutral-600 uppercase tracking-wider font-mono mt-0.5">Venue Layout</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://lucknowarchitecturefestival.in/download/layout-LAF2.0.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-[0_8px_25px_rgba(236,38,86,0.3)] hover:shadow-[0_12px_32px_rgba(236,38,86,0.45)] hover:scale-105 transition-all flex items-center gap-2"
                    style={{
                      background: "linear-gradient(90deg, #FB7801 0%, #EC2656 55%, #930777 100%)",
                    }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Master Plan (PDF)</span>
                  </a>
                  <a
                    href="#travel-guide"
                    className="px-6 py-3 rounded-full bg-[#FFF4ED] border border-[#FED7AA] text-[#0B1536] font-semibold text-xs uppercase tracking-wider hover:border-[#F97316] hover:text-[#EA580C] transition-all flex items-center gap-2"
                  >
                    <Navigation className="w-4 h-4 text-[#EA580C]" />
                    <span>How To Reach</span>
                  </a>
                </div>

              </div>

              {/* Right Hero Image Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-50/80 via-white to-purple-50/80 border-2 border-[#FED7AA] p-3.5 shadow-[0_8px_30px_rgba(249,115,22,0.1)]">
                  <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden group">
                    <img
                      src={lucknowImg}
                      alt="Lucknow Heritage & Modern Conclave Location"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#F97316]/40 text-[10px] uppercase font-mono tracking-widest text-[#FFB800]">
                      ✦ City of Architecture &amp; Heritage
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[10px] font-mono text-[#FFB800] uppercase tracking-widest">Venue Corridor</span>
                      <h3 className="font-serif text-2xl text-white font-medium">Lucknow • SCR Uttar Pradesh</h3>
                      <p className="text-xs text-neutral-300 mt-1">
                        A meeting ground of timeless heritage monuments and sustainable urban growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          2. MASTER PLAN LAYOUT & INTERACTIVE ZONING EXPLORER
      ========================================================= */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#FED7AA]/70">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#EA580C] font-bold uppercase tracking-widest mb-1">
              <span>01</span>
              <span className="w-8 h-[1px] bg-[#EA580C]" />
              <span>Architectural Layout</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1536]">
              Festival Master Plan{" "}
              <span
                className="italic text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #F97316 0%, #EC2656 55%, #7C2D92 100%)",
                }}
              >
                &amp; Zoning
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-md">
            Interactive master plan outlining exhibition stalls, keynote stage, art lawns, and delegate circulation.
          </p>
        </div>

        {/* Master Plan Display & Zone Selector */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Master Plan Image Frame */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-4 sm:p-6 border border-[#FED7AA] shadow-[0_4px_25px_rgba(234,88,12,0.06)] relative overflow-hidden group">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#FED7AA]/50">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EA580C] animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1536]">
                  LAF 3.0 Master Layout • Plan 01
                </span>
              </div>
              <button
                onClick={() => setIsMapZoomed(true)}
                className="px-3 py-1.5 rounded-full bg-[#FFF4ED] border border-[#FED7AA] hover:border-[#F97316] text-xs font-semibold text-[#0B1536] hover:text-[#EA580C] flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Full View</span>
              </button>
            </div>

            {/* Main Plan Image Container — Full Unclipped Layout */}
            <div
              onClick={() => setIsMapZoomed(true)}
              className="relative rounded-2xl overflow-hidden bg-white border border-[#FED7AA]/60 cursor-pointer group-hover:shadow-lg transition-all p-2 sm:p-4 flex items-center justify-center"
            >
              <img
                src={layoutImage}
                alt="Lucknow Architecture Festival HD Master Layout"
                className="w-full h-auto max-h-[650px] object-contain transition-transform duration-700 group-hover:scale-[1.01]"
              />

              <div className="absolute bottom-4 left-4 bg-[#2D0A4E]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#F97316]/40 text-white text-xs z-10">
                <span className="text-[10px] font-mono text-[#FFB800] block uppercase tracking-wider">Interactive Master Plan</span>
                <span className="font-serif font-medium text-sm">Click to expand high-resolution layout</span>
              </div>
            </div>

            <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-500">
              <span>✦ Scale 1:500 • High Density Exhibition Zones</span>
              <a
                href="/layout.pdf"
                download="LAF-3.0-Layout-Plan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EA580C] font-bold flex items-center gap-1 hover:underline"
              >
                <span>Download High-Res Vector PDF</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Zoning Guide */}
          <div className="lg:col-span-4 space-y-4">
            
            <div
              className="p-5 rounded-2xl text-white border border-[#F97316]/40 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #2D0A4E 0%, #4E0C7B 55%, #7C1382 100%)",
              }}
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFB800] block mb-1">
                Venue Circulation Guide
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                5 Functional Venue Zones
              </h3>
              <p className="text-xs text-purple-100/80 mt-1">
                Select a zone below to inspect its facilities, features, and venue highlights.
              </p>
            </div>

            {/* Zone Accordion / Selectors */}
            <div className="space-y-3">
              {venueZones.map((zone) => {
                const isSelected = selectedZone === zone.id;
                return (
                  <div
                    key={zone.id}
                    onClick={() => setSelectedZone(zone.id)}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-white border-[#F97316] shadow-md ring-1 ring-[#F97316]/20"
                        : "bg-white/80 border-[#FED7AA]/70 hover:bg-white hover:border-[#F97316]/60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#FFF4ED] text-[#EA580C] border border-[#FED7AA]">
                        {zone.code}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-[#EA580C]" />
                      )}
                    </div>

                    <h4 className="font-bold text-sm text-[#0B1536] mb-1">
                      {zone.name}
                    </h4>

                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {zone.desc}
                    </p>

                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 pt-3 border-t border-[#FED7AA]/50 grid grid-cols-2 gap-2"
                      >
                        {zone.features.map((feat, i) => (
                          <span key={i} className="text-[11px] font-mono text-neutral-700 flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
                            {feat}
                          </span>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          3. HOW TO REACH & TRAVEL CONNECTIVITY GUIDE
      ========================================================= */}
      <section
        id="travel-guide"
        className="text-white py-16 border-y border-[#F97316]/40 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2D0A4E 0%, #4E0C7B 55%, #7C1382 100%)",
        }}
      >
        
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-bl from-[#F97316]/25 to-[#EC2656]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-[#EC2656]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 space-y-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/15 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFB800] uppercase tracking-widest mb-1">
                <span>02</span>
                <span className="w-8 h-[1px] bg-[#FFB800]" />
                <span>Seamless Connectivity</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                How to Reach <span className="italic text-[#FFB800]">the Venue</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-purple-100/80 max-w-md">
              Lucknow is exceptionally connected by air, rail, and high-speed expressways.
            </p>
          </div>

          {/* Travel Modes Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {travelRoutes.map((route) => {
              const RouteIcon = route.icon;
              return (
                <div
                  key={route.id}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 hover:border-[#FFB800]/60 transition-all space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#FFB800]/40 text-[#FFB800] flex items-center justify-center mb-4">
                      <RouteIcon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFB800] font-bold block mb-1">
                      {route.mode}
                    </span>

                    <h3 className="font-serif text-xl text-white font-semibold mb-2">
                      {route.title}
                    </h3>

                    <p className="text-xs text-orange-200 font-mono mb-3">
                      📍 {route.distance}
                    </p>

                    <p className="text-xs text-purple-100/85 leading-relaxed mb-4">
                      {route.details}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/25 border border-white/10 text-[11px] text-purple-100/80">
                    <span className="text-[#FFB800] font-bold block mb-0.5">Pro Tip:</span>
                    {route.tip}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          4. NEARBY LUXURY HOTELS & HOSPITALITY GUIDE
      ========================================================= */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#FED7AA]/70">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#EA580C] font-bold uppercase tracking-widest mb-1">
              <span>03</span>
              <span className="w-8 h-[1px] bg-[#EA580C]" />
              <span>Delegates &amp; Guest Accommodation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1536]">
              Luxury Hospitality{" "}
              <span
                className="italic text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #F97316 0%, #EC2656 55%, #7C2D92 100%)",
                }}
              >
                Hotels
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-md">
            Recommended 5-star &amp; premium hotels located in close proximity to the venue corridor.
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {luxuryHotels.map((hotel, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-[#FED7AA]/80 hover:border-[#F97316] shadow-[0_4px_20px_rgba(234,88,12,0.04)] hover:shadow-[0_12px_32px_rgba(234,88,12,0.14)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] text-[#EA580C] flex items-center justify-center border border-[#FED7AA]">
                    <Hotel className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#FFF4ED] text-[#E11D48] border border-[#FED7AA]">
                    {hotel.tag}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#0B1536] mb-1">
                  {hotel.name}
                </h3>

                <p className="text-xs text-neutral-500 mb-3 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                  {hotel.location}
                </p>

                <p className="text-xs text-neutral-700 font-semibold mb-1">
                  {hotel.category}
                </p>
              </div>

              <div className="pt-4 border-t border-[#FED7AA]/50 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>⏱️ {hotel.distance}</span>
                <span className="text-[#EA580C] font-bold">5★ Preferred</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* =========================================================
          5. FULL-SCREEN MAP MODAL OVERLAY
      ========================================================= */}
      <AnimatePresence>
        {isMapZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMapZoomed(false)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-5xl w-full p-4 sm:p-6 border-2 border-[#F97316] shadow-2xl relative flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#FED7AA]/60">
                <div>
                  <h3 className="font-serif text-xl text-[#0B1536] font-bold">
                    Lucknow Architecture Festival • HD Master Layout
                  </h3>
                  <span className="text-xs font-mono text-[#EA580C] font-semibold">High Resolution Vector Plan</span>
                </div>
                <button
                  onClick={() => setIsMapZoomed(false)}
                  className="px-4 py-2 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer"
                  style={{
                    background: "linear-gradient(90deg, #FB7801 0%, #EC2656 55%, #7C2D92 100%)",
                  }}
                >
                  Close Plan
                </button>
              </div>

              <div className="overflow-auto flex-1 bg-[#FAF8F5] rounded-2xl p-4 border border-[#FED7AA] flex items-center justify-center">
                <img
                  src={layoutImage}
                  alt="Expanded HD Master Plan"
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          6. CTA BANNER
      ========================================================= */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pb-20">
        <div
          className="text-white rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 border-2 border-[#F97316]/50 shadow-[0_12px_40px_rgba(78,12,123,0.26)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: "linear-gradient(135deg, #2D0A4E 0%, #4E0C7B 55%, #7C1382 100%)",
          }}
        >
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-gradient-to-bl from-[#F97316]/20 to-[#EC2656]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-4 max-w-xl text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#FFB800]/40 text-[#FFB800] text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Planning Your Trip?</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold">
              Join Us in Lucknow for <span className="italic text-[#FFB800]">LAF 3.0</span>
            </h2>
            <p className="text-purple-100/90 text-xs sm:text-sm">
              Register as an architectural delegate, book an exhibition stall, or join as a student volunteer.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 relative z-10">
            <Link
              to="/participate"
              className="px-6 py-3 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-[0_8px_25px_rgba(236,38,86,0.35)] hover:shadow-[0_12px_32px_rgba(236,38,86,0.5)] hover:scale-105 transition-all"
              style={{
                background: "linear-gradient(90deg, #FB7801 0%, #EC2656 55%, #930777 100%)",
              }}
            >
              Register For LAF 3.0
            </Link>
            <Link
              to="/highlights"
              className="px-6 py-3 rounded-full bg-white/10 border border-white/25 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white hover:text-[#4E0C7B] transition-colors"
            >
              View Highlights
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default LocationPage;
