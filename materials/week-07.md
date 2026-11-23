# 📖 Modul Pertemuan 7

## Event Handling, Dynamic Form Interaction & Reactive Dashboard State Management

> **Mata Kuliah:** Desain Web & Visualisasi Data
> **Program Studi:** Sains Data
> **Prasyarat:** HTML5, CSS Grid, dan JavaScript Fundamentals (Pertemuan 1 – 6)

---

## 🎯 Capaian Pembelajaran

Setelah menyelesaikan modul praktikum ini, mahasiswa diharapkan mampu:

1. **Menguasai** mekanisme *Event Handling* (`click`, `submit`, `input`) dan *Event Object* (`event.preventDefault()`).
2. **Menerapkan** teknik *Event Delegation* untuk menangani interaksi elemen HTML yang dibuat secara dinamis.
3. **Membangun** sistem validasi form interaktif (*sanitization* input dan pencegahan error angka/teks kosong).
4. **Mengimplementasikan** operasi **CRUD Sederhana pada Memory/State** (Tambah, Hapus, Filter/Search data) yang secara otomatis memperbarui tabel dan nilai Kartu KPI secara *real-time*.

---

# 📚 BAGIAN 1 — Teori Dasar & Konsep Utama

## 1.1 Mekanisme Event Handling & Event Object

Web Dashboard yang interaktif bekerja berdasarkan **Event-Driven Programming**: browser mendengarkan tindakan *user* (seperti mengklik tombol atau mengirimkan form), lalu mengeksekusi fungsi JavaScript tertentu (*event handler*).

```text
  [ User Interaction ] ──> ( Trigger Event: 'submit' / 'click' )
                                      │
                                      ▼
                        [ JavaScript Event Listener ]
                                      │
                        ( preventDefault & Read Input )
                                      │
                                      ▼
                      [ Update Array State & Re-render UI ]

```

### Sintaks Utama Event Listener:

```javascript
const tombol = document.querySelector('#btn-simpan');

tombol.addEventListener('click', function(event) {
    // event object membawa informasi tentang aksi user
    console.log("Tombol diklik pada koordinat:", event.clientX, event.clientY);
});

```

---

## 1.2 Mengapa `event.preventDefault()` Sangat Krusial?

Secara *default*, tag `<form>` pada HTML akan mengirimkan data ke URL dan **me-refresh/reload seluruh halaman web** saat tombol submit diklik.

Pada aplikasi web modern (Single Page Application / Dashboard Analytics), perilaku reload ini harus dihentikan agar data di memori JavaScript tidak hilang.

```javascript
const formPenjualan = document.querySelector('#form-penjualan');

formPenjualan.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman
    
    // Logika pemrosesan data dilakukan di sini tanpa reload...
});

```

---

## 1.3 Event Delegation: Menangani Elemen Dinamis

Saat kita menambahkan tombol **"Hapus"** pada setiap baris tabel secara dinamis via JavaScript, kita **tidak bisa** memasang `addEventListener` secara langsung pada tombol tersebut saat halaman pertama kali dimuat (karena elemennya belum ada di DOM).

Solusinya adalah **Event Delegation**: memasang satu *event listener* pada elemen induknya yang sudah ada sejak awal (`<tbody id="tabel-body">`), lalu mendeteksi apakah elemen yang diklik oleh *user* adalah tombol hapus.

```javascript
// Memasang listener di elemen parent (tbody)
tabelBody.addEventListener('click', function(event) {
    // Cek apakah yang diklik memiliki class 'btn-hapus'
    if (event.target.classList.contains('btn-hapus')) {
        const idData = parseInt(event.target.getAttribute('data-id'));
        hapusData(idData); // Panggil fungsi hapus
    }
});

```

---

# 🛠️ BAGIAN 2 — Praktikum Refactoring Dashboard Interaktif

> **Target Praktikum:** Menghidupkan Form Tambah Data, Fitur Hapus Baris Data, Fitur Filter/Search Kategori, serta Validasi Form pada Dashboard Pertemuan 6.

---

### 📋 Langkah 1: Penyesuaian HTML (`index.html`)

Buka file `index.html` dari Pertemuan 6. Kita tambahkan **Search Bar**, **Elemen Pesan Error pada Form**, dan **Header Kolom "Aksi"** pada tabel.

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Analisis Penjualan — Interactive State</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="dashboard-wrapper">

        <!-- HEADER -->
        <header id="main-header">
            <h1 id="judul-dashboard">📊 Dashboard Analisis Penjualan</h1>
            <p class="subtitle" id="sub-judul">Ringkasan Performa &amp; Input Data Real-Time — Program Studi Sains Data</p>
        </header>

        <!-- KARTU KPI METRICS -->
        <section class="metrics-section">
            <div class="metric-card" id="card-pendapatan">
                <h3>Total Pendapatan</h3>
                <p class="metric-value" id="kpi-pendapatan">Rp 0</p>
                <p class="metric-change positive">▲ Data Real-Time</p>
            </div>
            <div class="metric-card" id="card-pesanan">
                <h3>Total Pesanan</h3>
                <p class="metric-value" id="kpi-pesanan">0</p>
                <p class="metric-change positive">▲ Data Real-Time</p>
            </div>
            <div class="metric-card" id="card-rata-rata">
                <h3>Rata-rata Nilai Pesanan</h3>
                <p class="metric-value" id="kpi-rata-rata">Rp 0</p>
                <p class="metric-change negative">▼ Data Real-Time</p>
            </div>
        </section>

        <!-- TABEL DATA & CHART PLACEHOLDER -->
        <main class="main-content">
            <section class="card-box">
                <div class="table-header-flex">
                    <h2>Data Penjualan per Kategori</h2>
                    <!-- BARU: SEARCH / FILTER INPUT -->
                    <div class="search-box">
                        <input type="text" id="input-search" placeholder="🔍 Cari Kategori...">
                    </div>
                    <span id="total-record-badge" class="badge-info">0 Records</span>
                </div>

                <table class="data-table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Kategori Produk</th>
                            <th>Terjual</th>
                            <th>Pendapatan (Rp)</th>
                            <th>Kontribusi (%)</th>
                            <th>Aksi</th> <!-- BARU: KOLOM AKSI -->
                        </tr>
                    </thead>
                    <tbody id="tabel-body"></tbody>
                </table>
            </section>

            <section class="card-box">
                <h2>Visualisasi Tren Penjualan</h2>
                <div class="chart-placeholder" id="area-chart">
                    📈 [ Area Grafik Chart.js / Plotly — Pertemuan Depan ]
                </div>
            </section>
        </main>

        <!-- SIDEBAR FORM INPUT -->
        <aside class="sidebar-content">
            <section class="card-box">
                <h2>Tambah Data Penjualan</h2>
                <form id="form-penjualan">
                    <div class="form-group">
                        <label for="kategori">Kategori Produk:</label>
                        <input type="text" id="kategori" placeholder="Contoh: Otomotif">
                    </div>
                    <div class="form-group">
                        <label for="jumlah">Jumlah Terjual:</label>
                        <input type="number" id="jumlah" placeholder="Contoh: 1500">
                    </div>
                    <div class="form-group">
                        <label for="pendapatan">Total Pendapatan (Rp):</label>
                        <input type="number" id="pendapatan" placeholder="Contoh: 250000000">
                    </div>

                    <!-- BARU: PESAN ERROR VALIDASI -->
                    <p id="pesan-error" class="error-text"></p>

                    <button type="submit" class="btn-primary">Simpan Transaksi</button>
                    <!-- BARU: TOMBOL RESET STATE -->
                    <button type="button" id="btn-reset" class="btn-secondary">Reset Data Default</button>
                </form>
            </section>
        </aside>

    </div>

    <script src="script.js"></script>
</body>
</html>

```

---

### 📌 Langkah 2: Tambahan CSS (`style.css`)

Buka `style.css` dan tambahkan aturan styling untuk Search Box, Pesan Error, Tombol Hapus, dan Tombol Reset di bagian paling bawah:

```css
/* ============================================================
   STYLING EVENT HANDLING & INTERACTION (P7)
   ============================================================ */
.search-box input {
    padding: 6px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font-size: 0.85rem;
    outline: none;
}

.search-box input:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
}

.error-text {
    color: #ef4444;
    font-size: 0.85rem;
    font-weight: bold;
    margin-bottom: 12px;
    display: none; /* Sembunyi secara default */
}

.btn-hapus {
    background-color: #ef4444;
    color: #ffffff;
    border: none;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.78rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
}

.btn-hapus:hover {
    background-color: #dc2626;
}

.btn-secondary {
    width: 100%;
    background-color: #64748b;
    color: #ffffff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    font-size: 0.9rem;
    margin-top: 10px;
}

.btn-secondary:hover {
    background-color: #475569;
}

```

---

### 📌 Langkah 3: Menulis Script Interaktif Lengkap (`script.js`)

Ganti atau perbarui isi `script.js` kamu dengan menerapkan **Event Handling, Form Validation, Event Delegation, dan Dynamic State Mutation**:

```javascript
// ============================================================
// 1. STATE INITIAL DATASET
// ============================================================
let datasetPenjualan = [
    { id: 101, kategori: "Elektronik", terjual: 2150, pendapatan: 625000000 },
    { id: 102, kategori: "Fashion", terjual: 3420, pendapatan: 375000000 },
    { id: 103, kategori: "Makanan & Minuman", terjual: 1862, pendapatan: 187500000 },
    { id: 104, kategori: "Kesehatan", terjual: 1000, pendapatan: 62500000 }
];

// Cadangan data awal untuk fitur Reset
const initialDataset = [...datasetPenjualan];


// ============================================================
// 2. DOM SELECTION
// ============================================================
const formPenjualan    = document.getElementById('form-penjualan');
const inputKategori     = document.getElementById('kategori');
const inputJumlah       = document.getElementById('jumlah');
const inputPendapatan   = document.getElementById('pendapatan');
const pesanError        = document.getElementById('pesan-error');

const tabelBody          = document.getElementById('tabel-body');
const kpiPendapatan      = document.getElementById('kpi-pendapatan');
const kpiPesanan         = document.getElementById('kpi-pesanan');
const kpiRataRata        = document.getElementById('kpi-rata-rata');
const totalRecordBadge   = document.getElementById('total-record-badge');
const inputSearch        = document.getElementById('input-search');
const btnReset          = document.getElementById('btn-reset');


// ============================================================
// 3. FUNGSI HELPER & KALKULASI (FUNCTIONAL PROCESSING)
// ============================================================
const formatRupiah = (angka) => "Rp " + angka.toLocaleString('id-ID');

function hitungMetrics(data) {
    const totalPendapatan = data.reduce((acc, curr) => acc + curr.pendapatan, 0);
    const totalPesanan    = data.reduce((acc, curr) => acc + curr.terjual, 0);
    const rataRata        = totalPesanan > 0 ? Math.round(totalPendapatan / totalPesanan) : 0;

    return { totalPendapatan, totalPesanan, rataRata };
}


// ============================================================
// 4. FUNGSI RENDER TABEL & KPI
// ============================================================
function renderTabel(data) {
    tabelBody.innerHTML = "";

    if (data.length === 0) {
        tabelBody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#94a3b8;">Data tidak ditemukan.</td></tr>`;
        totalRecordBadge.textContent = "0 Records";
        return;
    }

    const { totalPendapatan } = hitungMetrics(datasetPenjualan); // Menggunakan total global untuk kontribusi

    const processedData = data.map((item, index) => {
        const kontribusiVal = totalPendapatan > 0 ? ((item.pendapatan / totalPendapatan) * 100).toFixed(1) : 0;
        return {
            ...item,
            no: index + 1,
            kontribusi: kontribusiVal + "%"
        };
    });

    processedData.forEach(item => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${item.no}</td>
            <td>${item.kategori}</td>
            <td>${item.terjual.toLocaleString('id-ID')}</td>
            <td>${item.pendapatan.toLocaleString('id-ID')}</td>
            <td><strong>${item.kontribusi}</strong></td>
            <td>
                <button class="btn-hapus" data-id="${item.id}">Hapus</button>
            </td>
        `;

        tabelBody.appendChild(tr);
    });

    totalRecordBadge.textContent = `${data.length} Record Kategori`;
}

function renderKPI(data) {
    const metrics = hitungMetrics(data);

    kpiPendapatan.textContent = formatRupiah(metrics.totalPendapatan);
    kpiPesanan.textContent    = metrics.totalPesanan.toLocaleString('id-ID');
    kpiRataRata.textContent   = formatRupiah(metrics.rataRata);
}

function updateDashboard() {
    renderTabel(datasetPenjualan);
    renderKPI(datasetPenjualan);
}


// ============================================================
// 5. EVENT HANDLER 1: SUBMIT FORM & VALIDASI DATA
// ============================================================
formPenjualan.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah reload halaman

    const kategoriVal   = inputKategori.value.trim();
    const jumlahVal     = parseInt(inputJumlah.value);
    const pendapatanVal = parseInt(inputPendapatan.value);

    // --- VALIDASI FORM ---
    if (kategoriVal === '' || isNaN(jumlahVal) || isNaN(pendapatanVal)) {
        pesanError.textContent = "❌ Semua field wajib diisi!";
        pesanError.style.display = "block";
        return;
    }

    if (jumlahVal < 1) {
        pesanError.textContent = "❌ Jumlah terjual minimal 1!";
        pesanError.style.display = "block";
        return;
    }

    if (pendapatanVal <= 0) {
        pesanError.textContent = "❌ Pendapatan harus lebih besar dari Rp 0!";
        pesanError.style.display = "block";
        return;
    }

    // Jika lolos validasi: sembunyikan error
    pesanError.style.display = "none";

    // TAMBAH DATA KE STATE DATASET
    const dataBaru = {
        id: Date.now(), // ID Unik
        kategori: kategoriVal,
        terjual: jumlahVal,
        pendapatan: pendapatanVal
    };

    datasetPenjualan.push(dataBaru);

    // RE-RENDER DASHBOARD
    updateDashboard();

    // RESET INPUT FORM
    formPenjualan.reset();
    inputKategori.focus();
});


// ============================================================
// 6. EVENT HANDLER 2: EVENT DELEGATION HAPUS BARIS
// ============================================================
tabelBody.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-hapus')) {
        const targetId = parseInt(event.target.getAttribute('data-id'));

        // Filter membuang item ber-ID sesuai yang diklik
        datasetPenjualan = datasetPenjualan.filter(item => item.id !== targetId);

        // RE-RENDER DASHBOARD
        updateDashboard();
    }
});


// ============================================================
// 7. EVENT HANDLER 3: LIVE SEARCH / FILTER KATEGORI ('input' Event)
// ============================================================
inputSearch.addEventListener('input', function (event) {
    const keyword = event.target.value.toLowerCase().trim();

    const filteredData = datasetPenjualan.filter(item => 
        item.kategori.toLowerCase().includes(keyword)
    );

    // Render tabel dengan data hasil pencarian
    renderTabel(filteredData);
});


// ============================================================
// 8. EVENT HANDLER 4: RESET DATA DEFAULT
// ============================================================
btnReset.addEventListener('click', function () {
    if (confirm("Apakah Anda yakin ingin mengembalikan data ke awal?")) {
        datasetPenjualan = [...initialDataset];
        inputSearch.value = "";
        pesanError.style.display = "none";
        formPenjualan.reset();
        updateDashboard();
    }
});


// ============================================================
// 9. INISIALISASI PERTAMA KALI
// ============================================================
updateDashboard();

```

---

# 🚀 BAGIAN 3 — Praktikum Mandiri Mahasiswa

> Kerjakan pengembangan fitur interaktif berikut pada file project yang telah kamu buat.

---

### 📌 Praktikum 3.1: Fitur Highlight Transaksi Terbesar (Top Performer)

1. Buat fungsi baru bernama `highlightTopPerformer()` di dalam `script.js` yang bertugas mencari transaksi dengan pendapatan terbesar di dalam `datasetPenjualan`.
2. Setelah baris dirender oleh `renderTabel()`, cari elemen `<tr>` yang mewakili transaksi terbesar tersebut, lalu tambahkan class `.row-top-performer` menggunakan `classList.add()`.

**Petunjuk Implementasi:**

```javascript
function highlightTopPerformer() {
    if (datasetPenjualan.length === 0) return;

    // Cari pendapatan tertinggi menggunakan Math.max & .map
    const maxPendapatan = Math.max(...datasetPenjualan.map(i => i.pendapatan));

    // Iterasi baris tabel DOM untuk menambahkan class
    const barisTabel = tabelBody.querySelectorAll('tr');
    datasetPenjualan.forEach((item, index) => {
        if (item.pendapatan === maxPendapatan && barisTabel[index]) {
            barisTabel[index].classList.add('row-top-performer');
        }
    });
}

```

3. Panggil fungsi `highlightTopPerformer()` setiap kali fungsi `updateDashboard()` dijalankan.

---

### 📌 Praktikum 3.2: Validasi Real-Time pada Input Form

1. Tambahkan Event Listener bertipe `'input'` pada elemen `#kategori` untuk memastikan huruf pertama kategori yang diketik *user* otomatis menjadi **Huruf Kapital** (*Auto-Capitalize*).
2. Tambahkan pemeriksaan jika user menginputkan nama kategori yang **sudah ada di dalam dataset** (duplikat), tampilkan peringatan: `"❌ Kategori produk sudah ada!"` dan cegah submit form.

---

## 🧪 Lembar Analisis & Evaluasi

Tuliskan jawaban dari pertanyaan analisis berikut pada laporan praktikum:

1. **`event.preventDefault()`:** Apa yang akan terjadi pada data yang baru di-input oleh *user* jika perintah `event.preventDefault()` pada event listener form dihilangkan? Jelaskan alasannya!
2. **Keunggulan Event Delegation:** Mengapa kita memasang event listener tombol hapus pada elemen `<tbody id="tabel-body">` daripada memasangnya langsung pada setiap elemen tombol `.btn-hapus`?
3. **Reaktivitas State:** Saat sebuah data dihapus via `.filter()`, jelaskan bagaimana Kartu KPI Total Pendapatan dan Total Pesanan dapat terhitung ulang secara otomatis tanpa kita perlu menulis kode pengurangan angka manual!

---

## 📦 Format Pengumpulan Praktikum

* **Struktur Folder Project:**
```text
[NIM]_[Nama]_P07/
├── index.html
├── style.css
├── script.js
└── Laporan_P07.pdf

```
