# 📖 Modul Pertemuan 6

## Advanced JS Data Structures, Functional Array Processing & Complete DOM Manipulation

> **Mata Kuliah:** Desain Web & Visualisasi Data
> **Program Studi:** Sains Data
> **Prasyarat:** HTML5, CSS Flexbox, dan CSS Grid (Pertemuan 1 – 5)

---

## 🎯 Capaian Pembelajaran

Setelah menyelesaikan modul praktikum ini, mahasiswa diharapkan mampu:

1. **Menguasai** penggunaan variabel (`const`/`let`), tipe data kompleks (*Array of Objects*), dan *Arrow Functions*.
2. **Menerapkan** metode pemrosesan array tingkat lanjut (`.map()`, `.filter()`, `.reduce()`) untuk agregasi data statistik di browser.
3. **Menguasai** seluruh metode *DOM Selection* (`getElementById`, `querySelector`, `querySelectorAll`) dan *DOM Manipulation* (`textContent`, `innerHTML`, `classList`, `createElement`, `appendChild`).
4. **Membangun** fungsi *Renderer* dan *Data Calculator* dinamis untuk merefaktor Dashboard P5 menjadi antarmuka berbasis data (*Data-Driven UI*).

---

# 📚 BAGIAN 1 — Teori Dasar & Konsep Utama

## 1.1 Arsitektur Data-Driven UI pada Web Dashboard

Di dalam pengembangan *web analytics*, antarmuka pengguna (UI) tidak boleh ditulis secara manual (*hardcoded*). UI harus menjadi cerminan dari **State Data** yang tersimpan di memori.

```text
  [ Raw Dataset (Array of Objects) ] 
                 │
                 ▼  (Diolah via Higher-Order Functions: reduce, map, filter)
  [ Stat Metrics (Sum, Mean, %) ] 
                 │
                 ▼  (Disuntikkan via DOM Manipulation API)
  [ UI Dashboard (Tabel & Kartu KPI) ]

```

---

## 1.2 Struktur Data Kompleks: Array of Objects

Satu baris data transaksi diwakili oleh **Object** `{ key: value }`, sedangkan seluruh *table dataset* diwakili oleh **Array of Objects**.

```javascript
// Dataset Penjualan (Array of Objects)
const datasetPenjualan = [
    { id: 101, kategori: "Elektronik", terjual: 2150, pendapatan: 625000000 },
    { id: 102, kategori: "Fashion", terjual: 3420, pendapatan: 375000000 },
    { id: 103, kategori: "Makanan & Minuman", terjual: 1862, pendapatan: 187500000 },
    { id: 104, kategori: "Kesehatan", terjual: 1000, pendapatan: 62500000 }
];

```

---

## 1.3 Functional Array Processing (`map`, `filter`, `reduce`)

Metode pemrosesan array ini digunakan untuk mengolah data secara efisien tanpa perlu menuliskan *for-loop* konvensional.

### 1. `.reduce()` — Agregasi Data (Menghitung Total Sum)

Mengakumulasi seluruh nilai di dalam array menjadi satu nilai tunggal (seperti fungsi `SUM()` di SQL/Excel).

```javascript
// Menghitung Total Pendapatan
const totalPendapatan = datasetPenjualan.reduce((accumulator, item) => {
    return accumulator + item.pendapatan;
}, 0);

console.log(totalPendapatan); // Output: 1250000000

```

### 2. `.map()` — Transformasi Data & Kalkulasi Persentase

Mengubah bentuk array menjadi array baru (misal: menambahkan kalkulasi persentase kontribusi otomatis).

```javascript
// Menambahkan properti kontribusi persentase secara dinamis
const datasetDenganKontribusi = datasetPenjualan.map(item => {
    const persentase = ((item.pendapatan / totalPendapatan) * 100).toFixed(1) + '%';
    return {
        ...item, // Spread operator
        kontribusi: persentase
    };
});

```

### 3. `.filter()` — Penyaringan Data (Data Subsetting)

Memfilter baris data berdasarkan kriteria tertentu (seperti `WHERE` di SQL).

```javascript
// Filter transaksi dengan pendapatan di atas 200 Juta
const transaksiBesar = datasetPenjualan.filter(item => item.pendapatan > 200000000);

```

---

## 1.4 DOM Selection & Manipulation API (Lengkap)

| Metode / Properti | Fungsi | Contoh Penggunaan |
| --- | --- | --- |
| `document.getElementById('id')` | Menangkap 1 elemen unik ber-ID | `document.getElementById('kpi-pendapatan')` |
| `document.querySelector('selector')` | Menangkap 1 elemen pertama via CSS Selector | `document.querySelector('.metric-card h3')` |
| `document.querySelectorAll('selector')` | Menangkap seluruh elemen via CSS Selector (NodeList) | `document.querySelectorAll('.data-table tr')` |
| `element.textContent` | Mengubah/membaca teks murni (Aman dari XSS) | `el.textContent = "Rp 1.000.000"` |
| `element.innerHTML` | Mengubah/menyisipkan struktur elemen HTML | `el.innerHTML = "<span>Active</span>"` |
| `element.classList` | Mengelola Class CSS (`add`, `remove`, `toggle`) | `el.classList.add('updated')` |
| `document.createElement('tag')` | Membuat tag HTML baru di memori | `document.createElement('tr')` |
| `parent.appendChild(child)` | Menyisipkan elemen anak ke dalam elemen induk | `tabelBody.appendChild(trBaru)` |

---

# 🛠️ BAGIAN 2 — Praktikum Refactoring Dashboard

> **Target Praktikum:** Mengubah Dashboard Pertemuan 5 dari komponen statis menjadi **Data-Driven UI** penuh. Semua angka KPI dan baris tabel dihitung & dirender otomatis dari Array Script JS.

---

### 📋 Langkah 1: Penyesuaian HTML (`index.html`)

Buka file `index.html` dari Pertemuan 5. Tambahkan ID penanda pada Kartu KPI dan kosongkan isi `<tbody>`.

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Analisis Penjualan — JS Data Engine</title>
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
                <p class="metric-change positive" id="change-pendapatan">▲ Data Real-Time</p>
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
                        </tr>
                    </thead>
                    <!-- ELEMEN TBODY DIKOSONGKAN -->
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
                    <button type="submit" class="btn-primary">Simpan Transaksi</button>
                </form>
            </section>
        </aside>

    </div>

    <!-- SCRIPT JAVASCRIPT -->
    <script src="script.js"></script>
</body>
</html>

```

---

### 📌 Langkah 2: Tambahan CSS (`style.css`)

Buka `style.css` P5 dan tambahkan styling dinamis berikut di paling bawah:

```css
/* ============================================================
   STYLING MANIPULASI DOM & INTERAKSI (P6)
   ============================================================ */
.table-header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.table-header-flex h2 {
    margin-bottom: 0;
}

.badge-info {
    background-color: #2563eb;
    color: #ffffff;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: bold;
}

.metric-card.highlight {
    background-color: #f0fdf4;
    border-left-color: #22c55e;
    transition: all 0.3s ease;
}

.row-top-performer {
    background-color: #f0f9ff !important;
    font-weight: 600;
}

```

---

### 📌 Langkah 3: Menulis Script Logika & Rendering Engine (`script.js`)

Buat file `script.js` dan susun kodenya dengan menerapkan **Functional Array Processing & DOM Manipulation**:

```javascript
// ============================================================
// 1. DATASET UTAMA (ARRAY OF OBJECTS)
// ============================================================
const datasetPenjualan = [
    { id: 101, kategori: "Elektronik", terjual: 2150, pendapatan: 625000000 },
    { id: 102, kategori: "Fashion", terjual: 3420, pendapatan: 375000000 },
    { id: 103, kategori: "Makanan & Minuman", terjual: 1862, pendapatan: 187500000 },
    { id: 104, kategori: "Kesehatan", terjual: 1000, pendapatan: 62500000 }
];


// ============================================================
// 2. DOM SELECTION
// ============================================================
const tabelBody        = document.getElementById('tabel-body');
const kpiPendapatan    = document.getElementById('kpi-pendapatan');
const kpiPesanan       = document.getElementById('kpi-pesanan');
const kpiRataRata      = document.getElementById('kpi-rata-rata');
const totalRecordBadge = document.getElementById('total-record-badge');
const areaChart        = document.getElementById('area-chart');


// ============================================================
// 3. FUNGSI HELPER (FORMATTER)
// ============================================================
const formatRupiah = (angka) => "Rp " + angka.toLocaleString('id-ID');


// ============================================================
// 4. FUNGSI KALKULASI METRICS (FUNCTIONAL PROCESSING)
// ============================================================
function hitungMetrics(data) {
    // A. Menghitung Total Pendapatan dengan .reduce()
    const totalPendapatan = data.reduce((acc, curr) => acc + curr.pendapatan, 0);

    // B. Menghitung Total Pesanan/Terjual dengan .reduce()
    const totalPesanan = data.reduce((acc, curr) => acc + curr.terjual, 0);

    // C. Menghitung Rata-rata Nilai Pesanan
    const rataRata = totalPesanan > 0 ? Math.round(totalPendapatan / totalPesanan) : 0;

    return {
        totalPendapatan,
        totalPesanan,
        rataRata
    };
}


// ============================================================
// 5. FUNGSI RENDER TABEL (TRANSFORMASI MAP & DOM APPEND)
// ============================================================
function renderTabel(data) {
    // Bersihkan tabel
    tabelBody.innerHTML = "";

    // Hitung total pendapatan untuk kalkulasi persentase
    const { totalPendapatan } = hitungMetrics(data);

    // Transformasi data menggunakan .map() untuk menghitung kontribusi
    const processedData = data.map((item, index) => {
        const kontribusiVal = totalPendapatan > 0 ? ((item.pendapatan / totalPendapatan) * 100).toFixed(1) : 0;
        return {
            ...item,
            no: index + 1,
            kontribusi: kontribusiVal + "%"
        };
    });

    // Render baris ke DOM
    processedData.forEach(item => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${item.no}</td>
            <td>${item.kategori}</td>
            <td>${item.terjual.toLocaleString('id-ID')}</td>
            <td>${item.pendapatan.toLocaleString('id-ID')}</td>
            <td><strong>${item.kontribusi}</strong></td>
        `;

        tabelBody.appendChild(tr);
    });

    // Update Badge Total Record
    totalRecordBadge.textContent = `${data.length} Record Kategori`;
}


// ============================================================
// 6. FUNGSI RENDER KARTU KPI
// ============================================================
function renderKPI(data) {
    const metrics = hitungMetrics(data);

    // Inject teks ke DOM
    kpiPendapatan.textContent = formatRupiah(metrics.totalPendapatan);
    kpiPesanan.textContent    = metrics.totalPesanan.toLocaleString('id-ID');
    kpiRataRata.textContent   = formatRupiah(metrics.rataRata);

    // Manipulasi CSS Class
    document.getElementById('card-pendapatan').classList.add('highlight');
}


// ============================================================
// 7. INISIALISASI ENGINE DASHBOARD
// ============================================================
function initDashboard() {
    renderTabel(datasetPenjualan);
    renderKPI(datasetPenjualan);

    // Update Placeholder Chart secara Dinamis
    areaChart.innerHTML = `
        <div style="text-align: center;">
            <p style="color: #2563eb; font-weight: bold;">⚡ Engine Visualisasi Aktif</p>
            <span class="badge-info">Ready for Chart.js Integration</span>
        </div>
    `;
}

// Jalankan Engine
initDashboard();

```

---

# 🚀 BAGIAN 3 — Praktikum Mandiri Mahasiswa

> Lanjutkan pengkodean pada file `script.js` untuk mengimplementasikan fungsi pengolahan data mandiri berikut.

---

### 📌 Praktikum 3.1: Membuat Fungsi Mutasi Data (`tambahTransaksi`)

1. Buat fungsi baru bernama `tambahTransaksi(kategori, terjual, pendapatan)` di bagian bawah `script.js`:

```javascript
function tambahTransaksi(namaKategori, jumlahTerjual, nominalPendapatan) {
    // 1. Buat ID unik berdasarkan timestamp
    const idBaru = Date.now();

    // 2. Buat Objek Transaksi
    const transaksiBaru = {
        id: idBaru,
        kategori: namaKategori,
        terjual: parseInt(jumlahTerjual),
        pendapatan: parseInt(nominalPendapatan)
    };

    // 3. Masukkan ke Array Dataset via .push()
    datasetPenjualan.push(transaksiBaru);

    // 4. Render ulang seluruh Dashboard agar Tampilan Sinkron
    initDashboard();
}

```

2. Panggil fungsi tersebut 2 kali di baris paling bawah `script.js` untuk mensimulasikan masuknya data transaksi baru:

```javascript
// Simulasi penambahan data transaksi baru
tambahTransaksi("Otomotif & Aksesoris", 1200, 140000000);
tambahTransaksi("Peralatan Rumah Tangga", 850, 95000000);

```

3. Buka `index.html` di browser. Amati bagaimana persentase kontribusi di setiap baris tabel **otomatis terhitung ulang secara presisi** dan Kartu KPI ikut ter-update secara otomatis.

---

### 📌 Praktikum 3.2: Filtering Data Tingkat Lanjut (`filterKategoriBesar`)

1. Buat fungsi baru di `script.js` yang memanfaatkan `.filter()` untuk menampilkan hanya kategori yang pendapatannya di atas 150 Juta Rupiah:

```javascript
function filterKategoriBesar(batasPendapatan = 150000000) {
    const hasilFilter = datasetPenjualan.filter(item => item.pendapatan >= batasPendapatan);
    
    // Render ulang tabel & KPI hanya dengan data yang lolos filter
    renderTabel(hasilFilter);
    renderKPI(hasilFilter);
}

```

---

## 🧪 Lembar Analisis & Evaluasi

Tuliskan jawaban dari pertanyaan analisis berikut pada laporan praktikum:

1. **Efisiensi `.reduce()` vs Manual Loop:** Jelaskan bagaimana metode `.reduce()` bekerja pada fungsi `hitungMetrics()`! Mengapa pendekatan *functional programming* ini lebih disukai dalam pengolahan data di web modern daripada menggunakan `for` loop biasa?
2. **Reaktivitas Persentase:** Saat fungsi `tambahTransaksi()` dipanggil, mengapa persentase kontribusi pada baris-baris lama di tabel ikut berubah nilainya secara otomatis? Jelaskan alur eksekusi kodenya!
3. **Data Immutability vs Mutation:** Apa perbedaan antara metode `.push()` yang mengubah array asli dengan metode `.map()` / `.filter()` yang menghasilkan array baru?

---

## 📦 Format Pengumpulan Praktikum

* **Struktur Folder Project:**
```text
[NIM]_[Nama]_P06/
├── index.html
├── style.css
├── script.js
└── Laporan_P06.pdf

```
