
import React from "react";

import laf2022 from "../../assets/images/history123.jpeg";
import laf2025 from "../../assets/images/history2.png";
import laf2027 from "../../assets/images/history3.png";

import historyPhoto1 from "../../assets/images/history_group_hd.webp";
import historyPhoto2 from "../../assets/images/history_photo_2.webp";
import historyPhoto3 from "../../assets/images/history_photo_3.webp";

import bgHist from "../../assets/images/bg-hist.png";

const editions = [
  {
    id: "2022",
    version: "LAF 1.0 — 2022",
    year: "2022",
    badgeBg: "bg-[#D96204]",
    barBg: "bg-[#D96204]",
    cardBorder: "border-[#F0A956]",
    ringBorder: "border-[#E67E00]/40",
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
    badgeBg: "bg-[#5B1A83]",
    barBg: "bg-[#5B1A83]",
    cardBorder: "border-[#8B5CF6]/50",
    ringBorder: "border-[#6B1E99]/40",
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
    badgeBg: "bg-[#C21458]",
    barBg: "bg-[#C21458]",
    cardBorder: "border-[#EC4899]/50",
    ringBorder: "border-[#D81B60]/40",
    logo: laf2027,
    photo: historyPhoto3,
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
      {/* TOP LEFT DECORATIVE RIBBON */}
      <svg
        className="absolute top-0 left-0 w-16 sm:w-28 md:w-44 h-16 sm:h-28 md:h-44 pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="cornerTL"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#C21458" />
            <stop offset="50%" stopColor="#E67E00" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
        </defs>

        <polygon
          points="0,0 100,0 0,100"
          fill="url(#cornerTL)"
        />
      </svg>

      {/* BOTTOM RIGHT DECORATIVE RIBBON */}
      <svg
        className="absolute bottom-0 right-0 w-16 sm:w-28 md:w-44 h-16 sm:h-28 md:h-44 pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="cornerBR"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#C21458" />
            <stop offset="50%" stopColor="#E67E00" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
        </defs>

        <polygon
          points="100,0 100,100 0,100"
          fill="url(#cornerBR)"
        />
      </svg>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* SECTION HEADING (Red badge left-aligned matching About section) */}
        <div className="mb-8 sm:mb-14 flex flex-col items-start gap-1.5">
          <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
            History of LAF
          </h2>
          <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
            Lucknow Architecture Festival
          </h2>
        </div>

        {/* THREE HISTORY CARDS */}
        <div className="space-y-5 sm:space-y-8">

          {editions.map((item) => {
            const imageOnLeft = item.imagePosition === "left";

            return (
              <article
                key={item.id}
                className={`relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-[32px] lg:rounded-[44px] bg-white border ${item.cardBorder} shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow duration-300`}
              >

                {/* MOBILE / TABLET VIEW */}
                <div className="block lg:hidden space-y-4">

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-stretch gap-2.5 sm:gap-3 min-w-0 flex-1">

                      <div
                        className={`w-1 sm:w-[4px] rounded-full ${item.barBg} flex-shrink-0 self-stretch`}
                      />

                      <div className="min-w-0 flex-1">

                        <span
                          className={`inline-block px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-[4px] text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase ${item.badgeBg}`}
                        >
                          {item.version}
                        </span>

                        <h3 className="mt-2 font-sans font-bold text-base sm:text-xl leading-snug text-[#111827]">
                          {item.title}
                        </h3>

                        {item.upcoming && (
                          <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-[#FDE8EF] text-[#D81B60] text-[9px] sm:text-[10px] font-bold tracking-wider uppercase border border-[#FBCFE8]">
                            UPCOMING EDITION
                          </span>
                        )}

                      </div>
                    </div>

                    {/* Mobile Logo */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center">

                      <div
                        className={`absolute inset-0 rounded-full border ${item.ringBorder}`}
                      />

                      <div className="relative w-[88%] h-[88%] rounded-full bg-white border border-neutral-200/70 flex items-center justify-center p-1.5 sm:p-2 overflow-hidden shadow-xs">
                        <img
                          src={item.logo}
                          alt={`${item.version} Logo`}
                          loading="lazy"
                          className="w-full h-full object-contain select-none"
                        />
                      </div>

                    </div>
                  </div>

                  {/* Mobile Event Photo */}
                  <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200/70 shadow-2xs bg-neutral-50 flex items-center justify-center">
                    <img
                      src={item.photo}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-auto object-contain select-none"
                    />
                  </div>

                  {/* Mobile Description */}
                  <p className="text-neutral-600 text-xs text-justify sm:text-[14px] leading-relaxed sm:leading-[1.8] font-normal">
                    {item.description}
                  </p>

                </div>

                {/* DESKTOP VIEW — EQUAL HEIGHT */}
                <div className="hidden lg:grid grid-cols-2 items-stretch gap-10 lg:gap-12">

                  {/* TEXT SECTION */}
                  <div
                    className={`w-full min-w-0 ${
                      imageOnLeft ? "order-2" : "order-1"
                    }`}
                  >
                    <div className="flex items-stretch gap-4">

                      <div
                        className={`w-[5px] rounded-full ${item.barBg} flex-shrink-0`}
                      />

                      <div className="min-w-0 flex-1">

                        <span
                          className={`inline-block px-3.5 py-1 rounded-[4px] text-white text-[13px] font-bold tracking-wider uppercase ${item.badgeBg}`}
                        >
                          {item.version}
                        </span>

                        <h3 className="mt-3 mb-3 font-sans font-bold text-xl lg:text-[22px] leading-snug text-[#111827]">
                          {item.title}
                        </h3>

                        <p className="text-neutral-600 text-[14px] lg:text-[14.5px] leading-[1.85] font-normal text-justify">
                          {item.description}
                        </p>

                        {item.upcoming && (
                          <span className="inline-block mt-4 px-3.5 py-1 rounded-full bg-[#FDE8EF] text-[#D81B60] text-[11px] font-bold tracking-wider uppercase border border-[#FBCFE8] shadow-xs">
                            UPCOMING EDITION
                          </span>
                        )}

                      </div>
                    </div>
                  </div>

                  {/* IMAGE SECTION — MATCH TEXT HEIGHT */}
                  <div
                    className={`relative w-full min-w-0 self-stretch ${
                      imageOnLeft ? "order-1" : "order-2"
                    }`}
                  >

                    <div className="absolute inset-0 flex flex-col items-center gap-3 lg:gap-4">

                      {/* Festival Logo */}
                      <div className="relative h-[32%] max-h-[190px] aspect-square flex-shrink-0 flex items-center justify-center">

                        <div
                          className={`absolute inset-0 rounded-full border ${item.ringBorder}`}
                        />

                        <div className="relative w-[88%] h-[88%] rounded-full bg-white border border-neutral-200/70 flex items-center justify-center p-2 lg:p-3 overflow-hidden">

                          <img
                            src={item.logo}
                            alt={`${item.version} Logo`}
                            loading="lazy"
                            className="w-full h-full object-contain select-none transition-transform duration-500 hover:scale-105"
                          />

                        </div>
                      </div>

                      {/* Event Photo — Remaining Height */}
                      <div className="w-full flex-1 min-h-0 rounded-2xl overflow-hidden border border-neutral-200/70 shadow-2xs group">

                        <img
                          src={item.photo}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-center select-none transition-transform duration-500 group-hover:scale-[1.02]"
                        />

                      </div>
                    </div>

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
