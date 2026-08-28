# 📖 Pertemuan 13: Visualisasi Data Interaktif dengan Chart.js (Data-Driven Visuals)

**Bobot SKS:** 3 SKS (150 Menit Luring / Studio)  
**Metode:** Briefing Teori (30 Min) ➔ Studio Live Coding Visualisasi Chart (90 Min) ➔ Review & Code Inspection (30 Min)

---

## 📌 Capaian Pembelajaran (Sub-CPMK)
* Mahasiswa mampu mengintegrasikan pustaka visualisasi grafik **Chart.js CDN** ke dalam aplikasi web dashboard.
* Mahasiswa mampu menyajikan data mentah dalam bentuk visualisasi grafik (*Bar Chart* dan *Doughnut/Pie Chart*) yang interaktif.
* Mahasiswa mampu menghubungkan *Data State* JavaScript dengan objek *Chart instance* agar grafik terbarui (*auto-update*) secara dinamis.

---

## 💡 1. Teori Dasar & Konsep (30 Menit)

### 🔹 1.1 Anatomi Chart.js dalam Canvas HTML5
Grafik digital di dalam peramban modern diolah menggunakan elemen `<canvas>` HTML5. Pustaka **Chart.js** mempermudah pengolahan grafik berbasis vektor dengan performa tinggi dan dukungan interaksi *hover tooltip* secara otomatis.

```text
 ┌──────────────────────────┐      Array Aggregation    ┌──────────────────────────┐
 │ Data State (Array)       │ ────────────────────────► │ Chart Dataset Object     │
 │ [ {amount, category},...] │                          │ labels: ['E-Com', ...]   │
 └──────────────────────────┘                          │ data:   [350, 120, ...] │
                                                        └────────────┬─────────────┘
                                                                     │
                                                           myChart.update()
                                                                     │
                                                                     ▼
 ┌────────────────────────────────────────────────────────────────────────────────┐
 │ HTML5 Canvas Element (<canvas id="barChart"></canvas>)                         │
 │ [ Visual Rendering Graphic: Bar & Pie Charts with Interactive Hover Tooltips ] │
 └────────────────────────────────────────────────────────────────────────────────┘

```

#### Komponen Kunci Chart.js:

* `<canvas id="myChart">` : Elemen pembungkus tempat grafik digambar oleh browser.
* `new Chart(ctx, config)` : Konstruktor objek untuk menginisialisasi konfigurasi tipe grafik, data, dan opsi gaya visual.
* `chartInstance.update()` : Metode penting untuk memperbarui tampilan grafik saat terjadi perubahan pada data dasar (*state*).

---

## 🛠️ 2. Hands-on Studio & Live Coding (90 Menit)

### 🔹 Sesi A: Setup CDN Canvas & Inisialisasi Grafik (30 Menit)

Buat folder `materials/week-13/`, lalu persiapkan file `index.html` dan `script.js`.

#### 1. Tambahkan CDN Chart.js pada `index.html`:

Letakkan tag `<script>` CDN berikut di dalam `<head>` atau di atas tag `</body>`:

```html
<!-- Chart.js CDN -->
<script src="[https://cdn.jsdelivr.net/npm/chart.js](https://cdn.jsdelivr.net/npm/chart.js)"></script>

```

#### 2. Tambahkan Canvas Element pada Layout Dashboard (`index.html`):

Gantikan area placeholder visualisasi dengan dua wadah canvas berikut:

```html
<!-- SECTION: CHARTS GROUP -->
<section class="row g-3 mb-4">
    <!-- Bar Chart Container -->
    <div class="col-12 col-lg-8">
        <div class="card border-0 shadow-sm p-4 h-100">
            <h5 class="fw-bold fs-6 mb-3">Tren Pendapatan per Kategori Data</h5>
            <div>
                <canvas id="barChartCanvas"></canvas>
            </div>
        </div>
    </div>
    
    <!-- Doughnut Chart Container -->
    <div class="col-12 col-lg-4">
        <div class="card border-0 shadow-sm p-4 h-100">
            <h5 class="fw-bold fs-6 mb-3">Distribusi Status Transaksi</h5>
            <div>
                <canvas id="doughnutChartCanvas"></canvas>
            </div>
        </div>
    </div>
</section>

```

---

### 🔹 Sesi B: Live Coding JavaScript Render & Dynamic Update (60 Menit)

Buka file **`script.js`** dan susun logika pengolahan data serta inisialisasi grafik berikut:

```javascript
// 1. Data State Global
let transactionData = [
    { id: '#TRX-9801', date: '2026-08-28', customer: 'Budi Santoso', category: 'E-Commerce', status: 'Completed', amount: 350.00 },
    { id: '#TRX-9802', date: '2026-08-28', customer: 'Siti Aminah', category: 'Healthcare', status: 'Pending', amount: 120.50 },
    { id: '#TRX-9803', date: '2026-08-27', customer: 'Dewi Lestari', category: 'IoT Sensor', status: 'Failed', amount: 0.00 },
    { id: '#TRX-9804', date: '2026-08-26', customer: 'Andi Pratama', category: 'E-Commerce', status: 'Completed', amount: 500.00 }
];

// Variable Penyimpan Instance Chart
let barChartInstance = null;
let doughnutChartInstance = null;

// 2. Inisialisasi Chart saat DOM Siap
document.addEventListener('DOMContentLoaded', () => {
    initCharts();
});

function initCharts() {
    // A. Inisialisasi Bar Chart (Pendapatan per Kategori)
    const ctxBar = document.getElementById('barChartCanvas').getContext('2d');
    barChartInstance = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['E-Commerce', 'Healthcare', 'IoT Sensor', 'Financial'],
            datasets: [{
                label: 'Total Nominal ($)',
                data: [850, 120.5, 0, 0],
                backgroundColor: 'rgba(13, 110, 253, 0.75)',
                borderColor: '#0d6efd',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // B. Inisialisasi Doughnut Chart (Distribusi Status)
    const ctxDoughnut = document.getElementById('doughnutChartCanvas').getContext('2d');
    doughnutChartInstance = new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Pending', 'Failed'],
            datasets: [{
                data: [2, 1, 1],
                backgroundColor: ['#198754', '#ffc107', '#dc3545']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}

// 3. Fungsi Agregasi & Update Grafik Dinamis (Dipanggil Setiap Kali Data Berubah)
function updateCharts() {
    if (!barChartInstance || !doughnutChartInstance) return;

    // Hitung Ulang Total Nominal per Kategori
    const categoryTotals = { 'E-Commerce': 0, 'Healthcare': 0, 'IoT Sensor': 0, 'Financial': 0 };
    // Hitung Ulang Frekuensi Status
    const statusCounts = { 'Completed': 0, 'Pending': 0, 'Failed': 0 };

    transactionData.forEach(item => {
        if (categoryTotals[item.category] !== undefined) {
            categoryTotals[item.category] += parseFloat(item.amount);
        }
        if (statusCounts[item.status] !== undefined) {
            statusCounts[item.status] += 1;
        }
    });

    // Update Data Dataset Bar Chart
    barChartInstance.data.datasets[0].data = Object.values(categoryTotals);
    barChartInstance.update();

    // Update Data Dataset Doughnut Chart
    doughnutChartInstance.data.datasets[0].data = Object.values(statusCounts);
    doughnutChartInstance.update();
}

```

*Setiap kali penambahan atau penghapusan data dilakukan di fungsi `renderTable()`, panggil metode `updateCharts()` di bawahnya.*

---

## 📢 3. Review Progress & Code Review (30 Menit)

Uji interaktivitas visual grafik pada browser kamu:

### 📋 Checklist Progress Pertemuan 13:

* [ ] Pustaka Chart.js CDN terhubung dan tidak menghasilkan pesan galat (*error*) di konsol peramban.
* [ ] Bar Chart dan Doughnut Chart tampil rapi dan responsif di dalam kontainer kartu.
* [ ] Sorotan *hover tooltip* berfungsi saat kursor diarahkan ke batang atau iris diagram.
* [ ] Setiap penambahan baris data baru dari formulir secara otomatis memperbarui (*update animation*) bentuk grafik secara dinamis.

---

## 📖 Tugas Terstruktur / Mandiri (KM & KPT = 4 Jam)

1. Kustomisasi warna batang grafik agar selaras dengan skema warna *Design Tokens* yang telah disepakati di file Figma awal.
2. Tambahkan 1 diagram garis (*Line Chart*) baru untuk memperlihatkan tren transaksi berdasarkan variabel tanggal.
3. Commit & Push file `index.html` dan `script.js` ke folder `materials/week-13/` di repositori GitHub kamu.

