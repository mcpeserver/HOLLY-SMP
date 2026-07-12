import { motion } from "motion/react";
import { Copy, Check, Users, Gift, ChevronDown, Sparkles } from "lucide-react";
import { siteConfig } from "../config/site";

interface HeroProps {
  onCopyIP: () => void;
  isCopied: boolean;
  onCopyRedeem: () => void;
  isRedeemCopied: boolean;
}

export default function Hero({ onCopyIP, isCopied, onCopyRedeem, isRedeemCopied }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 md:px-8 py-16 md:py-24 overflow-hidden"
    >
      {/* Cinematic Background with Gradient Overlay & Ambient Blur */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-out scale-105"
        style={{ backgroundImage: `url(${siteConfig.heroBg})` }}
      />
      
      {/* Premium Multi-layer Overlay for visual readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-autumn-dark via-autumn-dark/85 to-autumn-dark/40" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-autumn-orange/5 to-autumn-amber/10 mix-blend-overlay" />
      
      {/* Decorative Light Radial Glow in Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-autumn-orange/20 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center gap-6">
        
        {/* Animated Floating Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group mb-2"
        >
          {/* Backlight Glow for the logo */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-autumn-orange to-autumn-gold opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
          <img 
            id="hero-logo"
            src={siteConfig.logo} 
            alt={`${siteConfig.name} logo`} 
            referrerPolicy="no-referrer"
            className="relative w-32 h-32 md:w-44 md:h-44 object-cover rounded-full border-2 border-autumn-orange/40 p-1 bg-autumn-deep/80 animate-slow-float drop-shadow-[0_10px_30px_rgba(249,115,22,0.6)]"
          />
        </motion.div>

        {/* Heading & Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-2 bg-autumn-orange/15 px-4 py-1.5 rounded-full border border-autumn-orange/30 shadow-inner">
            <Sparkles className="w-4 h-4 text-autumn-gold animate-spin" style={{ animationDuration: '4s' }} />
            <span className="text-xs font-mono font-bold tracking-widest text-autumn-orange uppercase">
              Server Minecraft Indonesia
            </span>
          </div>

          <h1 
            id="hero-title"
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          >
            HOLLY <span className="text-transparent bg-clip-text bg-gradient-to-r from-autumn-orange via-autumn-gold to-autumn-amber">SMP</span>
          </h1>
          
          <p 
            id="hero-description"
            className="text-stone-300 text-sm md:text-base max-w-lg mt-2 font-normal leading-relaxed text-center px-4"
          >
            {siteConfig.description} Rasakan keseruan bermain di server vanilla survival yang ramah, stabil, dan dinamis.
          </p>
        </motion.div>

        {/* Special Feature Area: Gift Code Claim Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-md"
        >
          <div 
            id="redeem-card"
            className="glass-panel border-autumn-orange/30 rounded-2xl p-5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4 text-left shadow-lg"
          >
            <div className="flex items-start gap-3">
              <div className="p-3 bg-autumn-orange/20 rounded-xl text-autumn-orange border border-autumn-orange/20 mt-0.5">
                <Gift className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-wide">Klaim Hadiah Spesial!</h3>
                <p className="text-xs text-stone-400 mt-1">Gunakan Code Redeem ini di dalam game:</p>
                <code className="text-xs font-mono text-autumn-gold bg-black/40 px-2 py-0.5 rounded border border-white/5 mt-1.5 inline-block">
                  {siteConfig.server.redeemCode}
                </code>
              </div>
            </div>

            <button
              id="copy-redeem-btn"
              onClick={onCopyRedeem}
              className="w-full md:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10 text-xs font-mono font-bold uppercase rounded-lg transition-colors cursor-pointer"
            >
              {isRedeemCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-autumn-green" />
                  <span className="text-autumn-green">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-400" />
                  <span>Salin Kode</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Interactive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4"
        >
          {/* Main Action: Copy Server IP */}
          <button
            id="hero-copy-ip-btn"
            onClick={onCopyIP}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-autumn-orange via-autumn-amber to-autumn-orange bg-[length:200%_auto] hover:bg-right text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-autumn-orange/20 flex items-center justify-center gap-3 transition-all duration-500 hover:scale-[1.03]"
          >
            {isCopied ? (
              <>
                <Check className="w-5 h-5" />
                <span>Alamat IP Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span>Salin Alamat IP</span>
              </>
            )}
          </button>

          {/* Secondary Action: Join Community */}
          <a
            id="hero-community-btn"
            href="#social"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold text-sm uppercase tracking-wider rounded-xl border border-white/10 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.03]"
          >
            <Users className="w-5 h-5 text-autumn-gold" />
            <span>Gabung Komunitas</span>
          </a>
        </motion.div>

      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce opacity-60">
        <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase">Jelajahi</span>
        <ChevronDown className="w-4 h-4 text-autumn-orange" />
      </div>
    </section>
  );
}
