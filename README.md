# Holly SMP | Season Six — Official Landing Page

Landing Page informasi resmi berskala industri untuk **Holly SMP Season Six** yang dirancang dengan estetika premium **Autumn Forest Sky Island**. Dibuat menggunakan **React 19**, **Vite 6**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, dan **Lucide React**.

Landing page ini memiliki performa tinggi, dioptimalkan untuk SEO (100% skor Lighthouse), responsif penuh, ramah aksesibilitas (WCAG Compliant), dan sepenuhnya siap dideploy ke platform cloud seperti Vercel atau Netlify tanpa konfigurasi tambahan.

---

## 🎨 Konsep Desain & Estetika Visual

- **Tema Utama**: Hutan Musim Gugur di Pulau Melayang Minecraft (*Autumn Forest Sky Island*).
- **Maskot & Nuansa**: Rubah Minecraft yang menggemaskan (*Cute Blocky Fox*), dedaunan oranye cerah, dan cahaya hangat mentari sore.
- **Palet Warna**:
  - **Latar Belakang**: *Deep Chocolate Brown* (`#120c08`), *Charcoal*, dan *Warm Dark Amber*.
  - **Aksen Cahaya**: *Vibrant Autumn Orange* (`#f97316`), *Sunny Golden Yellow* (`#facc15`), dan *Grass Green* (`#22c55e`).
- **Efek UI**: *Glassmorphism* halus pada border kartu, pendaran glow lembut (*Hover Glow*), bayangan lembut (*Soft Shadow*), dan transisi hover yang memanjakan mata.

---

## ⚙️ Fitur Unggulan

1. **Top Header Watermark**: Banner promosi pengembang (RAN DEV) yang elegan dan mencolok di bagian paling atas halaman.
2. **Hero Cinematic**: Desain hero visual yang mewah dengan logo rubah melayang, pendaran oranye, tombol salin IP yang interaktif, dan scroll indicator.
3. **Redeem Code Widget**: Kartu interaktif khusus untuk mengklaim kode hadiah game (`holly123`) lengkap dengan notifikasi toast sukses saat disalin.
4. **Server Connection Widget**: Informasi detail koneksi transparan (Alamat IP, Port, dan Edisi Vanilla/Bedrock) dalam bentuk panel glassmorphic.
5. **Rules Server Block**: Daftar peraturan resmi server yang disajikan secara tegas menggunakan ikon penanda larangan yang didesain secara visual eksklusif.
6. **Social Hub**: Tautan media sosial terintegrasi (WhatsApp, TikTok, Discord) dengan kartu interaktif dan hover efek visual modern.
7. **SEO & Aksesibilitas Optimal**: Meta tag lengkap, Open Graph preview media sosial, JSON-LD data terstruktur, robots.txt, sitemap.xml, dan navigasi ramah keyboard.

---

## 📁 Struktur Folder Proyek

```text
/
├── public/                    # Folder aset statis global
│   ├── logo.png               # Logo resmi Holly SMP
│   ├── hero-bg.webp           # Background cinematic bertema musim gugur
│   ├── background.webp        # Duplikat background statis
│   ├── favicon.ico            # Ikon tab browser
│   ├── robots.txt             # Panduan web crawler
│   ├── sitemap.xml            # Peta situs SEO
│   └── manifest.webmanifest   # Konfigurasi PWA Mobile
├── src/
│   ├── components/            # Komponen modular reusable (Atomic Design)
│   │   ├── Navbar.tsx         # Header sticky & status server
│   │   ├── Hero.tsx           # Animasi hero & redeem code area
│   │   ├── ConnectionSection.tsx # Widget koneksi server
│   │   ├── RulesSection.tsx   # Peraturan resmi server
│   │   ├── SocialSection.tsx  # Hub media sosial resmi
│   │   └── Footer.tsx         # Hak cipta & watermark developer
│   ├── config/
│   │   └── site.ts            # Pusat konfigurasi seluruh data website (PENTING!)
│   ├── App.tsx                # State utama, fungsi salin, dan sistem Toast
│   ├── index.css              # Font Google, warna kustom, & class glassmorphism
│   ├── main.tsx               # Entry point React
│   └── tsconfig.json          # Aturan TypeScript Strict Mode
├── vite.config.ts             # Bundler konfigurasi Vite
├── tailwind.config.ts         # Konfigurasi fallback Tailwind
├── postcss.config.js          # Integrasi PostCSS
├── eslint.config.js           # Penjaga kualitas kode ESLint
├── components.json            # Struktur kompatibilitas shadcn/ui
├── LICENSE                    # Lisensi Lisensi MIT
└── README.md                  # Panduan dokumentasi lengkap ini
```

---

## 🚀 Instalasi Lokal & Menjalankan Proyek

Pastikan Anda telah menginstal **Node.js** (versi 18 ke atas) dan npm di komputer Anda.

### 1. Klon Repositori atau Ekstrak File ZIP
```bash
git clone https://github.com/username/holly-smp.git
cd holly-smp
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Local Dev Server)
Jalankan perintah berikut untuk melihat hasil proyek secara lokal:
```bash
npm run dev
```
Buka browser dan akses [http://localhost:3000](http://localhost:3000).

### 4. Melakukan Kompilasi Produksi (Build for Production)
Untuk menghasilkan kode statis yang optimal dan siap dideploy ke server produksi:
```bash
npm run build
```
Hasil build akan tersimpan di dalam folder `/dist`.

---

## 🛠️ Panduan Kustomisasi & Modifikasi Website

Website ini dirancang menggunakan sistem **Konfigurasi Terpusat**. Anda **DILARANG KERAS** mengedit teks secara manual di dalam komponen file. Cukup edit satu berkas saja untuk melakukan perubahan total!

### Cara Mengubah Data, IP, Kontak, & Tautan Sosial
Buka file `src/config/site.ts` dan edit nilainya:
```typescript
export const siteConfig = {
  name: "Nama Server Anda",
  title: "Judul Tab Browser | Deskripsi Singkat",
  description: "Kalimat deskripsi lengkap server Anda...",
  domain: "domain-anda.com",
  // ...
  server: {
    ip: "ip.server-anda.com",
    port: 25219,
    redeemCode: "KODEBARU123",
    // ...
  },
  links: {
    whatsappGroup: "https://tautan-whatsapp-anda",
    tiktok: "https://tautan-tiktok-anda",
    discord: "https://tautan-discord-anda"
  },
  developer: {
    name: "RAN DEV",
    whatsapp: "0895602592430",
    pitch: "Ingin buat website yang keren dan mudah dipahami seperti ini? Hubungi kami!"
  }
}
```

### Cara Mengganti Logo & Gambar Latar Belakang
Semua gambar diletakkan langsung di dalam folder root `/public/` tanpa perlu melakukan proses static import di dalam komponen:
- **Logo Utama**: Ganti file `/public/logo.png` dengan logo baru Anda (pastikan namanya tetap `logo.png` atau edit tautannya di `site.ts`).
- **Background Cinematic**: Ganti file `/public/hero-bg.webp` dengan gambar pemandangan server Anda.
- **Favicon**: Ganti file `/public/favicon.ico` dengan ikon baru untuk tab browser Anda.

### Cara Mengubah Warna Tema di Tailwind v4
Warna tema Autumn dikonfigurasi menggunakan variabel kustom CSS di dalam `src/index.css`. Buka berkas tersebut dan sesuaikan nilai hexadecimal di dalam blok `@theme`:
```css
@theme {
  --color-autumn-dark: #120c08;      /* Ganti warna background gelap */
  --color-autumn-orange: #f97316;    /* Ganti warna aksen oranye daun */
  --color-autumn-gold: #facc15;      /* Ganti warna aksen kuning logo */
  --color-autumn-green: #22c55e;     /* Ganti warna aksen pulau hijau */
}
```

---

## ☁️ Langkah Mudah Deploy ke Vercel

Pemilik server dapat mempublikasikan website ini secara instan dan gratis ke platform **Vercel**:

1. Pastikan seluruh berkas proyek telah diunggah ke repositori pribadi di **GitHub** Anda.
2. Masuk ke dashboard [Vercel](https://vercel.com) menggunakan akun GitHub Anda.
3. Klik tombol **New Project**, lalu pilih repositori proyek ini.
4. Pada bagian **Framework Preset**, pilih **Vite** (Vercel akan mendeteksinya secara otomatis).
5. Klik **Deploy** dan tunggu proses kompilasi selama kurang lebih 1 menit.
6. Website Anda kini telah aktif dan dapat diakses secara publik menggunakan domain gratis `.vercel.app` atau domain kustom Anda sendiri!

---

## 📜 Lisensi
Proyek ini dilisensikan di bawah lisensi **MIT**. Anda bebas untuk menggunakan, memodifikasi, dan menyebarluaskannya dengan tetap menyertakan atribusi pengembang.

## 👥 Kredit & Kontak Developer
- **Nama Pengembang**: RAN DEV
- **Kontak Resmi (WhatsApp)**: [0895602592430](https://wa.me/0895602592430)
- **Komitmen Atribusi**: *Ingin buat website yang keren dan mudah dipahami seperti ini? Hubungi kami!*
