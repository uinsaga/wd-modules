# 📖 Pertemuan 15: Final Code Refactoring, Accessibility (a11y) Check, & Preparasi UAS

**Bobot SKS:** 3 SKS (150 Menit Luring / Studio)  
**Metode:** Briefing Teori (30 Min) ➔ Studio Live Audit & Refactoring (90 Min) ➔ Review & Final Submission Prep (30 Min)

---

## 📌 Capaian Pembelajaran (Sub-CPMK)
* Mahasiswa mampu melakukan *code refactoring* (pembersihan dan pemeliharaan struktur kode) pada sintaks HTML, CSS, dan JavaScript secara profesional.
* Mahasiswa mampu menerapkan kriteria **Web Content Accessibility Guidelines (WCAG)** dasar untuk memastikan aplikasi web ramah bagi seluruh pengguna.
* Mahasiswa mampu mempublikasikan (*deploy*) proyek antarmuka *Dashboard* ke platform hosting statis (*GitHub Pages*) sebagai syarat kelengkapan Ujian Akhir Semester (UAS).

---

## 💡 1. Teori Dasar & Konsep (30 Menit)

### 🔹 1.1 Anatomi Code Refactoring & Web Accessibility (a11y)
Sebelum sebuah aplikasi *Dashboard* dirilis secara publik, kode sumber harus dibersihkan dari sintaks redundan dan diuji tingkat aksesibilitasnya agar nyaman digunakan oleh pengguna dengan berbagai keterbatasan fisik maupun perangkat.

```text
 ┌──────────────────────────┐      Audit & Cleaning      ┌──────────────────────────┐
 │ Raw Dashboard Code       │ ─────────────────────────► │ Refactored Code          │
 │ • HTML Semantik berantakan│                          │ • Modular JS Code        │
 │ • Kontras warna rendah   │                          │ • Accessible ARIA Labels │
 └──────────────────────────┘                          └────────────┬─────────────┘
                                                                    │
                                                          Deploy to GitHub Pages
                                                                    │
                                                                    ▼
 ┌────────────────────────────────────────────────────────────────────────────────┐
 │ Production-Ready Data Dashboard (UAS Submission Link)                          │
 │ [ High-Performance, Accessible, Persistent Data, Dynamic Visualizations ]      │
 └────────────────────────────────────────────────────────────────────────────────┘

```

#### Komponen Checklist Kualitas Antarmuka:

1. **Semantic HTML Structure:** Penggunaan elemen murni `<header>`, `<main>`, `<nav>`, `<section>`, dan `<footer>` alih-alih ketergantungan tag `<div>`.
2. **Color Contrast Ratio:** Memastikan rasio kontras warna teks dan latar belakang memenuhi standar WCAG (minimal 4.5:1 untuk teks normal).
3. **Keyboard Navigation & ARIA:** Elemen interaktif (modal, drawer, button) harus dapat diakses penuh via tombol keyboard `Tab` dan memiliki atribut `aria-*`.

---

## 🛠️ 2. Hands-on Studio & Live Coding (90 Menit)

### 🔹 Sesi A: Audit Aksesibilitas & Clean Code (45 Menit)

Buat folder `materials/week-15/`, persiapkan file `index.html` dan `script.js` versi final.

#### 1. Menerapkan Atribut Aksesibilitas (a11y) pada `index.html`:

Periksa kembali seluruh elemen interaktif dan tambahkan atribut penjelas bagi *screen reader*:

```html
<!-- Contoh Refactoring Tombol dengan Aksesibilitas -->
<button type="button" 
        class="btn btn-primary btn-sm" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasFilter" 
        aria-controls="offcanvasFilter" 
        aria-label="Buka Panel Filter Data">
    <i class="bi bi-funnel-fill me-1" aria-hidden="true"></i> Filter Data
</button>

<!-- Contoh Form Input dengan ARIA Describedby -->
<div class="mb-3">
    <label for="inputAmount" class="form-label small fw-semibold">Total Nominal ($)</label>
    <input type="number" 
           class="form-control form-control-sm" 
           id="inputAmount" 
           aria-describedby="amountHelp" 
           required>
    <div id="amountHelp" class="form-text small">Masukkan nominal angka tanpa simbol mata uang.</div>
</div>

```

---

### 🔹 Sesi B: JavaScript Refactoring & Production Deployment (45 Menit)

#### 1. Pembersihan Kode JavaScript (`script.js`):

Rapikan penulisan fungsi ke dalam modul terpisah menggunakan prinsip *Single Responsibility Principle*:

```javascript
/**
 * DASHBOARD CONTROLLER - FINAL REFACTORED
 * Version: 1.0.0 (UAS Release)
 */

// Global State
const STORAGE_KEY = 'DASHBOARD_TRANSACTION_DATA_V1';

// App Initialization Module
const App = {
    init() {
        this.bindEvents();
        this.render();
    },
    bindEvents() {
        document.addEventListener('DOMContentLoaded', () => {
            const data = StorageModule.load();
            UIModule.renderTable(data);
            ChartModule.init(data);
        });
    },
    render() {
        console.log('Dashboard Application initialized successfully.');
    }
};

// Start Application
App.init();

```

#### 2. Konfigurasi GitHub Pages untuk Deployment:

1. Pastikan seluruh file proyek terorganisir rapi di repositori GitHub kamu.
2. Buka halaman repositori di GitHub ➔ Klik menu **Settings**.
3. Pilih menu **Pages** di bilah navigasi samping kiri.
4. Pada opsi **Branch**, pilih `main` (atau `master`) dan folder `/root` (atau folder direktori target) ➔ Klik **Save**.
5. Tunggu 1–2 menit hingga tautan publik live dashboard kamu penerbitannya selesai (contoh: `https://username.github.io/repository-name/`).

---

## 📢 3. Review Progress & Code Review (30 Menit)

Uji kualitas akhir antarmuka dashboard kamu:

### 📋 Checklist Final Readiness Pertemuan 15:

* [ ] Menjalankan pengujian otomatis menggunakan peranti **Lighthouse Audit** pada Browser Developer Tools (Skor Accessibility ≥ 90).
* [ ] Seluruh komponen interaktif (Form Validation, Dynamic Table, Charts, LocalStorage) berfungsi 100% tanpa error di konsol.
* [ ] Tautan publik **GitHub Pages** dapat diakses dengan lancar dan responsif di perangkat seluler maupun desktop.

---

## 📖 Tugas Terstruktur / Mandiri (Preparasi Ujian Akhir Semester)

1. Susun dokumen **Laporan Akhir Proyek Dashboard (PDF)** yang memuat:
* Tangkapan layar (*Screenshot*) antarmuka final (Desktop & Mobile view).
* Tautan Repositori GitHub dan Tautan Live Demo (GitHub Pages).
* Penjelasan arsitektur *State Management* dan integrasi Chart.js yang digunakan.


2. Unggah file proyek final ke folder `materials/week-15/` di repositori GitHub kamu sebelum batas waktu pelaksanaan UAS.
