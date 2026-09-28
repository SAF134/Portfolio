# DESIGN BRIEF & SYSTEM ARCHITECTURE
**Produk:** Syauqi Akmal Fadhali – Developer Portfolio Website  
**Role:** Senior Product Designer  
**Status:** Approved for Implementation  
**Filosofi Visual:** *Refined Monochromatic Architecture (Anti-Slop & Editorial Modern)*  
**Dokumen Output:** `DESIGN.md`

---

## 1. Design Principles (3 Aturan Wajib)

UI/UX portofolio ini wajib mematuhi 3 aturan mutlak berikut tanpa kompromi:

1. **Editorial Restraint over Visual Gimmickry (Bentuk Mengikuti Esensi):**
   * *Aturan:* Tidak ada gradien neon pelangi, bayangan ungu/pink murahan, efek kaca buram (*glassmorphism*) tebal yang menurunkan keterbacaan, atau partikel mengambang yang membingungkan.
   * *Implementasi:* Hirarki estetika dibangun melalui kontras tipografi tajam, ketebalan border garis arsitektural (*1px subtle borders*), whitespace yang bernapas lega, serta tata letak asimetris yang diperhitungkan.

2. **Tactile & Low-Latency Feedback (Responsivitas Fisik Mikro):**
   * *Aturan:* Setiap interaksi (hover, klik tombol, geser carousel, salin email) harus memberikan umpan balik mikro (*micro-interactions*) instan (< 150ms) dengan fisika pegas (*spring physics*) yang presisi.
   * *Implementasi:* Menggunakan scale mikro (`scale-[0.98]` saat ditekan) dan perubahan warna border yang tegas, bukan animasi transisi lambat yang membuang waktu recruiter.

3. **Information Density with Zero Cognitive Friction (Penyampaian Nilai Tanpa Hambatan):**
   * *Aturan:* Informasi penting (siapa Deft, apa keahliannya, apa buktinya, bagaimana menghubunginya) harus dapat dipindai (*scannable*) dalam 5 detik pertama.
   * *Implementasi:* Tata letak kartu modular yang mengelompokkan metadata teknologi, peran, dan bukti visual tanpa paragraf dinding teks yang padat.

---

## 2. Visual Direction

### 2.1 Mood & Tone
* **Arsitektural & Teknikal:** Menggambarkan developer yang terorganisir, teliti, dan menguasai rekayasa sistem modern.
* **Minimalis Monokrom Modern:** Terinspirasi dari estetika sistem desain Vercel, Linear, dan tipografi publikasi desain Swiss kontemporer.
* **Percaya Diri & Tenang:** Tidak berisik mencari perhatian dengan warna mencolok, melainkan memikat lewat proporsi grid dan kerapian tipografi.

### 2.2 Apa yang Dihindari (*Anti-Slop Manifest*)
* ❌ **AI-Generated Neon Purples:** Menghindari warna ungu/pink gradien generik yang identik dengan template buatan AI instan.
* ❌ **Bloated Glassmorphism:** Menghindari background blur berlebihan yang membuat teks abu-abu menjadi tidak terbaca (*accessibility failure*).
* ❌ **Kartun 3D Generik:** Menghindari ilustrasi 3D manusia tanah liat (*clay illustrations*) yang kekanak-kanakan dan tidak mencerminkan profesionalitas insinyur perangkat lunak.
* ❌ **Slow Scroll Animations:** Menghindari efek scroll lambat yang menghambat pembaca yang sedang terburu-buru.

---

## 3. Design Tokens

### 3.1 Palet Warna (Skala Monokrom)

Pemilihan warna difokuskan pada spektrum Hitam, Abu-Abu, dan Putih (*True Monochrome with Neutral Grayscale*) untuk menghasilkan kesan maskulin, bersih, dan berwibawa:

| Kategori Token | Hex Code | Nama Token | Rationale & Penggunaan |
|---|---|---|---|
| **Canvas Background** | `#FFFFFF` | `bg-canvas-pure` | Latar belakang dasar halaman untuk kontras tertinggi dan kesan bersih. |
| **Canvas Subtle** | `#F8F8F8` | `bg-canvas-subtle` | Aksen area section alternatif (Tentang & Kontak) agar mata tidak lelah. |
| **Surface Card** | `#FFFFFF` | `surface-card` | Latar belakang kartu komponen dengan border tipis. |
| **Surface Hover** | `#F4F4F5` | `surface-hover` | State saat elemen interaktif di-hover (Zircon Gray). |
| **Surface Inverted** | `#09090B` | `surface-dark` | Hitam arang (*Obsidian Black*) untuk kartu profil aksen & tombol utama. |
| **Border Subtle** | `#E4E4E7` | `border-subtle` | Garis pembatas 1px standar kartu, navbar, dan pill badge (Zinc 200). |
| **Border Strong** | `#71717A` | `border-strong` | Border saat elemen aktif atau dalam state *focus* (Zinc 500). |
| **Text Primary** | `#09090B` | `text-primary` | Warna teks utama (*Pitch Black*), rasio kontras 19:1 terhadap background putih. |
| **Text Secondary** | `#52525B` | `text-secondary` | Warna subjudul, deskripsi, dan metadata penting (Zinc 600). |
| **Text Muted** | `#71717A` | `text-muted` | Label kecil, timestamp, dan placeholder (Zinc 500). |
| **Text Inverted** | `#FFFFFF` | `text-inverted` | Teks di atas background gelap (pada tombol hitam / kartu aksen). |
| **Status Signal** | `#22C55E` | `status-online` | Satu-satunya aksen titik hijau (*Emerald 500*) untuk indikator "Online / Ready to Hire". |

### 3.2 Skala Tipografi
* **Font Display & Body:** **Plus Jakarta Sans**  
  * *Alasan:* Font sans-serif geometris modern dengan bentuk huruf yang tegas, proporsi x-height yang seimbang, dan keterbacaan luar biasa di layar resolusi tinggi maupun rendah. Menghindari font generik seperti Arial atau Roboto.
* **Font Monospace / Metadata:** **Geist Mono** / **JetBrains Mono**  
  * *Alasan:* Digunakan khusus untuk label kode, tag teknologi, tanggal, dan koordinat lokasi. Memberikan DNA teknikalitas yang autentik.

| Tingkat Hirarki | Ukuran (px / rem) | Line Height | Weight | Tracking (Letter Spacing) |
|---|---|---|---|---|
| **Display Hero** | `56px` / `3.5rem` | `1.1` | Bold (`700`) | `-0.03em` (Tight) |
| **Heading 1 (H1)** | `36px` / `2.25rem` | `1.2` | Bold (`700`) | `-0.025em` |
| **Heading 2 (H2)** | `28px` / `1.75rem` | `1.25` | SemiBold (`600`) | `-0.02em` |
| **Heading 3 (H3)** | `20px` / `1.25rem` | `1.35` | SemiBold (`600`) | `-0.015em` |
| **Body Large** | `16px` / `1.0rem` | `1.6` | Regular (`400`) | `0` |
| **Body Base** | `14px` / `0.875rem` | `1.5` | Regular (`400`) / Medium (`500`) | `0` |
| **Tag / Mono Meta** | `12px` / `0.75rem` | `1.4` | Medium (`500`) | `+0.02em` (Slightly loose) |

### 3.3 Skala Spacing (Sistem Grid 4px/8px)
* `space-1`: `4px` (Micro spacing antar ikon & teks)
* `space-2`: `8px` (Internal padding badge/pill)
* `space-3`: `12px` (Internal gap elemen kecil)
* `space-4`: `16px` (Standard padding kartu mobile)
* `space-6`: `24px` (Standard padding kartu desktop)
* `space-8`: `32px` (Gap antar kartu grid)
* `space-12`: `48px` (Margin antar sub-komponen)
* `space-16`: `64px` (Padding vertikal section mobile)
* `space-24`: `96px` (Padding vertikal section desktop)

### 3.4 Skala Radius
* `radius-pill`: `9999px` (Digunakan untuk: Floating Navbar, Skill Pills, Action Buttons).
* `radius-card`: `24px` (Digunakan untuk: Kartu Hero, Kartu Pengalaman, Kartu Kontak).
* `radius-subcard`: `16px` (Digunakan untuk: Container Mockup Proyek, Kartu Sertifikat).
* `radius-tag`: `8px` (Digunakan untuk: Tag teknologi di dalam kartu).

### 3.5 Skala Elevation & Shadow
* **Elevated Floating:** `0 12px 32px -8px rgba(0, 0, 0, 0.08)` (Untuk navbar melayang & toast notification).
* **Card Rest:** `0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)` (Untuk kartu konten diam).
* **Card Hover:** `0 10px 25px -5px rgba(0, 0, 0, 0.06), 0 8px 10px -6px rgba(0, 0, 0, 0.04)` (Transisi halus saat kartu di-hover).
* **Focus Outline:** `0 0 0 2px #FFFFFF, 0 0 0 4px #09090B` (Memenuhi standar aksesibilitas keyboard).

---

## 4. Screen Inventory

Portofolio ini mengusung arsitektur *Single Page Application (SPA)* dengan 7 zona/section fungsional:

1. **Global Navigation (Floating Dock):** Navigasi sticky persisten yang memandu orientasi posisi pengguna.
2. **Hero Section (`#beranda`):** Perkenalan singkat identitas, peran, status ketersediaan kerja, dan akses sosial media.
3. **About Section (`#tentang`):** Narasi latar belakang profesional, value proposition, dan trigger unduh CV.
4. **Skills Section (`#keahlian`):** Inventori kemampuan teknis terverifikasi dalam format pill badges.
5. **Experience Section (`#pengalaman`):** Rekam jejak pengalaman kerja korporat dan pencapaian arsitektur aplikasi.
6. **Projects Section (`#proyek`):** Galeri interaktif berbentuk carousel mockup multi-device beserta teknologi yang digunakan.
7. **Certificates Section (`#sertifikat`):** Grid visual bukti sertifikasi kompetensi rekayasa perangkat lunak.
8. **Contact & Footer Section (`#kontak`):** Pintu komunikasi langsung via email dan penyalinan alamat kontak instan.

---

## 5. User Flows

### 5.1 Flow 1: Recruiter Fast Screening (Durasi < 45 Detik)
```
[Buka Website]
   │
   ▼
[Baca Nama & Role di Hero]
   │
   ▼
[Klik tombol "Tentang" di Navbar / Scroll ke bawah]
   │
   ▼
[Klik tombol "Unduh CV"] ───► [Browser langsung mendownload CV_Deft_Valian.pdf]
   │
   ▼
[Klik tombol "Salin Email" di Footer] ───► [Muncul Toast: "Email berhasil disalin!"]
```

### 5.2 Flow 2: Tech Lead Code & Architecture Evaluation
```
[Buka Website]
   │
   ▼
[Klik "Proyek" di Navbar]
   │
   ▼
[Telusuri Carousel Proyek (Klik tombol Next / Swipe Mobile)]
   │
   ├─► [Proyek memiliki tautan?] ──► Ya ──► [Klik "Live Demo" / "GitHub" (Buka Tab Baru)]
   │                               │
   │                               └──► Tidak ──► [Evaluasi mockup & tech stack tag di kartu]
   ▼
[Scroll ke "Pengalaman Kerja"] ──► [Evaluasi poin teknis: integrasi QR, concurrency, lazy loading]
```

---

## 6. Layout per Screen / Section

### 6.1 Section 1: Hero (`#beranda`)
* **Hierarki Visual:**
  1. *Primary:* Nama besar **Syauqi Akmal Fadhali.** dengan tipografi hitam tebal.
  2. *Secondary:* Kartu profil kanan dengan foto profesional, status online menyala, dan tombol `Contact Me`.
  3. *Tertiary:* Teks deskripsi filosofi kerja dan tombol aksi ganda (`Lihat Proyek` & `Hubungi Saya`).
* **Komponen:**
  * Left Column: Eyebrow label ("HALO, SAYA"), Display Name, Headline Role, Social Links list (GitHub, Instagram, LinkedIn), Action Buttons.
  * Right Column: Floating Profile Card dengan border arsitektural `#E4E4E7`, rounded corners, badge `@dftvln Online` (titik hijau berdenyut), dan tombol hitam solid `Contact Me`.

### 6.2 Section 2: Tentang Saya (`#tentang`)
* **Hierarki Visual:**
  1. *Primary:* Foto portrait Deft Valian dengan aksen latar belakang abu-abu terang minimalis.
  2. *Secondary:* Paragraf perkenalan fokus pada transformasi kebutuhan bisnis menjadi sistem web yang efisien.
  3. *Primary Action:* Tombol hitam solid `Unduh CV` dilengkapi ikon dokumen unduh.

### 6.3 Section 3: Keahlian Teknis (`#keahlian`)
* **Hierarki Visual:**
  1. *Heading:* "Keahlian **Teknis**."
  2. *Komponen Grid:* Pill container fleksibel berisi logo SVG hitam-putih monokrom + teks label rapi (Laravel, ReactJS, Tailwind CSS, PostgreSQL, Next.js, MySQL, TypeScript, Figma, Git, PHP). Hover state memunculkan background `#F4F4F5` dan border `#09090B`.

### 6.4 Section 4: Pengalaman Kerja (`#pengalaman`)
* **Hierarki Visual:**
  1. *Heading:* "Pengalaman **Kerja**."
  2. *Kartu Pengalaman:* Container lebar dengan border `#E4E4E7` dan background putih:
     * Header: Ikon perusahaan, Jabatan ("Fullstack Developer"), Nama Perusahaan ("PT Advics Manufacturing Indonesia"), Rentang Tanggal ("Aug 2025 – Feb 2026"), Pin Lokasi ("Karawang, Indonesia").
     * Content: 4 poin peluru (*bullet points*) pencapaian teknis dalam layout grid 2 kolom.
     * Footer Kartu: Label "TEKNOLOGI YANG DIGUNAKAN" disertai pill badges teknologi.

### 6.5 Section 5: Karya Terbaik / Proyek (`#proyek`)
* **Hierarki Visual:**
  1. *Heading & Deskripsi:* "Karya **Terbaik**." + ringkasan pendek.
  2. *Carousel Controls:* Tombol panah bulat melayang *Previous* (`<`) dan *Next* (`>`) di kanan atas grid.
  3. *Project Slide Card:*
     * Container Mockup: Frame abu-abu berlatar bersih yang menampung mockup responsif laptop dan smartphone.
     * Text Block: Judul proyek tebal, paragraf deskripsi singkat.
     * Metadata: Tag teknologi (HTML, CSS, JS, Laravel, Tailwind CSS, dll.).
     * Action (Kondisional): Tombol teks/ikon link ke Demo atau GitHub jika tersedia.

### 6.6 Section 6: Sertifikat & Penghargaan (`#sertifikat`)
* **Hierarki Visual:**
  1. *Heading:* "Sertifikat & **Penghargaan**."
  2. *Grid Galeri:* Tata letak grid 3 kolom (desktop), 2 kolom (tablet), 1 kolom (mobile).
  3. *Kartu Sertifikat:* Gambar sertifikat dengan border tipis `#E4E4E7`, rasio aspek 4:3 yang presisi, dan efek transisi skala mikro saat kursor diarahkan ke kartu.

### 6.7 Section 7: Hubungi Saya (`#kontak`)
* **Hierarki Visual:**
  1. *Heading & Deskripsi:* "Hubungi **Saya**." + ajakan diskusi kolaborasi.
  2. *Direct Contact Card (Bukan Form Input):* 
     * Sisi Kiri: Informasi email resmi `deftvalian2411@gmail.com` dan kota domisili `Bekasi, Indonesia`.
     * Sisi Kanan / Aksi: Tombol utama hitam solid `Kirim Email Langsung` (membuka `mailto:`) dan tombol sekunder berbingkai `Salin Alamat Email` (memunculkan toast konfirmasi).

---

## 7. Component Library (Spesifikasi Komponen)

### 7.1 Component: `FloatingNavbar`
* **Deskripsi:** Navigasi mengambang berbentuk pill.
* **Varian:**
  * `desktop-top`: Mengambang di bagian atas tengah viewport dengan shadow halus.
  * `mobile-bottom`: Mengambang di bagian bawah viewport dengan lebar fleksibel dan padding sentuh ramah jempol (*thumb-zone*).
* **State:**
  * `Item Default`: Teks `#52525B`, background transparan.
  * `Item Hover`: Teks `#09090B`, background `#F4F4F5`.
  * `Item Active`: Teks `#FFFFFF`, background `#09090B` (animasi transisi layout pill via Framer Motion).

### 7.2 Component: `Button`
* **Varian:**
  * `Primary` (Solid Black): Background `#09090B`, teks `#FFFFFF`, hover background `#27272A`.
  * `Secondary` (Outlined): Background `#FFFFFF`, border `#E4E4E7`, teks `#09090B`, hover background `#F4F4F5` & border `#09090B`.
  * `PillIcon`: Tombol bulat untuk panah carousel, diameter 44px, border `#E4E4E7`.
* **State:** `default`, `hover`, `active` (`scale-[0.98]`), `focus-visible`, `disabled` (`opacity-40 cursor-not-allowed`).

### 7.3 Component: `SkillBadge`
* **Deskripsi:** Pill kecil untuk menampilkan logo dan nama teknologi.
* **Anatomi:** Container pill, icon SVG ukuran 18x18px, label teks ukuran 13px medium.
* **State:** `default` (border `#E4E4E7`), `hover` (border `#09090B`, sedikit terangkat -1px).

### 7.4 Component: `ProjectCard`
* **Deskripsi:** Kartu geser penampil portofolio.
* **Anatomi:**
  * Mockup container (tinggi tetap, background netral `#F8F8F8`, overflow hidden).
  * Content container (judul H3, deskripsi 2 baris terpotong rapi dengan ellipsis jika terlalu panjang, deretan tag teknologi, dan tombol tautan opsional).

### 7.5 Component: `ToastNotification`
* **Deskripsi:** Pesan feedback melayang yang muncul saat alamat email berhasil disalin.
* **Posisi:** Melayang di bawah-tengah layar (desktop) atau atas-tengah layar (mobile).
* **Tampilan:** Pill hitam pekat `#09090B` dengan teks putih `#FFFFFF`, ikon centang hijau kecil, dan durasi tayang otomatis 3 detik.

---

## 8. State Handling (Kondisi Khusus Antarmuka)

| Layar / Komponen | State | Representasi Visual & Perilaku |
|---|---|---|
| **Carousel Proyek** | *Boundaries (Ujung Awal/Akhir)* | Tombol *Previous* dinonaktifkan (`disabled`) saat berada di slide pertama. Tombol *Next* dinonaktifkan saat berada di slide terakhir. |
| **Kartu Proyek** | *No Links (Tautan Kosong)* | Jika `liveUrl` dan `repoUrl` tidak diisi di data statis, baris tombol tautan tidak dirender sama sekali (tidak menampilkan tombol kosong). |
| **Tombol Salin Email** | *Copy Success* | Ikon berganti dari `Copy` menjadi `Check`, teks berubah menjadi *"Tersalin!"*, dan Toast melayang muncul di layar selama 3 detik. |
| **Gambar Proyek & Sertifikat** | *Image Loading* | Menggunakan *Blur-up placeholder* abu-abu terang (`#F4F4F5`) sebelum berkas gambar `.webp` selesai ter-render sepenuhnya. |
| **Tombol Unduh CV** | *Missing File Fallback* | Jika berkas PDF belum dimasukkan ke direktori publik, klik tombol memunculkan toast informatif: *"Berkas CV sedang diperbarui. Silakan hubungi via email langsung."* tanpa membuat aplikasi crash. |

---

## 9. Responsive Behaviour Matrix

| Breakpoint | Viewport Range | Layout & Navigasi | Grid Sertifikat | Perilaku Carousel |
|---|---|---|---|---|
| **Mobile** | `< 768px` | *Bottom Dock Navigation* menempel di bawah layar; Hero menjadi 1 kolom vertikal bertumpuk. | 1 Kolom penuh (lebar 100%). | Gestur sentuh *swipe* jari aktif; tombol panah disembunyikan untuk menghemat ruang. |
| **Tablet** | `768px – 1023px` | *Top Floating Navbar* di atas tengah layar; padding horizontal 32px. | 2 Kolom sejajar. | Tombol navigasi panah muncul di sisi kanan judul section. |
| **Desktop** | `≥ 1024px` | *Top Floating Navbar*; Container dibatasi maksimal `1200px` di tengah (*mx-auto*); Hero 2 kolom berdampingan. | 3 Kolom simetris. | Slide menampilkan 2 kartu per view dengan tombol panah aktif dan preview kartu berikutnya. |

---

## 10. Accessibility (a11y) & Inklusivitas

Sesuai standar **WCAG 2.1 Level AA**:

1. **Rasio Kontras Warna (Color Contrast):**
   * Teks utama `#09090B` di atas latar `#FFFFFF` memiliki rasio kontras **19.1:1** (jauh melampaui standar minimum 4.5:1).
   * Teks sekunder `#52525B` di atas `#FFFFFF` memiliki rasio kontras **7.3:1** (Lolos standar AAA).
2. **Keyboard Focus Management:**
   * Seluruh elemen interaktif (tombol, tautan sosial, item navbar, kartu carousel) memiliki ring fokus yang jelas saat ditekan via tombol `Tab`: `focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2`.
3. **Kebutuhan ARIA:**
   * Ikon sosial media wajib memiliki atribut `aria-label` eksplisit (contoh: `aria-label="Kunjungi profil GitHub Deft Valian"`).
   * Tombol carousel memiliki `aria-label="Slide sebelumnya"` dan `aria-label="Slide berikutnya"`.
   * Indikator status online memiliki `aria-label="Status: Aktif dan siap menerima proyek"`.
4. **Motion Sensitivity:**
   * Seluruh animasi Framer Motion dibungkus dengan query CSS `@media (prefers-reduced-motion: reduce)` agar pengguna dengan gangguan vestibular tidak mengalami disorientasi gerak.
