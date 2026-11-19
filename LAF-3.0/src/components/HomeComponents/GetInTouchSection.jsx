import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowUpRight,
  Share2,
  CheckCircle2,
} from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/share/r/14tqyZYGyx5/", icon: FacebookIcon },
  { label: "Twitter", href: "https://x.com/LucnowA/status/2098022161361625279?s=20", icon: TwitterIcon },
  { label: "Instagram", href: "https://www.instagram.com/reel/DdGzeFOApim/", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/feed/update/urn:li:activity:7503787276993429504", icon: LinkedinIcon },
  { label: "YouTube", href: "https://youtube.com/shorts/Wcr1sJ3jdPg?feature=share", icon: YoutubeIcon },
];

const GetInTouchSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: "", contactNumber: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FAF8F5] text-[#171717] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 font-sans border-t border-[#E8E2D8]"
    >
      {/* =====================================================
          ARCHITECTURAL BACKGROUND (MATCHES ALL HOMEPAGE SECTIONS)
      ====================================================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Signature Architectural Grid */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />

        {/* Decorative Corner Brackets */}
        <div className="absolute left-[5%] top-[5%] h-16 w-16 border-l border-t border-[#D8232A]/20" />
        <div className="absolute right-[5%] bottom-[5%] h-16 w-16 border-r border-b border-[#D8232A]/20" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            SECTION TITLE & SUBHEADING
        ====================================================== */}
        <div className="mb-12 sm:mb-14 grid lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start gap-1.5"
          >
            <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
              Get In  Touch
            </h2>
            {/* <h2 className="bg-[#D8232A] text-white px-3.5 py-1 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight inline-block leading-tight">
              Touch
            </h2> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 lg:pb-2"
          >
            <p className="text-sm sm:text-base leading-relaxed text-neutral-600 border-l-2 border-[#D8232A] pl-4">
              Have questions regarding festival participation, stall booking, or technical sessions? Connect directly with our team.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            MAIN FORM & CONTACT INFO GRID
        ====================================================== */}
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-12 items-stretch">
          
          {/* ================= LEFT COLUMN: FORM ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white rounded-[24px] sm:rounded-[32px] border border-[#E8E2D8] hover:border-[#D8232A]/40 p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(216,35,42,0.08)] relative overflow-hidden h-full flex flex-col justify-between transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-radial from-[#D8232A]/5 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5E7EB]">
              <h3 className="font-serif text-2xl font-bold text-[#18181B]">
                Send Us a Message
              </h3>
              <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#D8232A] bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Direct Inquiry
              </span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center bg-neutral-50 rounded-2xl border border-neutral-200 p-8"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D8232A] flex items-center justify-center text-white shadow-md">
                  <CheckCircle2 size={30} />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#18181B]">
                  Thank You!
                </h4>
                <p className="mt-2 text-sm text-neutral-600 max-w-sm mx-auto">
                  Your message has been submitted successfully. Our team will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* FIRST NAME */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                        Your first name <span className="text-[#D8232A]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2D9CC] text-sm text-[#0F172A] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#D8232A] focus:bg-white focus:ring-2 focus:ring-[#D8232A]/20 transition-all duration-300"
                      />
                    </div>

                    {/* CONTACT NUMBER */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                        Your contact number
                      </label>
                      <input
                        type="tel"
                        placeholder="Your contact number"
                        value={formData.contactNumber}
                        onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2D9CC] text-sm text-[#0F172A] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#D8232A] focus:bg-white focus:ring-2 focus:ring-[#D8232A]/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                      Your e-mail <span className="text-[#D8232A]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your e-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2D9CC] text-sm text-[#0F172A] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#D8232A] focus:bg-white focus:ring-2 focus:ring-[#D8232A]/20 transition-all duration-300"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                      Message <span className="text-[#D8232A]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2D9CC] text-sm text-[#0F172A] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#D8232A] focus:bg-white focus:ring-2 focus:ring-[#D8232A]/20 transition-all duration-300 resize-none"
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-xl bg-[#D8232A] hover:bg-[#b81d23] text-white text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 shadow-md hover:shadow-[0_8px_25px_rgba(216,35,42,0.3)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>SUBMIT</span>
                    <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* ================= RIGHT COLUMN: CONTACT INFO ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 h-full"
          >
            {/* CONTACT DETAILS CARD */}
            <div className="bg-white rounded-[24px] sm:rounded-[32px] border border-[#E8E2D8] hover:border-[#D8232A]/40 p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(216,35,42,0.08)] space-y-6 h-full flex flex-col justify-between transition-all duration-300">
              
              {/* FOLLOW US */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Share2 size={16} className="text-[#D8232A]" />
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#18181B]">
                    Follow Us
                  </span>
                </div>
                <div className="flex items-center gap-2.5 pt-1">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#18181B] hover:text-white hover:bg-[#D8232A] hover:border-transparent transition-all duration-300 shadow-2xs hover:scale-105"
                      >
                        <IconComponent />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* POSTAL ADDRESS */}
              <div className="pt-5 border-t border-[#E5E7EB]">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#D8232A] shrink-0 mt-0.5 shadow-2xs">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#18181B] mb-1.5">
                      Postal Address
                    </h4>
                    <a
                      href="https://maps.app.goo.gl/UQLY4PHADL96UGU86"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-neutral-600 hover:text-[#D8232A] leading-relaxed block transition-colors group"
                    >
                      Ekana International Stadium<br />
                      Bharat Ratna Shri Atal Bihari Vajpayee<br />
                      Sector 7, Gomti Nagar, Amar Shaheed Path,<br />
                      Lucknow 226010, Uttar Pradesh, INDIA.
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#D8232A] font-mono mt-1 font-semibold group-hover:underline">
                        View on Map <ArrowUpRight size={12} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* PHONES */}
              <div className="pt-5 border-t border-[#E5E7EB]">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#D8232A] shrink-0 mt-0.5 shadow-2xs">
                    <Phone size={18} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#18181B]">
                      Phones
                    </h4>
                    <div>
                      <p className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                        Task Marketing Solutions
                      </p>
                      <a
                        href="tel:+918874184076"
                        className="text-sm font-semibold text-[#0F172A] hover:text-[#D8232A] transition-colors"
                      >
                        +91 8874 1840 76
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                        Lucknow Architects Association
                      </p>
                      <a
                        href="tel:+919335210024"
                        className="text-sm font-semibold text-[#0F172A] hover:text-[#D8232A] transition-colors"
                      >
                        +91 9335 2100 24
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div className="pt-5 border-t border-[#E5E7EB]">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#D8232A] shrink-0 mt-0.5 shadow-2xs">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#18181B] mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:info@taskmarketingsolutions.in"
                      className="text-sm font-semibold text-[#0F172A] hover:text-[#D8232A] transition-colors break-all"
                    >
                      info@taskmarketingsolutions.in
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
