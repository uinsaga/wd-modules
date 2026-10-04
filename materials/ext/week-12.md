### 📖 Modul Pertemuan 12

## Chart Customization & Visual Formatting (Styling & Tooltips)

> **Mata Kuliah:** Desain Web & Visualisasi Data
> **Program Studi:** Sains Data (Semester 3)
> **Prasyarat:** HTML5, Bootstrap 5, dan Chart.js Dasar (Pertemuan 1 – 11)

---

## 🎯 Capaian Pembelajaran

Setelah menyelesaikan modul praktikum ini, mahasiswa diharapkan mampu:

1. **Mengubah dan mempercantik** skema warna (*Color Palette*) pada Chart.js menggunakan standar warna profesional.
2. **Mengatur format teks** pada *Tooltip* dan *Axis Ticks* agar menampilkan format mata uang Rupiah (`Rp`) dan angka terpisah ribuan secara otomatis.
3. **Mengatur posisi dan tampilan** elemen pendukung grafik seperti *Legend*, *Title*, dan *Gridlines*.

---

# 📚 BAGIAN 1 — Konsep Kustomisasi Chart.js

Grafik yang baik tidak hanya sekadar tampil, tetapi harus **mudah dibaca** oleh audiens non-teknis.

```text
  [ Raw Chart ] ──> Tambahkan Palette Warna ──> Format Angka Rupiah di Tooltip ──> [ Chart Siap Presentasi ]

```

### Properti Utama Konfigurasi `options` di Chart.js:

* **`plugins.legend`**: Mengatur posisi legenda (atas, bawah, sembunyi).
* **`plugins.tooltip.callbacks`**: Mengubah format teks popup saat kursor diarahkan ke grafik.
* **`scales.y.ticks.callback`**: Mengubah angka di Sumbu Y (misal: dari `100000000` menjadi `Rp 100 Jt`).

---

# 🛠️ BAGIAN 2 — Praktikum Customization Chart.js

> **Target Praktikum:** Mengubah tampilan Chart.js di Dashboard Bootstrap P11 agar memiliki format Rupiah di Sumbu Y dan Tooltip, serta warna batang yang serasi dengan tema Bootstrap.

---

### 📋 Langkah 1: Kustomisasi Script Chart.js (`script.js`)

Buka file `script.js` kamu dari Pertemuan 11, lalu perbarui bagian fungsi `renderCharts()` menjadi seperti berikut:

```javascript
// ============================================================
// FUNGSI RENDER MULTI-CHART DENGAN FORMATTING RUPIAH & TOOLTIP
// ============================================================
function renderCharts(data) {
    const labels = data.map(item => item.kategori);
    const dataPendapatan = data.map(item => item.pendapatan);
    const dataVolume = data.map(item => item.terjual);

    // Skema Warna Tema Bootstrap
    const paletteColors = [
        '#0d6efd', // Primary Blue
        '#198754', // Success Green
        '#ffc107', // Warning Yellow
        '#dc3545', // Danger Red
        '#6f42c1', // Purple
        '#0dcaf0'  // Info Cyan
    ];

    // ----------------------------------------------------
    // 1. BAR CHART (PENDAPATAN) WITH CUSTOM FORMATTING
    // ----------------------------------------------------
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
                    backgroundColor: '#0d6efd',
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }, // Sembunyikan legenda karena judul sudah jelas
                    tooltip: {
                        callbacks: {
                            // Format Angka di Popup Tooltip
                            label: function(context) {
                                const val = context.raw;
                                return ' Pendapatan: Rp ' + val.toLocaleString('id-ID');
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            // Format Angka di Sumbu Y (Diubah ke Singkatan "Jt")
                            callback: function(value) {
                                if (value >= 1000000) {
                                    return 'Rp ' + (value / 1000000) + ' Jt';
                                }
                                return 'Rp ' + value;
                            }
                        }
                    }
                }
            }
        });
    }

    // ----------------------------------------------------
    // 2. DOUGHNUT CHART (VOLUME TERJUAL)
    // ----------------------------------------------------
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
                    backgroundColor: paletteColors
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom' // Pindahkan posisi legenda ke bawah
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const val = context.raw;
                                return ' Terjual: ' + val.toLocaleString('id-ID') + ' Unit';
                            }
                        }
                    }
                }
            }
        });
    }
}

```

---

# 🚀 BAGIAN 3 — Praktikum Mandiri Mahasiswa

> Modifikasi tampilan grafik kamu untuk melatih kepekaan desain visual data (*Data Aesthetics*).

---

### 📌 Tugas Praktikum:

1. **Ubah Warna Batang Bar Chart:**
Ganti warna `backgroundColor: '#0d6efd'` pada *Bar Chart* dengan warna pilihanmu (misal warna hijau `#198754` atau gabungan array warna agar tiap batang memiliki warna berbeda).
2. **Kustomisasi Tooltip Unit:**
Perhatikan fungsi `callbacks` pada *Doughnut Chart*. Ubah teks tulisan yang muncul saat kursor menunjuk ke grafik menjadi:
`"Total Penjualan: [Angka] Pcs"`.
3. **Uji Coba Tampilan:**
Buka `index.html` di browser, arahkan kursor ke atas grafik, dan amati teks popup yang sekarang tampil dengan rapi lengkap dengan format kata Rupiah/Unit!

---

## 🧪 Lembar Analisis & Evaluasi

1. **Keterbacaan Data:** Mengapa menambahkan format singkatan `"Rp ... Jt"` pada Sumbu Y lebih disukai dalam penyajian dashboard executive daripada menampilkan angka panjang murni seperti `100000000`?
2. **Peran Tooltip Callback:** Jelaskan bagaimana fungsi `callbacks.label` pada Chart.js bekerja saat user mengarahkan kursor (*hover*) di atas elemen grafik!

---

## 📦 Format Pengumpulan Praktikum

* **Struktur Folder Project:**
```text
[NIM]_[Nama]_P12/
├── index.html
├── script.js
└── Laporan_P12.pdf

```

