Modul Pertemuan 12

Dashboard Polish: Chart.js Formatting & Multi-Chart Composition

Mata Kuliah: Desain Web & Visualisasi Data
Program Studi: Sains Data (Semester 3)
Prasyarat: Bootstrap 5 Refactoring (Pertemuan 11), Chart.js Dasar (Pertemuan 10)
Estimasi Waktu: 150 menit (3 SKS)

---

🎯 Capaian Pembelajaran

Setelah menyelesaikan modul praktikum ini, mahasiswa diharapkan mampu:

1. Menyelaraskan visual Chart.js dengan tema Bootstrap 5 menggunakan CSS variables (--bs-primary, --bs-success, dst.).
2. Memformat angka pada tooltip dan sumbu Y menjadi format Rupiah (dan ringkas untuk axis) agar mudah dibaca audiens non-teknis.
3. Menambahkan chart ketiga (Line Chart dengan dual Y-axis) dan menyusun tiga chart secara rapi menggunakan Bootstrap Grid.
4. Menerapkan konsistensi visual di seluruh dashboard (warna, format, legend, tooltip) serta menangani edge case (data kosong, label panjang).
5. Menghasilkan dashboard berstandar portofolio sebagai bekal menuju proyek UAS.

📌 Posisi dalam Semester:
P10 (Chart.js dasar) → P11 (Bootstrap refactor) → P12 (Polish: styling + multi-chart) → P13 (Fetch API) → UAS

---

📚 BAGIAN 1 — Teori: Chart

1.1 Mengapa Polish Itu Penting?

Dashboard dengan data benar tapi tampilan berantakan tidak akan dipakai. Sebaliknya, dashboard yang rapi dan mudah dibaca akan bercerita sendiri. Di dunia kerja, "polish" adalah pembeda antara tugas kuliah dan portofolio profesional.

Formula polish di Chart.js ada 3 pilar:

```text
[ Chart Default ] 
    │
    ├── 🎨 Palette Warna     → Sinkron dengan tema Bootstrap
    ├── 🔢 Format Angka      → Tooltip & Axis dalam Rupiah/ribuan
    └── 🧩 Elemen Visual     → Legend, gridline, tooltip, radius
```

1.2 Sinkronisasi Warna dengan Bootstrap 5

Bootstrap 5 menyimpan warna temanya di CSS Variables. Kita bisa membaca nilai ini dari JavaScript via getComputedStyle(), lalu meneruskannya ke Chart.js. Hasilnya: warna chart otomatis ikut tema Bootstrap — jika suatu saat tema diubah, chart ikut berubah.

```javascript
const rootStyles = getComputedStyle(document.documentElement);
const bootstrapColors = {
    primary: rootStyles.getPropertyValue('--bs-primary').trim(),  // #0d6efd
    success: rootStyles.getPropertyValue('--bs-success').trim(),  // #198754
    warning: rootStyles.getPropertyValue('--bs-warning').trim(),  // #ffc107
    danger:  rootStyles.getPropertyValue('--bs-danger').trim(),   // #dc3545
    info:    rootStyles.getPropertyValue('--bs-info').trim(),     // #0dcaf0
    dark:    rootStyles.getPropertyValue('--bs-dark').trim()
};
```

1.3 Format Angka: Dua Tingkat Keterbacaan

Konteks Format Contoh
Tooltip (detail saat hover) Lengkap Rp 625.000.000
Axis Tick (label sumbu Y) Ringkas (agar tidak padat) Rp 625 Jt

Menampilkan Rp 625.000.000 di semua tick sumbu Y pada chart kecil = berantakan. Karena itu kita butuh dua fungsi formatter: satu lengkap untuk tooltip, satu ringkas untuk axis.

```javascript
// Format Lengkap — untuk tooltip & KPI cards
const formatRupiah = (nilai) => 'Rp ' + nilai.toLocaleString('id-ID');

// Format Ringkas — untuk axis ticks
function formatRupiahSingkat(nilai) {
    if (nilai >= 1_000_000_000) return 'Rp ' + (nilai / 1_000_000_000).toFixed(1).replace('.0', '') + ' M';
    if (nilai >= 1_000_000)     return 'Rp ' + (nilai / 1_000_000).toFixed(0) + ' Jt';
    if (nilai >= 1_000)         return 'Rp ' + (nilai / 1_000).toFixed(0) + ' Rb';
    return 'Rp ' + nilai;
}
```

1.4 Tiga Chart, Tiga Pertanyaan

Ketiga chart di dashboard kita tidak boleh redundan — masing-masing harus menjawab pertanyaan berbeda:

Chart Tipe Pertanyaan yang Dijawab
Pendapatan per Kategori Bar "Kategori mana yang menyumbang Rp terbanyak?"
Proporsi Volume Terjual Doughnut "Bagaimana komposisi unit terjual antar kategori?"
Pendapatan vs Volume Line (Dual Axis) "Apakah kategori dengan volume besar juga bernilai besar?"

Chart ketiga adalah highlight polish: menggunakan dua Y-axis (kiri = Rupiah, kanan = unit) untuk membandingkan dua metrik dengan satuan berbeda.

---

🛠️ BAGIAN 2 — Praktikum A: Chart.js Formatting

Target: Menambahkan format Rupiah, palette Bootstrap, dan styling legend/tooltip ke 2 chart yang sudah ada dari P11.

Langkah A1: Tambahkan Bootstrap Icons CDN

Buka index.html, sisipkan CDN ikon di dalam <head> (untuk ikon di header card):

```html
<!-- BOOTSTRAP ICONS CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
```

Langkah A2: Centralisasi Palette & Defaults

Buka script.js. Di bawah deklarasi variabel (setelah barChartInstance), tambahkan:

```javascript
// ============================================================
// CHART THEME — Sinkronisasi dengan CSS Variables Bootstrap 5
// ============================================================
const rootStyles = getComputedStyle(document.documentElement);
const CHART_COLORS = {
    primary: rootStyles.getPropertyValue('--bs-primary').trim() || '#0d6efd',
    success: rootStyles.getPropertyValue('--bs-success').trim() || '#198754',
    warning: rootStyles.getPropertyValue('--bs-warning').trim() || '#ffc107',
    danger:  rootStyles.getPropertyValue('--bs-danger').trim()  || '#dc3545',
    info:    rootStyles.getPropertyValue('--bs-info').trim()    || '#0dcaf0',
    purple:  '#6f42c1'
};

// Palette untuk dataset multi-warna (doughnut)
const CHART_PALETTE = [
    CHART_COLORS.primary,
    CHART_COLORS.success,
    CHART_COLORS.warning,
    CHART_COLORS.danger,
    CHART_COLORS.info,
    CHART_COLORS.purple
];

// ============================================================
// FORMATTER — dipakai di tooltip, axis, dan KPI
// ============================================================
const formatRupiah = (nilai) => 'Rp ' + nilai.toLocaleString('id-ID');

function formatRupiahSingkat(nilai) {
    if (nilai >= 1_000_000_000) return 'Rp ' + (nilai / 1_000_000_000).toFixed(1).replace('.0', '') + ' M';
    if (nilai >= 1_000_000)     return 'Rp ' + (nilai / 1_000_000).toFixed(0) + ' Jt';
    if (nilai >= 1_000)         return 'Rp ' + (nilai / 1_000).toFixed(0) + ' Rb';
    return 'Rp ' + nilai;
}

// ============================================================
// DEFAULT OPTIONS — dipakai ulang di semua chart
// ============================================================
const CHART_DEFAULTS = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                color: '#495057',
                font: { size: 12, weight: '500' },
                padding: 14
            }
        },
        tooltip: {
            backgroundColor: 'rgba(33, 37, 41, 0.92)',
            titleColor: '#ffffff',
            bodyColor: '#e9ecef',
            padding: 12,
            cornerRadius: 8,
            boxPadding: 6,
            titleFont: { size: 13, weight: '600' },
            bodyFont:  { size: 12 }
        }
    }
};
```

💡 Catatan: formatRupiah dari P11 kita timpa dengan versi yang lebih rapi. Fungsi renderTabelAndKPI tetap bekerja karena signature-nya sama.

Langkah A3: Perbarui Bar Chart dengan Formatting

Ganti blok // BAR CHART di dalam renderCharts() menjadi:

```javascript
// ---------- BAR CHART — Formatting ----------
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
                label: 'Pendapatan',
                data: dataPendapatan,
                backgroundColor: CHART_COLORS.primary,
                hoverBackgroundColor: '#0b5ed7',
                borderRadius: 6,
                borderSkipped: false,
                maxBarThickness: 60
            }]
        },
        options: {
            ...CHART_DEFAULTS,
            plugins: {
                ...CHART_DEFAULTS.plugins,
                legend: { display: false }, // Satu dataset — legend tidak perlu
                tooltip: {
                    ...CHART_DEFAULTS.plugins.tooltip,
                    callbacks: {
                        label: (ctx) => 'Pendapatan: ' + formatRupiah(ctx.parsed.y)
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: (v) => formatRupiahSingkat(v),
                        color: '#6c757d',
                        font: { size: 11 }
                    },
                    grid: { color: 'rgba(0,0,0,0.05)', drawBorder: false }
                },
                x: {
                    ticks: { color: '#495057', font: { size: 11 } },
                    grid: { display: false }
                }
            }
        }
    });
}
```

Langkah A4: Perbarui Doughnut Chart

Ganti blok // DOUGHNUT CHART:

```javascript
// ---------- DOUGHNUT CHART — Formatting ----------
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
                backgroundColor: CHART_PALETTE.slice(0, labels.length),
                borderColor: '#ffffff',
                borderWidth: 3,
                hoverOffset: 8
            }]
        },
        options: {
            ...CHART_DEFAULTS,
            cutout: '62%',
            plugins: {
                ...CHART_DEFAULTS.plugins,
                legend: {
                    ...CHART_DEFAULTS.plugins.legend,
                    position: 'bottom',
                    labels: {
                        ...CHART_DEFAULTS.plugins.legend.labels,
                        font: { size: 11 }
                    }
                },
                tooltip: {
                    ...CHART_DEFAULTS.plugins.tooltip,
                    callbacks: {
                        label: (ctx) => {
                            const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                            const persen = total > 0 ? ((ctx.parsed / total) * 100).toFixed(1) : 0;
                            return `${ctx.label}: ${ctx.parsed.toLocaleString('id-ID')} unit (${persen}%)`;
                        }
                    }
                }
            }
        }
    });
}
```

✅ Cek Point A

☐ Sumbu Y Bar Chart menampilkan Rp 625 Jt (bukan 625000000).
☐ Hover bar → tooltip menampilkan Pendapatan: Rp 625.000.000.
☐ Hover slice doughnut → tooltip menampilkan Elektronik: 2.150 unit (25.5%).
☐ Legend doughnut muncul di bawah dengan ikon titik.
☐ Gridline sangat halus (tidak mendominasi visual).

---

🛠️ BAGIAN 3 — Praktikum B: Multi-Chart Composition

Target: Menambahkan chart ketiga (Line Chart dengan dual Y-axis) dan menyusunnya rapi di Bootstrap Grid bersama 2 chart sebelumnya.

Langkah B1: Tambahkan Chart Ketiga di HTML

Buka index.html. Di bawah card "Visualisasi Analytics" (masih di dalam .col-lg-8), sisipkan card baru:

```html
<!-- LINE CHART — Perbandingan Pendapatan vs Volume -->
<div class="card border-0 shadow-sm mb-4">
    <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center">
        <h5 class="card-title fw-bold text-dark m-0">
            <i class="bi bi-activity text-success me-2"></i>
            Pendapatan vs Volume Terjual
        </h5>
        <span class="badge bg-light text-muted border">Dual Axis</span>
    </div>
    <div class="card-body">
        <div style="height: 300px; position: relative;">
            <canvas id="lineChart"></canvas>
        </div>
    </div>
</div>
```

Sekaligus tambahkan ikon Bootstrap di header card chart sebelumnya agar konsisten:

```html
<!-- Ganti judul card "Visualisasi Analytics" menjadi: -->
<h5 class="card-title fw-bold text-dark m-0">
    <i class="bi bi-bar-chart-line text-primary me-2"></i>
    Visualisasi Analytics
</h5>
```

Langkah B2: Tambahkan Instance Line Chart

Di script.js, di bawah deklarasi doughnutChartInstance, tambahkan:

```javascript
let lineChartInstance = null;
```

Langkah B3: Fungsi Render Line Chart (Dual Y-Axis)

Tambahkan fungsi baru di bawah renderCharts(). Perhatikan dua hal: (1) yAxisID di dataset, (2) dua konfigurasi scales kiri-kanan.

```javascript
// ============================================================
// LINE CHART — Dual Y-Axis (Pendapatan Rupiah + Volume Unit)
// ============================================================
function renderLineChart(data) {
    const labels    = data.map(item => item.kategori);
    const pendapatan = data.map(item => item.pendapatan);
    const volume     = data.map(item => item.terjual);

    const ctxLine = document.getElementById('lineChart');
    if (!ctxLine) return; // safety: canvas tidak ada

    if (lineChartInstance) {
        lineChartInstance.data.labels = labels;
        lineChartInstance.data.datasets[0].data = pendapatan;
        lineChartInstance.data.datasets[1].data = volume;
        lineChartInstance.update();
        return;
    }

    lineChartInstance = new Chart(ctxLine.getContext('2d'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Pendapatan (Rp)',
                    data: pendapatan,
                    yAxisID: 'y-pendapatan',
                    borderColor: CHART_COLORS.primary,
                    backgroundColor: 'rgba(13, 110, 253, 0.10)',
                    borderWidth: 2.5,
                    tension: 0.35,
                    fill: true,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: CHART_COLORS.primary,
                    pointBorderWidth: 2
                },
                {
                    label: 'Volume (Unit)',
                    data: volume,
                    yAxisID: 'y-volume',
                    borderColor: CHART_COLORS.success,
                    backgroundColor: 'transparent',
                    borderWidth: 2.5,
                    borderDash: [6, 4],
                    tension: 0.35,
                    fill: false,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: CHART_COLORS.success,
                    pointBorderWidth: 2
                }
            ]
        },
        options: {
            ...CHART_DEFAULTS,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                ...CHART_DEFAULTS.plugins,
                tooltip: {
                    ...CHART_DEFAULTS.plugins.tooltip,
                    callbacks: {
                        label: (ctx) => {
                            const label = ctx.dataset.label;
                            if (label.includes('Pendapatan')) {
                                return label + ': ' + formatRupiah(ctx.parsed.y);
                            }
                            return label + ': ' + ctx.parsed.y.toLocaleString('id-ID') + ' unit';
                        }
                    }
                }
            },
            scales: {
                'y-pendapatan': {
                    position: 'left',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Pendapatan (Rp)',
                        color: CHART_COLORS.primary,
                        font: { size: 11, weight: '600' }
                    },
                    ticks: {
                        callback: (v) => formatRupiahSingkat(v),
                        color: '#6c757d',
                        font: { size: 11 }
                    },
                    grid: { color: 'rgba(0,0,0,0.05)', drawBorder: false }
                },
                'y-volume': {
                    position: 'right',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Volume (Unit)',
                        color: CHART_COLORS.success,
                        font: { size: 11, weight: '600' }
                    },
                    ticks: {
                        callback: (v) => v.toLocaleString('id-ID'),
                        color: '#6c757d',
                        font: { size: 11 }
                    },
                    grid: { drawOnChartArea: false } // jangan dobel grid
                },
                x: {
                    ticks: { color: '#495057', font: { size: 11 } },
                    grid: { display: false }
                }
            }
        }
    });
}
```

Langkah B4: Panggil renderLineChart di updateDashboard()

```javascript
function updateDashboard() {
    const keyword = inputSearch.value.toLowerCase().trim();
    const filteredData = datasetPenjualan.filter(item =>
        item.kategori.toLowerCase().includes(keyword)
    );

    renderTabelAndKPI(filteredData);
    renderCharts(filteredData);
    renderLineChart(filteredData);   // ← tambahkan baris ini
}
```

✅ Cek Point B

☐ Chart Line muncul di bawah chart Bar & Doughnut, dengan tinggi 300px.
☐ Ada dua sumbu Y: kiri (biru, Rupiah ringkas) & kanan (hijau, unit).
☐ Tooltip hover menampilkan dua baris: Pendapatan (Rp): Rp 625.000.000 dan Volume (Unit): 2.150 unit.
☐ Saat jendela dikecilkan ke ukuran tablet/HP, tiga chart tetap terbaca (bukan gepeng).
☐ Ikon Bootstrap muncul di header ketiga card chart.

---

🛠️ BAGIAN 4 — Praktikum C: Consistency & Edge Cases

Target: Menangani edge case (data kosong, label panjang) dan memastikan visual konsisten. Ini bagian yang membedakan dashboard "jalan" dengan dashboard "layak portofolio".

Langkah C1: Empty State pada Chart

Ketika filter tidak menemukan hasil (misal user mengetik "xyz"), chart saat ini akan jadi kosong tanpa penjelasan — membingungkan. Solusinya: tampilkan overlay pesan.

Tambahkan fungsi helper di script.js:

```javascript
// ============================================================
// EMPTY STATE — Tampilkan pesan overlay saat data kosong
// ============================================================
function setChartEmptyState(canvasId, isEmpty, pesan = 'Tidak ada data untuk ditampilkan') {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const wrapper = canvas.parentElement;

    // Cari overlay yang sudah ada
    let overlay = wrapper.querySelector('.chart-empty-overlay');

    if (isEmpty) {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'chart-empty-overlay d-flex flex-column align-items-center justify-content-center text-muted';
            overlay.style.cssText = `
                position: absolute; inset: 0;
                background: rgba(255,255,255,0.85);
                border-radius: 6px; font-size: 13px;
                pointer-events: none;
            `;
            overlay.innerHTML = `<i class="bi bi-inbox fs-3 mb-1"></i><span>${pesan}</span>`;
            wrapper.appendChild(overlay);
        }
    } else if (overlay) {
        overlay.remove();
    }
}
```

Lalu panggil dari setiap fungsi render chart. Misal di renderCharts():

```javascript
function renderCharts(data) {
    // ... kode existing ...

    // Empty state
    setChartEmptyState('barChart', data.length === 0);
    setChartEmptyState('doughnutChart', data.length === 0, 'Tidak ada volume terjual');

    // ... lanjut ke pembuatan / update chart ...
}
```

Dan di renderLineChart() (paling atas fungsinya):

```javascript
function renderLineChart(data) {
    setChartEmptyState('lineChart', data.length === 0, 'Tidak ada data untuk dibandingkan');

    const labels = data.map(item => item.kategori);
    // ... sisa kode ...
}
```

⚠️ Jangan lupa: elemen <canvas> parent harus punya position: relative. Sudah ada di P11 (<div style="height: 240px; position: relative;">), jadi siap pakai.

Langkah C2: Truncate Label Kategori Panjang

Jika user menambahkan kategori dengan nama panjang (misal "Makanan & Minuman Kemasan Premium"), label di sumbu X bisa bertumpuk. Tambahkan helper di dalam renderCharts() sebelum labels:

```javascript
function truncateLabel(label, maxLen = 14) {
    return label.length > maxLen ? label.slice(0, maxLen - 1) + '…' : label;
}

// Ubah pembuatan labels:
const labels = data.map(item => truncateLabel(item.kategori));
```

⚠️ Peringatan: label yang di-truncate hanya untuk tampilan chart. Tabel dan tooltip tetap menampilkan nama lengkap. Karena itu, renderTabelAndKPI tidak diubah — data aslinya tetap utuh.

Langkah C3: Konsistensi KPI Cards

Review KPI Cards di index.html. Pastikan ikon dan format angka konsisten dengan chart:

```html
<div class="card border-0 shadow-sm border-start border-primary border-4">
    <div class="card-body d-flex justify-content-between align-items-start">
        <div>
            <h6 class="text-muted fw-normal mb-1">Total Pendapatan</h6>
            <h3 class="fw-bold text-primary mb-0" id="kpi-pendapatan">Rp 0</h3>
        </div>
        <i class="bi bi-wallet2 fs-3 text-primary opacity-50"></i>
    </div>
</div>
```

Lakukan hal serupa untuk KPI "Total Pesanan" (ikon bi-bag-check, warna success) dan "Rata-rata Nilai Pesanan" (ikon bi-calculator, warna warning).

✅ Cek Point C

☐ Ketik "xyz" di kotak search → muncul overlay "Tidak ada data untuk ditampilkan" di ketiga chart.
☐ Hapus search → overlay hilang, chart render normal kembali.
☐ Tambahkan kategori dengan nama panjang (misal "Makanan & Minuman Organik Premium") → label di chart terpotong rapi dengan …, tapi tabel tetap menampilkan nama lengkap.
☐ Ketiga KPI cards punya ikon, spacing, dan format yang konsisten.

---

🏠 BAGIAN 5 — Take-Home (⏱ 5 menit penjelasan)

Kerjakan di rumah sebagai pemanasan menuju P13. Tidak dikumpulkan terpisah, tapi wajib ada di folder P12:

1. Format Persen di Tooltip Doughnut dengan Intl.NumberFormat — ganti (persen).toFixed(1) menjadi new Intl.NumberFormat('id-ID', { style: 'percent', minimumFractionDigits: 1 }).format(persen/100). Bandingkan hasilnya.
2. Ubah Posisi Legend Doughnut menjadi 'right' — lalu kembalikan ke 'bottom'. Catat pengaruhnya ke tinggi chart.
3. Ubah Palette Warna Line Chart menjadi nuansa dark — sesuai selera. Pastikan tetap kontras dengan bar chart.

💡 Tips: Ketiga item ini adalah variasi satu-dua baris. Tujuannya membiasakan mahasiswa membaca Chart.js Documentation secara mandiri, bukan menghafal API.

---

🧪 Lembar Analisis & Evaluasi

Jawab di Laporan_P12.pdf:

1. Sinkronisasi Tema: Bandingkan hasil P12 dengan P11. Apa keuntungan menyimpan warna chart di CHART_COLORS (via CSS variables Bootstrap) dibanding menulis '#0d6efd' langsung di setiap chart?
2. Dua Level Formatter: Mengapa kita memakai formatRupiahSingkat() untuk axis ticks tapi formatRupiah() untuk tooltip? Jika tooltip juga memakai formatRupiahSingkat(), apa yang akan dikorbankan?
3. Dual Y-Axis: Pada Line Chart, mengapa volume terjual tidak bisa langsung dibandingkan di sumbu yang sama dengan pendapatan? Jelaskan kaitannya dengan skala dan satuan.
4. Empty State: Mengapa empty state penting untuk dashboard? Berikan satu contoh skenario di mana absennya empty state membuat pengguna salah paham.

---

📦 Format Pengumpulan Praktikum

Struktur Folder:

```text
[NIM]_[Nama]_P12/
├── index.html
├── script.js
├── Laporan_P12.pdf
└── screenshot/
    ├── 01_chart_formatted.png     (3 chart dgn format Rupiah)
    ├── 02_line_dual_axis.png      (zoom Line Chart)
    └── 03_empty_state.png         (screenshot saat data kosong)
```
