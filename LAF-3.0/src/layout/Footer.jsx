import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Download,
  Sparkles,
  Calendar,
  Handshake,
  Building2,
  Users,
  Image as ImageIcon,
  Award,
  FileText,
} from "lucide-react";

import LAFLogo from "../assets/images/logo.webp";
import CCWSLogo from "../assets/images/CodeCrafterlogo.webp";

// PDF Imports (Path apne folder structure ke hisaab se check karlein)
// Agar file ke naam me space hai to use '-' se replace kar dein (jaise LAF3.0-Brochure_FINAL.pdf)
import brochurePdf from "../assets/lafpdf/lafbroucher.pdf"; 
import layoutPdf from "../assets/lafpdf/layout.pdf";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const quickLinks = [
  { label: "Highlights", href: "/highlights", icon: Sparkles },
  { label: "Agenda", href: "/agenda", icon: Calendar },
  { label: "Participate", href: "/participate", icon: Handshake },
  { label: "About LAA", href: "/about", icon: Building2 },
  { label: "Team", href: "/team", icon: Users },
  { label: "Gallery", href: "/gallery", icon: ImageIcon },
];

const festivalLinks = [
  { label: "Committees", href: "/committees", icon: Users },
  { label: "Location", href: "/location", icon: MapPin },
  { label: "Contact", href: "#contact", icon: Mail },
  { label: "Registration", href: "/register", icon: Award },
];

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/share/r/14tqyZYGyx5/", icon: FacebookIcon },
  { label: "Twitter", href: "https://x.com/LucnowA/status/2098022161361625279?s=20", icon: TwitterIcon },
  { label: "Instagram", href: "https://www.instagram.com/reel/DdGzeFOApim/", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/feed/update/urn:li:activity:7503787276993429504", icon: LinkedinIcon },
  { label: "YouTube", href: "https://youtube.com/shorts/Wcr1sJ3jdPg?feature=share", icon: YoutubeIcon },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        } else {
          window.location.hash = href;
        }
      }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#141416] text-white shadow-2xl">
      {/* Top Brand Accent Line */}
      <div className="h-[2px] w-full bg-[#D8232A] relative z-10" />

      {/* =====================================================
          MAIN FOOTER CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-6 sm:py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* ================= BRAND COLUMN ================= */}
          <div className="lg:col-span-4 space-y-3">
            <Link to="/" className="group inline-flex items-center gap-3">
              <img
                src={LAFLogo}
                alt="LAF 3.0 Logo"
                className="h-14 sm:h-16 w-auto object-contain rounded-xl border border-neutral-700 p-1 bg-white shadow-sm group-hover:scale-105 transition-all duration-300"
              />
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-none text-white tracking-tight">
                  Lucknow
                </h3>
                <p className="mt-1 font-mono text-[10px] sm:text-xs tracking-[0.25em] text-[#D8232A] font-bold uppercase">
                  ARCHITECTURE FESTIVAL 3.0
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-neutral-300 font-light max-w-sm pt-0.5">
              A platform bringing architecture, design, culture, sustainability and
              professional exchange together in Lucknow.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
              <MapPin size={14} className="text-[#D8232A] shrink-0" />
              <span>Lucknow, Uttar Pradesh, India</span>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1c1d22] border border-white/10 text-neutral-300 hover:border-[#D8232A] hover:bg-[#D8232A] hover:text-white hover:scale-105 transition-all duration-300"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-mono text-xs tracking-[0.2em] font-bold uppercase mb-3 pb-1 border-b border-[#D8232A] inline-block">
              EXPLORE
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                const isRoute = !link.href.startsWith('#');
                return (
                  <li key={link.label}>
                    {isRoute ? (
                      <Link
                        to={link.href}
                        className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                      >
                        <Icon size={14} className="text-[#D8232A] group-hover:scale-110 transition-all duration-300 shrink-0" />
                        <span className="group-hover:text-[#D8232A] transition-colors">{link.label}</span>
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                      >
                        <Icon size={14} className="text-[#D8232A] group-hover:scale-110 transition-all duration-300 shrink-0" />
                        <span className="group-hover:text-[#D8232A] transition-colors">{link.label}</span>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ================= FESTIVAL SECTIONS ================= */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-mono text-xs tracking-[0.2em] font-bold uppercase mb-3 pb-1 border-b border-[#D8232A] inline-block">
              FESTIVAL
            </h4>
            <ul className="space-y-2">
              {festivalLinks.map((link) => {
                const Icon = link.icon;
                const isRoute = !link.href.startsWith('#');
                return (
                  <li key={link.label}>
                    {isRoute ? (
                      <Link
                        to={link.href}
                        className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                      >
                        <Icon size={14} className="text-[#D8232A] group-hover:scale-110 transition-all duration-300 shrink-0" />
                        <span className="group-hover:text-[#D8232A] transition-colors">{link.label}</span>
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                      >
                        <Icon size={14} className="text-[#D8232A] group-hover:scale-110 transition-all duration-300 shrink-0" />
                        <span className="group-hover:text-[#D8232A] transition-colors">{link.label}</span>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ================= DOWNLOADS & REGISTER ================= */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-mono text-xs tracking-[0.2em] font-bold uppercase mb-3 pb-1 border-b border-[#D8232A] inline-block">
              EVENT DOCUMENTS
            </h4>
            <div className="space-y-2.5">
              
              {/* Event Brochure */}
              <a
                href={brochurePdf}
                download="LAF3.0 Brochure_FINAL.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-xl bg-[#1c1d22] border border-neutral-800 hover:border-[#D8232A] shadow-sm hover:shadow-[0_4px_18px_rgba(216,35,42,0.25)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center justify-between px-3.5 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <FileText size={14} className="text-[#D8232A]" />
                    <span className="font-semibold text-xs sm:text-sm text-neutral-200 group-hover:text-white transition-colors">Event Brochure</span>
                  </div>
                  <div className="flex items-center justify-center w-6 h-6 rounded-md bg-white/5 border border-white/10 text-[#D8232A] group-hover:bg-[#D8232A] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <Download size={12} className="group-hover:translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>

              {/* REGISTER NOW BUTTON */}
              <Link
                to="/register"
                className="group relative block rounded-xl bg-[#D8232A] hover:bg-[#b81d23] text-white shadow-[0_2px_12px_rgba(216,35,42,0.3)] hover:shadow-[0_4px_18px_rgba(216,35,42,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center justify-between px-3.5 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <Award size={14} className="text-white" />
                    <span className="font-bold text-xs sm:text-sm text-white tracking-wide">REGISTER NOW</span>
                  </div>
                  <div className="flex items-center justify-center w-6 h-6 rounded-md bg-white/20 text-white transition-all duration-300">
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Event Layout */}
              <a
                href={layoutPdf}
                download="LAF3.0 LAYOUT PLAN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-xl bg-[#1c1d22] border border-neutral-800 hover:border-[#D8232A] shadow-sm hover:shadow-[0_4px_18px_rgba(216,35,42,0.25)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center justify-between px-3.5 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <FileText size={14} className="text-[#D8232A]" />
                    <span className="font-semibold text-xs sm:text-sm text-neutral-200 group-hover:text-white transition-colors">Event Layout</span>
                  </div>
                  <div className="flex items-center justify-center w-6 h-6 rounded-md bg-white/5 border border-white/10 text-[#D8232A] group-hover:bg-[#D8232A] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <Download size={12} className="group-hover:translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>

            </div>
          </div>

        </div>

        {/* Translucent Divider Above Contact Strip */}
        <div className="h-[1px] w-full bg-white/10 mt-6 mb-4" />

        {/* ================= CONTACT STRIP (COMPACT) ================= */}
        <div>
          <div className="grid gap-3 md:grid-cols-3">
            <a
              href="tel:+918871184076"
              className="group flex items-center gap-3 py-1 px-2 rounded-xl hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800/80 border border-neutral-700 text-[#D8232A] group-hover:border-[#D8232A] group-hover:bg-[#D8232A] group-hover:text-white transition-all duration-300 shrink-0">
                <Phone size={15} />
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-[0.18em] text-[#D8232A] font-bold uppercase">
                  TASK MARKETING SOLUTIONS
                </p>
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#D8232A] transition-colors">
                  +91 88711 84076
                </span>
              </div>
            </a>

            <div
              className="group flex items-center gap-3 py-1 px-2 rounded-xl hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800/80 border border-neutral-700 text-[#D8232A] group-hover:border-[#D8232A] group-hover:bg-[#D8232A] group-hover:text-white transition-all duration-300 shrink-0">
                <Phone size={15} />
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-[0.18em] text-[#D8232A] font-bold uppercase">
                  LUCKNOW ARCHITECTS ASSOCIATION
                </p>
                <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-semibold text-white">
                  <a
                    href="tel:+917007973079"
                    className="hover:text-[#D8232A] transition-colors"
                  >
                    +91 70079 73079
                  </a>
                  <span className="text-neutral-500 font-normal">|</span>
                  <a
                    href="tel:+918400112222"
                    className="hover:text-[#D8232A] transition-colors"
                  >
                    +91 84001 12222
                  </a>
                </div>
              </div>
            </div>

            <a
              href="mailto:lucknowarchitects@gmail.com"
              className="group flex items-center gap-3 py-1 px-2 rounded-xl hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800/80 border border-neutral-700 text-[#D8232A] group-hover:border-[#D8232A] group-hover:bg-[#D8232A] group-hover:text-white transition-all duration-300 shrink-0">
                <Mail size={15} />
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-[0.18em] text-[#D8232A] font-bold uppercase">
                  EMAIL ENQUIRIES
                </p>
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#D8232A] transition-colors break-all">
                  lucknowarchitects@gmail.com
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Translucent Divider Above Bottom Bar */}
        <div className="h-[1px] w-full bg-white/10 mt-4 mb-3" />

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col items-center justify-between gap-3 py-2 md:flex-row text-neutral-300 font-mono text-xs">
          {/* Left: Copyright */}
          <div>
            <span className="text-neutral-400">© {new Date().getFullYear()} LUCKNOW ARCHITECTURE FESTIVAL 3.0</span>
          </div>

          {/* Center: Precision Crafted Credit */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-neutral-300 font-mono">
            <span className="text-[#D8232A] font-bold text-xs font-mono">&lt;/&gt;</span>
            <span className="tracking-tight text-neutral-300">Precision Crafted with Digital Intelligence by</span>
            <a
              href="https://www.codecrafter.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={CCWSLogo}
                alt="CodeCrafter Web Solutions"
                className="h-6 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
            </a>
          </div>

          {/* Right: Privacy Policy & Terms of Use */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-neutral-400 hover:text-[#D8232A] font-medium transition-all"
            >
              PRIVACY POLICY
            </a>
            <span className="h-3 w-px bg-white/20" />
            <a
              href="#"
              className="text-neutral-400 hover:text-[#D8232A] font-medium transition-all"
            >
              TERMS OF USE
            </a>
          </div>
        </div>

      </div>

      {/* Floating UI Side Back To Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to Top"
        className={`fixed bottom-6 right-6 z-50 group flex items-center justify-center w-11 h-11 rounded-full bg-[#18181B] border border-neutral-700 text-[#D8232A] hover:bg-[#D8232A] hover:text-white hover:border-transparent hover:scale-110 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 cursor-pointer ${
          showScrollTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
}