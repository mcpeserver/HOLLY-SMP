import { useState, useEffect } from "react";
import { Copy, Check, Menu, X, ShieldCheck, ExternalLink, ChevronDown, MessageSquare } from "lucide-react";
import { siteConfig } from "../config/site";
import { DevData } from "../App";

interface NavbarProps {
  onCopyIP: () => void;
  isCopied: boolean;
  devData: DevData;
  activeTab: "home" | "connection" | "rules" | "social";
  setActiveTab: (tab: "home" | "connection" | "rules" | "social") => void;
}

export default function Navbar({ onCopyIP, isCopied, devData, activeTab, setActiveTab }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDevDropdownOpen, setIsDevDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md">
      {/* 1. TOP HEADER WATERMARK (RAN DEV & COMMUNITY) - Hidden on Mobile, only shows on Desktop, and collapses nicely on scroll */}
      <div 
        id="top-developer-banner"
        className={`w-full bg-gradient-to-r from-autumn-orange via-autumn-amber to-autumn-orange text-white px-4 text-center text-xs font-semibold tracking-wide shadow-sm hidden md:flex items-center justify-center gap-x-3 gap-y-1 border-b border-white/10 transition-all duration-500 overflow-hidden ${
          isScrolled ? "h-0 py-0 border-b-0 opacity-0 pointer-events-none" : "h-9 py-2 opacity-100"
        }`}
      >
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          <span>Developed by <a href={`https://wa.me/${devData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="underline decoration-autumn-gold underline-offset-2 font-bold hover:text-autumn-gold transition-colors">{devData.name}</a> (WhatsApp: <a href={`https://wa.me/${devData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:underline font-mono">{devData.contact.whatsapp}</a>)</span>
        </div>
        <span className="text-white/30 font-mono">|</span>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span>Komunitas: <a href={devData.community.website} target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-dotted hover:text-autumn-gold transition-colors">{devData.community.name}</a></span>
          <a 
            href={devData.website.portfolio} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-1.5 py-0.5 bg-black/25 hover:bg-black/45 text-[9px] font-bold uppercase rounded border border-white/10 transition-all hover:scale-[1.03] inline-flex items-center gap-0.5"
            title="Lihat website-website server keren lainnya"
          >
            <span>Website Server Lain</span>
            <ExternalLink className="w-2.5 h-2.5 text-autumn-gold" />
          </a>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav 
        id="main-navbar"
        className={`relative w-full border-b backdrop-blur-md px-4 md:px-8 flex items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? "bg-autumn-dark/95 border-autumn-orange/30 shadow-xl shadow-black/40 py-2" 
            : "bg-autumn-deep/45 border-white/5 py-4"
        }`}
      >
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <img 
            id="nav-logo"
            src={siteConfig.logo} 
            alt={siteConfig.name} 
            referrerPolicy="no-referrer"
            className="w-10 h-10 object-cover rounded-full border border-autumn-orange/30 p-0.5 bg-autumn-deep/60 drop-shadow-[0_2px_8px_rgba(249,115,22,0.4)] animate-slow-float"
          />
          <div>
            <div className="flex items-center gap-2">
              <span id="nav-title" className="font-display font-bold text-xl tracking-tight text-white">{siteConfig.name}</span>
            </div>
          </div>
        </div>

        {/* Desktop Quick-Access Navigation & Status Indicators */}
        <div className="hidden md:flex items-center gap-6">
          {/* Quick Links */}
          <div className="flex items-center gap-5 text-sm font-medium text-stone-300">
            <button 
              onClick={() => setActiveTab("home")} 
              className={`hover:text-autumn-orange transition-all py-1.5 border-b-2 cursor-pointer ${
                activeTab === "home" ? "text-autumn-orange border-autumn-orange font-bold" : "border-transparent text-stone-300"
              }`}
            >
              Tentang
            </button>
            <button 
              onClick={() => setActiveTab("rules")} 
              className={`hover:text-autumn-orange transition-all py-1.5 border-b-2 cursor-pointer ${
                activeTab === "rules" ? "text-autumn-orange border-autumn-orange font-bold" : "border-transparent text-stone-300"
              }`}
            >
              Peraturan
            </button>
            <button 
              onClick={() => setActiveTab("connection")} 
              className={`hover:text-autumn-orange transition-all py-1.5 border-b-2 cursor-pointer ${
                activeTab === "connection" ? "text-autumn-orange border-autumn-orange font-bold" : "border-transparent text-stone-300"
              }`}
            >
              Grup WA
            </button>
            <button 
              onClick={() => setActiveTab("social")} 
              className={`hover:text-autumn-orange transition-all py-1.5 border-b-2 cursor-pointer ${
                activeTab === "social" ? "text-autumn-orange border-autumn-orange font-bold" : "border-transparent text-stone-300"
              }`}
            >
              Komunitas
            </button>

            {/* Elegant Dev & Comm Dropdown on Desktop */}
            <div className="relative">
              <button
                onClick={() => setIsDevDropdownOpen(!isDevDropdownOpen)}
                className="flex items-center gap-1 hover:text-autumn-gold transition-colors text-stone-300 text-xs py-1.5 px-2.5 bg-black/35 rounded-lg border border-white/5 cursor-pointer"
              >
                <span>Dev & Hub</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isDevDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDevDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-autumn-deep border border-autumn-orange/20 shadow-xl p-3.5 flex flex-col gap-2 z-50 text-xs">
                  <div className="border-b border-white/5 pb-2 mb-1">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-autumn-orange font-bold block">Developer</span>
                    <a href={`https://wa.me/${devData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-autumn-gold font-bold mt-0.5 block">{devData.name}</a>
                  </div>
                  <div className="border-b border-white/5 pb-2 mb-1.5">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-autumn-gold font-bold block">Komunitas Resmi</span>
                    <a href={devData.community.website} target="_blank" rel="noopener noreferrer" className="text-white hover:text-autumn-gold font-bold mt-0.5 block">{devData.community.name}</a>
                  </div>
                  <a
                    href={devData.website.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 px-2.5 bg-autumn-orange/10 hover:bg-autumn-orange/20 border border-autumn-orange/20 text-autumn-orange text-[10px] font-bold rounded uppercase tracking-wide transition-all"
                  >
                    <span>Portfolio Web Lain</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* WhatsApp Group Quick-Link Button */}
          <a
            id="nav-join-wa"
            href={siteConfig.links.whatsappGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-teal-600 hover:to-emerald-500 text-white text-xs font-bold font-sans tracking-wider uppercase rounded-lg shadow-md transition-all duration-300 hover:shadow-emerald-500/20 hover:scale-[1.02]"
            aria-label="Gabung Grup WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 group-hover:scale-110 transition-transform text-white" />
            <span>Grup WA</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-drawer"
          className="md:hidden w-full bg-autumn-deep border-b border-autumn-orange/10 px-6 py-5 flex flex-col gap-4 animate-fade-in z-30 shadow-2xl"
        >
          <div className="flex flex-col gap-3 font-medium text-stone-200">
            <button 
              onClick={() => { setActiveTab("home"); setIsMobileMenuOpen(false); }}
              className={`py-2 text-left border-b border-white/5 hover:text-autumn-orange transition-colors cursor-pointer ${activeTab === "home" ? "text-autumn-orange font-bold" : ""}`}
            >
              Tentang Server
            </button>
            <button 
              onClick={() => { setActiveTab("rules"); setIsMobileMenuOpen(false); }}
              className={`py-2 text-left border-b border-white/5 hover:text-autumn-orange transition-colors cursor-pointer ${activeTab === "rules" ? "text-autumn-orange font-bold" : ""}`}
            >
              Peraturan Resmi
            </button>
            <button 
              onClick={() => { setActiveTab("connection"); setIsMobileMenuOpen(false); }}
              className={`py-2 text-left border-b border-white/5 hover:text-autumn-orange transition-colors cursor-pointer ${activeTab === "connection" ? "text-autumn-orange font-bold" : ""}`}
            >
              Grup WhatsApp
            </button>
            <button 
              onClick={() => { setActiveTab("social"); setIsMobileMenuOpen(false); }}
              className={`py-2 text-left border-b border-white/5 hover:text-autumn-orange transition-colors cursor-pointer ${activeTab === "social" ? "text-autumn-orange font-bold" : ""}`}
            >
              Hub Komunitas
            </button>
          </div>

          <a
            id="mobile-drawer-join-wa-btn"
            href={siteConfig.links.whatsappGroup}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-sans tracking-widest font-bold rounded-lg uppercase shadow-lg shadow-emerald-500/10"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>Gabung Grup WA Resmi</span>
          </a>

          {/* Dynamic Developer & Community Links inside mobile menu */}
          <div className="mt-2 p-3.5 bg-black/40 rounded-xl border border-white/5 flex flex-col gap-2.5 text-xs">
            <span className="font-semibold text-[10px] uppercase font-mono tracking-wider text-autumn-gold">Komunitas & Developer</span>
            <div className="flex flex-col gap-2 text-stone-400">
              <span className="flex items-center gap-1.5 justify-between">
                <span>Developer:</span>
                <span className="text-white font-semibold">{devData.name}</span>
              </span>
              <span className="flex items-center gap-1.5 justify-between">
                <span>Komunitas:</span>
                <span className="text-white font-semibold">{devData.community.name}</span>
              </span>
              
              {/* Direct Chat WhatsApp Button */}
              <a 
                href={`https://wa.me/${devData.contact.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-1 flex items-center justify-center gap-1.5 py-2.5 bg-autumn-green/10 hover:bg-autumn-green/20 border border-autumn-green/20 text-autumn-green text-[10px] font-bold rounded uppercase tracking-wide transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat WhatsApp Langsung</span>
              </a>

              {/* Portfolio Link */}
              <a 
                href={devData.website.portfolio} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-1.5 py-2 bg-autumn-orange/10 hover:bg-autumn-orange/20 border border-autumn-orange/20 text-autumn-orange text-[10px] font-bold rounded uppercase tracking-wide transition-all"
              >
                <span>Lihat Website Server Lain</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
