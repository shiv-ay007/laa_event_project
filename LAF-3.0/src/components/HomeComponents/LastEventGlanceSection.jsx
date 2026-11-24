import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  Download,
  Images,
  Sparkles
} from "lucide-react";

/* =========================================================
   ANIMATED COUNTER COMPONENT (Counts 0 to Target on Scroll)
========================================================= */
function AnimatedCounter({ end, duration = 2000, suffix = "+", formatValue }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easedProgress * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, end, duration]);

  const display = formatValue ? formatValue(count) : count.toLocaleString();

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

/* =========================================================
   LOCAL IMAGES IMPORTS
   - Front images: Existing high-res event photographs
   - Back images: Images from LAF-3-event folder & event highlights
========================================================= */
// Front images (12 selected event photographs)
import eventFront01 from "../../assets/images/LAFevent11.webp"; // I Love Lucknow Heritage Installation
import eventFront02 from "../../assets/images/LAFevent8.webp";  // Kubico & Kleidco Architectural Pavilion
import eventFront03 from "../../assets/images/LAFevent12.webp"; // Keynote Symposium & Speaker Stage
import eventFront04 from "../../assets/images/LAFevent4.webp";  // Indoor Architecture & Product Expo
import eventFront05 from "../../assets/images/LAFevent6.webp";  // Hitachi Smart Climate Pavilion
import eventFront06 from "../../assets/images/LAFevent9.webp";  // Charak Steel & Structure Installation
import eventFront07 from "../../assets/images/lAFevent5.webp";  // Main Exhibition Walkway & Trade Stalls
import eventFront08 from "../../assets/images/LAFevent10.webp"; // KEI Principal Sponsor Stage Ceremony
import eventFront09 from "../../assets/images/LAFEvent3.webp";  // Icon Pavilion & Designer Tile Booth
import eventFront10 from "../../assets/images/LAFevent7.webp";  // Outdoor Sustainable Pavilion & Lawn
import eventFront11 from "../../assets/images/LAFevent15.webp"; // Architectural Delegates & Conclave Audience
import eventFront12 from "../../assets/images/LAFevent16.webp"; // Aerial View of LAF Build Expo Pavilions

// Back images (11 from LAF-3-event folder + 1 authentic event photo = 12 back images)
import eventBack01 from "../../assets/images/Events/LAF-3-event/laf1.webp";
import eventBack02 from "../../assets/images/Events/LAF-3-event/laf2.webp";
import eventBack03 from "../../assets/images/Events/LAF-3-event/laf3.webp";
import eventBack04 from "../../assets/images/Events/LAF-3-event/laf4.webp";
import eventBack05 from "../../assets/images/Events/LAF-3-event/laf5.webp";
import eventBack06 from "../../assets/images/Events/LAF-3-event/laf6.webp";
import eventBack07 from "../../assets/images/Events/LAF-3-event/laf7.webp";
import eventBack08 from "../../assets/images/Events/LAF-3-event/laf8.webp";
import eventBack09 from "../../assets/images/Events/LAF-3-event/laf9.webp";
import eventBack10 from "../../assets/images/Events/LAF-3-event/laf10.webp";
import eventBack11 from "../../assets/images/Events/LAF-3-event/laf11.webp";
import eventBack12 from "../../assets/images/LAFevent13.webp"; // Exhibition Entry Arch & Welcome Lounge

/* =========================================================
   STRUCTURED EVENT CARD PAIRS (12 CARDS = 24 PHOTOGRAPHS)
========================================================= */
const eventCardPairs = [
  {
    id: "01",
    frontImage: eventFront01,
    backImage: eventBack01,
    frontAlt: "I Love Lucknow Heritage Installation at LAF Festival",
    backAlt: "Grand Architectural Conclave & Exhibition Pavilion LAF 3.0",
    frontTitle: "I Love Lucknow Heritage Installation",
    backTitle: "Grand Conclave & Exhibition Pavilion",
    categoryLabel: "Exhibitions & Heritage",
  },
  {
    id: "02",
    frontImage: eventFront02,
    backImage: eventBack02,
    frontAlt: "Kleidco & Kubico Architectural Wood Pavilion",
    backAlt: "Design Trade Stalls & Modern Architectural Materials",
    frontTitle: "Kleidco Architectural Display",
    backTitle: "Design Trade Stalls & Materials",
    categoryLabel: "Pavilions & Booths",
  },
  {
    id: "03",
    frontImage: eventFront03,
    backImage: eventBack03,
    frontAlt: "Keynote Symposium & Main Stage Presentations",
    backAlt: "Interactive Panel Discussions & Keynote Sessions",
    frontTitle: "Keynote Symposium & Speaker Stage",
    backTitle: "Panel Discussions & Keynotes",
    categoryLabel: "Conclave & Talks",
  },
  {
    id: "04",
    frontImage: eventFront04,
    backImage: eventBack04,
    frontAlt: "Indoor Architecture & Building Products Showcase",
    backAlt: "Innovative Interior Systems & Product Exhibits",
    frontTitle: "Indoor Architecture & Product Expo",
    backTitle: "Interior Systems & Product Exhibits",
    categoryLabel: "Products & Tech",
  },
  {
    id: "05",
    frontImage: eventFront05,
    backImage: eventBack05,
    frontAlt: "Hitachi Smart Climate Pavilion & Technology Center",
    backAlt: "Smart Infrastructure & Ventilation Engineering Displays",
    frontTitle: "Hitachi Smart Climate Pavilion",
    backTitle: "Smart Infrastructure & Engineering",
    categoryLabel: "Climate & Infra",
  },
  {
    id: "06",
    frontImage: eventFront06,
    backImage: eventBack06,
    frontAlt: "Charak Steel & Structural Engineering Pavilion",
    backAlt: "Steel Fabrications & Structural Innovation Booths",
    frontTitle: "Charak Steel Structure Installation",
    backTitle: "Steel & Structural Innovations",
    categoryLabel: "Structure & Build",
  },
  {
    id: "07",
    frontImage: eventFront07,
    backImage: eventBack07,
    frontAlt: "Main Exhibition Walkway & Trade Stalls",
    backAlt: "Delegate Interactions & Manufacturer Networking",
    frontTitle: "Main Exhibition Walkway & Stalls",
    backTitle: "Manufacturer Networking & Stalls",
    categoryLabel: "Expo Walkway",
  },
  {
    id: "08",
    frontImage: eventFront08,
    backImage: eventBack08,
    frontAlt: "KEI Principal Sponsor Stage Ceremony & Gathering",
    backAlt: "LAA Honorary Dignitaries & Award Celebrations",
    frontTitle: "KEI Principal Sponsor Stage Ceremony",
    backTitle: "LAA Dignitaries & Award Celebrations",
    categoryLabel: "Conclave & Ceremony",
  },
  {
    id: "09",
    frontImage: eventFront09,
    backImage: eventBack09,
    frontAlt: "Icon World of Tile Designer Pavilion",
    backAlt: "Luxury Surfaces & Architectural Facade Materials",
    frontTitle: "Icon Pavilion & Trade Booth",
    backTitle: "Luxury Surfaces & Facade Materials",
    categoryLabel: "Materials & Tiles",
  },
  {
    id: "10",
    frontImage: eventFront10,
    backImage: eventBack10,
    frontAlt: "Outdoor Sustainable Pavilion & Eco Garden Displays",
    backAlt: "Landscape & Open Air Architectural Installations",
    frontTitle: "Outdoor Sustainable Pavilion & Lawn",
    backTitle: "Landscape & Open Air Exhibits",
    categoryLabel: "Sustainability & Landscape",
  },
  {
    id: "11",
    frontImage: eventFront11,
    backImage: eventBack11,
    frontAlt: "Architectural Delegates & Conclave Audience",
    backAlt: "Professional Assembly of Architects & Urban Planners",
    frontTitle: "Architectural Delegates & Audience",
    backTitle: "Assembly of Architects & Planners",
    categoryLabel: "Professional Conclave",
  },
  {
    id: "12",
    frontImage: eventFront12,
    backImage: eventBack12,
    frontAlt: "Aerial View of LAF Pavilion & Mega Build Expo",
    backAlt: "Exhibition Entry Archway & Welcome Hospitality Lounge",
    frontTitle: "Aerial View of LAF Build Expo",
    backTitle: "Exhibition Entry & Welcome Lounge",
    categoryLabel: "Aerial & Welcome Arch",
  },
];

/* =========================================================
   REUSABLE 3D FLIP IMAGE CARD COMPONENT
   - Automatic 3D flip every 5-7 seconds with staggered delay
   - Pauses on mouse hover, focus, and modal open
   - Respects prefers-reduced-motion
   - Subtle image-stack icon with '2' badge
========================================================= */
export function FlipImageCard({ item, index, isPaused, onSelect }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const hasMountedRef = useRef(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setIsReducedMotion(mediaQuery.matches);

      const handleChange = (e) => setIsReducedMotion(e.matches);
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
      }
    }
  }, []);

  // Staggered auto-flipping logic
  useEffect(() => {
    if (isReducedMotion) return;
    if (isPaused || isHovered || isFocused) return;

    // Organic staggered timing between 5200ms and 6800ms
    const intervalDuration = 5200 + ((index * 380) % 1600);
    let initialTimeout = null;
    let intervalTimer = null;

    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      // Stagger the first flip across all 12 cards so they don't flip simultaneously
      const initialStaggerDelay = 1200 + (index * 420);
      initialTimeout = setTimeout(() => {
        setIsFlipped((prev) => !prev);
        intervalTimer = setInterval(() => {
          setIsFlipped((prev) => !prev);
        }, intervalDuration);
      }, initialStaggerDelay);
    } else {
      // Resume from pause / hover
      intervalTimer = setInterval(() => {
        setIsFlipped((prev) => !prev);
      }, intervalDuration);
    }

    return () => {
      if (initialTimeout) clearTimeout(initialTimeout);
      if (intervalTimer) clearInterval(intervalTimer);
    };
  }, [isPaused, isHovered, isFocused, index, isReducedMotion]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(item);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View photographs for ${item.frontTitle} and ${item.backTitle}`}
      onClick={() => onSelect(item)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="group relative cursor-pointer select-none rounded-2xl aspect-[6/5] border border-[#E7E2DA] hover:border-[#D8232A] shadow-xs hover:shadow-[0_12px_28px_rgba(216,35,42,0.15)] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D8232A]/50"
      style={{ perspective: "1000px" }}
    >
      {/* 3D Flipping Transform Container */}
      <div
        className="w-full h-full relative"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          transition: isReducedMotion ? "none" : "transform 900ms cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ================= FRONT FACE (SIDE A) ================= */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-neutral-900"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <img
            src={item.frontImage}
            alt={item.frontAlt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
          />

          {/* Subtle Hover Gradient Overlay & Title */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 sm:p-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                ✦ {item.id} · Side A
              </span>
              <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                <Maximize2 size={12} />
              </div>
            </div>
            <p className="text-xs text-white font-medium line-clamp-1 mt-1 pr-9">
              {item.frontTitle}
            </p>
          </div>

          {/* Image-Stack Badge (Bottom-Right: Icon + Number 2) */}
          <div className="absolute bottom-2.5 right-2.5 z-20 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xs pointer-events-none transition-transform duration-300 group-hover:scale-105">
            <Images size={11} className="text-white/90" />
            <span className="text-[10px] font-mono font-bold leading-none">2</span>
          </div>
        </div>

        {/* ================= BACK FACE (SIDE B) ================= */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-neutral-900"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src={item.backImage}
            alt={item.backAlt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
          />

          {/* Subtle Hover Gradient Overlay & Title */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 sm:p-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D8232A]">
                ✦ {item.id} · Side B
              </span>
              <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                <Maximize2 size={12} />
              </div>
            </div>
            <p className="text-xs text-white font-medium line-clamp-1 mt-1 pr-9">
              {item.backTitle}
            </p>
          </div>

          {/* Image-Stack Badge (Bottom-Right: Icon + Number 2) */}
          <div className="absolute bottom-2.5 right-2.5 z-20 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xs pointer-events-none transition-transform duration-300 group-hover:scale-105">
            <Images size={11} className="text-white/90" />
            <span className="text-[10px] font-mono font-bold leading-none">2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION COMPONENT: LAST EVENT AT A GLANCE
========================================================= */
export default function LastEventGlanceSection() {
  const [selectedPairIndex, setSelectedPairIndex] = useState(null);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (selectedPairIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPairIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPairIndex === null) return;
      if (e.key === "Escape") setSelectedPairIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedPairIndex((prev) => (prev > 0 ? prev - 1 : eventCardPairs.length - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedPairIndex((prev) => (prev < eventCardPairs.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPairIndex]);

  const selectedPair = selectedPairIndex !== null ? eventCardPairs[selectedPairIndex] : null;

  return (
    <section
      id="last-event"
      className="relative overflow-hidden bg-[#FAF8F5] pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12 select-none font-sans border-t border-[#E8E2D8]"
    >
      {/* Signature Architectural Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* ================= PART 1: HEADER & 3D AUTO-FLIPPING IMAGE GALLERY GRID ================= */}
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* ================= LEFT-ALIGNED RED BADGE HEADING ================= */}
        <div className="mb-8 sm:mb-12 flex flex-col items-start gap-1.5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-1.5"
          >
            <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
              Last Event At a Glance
            </h2>
          </motion.div>
        </div>

        {/* ================= 4-COLUMN 3-ROW GRID (12 CARDS = 24 PHOTOGRAPHS) ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {eventCardPairs.map((pair, index) => (
            <FlipImageCard
              key={pair.id}
              item={pair}
              index={index}
              isPaused={selectedPairIndex !== null}
              onSelect={() => setSelectedPairIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* ================= PART 2: DOWNLOADS, STATS & FOOTNOTE ================= */}
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mt-10 sm:mt-14">
        
        {/* ELEGANT DOWNLOAD DOCUMENTS RIBBON (RED, BLACK, RED THEME) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {[
            {
              title: "DOWNLOAD EVENT BROCHURE",
              subtitle: "Conclave Guide & Official Schedule",
              file: "#brochure",
              badge: "PDF • 4.2 MB",
              theme: "red",
            },
            {
              title: "DOWNLOAD PARTICIPATION FORM",
              subtitle: "Delegate & Exhibitor Entry Form",
              file: "#participation",
              badge: "PDF • 1.8 MB",
              theme: "black",
            },
            {
              title: "DOWNLOAD LAYOUT",
              subtitle: "Exhibition Floorplan & Stalls Map",
              file: "#layout",
              badge: "PDF • 3.5 MB",
              theme: "red",
            },
          ].map((item) => {
            const isRed = item.theme === "red";
            
            return (
              <a
                key={item.title}
                href={item.file}
                className={`group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl border shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden ${
                  isRed 
                    ? "bg-[#D8232A] border-[#D8232A] hover:bg-[#BF1E24]" 
                    : "bg-[#18181B] border-neutral-800 hover:border-[#D8232A]"
                }`}
              >
                {/* Shimmer Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none ${
                  isRed ? "via-white/20" : "via-[#D8232A]/15"
                }`} />

                <div className="flex items-center gap-3.5 min-w-0 z-10">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isRed
                      ? "bg-white/20 border-white/30 text-white group-hover:bg-white group-hover:text-[#D8232A]"
                      : "bg-white/5 border-white/10 text-[#D8232A] group-hover:bg-[#D8232A] group-hover:text-white group-hover:border-transparent"
                  } border`}>
                    <Download className="w-4.5 h-4.5 group-hover:translate-y-0.5 transition-transform" />
                  </div>

                  <div className="text-left truncate">
                    <div className={`text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-wider transition-colors truncate ${
                      isRed ? "text-white group-hover:text-white" : "text-white group-hover:text-[#D8232A]"
                    }`}>
                      {item.title}
                    </div>
                    <div className={`text-[10.5px] truncate mt-0.5 ${
                      isRed ? "text-red-100" : "text-neutral-400"
                    }`}>
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                <div className="z-10 ml-2 shrink-0">
                  <span className={`text-[9.5px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-md border transition-all ${
                    isRed
                      ? "text-white bg-white/10 border-white/20 group-hover:bg-white group-hover:text-[#D8232A] group-hover:border-white"
                      : "text-neutral-300 bg-white/5 border-neutral-700 group-hover:border-[#D8232A] group-hover:text-white"
                  }`}>
                    {item.badge}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* ================= STATISTICS RIBBON ================= */}
        <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#E8E2D8] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#D8232A]" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Stat 1 */}
            <div className="text-left">
              <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#18181B] tracking-tight leading-none">
                <AnimatedCounter end={200} suffix="+" formatValue={(v) => v} />
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-medium text-neutral-600 leading-snug mt-2">
                industries showcased.
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-left">
              <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#18181B] tracking-tight leading-none">
                <AnimatedCounter end={2000} suffix="+" formatValue={(v) => v} />
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-medium text-neutral-600 leading-snug mt-2">
                architects and other professionals.
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-left">
              <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#18181B] tracking-tight leading-none">
                <AnimatedCounter
                  end={300000}
                  suffix="+"
                  formatValue={(v) => v.toLocaleString("en-IN")}
                />
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-medium text-neutral-600 leading-snug mt-2">
                general public walking in.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PREMIUM FULLSCREEN DUAL-IMAGE LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {selectedPairIndex !== null && selectedPair && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/92 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 md:p-8 select-none overflow-y-auto"
            onClick={() => setSelectedPairIndex(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Event photograph dual view"
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-6xl w-full my-auto flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between w-full mb-3 sm:mb-4 px-1">
                <div className="flex items-center gap-2.5">
                  <span className="bg-[#D8232A] text-white font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5">
                    <Sparkles size={13} />
                    CARD {selectedPair.id} OF {eventCardPairs.length}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-300 font-medium hidden sm:inline">
                    {selectedPair.categoryLabel}
                  </span>
                </div>

                {/* Right controls: Prev, Next & Close */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setSelectedPairIndex((prev) =>
                        prev > 0 ? prev - 1 : eventCardPairs.length - 1
                      )
                    }
                    className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#D8232A] border border-white/20 text-white transition-all cursor-pointer focus:outline-none"
                    aria-label="Previous Photo Pair"
                    title="Previous Pair (Left Arrow)"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={() =>
                      setSelectedPairIndex((prev) =>
                        prev < eventCardPairs.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#D8232A] border border-white/20 text-white transition-all cursor-pointer focus:outline-none"
                    aria-label="Next Photo Pair"
                    title="Next Pair (Right Arrow)"
                  >
                    <ChevronRight size={18} />
                  </button>

                  <button
                    onClick={() => setSelectedPairIndex(null)}
                    className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#D8232A] border border-white/20 text-white transition-all cursor-pointer focus:outline-none ml-1"
                    aria-label="Close Lightbox"
                    title="Close (Escape)"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Dual Image Comparison Container (Side-by-side on desktop, Stacked on mobile) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-h-[82vh] overflow-y-auto pr-1">
                {/* PHOTO 1: FRONT VIEW */}
                <div className="flex flex-col rounded-2xl bg-[#141416] border border-white/15 overflow-hidden shadow-2xl">
                  {/* Card Subheader */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/10">
                    <span className="font-mono text-[10px] sm:text-[11px] tracking-widest uppercase font-bold text-[#D4AF37] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                      VIEW 1 • FRONT
                    </span>
                    <span className="text-white/50 font-mono text-[10px]">SIDE A</span>
                  </div>

                  {/* Photo Container - Original Aspect Ratio */}
                  <div className="p-3 sm:p-4 flex items-center justify-center bg-black/60 min-h-[220px] sm:min-h-[280px] md:min-h-[360px] max-h-[55vh] md:max-h-[60vh]">
                    <img
                      src={selectedPair.frontImage}
                      alt={selectedPair.frontAlt}
                      className="max-h-[50vh] md:max-h-[56vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Photo Caption */}
                  <div className="px-4 py-3 bg-[#18181B] border-t border-white/10">
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">
                      {selectedPair.frontTitle}
                    </p>
                    <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                      {selectedPair.frontAlt}
                    </p>
                  </div>
                </div>

                {/* PHOTO 2: BACK VIEW */}
                <div className="flex flex-col rounded-2xl bg-[#141416] border border-white/15 overflow-hidden shadow-2xl">
                  {/* Card Subheader */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/10">
                    <span className="font-mono text-[10px] sm:text-[11px] tracking-widest uppercase font-bold text-[#D8232A] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#D8232A] animate-pulse" />
                      VIEW 2 • BACK
                    </span>
                    <span className="text-white/50 font-mono text-[10px]">SIDE B</span>
                  </div>

                  {/* Photo Container - Original Aspect Ratio */}
                  <div className="p-3 sm:p-4 flex items-center justify-center bg-black/60 min-h-[220px] sm:min-h-[280px] md:min-h-[360px] max-h-[55vh] md:max-h-[60vh]">
                    <img
                      src={selectedPair.backImage}
                      alt={selectedPair.backAlt}
                      className="max-h-[50vh] md:max-h-[56vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Photo Caption */}
                  <div className="px-4 py-3 bg-[#18181B] border-t border-white/10">
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">
                      {selectedPair.backTitle}
                    </p>
                    <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                      {selectedPair.backAlt}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer Tip */}
              <div className="mt-3 flex items-center justify-between w-full px-2 text-[11px] text-neutral-400 font-mono">
                <span>Tip: Use ← Left &amp; Right → Arrow keys to navigate, Esc to close</span>
                <span>{selectedPairIndex + 1} / {eventCardPairs.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
