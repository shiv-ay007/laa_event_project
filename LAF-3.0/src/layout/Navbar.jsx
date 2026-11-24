import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link, NavLink } from 'react-router-dom';
import {
  Sparkles,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Users,
  Award,
  GraduationCap,
  Home
} from 'lucide-react';

import laaLogo from '../assets/images/download.png';
import LAFLogo from '../assets/images/logo.webp';
import taskLogo from '../assets/images/TASK LOGO BIG PNG.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isMobileTeamOpen, setIsMobileTeamOpen] = useState(false); // Naya state mobile accordion ke liye
  const [isScrolled, setIsScrolled] = useState(false);
  const teamMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu open hone par background scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (teamMenuRef.current && !teamMenuRef.current.contains(e.target)) {
        setIsTeamOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (href === '/') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (location.hash) {
          window.history.pushState(null, '', '/');
        }
      }
    } else if (href.startsWith('#')) {
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
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/', isHome: true },
    { name: 'Highlights', href: '/highlights' },
    { name: 'Agenda', href: '/agenda' },
    { name: 'Participate', href: '/participate' },
    {
      name: 'Team',
      href: '/team',
      dropdown: [
        {
          name: 'Core Committee',
          href: '/team/core-committee',
          desc: 'Organizing leadership & Curators',
          icon: Users
        },
        {
          name: 'Advisors & Mentors',
          href: '/team/advisors-mentors',
          desc: 'Veteran architects & mentors',
          icon: Award
        },
        {
          name: 'Student Volunteers',
          href: '/team/student-volunteers',
          desc: 'Future architects & team',
          icon: GraduationCap
        }
      ]
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Committees', href: '/committees' },
    { name: 'Location', href: '/location' }
  ];

  return (
    <>
      {/* ================= 1. TOP BRANDING HEADER ================= */}
      <header className="w-full select-none font-sans">
        <div className="bg-architect-grid bg-[#FAF7F2] relative border-b border-[#D4AF37]/20 py-1.5 md:py-2 shadow-xs overflow-hidden">
          {/* Architectural Background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-between px-10">
            <svg className="w-64 h-64 text-[#9A7B38]" viewBox="0 0 100 100" fill="currentColor">
              <path d="M 10 90 L 10 40 Q 50 0 90 40 L 90 90 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M 25 90 L 25 50 Q 50 20 75 50 L 75 90 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
            <svg className="w-64 h-64 text-[#9A7B38]" viewBox="0 0 100 100" fill="currentColor">
              <path d="M 10 90 L 10 40 Q 50 0 90 40 L 90 90 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M 25 90 L 25 50 Q 50 20 75 50 L 75 90 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-8 lg:px-12 relative z-10 flex flex-row items-center justify-between gap-2 sm:gap-4">
            {/* LAA Logo - Background removed, only logo icon */}
            <div className="flex items-center justify-center flex-1 min-w-0">
              <Link
                to="/"
                className="group flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={laaLogo}
                  alt="Lucknow Architects Association"
                  className="h-8 sm:h-11 md:h-12 lg:h-14 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Left Divider - Mobile pe hide */}
            <div className="hidden md:flex flex-col items-center justify-center text-[#D4AF37]/40 px-2">
              <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
              <span className="text-[8px] my-0.5 text-[#D4AF37]/70">❖</span>
              <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
            </div>

            {/* Main LAF Logo - Highlighted */}
            <div className="flex items-center justify-center flex-initial min-w-0">
              <Link
                to="/"
                className="group relative bg-white hover:bg-white rounded-xl md:rounded-2xl px-3.5 py-1 sm:px-5 sm:py-1.5 border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] shadow-[0_4px_20px_rgba(212,175,55,0.22)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.32)] transition-all duration-300 inline-flex items-center justify-center w-auto transform hover:scale-[1.02]"
              >
                <img
                  src={LAFLogo}
                  alt="Lucknow Architecture Festival 3.0"
                  className="h-10 sm:h-13 md:h-15 lg:h-[68px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
                />
              </Link>
            </div>

            {/* Right Divider - Mobile pe hide */}
            <div className="hidden md:flex flex-col items-center justify-center text-[#D4AF37]/40 px-2">
              <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
              <span className="text-[8px] my-0.5 text-[#D4AF37]/70">❖</span>
              <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
            </div>

            {/* Task Logo - Background removed, only logo icon */}
            <div className="flex items-center justify-center flex-1 min-w-0">
              <div className="group flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <img
                  src={taskLogo}
                  alt="Task Marketing Solutions"
                  className="h-7 sm:h-10 md:h-12 lg:h-[54px] w-auto max-w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= 2. THIN STICKY NAVBAR ================= */}
      <nav
        className={`sticky top-0 w-full z-[100] select-none font-sans transition-all duration-300 ${
          isScrolled ? 'pointer-events-none py-0.5 sm:py-1' : 'border-b border-neutral-800/80 shadow-md'
        }`}
        style={
          !isScrolled
            ? {
                background: '#141416'
              }
            : undefined
        }
      >
        <div
          className={`max-w-[1400px] mx-auto px-3 sm:px-8 lg:px-12 transition-all duration-300 ${
            isScrolled ? 'pointer-events-auto' : ''
          }`}
        >
          <div
            className={`transition-all duration-300 relative ${
              isScrolled ? 'border border-neutral-700/60 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]' : ''
            }`}
            style={
              isScrolled
                ? {
                    background: '#141416'
                  }
                : undefined
            }
          >
            {/* Top Minimal Brand Accent Line */}
            <div className={`h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#D8232A] to-transparent opacity-90 ${isScrolled ? 'rounded-t-2xl' : ''}`} />

            <div className={`transition-all duration-300 relative z-10 ${isScrolled ? 'px-3 sm:px-6 lg:px-8' : ''}`}>
              <div className="flex items-center justify-between transition-all duration-300 h-10 sm:h-11">
                
                {/* Mobile Brand */}
                <div className="md:hidden flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-300 animate-pulse" />
                  <Link to="/" className="text-[11px] uppercase tracking-widest text-white font-bold">
                    LAF 3.0 MENU
                  </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-1.5 rounded-xl text-white bg-white/10 border border-white/20 hover:bg-white/20 focus:outline-none transition-all"
                  aria-label="Toggle Navigation"
                >
                  {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-center flex-1 gap-1 lg:gap-2">
                  {navLinks.map((item) => {
                    if (item.isHome) {
                      const isHomeActive = location.pathname === '/' && !location.hash;
                      return (
                        <React.Fragment key="Home">
                          <NavLink
                            to="/"
                            onClick={(e) => handleNavClick(e, '/')}
                            title="Home"
                            aria-label="Home"
                            className={`relative transition-all duration-200 p-1.5 rounded-full flex items-center justify-center cursor-pointer group ${
                              isHomeActive ? 'text-white bg-[#D8232A] shadow-sm' : 'text-white/85 bg-white/10 hover:bg-white/20 shadow-xs'
                            }`}
                          >
                            <Home className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
                          </NavLink>
                          <div className="w-[1px] h-3.5 bg-white/20 mx-1" />
                        </React.Fragment>
                      );
                    }

                    const isRoute = !item.href.startsWith('#');
                    const isTeamActive = item.name === 'Team' && (location.pathname.startsWith('/team') || location.hash === '#festival-team');
                    const isHashActive = location.pathname === '/' && location.hash === item.href;

                    return (
                      <div
                        key={item.name}
                        ref={item.dropdown ? teamMenuRef : null}
                        className="relative group py-1 flex items-center"
                        onMouseEnter={() => { if (item.dropdown) setIsTeamOpen(true); }}
                        onMouseLeave={() => { if (item.dropdown) setIsTeamOpen(false); }}
                      >
                        {isRoute ? (
                          <NavLink
                            to={item.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              if (item.dropdown) setIsTeamOpen(false);
                            }}
                            className={({ isActive }) =>
                              `relative text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.05em] transition-all duration-200 px-2.5 lg:px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer ${
                                isActive || isTeamActive ? 'text-white bg-[#D8232A] shadow-xs' : 'text-white/85 hover:text-white hover:bg-white/10'
                              }`
                            }
                          >
                            <span>{item.name}</span>
                            {item.dropdown && (
                              <ChevronDown className={`w-3 h-3 opacity-80 group-hover:opacity-100 transition-transform duration-300 ${isTeamOpen ? 'rotate-180' : ''}`} />
                            )}
                          </NavLink>
                        ) : (
                          <a
                            href={item.href}
                            onClick={(e) => {
                              if (item.dropdown) setIsTeamOpen((prev) => !prev);
                              handleNavClick(e, item.href);
                            }}
                            className={`relative text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.05em] transition-all duration-200 px-2.5 lg:px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer ${
                              isHashActive || isTeamActive ? 'text-white bg-[#D8232A] shadow-xs' : 'text-white/85 hover:text-white hover:bg-white/10'
                            }`
                            }
                          >
                            <span>{item.name}</span>
                            {item.dropdown && (
                              <ChevronDown className={`w-3 h-3 opacity-80 group-hover:opacity-100 transition-transform duration-300 ${isTeamOpen ? 'rotate-180' : ''}`} />
                            )}
                          </a>
                        )}

                        {/* Team Dropdown */}
                        {item.dropdown && (
                          <AnimatePresence>
                            {isTeamOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 6, scale: 0.97 }}
                                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72 z-[110]"
                              >
                                <div className="bg-[#18181B] border border-neutral-700/80 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.5)] p-2 backdrop-blur-2xl overflow-hidden relative group/card">
                                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D8232A]/60 to-transparent pointer-events-none" />
                                  <div className="px-3 pt-2 pb-2 flex items-center justify-between text-[10px] font-mono tracking-[0.18em] uppercase text-neutral-300 border-b border-neutral-800 mb-1.5">
                                    <span className="flex items-center gap-1.5">
                                      <span className="text-[#D8232A]">✦</span> Team Directories
                                    </span>
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#D8232A] animate-pulse" />
                                  </div>
                                  <div className="space-y-1">
                                    {item.dropdown.map((subItem) => {
                                      const IconComponent = subItem.icon;
                                      return (
                                        <NavLink
                                          key={subItem.name}
                                          to={subItem.href}
                                          onClick={() => setIsTeamOpen(false)}
                                          className={({ isActive }) =>
                                            `group/item flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 border ${
                                              isActive ? 'bg-[#D8232A] border-red-500/40 text-white font-semibold' : 'hover:bg-white/10 border-transparent hover:border-white/10 text-white/90'
                                            }`
                                          }
                                        >
                                          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover/item:text-white group-hover/item:border-white/20 group-hover/item:bg-white/15 transition-all duration-300 shrink-0">
                                            <IconComponent className="w-4 h-4" />
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <div className="text-[12.5px] font-medium text-white transition-colors flex items-center justify-between">
                                              <span>{subItem.name}</span>
                                              <ChevronRight className="w-3.5 h-3.5 text-white/60 opacity-0 -translate-x-1.5 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                                            </div>
                                            <div className="text-[10.5px] text-white/60 group-hover/item:text-white/80 transition-colors truncate">
                                              {subItem.desc}
                                            </div>
                                          </div>
                                        </NavLink>
                                      );
                                    })}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Registration Button (Desktop) */}
                <div className="hidden md:flex items-center pl-2">
                  <div className="w-[1px] h-3.5 bg-white/20 mr-2.5" />
                  <Link
                    to="/register"
                    className="group relative inline-flex items-center justify-center px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white bg-[#D8232A] hover:bg-[#b91c1c] rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 border border-red-400/40 overflow-hidden"
                  >
                    <span className="relative flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 fill-white text-white" />
                      <span>REGISTRATION</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* ================= MOBILE DRAWER ================= */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden bg-[#18181B] border-t border-neutral-800 overflow-hidden rounded-b-2xl"
                >
                  <div className="px-4 pt-3 pb-5 space-y-2 max-h-[75vh] overflow-y-auto">
                    <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-xs text-white/90 flex items-center justify-between mb-2">
                      <span className="text-amber-300 font-semibold text-[10px] uppercase">Lucknow Oct 2026</span>
                      <span className="text-[10px] text-white/70">Architects Conclave</span>
                    </div>

                    {navLinks.map((item) => {
                      if (item.isHome) {
                        const isHomeActive = location.pathname === '/' && !location.hash;
                        return (
                          <div key="Home" className="border-b border-white/10 pb-1.5">
                            <NavLink
                              to="/"
                              onClick={(e) => handleNavClick(e, '/')}
                              className={`flex items-center gap-2 py-1.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                                isHomeActive ? 'text-amber-300' : 'text-white hover:text-amber-300'
                              }`}
                            >
                              <Home className="w-4 h-4 text-amber-300" />
                              <span>Home</span>
                            </NavLink>
                          </div>
                        );
                      }

                      const isRoute = !item.href.startsWith('#');
                      const isTeamActive = item.name === 'Team' && (location.pathname.startsWith('/team') || location.hash === '#festival-team');
                      const isHashActive = location.pathname === '/' && location.hash === item.href;

                      return (
                        <div key={item.name} className="border-b border-white/10 pb-1.5">
                          
                          {/* Team Toggle Fix for Mobile */}
                          {item.dropdown ? (
                            <button
                              type="button"
                              onClick={() => setIsMobileTeamOpen((prev) => !prev)}
                              className={`w-full flex items-center justify-between py-1.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                                isTeamActive ? 'text-amber-300' : 'text-white hover:text-amber-300'
                              }`}
                            >
                              <span>{item.name}</span>
                              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileTeamOpen ? 'rotate-180' : ''}`} />
                            </button>
                          ) : isRoute ? (
                            <NavLink
                              to={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={({ isActive }) =>
                                `block py-1.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                                  isActive || isTeamActive ? 'text-amber-300' : 'text-white hover:text-amber-300'
                                }`
                              }
                            >
                              {item.name}
                            </NavLink>
                          ) : (
                            <a
                              href={item.href}
                              onClick={(e) => handleNavClick(e, item.href)}
                              className={`block py-1.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                                isHashActive || isTeamActive ? 'text-amber-300' : 'text-white hover:text-amber-300'
                              }`}
                            >
                              {item.name}
                            </a>
                          )}

                          {/* Mobile Team Submenu Accordion */}
                          {item.dropdown && (
                            <AnimatePresence>
                              {isMobileTeamOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-3 mt-1 space-y-1.5 border-l border-white/20 ml-1 pb-2">
                                    {item.dropdown.map((sub) => {
                                      const SubIcon = sub.icon;
                                      return (
                                        <NavLink
                                          key={sub.name}
                                          to={sub.href}
                                          onClick={() => { setIsMobileMenuOpen(false); setIsMobileTeamOpen(false); }}
                                          className={({ isActive }) =>
                                            `flex items-center gap-2 py-1 text-xs transition-colors ${
                                              isActive ? 'text-amber-300 font-semibold' : 'text-white/70 hover:text-amber-300'
                                            }`
                                          }
                                        >
                                          <SubIcon className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                                          <span>{sub.name}</span>
                                        </NavLink>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          )}
                        </div>
                      );
                    })}

                    {/* Mobile Registration Button */}
                    <div className="pt-2">
                      <Link
                        to="/register"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 text-xs uppercase font-bold tracking-wider text-white bg-[#D8232A] hover:bg-[#b91c1c] rounded-xl shadow-md active:scale-[0.98] transition-transform"
                      >
                        <Sparkles className="w-4 h-4 fill-white text-white" />
                        <span>LAF Registration</span>
                      </Link>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;