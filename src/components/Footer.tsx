import { siteConfig } from "../config/site";
import { ChevronUp, ExternalLink } from "lucide-react";

export default function Footer() {
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

      {/* 3. FOOTER WATERMARK (Developed by RAN DEV) */}
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-white/5 text-center flex flex-col items-center justify-center gap-1.5">
        <p className="text-xs text-stone-500 font-mono">
          Website dikembangkan oleh <span className="text-stone-300 font-bold font-sans">{siteConfig.developer.name}</span> (WhatsApp: <a href={`https://wa.me/${siteConfig.developer.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-autumn-orange hover:underline font-bold inline-flex items-center gap-0.5 font-mono">{siteConfig.developer.whatsapp}<ExternalLink className="w-3 h-3" /></a>)
        </p>
        <p className="text-[10px] text-stone-600 italic">
          "{siteConfig.developer.pitch}"
        </p>
      </div>
    </footer>
  );
}
