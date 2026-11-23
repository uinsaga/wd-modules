# 📖 Modul Pertemuan 10

## Multi-Chart Analytics Dashboard: Visualizing Distribution & Proportions

> **Mata Kuliah:** Desain Web & Visualisasi Data
> **Program Studi:** Sains Data
> **Prasyarat:** HTML5, CSS Grid, JS DOM, dan Chart.js Integration (Pertemuan 1 – 9)

---

## 🎯 Capaian Pembelajaran

Setelah menyelesaikan modul praktikum ini, mahasiswa diharapkan mampu:

1. **Memahami** perbedaan penggunaan jenis grafik (*Bar Chart* untuk komparasi nilai nominal vs *Doughnut/Pie Chart* untuk komposisi/proporsi persentase).
2. **Mengubah dan mengonfigurasi** multiple Chart.js canvas dalam satu halaman dashboard.
3. **Mengimplementasikan** *Filter Control* sederhana yang mengubah data pada **Tabel dan Kedua Grafik** secara bersamaan (*Synced Visuals*).
4. **Menganalisis** informasi/insight data yang dihasilkan dari kombinasi visualisasi grafik (*Volume Sales vs Revenue Contribution*).

---

# 📚 BAGIAN 1 — Teori Dasar: Memilih Jenis Visualisasi Data

Dalam Sains Data, memilih jenis grafik yang tepat sangat menentukan efektivitas penyampaian informasi kepada pemangku kepentingan (*stakeholders*).

```text
               ┌── Bar Chart ──────────> Membandingkan Nilai Nominal antar Kategori
               │                         (Contoh: Total Pendapatan Rupiah)
  Data Analytics 
               │
               └── Doughnut/Pie Chart ─> Menampilkan Proporsi / Kontribusi (%)
                                         (Contoh: Pangsa Pasar Volume Terjual)

```

| Jenis Chart | Kapan Digunakan? | Atribut Data yang Cocok |
| --- | --- | --- |
| **Bar Chart** | Membandingkan besaran nominal antar kategori | `pendapatan` (Rupiah) |
| **Doughnut / Pie Chart** | Menunjukkan bagian dari keseluruhan (Proporsi 100%) | `terjual` (Unit/Volume) |
| **Line Chart** | Memperlihatkan tren kontinu sepanjang waktu | `tanggal` / `bulan` |

---

# 🛠️ BAGIAN 2 — Praktikum Multi-Chart Dashboard

> **Target Praktikum:** Menampilkan dua visualisasi sekaligus (**Bar Chart Pendapatan** dan **Doughnut Chart Proporsi Volume**) yang tersinkronisasi otomatis dengan Search Filter Kategori.

---

### 📋 Langkah 1: Penyesuaian HTML (`index.html`)

Buka `index.html` dari Pertemuan 9. Di bagian area grafik, buat dua kolom untuk menampung **dua Canvas Chart**.

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Analisis Penjualan — Multi-Chart Analytics</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>

    <div class="dashboard-wrapper">

        <!-- HEADER -->
        <header id="main-header">
            <h1>📊 Dashboard Analisis Penjualan</h1>
            <p class="subtitle">Multi-Chart Visual Analytics — Program Studi Sains Data</p>
        </header>

        <!-- KARTU KPI METRICS -->
        <section class="metrics-section">
            <div class="metric-card">
                <h3>Total Pendapatan</h3>
                <p class="metric-value" id="kpi-pendapatan">Rp 0</p>
            </div>
            <div class="metric-card">
                <h3>Total Pesanan</h3>
                <p class="metric-value" id="kpi-pesanan">0</p>
            </div>
            <div class="metric-card">
                <h3>Rata-rata Nilai Pesanan</h3>
                <p class="metric-value" id="kpi-rata-rata">Rp 0</p>
            </div>
        </section>

        <!-- MAIN CONTENT AREA -->
        <main class="main-content">
            
            <!-- AREA MULTI-CHART (2 GRAFIK BERDAMPINGAN) -->
            <section class="card-box">
                <h2>Visualisasi Analytics</h2>
                <div class="charts-grid">
                    <div class="chart-box">
                        <h3>Pendapatan per Kategori (Rp)</h3>
                        <div class="chart-container">
                            <canvas id="barChart"></canvas>
                        </div>
                    </div>
                    <div class="chart-box">
                        <h3>Proporsi Volume Terjual (Unit)</h3>
                        <div class="chart-container">
                            <canvas id="doughnutChart"></canvas>
                        </div>
                    </div>
                </div>
            </section>

            <!-- TABEL DATA -->
            <section class="card-box">
                <div class="table-header-flex">
                    <h2>Detail Data Penjualan</h2>
                    <div class="filter-box">
                        <input type="text" id="input-search" placeholder="🔍 Filter Kategori...">
                    </div>
                </div>

                <table class="data-table">
                    <thead>
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
            </section>

        </main>

        <!-- SIDEBAR FORM INPUT -->
        <aside class="sidebar-content">
            <section class="card-box">
                <h2>Tambah Data Penjualan</h2>
                <form id="form-penjualan">
                    <div class="form-group">
                        <label for="kategori">Kategori Produk:</label>
                        <input type="text" id="kategori" placeholder="Contoh: Otomotif" required>
                    </div>
                    <div class="form-group">
                        <label for="jumlah">Jumlah Terjual:</label>
                        <input type="number" id="jumlah" placeholder="Contoh: 1500" required>
                    </div>
                    <div class="form-group">
                        <label for="pendapatan">Total Pendapatan (Rp):</label>
                        <input type="number" id="pendapatan" placeholder="Contoh: 250000000" required>
                    </div>

                    <button type="submit" class="btn-primary">Simpan Transaksi</button>
                </form>
            </section>
        </aside>

    </div>

    <script src="script.js"></script>
</body>
</html>

```

---

### 📌 Langkah 2: Tambahan CSS Layout Grid Chart (`style.css`)

Tambahkan CSS berikut di paling bawah file `style.css` agar kedua grafik tampil rapi berdampingan menggunakan CSS Grid:

```css
/* ============================================================
   MULTI-CHART LAYOUT (P10)
   ============================================================ */
.charts-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 20px;
    margin-top: 10px;
}

.chart-box h3 {
    font-size: 0.9rem;
    color: #475569;
    margin-bottom: 10px;
    text-align: center;
}

.chart-container {
    position: relative;
    height: 260px;
    width: 100%;
}

.table-header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.filter-box input {
    padding: 6px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font-size: 0.85rem;
}

@media (max-width: 900px) {
    .charts-grid {
        grid-template-columns: 1fr;
    }
}

```

---

### 📌 Langkah 3: Menulis Script Multi-Chart (`script.js`)

Buat logika pengolahan dataset dan render **dua Chart sekaligus**:

```javascript
// ============================================================
// 1. DATASET UTAMA
// ============================================================
let datasetPenjualan = [
    { id: 101, kategori: "Elektronik", terjual: 2150, pendapatan: 625000000 },
    { id: 102, kategori: "Fashion", terjual: 3420, pendapatan: 375000000 },
    { id: 103, kategori: "Makanan & Minuman", terjual: 1862, pendapatan: 187500000 },
    { id: 104, kategori: "Kesehatan", terjual: 1000, pendapatan: 62500000 }
];

// Variable Global untuk Instance Chart
let barChartInstance = null;
let doughnutChartInstance = null;


// ============================================================
// 2. DOM SELECTION
// ============================================================
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


// ============================================================
// 3. FUNGSI RENDER TABEL & KPI
// ============================================================
function renderTabelAndKPI(data) {
    const totalPendapatan = data.reduce((acc, curr) => acc + curr.pendapatan, 0);
    const totalPesanan    = data.reduce((acc, curr) => acc + curr.terjual, 0);
    const rataRata        = totalPesanan > 0 ? Math.round(totalPendapatan / totalPesanan) : 0;

    kpiPendapatan.textContent = formatRupiah(totalPendapatan);
    kpiPesanan.textContent    = totalPesanan.toLocaleString('id-ID');
    kpiRataRata.textContent   = formatRupiah(rataRata);

    tabelBody.innerHTML = "";
    data.forEach((item, index) => {
        const kontribusi = totalPendapatan > 0 ? ((item.pendapatan / totalPendapatan) * 100).toFixed(1) + "%" : "0%";
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.kategori}</td>
            <td>${item.terjual.toLocaleString('id-ID')}</td>
            <td>${item.pendapatan.toLocaleString('id-ID')}</td>
            <td><strong>${kontribusi}</strong></td>
            <td><button class="btn-hapus" data-id="${item.id}">Hapus</button></td>
        `;
        tabelBody.appendChild(tr);
    });
}


// ============================================================
// 4. FUNGSI RENDER MULTI-CHART (BAR & DOUGHNUT)
// ============================================================
function renderCharts(data) {
    const labels = data.map(item => item.kategori);
    const dataPendapatan = data.map(item => item.pendapatan);
    const dataVolume = data.map(item => item.terjual);

    const colors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

    // --- A. BAR CHART (PENDAPATAN) ---
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
                datasets: [{
                    label: 'Pendapatan (Rp)',
                    data: dataPendapatan,
                    backgroundColor: '#2563eb',
                    borderRadius: 4
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    // --- B. DOUGHNUT CHART (PROPORSI VOLUME) ---
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
                datasets: [{
                    data: dataVolume,
                    backgroundColor: colors
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }
}


// ============================================================
// 5. UPDATE DASHBOARD UTAMA
// ============================================================
function updateDashboard() {
    const keyword = inputSearch.value.toLowerCase().trim();
    const filteredData = datasetPenjualan.filter(item => 
        item.kategori.toLowerCase().includes(keyword)
    );

    renderTabelAndKPI(filteredData);
    renderCharts(filteredData);
}


// ============================================================
// 6. EVENT LISTENERS
// ============================================================

// Submit Form Tambah Data
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

// Hapus Data
tabelBody.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-hapus')) {
        const id = parseInt(event.target.getAttribute('data-id'));
        datasetPenjualan = datasetPenjualan.filter(item => item.id !== id);
        updateDashboard();
    }
});

// Live Filter
inputSearch.addEventListener('input', updateDashboard);


// ============================================================
// 7. INIT
// ============================================================
updateDashboard();

```

---

# 🚀 BAGIAN 3 — Praktikum Mandiri Mahasiswa

> Kerjakan tugas analisis visual berikut pada file project yang telah kamu buat.

---

### 📌 Praktikum 3.1: Menganalisis Disparitas Data (Insight Analysis)

Perhatikan dua grafik yang tampil di dashboard kamu:

1. **Bar Chart:** Menunjukkan Kategori Mana yang Menghasilkan *Uang Paling Banyak*.
2. **Doughnut Chart:** Menunjukkan Kategori Mana yang Menjual *Unit Paling Banyak*.

**Tugas:**

Tambahkan 1 data baru berikut melalui form:

* **Kategori:** Aksesoris Kecil
* **Jumlah Terjual:** 10.000 (Unit Sangat Banyak)
* **Total Pendapatan:** Rp 20.000.000 (Pendapatan Kecil)

**Amati Perubahan Visual:**

* Bagaimana perubahan bentuk pada **Bar Chart** vs **Doughnut Chart**?
* Mengapa kategori `Aksesoris Kecil` mendominasi Doughnut Chart tetapi sangat kecil di Bar Chart? Tuliskan analisis singkat mengenai perbedaan konsep *Volume Sales* vs *Revenue Contribution*!

---

## 🧪 Lembar Analisis & Evaluasi

1. **Efektivitas Visualisasi:** Menurut Anda, mengapa data *Nominal Pendapatan* lebih cocok disajikan dengan Bar Chart, sedangkan data *Volume Terjual* lebih cocok disajikan dengan Doughnut Chart?
2. **Sinkronisasi Filter:** Saat Anda mengetik kata kunci pada kotak filter, jelaskan alur bagaimana fungsi `updateDashboard()` dapat memperbarui Tabel, Bar Chart, dan Doughnut Chart secara bersamaan!

---

## 📦 Format Pengumpulan Praktikum

* **Struktur Folder Project:**
```text
[NIM]_[Nama]_P10/
├── index.html
├── style.css
├── script.js
└── Laporan_P10.pdf

```
