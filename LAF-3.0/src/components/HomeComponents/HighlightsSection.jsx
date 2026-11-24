import React from "react";
import { motion } from "framer-motion";
import highlightImg from "../../assets/images/highlight-img.webp";
import bgHist from "../../assets/images/bg-hist.webp";

import secArt from "../../assets/images/sectors/sec-art.webp";
import secArchitecture from "../../assets/images/sectors/sec-architecture.webp";
import secInteriors from "../../assets/images/sectors/sec-interiors.webp";
import secConstruction from "../../assets/images/sectors/sec-construction.webp";
import secMaterials from "../../assets/images/sectors/sec-materials.webp";
import secGreentech from "../../assets/images/sectors/sec-greentech.webp";
import secTech from "../../assets/images/sectors/sec-tech.webp";
import secEquipments from "../../assets/images/sectors/sec-equipments.webp";
import secTechniques from "../../assets/images/sectors/sec-techniques.webp";
import secSustainability from "../../assets/images/sectors/sec-sustainability.webp";
import secSmartbuilding from "../../assets/images/sectors/sec-smartbuilding.webp";
import secRealestate from "../../assets/images/sectors/sec-realestate.webp";
import secAcademics from "../../assets/images/sectors/sec-academics.webp";
import secGovernment from "../../assets/images/sectors/sec-government.webp";
import khArchitects from "../../assets/images/key_highlights/kh-architects.webp";
import khMarketers from "../../assets/images/key_highlights/kh-marketers.webp";
import khEngagement from "../../assets/images/key_highlights/kh-engagement.webp";
import khBrand from "../../assets/images/key_highlights/kh-brand.webp";
import khFinancing from "../../assets/images/key_highlights/kh-financing.webp";
import khExperts from "../../assets/images/key_highlights/kh-experts.webp";
import khArt from "../../assets/images/key_highlights/kh-art.webp";
import khMedia from "../../assets/images/key_highlights/kh-media.webp";
import khSkyline from "../../assets/images/key_highlights/image.webp";

import {
  Megaphone,
  UsersRound,
  MonitorPlay,
  Presentation,
  Coins,
  Palette,
  Newspaper,
  MessageSquareText,
  BriefcaseBusiness,
  Sparkles,
  ArrowUpRight,
  Building2,
  Boxes,
  Leaf,
  Cpu,
  Wrench,
  ShieldCheck,
  GraduationCap,
  Landmark,
  Store,
  Handshake,
  WalletCards,
  MousePointerClick,
  Gift,
  Armchair,
  HardHat,
  Settings,
  Layers,
  Sprout,
  HouseWifi,
} from "lucide-react";

const HighlightsSection = () => {
  const experiences = [
    {
      icon: Megaphone,
      title: "BRAND REACH",
      text: "A platform for brands to reach their target audience.",
      borderColor: "border-[#E7E2DA]",
      iconBg: "bg-neutral-100",
      iconColor: "text-[#D8232A]",
      barColor: "bg-[#D8232A]",
    },
    {
      icon: UsersRound,
      title: "ENGAGEMENT ACTIVITIES",
      text: "Engagement activities designed around the target group.",
      borderColor: "border-[#E7E2DA]",
      iconBg: "bg-neutral-100",
      iconColor: "text-[#D8232A]",
      barColor: "bg-[#D8232A]",
    },
    {
      icon: MonitorPlay,
      title: "MEDIA AMPLIFICATION",
      text: "Wide-ranging pre-promotional and media opportunities.",
      borderColor: "border-[#E7E2DA]",
      iconBg: "bg-neutral-100",
      iconColor: "text-[#D8232A]",
      barColor: "bg-[#D8232A]",
    },
    {
      icon: Presentation,
      title: "SEMINARS & WORKSHOPS",
      text: "Architects, experts and professionals meet to exchange ideas.",
      borderColor: "border-[#E7E2DA]",
      iconBg: "bg-neutral-100",
      iconColor: "text-[#D8232A]",
      barColor: "bg-[#D8232A]",
    },
    {
      icon: Coins,
      title: "FINANCING FACILITIES",
      text: "Opportunities for on-spot financing and financial interaction.",
      borderColor: "border-[#E7E2DA]",
      iconBg: "bg-neutral-100",
      iconColor: "text-[#D8232A]",
      barColor: "bg-[#D8232A]",
    },
    {
      icon: Palette,
      title: "ART & CULTURE",
      text: "Display of art, culture, heritage and creative expression.",
      borderColor: "border-[#E7E2DA]",
      iconBg: "bg-neutral-100",
      iconColor: "text-[#D8232A]",
      barColor: "bg-[#D8232A]",
    },
  ];

  const sectors = [
    {
      name: "ART",
      icon: Palette,
      iconColor: "text-[#D8232A]",
      iconBg: "bg-neutral-100",
      borderColor: "border-[#E7E2DA]",
      cardBg: "bg-white",
      image: secArt,
    },
    {
      name: "ARCHITECTURE",
      icon: Building2,
      iconColor: "text-[#D8232A]",
      iconBg: "bg-neutral-100",
      borderColor: "border-[#E7E2DA]",
      cardBg: "bg-white",
      image: secArchitecture,
    },
    {
      name: "INTERIORS",
      icon: Armchair,
      iconColor: "text-[#D8232A]",
      iconBg: "bg-neutral-100",
      borderColor: "border-[#E7E2DA]",
      cardBg: "bg-white",
      image: secInteriors,
    },
    {
      name: "CONSTRUCTION",
      icon: HardHat,
      iconColor: "text-[#D8232A]",
      iconBg: "bg-neutral-100",
      borderColor: "border-[#E7E2DA]",
      cardBg: "bg-white",
      image: secConstruction,
    },
    {
      name: "BUILDING MATERIALS",
      icon: Boxes,
      iconColor: "text-[#D8232A]",
      iconBg: "bg-neutral-100",
      borderColor: "border-[#E7E2DA]",
      cardBg: "bg-white",
      image: secMaterials,
    },
    {
      name: "GREEN TECH",
      icon: Leaf,
      iconColor: "text-[#D8232A]",
      iconBg: "bg-neutral-100",
      borderColor: "border-[#E7E2DA]",
      cardBg: "bg-white",
      image: secGreentech,
    },
    {
      name: "NEW TECHNOLOGIES",
      icon: Cpu,
      iconColor: "text-[#D8232A]",
      iconBg: "bg-neutral-100",
      borderColor: "border-[#E7E2DA]",
      cardBg: "bg-white",
      image: secTech,
    },
    {
      name: "BUILDING EQUIPMENTS",
      icon: Settings,
      iconColor: "text-[#D8232A]",
      iconBg: "bg-neutral-100",
      borderColor: "border-[#E7E2DA]",
      cardBg: "bg-white",
      image: secEquipments,
    },
    {
      name: "BUILDING TECHNIQUES",
      icon: Layers,
      iconColor: "text-[#D8232A]",
      iconBg: "bg-neutral-100",
      borderColor: "border-[#E7E2DA]",
      cardBg: "bg-white",
      image: secTechniques,
    },
    {
      name: "SUSTAINABILITY",
      icon: Sprout,
      iconColor: "text-[#D8232A]",
      iconBg: "bg-neutral-100",
      borderColor: "border-[#E7E2DA]",
      cardBg: "bg-white",
      image: secSustainability,
    },
    {
      name: "SMART BUILDING",
      icon: HouseWifi,
      iconColor: "text-[#D8232A]",
      iconBg: "bg-neutral-100",
      borderColor: "border-[#E7E2DA]",
      cardBg: "bg-white",
      image: secSmartbuilding,
    },
    {
      name: "REAL ESTATE",
      icon: Building2,
      iconColor: "text-[#D8232A]",
      iconBg: "bg-neutral-100",
      borderColor: "border-[#E7E2DA]",
      cardBg: "bg-white",
      image: secRealestate,
    },
    {
      name: "ACADEMICS",
      icon: GraduationCap,
      iconColor: "text-[#D8232A]",
      iconBg: "bg-neutral-100",
      borderColor: "border-[#E7E2DA]",
      cardBg: "bg-white",
      image: secAcademics,
    },
    {
      name: "GOVERNMENT SCHEMES & DEPARTMENTS",
      icon: Landmark,
      iconColor: "text-[#D8232A]",
      iconBg: "bg-neutral-100",
      borderColor: "border-[#E7E2DA]",
      cardBg: "bg-white",
      image: secGovernment,
      span: "sm:col-span-2 lg:col-span-2",
    },
  ];

  const keyHighlights = [
    {
      id: "architects",
      title: "Architects meet/ seminars and workshops",
      icon: khArchitects,
      borderColor: "border-[#E7E2DA]",
      cornerBg: "bg-transparent",
      dividerColor: "bg-[#D8232A]",
    },
    {
      id: "marketers",
      title: "A platform for marketers to showcase their products and services.",
      icon: khMarketers,
      borderColor: "border-[#E7E2DA]",
      cornerBg: "bg-transparent",
      dividerColor: "bg-[#D8232A]",
    },
    {
      id: "engagement",
      title: "Engagement activity with the target group/ audience in the form of lucky draws and much more.",
      icon: khEngagement,
      borderColor: "border-[#E7E2DA]",
      cornerBg: "bg-transparent",
      dividerColor: "bg-[#D8232A]",
    },
    {
      id: "brand",
      title: "A platform for brands to reach out to their target audience.",
      icon: khBrand,
      borderColor: "border-[#E7E2DA]",
      cornerBg: "bg-transparent",
      dividerColor: "bg-[#D8232A]",
    },
    {
      id: "financing",
      title: "On spot loan and financing facility.",
      icon: khFinancing,
      borderColor: "border-[#E7E2DA]",
      cornerBg: "bg-transparent",
      dividerColor: "bg-[#D8232A]",
    },
    {
      id: "experts",
      title: "Experts interface and workshops.",
      icon: khExperts,
      borderColor: "border-[#E7E2DA]",
      cornerBg: "bg-transparent",
      dividerColor: "bg-[#D8232A]",
    },
    {
      id: "art",
      title: "Display of art, culture, heritage and much more.",
      icon: khArt,
      borderColor: "border-[#E7E2DA]",
      cornerBg: "bg-transparent",
      dividerColor: "bg-[#D8232A]",
    },
    {
      id: "media",
      title: "Media amplification with wide arrays of pre-promotional tools.",
      icon: khMedia,
      borderColor: "border-[#E7E2DA]",
      cornerBg: "bg-transparent",
      dividerColor: "bg-[#D8232A]",
    },
  ];

  return (
    <section
      id="highlights"
      className="
        relative
        overflow-hidden
        bg-[#FAF8F5]
        text-[#171717]
        pt-12
        sm:pt-16
        lg:pt-20
        pb-1
        sm:pb-2
        lg:pb-3
      "
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            SECTION HEADER (Red badge left-aligned matching About section)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-12 flex flex-col items-start gap-1.5"
        >
          <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
            LAF 3.0 Highlights
          </h2>
          {/* <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
            Highlights
          </h2> */}
        </motion.div>

        {/* =====================================================
            HERO HIGHLIGHT (2-Column Layout matching Image 1)
        ====================================================== */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* ===================================================
              LEFT VISUAL PANEL (Feature Experience Card)
          ==================================================== */}
          <div className="relative group lg:col-span-4 flex flex-col">
            {/* Decorative Top-Left Red Corner Accent */}
            <div className="absolute -top-2.5 -left-2.5 w-28 h-28 rounded-tl-[38px] bg-[#D8232A] pointer-events-none -z-0" />

            {/* Main Dark Architectural Card */}
            <div className="relative z-10 rounded-[30px] sm:rounded-[34px] bg-[#18181B] overflow-hidden shadow-xl flex-1 flex flex-col justify-between border border-neutral-800">
              {/* Top Photo using highlight-img.png */}
              <div className="relative w-full h-[225px] sm:h-[240px] lg:h-[230px] xl:h-[245px] overflow-hidden">
                <img
                  src={highlightImg}
                  alt="Lucknow Rumi Darwaza - 3 Days of International Flavour"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Smooth gradient blend into the card background */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, transparent 45%, rgba(24, 24, 27, 0.4) 75%, #18181B 100%)",
                  }}
                />
              </div>

              {/* Content Block */}
              <div className="p-6 sm:p-7 pt-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[11px] sm:text-xs font-sans font-bold tracking-[0.25em] text-[#D8232A] uppercase mb-2">
                    THE EXPERIENCE
                  </span>

                  {/* Heading now in exactly 2 lines */}
                  <h3 className="flex flex-col leading-tight">
                    <span className="font-sans font-bold text-white text-lg sm:text-xl lg:text-lg xl:text-xl tracking-wider uppercase">
                      3 DAYS OF
                    </span>
                    <span className="font-serif text-white text-xl sm:text-2xl lg:text-[21px] xl:text-[25px] 2xl:text-[27px] font-normal mt-0.5 leading-snug">
                      International Flavour{" "}
                      <span className="italic font-bold text-amber-400">
                        Extravaganza
                      </span>
                    </span>
                  </h3>

                  <p className="mt-3.5 sm:mt-4 text-neutral-300 text-xs sm:text-[13.5px] xl:text-[14px] leading-relaxed font-normal">
                    The festival will also display an exciting program of exhibitions,
                    installations, symposia, lectures and workshops, celebrating architecture's
                    contribution to culture, sustainability and the economy.
                  </p>
                </div>

                {/* Red/Gold bottom accent bar */}
                <div className="w-14 h-1 rounded-full bg-[#D8232A] mt-5 sm:mt-6 mb-1" />
              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT CONTENT (Festival Experience Intro + 6 Cards)
          ==================================================== */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Header intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Flanked Label */}
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-8 sm:w-12 h-px bg-[#D8232A]" />
                <span className="text-xs sm:text-[12.5px] font-sans font-bold tracking-[0.25em] uppercase text-[#171717]">
                  THE FESTIVAL EXPERIENCE
                </span>
                <span className="w-8 sm:w-12 h-px bg-[#D8232A]" />
              </div>

              {/* Heading */}
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#171717] font-medium leading-[1.2]">
                Ideas that connect{" "}
                <span className="font-serif italic font-normal text-[#D8232A]">
                  people &amp; possibilities.
                </span>
              </h3>

              {/* Subtitle paragraph */}
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed max-w-2xl font-normal">
                A multidisciplinary platform that brings together exhibitions,
                installations, symposia, lectures and workshops, celebrating design,
                heritage, culture, sustainability and the economy.
              </p>
            </motion.div>

            {/* Grid of 6 Distinct Floating Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4.5 mt-5 sm:mt-6 lg:mt-6.5 flex-1 items-stretch">
              {experiences.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="h-full"
                  >
                    <div
                      className={`h-full p-5 sm:p-5.5 rounded-[22px] sm:rounded-[26px] bg-white border ${item.borderColor} shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
                    >
                      <div className="flex items-start gap-3.5">
                        {/* Rounded Icon Square */}
                        <div
                          className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className={`w-6 h-6 ${item.iconColor}`} />
                        </div>

                        {/* Text block */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-sans font-bold text-xs sm:text-[13px] xl:text-[13.5px] text-[#111827] uppercase tracking-wider leading-snug">
                            {item.title}
                          </h4>
                          <p className="mt-1.5 text-neutral-500 text-[12px] sm:text-[12.5px] xl:text-[13px] leading-relaxed font-normal">
                            {item.text}
                          </p>
                          {/* Color Accent Indicator Line under text */}
                          <div
                            className={`w-8 h-[3px] rounded-full ${item.barColor} mt-3.5`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FOCUS SECTORS (Matching Image 1) - FULL WIDTH COVER
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full my-16 sm:my-20 lg:my-24 py-16 sm:py-20 lg:py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgHist})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header matching Image 1 in Theme Red */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#171717] font-normal tracking-tight leading-tight">
                  Built around the{" "}
                  <span className="font-serif italic font-bold text-[#D8232A]">
                    future of design.
                  </span>
                </h3>

                {/* Theme Red Underline Bar */}
                <div className="w-28 sm:w-36 h-[5px] rounded-full bg-[#D8232A] mt-3 sm:mt-3.5" />
              </div>

              {/* Right Counter in Theme Red */}
              <div className="flex items-center gap-3.5 sm:gap-4 self-start sm:self-auto">
                {/* Thin vertical red accent line */}
                <div className="w-[2px] h-10 bg-[#D8232A] opacity-80" />

                <div className="flex flex-col items-center">
                  <span className="font-serif italic font-bold text-4xl sm:text-5xl lg:text-[52px] text-[#D8232A] leading-none">
                    14
                  </span>
                  <span className="font-sans font-bold text-[10px] sm:text-[11.5px] tracking-[0.25em] text-[#111827] uppercase mt-1">
                    FOCUS SECTORS
                  </span>
                </div>
              </div>
            </div>

            {/* 14 Sector Cards Grid (3 Columns, matching Image 1) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-4.5">
              {sectors.map((sector, index) => {
                const Icon = sector.icon;
                return (
                  <motion.div
                    key={sector.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className={sector.span || ""}
                  >
                    <div
                      className={`
                        relative
                        overflow-hidden
                        h-[74px] sm:h-[78px]
                        rounded-[22px] sm:rounded-[26px]
                        border ${sector.borderColor}
                        ${sector.cardBg}
                        backdrop-blur-sm
                        bg-white/85
                        shadow-[0_2px_12px_rgba(0,0,0,0.02)]
                        hover:shadow-md hover:-translate-y-0.5
                        transition-all duration-300
                        px-4 sm:px-5
                        flex items-center justify-between
                        group
                      `}
                    >
                      {/* Left: Icon Badge + Name */}
                      <div className="flex items-center gap-3.5 z-10 min-w-0 pr-2">
                        <div
                          className={`w-11 h-11 rounded-full ${sector.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}
                        >
                          <Icon className={`w-5 h-5 ${sector.iconColor}`} />
                        </div>

                        <span className="font-sans font-bold text-xs sm:text-[12.5px] tracking-wider text-[#111827] uppercase leading-snug">
                          {sector.name}
                        </span>
                      </div>

                      {/* Right: Architectural line sketch watermark matching Image 1 */}
                      <div className="absolute right-0 top-0 bottom-0 w-[42%] max-w-[130px] flex items-center justify-end pointer-events-none select-none pr-1">
                        <img
                          src={sector.image}
                          alt=""
                          className="h-[88%] w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            
          </div>
        </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            KEY HIGHLIGHTS (Matching Image 2)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 lg:mt-14"
        >
          {/* Header matching Image 2 */}
          <div className="mb-8 sm:mb-10 flex flex-col items-start gap-1.5">
            <h3 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
              Key Highlights
            </h3>

            {/* Subtitle */}
            <p className="max-w-xl text-neutral-600 text-xs sm:text-[13.5px] leading-relaxed font-normal mt-2">
              A curated experience connecting brands, professionals, experts,
              culture and the wider built–environment ecosystem.
            </p>
          </div>

          {/* 8 Highlights Grid (4 Columns x 2 Rows) matching Image 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5">
            {keyHighlights.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="h-full"
              >
                <div
                  className={`
                    relative
                    overflow-hidden
                    h-full
                    min-h-[120px] sm:min-h-[128px]
                    rounded-2xl
                    bg-white
                    border ${item.borderColor}
                    shadow-[0_2px_12px_rgba(0,0,0,0.02)]
                    hover:shadow-md hover:-translate-y-0.5
                    transition-all duration-300
                    p-3.5 sm:p-4
                    flex items-center gap-3 sm:gap-3.5
                    group
                  `}
                >
                  {/* Bottom-right diagonal shaded corner matching Image 2 */}
                  <div
                    className={`absolute bottom-0 right-0 w-16 h-16 pointer-events-none rounded-br-2xl ${item.cornerBg}`}
                  />

                  {/* Left: Custom Graphic Icon */}
                  <div className="w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center flex-shrink-0 z-10">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Middle: Vertical Separator Line matching Image 2 */}
                  <div
                    className={`w-[1.5px] h-10 sm:h-12 ${item.dividerColor} flex-shrink-0 z-10`}
                  />

                  {/* Right: Text Description */}
                  <div className="flex-1 min-w-0 z-10">
                    <p className="font-sans font-bold text-[11.5px] sm:text-xs text-[#111827] leading-snug">
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Skyline Illustration & Line (Width matches Navbar/Container) */}
          <div className="mt-1 sm:mt-2 w-full flex flex-col items-center pointer-events-none select-none">
            <div className="w-full relative">
              <img
                src={khSkyline}
                alt="Lucknow Architecture Skyline"
                className="w-full h-auto object-contain opacity-95 -mt-6 sm:-mt-10 lg:-mt-14" 
              />
            </div>
            
            {/* Red Horizontal Line placed at the bottom of the image */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D8232A] to-transparent -mt-1 relative z-20" />
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default HighlightsSection;