import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import AgendaSection from "../components/HomeComponents/AgendaSection";

const AgendaPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#171717] font-sans selection:bg-[#D4AF37]/30">
      {/* Top Breadcrumbs & Back Button Bar */}
      <div className="bg-[#FAF7F2] border-b border-[#D4AF37]/20 py-4">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors rounded-full px-4 py-2 shadow-md border border-white/20"
            style={{
              background:
                "linear-gradient(90deg, #FB7801 0%, #EC2656 60%, #930777 100%)",
            }}
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
            <Link to="/" className="hover:text-[#EC2656] transition-colors">
              LAF 3.0
            </Link>
            <ChevronRight className="w-3 h-3 text-[#930777]" />
            <span
              className="font-bold"
              style={{
                background: "linear-gradient(90deg, #FB7801, #930777)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AGENDA
            </span>
          </div>
        </div>
      </div>

      <AgendaSection />
    </div>
  );
};

export default AgendaPage;
