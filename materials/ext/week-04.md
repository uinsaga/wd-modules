# 📖 Modul Praktikum Pertemuan 4
## Layouting Dashboard Data Modern dengan CSS Flexbox & Grid

**Bobot SKS:** 3 SKS (150 Menit Luring / Lab)  
**Metode:** Pengantar Teori & Mental Model (40 Min) ➔ Hands-on & Live Coding (80 Min) ➔ Troubleshooting & Evaluasi (30 Min)

---

## 🎯 Capaian Pembelajaran (Sub-CPMK)

Setelah mengikuti praktikum ini, mahasiswa diharapkan mampu:

1. **Memahami** perbedaan mendasar antara tata letak 1-Dimensi (Flexbox) dan 2-Dimensi (CSS Grid) dalam konteks desain antarmuka data.
2. **Menguasai** properti utama CSS Flexbox (*Container* dan *Item*) untuk mengatur sebaran komponen horizontal maupun vertikal.
3. **Mengimplementasikan** CSS Grid untuk membangun struktur makro dashboard (pembagian area tabel, grafik, dan kontrol/sidebar).
4. **Transformasi** berkas HTML/CSS Pertemuan 3 menjadi antarmuka *Dashboard Analytics* multi-kolom yang rapi, terstruktur, dan responsif.

---

## 📚 BAGIAN A: Teori & Mental Model Layouting Data (40 Menit)

Mengatur tata letak (*layout*) pada web sering kali menjadi kendala jika hanya menghafal sintaks. Bagi mahasiswa Sains Data, cara termudah memahami tata letak CSS adalah menggunakan analogi struktur data:

```
                  ┌─────────────────────────────────────────┐
                  │          STRUKTUR LAYOUT WEB            │
                  └────────────────────┬────────────────────┘
                                       │
            ┌──────────────────────────┴──────────────────────────┐
            ▼                                                     ▼
  [CSS FLEXBOX (1-Dimensi)]                             [CSS GRID (2-Dimensi)]
  Ibarat: Array / Vector                                Ibarat: Matrix / DataFrame
  Fokus: Mengatur elemen dalam SATU                     Fokus: Mengatur elemen dalam BARIS
         sumbu (Baris ATAU Kolom).                             DAN KOLOM secara bersamaan.
  Penggunaan: Kartu KPI, Navigation Bar,                Penggunaan: Tata letak makro halaman,
              Tombol Filter, Header Card.                           Tabel + Form + Area Chart.
```

---

## 🧩 BAGIAN B: Bedah Mendalam CSS Flexbox

Flexbox (*Flexible Box Layout*) bekerja dengan hubungan **Parent (Container)** dan **Child (Flex Items)**.

```
┌────────────────────────────────────────────────────────────────────────┐  ◄── Flex Container
│                                                                        │      (display: flex)
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐   │
│   │   Flex Item 1    │  │   Flex Item 2    │  │   Flex Item 3    │   │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘   │
└────────────────────────────────────────────────────────────────────────┘
```

---

### B.1 Properti Utama pada Flex Container (Parent)

Properti ini ditulis pada elemen pembungkus (misalnya `.metrics-section`).

#### 1. `display: flex;`
Mengaktifkan mode Flexbox. Semua anak langsung (*direct children*) dari elemen ini otomatis menjadi *Flex Items*.

#### 2. `flex-direction` (Arah Sumbu Utama)
Menentukan arah penyusunan elemen anak.

| Nilai | Keterangan | Penggunaan di Dashboard |
|---|---|---|
| `row` *(default)* | Menyusun elemen ke samping (Horizontal, kiri ke kanan). | Kartu KPI sejajar, Navigasi. |
| `column` | Menyusun elemen ke bawah (Vertikal, atas ke bawah). | Form input berurutan, Widget stacked. |
| `row-reverse` | Horizontal dari kanan ke kiri. | Baris tindakan khusus. |
| `column-reverse` | Vertikal dari bawah ke atas. | Feed log / riwayat pemrosesan. |

#### 3. `justify-content` (Pemerataan Sumbu Utama / Main Axis)
Mengatur bagaimana sisa ruang kosong dibagikan di sepanjang sumbu utama.

```
flex-start  : [■■■                  ]  (Rata kiri / awal)
flex-end    : [                  ■■■]  (Rata kanan / akhir)
center      : [         ■■■         ]  (Rata tengah)
space-between: [■        ■        ■]  (Sisi terluar menempel garis batas)
space-around: [ ■       ■       ■ ]  (Spasi sama di sekeliling tiap item)
space-evenly: [  ■     ■     ■  ]  (Spasi persis sama di semua celah)
```

#### 4. `align-items` (Pemerataan Sumbu Tegak Lurus / Cross Axis)
Mengatur Posisi vertikal (jika `flex-direction: row`) atau horizontal (jika `flex-direction: column`).

| Nilai | Keterangan |
|---|---|
| `stretch` *(default)* | Memperluas tinggi item agar mengisi penuh kontainer. |
| `center` | Memposisikan item tepat di tengah sumbu tegak lurus. |
| `flex-start` | Menyejajarkan item di batas atas/awal. |
| `flex-end` | Menyejajarkan item di batas bawah/akhir. |

#### 5. `flex-wrap` (Penanganan Meluap / Overflow)
Menentukan apakah item boleh berpindah ke baris baru jika ruang tidak mencukupi.

* `nowrap` *(default)*: Memaksa semua item tetap dalam satu baris (item akan menyusut).
* `wrap`: Memindahkan item berlebih ke baris bawahnya secara otomatis.

#### 6. `gap` (Jarak Antar Item)
Memberikan spasi antar item tanpa perlu mengatur margin secara manual pada setiap elemen anak.
```css
gap: 20px;       /* Jarak horizontal dan vertikal 20px */
row-gap: 15px;   /* Jarak antar baris */
column-gap: 25px;/* Jarak antar kolom */
```

---

### B.2 Properti Utama pada Flex Items (Child)

Properti ini ditulis langsung pada elemen anak (misalnya `.metric-card`).

#### 1. `flex-grow`
Menentukan berapa besar porsi ruang sisa yang boleh diambil oleh item tersebut.
* `flex-grow: 0` *(default)*: Item tidak membesar melebihi ukuran aslinya.
* `flex-grow: 1`: Item akan membesar mengisi sisa ruang yang ada.

#### 2. `flex-shrink`
Menentukan kemampuan item untuk menyusut jika ruang kontainer terlalu sempit.
* `flex-shrink: 1` *(default)*: Item boleh menyusut.
* `flex-shrink: 0`: Item menolak menyusut (mempertahankan ukuran aslinya).

#### 3. `flex-basis`
Ukuran awal item sebelum sisa ruang dibagikan (mirip `width` awal).

#### 4. Shorthand `flex` ⭐ *(Sangat Direkomendasikan)*
Menggabungkan `flex-grow`, `flex-shrink`, dan `flex-basis` dalam satu baris.
```css
/* flex: [flex-grow] [flex-shrink] [flex-basis]; */
.metric-card {
    flex: 1; /* Ringkasan dari: flex: 1 1 0%; (Semua kartu punya lebar sama rata) */
}
```

---

## 🔲 BAGIAN C: Pengenalan Singkat CSS Grid (2D Layout)

Jika Flexbox ideal untuk jajaran kartu KPI, **CSS Grid** ideal untuk membagi area layar menjadi tata letak multi-kolom (Tabel Data di Kiri, Form Filter di Kanan).

Properti dasar Grid untuk kontainer:
```css
.dashboard-grid {
    display: grid;
    /* Membagi menjadi 2 kolom dengan rasio 2.2 : 1 (Unit Fraction / fr) */
    grid-template-columns: 2.2fr 1fr; 
    gap: 25px;
    align-items: start;
}
```

---

## 🛠️ BAGIAN D: Hands-on & Tugas Praktikum

### 📌 Skenario Refactoring Dashboard
Ubah berkas `Tugas3_NIM_Nama.html` dan `style.css` milik Anda dari Pertemuan 3 agar memiliki struktur *dashboard analytics* modern:
1. Kartu KPI berjajar secara **horizontal** menggunakan Flexbox.
2. Area utama (Tabel + Chart) dan Sidebar (Form Input) tampil **berdampingan 2 kolom** menggunakan CSS Grid.
3. Placeholder visualisasi grafik (Chart Container) sejajar secara simetris.

---

### 📋 Langkah 1: Penyesuaian Struktur HTML (`index.html`)

Buka berkas HTML Pertemuan 3, bungkus elemen tabel dan form menggunakan struktur pembungkus baru berikut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Analisis Penjualan - Sains Data</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- HEADER DASHBOARD -->
    <header id="main-header">
        <h1>📊 Dashboard Analisis Penjualan</h1>
        <p class="subtitle">Ringkasan Performa &amp; Input Data Real-Time — Program Studi Sains Data</p>
    </header>

    <!-- SECTION 1: KARTU KPI (FLEXBOX CONTAINER) -->
    <section class="metrics-section">
        <div class="metric-card">
            <h3>Total Pendapatan</h3>
            <p class="metric-value">Rp 1.250.000.000</p>
            <p class="metric-change positive">▲ 12.5% dari bulan lalu</p>
        </div>
        <div class="metric-card">
            <h3>Total Pesanan</h3>
            <p class="metric-value">8.432</p>
            <p class="metric-change positive">▲ 5.2% dari bulan lalu</p>
        </div>
        <div class="metric-card">
            <h3>Rata-rata Nilai Pesanan</h3>
            <p class="metric-value">Rp 148.250</p>
            <p class="metric-change negative">▼ 2.1% dari bulan lalu</p>
        </div>
    </section>

    <!-- SECTION 2: UTAMA & SIDEBAR (GRID CONTAINER) -->
    <div class="dashboard-grid">
        
        <!-- KOLOM KIRI (UTAMA: TABEL & CHART) -->
        <main class="main-content">
            <!-- Tabel Data -->
            <section class="card-box">
                <h2>Data Penjualan per Kategori</h2>
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Kategori Produk</th>
                            <th>Terjual</th>
                            <th>Pendapatan (Rp)</th>
                            <th>Kontribusi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Elektronik</td>
                            <td>2.150</td>
                            <td>625.000.000</td>
                            <td>50.0%</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Fashion</td>
                            <td>3.420</td>
                            <td>375.000.000</td>
                            <td>30.0%</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Makanan &amp; Minuman</td>
                            <td>1.862</td>
                            <td>187.500.000</td>
                            <td>15.0%</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Kesehatan</td>
                            <td>1.000</td>
                            <td>62.500.000</td>
                            <td>5.0%</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <!-- Chart Container / Placeholder Grafik -->
            <section class="card-box">
                <h2>Visualisasi Tren Penjualan</h2>
                <div class="chart-placeholder">
                    📈 [ Area Grafik Chart.js / Plotly ]
                </div>
            </section>
        </main>

        <!-- KOLOM KANAN (SIDEBAR: FORM INPUT) -->
        <aside class="sidebar-content">
            <section class="card-box">
                <h2>Tambah Data Penjualan</h2>
                <form>
                    <div class="form-group">
                        <label for="kategori">Kategori Produk:</label>
                        <input type="text" id="kategori" placeholder="Contoh: Elektronik">
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

</body>
</html>
```

---

### 📋 Langkah 2: Pembaruan Berkas CSS (`style.css`)

Perbarui berkas CSS Anda dengan menerapkan aturan Flexbox dan Grid berikut:

```css
/* RESET & GLOBAL STYLES */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f6f9;
    color: #333333;
    line-height: 1.6;
    padding: 20px;
}

/* HEADER */
#main-header {
    background-color: #ffffff;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 25px;
    text-align: center;
}

#main-header h1 {
    color: #1e3a8a;
    font-size: 1.8rem;
    margin-bottom: 5px;
}

.subtitle {
    color: #64748b;
    font-size: 0.95rem;
}

/* GENERAL CARD CONTAINER */
.card-box {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 25px;
}

h2 {
    color: #2563eb;
    font-size: 1.2rem;
    margin-bottom: 15px;
}

/* ============================================================
   1. FLEXBOX LAYOUT: METRICS / KPI CARDS (HORIZONTAL)
   ============================================================ */
.metrics-section {
    display: flex;                   /* 1. Aktifkan mode Flexbox */
    flex-direction: row;             /* 2. Susun horizontal */
    justify-content: space-between;  /* 3. Distribusi spasi rata */
    gap: 20px;                       /* 4. Spasi antar kartu */
    margin-bottom: 25px;
}

.metric-card {
    flex: 1;                         /* 5. Setiap kartu mengambil porsi lebar sama rata */
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    border-left: 5px solid #3b82f6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.metric-card h3 {
    font-size: 0.9rem;
    color: #64748b;
    margin-bottom: 8px;
}

.metric-value {
    font-size: 1.6rem;
    font-weight: bold;
    color: #1e3a8a;
    margin-bottom: 5px;
}

.metric-change {
    font-size: 0.85rem;
    font-weight: 600;
}

.metric-change.positive { color: #10b981; }
.metric-change.negative { color: #ef4444; }

/* ============================================================
   2. GRID LAYOUT: MAIN CONTENT & SIDEBAR (2 KOLOM)
   ============================================================ */
.dashboard-grid {
    display: grid;                  /* 1. Aktifkan mode Grid */
    grid-template-columns: 2.2fr 1fr;/* 2. Kolom kiri 2.2x lebih lebar dari kolom kanan */
    gap: 25px;                       /* 3. Jarak antar kolom */
    align-items: start;
}

/* TABEL STYLING */
.data-table {
    width: 100%;
    border-collapse: collapse;
}

.data-table th, 
.data-table td {
    padding: 12px;
    border: 1px solid #cbd5e1;
    text-align: left;
    font-size: 0.9rem;
}

.data-table th {
    background-color: #2563eb;
    color: #ffffff;
}

.data-table tr:nth-child(even) {
    background-color: #f8fafc;
}

.data-table tr:hover {
    background-color: #e0f2fe;
}

/* CHART PLACEHOLDER (FLEXBOX CENTERING) */
.chart-placeholder {
    height: 220px;
    background-color: #f8fafc;
    border: 2px dashed #cbd5e1;
    border-radius: 6px;
    
    /* Flexbox untuk memposisikan konten tepat di tengah */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #64748b;
    font-weight: 600;
}

/* FORM STYLING */
.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 0.88rem;
    color: #334155;
}

input[type="text"],
input[type="number"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-size: 0.9rem;
}

input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.btn-primary {
    width: 100%;
    background-color: #10b981;
    color: #ffffff;
    padding: 12px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    font-size: 0.95rem;
}

.btn-primary:hover {
    background-color: #059669;
}

/* RESPONSIVE LAYOUT (MEDIA QUERY) */
@media (max-width: 900px) {
    .metrics-section {
        flex-direction: column;
    }
    
    .dashboard-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## 🎯 Evaluasi & Tugas Analisis Mandiri

Lakukan percobaan berikut pada proyek Anda dan jawablah pertanyaan analisis ini pada lembar laporan praktikum:

1. **Uji Coba `flex-wrap`:** Tambahkan 2 kartu KPI baru hingga totalnya menjadi 5 kartu. Amati apa yang terjadi pada tampilan desktop jika `.metrics-section` menggunakan `flex-wrap: nowrap` vs `flex-wrap: wrap`.
2. **Uji Coba Rasio Grid:** Ubah `grid-template-columns: 2.2fr 1fr;` menjadi `1fr 1fr` dan `3fr 1fr`. Analisis dampak visualnya terhadap tingkat keterbacaan tabel data.
3. **Analisis Konseptual:** Mengapa penggunaan `gap` pada Flexbox/Grid lebih disukai untuk tata letak antarmuka data modern dibandingkan penggunaan `margin` pada setiap elemen anak?