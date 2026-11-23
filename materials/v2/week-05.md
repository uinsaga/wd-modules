# 📖 Modul Pertemuan 5
## Layouting Dashboard Data Modern dengan CSS Grid

---

## 🎯 Capaian Pembelajaran

Setelah mengikuti praktikum ini, mahasiswa diharapkan mampu:

1. **Memahami** konsep dasar CSS Grid sebagai sistem tata letak dua dimensi (baris × kolom) dan perbedaannya dengan Flexbox.
2. **Menguasai** properti utama Grid, baik pada Container (`grid-template-columns`, `grid-template-rows`, `grid-template-areas`) maupun Item (`grid-column`, `grid-row`, `grid-area`).
3. **Mengimplementasikan** `grid-template-areas` untuk merancang tata letak halaman dashboard secara keseluruhan.
4. **Membuat** komponen kartu KPI responsif otomatis menggunakan `auto-fit` dan `minmax` tanpa media query.
5. **Merefaktor** Dashboard Analisis Penjualan dari Pertemuan 4 menjadi struktur Grid penuh satu halaman.

---

## 📚 BAGIAN A: Pengenalan CSS Grid

### A.1 Apa itu CSS Grid?

**CSS Grid** adalah sistem tata letak **dua dimensi** pada CSS. Ia mampu mengatur elemen secara **horizontal (kolom)** dan **vertikal (baris)** secara bersamaan.

| Sistem Layout | Dimensi | Kegunaan |
| --- | --- | --- |
| Normal Flow | 1D (vertikal) | Dokumen teks biasa |
| Flexbox | 1D (baris **atau** kolom) | Navbar, kartu KPI, tombol filter |
| **CSS Grid** | **2D (baris DAN kolom)** | Layout halaman, dashboard, galeri, tabel + form + chart |

**Analogi:**
- **Flexbox** = menyusun buku dalam **satu rak** (bisa horizontal atau vertikal).
- **CSS Grid** = menyusun buku dalam **lemari berkotak** — kita tentukan berapa kolom, berapa baris, dan buku mana masuk ke kotak mana.

> 💡 Grid dan Flexbox **bukan saingan**. Yang terbaik adalah menggabungkannya: Grid untuk kerangka halaman, Flexbox untuk isi di dalam sel.

---

### A.2 Konsep Dasar: Garis Grid (Grid Lines)

CSS Grid bekerja dengan **garis bernomor**, bukan "kotak".

Jika kita membuat **3 kolom**, maka ada **4 garis vertikal**:

```
Garis:   1          2          3          4
         │          │          │          │
         │ Kolom 1  │ Kolom 2  │ Kolom 3  │
         │          │          │          │
         └──────────┴──────────┴──────────┘
```

**Aturan emas:** `N` kolom → `N + 1` garis. `M` baris → `M + 1` garis.

**Nomor negatif:** Setiap garis juga bisa diakses dari kanan/bawah.

```
Garis:   1          2          3          4
        -4         -3         -2         -1
```

Contoh: `grid-column: 1 / -1` artinya **"dari ujung kiri sampai ujung kanan"** — kebal terhadap perubahan jumlah kolom.

### A.3 Istilah Penting

| Istilah | Penjelasan |
| --- | --- |
| **Grid Container** | Elemen induk yang diberi `display: grid`. |
| **Grid Item** | Anak langsung dari grid container. |
| **Grid Line** | Garis pembatas (bernomor). |
| **Grid Track** | Ruang di antara dua grid line (satu baris/kolom). |
| **Grid Cell** | Perpotongan satu baris × satu kolom. |
| **Grid Area** | Kumpulan sel membentuk persegi panjang. |
| **Gap** | Celah antar track. |

> ⚠️ Hanya **anak langsung** yang menjadi grid item. Elemen yang dibungkus lagi di dalam grid item **tidak** ikut jadi grid item.

---

### A.4 Properti CSS Grid

Properti Grid terbagi menjadi dua kategori: **Container (Parent)** dan **Item (Child)**.

#### A.4.1 Properti Container (Parent)

| Properti | Fungsi |
| --- | --- |
| `display: grid;` / `inline-grid;` | Mengaktifkan mode Grid. |
| `grid-template-columns` | Menentukan jumlah dan ukuran kolom. |
| `grid-template-rows` | Menentukan jumlah dan ukuran baris. |
| `grid-template-areas` | Memetakan layout visual menggunakan peta ASCII. |
| `gap` / `column-gap` / `row-gap` | Memberi jarak antar item. |
| `justify-items` | Perataan horizontal **item di dalam selnya**. |
| `align-items` | Perataan vertikal **item di dalam selnya**. |
| `place-items` | Shorthand `align-items` + `justify-items`. |
| `justify-content` | Perataan **seluruh grid** secara horizontal. |
| `align-content` | Perataan **seluruh grid** secara vertikal. |
| `grid-auto-columns` / `grid-auto-rows` | Ukuran track otomatis (implisit). |
| `grid-auto-flow` | Arah aliran item (`row`, `column`, `dense`). |

#### A.4.2 Properti Item (Child)

| Properti | Fungsi |
| --- | --- |
| `grid-column-start` / `grid-column-end` | Menentukan garis awal & akhir kolom. |
| `grid-column` | Shorthand (misal: `span 2` atau `1 / 3`). |
| `grid-row-start` / `grid-row-end` | Menentukan garis awal & akhir baris. |
| `grid-row` | Shorthand (misal: `span 2`). |
| `grid-area` | Menghubungkan item ke nama area. |
| `justify-self` | Perataan horizontal **item ini saja**. |
| `align-self` | Perataan vertikal **item ini saja**. |
| `place-self` | Shorthand `align-self` + `justify-self`. |

---

### A.5 Unit & Fungsi Penting

| Unit/Fungsi | Arti |
| --- | --- |
| `1fr` | Satu bagian ruang bebas (*fraction*). |
| `auto` | Mengikuti konten. |
| `minmax(min, max)` | Batas bawah dan atas sebuah track. |
| `repeat(n, x)` | Mengulang nilai `x` sebanyak `n` kali. |
| `repeat(auto-fit, minmax(200px, 1fr))` | Kolom responsif otomatis. |

**Contoh penggunaan:**

```css
/* 3 kolom sama besar */
grid-template-columns: repeat(3, 1fr);

/* Kolom kiri 2x lebih lebar dari kanan */
grid-template-columns: 2fr 1fr;

/* Kolom responsif otomatis */
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
```

---

### A.6 Grid vs Flexbox — Kapan Pakai Apa?

```
┌─────────────────────────────────────────────────────────────┐
│  Butuh mengatur 2 dimensi sekaligus?   →  GRID              │
│  Butuh mengatur 1 dimensi saja?        →  FLEXBOX           │
│  Layout halaman (header/isi/footer)    →  GRID              │
│  Kartu KPI, navbar, tombol             →  FLEXBOX           │
└─────────────────────────────────────────────────────────────┘
```

Di praktikum ini, kita akan **menggabungkan keduanya**: Grid untuk kerangka halaman, Flexbox tetap untuk isi di dalam kartu.

---

## 💻 BAGIAN B: Hands-on — Praktik Grid Sederhana

Sebelum masuk ke refactor dashboard, kita berlatih Grid dari kasus paling sederhana agar konsepnya jelas.

### 🎬 Praktik 1 — Grid Dasar: Dari Kotak Menumpuk ke Baris-Kolom

**Langkah 1:** Buat file `latihan-grid.html`.

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Latihan Grid</title>
    <link rel="stylesheet" href="latihan-grid.css">
</head>
<body>

    <div class="wadah">
        <div class="kotak">1</div>
        <div class="kotak">2</div>
        <div class="kotak">3</div>
        <div class="kotak">4</div>
        <div class="kotak">5</div>
        <div class="kotak">6</div>
    </div>

</body>
</html>
```

**Langkah 2:** Buat file `latihan-grid.css`.

```css
body {
    font-family: Arial, sans-serif;
    background: #f4f6f9;
    padding: 20px;
}

.kotak {
    background: #3b82f6;
    color: white;
    font-size: 32px;
    font-weight: bold;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
}
```

**Hasil sementara:** 6 kotak **menumpuk vertikal**.

**Langkah 3:** Tambahkan CSS berikut pada `.wadah`:

```css
.wadah {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}
```

**Hasil:** 💥 6 kotak langsung tersusun jadi **2 baris × 3 kolom**.

**🔍 Penjelasan:**

- `display: grid;` — mengubah `.wadah` menjadi grid container.
- `repeat(3, 1fr)` — membuat 3 kolom sama besar. `1fr` artinya "satu bagian".
- `gap: 16px;` — jarak 16px antar item.

**🧪 Eksperimen:**

1. Ubah `repeat(3, 1fr)` menjadi `repeat(2, 1fr)` → jadi 2 kolom.
2. Ubah menjadi `repeat(4, 1fr)` → jadi 4 kolom.
3. Ubah `gap` jadi `4px` (rapat), lalu `40px` (lega).

---

### 🎬 Praktik 2 — Membuat Item Membentang

Sekarang kita buat kotak nomor 1 menjadi lebih besar.

**Langkah 1:** Ubah HTML — beri class tambahan pada kotak nomor 1:

```html
<div class="kotak kotak-besar">1</div>
```

**Langkah 2:** Tambahkan CSS:

```css
.kotak-besar {
    grid-column: span 2;
}
```

**Hasil:** Kotak 1 melebar menutupi 2 kolom. Kotak lain mengalir ulang otomatis.

**🔍 Penjelasan:**

- `grid-column: span 2;` — kotak ini meminta jatah **2 kolom**, bukan 1.

**🧪 Eksperimen:**

1. Ubah jadi `span 3` → kotak 1 memenuhi satu baris penuh.
2. Tambahkan `grid-row: span 2;` → kotak 1 menjadi besar 2×2.
3. Kembalikan ke `grid-column: span 2;` saja.

---

### 🎬 Praktik 3 — Layout Halaman dengan `grid-template-areas`

`grid-template-areas` memungkinkan kita menggambar layout langsung dalam bentuk teks.

**Langkah 1:** Ubah HTML:

```html
<div class="wadah">
    <header class="header">Header</header>
    <aside class="sidebar">Sidebar</aside>
    <main class="konten">Konten</main>
    <footer class="footer">Footer</footer>
</div>
```

**Langkah 2:** Ganti CSS `.wadah`:

```css
.wadah {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header  header"
        "sidebar konten"
        "footer  footer";
    gap: 16px;
    min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.konten  { grid-area: konten; }
.footer  { grid-area: footer; }

/* Styling visual */
.header, .sidebar, .konten, .footer {
    background: #3b82f6;
    color: white;
    padding: 20px;
    border-radius: 8px;
    font-weight: bold;
}
```

**Hasil:** Layout lengkap — header di atas membentang penuh, sidebar kiri, konten kanan, footer di bawah.

**🔍 Cara Membaca Peta:**

```
"header  header"    → baris 1: header ambil 2 kolom
"sidebar konten"    → baris 2: sidebar kiri, konten kanan
"footer  footer"    → baris 3: footer ambil 2 kolom
```

**🧪 Eksperimen:**

Tukar posisi sidebar dan konten:

```css
grid-template-areas:
    "header  header"
    "konten  sidebar"
    "footer  footer";
```

Refresh browser → sidebar pindah ke kanan. **HTML tidak disentuh sama sekali.**

---

### 🎬 Praktik 4 — Responsif Otomatis dengan `auto-fit`

**Langkah 1:** Buat HTML kartu-kartu:

```html
<div class="cards">
    <div class="card">Kartu 1</div>
    <div class="card">Kartu 2</div>
    <div class="card">Kartu 3</div>
    <div class="card">Kartu 4</div>
</div>
```

**Langkah 2:** Tambah CSS:

```css
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
}

.card {
    background: #10b981;
    color: white;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
}
```

**Hasil:** Kartu berjejer otomatis. Kecilkan jendela browser → jumlah kolom menyesuaikan sendiri.

**🔍 Penjelasan:**

- `minmax(200px, 1fr)` — setiap kartu minimal 200px, boleh melar.
- `auto-fit` — buat kolom sebanyak yang muat di layar.
- **Tidak ada media query.** Ukuran layar menentukan jumlah kolom.

---

## 🛠️ BAGIAN C: Praktikum Refactoring Dashboard

### 📌 Skenario

Pada Pertemuan 4, kita membangun Dashboard Analisis Penjualan dengan:
- Header di luar wrapper.
- Kartu KPI menggunakan **Flexbox**.
- Area Tabel + Form menggunakan **Grid 2 kolom** dalam `.dashboard-grid`.

Sekarang kita akan **merefaktor** (merapikan ulang) struktur tersebut menjadi **satu Grid utuh satu halaman** menggunakan `grid-template-areas`.

**Perbedaan yang akan dihasilkan:**

| Aspek | Pertemuan 4 | Pertemuan 5 (Refactor) |
| --- | --- | --- |
| Header | Di luar wrapper | Jadi grid item |
| Metrics | Di luar wrapper | Jadi grid item |
| Main + Sidebar | Grid terpisah (`.dashboard-grid`) | Jadi grid item di grid utama |
| Struktur | 1 header + 1 section + 1 grid | **1 wrapper grid dengan 4 area** |
| KPI Cards | Flexbox | **Grid `auto-fit`** |
| Responsif | Media query pada 2 tempat | Media query pada 1 tempat (peta area) |

> ⚠️ **Catatan:** Isi konten (KPI, tabel, form), warna, font, dan styling komponen **tidak diubah**. Yang berubah hanya struktur layout-nya.

---

### 📋 Langkah 1: Struktur HTML Baru (`index.html`)

Buka file `index.html` dari Pertemuan 4, lalu ganti seluruh isinya dengan kode berikut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Analisis Penjualan — CSS Grid</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- GRID WRAPPER UTAMA -->
    <div class="dashboard-wrapper">

        <!-- AREA 1: HEADER -->
        <header id="main-header">
            <h1>📊 Dashboard Analisis Penjualan</h1>
            <p class="subtitle">Ringkasan Performa &amp; Input Data Real-Time — Program Studi Sains Data</p>
        </header>

        <!-- AREA 2: KARTU KPI -->
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

        <!-- AREA 3: KONTEN UTAMA (TABEL & CHART) -->
        <main class="main-content">
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

            <section class="card-box">
                <h2>Visualisasi Tren Penjualan</h2>
                <div class="chart-placeholder">
                    📈 [ Area Grafik Chart.js / Plotly ]
                </div>
            </section>
        </main>

        <!-- AREA 4: SIDEBAR (FORM INPUT) -->
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

**🔍 Yang Berubah dari Pertemuan 4:**

- Seluruh elemen utama (`header`, `metrics-section`, `main`, `aside`) sekarang **dibungkus satu `<div class="dashboard-wrapper">`**.
- Tidak ada lagi `<div class="dashboard-grid">` terpisah — semua masuk ke dalam grid utama.

---

### 📋 Langkah 2: Struktur CSS Baru (`style.css`)

Ganti seluruh isi `style.css` dengan kode berikut:

```css
/* ============================================================
   RESET & GLOBAL STYLES
   ============================================================ */
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

/* ============================================================
   1. LAYOUT UTAMA (GRID TEMPLATE AREAS)
   ============================================================ */
.dashboard-wrapper {
    display: grid;
    grid-template-columns: 2.2fr 1fr;
    grid-template-areas:
        "header  header"
        "metrics metrics"
        "main    sidebar";
    gap: 25px;
    max-width: 1200px;
    margin: 0 auto;
}

/* Menghubungkan elemen HTML ke nama area di Grid */
#main-header     { grid-area: header; }
.metrics-section { grid-area: metrics; }
.main-content    { grid-area: main; }
.sidebar-content { grid-area: sidebar; }

/* ============================================================
   2. KPI CARDS RESPONSIF OTOMATIS (GRID AUTO-FIT)
   ============================================================ */
.metrics-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
}

.metric-card {
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
   3. STYLING KOMPONEN (HEADER, CARDS, TABLE, FORM)
   ============================================================ */
#main-header {
    background-color: #ffffff;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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

.card-box {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 25px;
}

.card-box:last-child {
    margin-bottom: 0;
}

h2 {
    color: #2563eb;
    font-size: 1.2rem;
    margin-bottom: 15px;
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

/* ============================================================
   4. RESPONSIVE UNTUK LAYAR KECIL
   ============================================================ */
@media (max-width: 900px) {
    .dashboard-wrapper {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "metrics"
            "main"
            "sidebar";
    }
}
```

---

### 🔍 Penjelasan Kode CSS

#### 1. Layout Utama dengan `grid-template-areas`

```css
.dashboard-wrapper {
    display: grid;
    grid-template-columns: 2.2fr 1fr;
    grid-template-areas:
        "header  header"
        "metrics metrics"
        "main    sidebar";
    gap: 25px;
}
```

- `2.2fr 1fr` → dua kolom: kiri 2.2 kali lebih lebar dari kanan.
- Peta area:
  - Baris 1: `header` membentang 2 kolom.
  - Baris 2: `metrics` (KPI) membentang 2 kolom.
  - Baris 3: `main` (tabel + chart) di kiri, `sidebar` (form) di kanan.

#### 2. KPI Cards dengan `auto-fit`

```css
.metrics-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
}
```

- Kartu KPI otomatis berjejer jika layar lebar, menumpuk jika layar sempit.
- **Tanpa media query.**

#### 3. Media Query untuk Layar Kecil

```css
@media (max-width: 900px) {
    .dashboard-wrapper {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "metrics"
            "main"
            "sidebar";
    }
}
```

- Saat layar ≤ 900px, layout berubah jadi 1 kolom menumpuk.
- Cukup ubah **peta area** — HTML tidak disentuh.

---

### ✅ Hasil Akhir

Buka `index.html` di browser. Hasilnya:

- **Header** membentang penuh di atas.
- **3 KPI Cards** berjejer horizontal (otomatis menyusun ulang jika layar menyempit).
- **Tabel + Chart** di kolom kiri, **Form** di kolom kanan.
- Saat browser diperkecil < 900px, semua elemen menumpuk 1 kolom.

**🧪 Coba Lakukan:**

1. Resize jendela browser perlahan → perhatikan bagaimana kartu KPI dan layout utama berubah otomatis.
2. Buka DevTools (F12) → tab **Elements** → klik `.dashboard-wrapper` → cari badge `grid` → klik untuk melihat garis grid di layar.

---

## 📝 TUGAS PRAKTIKUM & EVALUASI

Kerjakan tugas berikut dan tuliskan analisis singkat pada lembar laporan praktikum.

### 🎯 Tantangan 1 — Form Dua Kolom

Di dalam form sidebar, ubah susunan **Jumlah Terjual** dan **Total Pendapatan** agar tampil **berdampingan 2 kolom** di layar laptop, dan tetap **1 kolom** di layar HP.

**Petunjuk:**
- Bungkus kedua field tersebut dalam `<div class="form-row">`.
- Jadikan `.form-row` sebagai grid dengan `grid-template-columns: 1fr 1fr;`.
- Tambahkan media query untuk HP.

---

### 🎯 Tantangan 2 — Tambah KPI & Spanning

1. Tambahkan **Kartu KPI ke-4** (misal: **Total Pelanggan Baru** — nilai 1.240, ▲ 3.8%).
2. Atur agar **Kartu KPI Pertama (Total Pendapatan)** membentang **2 kolom**, sedangkan 3 kartu lainnya berukuran 1 kolom.

**Petunjuk:**
- Beri class khusus pada kartu pertama (misal: `metric-lebar`).
- Gunakan `grid-column: span 2;`.
- Karena `.metrics-section` pakai `auto-fit`, coba tambahkan `grid-auto-flow: dense;` agar celah terisi otomatis.

---

### 🎯 Pertanyaan Analisis

Jawab dengan singkat pada laporan praktikum:

1. **Perbandingan Flexbox vs Grid:** Pada Pertemuan 4, kartu KPI disusun dengan Flexbox. Pada Pertemuan 5, disusun dengan Grid `auto-fit`. Apa keunggulan Grid untuk kasus ini? Kapan Flexbox tetap lebih cocok?

2. **Kekuatan `grid-template-areas`:** Bandingkan penulisan layout `.dashboard-grid` di Pertemuan 4 (hanya `grid-template-columns` + `gap`) dengan `.dashboard-wrapper` di Pertemuan 5 (`grid-template-areas`). Mengapa pendekatan `areas` lebih mudah dirawat ketika layout bertambah kompleks?

3. **Media Query:** Pada Pertemuan 4, media query perlu diubah pada dua tempat (`.metrics-section` dan `.dashboard-grid`). Pada Pertemuan 5, cukup satu tempat. Mengapa bisa demikian?

4. **Konsep Grid Lines:** Jika layout Anda memakai 4 kolom, mengapa `grid-column: 1 / -1` lebih baik daripada `grid-column: 1 / 5`? Jelaskan dengan konsep nomor garis negatif.

---

## 📋 RINGKASAN

### 4 Properti Inti CSS Grid

| Properti | Fungsi |
| --- | --- |
| `display: grid;` | Mengaktifkan mode Grid |
| `grid-template-columns: repeat(N, 1fr);` | Membuat N kolom sama besar |
| `gap: <ukuran>;` | Jarak antar item |
| `grid-column: span N;` | Item membentang N kolom |

### 2 Pola Wajib

**1. Layout halaman dengan peta area:**

```css
.layout {
    display: grid;
    grid-template-columns: 2.2fr 1fr;
    grid-template-areas:
        "header  header"
        "metrics metrics"
        "main    sidebar";
    gap: 25px;
}
```

**2. Komponen responsif otomatis:**

```css
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
}
```

### Alur Berpikir Membuat Layout Grid

```
1. Gambar wireframe di kertas (kotak-kotak).
2. Bungkus semua elemen utama dengan satu wrapper.
3. Aktifkan grid + tulis grid-template-areas.
4. Hubungkan tiap elemen dengan grid-area.
5. Untuk daftar/kartu di dalamnya → auto-fit + minmax.
6. Ubah peta area di media query untuk layar kecil.
```