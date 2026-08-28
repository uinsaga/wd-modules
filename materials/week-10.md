# 📖 Pertemuan 10: Advanced CSS Framework (Dynamic Layout Components & Overlay System)

**Bobot SKS:** 3 SKS (150 Menit Luring / Studio)  
**Metode:** Briefing Teori (30 Min) ➔ Studio Live Coding UI Components (90 Min) ➔ Review & Checklist (30 Min)

---

## 📌 Capaian Pembelajaran (Sub-CPMK)
* Mahasiswa mampu mengimplementasikan komponen dinamis *CSS Framework* seperti **Modal**, **Offcanvas (Drawer)**, dan **Toast Notifications**.
* Mahasiswa mampu merancang antarmuka *Overlay System* untuk penyaringan (*filtering*) data dan pelaporan interaktif.
* Mahasiswa mampu meningkatkan kenyamanan UX antarmuka data dengan komponen indikator status (*Badges, Progress Bars, Tooltips*).

---

## 💡 1. Teori Dasar & Konsep (30 Menit)

### 🔹 1.1 Overlay System pada Data Dashboard
Pada antarmuka data modern, tidak semua informasi harus ditampilkan sekaligus di layar utama. Kita memanfaatkan *Overlay System* untuk menjaga visual tetap *clean* namun tetap fungsional.

```text
 ┌────────────────────────────────────────────────────────┐
 │ MAIN DASHBOARD SCREEN                                  │
 │                                                        │
 │ ┌──────────────┐   (Klik Filter)  ┌──────────────────┐ │
 │ │ [Filter Data]│ ───────────────► │ OFFCANVAS DRAWER │ │
 │ └──────────────┘                  │ • Date Range     │ │
 │                                   │ • Category       │ │
 │ ┌──────────────┐   (Klik Detail)  └──────────────────┘ │
 │ │ [#TRX-9801]  │ ───────────────► ┌──────────────────┐ │
 │ └──────────────┘                  │ MODAL POP-UP     │ │
 │                                   │ Rincian Log Data │ │
 └───────────────────────────────────└──────────────────┘─┘

```

#### Komponen Overlay Utama:

1. **Modal (Pop-up Window):** Cocok untuk menampilkan rincian detail data (*read-only log*) atau konfirmasi aksi penting (*Delete/Update*).
2. **Offcanvas (Slide-in Drawer):** Sangat ideal untuk panel *Advanced Filter Data* yang membutuhkan banyak opsi masukan tanpa menutup visual grafik utama.
3. **Toast Notifications:** Pesan umpan balik sementara di pojok layar (misal: *"Data berhasil diperbarui"*).

---

## 🛠️ 2. Hands-on Studio & Live Coding (90 Menit)

### 🔹 Sesi A: Slicing Offcanvas Drawer untuk Advanced Filter (45 Menit)

Buka file `index.html` pada folder `materials/week-10/` (atau lanjutkan dari minggu sebelumnya). Salin sintaks **Offcanvas Filter** berikut di bagian paling bawah file (sebelum `</body>`):

```html
<!-- OFFCANVAS DRAWER: ADVANCED DATA FILTER -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasFilter" aria-labelledby="offcanvasFilterLabel">
    <div class="offcanvas-header border-bottom">
        <h5 class="offcanvas-title fw-bold" id="offcanvasFilterLabel">
            <i class="bi bi-funnel-fill me-2 text-primary"></i>Filter Data Laporan
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <form id="filterForm">
            <!-- Filter Tanggal -->
            <div class="mb-3">
                <label class="form-label small fw-semibold">Rentang Tanggal</label>
                <input type="date" class="form-control form-control-sm mb-2">
                <input type="date" class="form-control form-control-sm">
            </div>

            <!-- Filter Kategori -->
            <div class="mb-3">
                <label class="form-label small fw-semibold">Kategori Data</label>
                <select class="form-select form-select-sm">
                    <option selected>Semua Kategori</option>
                    <option value="1">E-Commerce</option>
                    <option value="2">Healthcare</option>
                    <option value="3">IoT Sensor</option>
                </select>
            </div>

            <!-- Filter Status -->
            <div class="mb-3">
                <label class="form-label small fw-semibold">Status Transaksi</label>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="statusCompleted" checked>
                    <label class="form-check-label small" for="statusCompleted">Completed</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="statusPending" checked>
                    <label class="form-check-label small" for="statusPending">Pending</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="statusFailed">
                    <label class="form-check-label small" for="statusFailed">Failed</label>
                </div>
            </div>

            <!-- Submit Button -->
            <div class="d-grid gap-2 mt-4">
                <button type="button" class="btn btn-primary btn-sm" data-bs-dismiss="offcanvas">Terapkan Filter</button>
                <button type="reset" class="btn btn-outline-secondary btn-sm">Reset</button>
            </div>
        </form>
    </div>
</div>

```

*Hubungkan tombol **Filter** di header Data Table agar memiliki atribut `data-bs-toggle="offcanvas"` dan `data-bs-target="#offcanvasFilter"`.*

---

### 🔹 Sesi B: Slicing Modal Detail Data & Toast Feedback (45 Menit)

#### 1. Menambahkan Modal Pop-Up Detail Log Data:

Tambahkan elemen modal berikut di sebelah Offcanvas:

```html
<!-- MODAL POP-UP: DETAIL LOG DATA -->
<div class="modal fade" id="detailDataModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
            <div class="modal-header bg-light">
                <h5 class="modal-title fw-bold fs-6">Detail Transaksi #TRX-9801</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <ul class="list-group list-group-flush small mb-3">
                    <li class="list-group-item d-flex justify-content-between">
                        <span class="text-muted">Nama Pelanggan</span>
                        <strong class="text-dark">Budi Santoso</strong>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span class="text-muted">Kategori Data</span>
                        <span>E-Commerce</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span class="text-muted">Status</span>
                        <span class="badge bg-success-subtle text-success">Completed</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span class="text-muted">Total Nominal</span>
                        <strong class="text-primary">$350.00</strong>
                    </li>
                </ul>
            </div>
            <div class="modal-footer bg-light p-2">
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Tutup</button>
            </div>
        </div>
    </div>
</div>

```

*Hubungkan tombol aksi bertanda ikon mata `<i class="bi bi-eye"></i>` pada tabel agar memicu modal dengan atribut `data-bs-toggle="modal"` dan `data-bs-target="#detailDataModal"`.*

---

## 📢 3. Review Progress & Code Review (30 Menit)

Uji interaktivitas komponen overlay kamu menggunakan peramban (*browser*):

### 📋 Checklist Progress Pertemuan 10:

* [ ] Tombol **Filter** berhasil membuka panel *Offcanvas Drawer* dari samping layar.
* [ ] Opsi filter (Date, Select, Checkbox) tersusun rapi di dalam Offcanvas.
* [ ] Tombol **Aksi Detail** pada tabel berhasil memunculkan *Modal Pop-Up*.
* [ ] Memastikan file **Bootstrap 5 JS Bundle CDN** (`bootstrap.bundle.min.js`) sudah terpasang di atas tag `</body>` agar komponen JS interaktif berfungsi.

---

## 📖 Tugas Terstruktur / Mandiri (KM & KPT = 4 Jam)

1. Buat 1 *Modal Form* tambahan untuk fungsi **"Tambah Data Baru"** yang memiliki elemen input teks, pilihan kategori, dan tombol simpan.
2. Tambahkan komponen **Progress Bar** pada salah satu Stat Card untuk mengindikasikan ketercapaian target data (contoh: *Target 75% Completed*).
3. Commit & Push file `index.html` yang sudah dilengkapi komponen dinamis ke folder `materials/week-10/` di repositori GitHub kamu.

