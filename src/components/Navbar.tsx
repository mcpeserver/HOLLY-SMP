import { useState, useEffect } from "react";
import { Copy, Check, Menu, X, ShieldCheck, ExternalLink } from "lucide-react";
import { siteConfig } from "../config/site";
import { DevData } from "../App";

interface NavbarProps {
  onCopyIP: () => void;
  isCopied: boolean;
  devData: DevData;
}

export default function Navbar({ onCopyIP, isCopied, devData }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      {/* 1. TOP HEADER WATERMARK (RAN DEV & COMMUNITY) */}
      <div 
        id="top-developer-banner"
        className={`w-full bg-gradient-to-r from-autumn-orange via-autumn-amber to-autumn-orange text-white px-4 text-center text-[10px] md:text-xs font-semibold tracking-wide shadow-sm flex flex-col md:flex-row items-center justify-center gap-x-3 gap-y-1 border-b border-white/10 transition-all duration-300 ${
          isScrolled ? "py-1.5 opacity-95" : "py-2.5 opacity-100"
        }`}
      >
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          <span>Developed by <a href={`https://wa.me/${devData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="underline decoration-autumn-gold underline-offset-2 font-bold hover:text-autumn-gold transition-colors">{devData.name}</a> (WhatsApp: <a href={`https://wa.me/${devData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:underline font-mono">{devData.contact.whatsapp}</a>)</span>
        </div>
        <span className="hidden md:inline text-white/30 font-mono">|</span>
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
            ? "bg-autumn-dark/95 border-autumn-orange/30 shadow-xl shadow-black/40 py-2.5" 
            : "bg-autumn-deep/45 border-white/5 py-3.5"
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
              <span id="nav-season-badge" className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-autumn-orange/20 text-autumn-orange border border-autumn-orange/30">
                Season {siteConfig.server.season}
              </span>
            </div>
            <span id="nav-subtitle" className="text-xs text-autumn-muted font-sans block md:inline">
              {siteConfig.server.status} Official Server
            </span>
          </div>
        </div>

        {/* Desktop Quick-Access Navigation & Status Indicators */}
        <div className="hidden md:flex items-center gap-6">
          {/* Server Status Widget */}
          <div id="nav-server-status" className="flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/5">
            <span className="w-2 h-2 rounded-full bg-autumn-green animate-ping" />
            <span className="font-mono text-xs font-semibold text-autumn-green tracking-wide">
              {siteConfig.server.statusIndicators.online}
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-5 text-sm font-medium text-stone-300">
            <a href="#about" className="hover:text-autumn-orange transition-colors">Tentang</a>
            <a href="#rules" className="hover:text-autumn-orange transition-colors">Peraturan</a>
            <a href="#connection" className="hover:text-autumn-orange transition-colors">Koneksi</a>
            <a href="#social" className="hover:text-autumn-orange transition-colors">Komunitas</a>
          </div>

          {/* Copy IP Fast Action Button */}
          <button
            id="nav-copy-btn"
            onClick={onCopyIP}
            className="relative overflow-hidden group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-autumn-orange to-autumn-amber hover:from-autumn-amber hover:to-autumn-orange text-white text-xs font-bold font-mono tracking-wider uppercase rounded-lg shadow-md transition-all duration-300 hover:shadow-autumn-orange/20 hover:scale-[1.02]"
            aria-label="Salin alamat IP server"
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 group-hover:rotate-6 transition-transform" />
                <span>Salin IP</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-autumn-green" />
            <span className="font-mono text-[10px] font-bold text-autumn-green">
              ONLINE
            </span>
          </div>
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
          className="md:hidden w-full bg-autumn-deep border-b border-autumn-orange/10 px-6 py-5 flex flex-col gap-4 animate-fade-in z-30"
        >
          <div className="flex flex-col gap-3 font-medium text-stone-200">
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-autumn-orange transition-colors"
            >
              Tentang Server
            </a>
            <a 
              href="#rules" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-autumn-orange transition-colors"
            >
              Peraturan Resmi
            </a>
            <a 
              href="#connection" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-autumn-orange transition-colors"
            >
              Koneksi Server
            </a>
            <a 
              href="#social" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-autumn-orange transition-colors"
            >
              Hub Komunitas
            </a>
          </div>

          <button
            id="mobile-drawer-copy-btn"
            onClick={() => {
              onCopyIP();
              setIsMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-autumn-orange text-white text-xs font-mono tracking-widest font-bold rounded-lg uppercase shadow-lg shadow-autumn-orange/10"
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4" />
                <span>IP Berhasil Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Salin IP: {siteConfig.server.ip}</span>
              </>
            )}
          </button>

          {/* Dynamic Developer & Community Links inside mobile menu */}
          <div className="mt-2 p-3 bg-black/40 rounded-xl border border-white/5 flex flex-col gap-2 text-xs">
            <span className="font-semibold text-[10px] uppercase font-mono tracking-wider text-autumn-gold">Komunitas & Developer</span>
            <div className="flex flex-col gap-1.5 text-stone-400">
              <span className="flex items-center gap-1.5">
                <span>Developer:</span>
                <a href={`https://wa.me/${devData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-autumn-orange underline font-semibold">{devData.name}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <span>Komunitas:</span>
                <a href={devData.community.website} target="_blank" rel="noopener noreferrer" className="text-white hover:text-autumn-orange underline font-semibold">{devData.community.name}</a>
              </span>
              <a 
                href={devData.website.portfolio} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-1 flex items-center justify-center gap-1.5 py-2 bg-autumn-orange/10 hover:bg-autumn-orange/20 border border-autumn-orange/20 text-autumn-orange text-[10px] font-bold rounded uppercase tracking-wide transition-all"
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
