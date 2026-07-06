import { siteConfig } from "../config/site";
import { ChevronUp, ExternalLink } from "lucide-react";
import { DevData } from "../App";

interface FooterProps {
  devData: DevData;
}

export default function Footer({ devData }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-neutral-950 border-t border-white/5 py-12 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
          <div className="flex items-center gap-2">
            <img 
              id="footer-logo"
              src={siteConfig.logo} 
              alt={siteConfig.name} 
              referrerPolicy="no-referrer"
              className="w-7 h-7 object-cover rounded-full border border-autumn-orange/30 p-0.5 bg-autumn-deep/60"
            />
            <span className="font-display font-extrabold text-white text-base tracking-tight">{siteConfig.name}</span>
          </div>
          <p className="text-xs text-stone-500 mt-1">
            {siteConfig.copyright} — Semua hak cipta dilindungi. Server ini tidak terafiliasi dengan Mojang Studios.
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex items-center gap-5 text-xs font-semibold text-stone-400">
          <a href="#hero" className="hover:text-autumn-orange transition-colors">Utama</a>
          <a href="#rules" className="hover:text-autumn-orange transition-colors">Peraturan</a>
          <a href="#connection" className="hover:text-autumn-orange transition-colors">Koneksi</a>
          <a href="#social" className="hover:text-autumn-orange transition-colors">Komunitas</a>
        </div>

        {/* Scroll Back to Top Button */}
        <button
          id="back-to-top"
          onClick={handleScrollToTop}
          className="p-3 bg-neutral-900 hover:bg-autumn-orange text-stone-400 hover:text-white rounded-xl border border-white/10 hover:border-transparent transition-all duration-300 shadow-md group"
          aria-label="Kembali ke atas"
        >
          <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>

      {/* 3. FOOTER WATERMARK (Developed by RAN DEV & COMMUNITY HUB) */}
      <div className="max-w-5xl mx-auto mt-10 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-400">
        
        {/* Left Side: Developer Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
          <h4 className="text-xs uppercase font-mono tracking-wider text-autumn-orange font-bold">Informasi Pengembang</h4>
          <p className="text-xs text-stone-400 mt-1 leading-relaxed">
            Website dikembangkan secara profesional oleh <span className="text-white font-bold">{devData.name}</span>.
          </p>
          <div className="flex items-center gap-3 mt-1.5 text-xs flex-wrap justify-center md:justify-start">
            <a 
              href={`https://wa.me/${devData.contact.whatsapp}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-autumn-orange hover:text-white hover:underline font-semibold inline-flex items-center gap-1 transition-colors"
            >
              <span>WhatsApp: {devData.contact.whatsapp}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-stone-700 hidden sm:inline">|</span>
            <a 
              href={devData.website.portfolio} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-autumn-gold hover:text-white hover:underline font-semibold inline-flex items-center gap-1 transition-colors"
            >
              <span>Website Portofolio</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right Side: Developer Community */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-1.5">
          <h4 className="text-xs uppercase font-mono tracking-wider text-autumn-gold font-bold">Komunitas Developer</h4>
          <p className="text-xs text-stone-400 mt-1 leading-relaxed">
            Bergabunglah dengan komunitas resmi kami <span className="text-white font-bold">{devData.community.name}</span>.
          </p>
          <div className="flex items-center gap-3 mt-1.5 text-xs flex-wrap justify-center md:justify-end">
            <a 
              href={devData.community.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-autumn-orange hover:text-white hover:underline font-semibold inline-flex items-center gap-1 transition-colors"
            >
              <span>Grup Komunitas</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            {devData.community.discord && (
              <>
                <span className="text-stone-700 hidden sm:inline">|</span>
                <a 
                  href={devData.community.discord} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-400 hover:text-white hover:underline font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  <span>Discord Komunitas</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}
