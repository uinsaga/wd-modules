# 📖 Modul Pertemuan 11

## Pengenalan Bootstrap 5: Grid System, Components & Refactoring Dashboard

> **Mata Kuliah:** Desain Web & Visualisasi Data
> **Program Studi:** Sains Data
> **Prasyarat:** HTML5, CSS Grid, JS DOM, dan Multi-Chart Analytics (Pertemuan 1 – 10)

---

## 🎯 Capaian Pembelajaran

Setelah menyelesaikan modul praktikum ini, mahasiswa diharapkan mampu:

1. **Memahami** konsep *CSS Framework* dan cara mengintegrasikan Bootstrap 5 via CDN.
2. **Menguasai** logika *Bootstrap Grid System 12 Kolom* (`container`, `row`, `col-*`) serta utilitas responsif.
3. **Menggunakan** komponen-komponen dasar Bootstrap 5 (*Cards, Tables, Forms, Badges, Buttons, Navbars*).
4. **Merefaktor** Dashboard Analytics Pertemuan 10 menggunakan Bootstrap 5 agar antarmuka menjadi rapi dan berspesifikasi standar industri.

---

# 📚 BAGIAN 1 — Teori Dasar: Konsep & Grid System Bootstrap 5

## 1.1 Apa itu CSS Framework & Bootstrap 5?

Sebelumnya, kita menulis ratusan baris CSS secara manual di `style.css` untuk mengatur margin, warna, border, dan grid layout.

**Bootstrap 5** adalah *framework* CSS populer yang menyediakan ribuan kelas utilitas dan komponen antarmuka yang sudah disiapkan (*pre-styled*).

Dengan Bootstrap:

* **Tidak perlu menulis CSS manual dari nol** untuk komponen standar.
* **Tampilan langsung rapi & konsisten** di semua perangkat (Desktop, Tablet, HP).
* **Efisiensi Waktu:** Fokus utama mahasiswa Sains Data bergeser ke logika data & visualisasi, bukan pusing memikirkan styling CSS.

---

## 1.2 Konsep Grid System 12 Kolom

Bootstrap membagi lebar layar menjadi **12 Kolom Imajiner**. Tata letak disusun menggunakan hirarki wajib:

$$\text{container} \longrightarrow \text{row} \longrightarrow \text{col-*} \quad (\text{Total Lebar} = 12)$$

```text
[ .container / .container-fluid ]
  └── [ .row ]
        ├── [ .col-md-8 ] ──> Mengambil 8 dari 12 kolom (Area Utama)
        └── [ .col-md-4 ] ──> Mengambil 4 dari 12 kolom (Sidebar)

```

### Breakpoint Responsif Bootstrap:

* `col-` : Layar HP (< 576px)
* `col-md-` : Layar Tablet (≥ 768px)
* `col-lg-` : Layar Laptop/Desktop (≥ 992px)

---

## 1.3 Pengenalan Class-Class Utama Bootstrap 5

| Kategori | Nama Class Bootstrap 5 | Fungsi |
| --- | --- | --- |
| **Spacing** | `mb-3`, `py-2`, `px-4`, `g-3` | Mengatur Margin (`m`), Padding (`p`), dan Gap (`g`) |
| **Typography** | `fw-bold`, `text-muted`, `text-center` | Mengatur tebal huruf, warna teks redup, dan posisi teks |
| **Colors** | `bg-primary`, `text-success`, `bg-light` | Pewarnaan tema (Primary=Biru, Success=Hijau, Danger=Merah) |
| **Card** | `card`, `card-header`, `card-body` | Membungkus komponen dalam kotak bernuansa bersih |
| **Table** | `table`, `table-striped`, `table-hover` | Styling tabel data secara otomatis |
| **Form** | `form-control`, `form-label` | Styling input form yang modern & responsif |

---

# 🛠️ BAGIAN 2 — Praktikum Dasar: Latihan Komponen Bootstrap

> **Latihan Mandiri:** Sebelum merefaktor seluruh dashboard, cobalah membuat komponen-komponen dasar Bootstrap ini pada file latihan terpisah (`latihan_bootstrap.html`) untuk memahami cara kerja class-nya.

### 📋 Langkah Latihan 1: Pemasangan CDN Bootstrap 5

Buat file `latihan_bootstrap.html` dan hubungkan dengan CDN Bootstrap 5:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan Komponen Bootstrap 5</title>
    <!-- CSS Bootstrap 5 via CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4">

    <div class="container">
        <!-- LATIHAN 1: KARTU METRIK KPI -->
        <h4 class="mb-3">1. Contoh Kartu KPI Bootstrap</h4>
        <div class="row g-3 mb-4">
            <div class="col-md-4">
                <div class="card border-0 shadow-sm border-start border-primary border-4">
                    <div class="card-body">
                        <span class="text-muted small">Total Pendapatan</span>
                        <h3 class="fw-bold text-primary m-0">Rp 125.000.000</h3>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 shadow-sm border-start border-success border-4">
                    <div class="card-body">
                        <span class="text-muted small">Total Terjual</span>
                        <h3 class="fw-bold text-success m-0">1.500 Unit</h3>
                    </div>
                </div>
            </div>
        </div>

        <!-- LATIHAN 2: TABEL BOOTSTRAP -->
        <h4 class="mb-3">2. Contoh Tabel Bootstrap</h4>
        <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-0">
                <table class="table table-hover table-striped mb-0">
                    <thead class="table-primary">
                        <tr>
                            <th>No</th>
                            <th>Kategori</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Elektronik</td>
                            <td><span class="badge bg-success">Tinggi</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</body>
</html>

```

---

# 🚀 BAGIAN 3 — Praktikum Refactoring Dashboard P10 ke Bootstrap 5

> **Target Utama:** Sekarang, terapkan pemahaman komponen di atas untuk merefaktor seluruh struktur `index.html` dari Pertemuan 10 ke dalam Bootstrap 5 Grid System!

---

### 📋 Langkah 1: Refactoring HTML (`index.html`)

Ganti seluruh isi `index.html` dari Pertemuan 10 dengan struktur Bootstrap 5 berikut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Analisis Penjualan — Bootstrap 5</title>
    
    <!-- BOOTSTRAP 5 CSS CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- CHART.JS CDN -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-light">

    <!-- NAVBAR BOOTSTRAP -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
        <div class="container-fluid px-4">
            <a class="navbar-brand fw-bold" href="#">📊 Sales Analytics Engine</a>
            <span class="navbar-text text-white-50">Program Studi Sains Data</span>
        </div>
    </nav>

    <!-- CONTAINER UTAMA -->
    <div class="container-fluid px-4">

        <!-- KARTU KPI METRICS (GRID 3 KOLOM) -->
        <div class="row g-3 mb-4">
            <div class="col-md-4">
                <div class="card border-0 shadow-sm border-start border-primary border-4">
                    <div class="card-body">
                        <h6 class="text-muted fw-normal mb-1">Total Pendapatan</h6>
                        <h3 class="fw-bold text-primary mb-0" id="kpi-pendapatan">Rp 0</h3>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 shadow-sm border-start border-success border-4">
                    <div class="card-body">
                        <h6 class="text-muted fw-normal mb-1">Total Pesanan</h6>
                        <h3 class="fw-bold text-success mb-0" id="kpi-pesanan">0</h3>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 shadow-sm border-start border-warning border-4">
                    <div class="card-body">
                        <h6 class="text-muted fw-normal mb-1">Rata-rata Nilai Pesanan</h6>
                        <h3 class="fw-bold text-warning mb-0" id="kpi-rata-rata">Rp 0</h3>
                    </div>
                </div>
            </div>
        </div>

        <!-- MAIN LAYOUT: MULTI-CHART + TABEL (KIRI) vs SIDEBAR FORM (KANAN) -->
        <div class="row g-4">
            
            <!-- AREA KONTEN UTAMA (8 KOLOM) -->
            <div class="col-lg-8">
                
                <!-- MULTI-CHART SECTION -->
                <div class="card border-0 shadow-sm mb-4">
                    <div class="card-header bg-white py-3">
                        <h5 class="card-title fw-bold text-dark m-0">Visualisasi Analytics</h5>
                    </div>
                    <div class="card-body">
                        <div class="row g-3">
                            <div class="col-md-7">
                                <h6 class="text-center text-muted mb-2">Pendapatan per Kategori (Rp)</h6>
                                <div style="height: 240px; position: relative;">
                                    <canvas id="barChart"></canvas>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <h6 class="text-center text-muted mb-2">Proporsi Volume Terjual</h6>
                                <div style="height: 240px; position: relative;">
                                    <canvas id="doughnutChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- TABEL DATA SECTION -->
                <div class="card border-0 shadow-sm">
                    <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                        <h5 class="card-title fw-bold text-dark m-0">Detail Data Penjualan</h5>
                        <div class="w-50">
                            <input type="text" id="input-search" class="form-control form-control-sm" placeholder="🔍 Filter Kategori...">
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-hover table-striped align-middle mb-0">
                                <thead class="table-primary">
                                    <tr>
                                        <th>No</th>
                                        <th>Kategori Produk</th>
                                        <th>Terjual (Unit)</th>
                                        <th>Pendapatan (Rp)</th>
                                        <th>Kontribusi (%)</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody id="tabel-body"></tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

            <!-- AREA SIDEBAR FORM INPUT (4 KOLOM) -->
            <div class="col-lg-4">
                <div class="card border-0 shadow-sm">
                    <div class="card-header bg-white py-3">
                        <h5 class="card-title fw-bold text-dark m-0">Tambah Data Penjualan</h5>
                    </div>
                    <div class="card-body">
                        <form id="form-penjualan">
                            <div class="mb-3">
                                <label for="kategori" class="form-label fw-semibold">Kategori Produk</label>
                                <input type="text" id="kategori" class="form-control" placeholder="Contoh: Otomotif" required>
                            </div>
                            <div class="mb-3">
                                <label for="jumlah" class="form-label fw-semibold">Jumlah Terjual</label>
                                <input type="number" id="jumlah" class="form-control" placeholder="Contoh: 1500" required>
                            </div>
                            <div class="mb-3">
                                <label for="pendapatan" class="form-label fw-semibold">Total Pendapatan (Rp)</label>
                                <input type="number" id="pendapatan" class="form-control" placeholder="Contoh: 250000000" required>
                            </div>

                            <button type="submit" class="btn btn-success w-100 fw-bold py-2">Simpan Transaksi</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    </div>

    <!-- BOOTSTRAP 5 JS BUNDLE CDN -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- SCRIPT LOGIKA JAVASCRIPT -->
    <script src="script.js"></script>
</body>
</html>

```

---

### 📋 Langkah 2: Menyesuaikan Script Logika (`script.js`)

Sesuaikan sedikit pembuatan tombol hapus pada `script.js` agar menggunakan komponen tombol Bootstrap (`btn btn-sm btn-danger`):

```javascript
// ============================================================
// DATASET & LOGIKA CHART SAMA SEPERTI P10
// PERBEDAAN HANYA PADA TEMPLATE ROW TABEL BOOTSTRAP
// ============================================================
let datasetPenjualan = [
    { id: 101, kategori: "Elektronik", terjual: 2150, pendapatan: 625000000 },
    { id: 102, kategori: "Fashion", terjual: 3420, pendapatan: 375000000 },
    { id: 103, kategori: "Makanan & Minuman", terjual: 1862, pendapatan: 187500000 },
    { id: 104, kategori: "Kesehatan", terjual: 1000, pendapatan: 62500000 }
];

let barChartInstance = null;
let doughnutChartInstance = null;

const formPenjualan  = document.getElementById('form-penjualan');
const inputKategori   = document.getElementById('kategori');
const inputJumlah     = document.getElementById('jumlah');
const inputPendapatan = document.getElementById('pendapatan');

const tabelBody       = document.getElementById('tabel-body');
const kpiPendapatan   = document.getElementById('kpi-pendapatan');
const kpiPesanan      = document.getElementById('kpi-pesanan');
const kpiRataRata     = document.getElementById('kpi-rata-rata');
const inputSearch     = document.getElementById('input-search');

const formatRupiah = (angka) => "Rp " + angka.toLocaleString('id-ID');

function renderTabelAndKPI(data) {
    const totalPendapatan = data.reduce((acc, curr) => acc + curr.pendapatan, 0);
    const totalPesanan    = data.reduce((acc, curr) => acc + curr.terjual, 0);
    const rataRata        = totalPesanan > 0 ? Math.round(totalPendapatan / totalPesanan) : 0;

    kpiPendapatan.textContent = formatRupiah(totalPendapatan);
    kpiPesanan.textContent    = totalPesanan.toLocaleString('id-ID');
    kpiRataRata.textContent   = formatRupiah(rataRata);

    tabelBody.innerHTML = "";
    if (data.length === 0) {
        tabelBody.innerHTML = `<tr><td colspan="6" class="text-center text-muted py-3">Data tidak ditemukan.</td></tr>`;
        return;
    }

    data.forEach((item, index) => {
        const kontribusi = totalPendapatan > 0 ? ((item.pendapatan / totalPendapatan) * 100).toFixed(1) + "%" : "0%";
        const tr = document.createElement('tr');
        
        // Menggunakan Badge Bootstrap & Button Bootstrap
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td class="fw-semibold">${item.kategori}</td>
            <td>${item.terjual.toLocaleString('id-ID')}</td>
            <td>${item.pendapatan.toLocaleString('id-ID')}</td>
            <td><span class="badge bg-info text-dark">${kontribusi}</span></td>
            <td><button class="btn btn-sm btn-danger btn-hapus" data-id="${item.id}">Hapus</button></td>
        `;
        tabelBody.appendChild(tr);
    });
}

function renderCharts(data) {
    const labels = data.map(item => item.kategori);
    const dataPendapatan = data.map(item => item.pendapatan);
    const dataVolume = data.map(item => item.terjual);
    const colors = ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#6f42c1', '#d63384'];

    // BAR CHART
    const ctxBar = document.getElementById('barChart').getContext('2d');
    if (barChartInstance) {
        barChartInstance.data.labels = labels;
        barChartInstance.data.datasets[0].data = dataPendapatan;
        barChartInstance.update();
    } else {
        barChartInstance = new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{ label: 'Pendapatan (Rp)', data: dataPendapatan, backgroundColor: '#0d6efd', borderRadius: 4 }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    // DOUGHNUT CHART
    const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
    if (doughnutChartInstance) {
        doughnutChartInstance.data.labels = labels;
        doughnutChartInstance.data.datasets[0].data = dataVolume;
        doughnutChartInstance.update();
    } else {
        doughnutChartInstance = new Chart(ctxDoughnut, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{ data: dataVolume, backgroundColor: colors }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }
}

function updateDashboard() {
    const keyword = inputSearch.value.toLowerCase().trim();
    const filteredData = datasetPenjualan.filter(item => 
        item.kategori.toLowerCase().includes(keyword)
    );

    renderTabelAndKPI(filteredData);
    renderCharts(filteredData);
}

formPenjualan.addEventListener('submit', function (event) {
    event.preventDefault();
    datasetPenjualan.push({
        id: Date.now(),
        kategori: inputKategori.value.trim(),
        terjual: parseInt(inputJumlah.value),
        pendapatan: parseInt(inputPendapatan.value)
    });
    updateDashboard();
    formPenjualan.reset();
});

tabelBody.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-hapus')) {
        const id = parseInt(event.target.getAttribute('data-id'));
        datasetPenjualan = datasetPenjualan.filter(item => item.id !== id);
        updateDashboard();
    }
});

inputSearch.addEventListener('input', updateDashboard);

updateDashboard();

```

---

## 🧪 Lembar Analisis & Evaluasi

1. **Efisiensi CSS Framework:** Setelah merefaktor HTML menggunakan Bootstrap 5, seberapa banyak kode CSS di `style.css` yang bisa Anda kurangi? Mengapa demikian?
2. **Responsivitas Grid:** Coba kecilkan jendela browser Anda sampai ukuran layar HP. Bagaimana Bootstrap mengatur posisi kolom `col-lg-8` dan `col-lg-4` secara otomatis?

---

## 📦 Format Pengumpulan Praktikum

* **Struktur Folder Project:**
```text
[NIM]_[Nama]_P11/
├── latihan_bootstrap.html
├── index.html
├── script.js
└── Laporan_P11.pdf

```
