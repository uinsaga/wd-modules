# 📖 Pertemuan 5: Interactive Prototyping di Figma & HTML5 Semantic Structure

**Bobot SKS:** 3 SKS (150 Menit Luring / Studio)  
**Metode:** Briefing Teori (30 Min) ➔ Studio Prototyping & Code (90 Min) ➔ Review & Checklist (30 Min)

---

## 📌 Capaian Pembelajaran (Sub-CPMK)
* Mahasiswa mampu menghubungkan *High-Fidelity UI* menjadi *Interactive Prototype* di Figma (Micro-interactions & Hand-off).
* Mahasiswa mampu memetakan komponen visual Figma ke dalam struktur kerangka *Semantic HTML5*.
* Mahasiswa mampu menulis sintaks HTML5 yang rapi, *accessible*, dan terstruktur untuk *Data Dashboard*.

---

## 💡 1. Teori Dasar & Konsep (30 Menit)

### 🔹 1.1 Interactive Prototyping & Developer Hand-off
Sebelum melompat ke koding, seorang desainer/developer menguji alur interaksi antarmuka menggunakan *Prototype*.

* **Micro-interactions:** Efek visual saat elemen diinteraksi (contoh: *Hover state* pada button/row tabel, *Dropdown menu toggle*, *Active tab state*).
* **Developer Hand-off (Inspect Mode):** Proses mengintip nilai properti spasial (Padding, Margin, Width), kode warna Hex, dan aset gambar/svg dari Figma ke dalam file HTML.

---

### 🔹 1.2 Pemetaan Figma UI ke HTML5 Semantic
*Semantic HTML* adalah penggunaan *tag* HTML sesuai dengan makna dan fungsi kontennya, bukan sekadar memakai `<div>` untuk semua hal. Bagi mahasiswa Sains Data, *Semantic HTML* membuat data lebih mudah dibaca oleh peramban (*browser*), *screen reader*, dan mesin pencari.

```text
 ┌──────────────────────────────────────┐  ──►  <header> (Navbar & User Info)
 │ Figma Component                      │  ──►  <aside>  (Sidebar Navigation)
 ├──────────────────────────────────────┤  ──►  <main>   (Dashboard Content)
 │ • Stat Cards KPI                     │  ──►   ├── <section class="kpi-group">
 │ • Visualisasi Chart                  │  ──►   ├── <section class="chart-group">
 │ • Data Table                         │  ──►   └── <article class="table-card">
 └──────────────────────────────────────┘

```

#### Pemetaan Tag HTML5 Utama:

* `<header>` : Navigasi atas, judul sistem, profil.
* `<aside>` : Sidebar navigasi samping.
* `<main>` : Area konten utama dashboard.
* `<section>` : Pengelompokan area (misal: area KPI, area Chart).
* `<article>` : Wadah komponen independen (misal: sebuah Card atau Tabel).
* `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` : Elemen standar penampil data mentah.

---

## 🛠️ 2. Hands-on Studio & Praktik (90 Menit)

### 🔹 Sesi A: Figma Interactive Prototyping (30 Menit)

Buka file Figma proyek *High-Fidelity* dari Pertemuan 4:

1. **Membuat Interactive States:**
* Buat variansi *Hover State* pada tombol Sidebar Navigation (ubah warna background menjadi lebih terang).
* Buat frame modal/pop-up sederhana untuk "Filter Data".


2. **Connecting Prototype Nodes:**
* Pindah ke tab **Prototype** di panel kanan Figma.
* Hubungkan tombol navigasi Sidebar ke halaman terkait dengan transisi `Instant` atau `Smart Animate`.
* Hubungkan tombol Filter ke komponen Pop-up dengan *trigger* `On Click` ➔ `Open Overlay`.


3. **Testing Prototype:** Tekan tombol **Play (Present)** di kanan atas untuk menguji alur interaksi.

---

### 🔹 Sesi B: Live Slicing - HTML5 Semantic Skeleton (60 Menit)

Buka **VS Code**, buat folder `materials/week-05/` dan buat file `index.html`. Salin dan ketikkan kerangka dasar *Data Dashboard* berikut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Dashboard - Semantic Skeleton</title>
</head>
<body>

    <!-- 1. Header Navigation -->
    <header>
        <h1>Executive Data Dashboard</h1>
        <div class="user-profile">
            <span>Admin Data</span>
        </div>
    </header>

    <!-- Shell Container -->
    <div class="dashboard-container">
        
        <!-- 2. Sidebar Navigation -->
        <aside>
            <nav>
                <ul>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Analytics</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
        </aside>

        <!-- 3. Main Content Area -->
        <main>
            <!-- Section: Stat Cards KPI -->
            <section class="kpi-container">
                <article class="kpi-card">
                    <h3>Total Users</h3>
                    <p class="kpi-value">12,450</p>
                </article>
                <article class="kpi-card">
                    <h3>Total Revenue</h3>
                    <p class="kpi-value">$45,200</p>
                </article>
            </section>

            <!-- Section: Data Table -->
            <section class="data-table-container">
                <h2>Recent Transactions Log</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID Transaction</th>
                            <th>Date</th>
                            <th>User</th>
                            <th>Status</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#TRX-001</td>
                            <td>2026-08-28</td>
                            <td>Budi Santoso</td>
                            <td>Success</td>
                            <td>$250.00</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>

    </div>

</body>
</html>

```

*Jalankan file tersebut menggunakan ekstensi **Live Server** di VS Code.*

---

## 📢 3. Review Progress & Code Review (30 Menit)

Demonstrasikan hasil kodingan HTML5 dan Prototype Figma kamu kepada Dosen/Asisten Lab:

### 📋 Checklist Progress Pertemuan 5:

* [ ] Prototype Figma dapat dijalankan (Minimal tombol navigasi & hover state berfungsi).
* [ ] Struktur folder `materials/week-05/index.html` sudah dibuat di VS Code.
* [ ] Kode HTML menggunakan tag Semantic (`<header>`, `<aside>`, `<main>`, `<section>`, `<article>`).
* [ ] Struktur data tabel menggunakan tag `<table>`, `<thead>`, dan `<tbody>` yang valid.
* [ ] Berkas HTML berjalan bebas dari *syntax error* di browser via Live Server.

---

## 📖 Tugas Terstruktur / Mandiri (KM & KPT = 4 Jam)

1. Lakukan *Inspect Element* di Figma untuk mengambil data spesifikasi komponen milikmu.
2. Lengkapi file `index.html` dengan menambahkan isi data baris tabel hingga minimal **5 baris data mentah (*record*)**.
3. Tambahkan tag form dasar (`<form>`, `<input>`, `<select>`, `<button>`) di bagian atas tabel sebagai kerangka awal filter data.
4. Commit & Push file `index.html` ke repositori GitHub masing-masing di dalam folder `materials/week-05/`.
