import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Eye
} from "lucide-react";

// Import all 10 news clipping images
import news1Img from "../../assets/images/news1.png";
import news2Img from "../../assets/images/news2.png";
import news3Img from "../../assets/images/news3.png";
import news4Img from "../../assets/images/news4.png";
import news5Img from "../../assets/images/news5.png";
import news6Img from "../../assets/images/news6.png";
import news7Img from "../../assets/images/news7.png";
import news8Img from "../../assets/images/news8.png";
import news9Img from "../../assets/images/news9.png";
import news10Img from "../../assets/images/news10.png";

/* =========================================================
   ANIMATED COUNTER COMPONENT (Counts 0 to Target on Scroll)
========================================================= */
function AnimatedCounter({ end, duration = 2000, suffix = "+" }) {
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

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

// 10 News Articles Data 
const newsArticles = [
  {
    id: 1,
    num: "01",
    img: news1Img,
    publication: "Amar Ujala",
    edition: "Lucknow City Edition",
    headline: "ऑटोमेशन प्लान से अब घर बन रहे स्मार्ट",
    tag: "Smart Architecture & 5G",
    quote: "हाई स्पीड फाइबर इंटरनेट और 5G तकनीक के आने के बाद घरों के निर्माण के समय ही स्मार्ट डिजाइन का बढ़ने लगा उपयोग। इकाना स्टेडियम में आयोजित कार्यक्रम में देश के प्रमुख वास्तुविदों ने आधुनिक शहर निर्माण पर साझा किए विचार।",
    bgColor: "#FFF1F4",
    accentColor: "#E11D48",
  },
  {
    id: 6,
    num: "02",
    img: news6Img,
    publication: "Official Media Bureau",
    edition: "Ekana Stadium Press Lounge",
    headline: "LAF 2.0 Official Press Conference & Media Launch",
    tag: "National Media Meet",
    quote: "Lucknow Architects Association leadership and conveners addressing accredited national print, electronic, and digital press delegates at the grand curtain-raiser of Lucknow Architecture Festival 2.0.",
    bgColor: "#F0F7FF",
    accentColor: "#2563EB",
  },
  {
    id: 2,
    num: "03",
    img: news2Img,
    publication: "Rashtriya Sahara",
    edition: "Apna Shehar Edition",
    headline: "सपनों का महल बनाने पर वास्तुविदों का मंथन",
    tag: "Conclave & Urban Design",
    quote: "लखनऊ आर्किटेक्ट एसोसिएशन की ओर से आयोजित तीन दिवसीय फेस्टिवल 'आर्किभाव-2022' का भव्य समापन। देश भर के अग्रणी वास्तुकारों ने सतत विकास, ग्रीन बिल्डिंग व आधुनिक वास्तुकला पर की विस्तृत परिचर्चा।",
    bgColor: "#FFFAF0",
    accentColor: "#D97706",
  },
  {
    id: 3,
    num: "04",
    img: news3Img,
    publication: "Amar Ujala",
    edition: "Special Festival Edition",
    headline: "रसोई में होगा सेंसर, हाथ घुमाते खुलेंगी रैक",
    tag: "Materials & Smart Innovation",
    quote: "सूक्ष्म, लघु एवं मध्यम उद्यम व खादी ग्रामोद्योग मंत्री राकेश सचान ने दूसरे दिन कार्यक्रमों का शुभारंभ किया। स्मार्ट होम सिस्टम, सेंसर्स और मॉड्यूलर किचन की नई तकनीकों ने दर्शकों को आकर्षित किया।",
    bgColor: "#F2FDFB",
    accentColor: "#059669",
  },
  {
    id: 4,
    num: "05",
    img: news4Img,
    publication: "Samvad News Agency",
    edition: "Statewide Dispatch",
    headline: "रोजगार दिलाने में आर्किटेक्ट्स की भूमिका अहम",
    tag: "Youth & Employment",
    quote: "भवन निर्माण क्षेत्र से जुड़े पेशेवरों और युवा आर्किटेक्ट्स के लिए रोजगार के नए अवसर। एमएसएमई के जरिए युवाओं को रोजगार तथा निर्माण क्षेत्र की गुणवत्ता में सुधार पर विशेष सत्र।",
    bgColor: "#FAF3FD",
    accentColor: "#9333EA",
  },
  {
    id: 5,
    num: "06",
    img: news5Img,
    publication: "Dainik Jagran",
    edition: "Jagran City Special",
    headline: "इकाना स्टेडियम में आयोजित आर्किभाव में उमड़ी भीड़",
    tag: "Public Gathering",
    quote: "इकाना स्टेडियम में चल रहे आर्किटेक्चर एवं डिजाइन महोत्सव में दूसरे दिन भी उमड़ी दर्शकों की भारी भीड़। देश भर से आए छात्रों, डिजाइनर्स व आम जनता ने आधुनिक एग्जिबिशन स्टॉल्स का अवलोकन किया।",
    bgColor: "#FFF5EC",
    accentColor: "#EA580C",
  },
  {
    id: 8,
    num: "07",
    img: news8Img,
    publication: "Television Broadcast",
    edition: "Live News Bulletin",
    headline: "वास्तुकला महोत्सव का आयोजन: विशेष ग्राउंड रिपोर्ट",
    tag: "TV & Digital Broadcast",
    quote: "उत्तर प्रदेश आवास एवं विकास परिषद और राष्ट्रीय व राज्य मीडिया चैनलों पर तीन दिवसीय वास्तुकला महोत्सव का सजीव प्रसारण व विशेष विश्लेषण बुलेटिन।",
    bgColor: "#FDF0F5",
    accentColor: "#DB2777",
  },
  {
    id: 7,
    num: "08",
    img: news7Img,
    publication: "Dainik Jagran",
    edition: "City Broadsheet",
    headline: "आर्किभाव एलएएफ 2022 का तीन दिवसीय सम्मेलन संपन्न",
    tag: "Grand Conclave",
    quote: "'आर्किटेक्चर एक भाव है' — देश भर से जुटे विख्यात वास्तुविदों ने आधुनिक भवन निर्माण, स्मार्ट सिटी डिजाइन और सतत विकास से जुड़ी संभावनाओं पर निष्कर्ष साझा किए।",
    bgColor: "#F0FDF4",
    accentColor: "#16A34A",
  },
  {
    id: 9,
    num: "09",
    img: news9Img,
    publication: "Navbharat Times",
    edition: "NBT Lucknow City",
    headline: "सीपेज से घर की सुंदरता न होगी कम • नई तकनीक",
    tag: "Smart City & Materials",
    quote: "आधुनिक तकनीकों से होगा स्थायी समाधान; नए निर्माण तकनीकों, वॉटरप्रूफिंग, और हरित भवनों पर विशेष चर्चा के साथ छोटे शहरों में आर्किटेक्चरल प्रभाव का विस्तार।",
    bgColor: "#FFF9E6",
    accentColor: "#CA8A04",
  },
  {
    id: 10,
    num: "10",
    img: news10Img,
    publication: "Amar Ujala",
    edition: "Double-Spread Special",
    headline: "आर्किटेक्ट को गैर प्रशिक्षणार्थियों से करनी पड़ रही प्रतिस्पर्धा",
    tag: "Professional Standards",
    quote: "शहर के सुनियोजित विकास और सुरक्षा मानकों के लिए योग्य व पंजीकृत आर्किटेक्ट्स का होना अनिवार्य। लखनऊ में आर्किटेक्ट एसोसिएशन के महाधिवेशन की संपूर्ण विस्तृत समीक्षा।",
    bgColor: "#F5F0FF",
    accentColor: "#7C3AED",
  },
];

export default function LafInMediaSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const isDraggingRef = useRef(false);

  // Mouse Drag to Scroll State
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : newsArticles.length - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev < newsArticles.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  // Track active slide on scroll
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const slides = container.querySelectorAll("[data-news-slide]");
    let closestIndex = 0;
    let minDistance = Infinity;

    slides.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const distance = Math.abs(rect.left - containerRect.left);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  };

  // Scroll to slide by index
  const scrollToSlide = (index) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const slides = container.querySelectorAll("[data-news-slide]");
    if (slides[index]) {
      const containerRect = container.getBoundingClientRect();
      const slideRect = slides[index].getBoundingClientRect();
      const scrollOffset = slideRect.left - containerRect.left;
      container.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    const next = Math.min(newsArticles.length - 1, currentIndex + 1);
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = Math.max(0, currentIndex - 1);
    scrollToSlide(prev);
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    isDraggingRef.current = false;
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.6;
    if (Math.abs(walk) > 6) {
      isDraggingRef.current = true;
    }
    sliderRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section
      id="laf-in-media"
      className="relative overflow-hidden bg-[#FAF8F5] pt-8 sm:pt-12 lg:pt-14 pb-10 sm:pb-14 lg:pb-16 select-none font-sans border-t border-[#E8E2D8]"
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

      {/* Main Container Aligned to Navbar Width */}
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        
        {/* ================= SECTION HEADLINE (LEFT ALIGNED) ================= */}
        <div className="mb-8 sm:mb-10">
          <div className="flex pb-6 border-b border-neutral-900/15">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
                LAF In Media
              </h2>
            </motion.div>
          </div>
        </div>

        {/* ================= SLIDER CONTROL TOOLBAR ================= */}
        <div className="mb-6 flex items-center justify-end gap-4">
          {/* Right Side Controls (Counter & Buttons) */}
          <div className="flex items-center gap-3">
            {/* Active Counter Badge */}
            <div className="font-mono text-xs sm:text-sm font-bold tracking-widest text-neutral-700 bg-white border border-neutral-300 px-3 py-1.5 rounded-xl shadow-2xs">
              <span className="text-[#D8232A]">{newsArticles[currentIndex].num}</span>
              <span className="text-neutral-400 mx-1">/</span>
              <span>10</span>
            </div>

            {/* Prev Button */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all cursor-pointer shadow-2xs ${
                currentIndex === 0
                  ? "border-neutral-200 text-neutral-300 cursor-not-allowed bg-white/50"
                  : "border-neutral-300 text-neutral-800 bg-white hover:bg-[#D8232A] hover:text-white hover:border-[#D8232A] active:scale-95"
              }`}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentIndex === newsArticles.length - 1}
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all cursor-pointer shadow-2xs ${
                currentIndex === newsArticles.length - 1
                  ? "border-neutral-200 text-neutral-300 cursor-not-allowed bg-white/50"
                  : "border-neutral-300 text-neutral-800 bg-white hover:bg-[#D8232A] hover:text-white hover:border-[#D8232A] active:scale-95"
              }`}
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= HORIZONTAL SWIPE SHOWCASE ================= */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 pb-6 select-none no-scrollbar cursor-grab active:cursor-grabbing items-stretch"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {newsArticles.map((article, index) => {
            return (
              <div
                key={article.id}
                data-news-slide
                onClick={() => !isDraggingRef.current && setSelectedIndex(index)}
                className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-auto shrink-0 snap-start rounded-3xl p-2 sm:p-3 bg-white border border-[#E7E2DA] shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:border-[#D8232A] hover:shadow-[0_16px_45px_rgba(216,35,42,0.12)] transition-all duration-300 relative overflow-hidden flex cursor-pointer group"
              >
                {/* Inner container reduced padding to fit image nicely */}
                <div className="w-full rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={article.img}
                    alt="LAF In Media News Clipping"
                    loading="lazy"
                    className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Hover overlay hint - ONLY ICON with minimal/reduced blur */}
                <div 
                  className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none"
                  style={{ backdropFilter: "blur(0.8px)", WebkitBackdropFilter: "blur(0.8px)" }}
                >
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white text-[#D8232A] shadow-xl flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 border border-white/90">
                    <Eye className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= PAGINATION PILLS INDICATOR ================= */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {newsArticles.map((art, idx) => (
            <button
              key={art.id}
              onClick={() => scrollToSlide(idx)}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-[#D8232A]"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* ================= STATISTICS BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#E8E2D8] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#D8232A]" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Stat 1 */}
            <div className="text-left">
              <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#18181B] tracking-tight leading-none">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-medium text-neutral-600 leading-snug mt-2.5 max-w-[220px]">
                influencers<br className="hidden sm:block" /> captured the event
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-left">
              <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#18181B] tracking-tight leading-none">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-medium text-neutral-600 leading-snug mt-2.5 max-w-[220px]">
                Media House<br className="hidden sm:block" /> covered the event
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-left">
              <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#18181B] tracking-tight leading-none">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-medium text-neutral-600 leading-snug mt-2.5 max-w-[240px]">
                radio spots<br className="hidden sm:block" /> daily for a month
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ================= LIGHTBOX PREVIEW MODAL ================= */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/25 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 select-none"
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
                className="absolute -top-12 right-0 p-2.5 rounded-full bg-white hover:bg-[#D8232A] hover:text-white border border-[#E6DFD3] text-neutral-800 shadow-md transition-all focus:outline-none cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={() =>
                  setSelectedIndex((prev) => (prev > 0 ? prev - 1 : newsArticles.length - 1))
                }
                className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white hover:bg-[#D8232A] hover:text-white border border-[#E6DFD3] text-neutral-800 shadow-lg transition-all focus:outline-none z-10 cursor-pointer"
                aria-label="Previous Clipping"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={() =>
                  setSelectedIndex((prev) => (prev < newsArticles.length - 1 ? prev + 1 : 0))
                }
                className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white hover:bg-[#D8232A] hover:text-white border border-[#E6DFD3] text-neutral-800 shadow-lg transition-all focus:outline-none z-10 cursor-pointer"
                aria-label="Next Clipping"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Container */}
              <div className="w-full max-h-[78vh] flex items-center justify-center overflow-auto rounded-3xl bg-white/95 backdrop-blur-md p-3 sm:p-6 border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                <img
                  src={newsArticles[selectedIndex].img}
                  alt={newsArticles[selectedIndex].headline}
                  className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-md"
                />
              </div>

              {/* Caption and Meta */}
              <div className="w-full mt-4 flex items-center justify-between text-neutral-700 text-xs font-mono px-2">
                <span className="font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#E6DFD3] shadow-xs text-[#D8232A]">
                  {newsArticles[selectedIndex].publication} • {newsArticles[selectedIndex].edition}
                </span>
                <span className="bg-white/90 backdrop-blur-md border border-[#E6DFD3] px-3.5 py-1.5 rounded-xl text-neutral-800 font-bold shadow-xs">
                  {selectedIndex + 1} of {newsArticles.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}