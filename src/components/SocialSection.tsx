import { motion } from "motion/react";
import { MessageSquare, MessageCircle, Music, Disc, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "../config/site";

export default function SocialSection() {
  return (
    <section id="social" className="py-20 px-4 md:px-8 relative bg-gradient-to-b from-autumn-deep to-autumn-dark overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-autumn-orange uppercase bg-autumn-orange/10 px-3.5 py-1 rounded-full border border-autumn-orange/20">
            Hub Komunitas
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mt-3 tracking-tight">
            Gabung Komunitas Kami
          </h2>
          <p className="text-stone-400 text-sm md:text-base mt-2 max-w-lg mx-auto">
            Temukan teman bermain baru, koordinasikan strategi faksi, dan dapatkan informasi event server langsung lewat media sosial kami.
          </p>
        </div>

        {/* Bento Grid layout for social platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          
          {/* Card 1: WhatsApp Group */}
          <motion.a
            href={siteConfig.links.whatsappGroup}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden bg-gradient-to-br from-emerald-950/40 via-neutral-900/50 to-neutral-950 p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-400/50 shadow-lg flex flex-col justify-between h-56 transition-all duration-300"
          >
            {/* Ambient inner card glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none transition-opacity group-hover:bg-emerald-500/20" />
            
            <div className="flex items-start justify-between">
              <div className="p-3.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                <MessageCircle className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-stone-500 group-hover:text-emerald-400 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
            </div>

            <div className="relative z-10 mt-auto">
              <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
                Group Chat Utama
              </span>
              <h3 className="text-white font-display font-extrabold text-xl tracking-tight mt-1 group-hover:text-emerald-400 transition-colors">
                Grup WhatsApp Resmi
              </h3>
              <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                Bit.ly/hollygc
              </p>
            </div>
          </motion.a>

          {/* Card 2: TikTok Official */}
          <motion.a
            href={siteConfig.links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative overflow-hidden bg-gradient-to-br from-rose-950/30 via-neutral-900/50 to-neutral-950 p-6 rounded-2xl border border-rose-500/20 hover:border-rose-400/50 shadow-lg flex flex-col justify-between h-56 transition-all duration-300"
          >
            {/* Ambient inner card glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none transition-opacity group-hover:bg-rose-500/20" />

            <div className="flex items-start justify-between">
              <div className="p-3.5 bg-rose-500/10 text-rose-400 rounded-xl border border-rose-500/20 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                <Music className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-stone-500 group-hover:text-rose-400 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
            </div>

            <div className="relative z-10 mt-auto">
              <span className="text-[10px] font-mono font-bold tracking-widest text-rose-400 uppercase">
                Konten Kreatif
              </span>
              <h3 className="text-white font-display font-extrabold text-xl tracking-tight mt-1 group-hover:text-rose-400 transition-colors">
                TikTok Official
              </h3>
              <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                Bit.ly/hollytiktok
              </p>
            </div>
          </motion.a>

          {/* Card 3: Discord Server */}
          <motion.a
            href={siteConfig.links.discord}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="group relative overflow-hidden bg-gradient-to-br from-indigo-950/40 via-neutral-900/50 to-neutral-950 p-6 rounded-2xl border border-indigo-500/20 hover:border-indigo-400/50 shadow-lg flex flex-col justify-between h-56 transition-all duration-300"
          >
            {/* Ambient inner card glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none transition-opacity group-hover:bg-indigo-500/20" />

            <div className="flex items-start justify-between">
              <div className="p-3.5 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                <Disc className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-stone-500 group-hover:text-indigo-400 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
            </div>

            <div className="relative z-10 mt-auto">
              <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-400 uppercase">
                Komunikasi Suara & Chat
              </span>
              <h3 className="text-white font-display font-extrabold text-xl tracking-tight mt-1 group-hover:text-indigo-400 transition-colors">
                Discord Server Resmi
              </h3>
              <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                Bit.ly/hollydiscord
              </p>
            </div>
          </motion.a>

        </div>

        {/* Discord/WhatsApp Stats notice in simple info block */}
        <div className="mt-10 p-5 rounded-xl border border-autumn-orange/10 bg-black/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-autumn-gold" />
            <p className="text-xs text-stone-300">
              Butuh panduan teknis bermain Minecraft Pocket Edition / Bedrock? Hubungi tim support kami di grup chat komunitas.
            </p>
          </div>
          <span className="text-[10px] font-mono text-autumn-orange font-bold uppercase tracking-wider bg-autumn-orange/10 px-2 py-1 rounded">
            Aktif 24 Jam
          </span>
        </div>

      </div>
    </section>
  );
}
