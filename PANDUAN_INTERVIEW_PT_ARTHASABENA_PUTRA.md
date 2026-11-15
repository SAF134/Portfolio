# PANDUAN LENGKAP & STRATEGI INTERVIEW PROGRAMMER (MAGANGHUB)
## PT Arthasabena Putra – Posisi Programmer (Web Developer)

> **Catatan Persiapan untuk:** Syauqi Akmal Fadhali, S.T.  
> **Format Wawancara:** Daring (Online) – HRD & User Interview  
> **Lokasi Penempatan:** Kota Bogor (6 hari/minggu, durasi 6 bulan)

---

## DAFTAR ISI
1. [Ringkasan Profil Diri & Elevator Pitch](#1-ringkasan-profil-diri--elevator-pitch)
2. [Analisis Lowongan & Pemetaan Kurikulum 6 Bulan](#2-analisis-lowongan--pemetaan-kurikulum-6-bulan)
3. [Bedah Teknis Proyek Portofolio (Metode STAR)](#3-bedah-teknis-proyek-portofolio-metode-star)
   - [Proyek 1: SunVolt (Mobile & IoT)](#proyek-1-sunvolt)
   - [Proyek 2: Website Koperasi Produsen Dirga Pangan Mandiri (Next.js & TypeScript)](#proyek-2-website-koperasi-produsen-dirga-pangan-mandiri)
   - [Proyek 3: PetaSare (Geospatial Web GIS)](#proyek-3-petasare)
   - [Proyek 4: Nguliah (Mobile Productivity & Academic App)](#proyek-4-nguliah)
   - [Proyek 5: Timerin (Mobile Overlay & Game Companion)](#proyek-5-timerin)
   - [Proyek 6: MyFish (IoT & Automated Feeding Control)](#proyek-6-myfish)
   - [Proyek 7: Klikin (Android Accessibility Service & Automation)](#proyek-7-klikin)
   - [Proyek 8: PetaBuitenzorg (Mobile GIS Kota Bogor)](#proyek-8-petabuitenzorg)
   - [Proyek 9: Website Portofolio Pribadi (Next.js 16, Turbopack, Framer Motion)](#proyek-9-website-portofolio-pribadi)
4. [Bank Soal & Strategi Jawaban: User Interview (Teknis)](#4-bank-soal--strategi-jawaban-user-interview-teknis)
5. [Bank Soal & Strategi Jawaban: HRD Interview (Behavioral)](#5-bank-soal--strategi-jawaban-hrd-interview-behavioral)
6. [Pertanyaan Balik Berbobot untuk Pewawancara](#6-pertanyaan-balik-berbobot-untuk-pewawancara)
7. [Checklist Teknis Menjelang Wawancara Daring](#7-checklist-teknis-menjelang-wawancara-daring)

---

## 1. RINGKASAN PROFIL DIRI & ELEVATOR PITCH

### A. Template Perkenalan Diri (1.5 - 2 Menit) – Sangat Natural & Profesional

> *"Selamat pagi/siang Bapak/Ibu penguji,*
> 
> *Perkenalkan, saya **Syauqi Akmal Fadhali**, lulusan S1 Teknik Komputer dari Universitas Telkom Bandung dengan minat mendalam pada **Software Engineering, khususnya Web dan Mobile Development**.*
> 
> *Selama perkuliahan dan proyek profesional lepas, saya telah membangun berbagai solusi digital end-to-end. Beberapa di antaranya meliputi:*
> 1. *Website profil resmi **Koperasi Produsen Dirga Pangan Mandiri** menggunakan **Next.js, TypeScript, dan Tailwind CSS** yang sudah live.*
> 2. *Platform Web GIS interaktif **PetaSare** untuk pemetaan akomodasi di Bandung menggunakan **Leaflet Map dan Next.js**.*
> 3. *Aplikasi mobile IoT **SunVolt** bersama laboratorium riset kampus (EvConn) untuk monitoring efisiensi pengisian kendaraan listrik ringan secara real-time.*
> 
> *Selain aspek teknis kode, saya memiliki pengalaman kerja praktik di **PT Telkom Indonesia Witel Bogor**, di mana saya terbiasa berkoordinasi lintas tim, memantau sistem layanan enterprise, serta mematuhi alur dokumentasi kerja yang disiplin.*
> 
> *Sebagai warga asli **Kota Bogor**, saya sangat antusias melamar posisi **Programmer Intern di PT Arthasabena Putra** melalui program Maganghub ini. Saya siap berkontribusi penuh dengan kemampuan frontend, logika pemrograman, dan penguasaan Git yang saya miliki, sekaligus siap menyerap kurikulum full-stack yang disediakan perusahaan selama 6 bulan ke depan."*

---

## 2. ANALISIS LOWONGAN & PEMETAAN KURIKULUM 6 BULAN

PT Arthasabena Putra mencari kandidat yang siap dilatih menjadi **Full-Stack Web Developer profesional**. Anda berada pada posisi yang sangat diuntungkan karena portofolio Anda sudah mencakup sebagian besar materi yang akan dipelajari:

| Periode Magang | Materi Kurikulum PT Arthasabena Putra | Relevansi & Modal Kuat Syauqi | Bukti Proyek / Pengalaman Anda |
|---|---|---|---|
| **Bulan ke-1** | **Fondasi & Workflow:** Git/GitHub (Git Flow, PR, Code Review), ES6+, HTML5, CSS3 responsive | Anda sudah terbiasa dengan Git command line, branching, pull request, TypeScript/ES6+, dan responsive CSS. | Kode sumber Portofolio, PetaSare, dan Koperasi di GitHub. |
| **Bulan ke-2** | **Frontend Development:** Framework modern (React, Next.js), State Management, Integrasi API (Fetch/Axios) | Anda sudah mahir menggunakan Next.js (App Router, Server/Client Component), React Hooks, Tailwind CSS, dan integrasi API data. | Website Koperasi, PetaSare, dan Website Portofolio (React 19 & Next.js 16). |
| **Bulan ke-3** | **Backend Development:** RESTful API (Node.js/Python), Database relasional/NoSQL, Auth (JWT/bcrypt) | Latar belakang S1 Teknik Komputer membuat Anda memahami database logic, Node.js backend, dan Firebase NoSQL/Auth. | Firebase Auth & Realtime Database pada SunVolt, MyFish, dan Timerin. |
| **Bulan ke-4** | **Proyek Akhir:** Metodologi Agile/Scrum untuk aplikasi full-stack utuh dari nol | Anda berpengalaman merancang aplikasi dari tahap ideasi, UI Figma, slicing frontend, hingga integrasi database. | Pembuatan SunVolt di Lab EvConn dan Website Koperasi Mandiri. |
| **Bulan ke-5 & 6** | **Deployment & Presentasi:** Rilis ke hosting (Vercel, Render, Railway), Demo Day | Anda sudah mahir melakukan deployment otomatis berbasis Git CI/CD ke Vercel. | Domain aktif: `koperasi-produsen-dirga-pangan-mand.vercel.app`, `peta-sare.vercel.app`, `timerin.vercel.app`. |

### Nilai Tambah Khusus (Unfair Advantage Anda):
1. **Domisili Lokal (Kota Bogor):** Perusahaan mensyaratkan kerja 6 hari/minggu di Bogor. Anda bertempat tinggal di Bogor, sehingga tidak memiliki kendala transportasi, tempat tinggal, maupun kelelahan perjalanan luar kota.
2. **Kombinasi Software + Hardware (Teknik Komputer):** Anda tidak hanya paham web biasa, tapi paham logika sistem, jaringan, hingga interaksi data real-time.

---

## 3. BEDAH TEKNIS PROYEK PORTOFOLIO (METODE STAR)

User Interview umumnya akan menguji pemahaman mendalam Anda mengenai proyek-proyek yang pernah Anda kerjakan. Gunakan format **STAR** (*Situation, Task, Action, Result*).

---

### Proyek 1: SunVolt
- **Jenis:** Mobile Application & IoT Monitoring System
- **Tech Stack:** Flutter, Firebase Realtime Database, Google Stitch, Leaflet Map
- **Link Bukti:** Google Drive Folder / EvConn Lab

#### Bedah STAR:
- **Situation (Masalah):** Pada proyek riset laboratorium EvConn Telkom University, pengisian daya kendaraan listrik bertenaga surya membutuhkan pemantauan parameter listrik (tegangan, arus, daya, dan efisiensi) secara jarak jauh tanpa harus berada di dekat stasiun pengisian fisik.
- **Task (Peran Anda):** Sebagai *Mobile Developer*, merancang arsitektur aplikasi mobile, mendesain antarmuka dashboard monitoring yang mudah dipahami, serta mengintegrasikan data telemetry real-time dari sensor IoT.
- **Action (Solusi Teknis Anda):**
  - Menggunakan **Flutter** untuk rendering visual multiplatform yang cepat dan responsif.
  - Mengintegrasikan **Firebase Realtime Database** untuk menerima aliran data sensor secara instan (low-latency updates) menggunakan WebSocket/Stream listener.
  - Merancang visualisasi grafik interaktif daya masuk vs waktu dan persentase kapasitas baterai.
  - Menambahkan **Leaflet Map** untuk memetakan titik koordinat stasiun pengisian daya surya.
- **Tantangan & Debugging:**
  - *Tantangan:* Frekuensi pembaruan data sensor yang terlalu cepat dari mikrokontroler sempat menyebabkan rendering UI berulang-ulang (*over-rendering*).
  - *Solusi:* Menerapkan teknik throttling / debouncing pada stream listener di Flutter, sehingga widget UI hanya me-render ulang nilai baru setiap 500ms–1 detik tanpa kehilangan akurasi data.

---

### Proyek 2: Website Koperasi Produsen Dirga Pangan Mandiri
- **Jenis:** Corporate Profile & Digital Presence Website
- **Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS
- **Status:** Production Live (`https://koperasi-produsen-dirga-pangan-mand.vercel.app/`)

#### Bedah STAR:
- **Situation (Masalah):** Koperasi Produsen Dirga Pangan Mandiri (Bogor) membutuhkan platform digital kredibel untuk mempublikasikan legalitas, visi-misi, katalog komoditas pangan, dan informasi keanggotaan agar dapat bermitra secara formal dengan vendor dan pemerintah.
- **Task (Peran Anda):** Merancang dan mengimplementasikan website resmi dari nol hingga live di internet.
- **Action (Solusi Teknis Anda):**
  - Memilih **Next.js** dengan arsitektur **App Router** agar performa SEO maksimal melalui Server-Side Rendering (SSR) dan Static Site Generation (SSG).
  - Menggunakan **TypeScript** untuk memastikan seluruh tipe data konten terdefinisi dengan strict (mencegah error runtime saat build).
  - Menggunakan **Tailwind CSS** untuk utility-first styling yang responsif di seluruh layar ponsel, tablet, dan laptop.
  - Melakukan deployment otomatis menggunakan pipeline CI/CD di platform **Vercel**.
- **Tantangan & Debugging:**
  - *Tantangan:* Optimasi loading gambar produk pertanian beresolusi tinggi agar skor Google Lighthouse tetap tinggi dan tidak berat dibuka di jaringan seluler.
  - *Solusi:* Memanfaatkan komponen `<Image />` bawaan Next.js dengan konversi format modern `.webp`, lazy loading, serta konfigurasi `sizes` dan `quality` optimal.

---

### Proyek 3: PetaSare
- **Jenis:** Web GIS / Interactive Geospatial Mapping Platform
- **Tech Stack:** Next.js, TypeScript, Tailwind CSS, Leaflet Map (React-Leaflet)
- **Status:** Production Live (`https://peta-sare.vercel.app/`)

#### Bedah STAR:
- **Situation (Masalah):** Wisatawan sering kesulitan mencari hotel di Kota Bandung dengan visualisasi spasial yang interaktif dan detail fasilitas kamar yang informatif dalam satu tampilan terpadu.
- **Task (Peran Anda):** Membangun web aplikasi berbasis peta interaktif yang dapat memfilter dan menampilkan pop-up informasi hotel secara cepat dan akurat.
- **Action (Solusi Teknis Anda):**
  - Mengintegrasikan library **Leaflet Map** ke dalam Next.js client-side.
  - Mengelola data titik koordinat hotel menggunakan struktur GeoJSON/Array objek dinamis.
  - Membuat custom pin/marker peta dengan tooltip dan pop-up modal detail yang menampilkan harga, fasilitas, dan foto kamar.
- **Tantangan & Debugging:**
  - *Tantangan:* Leaflet membutuhkan objek browser `window` yang tidak tersedia pada saat Next.js melakukan Server-Side Rendering (menimbulkan error *"window is not defined"*).
  - *Solusi:* Menggunakan **Dynamic Import** dengan opsi SSR dinonaktifkan (`next/dynamic` dengan `{ ssr: false }`) untuk komponen peta, sehingga peta hanya diinisialisasi ketika sudah berada di lingkungan browser client.

---

### Proyek 4: Nguliah
- **Jenis:** Mobile Academic & Productivity Management App
- **Tech Stack:** Flutter, Google Stitch, Local Database / Storage

#### Bedah STAR:
- **Situation (Masalah):** Mahasiswa kerap kesulitan menghitung simulasi perolehan IPK/IPS berdasarkan bobot SKS, serta sering melewatkan jadwal kuliah mingguan dan tenggat pengumpulan tugas.
- **Task (Peran Anda):** Membangun aplikasi utilitas mobile yang cepat, ringan, dan dapat digunakan secara offline tanpa perlu koneksi internet konstan.
- **Action (Solusi Teknis Anda):**
  - Membuat algoritma kalkulasi IPK/IPS otomatis berbasis rumus konversi nilai (A=4, AB=3.5, B=3, dst.) dikalikan bobot SKS dibagi total SKS.
  - Mendesain modul jadwal kuliah harian dan checklist to-do list tugas dengan indikator prioritas tanggal.
  - Menggunakan local storage untuk persistensi data mahasiswa secara aman dan cepat di ponsel.
- **Tantangan & Debugging:**
  - *Tantangan:* Penanganan edge-case pembagian nol (*division by zero*) ketika mahasiswa baru belum menginput total SKS.
  - *Solusi:* Menambahkan validasi input dan exception handling bertingkat sebelum fungsi kalkulasi dijalankan, serta menampilkan feedback visual informatif pada UI.

---

### Proyek 5: Timerin
- **Jenis:** Android Floating Overlay Utility & Companion App
- **Tech Stack:** Flutter, Android System Alert Window (Overlay Permission), Firebase
- **Status:** Live (`https://timerin.vercel.app/`)

#### Bedah STAR:
- **Situation (Masalah):** Pemain game kompetitif Mobile Legends membutuhkan pencatat waktu mundur (cooldown timer) battle spell lawan (seperti Flicker, Purify, Retribution) yang bisa diakses langsung di atas game tanpa harus berpindah aplikasi.
- **Task (Peran Anda):** Merancang aplikasi floating overlay yang transparan, dapat digeser (*draggable*), dan hemat memori saat game berat sedang berjalan.
- **Action (Solusi Teknis Anda):**
  - Memanfaatkan *System Alert Window permission* di sistem operasi Android untuk menggambar widget timer mengambang di atas layer game.
  - Menyusun UI minimalis dengan ikon tombol cepat untuk mengaktifkan countdown spell musuh secara simultan.
  - Mengoptimalkan konsumsi memori (RAM) agar tidak memicu freeze atau lag pada game utama.
- **Tantangan & Debugging:**
  - *Tantangan:* Kebijakan keamanan Android terbaru (Android 10+) yang sangat ketat terhadap background service dan izin overlay.
  - *Solusi:* Menerapkan alur perizinan eksplisit (*runtime intent permission*) dengan petunjuk panduan ke pengaturan Android pengguna, serta mengelola lifecycle service agar otomatis berhenti ketika pengguna menutup sesi.

---

### Proyek 6: MyFish
- **Jenis:** IoT Smart Agriculture & Automated Feeding System
- **Tech Stack:** Flutter, Firebase Realtime Database, ESP32, Motor Servo, C++ (Arduino IDE)

#### Bedah STAR:
- **Situation (Masalah):** Pemelihara ikan sering menghadapi kendala keterlambatan pemberian pakan saat bepergian, yang berdampak pada kesehatan dan tingkat kelangsungan hidup ikan.
- **Task (Peran Anda):** Membangun sistem pakan otomatis yang mengombinasikan hardware aktuator fisik dan software kontrol mobile.
- **Action (Solusi Teknis Anda):**
  - Memprogram mikrokontroler **ESP32** menggunakan C++/Arduino IDE untuk mengendalikan **Motor Servo** pembuka katup pakan.
  - Menghubungkan ESP32 ke **Firebase Realtime Database** via Wi-Fi.
  - Membuat aplikasi mobile **Flutter** dengan 2 mode: Penjadwalan pakan otomatis (timer-based) dan tombol pakan instan (manual trigger).
- **Tantangan & Debugging:**
  - *Tantangan:* Sinkronisasi status internet ketika modul ESP32 sempat offline atau kehilangan sinyal Wi-Fi.
  - *Solusi:* Menerapkan mekanisme *auto-reconnect* pada loop program ESP32 dan memanfaatkan listener konektivitas Firebase untuk menampilkan indikator status hardware (Online/Offline) di aplikasi Flutter pengguna.

---

### Proyek 7: Klikin
- **Jenis:** Mobile Screen Automation Tool
- **Tech Stack:** Flutter, Android Accessibility Service API

#### Bedah STAR:
- **Situation (Masalah):** Berbagai skenario pengujian aplikasi atau tugas berulang pada smartphone membutuhkan simulasi pengetukan layar dengan frekuensi dan posisi koordinat yang presisi.
- **Task (Peran Anda):** Mengembangkan aplikasi auto-clicker berbasis Android yang fleksibel dan stabil.
- **Action (Solusi Teknis Anda):**
  - Mengimplementasikan **Android AccessibilityService API** untuk menyimulasikan gesture klik pada koordinat X dan Y tertentu.
  - Menyediakan kontrol floating widget untuk memulai, menghentikan, dan mengatur interval pengetukan (millisecond).
- **Tantangan & Debugging:**
  - *Tantangan:* Menghindari sistem operasi membunuh (*kill*) background service saat konsumsi baterai meningkat.
  - *Solusi:* Menerapkan foreground service dengan notifikasi persisten sesuai standar arsitektur Android.

---

### Proyek 8: PetaBuitenzorg
- **Jenis:** Mobile Geographic Information System (GIS)
- **Tech Stack:** Flutter, Google Stitch, Leaflet / Mapbox API

#### Bedah STAR:
- **Situation (Masalah):** Kebutuhan navigasi cepat ke fasilitas umum vital di Kota Bogor (Hotel, SPBU, Rumah Sakit, dan Mall) dalam antarmuka mobile yang bersih dan cepat diakses.
- **Task (Peran Anda):** Mengembangkan aplikasi mobile peta geospasial khusus Kota Bogor.
- **Action (Solusi Teknis Anda):**
  - Mengkategorisasikan titik-titik POI (Points of Interest) kota Bogor berdasarkan cluster kategori.
  - Mengintegrasikan fitur pencarian dan filter kategori instan serta rute navigasi ke lokasi tujuan.

---

### Proyek 9: Website Portofolio Pribadi (Proyek Ini)
- **Jenis:** Modern Interactive Bilingual Portfolio
- **Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion
- **Fitur Unggulan:**
  - **Bilingual Dinamis (ID / EN):** Menggunakan `useSyncExternalStore` React 19 yang sinkron dengan `localStorage` tanpa error hydration mismatch.
  - **Infinite Marquee Animasi:** 2 baris looping badge keahlian teknis (kiri ke kanan dan kanan ke kiri) dengan durasi 35 detik halus dan pause on hover.
  - **Aksesibilitas & Keamanan:** Konfigurasi CSP (Content Security Policy) ketat di `next.config.ts`, ARIA attributes, semantic HTML.
  - **Zero Lint & Type-Safe:** 100% lulus `npx tsc --noEmit` dan `eslint` tanpa error.

---

## 4. BANK SOAL & STRATEGI JAWABAN: USER INTERVIEW (TEKNIS)

User (Lead Developer / CTO / Senior Programmer) biasanya mengecek cara berpikir, kedalaman pemahaman kode, dan kemampuan Anda mengatasi masalah (troubleshooting).

### Q1: *"Dalam proyek web Anda (Koperasi & PetaSare), mengapa Anda memilih Next.js dibanding React biasa (CRA / Vite)?"*
> **Jawaban Ideal:**  
> *"Saya memilih Next.js karena tiga alasan utama:*  
> 1. ***SEO & Pre-rendering:*** *Next.js mendukung Server-Side Rendering (SSR) dan Static Site Generation (SSG). Untuk website profil seperti Koperasi, konten sudah terkompilasi dalam format HTML saat di-crawl mesin pencari, berbeda dengan Client-Side Rendering (CSR) pada React murni yang awalnya berupa file HTML kosong.*  
> 2. ***Routing Berbasis Berkas (App Router):*** *Struktur routing lebih intuitif, mendukung nested layout, loading state, dan error boundary secara terisolasi tanpa perlu pustaka pihak ketiga seperti react-router-dom.*  
> 3. ***Optimasi Bawaan:*** *Next.js memiliki optimasi otomatis untuk gambar (`next/image`), font (`next/font`), serta kompilasi cepat menggunakan Turbopack."*

---

### Q2: *"Bagaimana Anda memahami konsep State Management di React / Next.js?"*
> **Jawaban Ideal:**  
> *"State adalah representasi data yang nilainya dapat berubah sepanjang siklus hidup komponen dan memicu render ulang antarmuka saat nilainya diperbarui.*  
> *Dalam implementasinya, saya membaginya berdasarkan ruang lingkup (scope):*  
> - ***Local State:*** *Untuk kebutuhan internal satu komponen (seperti input form, toggle dialog modal, active tab) menggunakan `useState`.*  
> - ***Lifted State / Shared State:*** *Jika data dibutuhkan oleh beberapa komponen serumpun, state dinaikkan ke parent terdekat melalui props.*  
> - ***Global State:*** *Untuk data yang digunakan lintas halaman—contohnya pada website portofolio saya, saya mengimplementasikan `LanguageContext` menggunakan React Context dan `useSyncExternalStore` untuk mengelola pilihan bahasa (ID/EN) yang dapat diakses oleh seluruh seksi tanpa prop-drilling."*

---

### Q3: *"Di kurikulum magang ada materi Git Flow, PR, dan Code Review. Apakah Anda sudah terbiasa dengan Git?"*
> **Jawaban Ideal:**  
> *"Ya, saya sangat terbiasa menggunakan Git dalam workflow harian saya. Saya tidak sekadar memakai `git push origin main`. Saya memahami alur kerja kolaboratif:*  
> - *Membuat branch fitur baru dari branch utama (`git checkout -b feature/nama-fitur`).*  
> - *Menulis pesan commit yang deskriptif menggunakan konvensi standar (seperti `feat:`, `fix:`, `chore:`, `refactor:`).*  
> - *Mendorong branch ke GitHub dan membuat **Pull Request (PR)** dengan penjelasan perubahan yang jelas untuk proses **Code Review** oleh rekan tim sebelum dilakukan merge.*  
> - *Mampu menyelesaikan **merge conflict** secara teliti dengan memeriksa perbedaan kode yang bentrok.*  
> *Saya siap langsung beradaptasi dengan branch policy dan alur kerja tim di PT Arthasabena Putra sejak hari pertama."*

---

### Q4: *"Bagaimana pendekatan Anda saat menghadapi bug atau error saat mengoding?"*
> **Jawaban Ideal:**  
> *"Saya menerapkan pendekatan sistematis 4 langkah:*  
> 1. ***Membaca Pesan Error & Stack Trace:*** *Meneliti file dan baris spesifik mana yang menyebabkan error, serta memahami jenis errornya (misal: SyntaxError, TypeError, atau Network Error).*  
> 2. ***Isolasi Masalah:*** *Mengetes apakah masalah berada di sisi data (payload API/state), alur logika kode, atau rendering UI menggunakan `console.log`, breakpoint pada Browser DevTools, atau debugger IDE.*  
> 3. ***Reproduksi Secara Minimal:*** *Memastikan langkah-langkah apa yang selalu memicu bug tersebut.*  
> 4. ***Verifikasi & Pencegahan:*** *Setelah perbaikan dibuat, saya menjalankan test build (`npm run build` / `npm run lint`) dan memeriksa apakah ada efek samping (*side-effect*) ke modul lain sebelum membuat commit perbaikan."*

---

### Q5: *"Bagaimana pemahaman Anda tentang integrasi RESTful API dan penanganan data asinkron (Async/Await)?"*
> **Jawaban Ideal:**  
> *"Dalam arsitektur web modern, komunikasi antara frontend dan backend dilakukan melalui protokol HTTP menggunakan metode standar:*  
> - `GET` *untuk mengambil data.*  
> - `POST` *untuk membuat entri data baru.*  
> - `PUT` / `PATCH` *untuk memperbarui data.*  
> - `DELETE` *untuk menghapus data.*  
> 
> *Karena panggilan API bersifat asinkron dan membutuhkan waktu respon jaringan, saya menggunakan sintaks modern `async/await` di dalam blok `try...catch`.*  
> *Saya selalu memastikan ada penanganan terhadap 3 kemungkinan status:*  
> 1. `loading: true` *menampilkan skeleton atau spinner agar pengguna tahu data sedang diambil.*  
> 2. `data: result` *menampilkan data ketika respon berhasil (HTTP status 200/201).*  
> 3. `error: message` *menampilkan pesan feedback ramah kepada pengguna jika koneksi gagal atau server mengembalikan status 4xx/5xx."*

---

### Q6: *"Apa perbedaan database Relasional (SQL) dan Non-Relasional (NoSQL) berdasarkan pengalaman Anda?"*
> **Jawaban Ideal:**  
> *- **Relasional (SQL - seperti PostgreSQL/MySQL):** Memiliki skema tabel yang kaku dan terstruktur dengan kolom yang pasti, mendukung relasi antar-tabel (Foreign Key), dan menjamin integritas transaksi (ACID). Sangat cocok untuk data transaksional, e-commerce, atau sistem finansial.*  
> *- **Non-Relasional (NoSQL - seperti Firebase Firestore / MongoDB):** Menyimpan data dalam format dokumen JSON tanpa skema ketat (*schema-less*), mudah diskalakan secara horizontal, dan sangat fleksibel untuk perubahan data cepat.*  
> *Dalam proyek saya seperti **SunVolt** dan **Timerin**, saya menggunakan Firebase NoSQL karena membutuhkan sinkronisasi data real-time berbasis dokumen dan kemudahan listener event."*

---

## 5. BANK SOAL & STRATEGI JAWABAN: HRD INTERVIEW (BEHAVIORAL)

HRD akan menilai kecocokan budaya, integritas, komitmen, kemampuan komunikasi, dan etos kerja Anda.

### Q1: *"Mengapa Anda tertarik untuk magang di PT Arthasabena Putra?"*
> **Jawaban:**  
> *"Pertama, kurikulum magang 6 bulan yang ditawarkan PT Arthasabena Putra sangat terstruktur dan komprehensif, mencakup fondasi Git Flow, frontend modern, backend API, hingga deployment dan metodologi Agile. Ini selaras dengan visi karier saya untuk menjadi Full-Stack Software Engineer profesional.*  
> *Kedua, sebagai lulusan Teknik Komputer yang berdomisili di Bogor, kesempatan untuk berkontribusi langsung pada proyek nyata di perusahaan teknologi di kota asal saya merupakan kesempatan yang sangat saya dambakan.*  
> *Saya melihat PT Arthasabena Putra sebagai tempat yang tepat di mana saya bisa memberikan kontribusi terbaik sekaligus belajar dari para senior yang berpengalaman."*

---

### Q2: *"Jadwal magang ini adalah 6 hari per minggu selama 6 bulan penuh. Apakah Anda siap dan mampu berkomitmen?"*
> **Jawaban:**  
> *"Saya menyatakan **siap 100% dan berkomitmen penuh**.*  
> *Saya telah menyelesaikan studi sarjana saya di Universitas Telkom, sehingga saat ini saya tidak memiliki tanggungan perkuliahan atau tugas akhir yang memecah fokus.*  
> *Selain itu, karena lokasi saya tinggal di Bogor, mobilitas harian saya sangat terjangkau dan stabil. Saya terbiasa dengan ritme kerja yang intensif saat menyelesaikan proyek akhir dan pengerjaan aplikasi klien sebelumnya."*

---

### Q3: *"Apa kelebihan dan kelemahan terbesar Anda?"*
> **Jawaban:**  
> - ***Kelebihan:*** *"Kemampuan belajar mandiri dan adaptasi yang cepat (*fast learner*). Sebagai contoh, saat membangun website profil Koperasi dan Web GIS PetaSare, saya mempelajari implementasi arsitektur Next.js terbaru dan konfigurasi library peta geospasial secara mandiri hingga berhasil dideploy dan berfungsi tanpa kendala.*  
> - ***Kelemahan & Solusinya:*** *"Terkadang saya terlalu fokus pada kesempurnaan detail kecil antarmuka (*perfectionist*), yang berpotensi memakan waktu lebih lama. Untuk mengatasinya, sekarang saya selalu membuat daftar prioritas (To-Do List) dan membagi pekerjaan menjadi target MVP (Minimum Viable Product) terlebih dahulu, baru kemudian melakukan polishing jika fungsi utama sudah teruji."*

---

### Q4: *"Bagaimana pengalaman Anda saat bekerja dalam tim atau menghadapi perbedaan pendapat?"*
> **Jawaban:**  
> *"Saat magang di PT Telkom Witel Bogor dan organisasi Persatuan Catur Mahasiswa, saya terbiasa berkolaborasi dengan berbagai divisi yang memiliki latar belakang berbeda.*  
> *Jika terjadi perbedaan pendapat teknis, prinsip saya adalah kembali ke **tujuan utama proyek dan kebutuhan pengguna (user-centric)**. Saya mendengarkan argumen rekan tim secara objektif, menimbang kelebihan-kekurangan masing-masing pendekatan, dan terbuka mencari titik temu atau keputusan terbaik yang disepakati bersama demi kelancaran proyek."*

---

## 6. PERTANYAAN BALIK BERBOBOT UNTUK PEWAWANCARA

Di akhir sesi, ketika pewawancara menanyakan: *"Apakah ada yang ingin Anda tanyakan kepada kami?"*, **selalu tanyakan minimal 2 pertanyaan berikut**. Ini menunjukkan bahwa Anda sangat antusias, kritis, dan visioner:

1. **Untuk User / Lead Programmer:**
   > *"Berdasarkan silabus magang yang mencakup fondasi workflow hingga deployment aplikasi full-stack, tech stack backend apa yang saat ini paling aktif digunakan di PT Arthasabena Putra untuk proyek klien/internal (apakah Node.js, Laravel, atau Python)? Sehingga saya bisa mulai memperdalam materi tersebut dari sekarang."*

2. **Untuk HRD / User:**
   > *"Seperti apa ekspektasi perusahaan terhadap pencapaian seorang peserta magang programmer pada 1–2 bulan pertama masa magang?"*

3. **Untuk Budaya Tim:**
   > *"Bagaimana alur kerja harian tim programmer di PT Arthasabena Putra, apakah menggunakan daily standup meeting dan sprint mingguan?"*

---

## 7. CHECKLIST TEKNIS MENJELANG WAWANCARA DARING

- [ ] **Tab Browser Siap Buka:**
  - [x] Website Portofolio Pribadi Anda
  - [x] Website Koperasi Dirga Pangan Mandiri (`https://koperasi-produsen-dirga-pangan-mand.vercel.app/`)
  - [x] Website PetaSare (`https://peta-sare.vercel.app/`)
  - [x] Akun GitHub Anda (`https://github.com/saf134`)
  - [x] Folder Google Drive bukti proyek Flutter (SunVolt, Nguliah, MyFish, Timerin)
- [ ] **Perangkat & Jaringan:**
  - [x] Koneksi internet stabil (siapkan tethering cadangan di ponsel).
  - [x] Tes kamera webcam, microphone, dan earphone/headset 30 menit sebelum sesi dimulai.
  - [x] Pencahayaan ruangan terang menghadap ke wajah (bukan membelakangi jendela).
- [ ] **Penampilan & Sikap:**
  - [x] Kenakan kemeja formal rapi (berkerah).
  - [x] Sediakan buku catatan kecil dan bolpoin di samping laptop.
  - [x] Tatap kamera saat berbicara (memberikan kesan kontak mata yang percaya diri).
  - [x] Berbicara dengan tempo yang jelas, artikulatif, dan senyum ramah.

---

*Semoga sukses besar untuk wawancara besok, Syauqi! Anda memiliki bekal portofolio dan pemahaman teknis yang jauh di atas rata-rata pelamar magang lainnya. Tunjukkan kepercayaan diri dan antusiasme Anda!*
