# 📖 Pertemuan 7: CSS Framework 2 (Data Cards, Responsive Tables, & UI Components)

**Bobot SKS:** 3 SKS (150 Menit Luring / Studio)  
**Metode:** Briefing Teori (30 Min) ➔ Studio Live Coding UI Data (90 Min) ➔ Review & Preparasi UTS (30 Min)

---

## 📌 Capaian Pembelajaran (Sub-CPMK)
* Mahasiswa mampu merakit komponen *Stat Cards (KPI Cards)* yang responsif menggunakan *CSS Framework Utility Classes*.
* Mahasiswa mampu menyusun *Responsive Data Table* yang dilengkapi dengan *badge status* dan *pagination*.
* Mahasiswa mampu mengonversi seluruh komponen UI dari Figma *High-Fidelity* menjadi tampilan web statis utuh sebelum UTS.

---

## 💡 1. Teori Dasar & Konsep (30 Menit)

### 🔹 1.1 Anatomi Komponen UI Data
Pada *Data Dashboard*, komponen visual harus menyajikan angka dan rincian data secara jelas tanpa memakan ruang (*screen real estate*) secara berlebihan.

```text
┌───────────────────────────────────────┐  ┌───────────────────────────────────────┐
│ STAT CARD KPI                         │  │ RESPONSIVE DATA TABLE                 │
├───────────────────────────────────────┤  ├───────────────────────────────────────┤
│ Title     : Total Users               │  │ [Search]                 [Filter Box] │
│ Value     : 12,450                    │  ├───────┬──────────┬──────────┬────────┤
│ Trend Badge: +12.5% vs last month     │  │ ID    │ Date     │ Status   │ Amount │
│ Icon      : [User Icon]               │  ├───────┼──────────┼──────────┼────────┤
└───────────────────────────────────────┘  │ #001  │ 2026-08  │ [Active] │ $250   │
                                           └───────┴──────────┴──────────┴────────┘

```

1. **Stat Card (KPI Card):** Menggunakan kombinasi Flexbox untuk memisahkan teks judul, angka metrik utama, badge persentase tren (hijau/merah), dan ikon representatif.
2. **Responsive Data Table:** Menggunakan pembungkus (`.table-responsive`) agar tabel tidak merusak *layout* saat dibuka di layar HP/Tablet, melainkan memunculkan *scroll-bar* horizontal.

---

## 🛠️ 2. Hands-on Studio & Live Coding (90 Menit)

### 🔹 Sesi A: Slicing Stat Cards KPI Section (40 Menit)

Buka file `index.html` pada folder `materials/week-07/` (atau lanjutkan dari `week-06`). Masukkan kode berikut ke dalam area `<main>` di bawah header navbar:

```html
<!-- SECTION: STAT CARDS KPI -->
<section class="row g-3 mb-4">
    <!-- Card 1: Primary KPI -->
    <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm p-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="text-muted fw-semibold small">TOTAL REVENUE</span>
                <div class="bg-primary bg-opacity-10 text-primary p-2 rounded">
                    <i class="bi bi-currency-dollar fs-5"></i>
                </div>
            </div>
            <h3 class="fw-bold mb-1">$45,200</h3>
            <div class="d-flex align-items-center small text-success">
                <i class="bi bi-arrow-up-short fs-5"></i>
                <span class="fw-semibold">+12.5%</span>
                <span class="text-muted ms-1">vs bulan lalu</span>
            </div>
        </div>
    </div>

    <!-- Card 2: Success KPI -->
    <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm p-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="text-muted fw-semibold small">ACTIVE USERS</span>
                <div class="bg-success bg-opacity-10 text-success p-2 rounded">
                    <i class="bi bi-people-fill fs-5"></i>
                </div>
            </div>
            <h3 class="fw-bold mb-1">12,450</h3>
            <div class="d-flex align-items-center small text-success">
                <i class="bi bi-arrow-up-short fs-5"></i>
                <span class="fw-semibold">+8.2%</span>
                <span class="text-muted ms-1">vs bulan lalu</span>
            </div>
        </div>
    </div>

    <!-- Card 3: Warning KPI -->
    <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm p-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="text-muted fw-semibold small">PENDING ORDERS</span>
                <div class="bg-warning bg-opacity-10 text-warning p-2 rounded">
                    <i class="bi bi-clock-history fs-5"></i>
                </div>
            </div>
            <h3 class="fw-bold mb-1">142</h3>
            <div class="d-flex align-items-center small text-danger">
                <i class="bi bi-arrow-down-short fs-5"></i>
                <span class="fw-semibold">-3.1%</span>
                <span class="text-muted ms-1">vs bulan lalu</span>
            </div>
        </div>
    </div>

    <!-- Card 4: Info KPI -->
    <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm p-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="text-muted fw-semibold small">CONVERSION RATE</span>
                <div class="bg-info bg-opacity-10 text-info p-2 rounded">
                    <i class="bi bi-graph-up-arrow fs-5"></i>
                </div>
            </div>
            <h3 class="fw-bold mb-1">3.45%</h3>
            <div class="d-flex align-items-center small text-success">
                <i class="bi bi-arrow-up-short fs-5"></i>
                <span class="fw-semibold">+0.5%</span>
                <span class="text-muted ms-1">vs bulan lalu</span>
            </div>
        </div>
    </div>
</section>

```

---

### 🔹 Sesi B: Slicing Responsive Data Table (50 Menit)

Tambahkan sintaks tabel data interaktif berikut di bawah section Stat Cards:

```html
<!-- SECTION: DATA TABLE -->
<section class="card border-0 shadow-sm p-4">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3 gap-2">
        <div>
            <h5 class="fw-bold mb-0">Transaksi Laporan Terbaru</h5>
            <small class="text-muted">Menampilkan rincian transaksi data log terbaru</small>
        </div>
        <div class="d-flex gap-2">
            <input type="text" class="form-control form-control-sm" placeholder="Cari data...">
            <button class="btn btn-primary btn-sm d-flex align-items-center gap-1">
                <i class="bi bi-funnel"></i> Filter
            </button>
        </div>
    </div>

    <!-- Responsive Table Wrapper -->
    <div class="table-responsive">
        <table class="table table-hover align-middle mb-0">
            <thead class="table-light">
                <tr>
                    <th>ID Transaksi</th>
                    <th>Tanggal</th>
                    <th>Nama Pelanggan</th>
                    <th>Kategori Data</th>
                    <th>Status</th>
                    <th>Total Nominal</th>
                    <th class="text-end">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="fw-semibold">#TRX-9801</td>
                    <td>28 Aug 2026</td>
                    <td>Budi Santoso</td>
                    <td>E-Commerce</td>
                    <td><span class="badge bg-success-subtle text-success px-2 py-1">Completed</span></td>
                    <td class="fw-bold">$350.00</td>
                    <td class="text-end">
                        <button class="btn btn-light btn-sm"><i class="bi bi-eye"></i></button>
                    </td>
                </tr>
                <tr>
                    <td class="fw-semibold">#TRX-9802</td>
                    <td>28 Aug 2026</td>
                    <td>Siti Aminah</td>
                    <td>Healthcare</td>
                    <td><span class="badge bg-warning-subtle text-warning px-2 py-1">Pending</span></td>
                    <td class="fw-bold">$120.50</td>
                    <td class="text-end">
                        <button class="btn btn-light btn-sm"><i class="bi bi-eye"></i></button>
                    </td>
                </tr>
                <tr>
                    <td class="fw-semibold">#TRX-9803</td>
                    <td>27 Aug 2026</td>
                    <td>Dewi Lestari</td>
                    <td>IoT Sensor</td>
                    <td><span class="badge bg-danger-subtle text-danger px-2 py-1">Failed</span></td>
                    <td class="fw-bold">$0.00</td>
                    <td class="text-end">
                        <button class="btn btn-light btn-sm"><i class="bi bi-eye"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Table Pagination Footer -->
    <div class="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
        <small class="text-muted">Menampilkan 1 hingga 3 dari 150 data</small>
        <ul class="pagination pagination-sm mb-0">
            <li class="page-item disabled"><a class="page-link" href="#">Prev</a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </div>
</section>

```

---

## 📢 3. Review Progress & Preparasi UTS (30 Menit)

Tunjukkan hasil kodingan UI Dashboard utuh kamu kepada Dosen atau Asisten Lab:

### 📋 Checklist Progress Pertemuan 7:

* [ ] Empat Stat Cards KPI terpasang rapi secara responsif (4 kolom di Desktop, 2 kolom di Tablet, 1 kolom di Mobile).
* [ ] Data Table terbungkus `.table-responsive` dan tidak merusak layout saat di-resize ke layar kecil.
* [ ] Status Badge (`Completed`, `Pending`, `Failed`) terpasang dengan skema warna semantic yang jelas.
* [ ] Seluruh tampilan antarmuka (Navbar, Sidebar, Stat Cards, Data Table) sudah identik dengan desai Figma High-Fi.

---

## 📖 Tugas Terstruktur / Preparasi UTS (KM & KPT = 4 Jam)

1. Gabungkan seluruh hasil pengerjaan dari Pertemuan 1–7 menjadi **Satu Halaman Data Dashboard Utuh (Static Slicing UI)**.
2. Pastikan file `index.html` dan repositori GitHub milikmu tertata rapi sesuai instruksi pengerjaan proyek UTS.
3. Persiapkan berkas presentasi/demo prototype Figma dan Web Statis untuk ujian **UTS minggu depan (Pertemuan 8)**.

