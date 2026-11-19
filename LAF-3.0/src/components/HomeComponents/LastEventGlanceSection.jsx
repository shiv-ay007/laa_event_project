import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  Download
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

// Event gallery images
import event01 from "../../assets/images/LAFevent1.webp";
import event02 from "../../assets/images/LAFevent2.webp";
import event03 from "../../assets/images/LAFEvent3.webp";
import event04 from "../../assets/images/LAFevent4.webp";
import event05 from "../../assets/images/lAFevent5.webp";
import event06 from "../../assets/images/LAFevent6.webp";
import event07 from "../../assets/images/LAFevent7.webp";
import event08 from "../../assets/images/LAFevent8.webp";
import event09 from "../../assets/images/LAFevent9.webp";
import event10 from "../../assets/images/LAFevent10.webp";
import event11 from "../../assets/images/LAFevent11.webp";
import event12 from "../../assets/images/LAFevent12.webp";
import event13 from "../../assets/images/LAFevent13.webp";
import event14 from "../../assets/images/LAFevent14.webp";
import event15 from "../../assets/images/LAFevent15.webp";
import event16 from "../../assets/images/LAFevent16.webp";



const eventImages = [
  {
    id: "01",
    src: event01,
    title: "Art Contest Winners • Junior Category",
    category: "art",
    categoryLabel: "Art Contest",
  },
  {
    id: "02",
    src: event02,
    title: "Art Contest Winners • Senior Category",
    category: "art",
    categoryLabel: "Art Contest",
  },
  {
    id: "03",
    src: event03,
    title: "Icon Pavilion & Trade Booth",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "04",
    src: event04,
    title: "Indoor Architecture & Product Expo",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "05",
    src: event05,
    title: "Main Exhibition Walkway & Stalls",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "06",
    src: event06,
    title: "Hitachi Smart Climate Pavilion",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "07",
    src: event07,
    title: "Outdoor Sustainable Pavilion & Lawn",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "08",
    src: event08,
    title: "Kubico Architectural Display",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "09",
    src: event09,
    title: "Charak Steel & Structure Installation",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "10",
    src: event10,
    title: "KEI Principal Sponsor Stage Ceremony",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
  },
  {
    id: "11",
    src: event11,
    title: "I Love Lucknow Heritage Installation",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "12",
    src: event12,
    title: "Keynote Symposium & Speaker Stage",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
  },
  {
    id: "13",
    src: event13,
    title: "Exhibition Entry Arch & Welcome Lounge",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "14",
    src: event14,
    title: "Interior Designers Product Showcase",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "15",
    src: event15,
    title: "Architectural Delegates & Audience",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
  },
  {
    id: "16",
    src: event16,
    title: "Grand Conclave Auditorium & Gathering",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
  },
];

const categories = [
  { id: "all", label: "All Highlights", count: 16 },
  { id: "exhibitions", label: "Exhibitions & Stalls", count: 11 },
  { id: "art", label: "Art Contests", count: 2 },
  { id: "conclave", label: "Conclave & Stage", count: 3 },
];

export default function LastEventGlanceSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredImages = activeTab === "all" 
    ? eventImages 
    : eventImages.filter(img => img.category === activeTab);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredImages]);

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

      {/* ================= PART 1: HEADER & IMAGE GALLERY GRID (MATCHING NAVBAR WIDTH) ================= */}
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
              Last Event
            </h2>
            <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
              At a Glance
            </h2>
          </motion.div>
        </div>

        {/* ================= SIMPLE IMAGE GALLERY GRID ================= */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 aspect-[6/5] border border-[#E7E2DA] hover:border-[#D8232A] shadow-xs hover:shadow-[0_12px_28px_rgba(216,35,42,0.15)] hover:-translate-y-1 transition-all duration-500"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Subtle Hover Gradient Overlay & Quick View */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                      ✦ {image.id} · {image.categoryLabel}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                      <Maximize2 size={13} />
                    </div>
                  </div>
                  <p className="text-xs text-white font-medium line-clamp-1 mt-1">
                    {image.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ================= PART 3: DOWNLOADS, STATS & FOOTNOTE (MATCHING NAVBAR WIDTH) ================= */}
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mt-10 sm:mt-14">
        {/* ================= ELEGANT DOWNLOAD DOCUMENTS RIBBON (THEMED) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {[
            {
              title: "DOWNLOAD EVENT BROCHURE",
              subtitle: "Conclave Guide & Official Schedule",
              file: "#brochure",
              badge: "PDF • 4.2 MB",
            },
            {
              title: "DOWNLOAD PARTICIPATION FORM",
              subtitle: "Delegate & Exhibitor Entry Form",
              file: "#participation",
              badge: "PDF • 1.8 MB",
            },
            {
              title: "DOWNLOAD LAYOUT",
              subtitle: "Exhibition Floorplan & Stalls Map",
              file: "#layout",
              badge: "PDF • 3.5 MB",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.file}
              className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#18181B] border border-neutral-800 hover:border-[#D8232A] shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_25px_rgba(216,35,42,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden"
            >
              {/* Minimal Red Shimmer Sweep Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D8232A]/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              <div className="flex items-center gap-3.5 min-w-0 z-10">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D8232A] group-hover:bg-[#D8232A] group-hover:text-white group-hover:border-transparent transition-all duration-300 shrink-0 shadow-xs">
                  <Download className="w-4.5 h-4.5 group-hover:translate-y-0.5 transition-transform" />
                </div>

                <div className="text-left truncate">
                  <div className="text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-wider text-white group-hover:text-[#D8232A] transition-colors truncate">
                    {item.title}
                  </div>
                  <div className="text-[10.5px] text-neutral-400 truncate mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              </div>

              <div className="z-10 ml-2 shrink-0">
                <span className="text-[9.5px] font-mono font-bold tracking-widest text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-neutral-700 group-hover:border-[#D8232A] group-hover:text-white transition-all">
                  {item.badge}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* ================= STATISTICS RIBBON (MINIMAL ARCHITECTURAL PALETTE) ================= */}
        <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#E8E2D8] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#D8232A]" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Stat 1: 200+ */}
            <div className="text-left">
              <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#18181B] tracking-tight leading-none">
                <AnimatedCounter end={200} suffix="+" formatValue={(v) => v} />
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-medium text-neutral-600 leading-snug mt-2">
                industries showcased.
              </div>
            </div>

            {/* Stat 2: 2000+ */}
            <div className="text-left">
              <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#18181B] tracking-tight leading-none">
                <AnimatedCounter end={2000} suffix="+" formatValue={(v) => v} />
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-medium text-neutral-600 leading-snug mt-2">
                architects and other professionals.
              </div>
            </div>

            {/* Stat 3: 3,00,000+ */}
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

      {/* ================= LIGHTBOX PREVIEW MODAL (THEMED) ================= */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 select-none"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Modal Box */}
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 p-2.5 rounded-full bg-white/10 hover:bg-[#D8232A] border border-white/20 text-white transition-all focus:outline-none cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={() =>
                  setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1))
                }
                className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#D8232A] border border-white/20 text-white transition-all focus:outline-none z-10 cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={() =>
                  setSelectedIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0))
                }
                className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#D8232A] border border-white/20 text-white transition-all focus:outline-none z-10 cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* High-Res Image Display */}
              <motion.div
                key={filteredImages[selectedIndex].src}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl max-h-[75vh]"
              >
                <img
                  src={filteredImages[selectedIndex].src}
                  alt={filteredImages[selectedIndex].title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </motion.div>

              {/* Bottom Details Bar */}
              <div className="mt-4 flex items-center justify-between w-full max-w-3xl px-4 py-3 rounded-2xl bg-[#18181B]/95 border border-white/10 text-white text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-white font-bold text-[10px] tracking-widest uppercase bg-[#D8232A] px-2.5 py-1 rounded-md shadow-xs">
                    ✦ {filteredImages[selectedIndex].id}
                  </span>
                  <span className="font-medium text-neutral-200 text-sm truncate max-w-[280px] sm:max-w-md">
                    {filteredImages[selectedIndex].title}
                  </span>
                </div>
                <div className="text-neutral-400 font-mono text-[11px]">
                  {selectedIndex + 1} / {filteredImages.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
