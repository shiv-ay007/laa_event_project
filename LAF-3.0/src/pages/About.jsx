import React, { useEffect } from "react";
import AboutHero from "../components/about/AboutHero";
import AboutContent from "../components/about/AboutContent";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full bg-[#FAF8F5] text-[#171717] font-sans selection:bg-[#D8232A]/20 relative">
      {/* Background Architectural Watermark Grid matching Home Theme */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120, 90, 40, 0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120, 90, 40, 0.07) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute left-[5%] top-0 bottom-0 w-px bg-[#E7E2DA]" />
        <div className="absolute right-[5%] top-0 bottom-0 w-px bg-[#E7E2DA]" />
      </div>

      <div className="relative z-10 overflow-hidden">
        <AboutHero />
        <AboutContent />
      </div>
    </div>
  );
};

export default About;
