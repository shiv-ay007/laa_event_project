import React from "react";
import { NavLink } from "react-router-dom"; 
import { motion } from "framer-motion";
import { Clock3, MapPin, Download } from "lucide-react";
import LAFLogo from "../../assets/images/logo.webp";

// PDFs 
import brochurePdf from "../../assets/lafpdf/lafbroucher.pdf";
import layoutPdf from "../../assets/lafpdf/layout.pdf";

const agendaDays = [
  {
    dayNumber: "01",
    label: "DAY 1",
    events: [
      { time: "9:00 - 10:00", title: "Arrival of Delegate and Registrations at Venue", dotColor: "#D8232A" },
      { time: "10:00 - 11:30", title: "Inaugural Session of LAF 3.0", dotColor: "#D8232A" },
      { time: "11:30 - 13:00", title: "Technical Session 1:", subtitle: "The Future of Urban Development", dotColor: "#D8232A" },
      { time: "13:00 - 14:00", title: "Networking Lunch", dotColor: "#D4AF37" },
      { time: "14:00 - 15:00", title: "Technical Session 2:", subtitle: "Public Spaces for the Future", dotColor: "#D8232A" },
      { time: "15:00 - 16:00", title: "Live Workshops", dotColor: "#D8232A" },
      { time: "16:00 - 17:00", title: "Delegates Visit to Exhibition Pavilion", dotColor: "#D8232A" },
      { time: "17:30 Onwards", title: "Cultural Programmes", dotColor: "#D4AF37" },
      { time: "19:00 Onwards", title: "Architects Grand Dinner", dotColor: "#D4AF37" },
    ],
  },
  {
    dayNumber: "02",
    label: "DAY 2",
    events: [
      { time: "6:30 - 10:30", title: "Film Screening", dotColor: "#D8232A" },
      { time: "10:00 - 11:00", title: "Delegates Visit to Exhibition Pavilion", dotColor: "#D8232A" },
      { time: "11:00 - 11:30", title: "Technical Session 1:", subtitle: "Energy Efficiency in Green Buildings", dotColor: "#D8232A" },
      { time: "11:30 - 12:30", title: "Technical Session 2:", subtitle: "The 15-Minute City", dotColor: "#D8232A" },
      { time: "12:30 - 13:30", title: "Networking Lunch", dotColor: "#D4AF37" },
      { time: "13:30 - 14:30", title: "Key Note Presentation", dotColor: "#D8232A" },
      { time: "14:30 - 15:30", title: "Technical Session 3:", subtitle: "Adaptive Reuse & Regeneration", dotColor: "#D8232A" },
      { time: "15:30 - 16:00", title: "Live Workshops", dotColor: "#D8232A" },
      { time: "16:00 - 17:30", title: "Delegates Visit to Exhibition Pavilion", dotColor: "#D8232A" },
      { time: "17:30 - 17:45", title: "Cultural Programmes", dotColor: "#D4AF37" },
      { time: "17:45 Onwards", title: "Gala Dinner of LAF 3.0", dotColor: "#D4AF37" },
    ],
  },
  {
    dayNumber: "03",
    label: "DAY 3",
    events: [
      { time: "10:00 - 10:30", title: "Heritage Walk", dotColor: "#D8232A" },
      { time: "10:30 - 11:00", title: "Jury Panel for ADC", dotColor: "#D8232A" },
      { time: "11:00 - 12:00", title: "Key Note Presentation", dotColor: "#D8232A" },
      { time: "12:00 - 13:00", title: "Technical Session 1:", subtitle: "Beyond Skyscrapers - High-Density Design", dotColor: "#D8232A" },
      { time: "13:00 - 14:00", title: "Technical Session 2:", subtitle: "Urban Mobility & Connectivity", dotColor: "#D8232A" },
      { time: "14:00 - 14:30", title: "Networking Lunch", dotColor: "#D4AF37" },
      { time: "14:30 - 15:30", title: "Delegates Visit to Exhibition Pavilion", dotColor: "#D8232A" },
      { time: "15:30 - 16:30", title: "Preview of LAA & Future events", dotColor: "#D8232A" },
      { time: "16:30 - 17:30", title: "Valedictory Ceremony", dotColor: "#D8232A" },
      { time: "17:30 Onwards", title: "Vote of Thanks by Ar. Repunjay Patel President- LAA", dotColor: "#D8232A" },
      { time: "19:00 Onwards", title: "Cultural Programmes", dotColor: "#D4AF37" },
    ],
  },
];

const AgendaSection = () => {
  return (
    <section
      id="agenda"
      className="relative overflow-hidden bg-[#FAF8F5] text-[#171717] pt-5 sm:pt-7 pb-6 sm:pb-8"
    >
      {/* ARCHITECTURAL BLUEPRINT GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(217, 119, 6, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(217, 119, 6, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-1.5"
          >
            <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
              Festival Agenda LAF 3.0
            </h2>
            {/* <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
              LAF 3.0
            </h2> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-5 self-start lg:self-auto"
          >
            <div className="w-[1.5px] h-14 bg-[#D8232A]/30 hidden sm:block" />
            <div className="flex items-center gap-3">
              <img src={LAFLogo} alt="LAF Logo" className="h-14 sm:h-16 w-auto object-contain" />
            </div>
          </motion.div>
        </div>

        {/* 3 SIDE-BY-SIDE COLUMNS (DAY 1, DAY 2, DAY 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {agendaDays.map((day, dayIdx) => (
            <motion.div
              key={day.dayNumber}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: dayIdx * 0.1 }}
              className="bg-white rounded-[28px] border border-[#E8E2D8] p-5 sm:p-6 lg:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Pill Header */}
              <div className="flex justify-center mb-6 sm:mb-7">
                <div className="inline-flex items-center justify-center px-10 py-2 sm:py-2.5 rounded-full bg-[#D8232A] text-white font-extrabold text-base sm:text-lg tracking-wider shadow-sm">
                  {day.label}
                </div>
              </div>

              {/* TIMELINE LIST */}
              <div className="flex flex-col space-y-1 sm:space-y-1.5 flex-1">
                {day.events.map((event, index) => (
                  <div
                    key={index}
                    className="group relative flex items-center gap-3 sm:gap-3.5 py-1.5 sm:py-2 px-2 rounded-xl transition-all duration-200 hover:bg-neutral-50"
                  >
                    <div className="w-[84px] sm:w-[96px] shrink-0 text-right font-bold text-xs sm:text-[13px] text-[#1E293B] tracking-tight group-hover:text-[#D8232A] transition-colors">
                      {event.time}
                    </div>

                    <div className="relative self-stretch flex items-center justify-center w-5 shrink-0">
                      {index !== 0 && (
                        <div className="absolute top-0 bottom-1/2 w-[2px] bg-neutral-200" />
                      )}
                      {index !== day.events.length - 1 && (
                        <div className="absolute top-1/2 bottom-0 w-[2px] bg-neutral-200" />
                      )}
                      <span
                        className="relative z-10 w-3.5 h-3.5 rounded-full border-2 border-white shadow-xs group-hover:scale-125 transition-transform duration-200 shrink-0"
                        style={{ backgroundColor: event.dotColor }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-[13px] font-bold text-[#111827] leading-snug group-hover:text-[#D8232A] transition-colors">
                        {event.title}
                      </p>
                      {event.subtitle && (
                        <p className="text-[11px] text-neutral-500 font-medium mt-0.5 leading-snug">
                          {event.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* DOWNLOAD BUTTONS & REGISTRATION (Fixed Section) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
        >
          {/* 1. EVENT BROCHURE (Download) */}
          <a
            href={brochurePdf}
            download="LAF3.0 Brochure_FINAL.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#18181B] border border-neutral-700/80 hover:border-[#D8232A] shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-center gap-3.5 min-w-0 z-10">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#D8232A] group-hover:bg-[#D8232A] group-hover:text-white transition-all duration-300 shrink-0 shadow-xs">
                <Download className="w-4.5 h-4.5 group-hover:translate-y-0.5 transition-transform" />
              </div>
              <div className="text-left truncate">
                <div className="text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-wider text-white transition-colors truncate">
                  DOWNLOAD EVENT BROCHURE
                </div>
                <div className="text-[10.5px] text-neutral-400 truncate mt-0.5">
                  Conclave Guide & Official Schedule
                </div>
              </div>
            </div>
          </a>

          {/* 2. REGISTRATION BUTTON */}
          <NavLink
            to="/register"
            className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#D8232A] hover:bg-[#b91c1c] border border-red-500/40 shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-center gap-3.5 min-w-0 z-10">
              <div className="w-11 h-11 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0 shadow-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-0.5 transition-transform"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
              </div>
              <div className="text-left truncate">
                <div className="text-[12px] sm:text-[13px] font-black uppercase tracking-wider text-white truncate">
                  REGISTER NOW
                </div>
                <div className="text-[10.5px] font-medium text-white/90 truncate mt-0.5">
                  Secure Your Spot at LAF 3.0
                </div>
              </div>
            </div>
            <div className="z-10 ml-2 shrink-0">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-white/20 px-2.5 py-1 rounded-md border border-white/30 transition-all">
                Click Here
              </span>
            </div>
          </NavLink>

          {/* 3. LAYOUT (Download) - FIXED */}
          <a
            href={layoutPdf}
            download="LAF3.0 LAYOUT PLAN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#18181B] border border-neutral-700/80 hover:border-[#D8232A] shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-center gap-3.5 min-w-0 z-10">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#D8232A] group-hover:bg-[#D8232A] group-hover:text-white transition-all duration-300 shrink-0 shadow-xs">
                <Download className="w-4.5 h-4.5 group-hover:translate-y-0.5 transition-transform" />
              </div>
              <div className="text-left truncate">
                <div className="text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-wider text-white group-hover:text-[#FDBA74] transition-colors truncate">
                  DOWNLOAD LAYOUT
                </div>
                <div className="text-[10.5px] text-neutral-400 truncate mt-0.5">
                  Exhibition Floorplan & Stalls Map
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* FOOTER META */}
        <div className="mt-7 sm:mt-8 flex flex-col justify-between gap-4 border-t border-[#E8E2D8] pt-4 sm:pt-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Clock3 size={15} strokeWidth={1.5} className="text-[#EA580C]" />
            <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-500 uppercase">
              THREE DAYS OF IDEAS &amp; ARCHITECTURAL EXCHANGE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={15} strokeWidth={1.5} className="text-[#EA580C]" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase">
              LUCKNOW · INDIA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;