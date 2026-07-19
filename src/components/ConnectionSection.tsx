import { motion } from "motion/react";
import { MessageSquare, ArrowRight, CheckCircle, Users, Bell, ShieldAlert } from "lucide-react";
import { siteConfig } from "../config/site";

export default function ConnectionSection() {
  const waGroupLink = siteConfig.links.whatsappGroup;

  return (
    <section id="connection" className="py-20 px-4 md:px-8 relative bg-gradient-to-b from-autumn-dark to-autumn-deep overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-autumn-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-autumn-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-500 uppercase bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            Akses Masuk & Komunitas
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mt-4 tracking-tight">
            Gabung Grup WhatsApp Resmi
          </h2>
          <p className="text-stone-400 text-sm md:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Untuk menjaga kenyamanan bermain dan keamanan server dari gangguan, informasi akses (IP & Port) dibagikan secara eksklusif di dalam grup WhatsApp kami.
          </p>
        </div>

        {/* Central Featured WhatsApp Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative group mb-12"
        >
          {/* Animated glow border */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-autumn-orange to-autumn-gold opacity-20 group-hover:opacity-40 blur-xl transition duration-500" />
          
          <div className="relative glass-panel-heavy border-emerald-500/25 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-black/60">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
              <div className="p-5 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20 animate-slow-float shadow-lg shadow-emerald-500/5">
                <MessageSquare className="w-10 h-10" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 inline-block">
                  WhatsApp Group
                </span>
                <h3 className="text-2xl font-display font-extrabold text-white mt-2">
                  Holly SMP Official Community
                </h3>
                <p className="text-stone-300 text-sm mt-2 max-w-md leading-relaxed">
                  Ketuk tombol di sebelah kanan untuk langsung bergabung dengan ratusan pemain aktif lainnya dan dapatkan info server terbaru secara real-time.
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto flex flex-col items-center gap-3">
              <a
                href={waGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              >
                <span>Gabung Grup Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[11px] font-mono text-stone-500">
                Tautan aman: bit.ly/hollygrup
              </span>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Benefit 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 border-white/5 hover:border-emerald-500/30 transition-all duration-300 bg-autumn-deep/35"
          >
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20 w-fit mb-5">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h4 className="text-white font-display font-bold text-lg">Akses IP & Port</h4>
            <p className="text-stone-400 text-xs mt-2.5 leading-relaxed">
              Dapatkan detail koneksi server (IP & Port) yang selalu terupdate langsung dari deskripsi grup atau sapa admin di grup chat.
            </p>
          </motion.div>

          {/* Benefit 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 border-white/5 hover:border-autumn-orange/30 transition-all duration-300 bg-autumn-deep/35"
          >
            <div className="p-3 bg-autumn-orange/10 text-autumn-orange rounded-xl border border-autumn-orange/20 w-fit mb-5">
              <Bell className="w-6 h-6" />
            </div>
            <h4 className="text-white font-display font-bold text-lg">Info & Event Terbaru</h4>
            <p className="text-stone-400 text-xs mt-2.5 leading-relaxed">
              Jadilah yang pertama tahu tentang jadwal maintenance, update versi Minecraft, event menarik berhadiah, dan pergantian musim server.
            </p>
          </motion.div>

          {/* Benefit 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="glass-card rounded-2xl p-6 border-white/5 hover:border-autumn-gold/30 transition-all duration-300 bg-autumn-deep/35"
          >
            <div className="p-3 bg-autumn-gold/10 text-autumn-gold rounded-xl border border-autumn-gold/20 w-fit mb-5">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-white font-display font-bold text-lg">Mabar & Cari Teman</h4>
            <p className="text-stone-400 text-xs mt-2.5 leading-relaxed">
              Temukan rekan satu tim untuk membangun kota impian Anda, berdagang item, membentuk clan, atau sekadar menjelajahi dunia luas Holly SMP bersama.
            </p>
          </motion.div>

        </div>

        {/* Informational Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 p-5 rounded-2xl border border-amber-500/20 bg-amber-500/5 flex items-start gap-4"
        >
          <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-lg shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-white tracking-wide">Pemberitahuan Keamanan</h5>
            <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">
              Harap berhati-hati terhadap pihak asing yang membagikan tautan atau file di luar grup WhatsApp resmi ini. Segala bentuk pengumuman resmi dan pembagian item hadiah hanya dilakukan melalui koordinasi admin berwenang di grup Holly SMP.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
