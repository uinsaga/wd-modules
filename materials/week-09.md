# 📖 Pertemuan 9: Form Input & Data Collector (Layout & Form Handling Structure)

**Bobot SKS:** 3 SKS (150 Menit Luring / Studio)  
**Metode:** Briefing Teori (30 Min) ➔ Studio Live Coding Form Layout (90 Min) ➔ Review & Checklist (30 Min)

---

## 📌 Capaian Pembelajaran (Sub-CPMK)
* Mahasiswa mampu merancang komponen *Form Input* data yang sesuai standar UI/UX untuk aplikasi *Data Dashboard*.
* Mahasiswa mampu mengimplementasikan berbagai ragam tipe input (`text`, `number`, `select`, `date`, `file`, `radio/checkbox`) menggunakan *CSS Framework*.
* Mahasiswa mampu menyusun tata letak *Form Entry Data* dan pelaporan yang responsif dan user-friendly.

---

## 💡 1. Teori Dasar & Konsep (30 Menit)

### 🔹 1.1 Peran Form dalam Dashboard Sains Data
Selain berfungsi untuk *menampilkan* data (visualisasi), sebuah sistem *dashboard* yang utuh juga harus menyediakan sarana untuk *mengumpulkan* atau *memasukkan* data mentah baru (*Data Entry / Data Collector*).

```text
 ┌──────────────────────────┐          ┌──────────────────────────┐
 │ INPUT FORM DATA          │ ──────►  │ DATA DASHBOARD & TABLE   │
 │ • Tanggal Transaksi      │          │ • Stat Cards Auto Update │
 │ • Kategori & Nominal     │          │ • Chart Visual Dynamic   │
 │ • File CSV / Lampiran    │          │ • Data Table Entry Log   │
 └──────────────────────────┘          └──────────────────────────┘

```

#### Anatomi Form UX yang Baik:

1. **Explicit Labeling:** Setiap elemen input harus memiliki `<label>` yang jelas terhubung via atribut `for=""`.
2. **Clear Grouping:** Mengelompokkan input yang sejenis (misal: *Informasi Utama*, *Kategori Data*, *Lampiran File*).
3. **Input Constraints & Placeholders:** Memberikan petunjuk format masukan (contoh: *Format tanggal*, *Min/Max angka*).

---

## 🛠️ 2. Hands-on Studio & Live Coding (90 Menit)

### 🔹 Sesi A: Slicing Form Data Collector / Pelaporan (45 Menit)

Buka file `index.html` pada folder `materials/week-09/`. Kita akan menambahkan komponen **Form Input Entry Data Baru** di atas atau samping komponen tabel data:

```html
<!-- SECTION: FORM DATA ENTRY / COLLECTOR -->
<section class="card border-0 shadow-sm p-4 mb-4">
    <div class="border-bottom pb-2 mb-3">
        <h5 class="fw-bold mb-0">
            <i class="bi bi-plus-circle-fill text-primary me-2"></i>Form Entry Data Laporan Baru
        </h5>
        <small class="text-muted">Isi formulir berikut untuk menambahkan log data transaksi ke dalam sistem.</small>
    </div>

    <form id="formDataEntry">
        <div class="row g-3">
            <!-- Input 1: Text Input -->
            <div class="col-md-6">
                <label for="inputCustomer" class="form-label small fw-semibold">Nama Pelanggan / Entitas</label>
                <input type="text" class="form-control form-control-sm" id="inputCustomer" placeholder="Contoh: Budi Santoso" required>
            </div>

            <!-- Input 2: Select Dropdown -->
            <div class="col-md-6">
                <label for="inputCategory" class="form-label small fw-semibold">Kategori Data</label>
                <select class="form-select form-select-sm" id="inputCategory" required>
                    <option value="" selected disabled>-- Pilih Kategori --</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="IoT Sensor">IoT Sensor</option>
                    <option value="Financial">Financial</option>
                </select>
            </div>

            <!-- Input 3: Date Picker -->
            <div class="col-md-4">
                <label for="inputDate" class="form-label small fw-semibold">Tanggal Transaksi</label>
                <input type="date" class="form-control form-control-sm" id="inputDate" required>
            </div>

            <!-- Input 4: Number Input -->
            <div class="col-md-4">
                <label for="inputAmount" class="form-label small fw-semibold">Total Nominal ($)</label>
                <input type="number" class="form-control form-control-sm" id="inputAmount" min="0" step="0.01" placeholder="0.00" required>
            </div>

            <!-- Input 5: Radio Status -->
            <div class="col-md-4">
                <label class="form-label small fw-semibold d-block">Status Transaksi</label>
                <div class="form-check form-check-inline mt-1">
                    <input class="form-check-input" type="radio" name="statusRadio" id="statusCompleted" value="Completed" checked>
                    <label class="form-check-label small" for="statusCompleted">Completed</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="statusRadio" id="statusPending" value="Pending">
                    <label class="form-check-label small" for="statusPending">Pending</label>
                </div>
            </div>

            <!-- Input 6: File Upload (CSV/Doc) -->
            <div class="col-12">
                <label for="inputFile" class="form-label small fw-semibold">Upload Lampiran / Berkas Data (.csv, .pdf)</label>
                <input class="form-control form-control-sm" type="file" id="inputFile" accept=".csv, .pdf">
            </div>

            <!-- Action Buttons -->
            <div class="col-12 text-end mt-4">
                <button type="reset" class="btn btn-light btn-sm me-2">Reset Form</button>
                <button type="submit" class="btn btn-primary btn-sm px-4">
                    <i class="bi bi-save me-1"></i> Simpan Data Log
                </button>
            </div>
        </div>
    </form>
</section>

```

---

### 🔹 Sesi B: Slicing Form Layout Grid & Styling Constraints (45 Menit)

#### 1. Memeriksa Struktur Grid Form:

* Perhatikan penggunaan kelas **`row g-3`** pada form container yang mengatur *gap/spacing* otomatis antar kolom form.
* Kolom input menggunakan pembagian **`col-md-6`** (2 kolom per baris di Desktop) dan **`col-md-4`** (3 kolom per baris di Desktop) agar hemat ruang vertical.

#### 2. Menambahkan Micro-styling pada Form Element:

* Menggunakan kelas Bootstrap **`form-control-sm`** dan **`form-select-sm`** agar ukuran input terlihat proporsional dengan komponen *Data Table* di bawahnya.

---

## 📢 3. Review Progress & Code Review (30 Menit)

Uji hasil slicing komponen form kamu menggunakan browser:

### 📋 Checklist Progress Pertemuan 9:

* [ ] Komponen Form Input Data Collector terpasang rapi di atas/samping Data Table.
* [ ] Menggunakan ragam tipe input (`text`, `select`, `date`, `number`, `radio`, `file`).
* [ ] Setiap elemen `<input>` memiliki elemen `<label>` pendamping yang sesuai.
* [ ] Form bersikap responsif (berubah dari 2/3 kolom di Desktop menjadi 1 kolom penuh di Mobile).

---

## 📖 Tugas Terstruktur / Mandiri (KM & KPT = 4 Jam)

1. Sesuaikan field/kolom input pada form agar **persis sama** dengan tipe data mentah dari proyek dashboard masing-masing.
2. Tambahkan 1 komponen input tipe **Textarea (`<textarea>`)** untuk mencatat "Catatan / Keterangan Tambahan".
3. Commit & Push file `index.html` yang sudah dilengkapi komponen form ke folder `materials/week-09/` di repositori GitHub kamu.

