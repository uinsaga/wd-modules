# 📖 Modul Pertemuan 9

## Data Visualization Engine: Chart.js Integration & Dynamic Chart Rendering

> **Mata Kuliah:** Desain Web & Visualisasi Data
> **Program Studi:** Sains Data
> **Prasyarat:** HTML5, CSS Grid, JavaScript DOM Manipulation, dan Event Handling (Pertemuan 1 – 7)

---

## 🎯 Capaian Pembelajaran

Setelah menyelesaikan modul praktikum ini, mahasiswa diharapkan mampu:

1. **Memahami** konsep render visualisasi grafik berbasis Canvas API dan integrasi library Chart.js via CDN.
2. **Menguasai** struktur konfigurasi Chart.js (`type`, `data`, `labels`, `datasets`, `options`).
3. **Membangun** grafik *Bar Chart* (Pendapatan per Kategori) dan *Line Chart* (Tren Penjualan) secara dinamis dari Array *State* JavaScript.
4. **Menerapkan** reaktivitas visual (*Chart Lifecycle Management* via `chart.update()`) sehingga grafik ter-update otomatis saat data ditambah, dihapus, atau difilter.

---

# 📚 BAGIAN 1 — Teori Dasar & Konsep Utama

## 1.1 HTML5 Canvas API & Visualisasi Data Web

Sebelum adanya library visualisasi, menggambar grafik di web memerlukan manipulasi koordinat piksel menggunakan tag `<canvas>`.

Chart.js adalah library JavaScript berbasis **HTML5 Canvas** yang membungkus pemrosesan grafik tingkat rendah menjadi API deklaratif yang mudah dikonfigurasi oleh *Data Scientist*.

```text
  [ Raw Dataset (Array of Objects) ] ──> ( Map Data ke Labels & Values )
                                                      │
                                                      ▼
                                        [ Chart.js Configuration ]
                                                      │
                                                      ▼
                                       [ HTML5 <canvas> Rendering ]

```

---

## 1.2 Anatomi Konfigurasi Chart.js

Setiap objek grafik di Chart.js dibentuk oleh 5 komponen utama:

```javascript
const config = {
    type: 'bar', // Jenis Grafik: 'bar', 'line', 'pie', 'doughnut'
    data: {
        labels: ['Elektronik', 'Fashion', 'Makanan'], // Sumbu X (Kategori)
        datasets: [{
            label: 'Pendapatan (Rp)',               // Legenda
            data: [625000000, 375000000, 187500000],  // Sumbu Y (Nilai)
            backgroundColor: '#2563eb'                // Styling Warna
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
};

```

---

## 1.3 Siklus Hidup Grafik (Chart Lifecycle & `chart.update()`)

Ketika data pada dashboard bertambah atau dihapus oleh *user*, kita **tidak boleh** menumpuk objek `new Chart()` baru di atas Canvas yang sama karena akan menyebabkan bug memori (*canvas reuse error*).

Pendekatan yang benar adalah **memutasi dataset grafik yang ada**, lalu memanggil metode `.update()`.

```javascript
// Memperbarui data grafik tanpa merusak canvas
myChart.data.labels = dataBaru.map(item => item.kategori);
myChart.data.datasets[0].data = dataBaru.map(item => item.pendapatan);

// Trigger re-render animasi Chart.js
myChart.update();

```

---

# 🛠️ BAGIAN 2 — Praktikum Refactoring Dashboard Visual

> **Target Praktikum:** Mengganti placeholder grafik di Dashboard P7 dengan **Live Interactive Chart.js** yang terhubung langsung dengan *State* data penjualan.

---

### 📋 Langkah 1: Penyesuaian HTML (`index.html`)

Buka file `index.html` dari Pertemuan 7. Tambahkan **CDN Chart.js** pada tag `<head>` dan ganti div `chart-placeholder` dengan elemen `<canvas id="salesChart">`.

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Analisis Penjualan — Chart.js Integration</title>
    <link rel="stylesheet" href="style.css">
    
    <!-- BARU: IMPORT CHART.JS VIA CDN -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
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

        <!-- TABEL DATA & CHART CONTAINER -->
        <main class="main-content">
            <section class="card-box">
                <div class="table-header-flex">
                    <h2>Data Penjualan per Kategori</h2>
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
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody id="tabel-body"></tbody>
                </table>
            </section>

            <!-- BARU: AREA VISUALISASI CHART.JS -->
            <section class="card-box">
                <div class="chart-header-flex">
                    <h2>Visualisasi Pendapatan per Kategori</h2>
                    <div class="chart-controls">
                        <button id="btn-chart-bar" class="btn-chart-type active">Bar</button>
                        <button id="btn-chart-line" class="btn-chart-type">Line</button>
                    </div>
                </div>
                
                <div class="chart-container">
                    <canvas id="salesChart"></canvas>
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

                    <p id="pesan-error" class="error-text"></p>

                    <button type="submit" class="btn-primary">Simpan Transaksi</button>
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

Buka `style.css` dan tambahkan aturan styling untuk Container Canvas dan Tombol Switch Tipe Chart di bagian paling bawah:

```css
/* ============================================================
   STYLING CHART.JS INTEGRATION (P9)
   ============================================================ */
.chart-header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.chart-header-flex h2 {
    margin-bottom: 0;
}

.chart-container {
    position: relative;
    height: 300px;
    width: 100%;
}

.chart-controls {
    display: flex;
    gap: 6px;
}

.btn-chart-type {
    background-color: #e2e8f0;
    color: #475569;
    border: none;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
}

.btn-chart-type.active {
    background-color: #2563eb;
    color: #ffffff;
}

```

---

### 📌 Langkah 3: Menulis Script Integrasi & Reactive Chart Engine (`script.js`)

Buka `script.js` dan perbarui kodenya dengan menambahkan **Inisialisasi Chart.js & Fungsi Reaktivitas Grafik**:

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

const initialDataset = [...datasetPenjualan];

// Variable Global untuk Menyimpan Instance Chart.js
let salesChartInstance = null;
let currentChartType = 'bar';


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

const btnChartBar        = document.getElementById('btn-chart-bar');
const btnChartLine       = document.getElementById('btn-chart-line');


// ============================================================
// 3. FUNGSI HELPER & KALKULASI
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

    const { totalPendapatan } = hitungMetrics(datasetPenjualan);

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


// ============================================================
// 5. CHART.JS ENGINE & REAKTIVITAS VISUAL
// ============================================================
function renderChart(data) {
    const ctx = document.getElementById('salesChart').getContext('2d');

    // Extract Labels (Sumbu X) dan Data Pendapatan (Sumbu Y) via .map()
    const labels = data.map(item => item.kategori);
    const dataPendapatan = data.map(item => item.pendapatan);

    // Jika Chart Instance Sudah Ada: Update Dataset Tanpa Destroy
    if (salesChartInstance) {
        salesChartInstance.config.type = currentChartType;
        salesChartInstance.data.labels = labels;
        salesChartInstance.data.datasets[0].data = dataPendapatan;
        salesChartInstance.update(); // Trigger Re-render Animasi
        return;
    }

    // Jika Pertama Kali Inisialisasi: Buat New Chart Object
    salesChartInstance = new Chart(ctx, {
        type: currentChartType,
        data: {
            labels: labels,
            datasets: [{
                label: 'Pendapatan (Rp)',
                data: dataPendapatan,
                backgroundColor: [
                    'rgba(37, 99, 235, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(139, 92, 246, 0.7)'
                ],
                borderColor: [
                    '#1d4ed8',
                    '#047857',
                    '#b45309',
                    '#b91c1c',
                    '#6d28d9'
                ],
                borderWidth: 1.5,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Pendapatan: ' + formatRupiah(context.raw);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'Rp ' + (value / 1000000) + ' Jt';
                        }
                    }
                }
            }
        }
    });
}

// Fungsi Terpusat untuk Update Seluruh Komponen Dashboard
function updateDashboard() {
    renderTabel(datasetPenjualan);
    renderKPI(datasetPenjualan);
    renderChart(datasetPenjualan); // Reaktif Ke Chart
}


// ============================================================
// 6. EVENT HANDLERS (FORM, HAPUS, SEARCH, RESET, CHART SWITCH)
// ============================================================

// Submit Form
formPenjualan.addEventListener('submit', function (event) {
    event.preventDefault();

    const kategoriVal   = inputKategori.value.trim();
    const jumlahVal     = parseInt(inputJumlah.value);
    const pendapatanVal = parseInt(inputPendapatan.value);

    if (kategoriVal === '' || isNaN(jumlahVal) || isNaN(pendapatanVal)) {
        pesanError.textContent = "❌ Semua field wajib diisi!";
        pesanError.style.display = "block";
        return;
    }

    if (jumlahVal < 1 || pendapatanVal <= 0) {
        pesanError.textContent = "❌ Input angka tidak valid!";
        pesanError.style.display = "block";
        return;
    }

    pesanError.style.display = "none";

    datasetPenjualan.push({
        id: Date.now(),
        kategori: kategoriVal,
        terjual: jumlahVal,
        pendapatan: pendapatanVal
    });

    updateDashboard();

    formPenjualan.reset();
    inputKategori.focus();
});

// Event Delegation Hapus Data
tabelBody.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-hapus')) {
        const targetId = parseInt(event.target.getAttribute('data-id'));
        datasetPenjualan = datasetPenjualan.filter(item => item.id !== targetId);
        updateDashboard();
    }
});

// Live Search Filter (Memfilter Tabel & Chart Secara Bersamaan)
inputSearch.addEventListener('input', function (event) {
    const keyword = event.target.value.toLowerCase().trim();

    const filteredData = datasetPenjualan.filter(item => 
        item.kategori.toLowerCase().includes(keyword)
    );

    renderTabel(filteredData);
    renderChart(filteredData); // Chart menyesuaikan kata kunci pencarian
});

// Reset Data Default
btnReset.addEventListener('click', function () {
    if (confirm("Apakah Anda yakin ingin mengembalikan data ke awal?")) {
        datasetPenjualan = [...initialDataset];
        inputSearch.value = "";
        pesanError.style.display = "none";
        formPenjualan.reset();
        updateDashboard();
    }
});

// Switch Type Chart (Bar vs Line)
btnChartBar.addEventListener('click', function () {
    currentChartType = 'bar';
    btnChartBar.classList.add('active');
    btnChartLine.classList.remove('active');
    
    // Paksa re-destroy & create saat mengubah tipe root chart jika diperlukan
    if(salesChartInstance) salesChartInstance.destroy();
    salesChartInstance = null;
    renderChart(datasetPenjualan);
});

btnChartLine.addEventListener('click', function () {
    currentChartType = 'line';
    btnChartLine.classList.add('active');
    btnChartBar.classList.remove('active');
    
    if(salesChartInstance) salesChartInstance.destroy();
    salesChartInstance = null;
    renderChart(datasetPenjualan);
});


// ============================================================
// 7. INISIALISASI PERTAMA KALI
// ============================================================
updateDashboard();

```

---

# 🚀 BAGIAN 3 — Praktikum Mandiri Mahasiswa

> Kerjakan pengembangan visualisasi grafik berikut pada file project yang telah kamu buat.

---

### 📌 Praktikum 3.1: Menambahkan Visualisasi Grafik Kedua (Pie/Doughnut Chart)

1. Tambahkan canvas kedua pada `index.html` di bawah area grafik pertama untuk menampilkan **Proporsi Terjual (Unit) per Kategori**:

```html
<section class="card-box" style="margin-top: 20px;">
    <h2>Proporsi Unit Terjual (Volume)</h2>
    <div class="chart-container" style="height: 250px;">
        <canvas id="volumeChart"></canvas>
    </div>
</section>

```

2. Buat instance Chart.js kedua bertipe `'doughnut'` pada `script.js` untuk memvisualisasikan atribut `terjual`:

```javascript
let volumeChartInstance = null;

function renderVolumeChart(data) {
    const ctx = document.getElementById('volumeChart').getContext('2d');
    const labels = data.map(item => item.kategori);
    const dataVolume = data.map(item => item.terjual);

    if (volumeChartInstance) {
        volumeChartInstance.data.labels = labels;
        volumeChartInstance.data.datasets[0].data = dataVolume;
        volumeChartInstance.update();
        return;
    }

    volumeChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: dataVolume,
                backgroundColor: ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

```

3. Panggil `renderVolumeChart(datasetPenjualan)` di dalam fungsi utama `updateDashboard()`.

---

### 📌 Praktikum 3.2: Custom Tooltip Formatting

Sesuai kode di Langkah 3, bagian `options.plugins.tooltip.callbacks` telah mengkustomisasi popup tooltip. Modifikasi format tooltip pada Grafik Pendapatan agar menampilkan teks:

`"Total Kontribusi: Rp [Angka] ([Persentase]%)"`.

---

## 🧪 Lembar Analisis & Evaluasi

Tuliskan jawaban dari pertanyaan analisis berikut pada laporan praktikum:

1. **Re-render vs Mutasi Data:** Mengapa memanggil metode `salesChartInstance.update()` jauh lebih efisien daripada membuat objek `new Chart()` baru setiap kali ada data transaksi yang di-inputkan oleh *user*?
2. **Canvas Rendering:** Jelaskan perbedaan mendasar antara elemen `<canvas>` (tempat Chart.js digambar) dengan elemen HTML standar (seperti `<div>` atau `<table>`) dalam hal inspeksi elemen di browser DevTools!
3. **Array Extraction:** Jelaskan peran metode `.map()` pada variabel `labels` dan `dataPendapatan` sebelum dimasukkan ke dalam konfigurasi Chart.js!

---

## 📦 Format Pengumpulan Praktikum

* **Struktur Folder Project:**
```text
[NIM]_[Nama]_P09/
├── index.html
├── style.css
├── script.js
└── Laporan_P09.pdf

```
