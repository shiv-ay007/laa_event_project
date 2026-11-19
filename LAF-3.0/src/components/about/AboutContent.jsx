import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  MapPin,
  Sparkles,
  TrendingUp,
  Users,
  Award,
  Landmark,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import monumentImg from "../../assets/images/about-monument-trans.png";
import lafLogo from "../../assets/images/logo.webp";

// History logos & photos
import laf1Logo from "../../assets/images/history123.jpeg";
import laf2Logo from "../../assets/images/history2.png";
import laf3Logo from "../../assets/images/history3.png";

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
    accentColor: "#F97316",
    badgeGradient: "from-[#F97316] to-[#EA580C]",
    description:
      "Lucknow Architecture Festival (LAF) has emerged as an important platform for the architecture, design, construction and urban-development fraternity of Uttar Pradesh. The first major edition, “Avirbhav - Lucknow Architecture Festival 2022,” was held from 4–6 November 2022 at Ekana International Stadium, Lucknow. Organised by the Lucknow Architects Association (LAA) in association with industry and knowledge partners, the three-day festival brought together eminent architects, academicians, government representatives and industry leaders. Major attractions included an extensive design and lifestyle exhibition with 80+ exhibitors, the Tana-Bana symposium, architecture design competition, Best Thesis Awards, heritage walk, art and cultural programmes, film screening and workshops on sustainable materials and practices.",
    speakers:
      "Eminent speakers included Ar. Habeeb Khan, Ar. Salil Ranadive, Dr. M. Kailasa Rao, Ar. Jai Kartikeya, Ar. Shubhrajit Das, Ar. Rajesh Advani, Ar. Biju Kuriakose, Ar. Amit Gupta and Ar. Britta Knobel, among others.",
    highlights: ["80+ Exhibitors", "Tana-Bana Symposium", "Best Thesis Awards", "Heritage Walk"],
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
    accentColor: "#7C3AED",
    badgeGradient: "from-[#7C3AED] to-[#5B1A83]",
    description:
      "Building on the success of 2022, Lucknow Architecture Festival 2.0 (LAF 2.0) was organised from 10–12 January 2025 at Ekana International Stadium, Lucknow with a stronger focus on sustainable urban development and the future of Lucknow and the State Capital Region (SCR). The festival featured a large Build Expo with 100+ participating companies, knowledge sessions, panel discussions, workshops, heritage and urban sketching activities, architecture competitions, student model-making and photography competitions, cultural programmes and networking events.",
    speakers:
      "The programme brought together senior government officials, architects, planners, academicians and industry leaders, including Dr. Balkar Singh, Divakar Tripathi (Retd. IAS), Inderjit Singh, Ar. Sabina Singh, Ar. Shubhra Mittal, Ar. Rajesh Advani, Ar. Sanjay Kavinde, Ar. Gurmeet Sangha Rai and Prof. Shubhrajit Das, among others. The event was kickstarted with the auspicious Sunderkand Path by the renowned Shri Rasraj Ji Maharaj, while the second day was inaugurated by Hon'ble MSME Minister Shri Rakesh Sachan. The three-day festival concluded with the valedictory ceremony graced by Hon'ble Deputy Chief Minister Shri Brajesh Pathak, marking the successful culmination of LAF 2.0 and reinforcing its vision for a more sustainable, resilient and future-ready Lucknow and State Capital Region.",
    highlights: ["100+ Participating Companies", "Build Expo", "Knowledge Sessions", "Valedictory by Dy. CM"],
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
    accentColor: "#EC4899",
    badgeGradient: "from-[#EC4899] to-[#930777]",
    description:
      "Together, the 2022 and 2025 editions established LAF as a multidisciplinary platform connecting architecture, urban planning, construction, interiors, technology, sustainability, policy, academia and industry. With the participation of prominent government dignitaries, professional institutions, corporate partners, sponsors, exhibitors and students, the festival has evolved beyond a conventional architecture conference into a comprehensive celebration of Lucknow's architectural heritage, contemporary design and vision for sustainable urban growth.",
    speakers:
      "Featuring a grand congregation of industry leaders, global keynote architects, urban think tanks, policy makers, leading infrastructure brands, students and creative practitioners.",
    highlights: ["Global Conclave", "Urban Think Tank", "Vision SCR – UP", "Empowering Students"],
  },
];

const AboutContent = () => {
  return (
    <div className="w-full font-sans text-[#181818]">
      {/* ========================================================================= */}
      {/* 1. ABOUT UTTAR PRADESH SECTION (Exact Content & Artwork from Image 1)    */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#E6DFD3] overflow-hidden">
        {/* Subtle Architectural Pattern */}
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(180, 140, 60, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(180, 140, 60, 0.08) 1px, transparent 1px)
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
              {/* Red Header Tag (Matching Image 1 Exact Branding) */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="px-3.5 py-1.5 bg-[#C02626] text-white font-mono text-xs sm:text-[13px] font-black uppercase tracking-wider rounded-md shadow-xs">
                  About
                </span>
                <span className="px-3.5 py-1.5 bg-[#991B1B] text-white font-serif text-sm sm:text-base font-bold uppercase tracking-wider rounded-md shadow-xs">
                  Uttar Pradesh
                </span>
              </div>

              {/* Editorial Title */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] leading-[1.18] mb-6">
                A Confluence of Heritage, Infrastructure &amp;{" "}
                <span className="italic font-serif bg-gradient-to-r from-[#D96204] via-[#C02626] to-[#7C3AED] bg-clip-text text-transparent">
                  Economic Surge
                </span>
              </h2>

              {/* Exact Paragraphs from Image 1 */}
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

                <div className="p-4 sm:p-5 rounded-2xl bg-white/80 border border-[#D4AF37]/35 shadow-sm">
                  <p className="font-semibold text-neutral-900 leading-relaxed flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C02626] mt-2 shrink-0 animate-pulse" />
                    <span>
                      With the highest density of young population, UP is the
                      richest state when we talk about demographic resources.
                    </span>
                  </p>
                </div>
              </div>

              {/* 3 Core Highlight Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8">
                <div className="p-3.5 rounded-xl bg-white/60 border border-[#E6DFD3] shadow-xs text-left">
                  <TrendingUp className="w-5 h-5 text-[#C02626] mb-1.5" />
                  <div className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    Fast-Emerging Economy
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    Prime magnet for real estate &amp; capital
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/60 border border-[#E6DFD3] shadow-xs text-left">
                  <Users className="w-5 h-5 text-[#D96204] mb-1.5" />
                  <div className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    Demographic Wealth
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    Highest density of vibrant youth in India
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/60 border border-[#E6DFD3] shadow-xs text-left">
                  <Landmark className="w-5 h-5 text-[#7C3AED] mb-1.5" />
                  <div className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    Cultural Capital
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    Historic legacy meeting modern enterprise
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Area (Columns 8-12): Artwork & Monument Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col items-center justify-center"
            >
              <div className="relative w-full max-w-[440px] p-6 sm:p-8 rounded-3xl bg-white/90 border border-[#D4AF37]/40 shadow-[0_12px_40px_rgba(212,175,55,0.15)] flex flex-col items-center text-center overflow-hidden">
                {/* Background decorative glow */}
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-amber-400/20 to-rose-400/10 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-tr from-purple-400/20 to-amber-400/10 blur-2xl pointer-events-none" />

                {/* Monument Artwork with Crimson Aura matching Image 1 */}
                <div className="relative mb-5 group">
                  <img
                    src={monumentImg}
                    alt="Lucknow Architectural Monument Illustration"
                    className="h-44 sm:h-52 w-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Festival Logo next to Artwork */}
                <div className="pt-3 border-t border-neutral-200/80 w-full flex flex-col items-center">
                  <img
                    src={lafLogo}
                    alt="Lucknow Architecture Festival 3.0"
                    className="h-10 sm:h-12 w-auto object-contain mb-2"
                  />
                  <div className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#B77A27]">
                    Lucknow Architecture Festival
                  </div>
                  <div className="text-xs font-semibold text-neutral-600 mt-0.5">
                    Shaping the Future of Uttar Pradesh
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
            <span className="w-10 sm:w-16 h-px bg-[#B77A27]/60" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#B77A27]">
              FESTIVAL LEGACY &amp; EDITIONS
            </span>
            <span className="w-10 sm:w-16 h-px bg-[#B77A27]/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-[#171717] leading-tight"
          >
            The Evolution of{" "}
            <span className="italic font-serif bg-gradient-to-r from-[#D96204] via-[#C02626] to-[#7C3AED] bg-clip-text text-transparent">
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

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative bg-white rounded-3xl border border-[#E6DFD3] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_45px_rgba(212,175,55,0.12)] transition-all duration-300 overflow-hidden"
              >
                {/* Top Colored Accent Stripe */}
                <div
                  className="h-1.5 w-full"
                  style={{
                    background:
                      index === 0
                        ? "linear-gradient(90deg, #F97316, #EA580C)"
                        : index === 1
                        ? "linear-gradient(90deg, #7C3AED, #5B1A83)"
                        : "linear-gradient(90deg, #EC4899, #930777)",
                  }}
                />

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
                            className="h-12 sm:h-14 w-auto object-contain rounded-lg p-1 bg-neutral-50 border border-neutral-200"
                          />
                          <div>
                            <span
                              className={`inline-block text-xs font-mono font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full text-white bg-gradient-to-r ${item.badgeGradient}`}
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
                          <Calendar className="w-4 h-4 text-[#B77A27]" />
                          {item.dates}
                        </span>
                        <span className="text-neutral-300">•</span>
                        <span className="flex items-center gap-1.5 text-neutral-800 font-semibold">
                          <MapPin className="w-4 h-4 text-[#B77A27]" />
                          {item.venue}
                        </span>
                      </div>

                      {/* Main Detailed Description (from Image 1) */}
                      <p className="text-neutral-700 text-sm sm:text-base leading-[1.8] font-normal mb-5">
                        {item.description}
                      </p>

                      {/* Speakers & Dignitaries Callout */}
                      <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E6DFD3] mb-5">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#B77A27] font-mono mb-1 flex items-center gap-2">
                          <Award className="w-4 h-4 text-[#B77A27]" />
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
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-[11px] font-semibold tracking-wide"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B77A27]" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Image / Real Event Photo Side (5 Cols) */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/35 shadow-md group">
                        <img
                          src={item.photo}
                          alt={`${item.edition} Event Photography`}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-mono font-medium drop-shadow-md">
                          ✦ {item.edition} Photo Archive • Lucknow
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
