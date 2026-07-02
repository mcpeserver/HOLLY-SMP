import { motion } from "motion/react";
import { ShieldAlert, Ban, Info, Link as LinkIcon, HeartHandshake } from "lucide-react";
import { siteConfig } from "../config/site";

export default function RulesSection() {
  // Animation container variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="rules" className="py-20 px-4 md:px-8 relative bg-autumn-dark overflow-hidden">
      {/* Dynamic diagonal background lines/glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-autumn-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-84 h-84 bg-autumn-amber/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-autumn-orange uppercase bg-autumn-orange/10 px-3.5 py-1 rounded-full border border-autumn-orange/20">
            Pedoman Bermain
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mt-3 tracking-tight flex items-center justify-center gap-2">
            <ShieldAlert className="w-8 h-8 md:w-10 md:h-10 text-autumn-orange animate-pulse" />
            Peraturan Resmi Server
          </h2>
          <p className="text-stone-400 text-sm md:text-base mt-2 max-w-md mx-auto">
            Demi kenyamanan bersama seluruh komunitas Holly SMP, patuhi dan hormati peraturan keras di bawah ini.
          </p>
        </div>

        {/* Rules Main Card */}
        <div 
          id="rules-card"
          className="bg-neutral-950/80 backdrop-blur-xl border border-autumn-orange/20 rounded-2xl p-6 md:p-10 shadow-xl shadow-black/40 relative overflow-hidden"
        >
          {/* Subtle warning top-bar indicator */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-autumn-orange via-autumn-amber to-autumn-orange" />

          {/* Heading info */}
          <div className="flex items-center gap-3 pb-6 mb-6 border-b border-white/5">
            <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
              <Ban className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-bold text-base">Larangan Keras (Banned Offense)</h3>
              <p className="text-xs text-stone-400 mt-0.5">Segala tindakan pelanggaran dapat mengakibatkan sanksi BANNED permanen dari server.</p>
            </div>
          </div>

          {/* Staggered list layout */}
          <motion.div 
            id="rules-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {siteConfig.rules.map((rule, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-black/45 hover:bg-neutral-900/50 border border-white/5 transition-all duration-300 hover:border-autumn-orange/20"
              >
                {rule.isBan ? (
                  <span className="flex-shrink-0 text-red-500 text-base font-bold select-none" aria-hidden="true">
                    ❌
                  </span>
                ) : (
                  <span className="flex-shrink-0 text-autumn-gold text-base font-bold select-none" aria-hidden="true">
                    🔗
                  </span>
                )}
                
                <div className="flex-1">
                  <p className="text-stone-200 text-sm font-semibold tracking-wide leading-relaxed">
                    {rule.text}
                  </p>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-stone-500 uppercase block mt-1">
                    {rule.isBan ? "Sanksi Keras" : "Kebijakan Grup"}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Core Handshake Notice Footer inside the rules block */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <HeartHandshake className="w-5 h-5 text-autumn-orange" />
              <p className="text-xs font-medium text-stone-300">
                Mari kita jaga lingkungan bermain yang sehat dan menyenangkan bersama!
              </p>
            </div>
            <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded bg-white/5 text-stone-400 border border-white/5">
              EST. 2023
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
