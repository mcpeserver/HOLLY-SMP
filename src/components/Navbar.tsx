import { useState } from "react";
import { Copy, Check, Menu, X, ShieldCheck } from "lucide-react";
import { siteConfig } from "../config/site";

interface NavbarProps {
  onCopyIP: () => void;
  isCopied: boolean;
}

export default function Navbar({ onCopyIP, isCopied }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-50 transition-all duration-300">
      {/* 1. TOP HEADER WATERMARK (RAN DEV) */}
      <div 
        id="top-developer-banner"
        className="w-full bg-gradient-to-r from-autumn-orange via-autumn-amber to-autumn-orange text-white py-2 px-4 text-center text-xs md:text-sm font-medium tracking-wide shadow-sm flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2"
      >
        <span>Developed by <strong className="underline decoration-autumn-gold underline-offset-2">{siteConfig.developer.name}</strong> (WhatsApp: {siteConfig.developer.whatsapp}) —</span>
        <span className="text-autumn-gold font-bold">{siteConfig.developer.pitch}</span>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav 
        id="main-navbar"
        className="sticky top-0 w-full glass-panel border-b border-white/5 backdrop-blur-md z-40 py-3 px-4 md:px-8 flex items-center justify-between"
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
        </div>
      )}
    </header>
  );
}
