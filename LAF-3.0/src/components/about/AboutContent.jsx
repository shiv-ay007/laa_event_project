import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Landmark,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import secAboutImg from "../../assets/images/sec-about.PNG";
import lafLogo from "../../assets/images/logo.webp";

// High-resolution official history logos
import laf1Logo from "../../assets/images/laf1_logo.webp";
import laf2Logo from "../../assets/images/laf2_logo.webp";
import laf3Logo from "../../assets/images/logo.webp";

// Authentic event photos
import historyPhoto1 from "../../assets/images/history_group_hd.webp";
import historyPhoto2 from "../../assets/images/history_photo_2.webp";
import historyPhoto3 from "../../assets/images/history_photo_3.webp";

const editions = [
  {
    id: "laf-1",
    edition: "LAF 1.0",
    year: "2022",
    dates: "4–6 November 2022",
    venue: "Ekana International Stadium, Lucknow",
    title: "Avirbhav – Lucknow Architecture Festival 2022",
    logo: laf1Logo,
    photo: historyPhoto1,
    accentColor: "#1C1917",
    barColor: "bg-[#1C1917]",
    badgeBg: "bg-[#1C1917]",
    description:
      "Lucknow Architecture Festival (LAF) has emerged as an important platform for the architecture, design, construction and urban-development fraternity of Uttar Pradesh. The first major edition, “Avirbhav - Lucknow Architecture Festival 2022,” was held from 4–6 November 2022 at Ekana International Stadium, Lucknow. Organised by the Lucknow Architects Association (LAA) in association with industry and knowledge partners, the three-day festival brought together eminent architects, academicians, government representatives and industry leaders. Major attractions included an extensive design and lifestyle exhibition with 80+ exhibitors, the Tana-Bana symposium, architecture design competition, Best Thesis Awards, heritage walk, art and cultural programmes, film screening and workshops on sustainable materials and practices.",
    speakers:
      "Eminent speakers included Ar. Habeeb Khan, Ar. Salil Ranadive, Dr. M. Kailasa Rao, Ar. Jai Kartikeya, Ar. Shubhrajit Das, Ar. Rajesh Advani, Ar. Biju Kuriakose, Ar. Amit Gupta and Ar. Britta Knobel, among others.",
    highlights: ["80+ Exhibitors", "Tana-Bana Symposium", "Best Thesis Awards", "Heritage Walk"],
    isUpcoming: false,
  },
  {
    id: "laf-2",
    edition: "LAF 2.0",
    year: "2025",
    dates: "10–12 January 2025",
    venue: "Ekana International Stadium, Lucknow",
    title: "Sustainable Urban Development & SCR Vision",
    logo: laf2Logo,
    photo: historyPhoto2,
    accentColor: "#1C1917",
    barColor: "bg-[#1C1917]",
    badgeBg: "bg-[#1C1917]",
    description:
      "Building on the success of 2022, Lucknow Architecture Festival 2.0 (LAF 2.0) was organised from 10–12 January 2025 at Ekana International Stadium, Lucknow with a stronger focus on sustainable urban development and the future of Lucknow and the State Capital Region (SCR). The festival featured a large Build Expo with 100+ participating companies, knowledge sessions, panel discussions, workshops, heritage and urban sketching activities, architecture competitions, student model-making and photography competitions, cultural programmes and networking events.",
    speakers:
      "The programme brought together senior government officials, architects, planners, academicians and industry leaders, including Dr. Balkar Singh, Divakar Tripathi (Retd. IAS), Inderjit Singh, Ar. Sabina Singh, Ar. Shubhra Mittal, Ar. Rajesh Advani, Ar. Sanjay Kavinde, Ar. Gurmeet Sangha Rai and Prof. Shubhrajit Das, among others. The event was kickstarted with the auspicious Sunderkand Path by the renowned Shri Rasraj Ji Maharaj, while the second day was inaugurated by Hon'ble MSME Minister Shri Rakesh Sachan. The three-day festival concluded with the valedictory ceremony graced by Hon'ble Deputy Chief Minister Shri Brajesh Pathak, marking the successful culmination of LAF 2.0 and reinforcing its vision for a more sustainable, resilient and future-ready Lucknow and State Capital Region.",
    highlights: ["100+ Participating Companies", "Build Expo", "Knowledge Sessions", "Valedictory by Dy. CM"],
    isUpcoming: false,
  },
  {
    id: "laf-3",
    edition: "LAF 3.0",
    year: "2027",
    dates: "22–24 January 2027",
    venue: "Lucknow, Uttar Pradesh",
    title: "The Next Chapter – Lucknow Architecture Festival 3.0",
    logo: laf3Logo,
    photo: historyPhoto3,
    accentColor: "#D8232A",
    barColor: "bg-[#D8232A]",
    badgeBg: "bg-[#D8232A]",
    description:
      "Together, the 2022 and 2025 editions established LAF as a multidisciplinary platform connecting architecture, urban planning, construction, interiors, technology, sustainability, policy, academia and industry. With the participation of prominent government dignitaries, professional institutions, corporate partners, sponsors, exhibitors and students, the festival has evolved beyond a conventional architecture conference into a comprehensive celebration of Lucknow's architectural heritage, contemporary design and vision for sustainable urban growth.",
    speakers:
      "Featuring a grand congregation of industry leaders, global keynote architects, urban think tanks, policy makers, leading infrastructure brands, students and creative practitioners.",
    highlights: ["Global Conclave", "Urban Think Tank", "Vision SCR – UP", "Empowering Students"],
    isUpcoming: true,
  },
];

const AboutContent = () => {
  return (
    <div className="w-full font-sans text-[#181818]">
      {/* ========================================================================= */}
      {/* 1. ABOUT UTTAR PRADESH SECTION (Section 2 - Exact Content & sec-about.PNG) */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#E7E2DA] overflow-hidden">
        {/* Architectural Watermark Grid */}
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120, 90, 40, 0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120, 90, 40, 0.07) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Area (Columns 1-7) */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              {/* Header Badges matching Home Theme */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="px-3.5 py-1 bg-[#D8232A] text-white font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-md shadow-xs">
                  ABOUT
                </span>
                <span className="px-3.5 py-1 bg-[#171717] text-white font-serif text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md shadow-xs">
                  UTTAR PRADESH
                </span>
              </div>

              {/* Editorial Title */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] leading-[1.18] mb-6">
                A Confluence of Heritage, Infrastructure &amp;{" "}
                <span className="italic font-serif text-[#D8232A]">
                  Economic Surge
                </span>
              </h2>

              {/* Paragraphs */}
              <div className="space-y-4 text-neutral-700 text-base sm:text-[17px] leading-[1.8] font-normal">
                <p>
                  The economic trend has consequently developed into a magnet for
                  real estate. The state&apos;s lifestyle and amenities are improving
                  because of these advancements. Being the state&apos;s capital,
                  Lucknow has enormous potential. As a result of increases in per
                  capita income, productivity, favourable market prices, and large
                  credit flow in the city, demand for branded consumer goods and
                  property has recently surged.
                </p>

                <p>
                  Being a hub of heritage as well as a fast emerging economy, it
                  attracts an influx of people from all surrounding cities,
                  districts and villages. Lucknow offers a distinctive business
                  philosophy that combines the city&apos;s rich cultural heritage with
                  contemporary business methods.
                </p>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E2DA] shadow-sm">
                  <p className="font-semibold text-neutral-900 leading-relaxed flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D8232A] mt-2 shrink-0 animate-pulse" />
                    <span>
                      With the highest density of young population, UP is the
                      richest state when we talk about demographic resources.
                    </span>
                  </p>
                </div>
              </div>

              {/* 3 Core Highlight Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8">
                <div className="p-3.5 rounded-xl bg-white border border-[#E7E2DA] shadow-xs text-left">
                  <TrendingUp className="w-5 h-5 text-[#D8232A] mb-1.5" />
                  <div className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    Fast-Emerging Economy
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    Prime magnet for real estate &amp; capital
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E7E2DA] shadow-xs text-left">
                  <Users className="w-5 h-5 text-[#D8232A] mb-1.5" />
                  <div className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    Demographic Wealth
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    Highest density of vibrant youth in India
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E7E2DA] shadow-xs text-left">
                  <Landmark className="w-5 h-5 text-[#D8232A] mb-1.5" />
                  <div className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    Cultural Capital
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    Historic legacy meeting modern enterprise
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Area (Columns 8-12): sec-about.PNG Artwork Card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col items-center justify-center"
            >
              <div className="relative w-full max-w-[480px] p-4 sm:p-5 rounded-3xl bg-white border border-[#E7E2DA] shadow-[0_12px_36px_rgba(0,0,0,0.06)] flex flex-col items-center overflow-hidden">
                {/* Subtle decorative background glow */}
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-red-100/40 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-neutral-100/60 blur-2xl pointer-events-none" />

                {/* Section About Image */}
                <div className="relative w-full rounded-2xl overflow-hidden border border-[#E7E2DA] bg-[#FAF8F5] group">
                  <img
                    src={secAboutImg}
                    alt="Uttar Pradesh Heritage and Architecture"
                    className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono drop-shadow-md">
                    <span className="font-semibold">✦ Uttar Pradesh Heritage</span>
                    <span className="text-[11px] text-white/80">Architecture &amp; Growth</span>
                  </div>
                </div>

                {/* Festival Logo Footer */}
                <div className="pt-4 px-2 w-full flex items-center justify-between border-t border-neutral-100 mt-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={lafLogo}
                      alt="Lucknow Architecture Festival 3.0"
                      className="h-10 sm:h-11 w-auto object-contain"
                    />
                    <div>
                      <div className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-[#D8232A]">
                        LUCKNOW ARCHITECTURE FESTIVAL
                      </div>
                      <div className="text-xs font-medium text-neutral-600">
                        Shaping the Future of Uttar Pradesh
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FESTIVAL EDITIONS & LEGACY (LAF 1.0, 2.0, 3.0 Timeline & History)      */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 bg-[#FAF8F5] overflow-hidden">
        {/* Section Header */}
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mb-14 sm:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <span className="w-10 sm:w-16 h-px bg-[#D8232A]/40" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#D8232A]">
              FESTIVAL LEGACY &amp; EDITIONS
            </span>
            <span className="w-10 sm:w-16 h-px bg-[#D8232A]/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-[#171717] leading-tight"
          >
            The Evolution of{" "}
            <span className="italic font-serif text-[#D8232A]">
              Lucknow Architecture Festival
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed"
          >
            Documenting the transformative milestones of North India&apos;s premier design,
            architecture and urban conclave from its inception in 2022 to the vision for 2027.
          </motion.p>
        </div>

        {/* Editions Cards List */}
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
          {editions.map((item, index) => {
            const isEven = index % 2 === 1;
            const isUpcoming = item.isUpcoming;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`relative bg-white rounded-3xl border ${
                  isUpcoming
                    ? "border-2 border-[#D8232A]/35 shadow-[0_10px_35px_rgba(216,35,42,0.08)]"
                    : "border-[#E7E2DA] shadow-[0_6px_24px_rgba(0,0,0,0.04)]"
                } hover:shadow-[0_16px_40px_rgba(216,35,42,0.1)] transition-all duration-300 overflow-hidden`}
              >
                {/* Top Colored Accent Stripe */}
                <div className={`h-1.5 w-full ${item.barColor}`} />

                {isUpcoming && (
                  <div className="absolute top-4 right-6 sm:right-10 px-3.5 py-1 rounded-full bg-[#D8232A] text-white text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase shadow-md flex items-center gap-1.5 z-20">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    UPCOMING EVENT • UNDER PLANNING
                  </div>
                )}

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    
                    {/* Content Side (7 Cols) */}
                    <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      {/* Edition Badge & Logo Header */}
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.logo}
                            alt={item.edition}
                            className="h-12 sm:h-14 w-auto object-contain rounded-lg p-1 bg-white border border-[#E7E2DA] shadow-xs"
                          />
                          <div>
                            <span
                              className={`inline-block text-xs font-mono font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full text-white ${item.badgeBg}`}
                            >
                              {item.edition} • {item.year}
                            </span>
                            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] mt-1">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Venue and Dates Info */}
                      <div className="flex flex-wrap items-center gap-4 text-xs sm:text-[13px] text-neutral-600 font-mono py-2.5 border-y border-neutral-100 mb-5">
                        <span className="flex items-center gap-1.5 text-neutral-800 font-semibold">
                          <Calendar className="w-4 h-4 text-[#D8232A]" />
                          {item.dates}
                        </span>
                        <span className="text-neutral-300">•</span>
                        <span className="flex items-center gap-1.5 text-neutral-800 font-semibold">
                          <MapPin className="w-4 h-4 text-[#D8232A]" />
                          {item.venue}
                        </span>
                      </div>

                      {/* Main Detailed Description */}
                      <p className="text-neutral-700 text-sm sm:text-base leading-[1.8] font-normal mb-5 text-justify">
                        {item.description}
                      </p>

                      {/* Speakers & Dignitaries Callout */}
                      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] mb-5">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#D8232A] font-mono mb-1.5 flex items-center gap-2">
                          <Award className="w-4 h-4 text-[#D8232A]" />
                          <span>Eminent Speakers, Leadership &amp; Dignitaries</span>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                          {item.speakers}
                        </p>
                      </div>

                      {/* Highlight Chips */}
                      <div className="flex flex-wrap items-center gap-2">
                        {item.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E7E2DA] text-neutral-800 text-[11px] font-semibold tracking-wide shadow-xs"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D8232A]" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Image / Real Event Photo Side (5 Cols) */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="relative rounded-2xl overflow-hidden border border-[#E7E2DA] shadow-md group bg-[#FAF8F5]">
                        <img
                          src={item.photo}
                          alt={`${item.edition} Event Photography`}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-mono font-medium drop-shadow-md flex items-center justify-between">
                          <span>✦ {item.edition} Photo Archive</span>
                          <span className="text-[11px] text-white/80">Lucknow</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AboutContent;