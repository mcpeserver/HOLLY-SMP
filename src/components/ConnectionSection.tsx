import { motion } from "motion/react";
import { Server, Wifi, Hash, Layers, Copy, Check, ShieldCheck, Cpu } from "lucide-react";
import { siteConfig } from "../config/site";

interface ConnectionSectionProps {
  onCopyIP: () => void;
  isCopied: boolean;
}

export default function ConnectionSection({ onCopyIP, isCopied }: ConnectionSectionProps) {
  return (
    <section id="connection" className="py-20 px-4 md:px-8 relative bg-gradient-to-b from-autumn-dark to-autumn-deep overflow-hidden">
      {/* Decorative ambient background assets */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-autumn-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-autumn-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-autumn-orange uppercase bg-autumn-orange/10 px-3.5 py-1 rounded-full border border-autumn-orange/20">
            Akses Masuk Server
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mt-3 tracking-tight">
            Koneksi Resmi Server
          </h2>
          <p className="text-stone-400 text-sm md:text-base mt-2 max-w-lg mx-auto">
            Gunakan informasi port dan alamat IP resmi berikut untuk langsung masuk ke dunia petualangan Holly SMP.
          </p>
        </div>

        {/* Connection Widget Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          
          {/* Card 1: Server IP Address */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between gap-4"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="p-3 bg-autumn-orange/10 rounded-xl text-autumn-orange border border-autumn-orange/20">
                  <Server className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-autumn-orange/20 text-autumn-orange">
                  Utama
                </span>
              </div>
              
              <h3 className="text-stone-400 text-xs font-semibold uppercase tracking-wider mt-5">
                ➥ IP Address
              </h3>
              <p className="text-white font-mono font-bold text-lg md:text-xl tracking-tight mt-1 truncate">
                {siteConfig.server.ip}
              </p>
            </div>

            <button
              id="conn-copy-ip-btn"
              onClick={onCopyIP}
              className="w-full mt-2 py-3 bg-autumn-orange/10 hover:bg-autumn-orange text-autumn-orange hover:text-white border border-autumn-orange/20 hover:border-transparent text-xs font-mono font-bold tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4 animate-scale-up" />
                  <span>IP Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Salin IP</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Card 2: Server Port */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between gap-4"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="p-3 bg-autumn-gold/10 rounded-xl text-autumn-gold border border-autumn-gold/20">
                  <Hash className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-autumn-gold/20 text-autumn-gold">
                  Port Koneksi
                </span>
              </div>
              
              <h3 className="text-stone-400 text-xs font-semibold uppercase tracking-wider mt-5">
                ➥ Port Server
              </h3>
              <p className="text-white font-mono font-bold text-2xl tracking-wide mt-1">
                {siteConfig.server.port}
              </p>
            </div>

            <div className="w-full mt-2 py-3 bg-neutral-900/60 text-stone-400 border border-white/5 text-xs font-mono font-bold tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 select-all">
              <span>Port Bedrock / Java</span>
            </div>
          </motion.div>

          {/* Card 3: Server Type */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between gap-4"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="p-3 bg-autumn-green/10 rounded-xl text-autumn-green border border-autumn-green/20">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-autumn-green/20 text-autumn-green">
                  Edisi
                </span>
              </div>
              
              <h3 className="text-stone-400 text-xs font-semibold uppercase tracking-wider mt-5">
                ➥ Tipe Server
              </h3>
              <p className="text-white font-display font-bold text-xl tracking-tight mt-1">
                Vanilla / Bedrock Edition
              </p>
            </div>

            <div className="w-full mt-2 py-3 bg-neutral-900/60 text-stone-400 border border-white/5 text-xs font-sans font-bold tracking-wider uppercase rounded-xl flex items-center justify-center gap-2">
              <Cpu className="w-4 h-4 text-autumn-green" />
              <span>Multiplatform Play</span>
            </div>
          </motion.div>

        </div>

        {/* Extra Information box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 p-5 rounded-2xl border border-white/5 bg-black/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-autumn-green/15 rounded-lg text-autumn-green">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Performa Stabil & Server Aman</p>
              <p className="text-[11px] text-stone-400 mt-0.5">Sistem pencegahan DDOS aktif 24/7 untuk memastikan kelancaran bermain tanpa lag.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-stone-400">Status Server:</span>
            <span className="text-xs font-mono font-bold text-autumn-green px-2 py-1 rounded bg-autumn-green/10 border border-autumn-green/20">
              {siteConfig.server.statusIndicators.online}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
