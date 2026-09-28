# IMPLEMENTATION PLAN & EXECUTION ROADMAP
**Produk:** Deft Valian Exanova – Developer Portfolio Website  
**Tujuan Dokumen:** Panduan langkah demi langkah (*step-by-step technical execution plan*) dari inisialisasi kode hingga rilis live di Vercel.  
**Tech Stack:** Next.js (App Router) + Tailwind CSS + Framer Motion + Lucide React + Simple Icons + Vercel  
**Status:** Ready to Execute  
**File Output:** `IMPLEMENTATION_PLAN.md`

---

## Ringkasan Alur Eksekusi (Execution Pipeline)

```
[Fase 1: Setup & Tooling] ──► [Fase 2: Data & Asset Prep] ──► [Fase 3: Core Reusable UI]
                                                                      │
[Fase 6: Audit & Deploy]  ◄── [Fase 5: Responsive & A11y] ◄── [Fase 4: Page Assembly]
```

---

## Fase 1: Project Initialization & Tooling Setup
Tujuan: Membangun fondasi proyek Next.js yang bersih, bebas bloatware, dan terkonfigurasi dengan design tokens yang telah disepakati.

- [x] **1.1 Inisialisasi Next.js:**
  * Jalankan `npx create-next-app@latest .` dengan opsi:
    * TypeScript: `Yes`
    * ESLint: `Yes`
    * Tailwind CSS: `Yes`
    * `src/` directory: `Yes`
    * App Router: `Yes`
    * Import alias: `@/*`
- [x] **1.2 Instalasi Dependensi Inti:**
  * `npm install framer-motion lucide-react simple-icons clsx tailwind-merge`
- [x] **1.3 Konfigurasi Font & Tipografi (`layout.tsx`):**
  * Import `Plus Jakarta Sans` untuk display/headings dan `Geist Mono` untuk label teknis via `next/font/google`.
  * Konfigurasikan CSS variables: `--font-sans` dan `--font-mono`.
- [x] **1.4 Konfigurasi Tailwind Tokens (`globals.css`):**
  * Daftarkan palet monokrom:
    * `canvas`: `#FFFFFF` (pure) & `#F8F8F8` (subtle)
    * `surface`: `#FFFFFF` (card), `#F4F4F5` (hover), `#09090B` (dark)
    * `border`: `#E4E4E7` (subtle), `#71717A` (strong)
    * `ink`: `#09090B` (primary), `#52525B` (secondary), `#71717A` (muted)
    * `signal`: `#22C55E` (online green)
  * Set border-radius skala: `pill (9999px)`, `card (24px)`, `subcard (16px)`, `tag (8px)`.
- [x] **1.5 Verifikasi Build Awal:**
  * Jalankan `npm run dev` / `npm run build` dan pastikan peramban merender halaman lokal tanpa peringatan.

---

## Fase 2: Asset Management & Data Source Setup
Tujuan: Menyiapkan seluruh aset gambar dan file data statis TypeScript dari `DATA.md` agar komponen siap pakai tanpa *hardcoded strings*.

- [x] **2.1 Strukturisasi Direktori Aset (`/public`):**
  * Buat folder:
    * `/public/images/profile/` (untuk foto hero dan portrait Deft Valian)
    * `/public/images/projects/` (untuk mockup responsif proyek absensi, koper grosir, dll.)
    * `/public/images/certificates/` (untuk tangkapan layar 6 sertifikat resmi)
    * `/public/assets/` (lokasi penempatan `CV_Deft_Valian.pdf`)
- [x] **2.2 Pembuatan File Data Statis (`src/data/portfolioData.ts`):**
  * Definisikan interface TypeScript: `ProfileData`, `SkillItem`, `ExperienceItem`, `ProjectItem`, `CertificateItem`.
  * Masukkan seluruh data resmi yang telah diekstrak di `DATA.md`.
- [x] **2.3 Helper Utilities (`src/lib/utils.ts`):**
  * Buat helper `cn()` menggunakan `clsx` dan `tailwind-merge` untuk penggabungan class Tailwind yang dinamis dan bersih.

---

## Fase 3: Core Reusable UI Component Engineering
Tujuan: Membangun komponen UI modular yang mematuhi prinsip *Anti-Slop*, memiliki interaksi taktil, dan lolos aksesibilitas.

- [x] **3.1 Komponen Navigasi (`src/components/navigation/FloatingNavbar.tsx`):**
  * Mode Desktop/Tablet: Mengambang di atas tengah layar (`fixed top-6 left-1/2 -translate-x-1/2 z-50`).
  * Mode Mobile: Mengambang di bawah layar (`fixed bottom-4 inset-x-4 z-50 md:hidden`).
  * Integrasikan *Intersection Observer* untuk otomatis mendeteksi section yang sedang dilihat dan menggeser pill highlight aktif.
  * Tambahkan tombol smooth scroll ke ID target (`#beranda`, `#tentang`, dll.).
- [x] **3.2 Komponen Tombol & Feedback (`src/components/ui/`):**
  * `Button.tsx`: Varian solid black (`#09090B`), outlined border (`#E4E4E7`), dan micro-spring animation saat klik (`scale-[0.98]`).
  * `Toast.tsx`: Floating pill toast feedback dengan `AnimatePresence` untuk konfirmasi salin email.
  * `CopyButton.tsx`: Tombol salin email ke clipboard dengan transisi ikon dari `Copy` ke `Check`.
- [x] **3.3 Komponen Kartu Konten (`src/components/cards/`):**
  * `SkillBadge.tsx`: Pill badge monokrom dengan ikon SVG Simple Icons dan teks nama teknologi.
  * `ExperienceCard.tsx`: Kartu terstruktur memuat role, nama perusahaan, tanggal, lokasi, poin pencapaian, dan deretan tag teknologi.
  * `ProjectCard.tsx`: Kartu proyek dengan container mockup, judul, deskripsi, tag teknologi, serta tombol kondisional (*Live Demo* & *GitHub*).
  * `CertificateCard.tsx`: Kartu sertifikat dengan frame ber-border tipis, rasio 4:3, dan efek hover mikro.

---

## Fase 4: Page Assembly & Sections Integration
Tujuan: Merangkai seluruh komponen menjadi satu halaman *Single Page Application* yang utuh dan selaras dengan referensi desain.

- [x] **4.1 Section Hero (`src/components/sections/HeroSection.tsx`):**
  * Teks headline "HALO, SAYA", nama besar "Deft Valian Exanova.", role "Fullstack Developer", dan paragraf bio.
  * Ikon sosial media (GitHub, Instagram, LinkedIn) dengan `rel="noopener noreferrer"`.
  * Tombol CTA: `Lihat Proyek` dan `Hubungi Saya`.
  * Floating Profile Card: Foto berbingkai rounded, badge status `@dftvln Online` dengan titik hijau berdenyut (*pulse*), dan tombol `Contact Me`.
  * Ambient background: Efek partikel halus statis/subtle sesuai referensi desain.
- [x] **4.2 Section Tentang Saya (`src/components/sections/AboutSection.tsx`):**
  * Foto portrait Deft Valian dengan aksen bingkai latar belakang bersih.
  * Dua paragraf profil profesional mengenai fokus *full-stack web solution*.
  * Tombol unduh resmi `Unduh CV` yang mengarah ke `/assets/CV_Deft_Valian.pdf`.
- [x] **4.3 Section Keahlian Teknis (`src/components/sections/SkillsSection.tsx`):**
  * Heading "Keahlian **Teknis**."
  * Grid responsif yang meloop seluruh daftar keahlian dari `portfolioData.ts`.
- [x] **4.4 Section Pengalaman Kerja (`src/components/sections/ExperienceSection.tsx`):**
  * Heading "Pengalaman **Kerja**."
  * Menampilkan kartu pengalaman lengkap *PT Advics Manufacturing Indonesia*.
- [x] **4.5 Section Proyek Terbaik (`src/components/sections/ProjectsSection.tsx`):**
  * Heading "Karya **Terbaik**." + subjudul deskriptif.
  * Implementasi slider/carousel horizontal:
    * Tombol panah *Previous* & *Next* di kanan atas.
    * Dukungan gestur sentuh *swipe drag* di perangkat mobile/tablet.
    * Rendering kondisional: Tombol *Live Demo* / *GitHub* hanya muncul jika URL tidak kosong.
- [x] **4.6 Section Sertifikat & Penghargaan (`src/components/sections/CertificatesSection.tsx`):**
  * Heading "Sertifikat & **Penghargaan**."
  * Grid responsif 3 kolom (desktop), 2 kolom (tablet), 1 kolom (mobile) menampilkan 6 sertifikat.
- [x] **4.7 Section Kontak & Footer (`src/components/sections/ContactSection.tsx`):**
  * Heading "Hubungi **Saya**." + deskripsi ajakan kolaborasi.
  * Kartu kontak langsung: Tampilan email `deftvalian2411@gmail.com`, domisili `Bekasi, Indonesia`.
  * Tombol `Kirim Email Langsung` (`mailto:`) dan tombol `Salin Email` (terhubung ke Toast).
  * Footer teks copyright: `© 2026 Deft Valian Exanova.`

---

## Fase 5: Responsive Polish & Accessibility (a11y)
Tujuan: Menjamin kenyamanan penggunaan di semua ukuran layar dan memenuhi standar kepatuhan web internasional.

- [x] **5.1 Audit Responsivitas Antarmuka:**
  * Pengujian viewport Mobile (360px – 414px): Pastikan bottom navbar tidak menutupi tombol kontak atau elemen paling bawah (*safe area padding* `pb-28`).
  * Pengujian Tablet (768px – 1023px): Pastikan grid sertifikat rapi 2 kolom dan carousel bekerja lancar.
  * Pengujian Desktop (1024px – 1440px): Pastikan container utama rapi terpusat (`max-w-6xl mx-auto`).
- [x] **5.2 Audit Aksesibilitas (WCAG AA):**
  * Periksa focus ring pada semua tombol dan link (`focus-visible:ring-2 focus-visible:ring-zinc-900`).
  * Pastikan seluruh tombol ikon memiliki `aria-label` eksplisit.
  * Konfigurasi `@media (prefers-reduced-motion: reduce)` agar animasi tidak mengganggu pengguna yang sensitif gerak.

---

## Fase 6: Quality Assurance, Lighthouse Audit & Deployment
Tujuan: Memvalidasi kriteria selesai (Definition of Done) dan meluncurkan website ke domain publik Vercel secara live.

- [ ] **6.1 Production Build Check:**
  * Jalankan `npm run build` di terminal lokal.
  * Pastikan status kompilasi sukses dengan **0 TypeScript Errors** dan **0 ESLint Warnings**.
- [ ] **6.2 Google Lighthouse Audit (Chrome DevTools):**
  * Target Verifikasi:
    * Performance: **≥ 90**
    * Accessibility: **≥ 90**
    * Best Practices: **≥ 95**
    * SEO: **≥ 95**
- [ ] **6.3 Deployment ke Vercel:**
  * Inisialisasi git repository lokal: `git init`, `git add .`, `git commit -m "feat: complete initial portfolio website"`.
  * Hubungkan repositori ke GitHub dan deploy ke Vercel (Free Tier).
  * Pastikan SSL/HTTPS aktif otomatis dan domain live dapat diakses publik.
- [ ] **6.4 Verifikasi Live Production:**
  * Uji klik unduh CV di URL publik.
  * Uji fungsi salin email dan toast di peramban seluler (smartphone) dan desktop.
  * Uji navigasi bottom bar di perangkat smartphone asli.

---

## Ringkasan Pelacakan Progress

| Fase | Target Utama | Status |
|---|---|---|
| **Fase 1** | Inisialisasi Next.js, Tailwind, Fonts & Tokens | 🟢 Selesai |
| **Fase 2** | Penyiapan Asset & `portfolioData.ts` | 🟢 Selesai |
| **Fase 3** | Pembangunan Reusable UI Components | 🟢 Selesai |
| **Fase 4** | Assembly Halaman Penuh & Integrasi Section | 🟢 Selesai |
| **Fase 5** | Polish Responsif & Aksesibilitas | 🟢 Selesai |
| **Fase 6** | Build Check, Audit Lighthouse & Vercel Deploy | ⚪ Menunggu Mulai |
