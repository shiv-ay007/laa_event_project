import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Clock } from "lucide-react";

import laf2022 from "../../assets/images/history123.jpeg";
import laf2025 from "../../assets/images/history2.png";
import laf2027 from "../../assets/images/logo.webp"; // LAF 3.0 Logo

import historyPhoto1 from "../../assets/images/Group Photo.png";
import historyPhoto2 from "../../assets/images/history_photo_2.webp";

import bgHist from "../../assets/images/bg-hist.png";

const editions = [
  {
    id: "2022",
    version: "LAF 1.0 — 2022",
    year: "2022",
    badgeBg: "bg-[#1C1917]",
    barBg: "bg-[#1C1917]",
    cardBorder: "border-[#E7E2DA]",
    ringBorder: "border-[#E7E2DA]",
    logo: laf2022,
    photo: historyPhoto1,
    imagePosition: "right",
    title: "Avirbhav – Lucknow Architecture Festival 2022",
    description:
      "Lucknow Architecture Festival (LAF) has emerged as an important platform for the architecture, design, construction and urban-development fraternity of Uttar Pradesh. The first major edition, “Avirbhav - Lucknow Architecture Festival 2022,” was held from 4–6 November 2022 at Ekana International Stadium, Lucknow. Organised by the Lucknow Architects Association (LAA) in association with industry and knowledge partners, the three-day festival brought together eminent architects, academicians, government representatives and industry leaders. Major attractions included an extensive design and lifestyle exhibition with 80+ exhibitors, the Tana-Bana symposium, architecture design competition, Best Thesis Awards, heritage walk, art and cultural programmes, film screening and workshops on sustainable materials and practices. Eminent speakers included Ar. Habeeb Khan, Ar. Salil Ranadive, Dr. M. Kailasa Rao, Ar. Jai Kartikeya, Ar. Shubhrajit Das, Ar. Rajesh Advani, Ar. Biju Kuriakose, Ar. Amit Gupta and Ar. Britta Knobel, among others.",
    upcoming: false,
  },
  {
    id: "2025",
    version: "LAF 2.0 — 2025",
    year: "2025",
    badgeBg: "bg-[#1C1917]",
    barBg: "bg-[#1C1917]",
    cardBorder: "border-[#E7E2DA]",
    ringBorder: "border-[#E7E2DA]",
    logo: laf2025,
    photo: historyPhoto2,
    imagePosition: "left",
    title: "Lucknow Architecture Festival 2.0",
    description:
      "Building on the success of 2022, Lucknow Architecture Festival 2.0 (LAF 2.0) was organised from 10–12 January 2025 at Ekana International Stadium, Lucknow, with a stronger focus on sustainable urban development and the future of Lucknow and the State Capital Region (SCR). The festival featured a large Build Expo with 100+ participating companies, knowledge sessions, panel discussions, workshops, heritage and urban sketching activities, architecture competitions, student model-making and photography competitions, cultural programmes and networking events. The programme brought together senior government officials, architects, planners, academicians and industry leaders, including Dr. Balkar Singh, Divakar Tripathi (Retd. IAS), Inderjit Singh, Ar. Sabina Singh, Ar. Shubhra Mittal, Ar. Rajesh Advani, Ar. Sanjay Kavinde, Ar. Gurmeet Sangha Rai and Prof. Shubhrajit Das, among others. The event was kickstarted with the auspicious Sundarkand Path by the renowned Shri Rasraj Ji Maharaj, while the second day was inaugurated by Hon'ble MSME Minister Shri Rakesh Sachan. The three-day festival concluded with the valedictory ceremony graced by Hon'ble Deputy Chief Minister Shri Brajesh Pathak, marking the successful culmination of LAF 2.0 and reinforcing its vision for a more sustainable, resilient and future-ready Lucknow and State Capital Region.",
    upcoming: false,
  },
  {
    id: "2027",
    version: "LAF 3.0 — 2027",
    year: "2027",
    badgeBg: "bg-[#D8232A]",
    barBg: "bg-[#D8232A]",
    cardBorder: "border-[#D8232A]/40",
    ringBorder: "border-[#D8232A]/40",
    logo: laf2027, 
    photo: null, 
    imagePosition: "right",
    title: "The Next Chapter – Lucknow Architecture Festival 3.0",
    description:
      "Together, the 2022 and 2025 editions established LAF as a multidisciplinary platform connecting architecture, urban planning, construction, interiors, technology, sustainability, policy, academia and industry. With the participation of prominent government dignitaries, professional institutions, corporate partners, sponsors, exhibitors and students, the festival has evolved beyond a conventional architecture conference into a comprehensive celebration of Lucknow's architectural heritage, contemporary design and vision for sustainable urban growth.",
    upcoming: true,
  },
];

const LAFHistory = () => {
  return (
    <section
      id="laf-history"
      className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-[#FAF8F5] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgHist})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* SECTION HEADING */}
        <div className="mb-8 sm:mb-14 flex flex-col items-start gap-1.5">
          <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
            History of LAF
          </h2>
          <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
            Lucknow Architecture Festival
          </h2>
        </div>

        {/* THREE HISTORY CARDS */}
        <div className="space-y-6 sm:space-y-10">

          {editions.map((item) => {
            const imageOnLeft = item.imagePosition === "left";
            const isUpcoming = item.upcoming;

            return (
              <article
                key={item.id}
                className={`relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-[32px] lg:rounded-[40px] bg-white border ${
                  isUpcoming
                    ? "border-2 border-[#D8232A]/35 shadow-[0_8px_30px_rgba(216,35,42,0.08)] bg-gradient-to-br from-white via-white to-red-50/20"
                    : `${item.cardBorder} shadow-[0_4px_24px_rgba(0,0,0,0.04)]`
                } hover:shadow-lg transition-all duration-300`}
              >

                {/* Floating Top Badge for Upcoming Card */}
                {isUpcoming && (
                  <div className="absolute -top-3.5 right-6 sm:right-10 px-3.5 py-1 rounded-full bg-[#D8232A] text-white text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase shadow-md flex items-center gap-1.5 z-20">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    UPCOMING EVENT • UNDER PLANNING
                  </div>
                )}

                {/* =====================================================
                    MOBILE / TABLET VIEW (< lg)
                ====================================================== */}
                <div className="block lg:hidden space-y-4">

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-stretch gap-2.5 sm:gap-3 min-w-0 flex-1">
                      <div className={`w-1 sm:w-[4px] rounded-full ${item.barBg} flex-shrink-0 self-stretch`} />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`inline-block px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-[4px] text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase ${item.badgeBg}`}>
                            {item.version}
                          </span>
                          {isUpcoming && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold tracking-wider uppercase">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                              PENDING EVENT
                            </span>
                          )}
                        </div>
                        <h3 className="mt-2 font-sans font-bold text-base sm:text-xl leading-snug text-[#111827]">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Mobile Logo (Only for 2022 & 2025) */}
                    {!isUpcoming && (
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center">
                        <div className={`absolute inset-0 rounded-full border ${item.ringBorder}`} />
                        <div className="relative w-[88%] h-[88%] rounded-full bg-white border border-neutral-200/70 flex items-center justify-center p-1.5 sm:p-2 overflow-hidden shadow-xs">
                          <img src={item.logo} alt={`${item.version} Logo`} loading="lazy" className="w-full h-full object-contain select-none" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Visual Container */}
                  <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200/70 shadow-2xs relative bg-neutral-900 flex items-center justify-center min-h-[220px]">
                    {!isUpcoming ? (
                      <img src={item.photo} alt={item.title} loading="lazy" className="w-full h-auto object-cover select-none" />
                    ) : (
                      /* Premium Logo Display for Upcoming Card (Mobile) - Centered & Bigger */
                      <div className="w-full h-full absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-br from-red-50 via-white to-red-50/50">
                        <img src={item.logo} alt="LAF 3.0 Logo" className="w-[90%] max-h-[200px] object-contain drop-shadow-xl" />
                      </div>
                    )}
                  </div>

                  {/* Mobile Description */}
                  <p className="text-neutral-600 text-xs text-justify sm:text-[14px] leading-relaxed sm:leading-[1.8] font-normal">
                    {item.description}
                  </p>

                  {/* Upcoming Mobile Highlights & Button */}
                  {isUpcoming && (
                    <div className="pt-2">
                      <div className="p-3 rounded-xl bg-red-50/70 border border-red-100 text-xs space-y-1.5 text-neutral-700">
                        <div className="font-bold text-[#D8232A] flex items-center gap-1.5 uppercase text-[11px] tracking-wider">
                          <Sparkles className="w-3.5 h-3.5" /> What to expect
                        </div>
                        <div className="grid grid-cols-2 gap-1 text-[11px]">
                          <span>• Mega Build Expo</span>
                          <span>• Global Architects</span>
                          <span>• Design Contests</span>
                          <span>• Urban Dialogue</span>
                        </div>
                      </div>
                      <a href="#registration" className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#D8232A] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                        <span>Register Early Interest</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                </div>

                {/* =====================================================
                    DESKTOP VIEW (lg+)
                ====================================================== */}
                <div className="hidden lg:grid grid-cols-2 items-stretch gap-10 lg:gap-12">

                  {/* TEXT SECTION */}
                  <div className={`w-full min-w-0 ${imageOnLeft ? "order-2" : "order-1"}`}>
                    <div className="flex items-stretch gap-4">
                      <div className={`w-[5px] rounded-full ${item.barBg} flex-shrink-0`} />
                      <div className="min-w-0 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <span className={`inline-block px-3.5 py-1 rounded-[4px] text-white text-[13px] font-bold tracking-wider uppercase ${item.badgeBg}`}>
                              {item.version}
                            </span>
                            {isUpcoming && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold tracking-wider uppercase">
                                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                                PENDING / EVENT UNDER PLANNING
                              </span>
                            )}
                          </div>
                          <h3 className="mt-3 mb-3 font-sans font-bold text-xl lg:text-[22px] leading-snug text-[#111827]">
                            {item.title}
                          </h3>
                          <p className="text-neutral-600 text-[14px] lg:text-[14.5px] leading-[1.85] font-normal text-justify">
                            {item.description}
                          </p>
                        </div>

                        {/* Card 3 Preview Box & Action Button */}
                        {isUpcoming && (
                          <div className="mt-5 space-y-4">
                            <div className="p-4 rounded-xl bg-gradient-to-r from-red-50/80 via-[#FAF8F5] to-amber-50/50 border border-[#E8E2D8]">
                              <div className="flex items-center justify-between mb-2.5 pb-1.5 border-b border-[#E8E2D8]/70">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#D8232A] flex items-center gap-1.5">
                                  <Sparkles className="w-4 h-4 text-[#D8232A]" />
                                  What's In The Pipeline for LAF 3.0
                                </span>
                                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-semibold">
                                  COMING 2027
                                </span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-xs text-neutral-700">
                                <div className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8232A]" />
                                  <span className="font-medium">Mega 100+ Brands Build Expo</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8232A]" />
                                  <span className="font-medium">International Keynote Speakers</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8232A]" />
                                  <span className="font-medium">State Capital Region Dialogue</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8232A]" />
                                  <span className="font-medium">Architecture Competitions & Awards</span>
                                </div>
                              </div>
                            </div>

                            {/* <div className="flex flex-wrap items-center gap-3 pt-1">
                              <a href="#registration" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D8232A] hover:bg-[#B81D23] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm hover:shadow-md transition-all group/btn">
                                <span>Register Early Interest</span>
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                              </a>
                              <span className="text-xs text-neutral-500 font-medium">
                                Dates, schedule & venue details will be announced soon
                              </span>
                            </div> */}

                            <div className="flex flex-wrap items-center gap-3 pt-1">
  {/* 🚀 Yaha <a> ki jagah <Link> use kiya hai */}
  <Link 
    to="/register" 
    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D8232A] hover:bg-[#B81D23] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm hover:shadow-md transition-all group/btn"
  >
    <span>Register Early Interest</span>
    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
  </Link>
  
  <span className="text-xs text-neutral-500 font-medium">
    Dates, schedule & venue details will be announced soon
  </span>
</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* IMAGE / VISUAL SECTION */}
                  <div className={`relative w-full min-w-0 self-stretch ${imageOnLeft ? "order-1" : "order-2"}`}>
                    
                    {/* 🚀 UPDATED: For upcoming card, small circle logo is REMOVED, and big logo is CENTERED & ENLARGED */}
                    {!isUpcoming ? (
                      /* Cards 1 & 2: Logo on top + Photo below */
                      <div className="absolute inset-0 flex flex-col items-center gap-3 lg:gap-4">
                        <div className="relative h-[32%] max-h-[190px] aspect-square flex-shrink-0 flex items-center justify-center">
                          <div className={`absolute inset-0 rounded-full border ${item.ringBorder}`} />
                          <div className="relative w-[88%] h-[88%] rounded-full bg-white border border-neutral-200/70 flex items-center justify-center p-2 lg:p-3 overflow-hidden">
                            <img src={item.logo} alt={`${item.version} Logo`} loading="lazy" className="w-full h-full object-contain select-none transition-transform duration-500 hover:scale-105" />
                          </div>
                        </div>
                        <div className="w-full flex-1 min-h-0 rounded-2xl overflow-hidden border border-neutral-200/70 shadow-2xs group">
                          <img src={item.photo} alt={item.title} loading="lazy" className="w-full h-full object-cover object-center select-none transition-transform duration-500 group-hover:scale-[1.02]" />
                        </div>
                      </div>
                    ) : (
                      /* Card 3: Only Big Logo, Centered and Enlarged */
                      <div className="w-full h-full min-h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D8232A]/25 shadow-md relative group bg-white flex items-center justify-center p-6 sm:p-10">
                        
                        {/* Premium subtle background pattern */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" 
                             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #D8232A 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
                        <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 via-transparent to-red-50/40 pointer-events-none" />

                        {/* Big Centered Logo */}
                        <img 
                          src={item.logo} 
                          alt="LAF 3.0" 
                          className="w-[95%] max-h-[350px] object-contain relative z-10 drop-shadow-xl transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>
                    )}

                  </div>

                </div>
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default LAFHistory;