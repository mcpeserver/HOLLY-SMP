# 🍁 Holly SMP | Season Six — Official Landing Page 🦊

<div align="center">
  <img src="/logo.png" alt="Holly SMP Logo" width="120" style="filter: drop-shadow(0 4px 12px rgba(249, 115, 22, 0.5));" />
  
  ### ✨ Estetika Autumn Forest Sky Island Premium ✨
  
  *Selamat datang di repositori landing page resmi Holly SMP Season Six! Dirancang khusus dengan estetika premium musim gugur yang hangat, rubah blocky yang lucu, dan pulau melayang Minecraft yang magis.*
  
  [**Explore Live App**](https://ais-pre-pprfwg7iwjpvxwwevei63i-541148369388.asia-southeast1.run.app) • [**Hubungi RAN DEV**](https://wa.me/0895602592430)

  <br />

  [![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
  [![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
  [![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-Lighter-FF00FE?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev)

</div>

---

## 📸 Visual Showcase & Previews

Berikut adalah aset utama yang digunakan untuk membingkai visual magis website ini:

### 🌟 Hero Background & Cinematic Wallpaper
Pemandangan pulau melayang Minecraft yang memanjakan mata dengan daun-daun musim gugur yang hangat:
```text
/hero-bg.webp (Absolute Path)
```
<img src="/hero-bg.webp" alt="Hero Background Preview" width="100%" style="border-radius: 12px; border: 1px solid rgba(249, 115, 22, 0.2); box-shadow: 0 10px 30px rgba(0,0,0,0.5);" />

### 🛡️ Social Media Share Preview (Open Graph)
Gambar yang muncul otomatis ketika tautan landing page ini dibagikan ke WhatsApp, Discord, Facebook, atau Twitter:
```text
/og-image.webp (Absolute Path)
```
<img src="/og-image.webp" alt="Open Graph Preview" width="100%" style="border-radius: 12px; border: 1px solid rgba(249, 115, 22, 0.2); box-shadow: 0 10px 30px rgba(0,0,0,0.5);" />

---

## 🎨 Konsep Seni & Vibes Visual

Website ini bukan sekadar landing page biasa; ini adalah **karya seni digital** yang dirancang dengan dedikasi tinggi terhadap keharmonisan elemen visual:

*   **Tema Musim Gugur di Langit**: Menggabungkan nuansa alami petualangan Minecraft dengan kehangatan warna musim gugur (*Autumn Forest Sky Island*).
*   **Warna Misterius & Mewah**: 
    *   `Background` menggunakan *Deep Chocolate Brown* (`#120c08`) dan *Midnight Charcoal* agar mata tetap nyaman saat membaca di malam hari.
    *   `Aksen Cahaya` dihidupkan oleh *Vibrant Autumn Orange* (`#f97316`) dan *Sunny Golden Yellow* (`#facc15`) yang memancarkan pendaran glow magis.
*   **Sentuhan Animasi Halus**: Gerakan melayang lambat (*slow float*) pada logo rubah, perubahan transparan yang smooth pada **Sticky Header** saat di-scroll, dan tombol back-to-top yang interaktif.

---

## ⚙️ Fitur-Fitur Keren yang Udah Siap Pakai

1.  **🚀 Sticky Header & Double Banner**: Banner pengembang (RAN DEV) di atas dan Navbar utama akan tetap menempel kokoh di atas layar secara responsif saat di-scroll dengan efek *glassmorphism* (blur) dan bayangan lembut yang muncul halus.
2.  **🎁 Redeem Code Area**: Dilengkapi tombol satu-klik untuk menyalin kode hadiah (`holly123`) lengkap dengan animasi pendaran tombol dan toast notifikasi interaktif.
3.  **🎮 IP Address Copier**: Salin alamat IP server secara instan dalam sekali klik agar player bisa langsung join tanpa repot mencatat.
4.  **⛔ Rules Section with Style**: Desain modern untuk peraturan server menggunakan ikon penanda merah menyala yang kokoh dan tegas.
5.  **💬 Social Media Hub**: Link WhatsApp Group, TikTok, dan Discord yang siap mengarahkan komunitasmu ke pusat diskusi.
6.  **📈 Scroll Progress Bar**: Indikator gradasi oranye-kuning di bagian paling atas untuk melacak sejauh mana player membaca halaman.
7.  **🔝 Back to Top Button**: Tombol melayang di pojok kiri bawah dengan transisi kemunculan yang lincah menggunakan Framer Motion.

---

## 📁 Struktur Folder yang Rapi & Bersih

Seluruh aset gambar diletakkan langsung di dalam folder `/public` agar bebas dari overhead kompilasi dan dapat dipanggil menggunakan absolute path yang sangat aman:

```text
public/
├── logo.png               # Logo ikon rubah resmi Holly SMP
├── hero-bg.webp           # Gambar latar belakang cinematic hero
├── background.webp        # Latar belakang isi konten landing page
├── og-image.webp          # Gambar preview sosial media (Open Graph)
├── favicon.ico            # Ikon tab browser kamu
└── manifest.webmanifest   # Konfigurasi PWA untuk akses mobile instan
```

---

## 🚀 Cara Menjalankan di Komputer Kamu (Local Development)

Gak pake ribet! Cukup ikuti 3 langkah mudah ini:

### 1. Kloning & Masuk ke Folder Proyek
```bash
git clone https://github.com/username/holly-smp.git
cd holly-smp
```

### 2. Pasang Semua Bumbu-Bumbu (Install Dependencies)
```bash
npm install
```

### 3. Nyalakan Mesin Pengembangan! (Run Dev Server)
```bash
npm run dev
```
Sekarang, buka browser kesayanganmu dan akses **[http://localhost:3000](http://localhost:3000)**. Hore! Websitemu sudah menyala dengan indah! 🎉

---

## 🛠️ Pusat Konfigurasi Satu Pintu (`site.ts`)

Bosan harus ngedit kode HTML/TSX satu-satu cuma buat ganti IP, nomor WhatsApp, atau ganti kode redeem? **Tenang!** Semua konfigurasi penting sudah dipusatkan di file `/src/config/site.ts`.

Cukup buka berkas tersebut, dan sesuaikan isinya semudah bermain game:

```typescript
export const siteConfig = {
  name: "Holly SMP",
  title: "Holly SMP | Season Six — Autumn Sky Island",
  description: "Server Minecraft Survival Multiplayer terbaik dengan komunitas hangat!",
  domain: "hollysmp.com",
  logo: "/logo.png",
  heroBg: "/hero-bg.webp",
  background: "/background.webp",
  
  server: {
    ip: "play.hollysmp.com",
    port: 25565,
    bedrockPort: 19132,
    version: "1.20.4 - 1.21.x",
    redeemCode: "holly123",
  },
  
  links: {
    whatsappGroup: "https://chat.whatsapp.com/...",
    tiktok: "https://tiktok.com/@...",
    discord: "https://discord.gg/...",
  },
  
  developer: {
    name: "RAN DEV",
    whatsapp: "0895602592430",
    pitch: "Butuh website sekeren dan secepat ini untuk servermu? Hubungi kami!"
  }
};
```

---

## ☁️ Siap Publikasi ke Vercel!

Website ini dirancang **Production-Ready** untuk langsung diunggah ke [Vercel](https://vercel.com):
1. Hubungkan akun GitHub milikmu ke Vercel.
2. Klik **Import Project**, pilih repositori ini.
3. Klik **Deploy**! Kurang dari 60 detik, landing page server komunitasmu sudah online 24/7 dan bisa diakses seluruh dunia secara gratis! 🌍

---

## 🤝 Kredit Pengembang & Layanan Pembuatan Website

Proyek landing page sekelas industri ini dibangun penuh cinta oleh **RAN DEV**:

*   **Developer Utama**: RAN DEV
*   **WhatsApp Resmi**: [+62 895-6025-92430](https://wa.me/0895602592430)
*   **Pesan Sponsor**: *Ingin meningkatkan prestise server Minecraft-mu atau membangun portofolio bisnis dengan website modern, super cepat, dan responsive? Chat sekarang juga di WhatsApp! Kami siap mewujudkan mimpimu!* 🚀

---

<div align="center">
  <sub>© 2026 Holly SMP. Crafted with Autumn Passion by <strong>RAN DEV</strong>.</sub>
</div>
