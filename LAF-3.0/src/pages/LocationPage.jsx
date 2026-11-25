import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Maximize2,
  Navigation,
  Plane,
  Train,
  Car,
  Hotel,
  Download,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

// Image Imports
import layoutImage from "../assets/images/LAF2.0-Layout-HD.webp";
import lucknowImg from "../assets/images/lucknow-img.webp";

const venueZones = [
  {
    id: "z-1",
    name: "Main Conclave Auditorium & Stage",
    code: "ZONE A",
    desc: "Host to keynote addresses, expert symposia, panel discussions on SCR U.P., and grand award ceremonies.",
    features: ["500+ Seating Capacity", "HD Audio-Visual Stage", "VIP Media Box", "Live Streaming Setup"],
  },
  {
    id: "z-2",
    name: "Exhibition Pavilions & Stalls",
    code: "ZONE B",
    desc: "Sprawling indoor & outdoor trade pavilions showcasing building materials, green tech, HVAC, and smart home automation.",
    features: ["Hitachi & Kubico Pavilions", "Product Demo Arenas", "Live Testing Stations", "Stall Aisles"],
  },
  {
    id: "z-3",
    name: "Art & Cultural Lawn",
    code: "ZONE C",
    desc: "Open-air lawn for student art contest displays, heritage installations, craft stalls, and evening musical galas.",
    features: ["Student Thesis Displays", "Live Sculpting", "Awadhi Craft Stalls", "Selfie Landmarks"],
  },
  {
    id: "z-4",
    name: "VIP & B2B Delegate Lounge",
    code: "ZONE D",
    desc: "Exclusive networking lounge equipped with private meeting pods, instant banking/financing desks, and media suites.",
    features: ["On-spot Loan Appraisal", "Private B2B Pods", "Press Conference Desk", "Executive Catering"],
  },
  {
    id: "z-5",
    name: "Food Court & Circulation Walkways",
    code: "ZONE E",
    desc: "Lively food pavilions serving authentic Awadhi delicacies, artisan coffee lounges, and spacious circulation walkways.",
    features: ["Famous Awadhi Cuisine", "Rest Areas", "Information Desks", "Emergency Help Desks"],
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

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#171717] font-sans selection:bg-[#D8232A]/20 relative overflow-x-clip">
      
      {/* =========================================================
          1. HERO HEADER MATCHING HOME PAGE THEME
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#FAF8F5] text-[#171717] pt-8 pb-12 border-b border-[#E7E2DA]">
        
        {/* Background Architectural Grid (Matches Home Page) */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(120, 90, 40, 0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(120, 90, 40, 0.07) 1px, transparent 1px)
              `,
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-800 hover:text-[#D8232A] transition-colors bg-white border border-[#E7E2DA] hover:border-[#D8232A]/50 rounded-full px-4 py-2 shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#D8232A]" />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
              <Link to="/" className="hover:text-[#D8232A] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#D8232A]" />
              <span className="text-[#D8232A] font-bold">Location &amp; Master Plan</span>
            </div>
          </div>

          {/* Hero Card Container */}
          <div className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 border border-[#E7E2DA] shadow-[0_4px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              
              {/* Left Hero Content */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8232A]/10 border border-[#D8232A]/20 text-[#D8232A] text-xs font-mono font-bold tracking-[0.2em] uppercase">
                  <MapPin className="w-3.5 h-3.5 text-[#D8232A] animate-pulse" />
                  <span>Host City &amp; Venue Master Plan</span>
                </div>

                <div>
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] text-[#171717]">
                    Festival{" "}
                    <span className="italic text-[#D8232A]">
                      Location
                    </span>{" "}
                    &amp; Layout
                  </h1>
                  <div className="w-24 sm:w-32 h-[4px] rounded-full bg-[#D8232A] mt-4" />
                </div>

                <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Explore the master plan layout, venue zoning, travel directions, and hospitality guide for Lucknow Architecture Festival 3.0 in Awadh's cultural capital.
                </p>

                {/* Quick Stat Banner */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] hover:border-[#D8232A]/40 transition-colors shadow-2xs">
                    <div className="text-xl font-serif font-bold text-[#171717]">Lucknow</div>
                    <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-mono mt-0.5">Uttar Pradesh, India</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] hover:border-[#D8232A]/40 transition-colors shadow-2xs">
                    <div className="text-xl font-serif font-bold text-[#D8232A]">22 - 24</div>
                    <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-mono mt-0.5">January 2027</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] hover:border-[#D8232A]/40 transition-colors shadow-2xs">
                    <div className="text-xl font-serif font-bold text-[#171717]">Plan 01</div>
                    <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-mono mt-0.5">Master Plan HD</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] hover:border-[#D8232A]/40 transition-colors shadow-2xs">
                    <div className="text-xl font-serif font-bold text-[#D8232A]">05 Zones</div>
                    <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-mono mt-0.5">Venue Layout</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://lucknowarchitecturefestival.in/download/layout-LAF2.0.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full text-white font-bold text-xs uppercase tracking-wider bg-[#D8232A] hover:bg-[#BF1E24] shadow-md hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Master Plan (PDF)</span>
                  </a>
                  <a
                    href="#travel-guide"
                    className="px-6 py-3 rounded-full bg-white border border-[#E7E2DA] text-[#171717] font-semibold text-xs uppercase tracking-wider hover:border-[#D8232A] hover:text-[#D8232A] transition-all flex items-center gap-2 shadow-2xs"
                  >
                    <Navigation className="w-4 h-4 text-[#D8232A]" />
                    <span>How To Reach</span>
                  </a>
                </div>

              </div>

              {/* Right Hero Image Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden bg-[#FAF8F5] border border-[#E7E2DA] p-3 shadow-md">
                  <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden group">
                    <img
                      src={lucknowImg}
                      alt="Lucknow Heritage & Modern Conclave Location"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] uppercase font-mono tracking-widest text-[#D8232A] font-bold">
                      ✦ City of Architecture &amp; Heritage
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[10px] font-mono text-[#D8232A] uppercase tracking-widest font-bold">Venue Corridor</span>
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#E7E2DA]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D8232A] font-bold uppercase tracking-widest mb-1">
              <span>01</span>
              <span className="w-8 h-[1px] bg-[#D8232A]" />
              <span>Architectural Layout</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717]">
              Festival Master Plan{" "}
              <span className="italic text-[#D8232A]">
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
          <div className="lg:col-span-8 bg-white rounded-3xl p-4 sm:p-6 border border-[#E7E2DA] shadow-[0_4px_25px_rgba(0,0,0,0.04)] relative overflow-hidden group">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D8232A] animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717]">
                  LAF 3.0 Master Layout • Plan 01
                </span>
              </div>
              <button
                onClick={() => setIsMapZoomed(true)}
                className="px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E7E2DA] hover:border-[#D8232A] text-xs font-semibold text-neutral-800 hover:text-[#D8232A] flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#D8232A]" />
                <span>Full View</span>
              </button>
            </div>

            {/* Main Plan Image Container — Full Unclipped Layout */}
            <div
              onClick={() => setIsMapZoomed(true)}
              className="relative rounded-2xl overflow-hidden bg-white border border-[#E7E2DA] cursor-pointer group-hover:shadow-md transition-all p-2 sm:p-4 flex items-center justify-center"
            >
              <img
                src={layoutImage}
                alt="Lucknow Architecture Festival HD Master Layout"
                className="w-full h-auto max-h-[650px] object-contain transition-transform duration-700 group-hover:scale-[1.01]"
              />

              <div className="absolute bottom-4 left-4 bg-[#18181B]/95 backdrop-blur-md px-4 py-2 rounded-xl border border-neutral-700 text-white text-xs z-10">
                <span className="text-[10px] font-mono text-[#D8232A] block uppercase tracking-wider font-bold">Interactive Master Plan</span>
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
                className="text-[#D8232A] font-bold flex items-center gap-1 hover:underline"
              >
                <span>Download High-Res Vector PDF</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Zoning Guide */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="p-5 rounded-2xl text-white bg-[#18181B] border border-neutral-800 shadow-md">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D8232A] block mb-1 font-bold">
                Venue Circulation Guide
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                5 Functional Venue Zones
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
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
                        ? "bg-white border-2 border-[#D8232A] shadow-md ring-1 ring-[#D8232A]/20"
                        : "bg-white border-[#E7E2DA] hover:border-[#D8232A]/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#FAF8F5] text-[#D8232A] border border-[#E7E2DA]">
                        {zone.code}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-[#D8232A]" />
                      )}
                    </div>

                    <h4 className="font-bold text-sm text-[#171717] mb-1">
                      {zone.name}
                    </h4>

                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {zone.desc}
                    </p>

                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 pt-3 border-t border-neutral-100 grid grid-cols-2 gap-2"
                      >
                        {zone.features.map((feat, i) => (
                          <span key={i} className="text-[11px] font-mono text-neutral-700 flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#D8232A]" />
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
        className="text-white py-16 bg-[#18181B] border-y border-neutral-800 relative overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 space-y-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#D8232A] uppercase tracking-widest mb-1 font-bold">
                <span>02</span>
                <span className="w-8 h-[1px] bg-[#D8232A]" />
                <span>Seamless Connectivity</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                How to Reach <span className="italic text-[#D8232A]">the Venue</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
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
                  className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:border-[#D8232A]/60 transition-all space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#D8232A]/15 border border-[#D8232A]/30 text-[#D8232A] flex items-center justify-center mb-4">
                      <RouteIcon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D8232A] font-bold block mb-1">
                      {route.mode}
                    </span>

                    <h3 className="font-serif text-xl text-white font-semibold mb-2">
                      {route.title}
                    </h3>

                    <p className="text-xs text-neutral-300 font-mono mb-3">
                      📍 {route.distance}
                    </p>

                    <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                      {route.details}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-[11px] text-neutral-300">
                    <span className="text-[#D8232A] font-bold block mb-0.5">Pro Tip:</span>
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
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E7E2DA]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D8232A] font-bold uppercase tracking-widest mb-1">
              <span>03</span>
              <span className="w-8 h-[1px] bg-[#D8232A]" />
              <span>Delegates &amp; Guest Accommodation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171717]">
              Luxury Hospitality{" "}
              <span className="italic text-[#D8232A]">
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
              className="bg-white rounded-3xl p-6 border border-[#E7E2DA] hover:border-[#D8232A] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(216,35,42,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#D8232A] flex items-center justify-center border border-[#E7E2DA]">
                    <Hotel className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#FAF8F5] text-[#D8232A] border border-[#E7E2DA]">
                    {hotel.tag}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#171717] mb-1">
                  {hotel.name}
                </h3>

                <p className="text-xs text-neutral-500 mb-3 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D8232A]" />
                  {hotel.location}
                </p>

                <p className="text-xs text-neutral-700 font-semibold mb-1">
                  {hotel.category}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>⏱️ {hotel.distance}</span>
                <span className="text-[#D8232A] font-bold">5★ Preferred</span>
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
              className="bg-white rounded-3xl max-w-5xl w-full p-4 sm:p-6 border-2 border-[#D8232A] shadow-2xl relative flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E7E2DA]">
                <div>
                  <h3 className="font-serif text-xl text-[#171717] font-bold">
                    Lucknow Architecture Festival • HD Master Layout
                  </h3>
                  <span className="text-xs font-mono text-[#D8232A] font-semibold">High Resolution Vector Plan</span>
                </div>
                <button
                  onClick={() => setIsMapZoomed(false)}
                  className="px-4 py-2 rounded-full text-white font-bold text-xs uppercase tracking-wider bg-[#D8232A] hover:bg-[#BF1E24] shadow-md cursor-pointer transition-colors"
                >
                  Close Plan
                </button>
              </div>

              <div className="overflow-auto flex-1 bg-[#FAF8F5] rounded-2xl p-4 border border-[#E7E2DA] flex items-center justify-center">
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
        <div className="text-white rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 border border-neutral-800 bg-[#18181B] shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#D8232A]/40 text-[#D8232A] text-xs font-mono uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Planning Your Trip?</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold">
              Join Us in Lucknow for <span className="italic text-[#D8232A]">LAF 3.0</span>
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm">
              Register as an architectural delegate, book an exhibition stall, or join as a student volunteer.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 relative z-10">
            <Link
              to="/participate"
              className="px-6 py-3 rounded-full text-white font-bold text-xs uppercase tracking-wider bg-[#D8232A] hover:bg-[#BF1E24] shadow-md hover:scale-105 transition-all"
            >
              Register For LAF 3.0
            </Link>
            <Link
              to="/highlights"
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white hover:text-[#18181B] transition-colors"
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