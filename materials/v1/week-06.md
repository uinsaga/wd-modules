# 📖 Pertemuan 6: CSS Framework 1 (Grid System, Layouting, Navbar & Sidebar)

**Bobot SKS:** 3 SKS (150 Menit Luring / Studio)  
**Metode:** Briefing Teori (30 Min) ➔ Studio Live Coding Layouting (90 Min) ➔ Review & Checklist (30 Min)

---

## 📌 Capaian Pembelajaran (Sub-CPMK)
* Mahasiswa mampu menghubungkan *CSS Framework* (Bootstrap 5 / Tailwind CSS via CDN) ke dalam kerangka HTML5.
* Mahasiswa mampu mengimplementasikan *Grid System* dan *Flexbox Utility Classes* untuk menyusun *Layout Dashboard*.
* Mahasiswa mampu merakit komponen *Navbar* dan *Sidebar Navigation* yang responsif.

---

## 💡 1. Teori Dasar & Konsep (30 Menit)

### 🔹 1.1 Mengapa Pakai CSS Framework untuk Dashboard?
Menulis CSS murni (*vanilla*) untuk layout *dashboard* sering kali memakan waktu pada penyesuaian *margin*, *padding*, dan *flexbox manual*. *CSS Framework* menyediakan kelas utilitas (*utility classes*) siap pakai yang sudah teruji responsif di berbagai ukuran layar.

```text
 Figma (Auto Layout)               CSS Framework Utility Class
 -------------------               ---------------------------
 Auto Layout Horizontal     ──►    d-flex flex-row (Bootstrap)  / flex flex-row (Tailwind)
 Direction: Vertical        ──►    flex-column (Bootstrap)     / flex-col (Tailwind)
 Gap: 16px                  ──►    gap-3 (Bootstrap)           / gap-4 (Tailwind)
 Padding: 24px              ──►    p-4 (Bootstrap)             / p-6 (Tailwind)

```

---

### 🔹 1.2 Grid System & Layout Breakpoints

*Framework* membagi layar menjadi **12 kolom imajiner**. Kita bisa menentukan berapa kolom yang diambil oleh suatu komponen berdasarkan ukuran layar:

* **Breakpoints Utama:**
* `sm` (Mobile / $\ge$ 576px)
* `md` (Tablet / $\ge$ 768px)
* `lg` (Desktop / $\ge$ 992px)


* **Pola Layout Dashboard:**
* Sidebar: Ambil 2 atau 3 kolom di layar desktop (`col-lg-2`).
* Main Content: Ambil sisa 9 atau 10 kolom di layar desktop (`col-lg-10`).



---

## 🛠️ 2. Hands-on Studio & Live Coding (90 Menit)

### 🔹 Sesi A: Setup CDN & Shell Layout Dashboard (30 Menit)

Buka VS Code, buat folder `materials/week-06/` dan buat file `index.html`.

Salin kode starter yang sudah terintegrasi dengan **Bootstrap 5 CDN** dan **Bootstrap Icons** berikut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Dashboard - Framework Layout</title>
    <!-- Bootstrap 5 CSS CDN -->
    <link href="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css)" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="[https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css](https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css)">
    <style>
        /* Custom Styling Ringkas untuk Layout Shell */
        body { background-color: #f8f9fa; }
        .sidebar { min-height: 100vh; background-color: #0f172a; }
        .sidebar .nav-link { color: #94a3b8; }
        .sidebar .nav-link:hover, .sidebar .nav-link.active { color: #ffffff; background-color: #1e293b; }
    </style>
</head>
<body>

    <div class="container-fluid">
        <div class="row">
            <!-- SIDEBAR CONTAINER (Diisi pada Sesi B) -->
            <aside id="sidebar-container" class="col-md-3 col-lg-2 sidebar p-3 text-white">
                <!-- Sidebar content goes here -->
            </aside>

            <!-- MAIN CONTENT CONTAINER -->
            <main class="col-md-9 col-lg-10 ms-sm-auto px-md-4 py-3">
                <!-- NAVBAR CONTAINER (Diisi pada Sesi B) -->
                <header id="navbar-container">
                    <!-- Navbar content goes here -->
                </header>

                <!-- DASHBOARD BODY CONTENT PLACEHOLDER -->
                <section class="mt-4">
                    <div class="p-4 bg-white rounded shadow-sm">
                        <h2>Welcome to Data Dashboard</h2>
                        <p class="text-muted">Main content area placeholder for Stat Cards & Data Tables.</p>
                    </div>
                </section>
            </main>
        </div>
    </div>

</body>
</html>

```

---

### 🔹 Sesi B: Slicing Sidebar & Navbar Components (60 Menit)

#### 1. Melengkapi Komponen Sidebar Navigation (`<aside>`):

Ganti bagian komentar `<!-- Sidebar content goes here -->` di dalam elemen `<aside>` dengan sintaks berikut:

```html
<div class="d-flex align-items-center mb-4 text-white text-decoration-none fs-5 fw-bold px-2">
    <i class="bi bi-bar-chart-line-fill me-2 text-primary"></i>
    <span>DataViz Lab</span>
</div>
<hr class="text-secondary">
<ul class="nav nav-pills flex-column mb-auto">
    <li class="nav-item">
        <a href="#" class="nav-link active rounded mb-1">
            <i class="bi bi-speedometer2 me-2"></i> Overview
        </a>
    </li>
    <li>
        <a href="#" class="nav-link rounded mb-1">
            <i class="bi bi-graph-up me-2"></i> Analytics
        </a>
    </li>
    <li>
        <a href="#" class="nav-link rounded mb-1">
            <i class="bi bi-table me-2"></i> Data Reports
        </a>
    </li>
    <li>
        <a href="#" class="nav-link rounded mb-1">
            <i class="bi bi-gear me-2"></i> Settings
        </a>
    </li>
</ul>

```

#### 2. Melengkapi Komponen Header / Navbar (`<header>`):

Ganti bagian komentar `<!-- Navbar content goes here -->` di dalam elemen `<header>` dengan sintaks berikut:

```html
<div class="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom">
    <div>
        <h4 class="mb-0 fw-bold">Executive Dashboard</h4>
        <small class="text-muted">Real-time Data Monitoring System</small>
    </div>
    <div class="d-flex align-items-center gap-3">
        <button class="btn btn-outline-secondary btn-sm">
            <i class="bi bi-calendar3 me-1"></i> Aug 2026
        </button>
        <div class="dropdown">
            <a href="#" class="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
                <i class="bi bi-person-circle fs-4 me-2"></i>
                <strong>Admin Data</strong>
            </a>
        </div>
    </div>
</div>

```

*Buka file menggunakan **Live Server** di VS Code untuk melihat hasil layouting.*

---

## 📢 3. Review Progress & Code Review (30 Menit)

Tunjukkan tampilan hasil *slicing layout shell* kamu kepada Dosen atau Asisten Lab:

### 📋 Checklist Progress Pertemuan 6:

* [ ] Berhasil menghubungkan CDN Bootstrap 5 dan Bootstrap Icons pada `index.html`.
* [ ] Memahami pembagian 12 kolom pada Grid System (`col-md-3`, `col-lg-2`, `col-lg-10`).
* [ ] Komponen Sidebar terpasang rapi dengan ikon dan status menu aktif.
* [ ] Komponen Header Navbar terpasang rapi dengan judul dan profil pengguna.
* [ ] Layout bersikap elastis dan responsif saat ukuran jendela browser diubah (*resize*).

---

## 📖 Tugas Terstruktur / Mandiri (KM & KPT = 4 Jam)

1. Sesuaikan skema warna *Sidebar* (background & text) agar persis menyerupai *Color Tokens* yang sudah kamu buat di file Figma Pertemuan 3.
2. Tambahkan 2 menu navigasi baru pada *Sidebar* sesuai dengan kebutuhan spesifikasi ide proyek masing-masing.
3. Commit & Push file `index.html` beserta aset pendukung ke folder `materials/week-06/` pada repositori GitHub kamu.
