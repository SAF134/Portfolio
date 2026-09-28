# PRODUCT REQUIREMENT DOCUMENT (PRD)

**Nama Produk:** Personal Developer Portfolio Website  
**Pemilik Portofolio:** Deft Valian Exanova (Fullstack Developer)  
**Versi Dokumen:** 1.0 (MVP Specification)  
**Status:** Approved & Finalized for Implementation  
**Rekomendasi Technical Stack:** Next.js (App Router, Static Site Generation / `output: 'export'`) + Tailwind CSS + Framer Motion + Lucide React + Simple Icons + Vercel (100% Free Tier)

---

## 1. Problem Statement

* **Pihak yang Dirugikan:**
  1. **Talenta / Pemilik Portofolio (Deft Valian):** Kehilangan peluang wawancara kerja dan tawaran proyek freelance karena format resume konvensional (PDF satu halaman atau profil LinkedIn) bersifat statis dan tidak mampu memvisualisasikan kapabilitas teknis *frontend* maupun *fullstack* secara interaktif.
  2. **Recruiter & Engineering Lead:** Mengalami inefisiensi waktu (*high screening friction*) ketika harus memvalidasi kompetensi seorang kandidat jika bukti proyek, cuplikan antarmuka, repositori kode, dan sertifikasi tercecer di berbagai platform tanpa navigasi yang mulus.
* **Akar Masalah:** Tidak adanya sebuah repositori digital terpusat (*single source of truth*) yang cepat diakses, berpenampilan modern, responsif di berbagai perangkat (desktop, tablet, mobile), serta merefleksikan keahlian rekayasa perangkat lunak secara profesional.

---

## 2. Target User & 2 User Persona

### 2.1 Target Pengguna Utama
Recruiter korporat/agensi, Tech Lead / Engineering Manager, serta calon mitra bisnis/klien freelance di Indonesia yang mencari talenta pengembang web handal.

### 2.2 Persona 1: Rian (33 Tahun) – Engineering Manager / Tech Lead
* **Karakteristik:** Mengevaluasi aspek teknis kandidat untuk tim engineering. Waktu peninjauan portofolio sangat singkat (< 90 detik).
* **Pain Points:** 
  * Muak dengan portofolio yang lambat dibuka atau terdistorsi pada resolusi tertentu.
  * Skeptis terhadap daftar keahlian jika tidak disertai konteks implementasi nyata pada proyek.
* **Kebutuhan Utama:** 
  * Melihat preview mockup antarmuka proyek (laptop & mobile) dan susunan *tech stack* yang dipakai.
  * Menemukan tautan Live Demo atau GitHub repository secara langsung (jika tersedia) untuk menilai kualitas arsitektur.

### 2.3 Persona 2: Sarah (27 Tahun) – IT Talent Acquisition / HR Recruiter
* **Karakteristik:** Melakukan *talent sourcing* dan screening awal berdasarkan *job specification*. Sering membuka portofolio dari smartphone saat memeriksa pelamar kerja.
* **Pain Points:** 
  * Layout web berantakan saat dibuka di layar smartphone.
  * Tombol unduh CV sulit dicari atau tautan rusak.
  * Kesulitan menyalin email kontak kandidat secara cepat.
* **Kebutuhan Utama:** 
  * Tombol 1-klik untuk mengunduh berkas CV resmi format PDF.
  * Navigasi mobile yang intuitif di bagian bawah layar.
  * Fitur salin email (*copy to clipboard*) instan untuk segera mengirim undangan wawancara.

---

## 3. Goals & Non-Goals

### 3.1 Goals
1. **Presisi Desain 1:1:** Mengimplementasikan antarmuka dan interaksi yang identik dengan referensi desain screenshot (`Beranda`, `Tentang`, `Keahlian`, `Pengalaman`, `Proyek`, `Sertifikat`, dan `Kontak`).
2. **Kinerja & Kualitas Maksimal:** Meraih skor **Google Lighthouse ≥ 90** untuk kategori *Performance*, *Accessibility*, *Best Practices*, dan *SEO*.
3. **Responsivitas Multi-Device:** Pengalaman navigasi yang mulus di perangkat Mobile (320px–767px), Tablet (768px–1023px), dan Desktop (1024px+). Khusus mobile, menggunakan floating bottom navigation bar.
4. **Biaya Infrastruktur Rp 0:** Menjalankan arsitektur *Static Site Generation* (SSG) murni di Vercel Free Tier tanpa dependensi server berbayar.
5. **Kemudahan Pembaruan Data:** Seluruh data teks, proyek, dan sertifikasi dikelola secara statis melalui file konfigurasi TypeScript/JSON lokal yang rapi di dalam codebase.

### 3.2 Non-Goals
1. **Multi-Bahasa (Bilingual):** Tidak menyediakan mekanisme alih bahasa (fitur toggle ID/EN ditiadakan; seluruh konten menggunakan Bahasa Indonesia).
2. **Database Backend & Headless CMS:** Tidak menyediakan database eksternal atau dashboard admin login (konten diperbarui melalui Git commit).
3. **Mekanisme Form Kontak Backend:** Form inputan (Nama, Email, Pesan) ditiadakan sesuai keputusan klarifikasi, digantikan dengan kontak langsung (`mailto:` dan fitur salin email).
4. **Interaksi Pengguna Dinamis:** Tidak ada modul komentar pengunjung, sistem rating, atau sistem analitik berbayar.

---

## 4. User Stories

| ID | Sebagai | Saya Ingin | Supaya |
|---|---|---|---|
| **US-01** | Pengunjung Web | Menggunakan navigasi melayang (*floating navbar*) yang otomatis berada di atas pada desktop/tablet dan di bawah pada mobile | Dapat berpindah antar-bagian halaman dengan cepat dan ergonomis di perangkat apa pun. |
| **US-02** | Recruiter | Mengunduh CV terbaru berformat PDF dari section "Tentang" dengan 1 kali klik | Dapat menyimpan dan mendiskusikan kualifikasi kandidat dengan tim perekrut internal. |
| **US-03** | Tech Lead | Melihat kartu proyek dalam format carousel interaktif lengkap dengan mockup perangkat dan label teknologi | Dapat menilai kompetensi teknis dan portofolio produk yang pernah dikembangkan kandidat. |
| **US-04** | Tech Lead | Mengakses tautan Demo atau GitHub pada kartu proyek jika proyek tersebut memiliki tautan publik | Dapat memverifikasi kode sumber atau mencoba langsung aplikasi yang telah dibuat. |
| **US-05** | Recruiter | Melihat riwayat pengalaman kerja terstruktur beserta detail tanggung jawab dan teknologi yang dipakai | Dapat mencocokkan rekam jejak kerja kandidat dengan kebutuhan posisi yang sedang dibuka. |
| **US-06** | Recruiter | Melihat galeri sertifikat dan penghargaan resmi dalam susunan grid | Memperoleh validasi pihak ketiga atas keahlian yang tercantum. |
| **US-07** | Calon Klien / Recruiter | Menghubungi kandidat via tautan email langsung atau menyalin alamat email ke clipboard dalam satu kali klik | Dapat mengirimkan penawaran kerja sama tanpa hambatan teknis. |

---

## 5. Daftar Fitur (MVP / v2 / Nanti)

### 5.1 MVP (Fase 1 - Wajib untuk Peluncuran)
* **F-01: Adaptive Floating Navbar:**
  * Desktop & Tablet: Floating navbar di bagian atas tengah layar.
  * Mobile: Floating bottom navbar di bagian bawah layar.
  * Indikator section aktif (*active highlight*) berbasis scroll position.
* **F-02: Hero Section & Profile Card:**
  * Heading perkenalan, nama, role (`Fullstack Developer`), dan ringkasan bio.
  * Ikon tautan sosial media (GitHub, Instagram, LinkedIn).
  * Tombol CTA: `Lihat Proyek` (scroll ke `#proyek`) dan `Hubungi Saya` (scroll ke `#kontak`).
  * Kartu profil 3D glow: Foto Deft Valian, badge glassmorphism `@dftvln Online` dengan status indicator hijau, dan tombol `Contact Me`.
  * Efek visual subtle floating particle/confetti dots pada latar belakang.
* **F-03: Section Tentang & Unduh CV:**
  * Foto profil dengan aksen visual kuning sesuai referensi.
  * Narasi profil profesional.
  * Tombol `Unduh CV` yang memicu pengunduhan berkas PDF lokal.
* **F-04: Section Keahlian Teknis (Skills Grid):**
  * Grid pill badges teknologi dengan ikon brand resmi dan label nama (Laravel, ReactJS, Tailwind CSS, PostgreSQL, Next.js, MySQL, TypeScript, Figma, Git, PHP, dll.).
* **F-05: Section Pengalaman Kerja:**
  * Kartu pengalaman terstruktur: Ikon institusi, Role, Nama Perusahaan, Periode Waktu, Lokasi, Poin-poin pencapaian, dan Badge "TEKNOLOGI YANG DIGUNAKAN".
* **F-06: Section Proyek Terbaik (Karya Terbaik Carousel):**
  * Carousel/slider horizontal dengan tombol navigasi *Previous* & *Next*.
  * Mendukung gestur sentuh *swipe* pada layar smartphone/tablet.
  * Kartu proyek menampilkan gambar mockup laptop & smartphone, judul proyek, ringkasan deskripsi, tag teknologi, serta tombol Live Demo / GitHub (jika tersedia).
* **F-07: Section Sertifikat & Penghargaan:**
  * Grid responsif menampilkan thumbnail sertifikat (freeCodeCamp, MySkill, CodePolitan, Dicoding, VSGA, dll.).
* **F-08: Section Kontak Langsung (Direct Contact):**
  * Menggantikan form input dengan kartu kontak langsung:
    * Informasi Email: `deftvalian2411@gmail.com`
    * Informasi Lokasi: `Bekasi, Indonesia`
    * Tombol Aksi: `Kirim Email` (membuka `mailto:`) dan `Salin Email` (menyalin alamat ke clipboard dengan notifikasi toast konfirmasi).

### 5.2 Versi 2 (Peningkatan)
* **F-09: Modal Lightbox:** Pratinjau gambar sertifikat dan mockup proyek dalam resolusi penuh saat diklik.
* **F-10: Filter Kategori Proyek:** Tab filter proyek (*All*, *Fullstack*, *Frontend*, *Backend*).
* **F-11: Dark Mode Toggle:** Opsi pergantian tema gelap/terang.

### 5.3 Nanti (Future Backlog)
* **F-12: Technical Blog Section:** Halaman artikel berbasis Markdown/MDX.
* **F-13: Realtime Status Integration:** Menampilkan aktivitas commit GitHub atau lagu yang sedang didengar di Spotify via API publik.

---

## 6. Functional Requirements Detail per Fitur MVP

### 6.1 Adaptive Floating Navbar
* **FR-01.1:** Komponen mendeteksi ukuran layar. Pada layar `< 768px`, navbar otomatis bertransformasi menjadi bottom navigation bar dengan *safe-area inset* untuk perangkat iOS/Android.
* **FR-01.2:** Menu navigasi memuat 5 item: `Beranda`, `Tentang`, `Pengalaman`, `Proyek`, dan `Kontak`. (Toggle bahasa ditiadakan).
* **FR-01.3:** Setiap item navigasi memiliki anchor link halus (*smooth scroll*) ke ID elemen tujuan.
* **FR-01.4:** Indikator visual aktif (*pill highlight*) berpindah secara dinamis menggunakan *IntersectionObserver* saat pengguna menggulir halaman.

### 6.2 Hero & Profile Card
* **FR-02.1:** Menampilkan judul "HALO, SAYA", nama besar "Deft Valian Exanova.", subjudul "Fullstack Developer", serta paragraf deskripsi singkat.
* **FR-02.2:** Ikon sosial media (GitHub, Instagram, LinkedIn) harus memiliki atribut `target="_blank"` dan `rel="noopener noreferrer"`.
* **FR-02.3:** Kartu profil kanan memuat foto dengan rounded corners, neon glow shadow ungu/pink halus, badge `@dftvln Online` dengan status pulse hijau, dan tombol `Contact Me` yang mengarah ke `#kontak`.

### 6.3 Section Tentang & Unduh CV
* **FR-03.1:** Menampilkan layout dua kolom (desktop) atau satu kolom bertumpuk (mobile) dengan foto berlatar kuning dan teks perkenalan.
* **FR-03.2:** Tombol `Unduh CV` harus mengarah ke file statis `/assets/CV_Deft_Valian.pdf` dengan atribut HTML `download`.

### 6.4 Section Keahlian Teknis
* **FR-04.1:** Seluruh item keahlian dirender dari data statis array.
* **FR-04.2:** Menggunakan Simple Icons / SVG resmi untuk memastikan identitas visual brand teknologi presisi dan tajam.

### 6.5 Section Pengalaman Kerja
* **FR-05.1:** Merender kartu pengalaman kerja (contoh data: *PT Advics Manufacturing Indonesia*) secara terstruktur lengkap dengan ikon kalender, tanggal, pin lokasi, daftar pencapaian, dan deretan tag teknologi.

### 6.6 Section Proyek Terbaik (Carousel)
* **FR-06.1:** Carousel mendukung transisi geser horizontal menggunakan Framer Motion atau Swiper/Embla Carousel.
* **FR-06.2:** Tombol panah *Previous* otomatis dinonaktifkan jika berada pada item pertama, dan tombol *Next* dinonaktifkan jika berada pada item terakhir (atau berputar secara loop halus).
* **FR-06.3:** Pada layar sentuh, mendukung gestur *drag/swipe*.
* **FR-06.4:** Render bersyarat (*conditional rendering*) untuk tautan:
  * Jika `liveUrl` tersedia pada data proyek, tampilkan tombol tautan demo.
  * Jika `repoUrl` tersedia, tampilkan tombol tautan repositori GitHub.
  * Jika keduanya tidak tersedia, tombol tautan tidak ditampilkan (hanya menampilkan kartu visual murni).

### 6.7 Section Sertifikat & Penghargaan
* **FR-07.1:** Menampilkan galeri sertifikat dalam tata letak responsif: 3 kolom di desktop, 2 kolom di tablet, dan 1 kolom di mobile.
* **FR-07.2:** Seluruh gambar dioptimalkan menggunakan komponen `next/image` dengan aspek rasio tetap untuk mencegah pergeseran layout (*zero Cumulative Layout Shift*).

### 6.8 Section Kontak Langsung (Direct Contact)
* **FR-08.1:** Menghapus form input teks (Nama, Email, Pesan).
* **FR-08.2:** Menampilkan kartu kontak dengan:
  * Alamat email: `deftvalian2411@gmail.com`.
  * Tombol `Kirim Email`: Memicu protokol `mailto:deftvalian2411@gmail.com`.
  * Tombol `Salin Email`: Menyalin teks email ke *system clipboard* dan menampilkan umpan balik visual (*toast notification*) bertuliskan *"Alamat email berhasil disalin!"* selama 3 detik.
  * Informasi Lokasi: `Bekasi, Indonesia`.

---

## 7. Sketsa Data Model (TypeScript Schema)

Seluruh data portofolio disimpan dalam file lokal `src/data/portfolio.ts`:

```typescript
export interface SocialLink {
  platform: 'github' | 'instagram' | 'linkedin';
  url: string;
  ariaLabel: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  iconKey: string; // nama ikon SVG
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string; // "Aug 2025 – Feb 2026"
  location: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  mockupImage: string; // path ke "/projects/mockup.png"
  technologies: string[];
  liveUrl?: string;    // opsional
  repoUrl?: string;    // opsional
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  image: string;       // path ke "/certificates/cert.png"
  issueDate?: string;
}

export interface PortfolioData {
  profile: {
    fullName: string;
    headlineRole: string;
    heroBio: string;
    aboutParagraphs: string[];
    email: string;
    location: string;
    cvPath: string;
    socials: SocialLink[];
  };
  skills: SkillItem[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  certificates: CertificateItem[];
}
```

---

## 8. Edge Case & Failure State

| Skenario Edge Case | Potensi Masalah | Solusi Mitigasi |
|---|---|---|
| **Akses Berkas CV Hilang / Belum Ada** | Pengunjung mengklik `Unduh CV` namun file PDF belum diletakkan di folder publik. | Validasi URL; tombol otomatis menampilkan pesan tooltip ramah jika berkas belum siap, tanpa me-refresh atau membuat halaman error. |
| **Pengunjung Tanpa Email Client Bawaan** | Tautan `mailto:` tidak merespons di peramban desktop tanpa aplikasi mail default (Outlook/Apple Mail). | Sediakan tombol pendamping `Salin Email` yang selalu berfungsi di level clipboard browser. |
| **Jumlah Proyek Sedikit (≤ 2 item)** | Navigasi carousel menjadi janggal jika kartu tidak cukup untuk digeser. | Tombol navigasi Previous/Next otomatis disembunyikan jika total item muat dalam satu viewport. |
| **Koneksi Jaringan Lambat (3G / Poor Network)** | Gambar mockup proyek dan sertifikat memuat lama (*blank spot*). | Menggunakan placeholder *blur-up* bawaan `next/image` dan konversi seluruh gambar ke format kompresi `.webp`. |
| **Resolusi Layar Terlalu Sempit (< 360px)** | Teks dan padding navbar bawah saling bertumpuk (*horizontal overflow*). | Penerapan *fluid padding* dan pengecilan ukuran ikon otomatis pada breakpoint mini-screen. |

---

## 9. Success Metrics (Kriteria Sukses & Definition of Done)

Proyek ini dianggap **Selesai (Done)** untuk tahap MVP apabila memenuhi seluruh kualifikasi berikut:

1. **Deployment Publik Aktif:** Website berhasil ter-deploy secara live di Vercel dengan domain publik yang dapat diakses tanpa hambatan HTTPS/SSL.
2. **Kinerja Google Lighthouse:**
   * **Performance:** ≥ 90
   * **Accessibility:** ≥ 90
   * **Best Practices:** ≥ 95
   * **SEO:** ≥ 95
3. **Core Web Vitals:**
   * Largest Contentful Paint (LCP) < 2.0 detik.
   * Cumulative Layout Shift (CLS) < 0.05.
   * First Input Delay (FID) / Interaction to Next Paint (INP) < 100ms.
4. **Kelengkapan Konten:** Seluruh konten visual dan narasi (Hero, Tentang, Keahlian, Pengalaman, Proyek, Sertifikat, Kontak) 100% menggunakan data asli milik Deft Valian Exanova tanpa teks placeholder *Lorem Ipsum*.
5. **Fungsi Interaksi Teruji:**
   * Tombol `Salin Email` sukses menyalin dan memunculkan toast.
   * Tombol `Unduh CV` sukses memicu download berkas.
   * Carousel proyek lancar digeser baik dengan tombol panah maupun sentuhan swipe mobile.
   * Bottom bar navigasi mobile berfungsi sempurna tanpa menutupi konten utama.

---

## 10. Status Requirement & Rekomendasi Teknis Lanjutan

* **Status Klarifikasi:**
  * Penghapusan switch bahasa: **Selesai & Disetujui**.
  * Pengelolaan data statis (JSON/TypeScript): **Selesai & Disetujui**.
  * Penggantian form kontak dengan direct action (`mailto:` + copy email): **Selesai & Disetujui**.
  * Tautan opsional proyek (kondisional): **Selesai & Disetujui**.
  * Berkas CV siap dipasangkan saat deploy: **Selesai & Disetujui**.
* **Langkah Teknis Selanjutnya:**
  1. Inisialisasi proyek Next.js (App Router, Tailwind CSS, TypeScript).
  2. Setup pustaka animasi (Framer Motion) dan ikonografi (Lucide React & Simple Icons).
  3. Penyiapan struktur direktori komponen atomik (`Navbar`, `Hero`, `About`, `Skills`, `Experience`, `Projects`, `Certificates`, `Contact`).
  4. Pengisian data konten statis pada `portfolio.ts` dan peletakan aset gambar referensi ke folder `/public`.
  5. Pengujian audit Lighthouse dan deployment live ke Vercel.
