# DATA CONTENT REGISTRY (SOURCE OF TRUTH)
**Produk:** Syauqi Akmal Fadhali – Developer Portfolio Website  
**Tujuan Dokumen:** *Single Source of Truth* untuk seluruh teks, data pengalaman, keahlian, proyek, dan sertifikasi yang diekstrak dari referensi screenshot.  
**File Output Codebase:** `src/data/portfolio.ts`  
**Status:** Approved & Ready for Code Implementation

---

## 1. Identitas & Hero Section (`#beranda`)

| Field | Nilai Teks / Konten | Catatan |
|---|---|---|
| **Eyebrow Header** | `HALO, SAYA` | Displayed above name |
| **Nama Lengkap** | `Syauqi Akmal Fadhali.` | Primary Display Heading |
| **Headline Role** | `Fullstack Developer` | Subtitle |
| **Deskripsi Hero** | `Membangun aplikasi web yang fungsional, interaktif, dan berpusat pada pengalaman pengguna.` | Core value proposition |
| **Primary CTA 1** | `Lihat Proyek` | Anchor link to `#proyek` |
| **Primary CTA 2** | `Hubungi Saya` | Anchor link to `#kontak` |
| **Tautan Sosial Media** | | |
| • GitHub | `https://github.com/deftvalian` | *Default handle (dapat disesuaikan)* |
| • Instagram | `https://instagram.com/dftvln` | Reference username: `@dftvln` |
| • LinkedIn | `https://linkedin.com/in/deftvalian` | *Default URL (dapat disesuaikan)* |
| **Hero Card (Floating)** | | |
| • Overlay Name | `Syauqi Akmal Fadhali` | Teks overlay pada foto profil |
| • Overlay Subtitle | `Fullstack Developer` | Teks sub-overlay |
| • Username Handle | `@dftvln` | Glassmorphism badge |
| • Status Availability | `Online` (Indicator Green `#22C55E`) | Aktif / Ready for Work |
| • Quick Action Button | `Contact Me` | Anchor link to `#kontak` |

---

## 2. Tentang Saya (`#tentang`)

| Field | Nilai Teks / Konten |
|---|---|
| **Section Title** | `SAYA DEFT VALIAN` |
| **Section Subtitle** | `FULLSTACK DEVELOPER` |
| **Paragraf 1** | `Sebagai lulusan Sistem Informasi dan Software Engineer, saya berfokus mengubah kebutuhan bisnis yang kompleks menjadi aplikasi web yang efisien.` |
| **Paragraf 2** | `Dari digitalisasi alur kerja operasional hingga perancangan arsitektur frontend, saya menikmati proses membangun solusi full-stack dari nol yang terukur dan memberikan dampak nyata.` |
| **Tombol CTA** | `UNDUH CV` |
| **File Target CV** | `/assets/CV_Deft_Valian.pdf` |

---

## 3. Keahlian Teknis (`#keahlian`)

**Heading Section:** `Keahlian Teknis.`

Daftar teknologi yang teridentifikasi dari referensi (`Keahlian.png`), dikategorikan untuk kerapian arsitektur data:

| Nama Teknologi | Kategori | Brand Icon Ref |
|---|---|---|
| **Laravel** | Backend Framework | `siLaravel` |
| **ReactJS** | Frontend Framework | `siReact` |
| **Tailwind CSS** | Styling Engine | `siTailwindcss` |
| **PostgreSQL** | Relational Database | `siPostgresql` |
| **Next.js** | Fullstack Framework | `siNextdotjs` |
| **Node.js** | Runtime Environment | `siNodedotjs` |
| **MySQL** | Relational Database | `siMysql` |
| **TypeScript** | Programming Language | `siTypescript` |
| **PHP** | Programming Language | `siPhp` |
| **Figma** | UI/UX Design Tool | `siFigma` |
| **Git** | Version Control | `siGit` |
| **JavaScript** | Programming Language | `siJavascript` |

---

## 4. Pengalaman Kerja (`#pengalaman`)

**Heading Section:** `Pengalaman Kerja.`

### Data Pengalaman 1:
* **Jabatan / Role:** `Fullstack Developer`
* **Nama Perusahaan:** `PT Advics Manufacturing Indonesia`
* **Periode Kerja:** `Aug 2025 – Feb 2026`
* **Lokasi:** `Karawang, Indonesia`
* **Poin Pencapaian & Tanggung Jawab:**
  1. `Menggantikan proses manual dengan membangun Sistem NG Scanning (integrasi QR) dan otomatisasi pipeline dokumen Scrap Evidence.`
  2. `Membangun aplikasi inti yang scalable (Sistem Warehouse, Manajemen Aset IT, dan Help Desk) menggunakan ekosistem Laravel dan ReactJS.`
  3. `Mengelola ribuan data secara konkuren dengan kecepatan tinggi menggunakan teknik seperti lazy loading pada lingkungan sistem yang berat.`
  4. `Merombak antarmuka lama menggunakan Tailwind CSS, menciptakan aplikasi yang responsif dan intuitif bagi eksekutif kantor maupun staf lapangan.`
* **Teknologi yang Digunakan:**
  * `Laravel`
  * `ReactJS`
  * `Tailwind CSS`
  * `MySQL`
  * `PostgreSQL`

---

## 5. Karya Terbaik / Proyek (`#proyek`)

**Heading Section:** `Karya Terbaik.`  
**Deskripsi Section:** `Kumpulan proyek yang telah saya bangun, mulai dari desain antarmuka hingga sistem backend yang kompleks.`

### Proyek 1: Portal Web Absensi Mata Kuliah
* **Judul:** `Portal Web Absensi Mata Kuliah`
* **Deskripsi Singkat:** `Platform portal absensi terpusat dengan konsep direktori menyerupai Linktree untuk memudahkan mahasiswa dan dosen mengakses presensi perkuliahan lintas mata kuliah secara efisien.`
* **Teknologi:** `HTML`, `CSS`, `JavaScript`
* **Aset Gambar Mockup:** `/projects/mockup-absensi.png` (Tampilan Laptop & Smartphone)
* **Live Demo URL:** `""` *(Opsional / jika ada akan muncul tombol otomatis)*
* **Repository URL:** `""` *(Opsional / jika ada akan muncul tombol otomatis)*

### Proyek 2: KoperGrosir – Landing Page & CMS
* **Judul:** `KoperGrosir – Landing Page & CMS Admin`
* **Deskripsi Singkat:** `Sebuah situs web landing page profesional yang dilengkapi dengan panel admin (CMS) terintegrasi untuk pengelolaan katalog produk koper grosir, paket bundling, dan pemesanan cepat.`
* **Teknologi:** `Laravel`, `Tailwind CSS`, `MySQL`, `PHP`
* **Aset Gambar Mockup:** `/projects/mockup-kopergrosir.png` (Tampilan Laptop & Smartphone)
* **Live Demo URL:** `""` *(Opsional)*
* **Repository URL:** `""` *(Opsional)*

### Proyek 3: Platform Informasi & Portofolio Web
* **Judul:** `Platform Web Profil & Manajemen Dokumen`
* **Deskripsi Singkat:** `Sistem web terpadu untuk pencatatan dan distribusi berkas digital secara aman dan responsif di berbagai perangkat.`
* **Teknologi:** `Laravel`, `Bootstrap / Tailwind CSS`, `MySQL`
* **Aset Gambar Mockup:** `/projects/mockup-platform.png`
* **Live Demo URL:** `""` *(Opsional)*
* **Repository URL:** `""` *(Opsional)*

---

## 6. Sertifikat & Penghargaan (`#sertifikat`)

**Heading Section:** `Sertifikat & Penghargaan.`

| No | Judul Sertifikat | Penerbit / Lembaga | Tanggal Terbit | Aset Gambar |
|---|---|---|---|---|
| **1** | `Responsive Web Design (300 Hours Coursework)` | **freeCodeCamp** | 5 Maret 2023 | `/certificates/freecodecamp.png` |
| **2** | `UI-UX Research & Design: Fullstack Intensive Bootcamp (Batch 6)` | **MySkill** | 4 April 2023 | `/certificates/myskill-uiux.png` |
| **3** | `Belajar Bootstrap CSS Framework` | **CODEPOLITAN** | 6 Maret 2024 | `/certificates/codepolitan-bootstrap.png` |
| **4** | `Skill Specialization: Frontend - React` | **MySkill** | 5 Februari 2024 | `/certificates/myskill-react.png` |
| **5** | `Junior Web Developer (Pelatihan & Sertifikasi VSGA)` | **Digitalent Kominfo (VSGA)** | 29 Agustus 2023 | `/certificates/digitalent-vsga.png` |
| **6** | `Belajar Membuat Front-End Web untuk Pemula` | **Dicoding Indonesia** | 6 April 2024 | `/certificates/dicoding-frontend.png` |

---

## 7. Kontak & Footer (`#kontak`)

**Heading Section:** `Hubungi Saya.`  
**Deskripsi Section:** `Punya ide proyek, pertanyaan, atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk peluang kolaborasi baru.`

| Field | Nilai / Aksi |
|---|---|
| **Alamat Email Resmi** | `deftvalian2411@gmail.com` |
| **Lokasi Domisili** | `Bekasi, Indonesia` |
| **Primary Action** | Tombol `Kirim Email Langsung` (`mailto:deftvalian2411@gmail.com`) |
| **Secondary Action** | Tombol `Salin Email` (Salin ke clipboard + Toast: *"Alamat email berhasil disalin!"*) |
| **Footer Copy** | `© 2026 Syauqi Akmal Fadhali` |

---

## 8. TypeScript Ready Structure (`portfolioData.ts`)

File ini akan langsung dikonversi menjadi file TypeScript saat implementasi:

```typescript
export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'instagram' | 'linkedin';
}

export interface SkillItem {
  name: string;
  iconKey: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  mockupImage: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}
```
