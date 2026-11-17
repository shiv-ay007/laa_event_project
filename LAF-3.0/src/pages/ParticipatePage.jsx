import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronRight,
  ArrowUpRight,
  UsersRound,
  Presentation,
  Handshake,
  Lightbulb,
  ShoppingBag,
  Database,
  MessageCircle,
  TrendingUp,
  Radio,
  Newspaper,
  Megaphone,
  Smartphone,
  Mail,
  Building2,
  Landmark,
  GraduationCap,
  UserRound,
  Download,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

/* =========================================================
   BOUQUET OF OPPORTUNITIES DATA
========================================================= */
const opportunities = [
  {
    number: "01",
    title: "CONNECT",
    text: "Connect to architects, institutional buyers, experts, interior designers and other professionals.",
    icon: UsersRound,
  },
  {
    number: "02",
    title: "SHOWCASE",
    text: "Showcase your competitive advantage in terms of product design, features, and cost benefits.",
    icon: Presentation,
  },
  {
    number: "03",
    title: "EXPERIENCE",
    text: "Connect with your end users directly to make them experience the touch.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "INNOVATE",
    text: "Opportunity to present your innovations and new range of products.",
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "EXPAND",
    text: "Simultaneously reach out to potential agents, distributors and wholesalers.",
    icon: ShoppingBag,
  },
  {
    number: "06",
    title: "TRADE",
    text: "Consolidate trade relationships and opportunity to book on-spot orders.",
    icon: TrendingUp,
  },
  {
    number: "07",
    title: "DISCOVER",
    text: "Meet key buying decision makers from different segments of prospective buyers.",
    icon: UserRound,
  },
  {
    number: "08",
    title: "BUILD",
    text: "Build a database of potential buyers.",
    icon: Database,
  },
  {
    number: "09",
    title: "FEEDBACK",
    text: "Get instant feedback on products, prices and innovations.",
    icon: MessageCircle,
  },
  {
    number: "10",
    title: "UNDERSTAND",
    text: "Gain first-hand knowledge of different market segments, trends, consumer preferences and retailers needs.",
    icon: Sparkles,
  },
];

/* =========================================================
   PRE-PUBLICITY DATA
========================================================= */
const outreachItems = [
  {
    title: "AV VANS",
    text: "2 AV Vans will cover the entire potential market",
    icon: Radio,
  },
  {
    title: "OUTDOOR",
    text: "Hoarding, Banners, Posters, etc. will be put across City & nearby",
    icon: Megaphone,
  },
  {
    title: "PRINT",
    text: "Lucky draw leaflets will be distributed through Newspaper Ads, Inserts, Pre-promotion Vans, etc.",
    icon: Newspaper,
  },
  {
    title: "RADIO",
    text: "Radio jingles & Ads",
    icon: Radio,
  },
  {
    title: "NEWSPAPER",
    text: "Newspaper Ads",
    icon: Newspaper,
  },
  {
    title: "ACTIVATION",
    text: "Mall & Market activation",
    icon: Building2,
  },
  {
    title: "EDITORIAL",
    text: "Publicity through print advertisement and editorials etc",
    icon: Presentation,
  },
  {
    title: "PRESS",
    text: "Press conference",
    icon: Megaphone,
  },
  {
    title: "NEWS",
    text: "News channel ticker",
    icon: Radio,
  },
  {
    title: "SOCIAL",
    text: "Social Media promotion via Facebook, Instagram, Twitter, Linkedin etc",
    icon: Smartphone,
  },
  {
    title: "VIRAL",
    text: "Buzz / Viral promotion",
    icon: Sparkles,
  },
  {
    title: "DIRECT",
    text: "SMS / E-mail blasting and many more",
    icon: Mail,
  },
];

/* =========================================================
   VISITOR PROFILE DATA
========================================================= */
const visitorProfiles = [
  { title: "ARCHITECTS", icon: Building2 },
  { title: "BUILDERS & PROMOTERS", icon: Building2 },
  { title: "CIVIL & STRUCTURAL ENGINEERS", icon: Presentation },
  { title: "CONTRACTORS", icon: Handshake },
  { title: "CONSULTANTS", icon: UsersRound },
  { title: "DEALERS & DISTRIBUTORS", icon: ShoppingBag },
  { title: "END USERS / BUYERS", icon: UserRound },
  { title: "INTERIOR DESIGNERS", icon: Sparkles },
  { title: "LARGE WAREHOUSE BUILDERS", icon: Building2 },
  { title: "GOVT. OFFICIALS", icon: Landmark },
  { title: "FACULTIES & STUDENTS", icon: GraduationCap },
  { title: "GENERAL PUBLIC", icon: UsersRound },
  { title: "PROSPECTIVE HOME BUYERS", icon: UserRound },
];

const cardAccents = [
  {
    iconBg: "bg-[#FFF4ED]",
    iconText: "text-[#EA580C]",
    hoverIconBg: "group-hover:bg-[#EA580C]",
    numText: "text-[#EA580C]",
    hoverNumText: "group-hover:text-[#EA580C]",
  },
  {
    iconBg: "bg-[#F5EEFD]",
    iconText: "text-[#7C2D92]",
    hoverIconBg: "group-hover:bg-[#7C2D92]",
    numText: "text-[#7C2D92]",
    hoverNumText: "group-hover:text-[#7C2D92]",
  },
  {
    iconBg: "bg-[#FFF0F4]",
    iconText: "text-[#E11D48]",
    hoverIconBg: "group-hover:bg-[#E11D48]",
    numText: "text-[#E11D48]",
    hoverNumText: "group-hover:text-[#E11D48]",
  },
  {
    iconBg: "bg-[#FFF9EB]",
    iconText: "text-[#D97706]",
    hoverIconBg: "group-hover:bg-[#F59E0B]",
    numText: "text-[#D97706]",
    hoverNumText: "group-hover:text-[#D97706]",
  },
];

export default function ParticipatePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F172A] font-sans selection:bg-[#EC2656]/20 selection:text-[#0B1536] relative overflow-hidden">
      {/* Background Architectural Watermark Grid (Matches Home Page) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
        <div className="absolute -left-32 top-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-orange-200/25 to-amber-200/10 blur-3xl" />
        <div className="absolute -right-32 bottom-24 w-[460px] h-[460px] rounded-full bg-gradient-to-tl from-purple-200/25 to-pink-200/10 blur-3xl" />
        <div className="absolute left-[6%] top-0 bottom-0 w-px bg-[#EA580C]/12" />
        <div className="absolute right-[6%] top-0 bottom-0 w-px bg-[#7C2D92]/12" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-24">
        {/* Top Breadcrumbs & Back button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B1536] hover:text-[#EA580C] transition-colors bg-white/90 border border-[#FED7AA] hover:border-[#F97316] rounded-full px-4 py-2 shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
            <Link to="/" className="hover:text-[#EA580C] transition-colors">LAF 3.0</Link>
            <ChevronRight className="w-3 h-3 text-[#E11D48]" />
            <span className="text-[#E11D48] font-bold">PARTICIPATE</span>
          </div>
        </div>

        {/* Hero Header Section */}
        <div className="mb-14 grid lg:grid-cols-12 gap-8 items-end bg-white rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 border-[2px] border-[#F97316] shadow-[0_4px_30px_rgba(249,115,22,0.06)] relative overflow-hidden">
          <div className="absolute -top-12 right-0 w-72 h-72 bg-gradient-to-bl from-orange-200/25 via-rose-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="lg:col-span-8 relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#EA580C] animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#EA580C] font-bold uppercase">
                04 · FESTIVAL PARTICIPATION
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0B1536] leading-[1.08]">
              Opportunities{" "}
              <span
                className="block font-serif italic font-bold text-transparent bg-clip-text mt-1 sm:mt-2"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #F97316 0%, #EC2656 55%, #7C2D92 100%)",
                }}
              >
                for connection
              </span>
              <span className="block font-serif font-bold text-[#0B1536] mt-1">
                &amp; growth.
              </span>
            </h1>

            <div className="w-24 sm:w-32 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-4" />

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl font-normal">
              LAF 3.0 creates an unprecedented platform where brands, professionals,
              buyers, experts, and communities converge for high-value engagement and architectural dialogue.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end items-center relative z-10">
            <div
              className="p-6 rounded-2xl text-white border-2 border-[#FFB800]/75 shadow-[0_10px_30px_rgba(78,12,123,0.28)] w-full sm:w-auto min-w-[240px] relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #4E0C7B 0%, #3C086E 55%, #2D0A4E 100%)",
              }}
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-[#F97316]/20 blur-xl pointer-events-none" />
              <div className="flex items-center justify-between gap-4 relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-[#FFB800] uppercase font-bold">ENGAGEMENT</span>
                <ShieldCheck className="w-4 h-4 text-[#FFB800]" />
              </div>
              <div className="font-serif text-3xl font-bold text-white mt-2 relative z-10">
                10+ SECTORS
              </div>
              <div className="text-[10.5px] text-purple-200/85 tracking-widest uppercase mt-1 font-mono relative z-10">
                CONNECT · SHOWCASE · DISCOVER
              </div>
            </div>
          </div>
        </div>

        {/* Bouquet of Opportunities */}
        <div className="mb-16 bg-white rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 border border-[#FED7AA]/80 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#FED7AA]/60 pb-6 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#EA580C]" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#EA580C] font-mono">
                  01 · BOUQUET OF OPPORTUNITIES
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1536]">
                Connect. <span className="italic text-[#E11D48]">Showcase.</span> Grow.
              </h2>
              <div className="w-24 sm:w-28 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-3.5" />
            </div>

            <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#E11D48] uppercase bg-gradient-to-r from-orange-50 to-rose-50 px-4 py-2 rounded-full border border-[#FED7AA] self-start sm:self-auto">
              10 OPPORTUNITIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {opportunities.map((item, index) => {
              const Icon = item.icon;
              const accent = cardAccents[index % cardAccents.length];
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  className="group relative p-6 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-orange-50/75 hover:via-white hover:to-rose-50/35 border border-[#FED7AA]/70 hover:border-[#F97316] shadow-[0_4px_18px_rgba(234,88,12,0.04)] hover:shadow-[0_10px_26px_rgba(234,88,12,0.12)] transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#EA580C] via-[#D91A5B] to-[#7C2D92] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-1.5 pt-0.5 shrink-0">
                      <span className={`font-mono text-xs font-bold ${accent.numText}`}>
                        {item.number}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-xl ${accent.iconBg} ${accent.iconText} ${accent.hoverIconBg} group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs`}
                      >
                        <Icon size={16} strokeWidth={1.7} />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1536] group-hover:text-[#EA580C] transition-colors">
                          {item.title}
                        </h3>
                        <ArrowUpRight
                          size={18}
                          className="text-neutral-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#E11D48] transition-all duration-300 shrink-0"
                        />
                      </div>

                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600 group-hover:text-neutral-800 transition-colors">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Royal Purple & Crimson Festival Impact Container */}
        <div className="mb-16">
          <div
            className="relative overflow-hidden text-white rounded-[24px] sm:rounded-[32px] border-2 border-[#F97316]/50 shadow-[0_12px_40px_rgba(78,12,123,0.26)] p-8 sm:p-12 lg:p-16"
            style={{
              background: "linear-gradient(135deg, #2D0A4E 0%, #4E0C7B 55%, #7C1382 100%)",
            }}
          >
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-[#F97316]/20 to-[#EC2656]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute right-[-80px] top-[-100px] w-[320px] h-[320px] rounded-full border border-white/10 pointer-events-none" />
            <div className="absolute right-[40px] top-[40px] w-[180px] h-[180px] rounded-full border border-[#FFB800]/30 pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#FFB800]">✦</span>
                  <span className="text-[10px] font-mono tracking-[0.35em] text-[#FFB800] uppercase font-bold">
                    LAF 3.0 · THE CONNECTION
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white font-bold">
                  Reach the right{" "}
                  <span className="italic text-[#FFB800] block sm:inline">
                    people.
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-5 flex items-center">
                <p className="text-sm sm:text-base leading-relaxed text-purple-100/90 border-l-2 border-[#F97316] pl-5">
                  Exchange ideas with stakeholders and participants from
                  industry, profession, academy, real estate, financial
                  institutions, and policy makers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-Publicity Section */}
        <div className="mb-16 bg-white rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 border-[2px] border-[#F97316] shadow-[0_4px_30px_rgba(249,115,22,0.06)]">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#EA580C]">
                02 · PRE-PUBLICITY
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight text-[#0B1536] mt-3 font-bold">
                Reach{" "}
                <span className="italic text-[#E11D48] block">
                  beyond
                </span>
                the venue.
              </h2>

              <div className="w-24 sm:w-28 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-3.5" />

              <div className="mt-8 border-l-[3px] border-[#EA580C] pl-5 py-1">
                <span className="font-serif text-5xl sm:text-6xl leading-none text-[#0B1536] font-bold">
                  7–10
                </span>
                <p className="font-mono text-[9.5px] font-bold tracking-[0.25em] text-[#E11D48] uppercase mt-2">
                  DAYS BEFORE THE EVENT
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="text-base leading-relaxed text-neutral-700 mb-8 font-normal">
                A multi-channel communication network designed to create maximum visibility across the region and target markets.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {outreachItems.map((item, index) => {
                  const Icon = item.icon;
                  const accent = cardAccents[index % cardAccents.length];
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: (index % 3) * 0.03 }}
                      className="group min-h-[110px] p-4 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-orange-50/90 hover:via-white hover:to-amber-50/40 border border-[#FED7AA]/70 hover:border-[#F97316] shadow-xs hover:shadow-[0_8px_24px_rgba(249,115,22,0.12)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    >
                      <div className="flex justify-between items-center">
                        <div
                          className={`w-9 h-9 rounded-xl ${accent.iconBg} ${accent.iconText} ${accent.hoverIconBg} group-hover:text-white flex items-center justify-center transition-colors duration-300`}
                        >
                          <Icon size={16} strokeWidth={1.7} />
                        </div>
                        <span className={`font-mono text-[9px] font-bold text-neutral-400 ${accent.hoverNumText} transition-colors`}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="mt-4">
                        <h3 className="text-xs tracking-[0.15em] font-bold uppercase text-[#0F172A] group-hover:text-[#EA580C] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[11px] leading-relaxed text-neutral-600 mt-1.5 line-clamp-2">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Visitor Profile Section */}
        <div className="mb-16 bg-white rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 border-[2px] border-[#F97316] shadow-[0_4px_30px_rgba(249,115,22,0.06)]">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#7C2D92]">
                03 · VISITOR PROFILE
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight text-[#0B1536] mt-3 font-bold">
                Who is{" "}
                <span className="italic text-[#E11D48] block">
                  at LAF?
                </span>
              </h2>

              <div className="w-24 sm:w-28 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-3.5" />

              <p className="text-sm leading-relaxed text-neutral-600 mt-5 max-w-sm">
                A diverse community of architects, decision makers, institutional buyers, and key industry leaders.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {visitorProfiles.map((item, index) => {
                  const Icon = item.icon;
                  const accent = cardAccents[index % cardAccents.length];
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0.97 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index % 3) * 0.03 }}
                      className="group p-3.5 rounded-2xl bg-gradient-to-r from-orange-50/40 via-white to-white hover:from-orange-50/90 hover:to-purple-50/40 border border-[#FED7AA]/70 hover:border-[#F97316] shadow-xs hover:shadow-[0_6px_20px_rgba(249,115,22,0.12)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-8 h-8 rounded-full ${accent.iconBg} ${accent.iconText} ${accent.hoverIconBg} group-hover:text-white flex items-center justify-center transition-colors duration-300`}
                        >
                          <Icon size={14} strokeWidth={1.7} />
                        </div>
                        <ArrowUpRight
                          size={13}
                          className="text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:text-[#EA580C] transition-all duration-300"
                        />
                      </div>

                      <p className="text-[10.5px] tracking-[0.08em] leading-snug font-bold text-[#0F172A] group-hover:text-[#EA580C] transition-colors mt-2.5 uppercase">
                        {item.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 text-right">
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#E11D48] uppercase bg-gradient-to-r from-orange-50 via-rose-50 to-purple-50 px-3.5 py-1.5 rounded-full border border-[#FED7AA]">
                  ✦ AND MANY MORE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Download Banner */}
        <div
          className="text-white rounded-[24px] sm:rounded-[32px] border-2 border-[#F97316]/50 shadow-[0_12px_40px_rgba(78,12,123,0.26)] p-8 sm:p-10 lg:p-12 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #2D0A4E 0%, #4E0C7B 55%, #7C1382 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#F97316]/20 to-[#EC2656]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-mono tracking-[0.35em] text-[#FFB800] uppercase font-bold block mb-3">
                LAF 3.0 · PARTICIPATE
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl leading-tight text-white font-bold">
                Take the next{" "}
                <span className="italic text-[#FFB800]">
                  step.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-6">
              <p className="text-sm leading-relaxed text-purple-100/90 mb-6">
                Download the official festival documents and explore opportunities available through LAF 3.0.
              </p>

              <div className="grid sm:grid-cols-3 gap-3">
                <a
                  href="#"
                  className="group flex items-center justify-between px-4 py-3.5 rounded-xl text-white font-bold shadow-[0_8px_25px_rgba(236,38,86,0.35)] hover:shadow-[0_12px_32px_rgba(236,38,86,0.5)] hover:scale-[1.02] transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg, #FB7801 0%, #EC2656 55%, #930777 100%)",
                  }}
                >
                  <span className="text-[9px] tracking-[0.14em] uppercase font-bold">
                    BROCHURE
                  </span>
                  <Download size={15} />
                </a>

                <Link
                  to="/register"
                  className="group flex items-center justify-between px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white border border-white/25 hover:border-white text-white hover:text-[#4E0C7B] font-bold transition-all duration-300"
                >
                  <span className="text-[9px] tracking-[0.14em] uppercase font-bold">
                    PARTICIPATE / REGISTER
                  </span>
                  <ArrowUpRight size={15} />
                </Link>

                <a
                  href="#"
                  className="group flex items-center justify-between px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white border border-white/25 hover:border-white text-white hover:text-[#4E0C7B] font-bold transition-all duration-300"
                >
                  <span className="text-[9px] tracking-[0.14em] uppercase font-bold">
                    LAYOUT
                  </span>
                  <Download size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
