import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Info, Sparkles, Server, ChevronUp } from "lucide-react";
import { siteConfig } from "./config/site";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ConnectionSection from "./components/ConnectionSection";
import RulesSection from "./components/RulesSection";
import SocialSection from "./components/SocialSection";
import Footer from "./components/Footer";

export interface DevData {
  name: string;
  contact: {
    phone: string;
    whatsapp: string;
  };
  website: {
    portfolio: string;
  };
  community: {
    name: string;
    website: string;
    discord: string;
  };
}

const defaultDevData: DevData = {
  name: siteConfig.developer.name,
  contact: {
    phone: siteConfig.developer.whatsapp,
    whatsapp: siteConfig.developer.whatsapp,
  },
  website: {
    portfolio: "https://ran-dev.my.id",
  },
  community: {
    name: "RAN DEV Community",
    website: "https://chat.whatsapp.com/GQG74pW0b2TBeh4iGZ5j8E",
    discord: "https://discord.gg/VMyy6F7B9X",
  }
};

export default function App() {
  const [isCopied, setIsCopied] = useState(false);
  const [isRedeemCopied, setIsRedeemCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "info">("success");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState<"home" | "connection" | "rules" | "social">("home");
  const [devData, setDevData] = useState<DevData>(defaultDevData);

  // Fetch developer & community API on load
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) throw new Error("API response error");
        return res.json();
      })
      .then((data) => {
        if (data) {
          const fetchedDevData = {
            name: data.name || defaultDevData.name,
            contact: {
              phone: data.contact?.phone || defaultDevData.contact.phone,
              whatsapp: data.contact?.whatsapp || defaultDevData.contact.whatsapp,
            },
            website: {
              portfolio: data.website?.portfolio || defaultDevData.website.portfolio,
            },
            community: {
              name: data.community?.name || defaultDevData.community.name,
              website: data.community?.website || defaultDevData.community.website,
              discord: data.community?.discord || defaultDevData.community.discord,
            }
          };
          setDevData(fetchedDevData);

          // Dynamically update document title & meta SEO tags from fetched data if present
          document.title = siteConfig.title;

          // Dynamically update favicon and icons to be the logo
          const logoUrl = data.logo || data.website?.logo || "/logo.jpg";
          const heroUrl = data.hero_image || data.website?.hero || data.website?.hero_image || "/hero-bg.jpg";

          const faviconLink = document.querySelector("link[rel='icon']");
          if (faviconLink) {
            faviconLink.setAttribute("href", logoUrl);
          }
          const appleIcon = document.querySelector("link[rel='apple-touch-icon']");
          if (appleIcon) {
            appleIcon.setAttribute("href", logoUrl);
          }

          // Update Meta Tags Helper
          const updateMeta = (property: string, content: string, isName = false) => {
            const selector = isName ? `meta[name='${property}']` : `meta[property='${property}']`;
            let meta = document.querySelector(selector);
            if (!meta) {
              meta = document.createElement("meta");
              if (isName) {
                meta.setAttribute("name", property);
              } else {
                meta.setAttribute("property", property);
              }
              document.head.appendChild(meta);
            }
            meta.setAttribute("content", content);
          };

          updateMeta("og:image", heroUrl);
          updateMeta("twitter:image", heroUrl);
          updateMeta("og:title", siteConfig.title);
          updateMeta("twitter:title", siteConfig.title);
          updateMeta("og:description", siteConfig.description);
          updateMeta("twitter:description", siteConfig.description);
        }
      })
      .catch((err) => {
        console.warn("Using default developer/community config:", err);
      });
  }, []);

  // Scroll Progress indicator and Back to Top visibility logic
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      } else {
        setScrollProgress(0);
      }

      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const triggerToast = (message: string, type: "success" | "info" = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    
    // Auto-dismiss toast
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);
    return () => clearTimeout(timer);
  };

  // Copy IP Address Action
  const handleCopyIP = () => {
    navigator.clipboard.writeText(siteConfig.server.ip).then(
      () => {
        setIsCopied(true);
        triggerToast(`IP Server ${siteConfig.server.ip} berhasil disalin ke clipboard!`, "success");
        setTimeout(() => setIsCopied(false), 2000);
      },
      () => {
        triggerToast("Gagal menyalin IP server. Silakan salin secara manual.", "info");
      }
    );
  };

  // Copy Redeem Code Action
  const handleCopyRedeem = () => {
    navigator.clipboard.writeText(siteConfig.server.redeemCode).then(
      () => {
        setIsRedeemCopied(true);
        triggerToast(`Code Redeem '${siteConfig.server.redeemCode}' berhasil disalin! Masukkan di dalam game untuk klaim hadiah!`, "success");
        setTimeout(() => setIsRedeemCopied(false), 2000);
      },
      () => {
        triggerToast("Gagal menyalin Code Redeem. Silakan salin secara manual.", "info");
      }
    );
  };

  return (
    <div className="relative min-h-screen bg-autumn-dark font-sans text-stone-200 antialiased overflow-x-hidden selection:bg-autumn-orange/30 selection:text-white">
      {/* Dynamic Scroll Progress Bar at the absolute top */}
      <div 
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-autumn-orange via-autumn-gold to-autumn-orange z-[100] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header & Sticky Main Navbar */}
      <Navbar onCopyIP={handleCopyIP} isCopied={isCopied} devData={devData} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Skip to Content button for Accessibility (WCAG compliant) */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-14 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-autumn-orange focus:text-white focus:rounded-xl focus:font-bold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-autumn-gold"
      >
        Lompati ke Konten Utama
      </a>

      {/* Main Content Sections wrapped in descriptive main semantic tag */}
      <main id="main-content" className="pt-[110px] md:pt-[130px] min-h-[70vh]">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {/* Hero Section */}
              <Hero 
                onCopyIP={handleCopyIP} 
                isCopied={isCopied} 
                onCopyRedeem={handleCopyRedeem} 
                isRedeemCopied={isRedeemCopied} 
              />

              {/* Server About Section */}
              <section id="about" className="py-20 px-4 md:px-8 bg-autumn-deep relative border-t border-white/5">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
                  {/* Visual Blocky Illustration Card */}
                  <div className="w-full md:w-2/5 flex justify-center">
                    <div className="relative group">
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-autumn-orange via-autumn-amber to-autumn-gold opacity-30 group-hover:opacity-60 blur-lg transition duration-500" />
                      <div className="relative glass-card border-autumn-orange/15 rounded-2xl p-6 md:p-8 flex flex-col items-center gap-4 bg-black/50 text-center">
                        <div className="p-4 bg-autumn-orange/10 rounded-full text-autumn-orange border border-autumn-orange/20 animate-slow-float">
                          <Server className="w-12 h-12" />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold tracking-widest text-autumn-gold uppercase block">Holly SMP</span>
                          <h3 className="font-display font-extrabold text-white text-xl mt-1">Edisi Vanilla</h3>
                          <p className="text-stone-400 text-xs mt-2 leading-relaxed">
                            Kompatibel sepenuhnya untuk pemain Minecraft Bedrock (PE/Mobile/Console) dan Java Edition.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content description */}
                  <div className="w-full md:w-3/5">
                    <span className="text-xs font-mono font-bold tracking-widest text-autumn-orange uppercase bg-autumn-orange/10 px-3.5 py-1 rounded-full border border-autumn-orange/20">
                      Tentang Server Kami
                    </span>
                    <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mt-4 tracking-tight">
                      Membangun Komunitas Sehat & Solid
                    </h2>
                    <p className="text-stone-300 text-sm md:text-base mt-4 leading-relaxed font-normal">
                      Selamat datang di <strong className="text-white">Holly SMP</strong>! Kami adalah server survival semi-vanilla Indonesia yang berfokus pada kenyamanan bermain, stabilitas performa server, dan persahabatan antar pemain.
                    </p>
                    <p className="text-stone-400 text-sm mt-3 leading-relaxed font-normal">
                      Dengan dukungan cross-play Vanilla/Bedrock, Anda dapat bergabung bersama teman-teman Anda baik dari HP (Pocket Edition), PC, maupun console tanpa hambatan. Server ini dijalankan dengan spesifikasi hardware mumpuni, memastikan petualangan bertahan hidup Anda bebas dari kendala lag.
                    </p>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === "connection" && (
            <motion.div
              key="connection"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {/* Connection Information Section */}
              <ConnectionSection />
            </motion.div>
          )}

          {activeTab === "rules" && (
            <motion.div
              key="rules"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {/* Server Rules Section */}
              <RulesSection />
            </motion.div>
          )}

          {activeTab === "social" && (
            <motion.div
              key="social"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {/* Social Hub Section */}
              <SocialSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Block */}
      <Footer devData={devData} />

      {/* Dynamic Toast Notifications (Aesthetics and Usability) */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            id="toast-notification"
            className="fixed bottom-6 right-6 z-50 glass-panel-heavy border-autumn-orange/40 rounded-xl px-5 py-4 shadow-xl max-w-sm w-full flex items-start gap-3.5"
            role="alert"
          >
            {toastType === "success" ? (
              <div className="p-2 bg-autumn-orange/20 text-autumn-orange rounded-lg border border-autumn-orange/20 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
            ) : (
              <div className="p-2 bg-autumn-gold/20 text-autumn-gold rounded-lg border border-autumn-gold/20 mt-0.5">
                <Info className="w-4 h-4" />
              </div>
            )}
            
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Notifikasi</h4>
                <Sparkles className="w-3 h-3 text-autumn-gold animate-bounce" />
              </div>
              <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                {toastMessage}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="fixed bottom-6 left-6 z-40 p-3.5 bg-gradient-to-br from-autumn-orange to-autumn-amber hover:from-autumn-amber hover:to-autumn-orange text-white rounded-full shadow-lg shadow-autumn-orange/30 border border-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-autumn-gold cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
