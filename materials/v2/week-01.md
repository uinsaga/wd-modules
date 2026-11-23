# 📖 Pertemuan 01: Fondasi HTML5 & Anatomi Dashboard System

**Bobot SKS:** 3 SKS (150 Menit Luring)

**Struktur:** 
1. Materi Penjelasan (45 Min) ➔ 
2. Modul Praktikum (75 Min) ➔ 
3. Review & Evaluation (30 Min)

---

## 📚 BAGIAN 1: MATERI PENJELASAN (TEORI & KONSEP)

### 1. Mengapa Sains Data Membutuhkan Web Development?

#### 1.1 Konteks Industri Data Modern

Dalam era digital saat ini, data dihasilkan dengan kecepatan yang luar biasa. Menurut penelitian IDC, total data global diperkirakan mencapai **175 zettabytes** pada tahun 2025. Namun, memiliki data saja tidak cukup — data tersebut harus diolah, dianalisis, dan disajikan dengan cara yang dapat dipahami oleh pengambil keputusan.

#### 1.2 Alur Kerja Sains Data End-to-End

Pengolahan data mentah (*raw data*) menggunakan Python atau R hanyalah separuh dari alur kerja sains data. Agar *insight*, grafik, atau model *Machine Learning* dapat dimanfaatkan oleh pemangku kepentingan (*stakeholder* bisnis / pengambil keputusan), data tersebut harus disajikan dalam antarmuka web interaktif.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                     ALUR KERJA SAINS DATA END-TO-END                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌───────────┐ │
│  │  Data Source │───►│  Processing  │───►│   Machine    │───►│   Web     │ │
│  │  (CSV, DB,   │    │  & Cleaning  │    │   Learning   │    │ Dashboard │ │
│  │   API, Logs) │    │  (Python/R)  │    │   Modeling   │    │ Interaktif│ │
│  └──────────────┘    └──────────────┘    └──────────────┘    └───────────┘ │
│                                                                             │
│        [ Data Engineer ]      [ Data Analyst ]     [ Stakeholder/Bisnis ]   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### 1.3 Mengapa Web Menjadi Media Utama Penyajian Data?

| Aspek | Keunggulan Web Dashboard | Dibandingkan Alternatif Lain |
|-------|--------------------------|------------------------------|
| **Interaktivitas** | Filtering, sorting, drill-down real-time | Laporan statis (PDF/Excel) tidak interaktif |
| **Aksesibilitas** | Dapat diakses dari browser laptop/smartphone | Desktop app memerlukan instalasi |
| **Kolaborasi** | Multiple user akses simultan | File sharing terbatas |
| **Update Real-time** | Data terbaru setiap saat | Laporan terpublish periodic |
| **Integrasi** | Mudah terintegrasi dengan sistem lain | Standalone application |

#### 1.4 Peran HTML5 dalam Ekosistem Sains Data Web

```text
┌─────────────────────────────────────────────────────────────┐
│                    WEB DASHBOARD STACK                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  FRONTEND (User Interface)                          │   │
│  │  ┌────────────┐  ┌────────────┐  ┌──────────────┐ │   │
│  │  │   HTML5    │  │    CSS3    │  │  JavaScript  │ │   │
│  │  │  (Struktur)│  │  (Styling) │  │ (Interaktiv) │ │   │
│  │  └────────────┘  └────────────┘  └──────────────┘ │   │
│  └──────────────────────────────────────────────────────┘   │
│                            │                                 │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  BACKEND & DATA LAYER                               │   │
│  │  ┌────────────┐  ┌────────────┐  ┌──────────────┐ │   │
│  │  │  Flask/    │  │ Database   │  │   ML Model   │ │   │
│  │  │  FastAPI   │  │ (SQL/NoSQL)│  │  (Scikit)    │ │   │
│  │  └────────────┘  └────────────┘  └──────────────┘ │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

> **💡 Insight Penting:** HTML5 bukan hanya bahasa markup biasa — ia adalah fondasi struktural yang memungkinkan seluruh ekosistem data science untuk terwujud dalam antarmuka yang dapat diakses oleh manusia.

---

### 2. Pondasi Elemen HTML5

HTML (*HyperText Markup Language*) adalah bahasa markup standar yang digunakan untuk membuat struktur halaman web. HTML5 merupakan versi terbaru yang membawa berbagai peningkatan signifikan, terutama dalam hal tag semantik dan dukungan multimedia.

#### 2.1 Sejarah Singkat HTML

| Versi | Tahun | Fitur Utama |
|-------|-------|-------------|
| HTML 1.0 | 1993 | Tag dasar heading, paragraf, link |
| HTML 2.0 | 1995 | Form, table, image |
| HTML 3.2 | 1997 | CSS support, scripting |
| HTML 4.01 | 1999 | Stylesheet, scripting lebih matang |
| XHTML 1.0 | 2000 | XML-based, strict syntax |
| HTML5 | 2014 | Semantic tags, canvas, audio/video native |

#### 2.2 Anatomi Dokumen HTML5

Setiap file HTML5 wajib memiliki struktur standar berikut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <!-- Meta information untuk browser dan mesin pencari -->
    <meta charset="UTF-8">          <!-- Encoding karakter UTF-8 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Responsive design -->
    <meta name="description" content="Dashboard analisis data sains"> <!-- SEO -->
    <meta name="author" content="Nama Penulis"> <!-- Author information -->
    <title>Judul Halaman di Tab Browser</title> <!-- Title muncul di tab -->
    
    <!-- Link ke resources eksternal -->
    <link rel="stylesheet" href="style.css"> <!-- CSS eksternal -->
    <link rel="icon" href="favicon.ico" type="image/x-icon"> <!-- Icon tab browser -->
    
    <!-- Script internal (lebih baik di akhir body) -->
    <style>
        /* CSS internal - untuk styling awal */
    </style>
</head>
<body>
    <!-- Seluruh konten visual halaman ditempatkan di sini -->
    <header> <!-- Konten bagian atas --> </header>
    <main> <!-- Konten utama --> </main>
    <footer> <!-- Konten bagian bawah --> </footer>
    
    <!-- Script ditempatkan di akhir body untuk performa -->
    <script src="script.js"></script>
</body>
</html>
```

#### 2.3 Penjelasan Detail Setiap Bagian

**1. `<!DOCTYPE html>`**
- Mendeklarasikan bahwa dokumen ini menggunakan standar HTML5
- Memastikan browser menampilkan halaman dalam mode standar (bukan quirks mode)
- Harus menjadi baris pertama dalam dokumen

**2. `<html>`**
- Elemen root (akar) dari halaman web
- Atribut `lang` menentukan bahasa utama dokumen (penting untuk aksesibilitas dan SEO)
- Semua konten halaman berada di dalam elemen ini

**3. `<head>`**
- Berisi metadata yang tidak ditampilkan secara visual
- Memberikan informasi ke browser dan mesin pencari
- Bagian kritis untuk SEO dan performa

**4. `<body>`**
- Wadah seluruh elemen visual (teks, gambar, tabel, tombol)
- Semua konten yang terlihat oleh pengguna berada di sini

#### 2.4 4 Kelompok Elemen Kunci HTML5 untuk Data

##### A. Struktur Semantik (Semantic Elements)

Elemen semantik memberikan makna pada struktur dokumen, membantu:
- **Browser** memahami hierarki konten
- **Mesin pencari** (SEO) mengindeks konten dengan lebih baik
- **Screen reader** membantu pengguna difabel

```html
<!-- HEADER: Identitas halaman, biasanya logo dan navigasi -->
<header>
    <h1>Dashboard Analytics</h1>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#reports">Reports</a></li>
        </ul>
    </nav>
</header>

<!-- NAV: Navigasi utama -->
<nav>
    <!-- Menu navigasi -->
</nav>

<!-- MAIN: Konten utama halaman -->
<main>
    <!-- Konten utama yang unik untuk halaman ini -->
</main>

<!-- SECTION: Pengelompokan konten berdasarkan tema -->
<section id="overview">
    <h2>Overview Performance</h2>
    <!-- Isi section -->
</section>

<!-- ARTICLE: Konten yang dapat berdiri sendiri -->
<article>
    <!-- Blog post, berita, komentar -->
</article>

<!-- ASIDE: Konten sampingan, tidak langsung terkait -->
<aside>
    <!-- Sidebar, iklan, informasi tambahan -->
</aside>

<!-- FOOTER: Informasi footer halaman -->
<footer>
    <p>&copy; 2026 Data Science Dashboard</p>
</footer>
```

**Perbedaan Div vs Semantic Tag:**
```html
<!-- ❌ Non-semantic - tidak memberi makna -->
<div class="header">Dashboard</div>
<div class="nav">Menu</div>
<div class="main">Konten</div>

<!-- ✅ Semantic - memberi makna struktural -->
<header>Dashboard</header>
<nav>Menu</nav>
<main>Konten</main>
```

##### B. Teks & Metrik (Text Elements)

```html
<!-- Heading: Hierarki judul (h1-h6) -->
<h1>Judul Utama (Hanya 1 per halaman)</h1>
<h2>Judul Sub-bagian</h2>
<h3>Judul Sub-sub-bagian</h3>
<h4>Judul Level 4</h4>
<h5>Judul Level 5</h5>
<h6>Judul Level 6</h6>

<!-- Paragraf -->
<p>Ini adalah paragraf teks. Paragraf digunakan untuk 
   menampilkan blok teks yang panjang dan terstruktur.</p>

<!-- Span: Inline container untuk styling -->
<p>Nilai metrik: <span class="value">Rp 45.200.000</span></p>
<p>Status: <span style="color: green;">Completed</span></p>

<!-- Formatting teks -->
<strong>Teks penting (bold)</strong>
<em>Teks miring (italic)</em>
<u>Teks bergaris bawah</u>
<mark>Teks yang di-highlight</mark>
<small>Teks dengan ukuran lebih kecil</small>
<del>Teks yang dicoret</del>
<ins>Teks yang ditambahkan</ins>
<sub>Subscript</sub>
<sup>Superscript</sup>
```

##### C. Penyajian Data Mentah (Table Elements)

```html
<!-- Struktur dasar tabel -->
<table>
    <caption>Laporan Transaksi Bulanan</caption> <!-- Judul tabel (opsional) -->
    
    <thead> <!-- Header tabel -->
        <tr> <!-- Baris header -->
            <th>ID Transaksi</th>
            <th>Tanggal</th>
            <th>Pelanggan</th>
            <th>Nominal</th>
            <th>Status</th>
        </tr>
    </thead>
    
    <tbody> <!-- Body tabel (data) -->
        <tr>
            <td>#TRX-001</td>
            <td>2026-08-28</td>
            <td>Budi Santoso</td>
            <td>Rp 350.000</td>
            <td>Completed</td>
        </tr>
        <tr>
            <td>#TRX-002</td>
            <td>2026-08-28</td>
            <td>Siti Aminah</td>
            <td>Rp 120.500</td>
            <td>Pending</td>
        </tr>
    </tbody>
    
    <tfoot> <!-- Footer tabel (total/summary) -->
        <tr>
            <td colspan="3"><strong>Total</strong></td>
            <td><strong>Rp 470.500</strong></td>
            <td></td>
        </tr>
    </tfoot>
</table>
```

**Atribut Penting Tabel:**
- `border`: Ketebalan border (numeric)
- `cellpadding`: Jarak antara konten dengan border sel
- `cellspacing`: Jarak antar sel
- `colspan`: Menggabungkan beberapa kolom
- `rowspan`: Menggabungkan beberapa baris
- `width`: Lebar tabel
- `align`: Perataan (left, center, right) — namun lebih baik menggunakan CSS

##### D. Form Interaksi (Form Elements)

```html
<!-- Struktur dasar form -->
<form action="/submit" method="POST">
    <!-- Text Input -->
    <label for="nama">Nama Lengkap:</label>
    <input type="text" id="nama" name="nama" placeholder="Masukkan nama" required>
    
    <!-- Email Input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="user@example.com">
    
    <!-- Password Input -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    
    <!-- Number Input -->
    <label for="usia">Usia:</label>
    <input type="number" id="usia" name="usia" min="0" max="100">
    
    <!-- Date Input -->
    <label for="tanggal">Tanggal:</label>
    <input type="date" id="tanggal" name="tanggal">
    
    <!-- Search Input -->
    <label for="cari">Cari Data:</label>
    <input type="search" id="cari" name="cari" placeholder="Ketik keyword...">
    
    <!-- Select Dropdown -->
    <label for="kategori">Kategori:</label>
    <select id="kategori" name="kategori">
        <option value="">-- Pilih Kategori --</option>
        <option value="makanan">Makanan</option>
        <option value="minuman">Minuman</option>
        <option value="elektronik">Elektronik</option>
    </select>
    
    <!-- Radio Buttons -->
    <fieldset>
        <legend>Jenis Kelamin:</legend>
        <input type="radio" id="pria" name="jk" value="pria">
        <label for="pria">Pria</label>
        <input type="radio" id="wanita" name="jk" value="wanita">
        <label for="wanita">Wanita</label>
    </fieldset>
    
    <!-- Checkbox -->
    <input type="checkbox" id="setuju" name="setuju" value="ya">
    <label for="setuju">Saya setuju dengan syarat & ketentuan</label>
    
    <!-- Textarea -->
    <label for="catatan">Catatan:</label>
    <textarea id="catatan" name="catatan" rows="4" cols="50" 
              placeholder="Tulis catatan di sini..."></textarea>
    
    <!-- Button -->
    <button type="submit">Kirim Data</button>
    <button type="reset">Reset</button>
    <button type="button">Tombol Biasa</button>
</form>
```

**Common Input Types untuk Data Dashboard:**

| Type | Penggunaan | Contoh |
|------|------------|--------|
| `search` | Pencarian data | `<input type="search">` |
| `date` | Filter tanggal | `<input type="date">` |
| `number` | Input angka/nominal | `<input type="number">` |
| `text` | Input teks umum | `<input type="text">` |
| `select` | Pilihan dari daftar | `<select>` dropdown |
| `checkbox` | Multiple pilihan | Filter multiple |

---

### 3. Pemetaan HTML5 ke 5 Komponen Anatomi Dashboard

#### 3.1 Anatomi Dashboard Modern

Seluruh antarmuka *Data Dashboard System* modern dapat dibedakan menjadi **5 komponen utama**, yang masing-masing dibangun menggunakan tag HTML5 dasar:

```text
┌────────────────────────────────────────────────────────────────────────────┐
│                      [1] HEADER & FILTER GLOBAL                           │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  📊 Monitoring Data Transaksi        🔍 Cari Data: [____] 📅 [___]  │  │
│  │                                      [Terapkan Filter]              │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
├─────────────┬──────────────────────────────────────────────────────────────┤
│             │  [3] STAT CARDS (KPI SUMMARY)                                │
│  [2]        │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  SIDEBAR    │  │ 📈 Total     │  │ 💰 Revenue   │  │ 👥 Active    │       │
│  NAVIGATION │  │  1,250 TRX   │  │  Rp 45.2 Jt  │  │  94.2%       │       │
│             │  └──────────────┘  └──────────────┘  └──────────────┘       │
│  📋 Menu    ├──────────────────────────────────────────────────────────────┤
│  Navigation │  [4] DATA VISUALIZATION AREA                                │
│             │  ┌─────────────────────────────┐  ┌──────────────────────┐  │
│  • Overview │  │                             │  │     Pie Chart        │  │
│  • Reports  │  │       Bar / Line Chart      │  │                      │  │
│  • Analysis │  │                             │  │   ● Makanan 45%      │  │
│  • Settings │  └─────────────────────────────┘  │   ● Minuman 30%      │  │
│             │                                    │   ● Lainnya 25%      │  │
│             ├──────────────────────────────────────┴──────────────────────┤
│             │  [5] DATA TABLE & ACTION                                    │
│             │  ┌──────┬────────────┬────────────┬──────────┬──────────┐  │
│             │  │ ID   │ Tanggal    │ Pelanggan  │ Nominal  │ Status   │  │
│             │  ├──────┼────────────┼────────────┼──────────┼──────────┤  │
│             │  │ #001 │ 2026-08-28 │ Budi S.    │ Rp 350K  │ Completed│  │
│             │  │ #002 │ 2026-08-28 │ Siti A.    │ Rp 120K  │ Pending  │  │
│             │  │ #003 │ 2026-08-27 │ Toni S.    │ Rp 75K   │ Completed│  │
│             │  └──────┴────────────┴────────────┴──────────┴──────────┘  │
└─────────────┴──────────────────────────────────────────────────────────────┘
```

#### 3.2 Detail Masing-masing Komponen

**Komponen 1: Header & Filter Global**

| Elemen HTML | Fungsi dalam Dashboard |
|-------------|----------------------|
| `<header>` | Wadah utama header |
| `<h1>` | Judul dashboard |
| `<form>` | Container filter |
| `<input type="search">` | Pencarian global |
| `<input type="date">` | Filter tanggal |
| `<button>` | Aksi filter |

```html
<header style="background: #2c3e50; color: white; padding: 15px 20px; 
               display: flex; justify-content: space-between; align-items: center;">
    <h1 style="margin: 0;">📊 Monitoring Data Transaksi</h1>
    <form style="display: flex; gap: 10px; align-items: center;">
        <input type="search" placeholder="🔍 Cari ID atau nama..." 
               style="padding: 8px 12px; border-radius: 4px; border: none; width: 200px;">
        <input type="date" style="padding: 8px 12px; border-radius: 4px; border: none;">
        <button type="button" style="padding: 8px 16px; background: #3498db; 
                color: white; border: none; border-radius: 4px; cursor: pointer;">
            Terapkan Filter
        </button>
    </form>
</header>
```

**Komponen 2: Sidebar Navigation**

| Elemen HTML | Fungsi dalam Dashboard |
|-------------|----------------------|
| `<aside>` | Wadah sidebar |
| `<nav>` | Container navigasi |
| `<ul>`, `<li>` | Daftar menu |
| `<a>` | Link menu |

```html
<aside style="width: 200px; background: #34495e; color: white; min-height: 500px;">
    <nav style="padding: 20px;">
        <h3 style="color: #ecf0f1; border-bottom: 1px solid #7f8c8d; padding-bottom: 10px;">
            📋 Menu Navigasi
        </h3>
        <ul style="list-style: none; padding: 0; margin: 15px 0;">
            <li style="padding: 10px 0; border-bottom: 1px solid #2c3e50;">
                <a href="#" style="color: #ecf0f1; text-decoration: none;">📈 Overview</a>
            </li>
            <li style="padding: 10px 0; border-bottom: 1px solid #2c3e50;">
                <a href="#" style="color: #ecf0f1; text-decoration: none;">📋 Laporan Transaksi</a>
            </li>
            <li style="padding: 10px 0; border-bottom: 1px solid #2c3e50;">
                <a href="#" style="color: #ecf0f1; text-decoration: none;">📊 Analisis Data</a>
            </li>
            <li style="padding: 10px 0;">
                <a href="#" style="color: #ecf0f1; text-decoration: none;">⚙️ Pengaturan</a>
            </li>
        </ul>
    </nav>
</aside>
```

**Komponen 3: Stat Cards (KPI Summary)**

| Elemen HTML | Fungsi dalam Dashboard |
|-------------|----------------------|
| `<section>` | Container area KPI |
| `<div>` | Card individual |
| `<h3>` | Judul metrik |
| `<p>` | Nilai metrik |

```html
<section style="padding: 20px;">
    <h2 style="margin-top: 0;">🎯 Ringkasan Metrik (KPI)</h2>
    <div style="display: flex; gap: 20px;">
        <!-- Card 1: Total Transaksi -->
        <div style="flex: 1; background: white; border-radius: 8px; 
                    padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="margin: 0 0 10px 0; color: #7f8c8d; font-size: 14px;">
                📈 Total Transaksi
            </h3>
            <p style="margin: 0; font-size: 28px; font-weight: bold; color: #2c3e50;">
                1,250 <span style="font-size: 16px; font-weight: normal; color: #7f8c8d;">TRX</span>
            </p>
            <small style="color: #27ae60;">▲ +12.5% dari bulan lalu</small>
        </div>
        
        <!-- Card 2: Total Revenue -->
        <div style="flex: 1; background: white; border-radius: 8px; 
                    padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="margin: 0 0 10px 0; color: #7f8c8d; font-size: 14px;">
                💰 Total Nominal
            </h3>
            <p style="margin: 0; font-size: 28px; font-weight: bold; color: #2c3e50;">
                Rp 45.200.000
            </p>
            <small style="color: #27ae60;">▲ +8.3% dari bulan lalu</small>
        </div>
        
        <!-- Card 3: Success Rate -->
        <div style="flex: 1; background: white; border-radius: 8px; 
                    padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="margin: 0 0 10px 0; color: #7f8c8d; font-size: 14px;">
                ✅ Tingkat Berhasil
            </h3>
            <p style="margin: 0; font-size: 28px; font-weight: bold; color: #2c3e50;">
                94.2%
            </p>
            <small style="color: #27ae60;">▲ +2.1% dari bulan lalu</small>
        </div>
    </div>
</section>
```

**Komponen 4: Data Visualization Area**

| Elemen HTML | Fungsi dalam Dashboard |
|-------------|----------------------|
| `<section>` | Container visualisasi |
| `<div>` | Wadah chart |
| `<canvas>` | Untuk rendering chart (JavaScript) |

```html
<section style="padding: 20px;">
    <h2 style="margin-top: 0;">📊 Visualisasi Grafik</h2>
    <div style="display: flex; gap: 20px;">
        <!-- Area Chart -->
        <div style="flex: 2; background: white; border-radius: 8px; 
                    padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h4 style="margin-top: 0;">Trend Transaksi (7 Hari Terakhir)</h4>
            <div style="height: 200px; background: #f8f9fa; border-radius: 4px; 
                        display: flex; align-items: center; justify-content: center;">
                <p style="color: #95a5a6;"><em>[ Bar Chart akan di-render di sini ]</em></p>
            </div>
        </div>
        
        <!-- Pie Chart -->
        <div style="flex: 1; background: white; border-radius: 8px; 
                    padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h4 style="margin-top: 0;">Distribusi Kategori</h4>
            <div style="height: 200px; background: #f8f9fa; border-radius: 4px; 
                        display: flex; align-items: center; justify-content: center;">
                <p style="color: #95a5a6;"><em>[ Pie Chart akan di-render di sini ]</em></p>
            </div>
        </div>
    </div>
</section>
```

**Komponen 5: Data Table**

| Elemen HTML | Fungsi dalam Dashboard |
|-------------|----------------------|
| `<table>` | Container tabel |
| `<thead>` | Header kolom |
| `<tbody>` | Data rows |
| `<th>` | Nama kolom |
| `<td>` | Nilai data |

```html
<section style="padding: 20px;">
    <h2 style="margin-top: 0;">📋 Log Data Mentah (Raw Records)</h2>
    <div style="background: white; border-radius: 8px; overflow: hidden; 
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <table style="width: 100%; border-collapse: collapse;">
            <thead style="background: #f8f9fa;">
                <tr>
                    <th style="padding: 12px 15px; text-align: left; border-bottom: 2px solid #dee2e6;">
                        ID TRX
                    </th>
                    <th style="padding: 12px 15px; text-align: left; border-bottom: 2px solid #dee2e6;">
                        Tanggal
                    </th>
                    <th style="padding: 12px 15px; text-align: left; border-bottom: 2px solid #dee2e6;">
                        Pelanggan
                    </th>
                    <th style="padding: 12px 15px; text-align: right; border-bottom: 2px solid #dee2e6;">
                        Nominal
                    </th>
                    <th style="padding: 12px 15px; text-align: center; border-bottom: 2px solid #dee2e6;">
                        Status
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">#TRX-9801</td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">2026-08-28</td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">Budi Santoso</td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; text-align: right;">
                        Rp 350.000
                    </td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; text-align: center;">
                        <span style="background: #27ae60; color: white; padding: 3px 10px; 
                                     border-radius: 12px; font-size: 12px;">
                            Completed
                        </span>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">#TRX-9802</td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">2026-08-28</td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">Siti Aminah</td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; text-align: right;">
                        Rp 120.500
                    </td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; text-align: center;">
                        <span style="background: #f39c12; color: white; padding: 3px 10px; 
                                     border-radius: 12px; font-size: 12px;">
                            Pending
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
```

---

## 🛠️ BAGIAN 2: MODUL PRAKTIKUM (HANDS-ON STUDIO)

### 📌 Tujuan Praktikum

1. Mahasiswa mampu mengonfigurasi perangkat lunak pengembangan web.
2. Mahasiswa mampu menulis sintaks elemen dasar HTML5 (struktur, form, tabel) secara mandiri.
3. Mahasiswa mampu merangkai seluruh tag HTML5 tersebut menjadi struktur 5 komponen Anatomi Dashboard.
4. Mahasiswa memahami konsep semantic HTML dan best practices dalam pengembangan web.

---

### 🔹 Sesi A: Setup Development Environment (15 Menit)

#### A.1 Persiapan Perangkat Lunak

**1. Visual Studio Code**
- Download dan install dari [code.visualstudio.com](https://code.visualstudio.com/)
- Pastikan versi terbaru (v1.90+)

**2. Plugin Wajib VS Code**

| Plugin | Fungsi | Extension ID |
|--------|--------|--------------|
| **Live Server** | Menjalankan web server lokal dengan auto-reload | `ritwickdey.LiveServer` |
| **Prettier** | Formatting kode otomatis | `esbenp.prettier-vscode` |
| **HTML CSS Support** | Autocomplete untuk HTML & CSS | `ecmel.vscode-html-css` |
| **Bracket Pair Colorizer** | Mewarnai pasangan kurung | `CoenraadS.bracket-pair-colorizer` |
| **Material Icon Theme** | Icon untuk file dan folder | `PKief.material-icon-theme` |
| **ESLint** | Linting JavaScript | `dbaeumer.vscode-eslint` |

**Cara Instalasi Plugin:**
1. Buka VS Code
2. Klik ikon Extensions (Ctrl+Shift+X)
3. Cari nama plugin
4. Klik Install

**3. Browser yang Direkomendasikan**
- Google Chrome (v120+) dengan DevTools
- Mozilla Firefox (v120+)
- Microsoft Edge (v120+)

#### A.2 Konfigurasi VS Code

**Settings Penting yang Perlu Diatur:**

```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "editor.wordWrap": "on",
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 5500,
    "files.autoSave": "onFocusChange"
}
```

**Cara Mengakses Settings:**
1. Tekan `Ctrl + ,` (Windows/Linux) atau `Cmd + ,` (Mac)
2. Klik ikon `{}` di pojok kanan atas untuk membuka settings.json
3. Paste konfigurasi di atas

#### A.3 Struktur Folder Proyek

Buat struktur folder praktikum di komputer masing-masing:

```text
praktikum-web-data/                    # Root folder utama
├── materials/                         # Materi praktikum
│   └── week-01/                       # Minggu pertama
│       ├── index.html                 # File utama praktikum
│       ├── style.css                  # CSS eksternal (opsional)
│       └── README.md                  # Catatan mingguan
├── assignments/                       # Tugas mandiri
│   └── week-01/                       # Tugas minggu pertama
│       └── dashboard-topik.html       # Tugas individu
├── projects/                          # Proyek besar
├── resources/                         # Sumber daya
│   ├── images/                        # Gambar
│   └── fonts/                         # Font custom
└── README.md                          # Dokumentasi proyek
```

**Cara Membuat Struktur Folder (Terminal):**

```bash
# Windows (CMD / PowerShell)
mkdir praktikum-web-data
cd praktikum-web-data
mkdir materials assignments projects resources
cd materials
mkdir week-01
cd week-01
echo. > index.html
echo. > style.css

# Mac / Linux
mkdir -p praktikum-web-data/materials/week-01
mkdir -p praktikum-web-data/assignments/week-01
mkdir -p praktikum-web-data/projects
mkdir -p praktikum-web-data/resources/images
cd praktikum-web-data/materials/week-01
touch index.html style.css
```

---

### 🔹 Sesi B: Guided Live Coding — Langkah demi Langkah (60 Menit)

#### 📍 Langkah 0: Persiapan Awal

1. Buka Visual Studio Code
2. File → Open Folder → Pilih folder `praktikum-web-data`
3. Buka file `materials/week-01/index.html` (buat jika belum ada)
4. Pastikan di pojok kanan bawah VS Code menunjukkan "HTML" sebagai bahasa

#### 📍 Langkah 1: Buat Dokumen Dasar HTML5

**Cara Cepat:** Ketik `!` lalu tekan `Tab` atau `Enter` pada VS Code untuk menghasilkan kerangka dasar.

**Hasil Output:**
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sains Data Dashboard - HTML Base</title>
</head>
<body>

</body>
</html>
```

**Penjelasan Per Baris:**
```html
<!DOCTYPE html>    <!-- Memberi tahu browser bahwa ini adalah HTML5 -->
<html lang="id">   <!-- Root element dengan bahasa Indonesia -->
<head>             <!-- Bagian metadata, tidak terlihat di halaman -->
    <meta charset="UTF-8">  <!-- Encoding karakter untuk mendukung semua huruf -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- Responsive design -->
    <title>Sains Data Dashboard - HTML Base</title>  <!-- Title di tab browser -->
</head>
<body>             <!-- Semua konten visual ada di sini -->
</body>
</html>
```

#### 📍 Langkah 2: Tambahkan Komponen 1 (Header & Filter Global)

**Instruksi:** Tuliskan kode berikut di dalam tag `<body>` setelah baris `<body>`.

```html
<!-- [1] ANATOMI 1: HEADER & FILTER GLOBAL -->
<header style="background: #2c3e50; color: white; padding: 15px 20px; 
               display: flex; justify-content: space-between; align-items: center;">
    <h1 style="margin: 0; font-size: 24px;">📊 Monitoring Data Transaksi</h1>
    <form style="display: flex; gap: 10px; align-items: center;">
        <label for="global-search" style="color: #ecf0f1;">🔍 Cari:</label>
        <input type="search" id="global-search" placeholder="Ketik ID atau nama..." 
               style="padding: 8px 12px; border-radius: 4px; border: none; width: 200px;">
        
        <label for="filter-date" style="color: #ecf0f1;">📅</label>
        <input type="date" id="filter-date" 
               style="padding: 8px 12px; border-radius: 4px; border: none;">

        <button type="button" style="padding: 8px 16px; background: #3498db; 
                color: white; border: none; border-radius: 4px; cursor: pointer;
                transition: background 0.3s;">
            Terapkan Filter
        </button>
    </form>
</header>
<hr style="margin: 0; border: 1px solid #ecf0f1;">
```

**Penjelasan Komponen Header:**
- `<header>`: Elemen semantik untuk bagian header halaman
- `style` attribute: CSS inline untuk styling cepat
- `display: flex`: Layout fleksibel untuk mengatur posisi
- `justify-content: space-between`: Memisahkan judul dan form ke kiri dan kanan
- `<form>`: Container untuk elemen filter
- `<input type="search">`: Input khusus untuk pencarian
- `<input type="date">`: Input untuk memilih tanggal
- `<button>`: Tombol untuk aksi filter

#### 📍 Langkah 3: Tambahkan Komponen 2 (Sidebar Navigation)

**Instruksi:** Tambahkan kode setelah tag `</header>`.

```html
<!-- WRAPPER TATA LETAK UTAMA -->
<div style="display: flex; min-height: 500px;">

    <!-- [2] ANATOMI 2: SIDEBAR NAVIGATION -->
    <aside style="width: 200px; background: #34495e; color: white; padding: 20px 0;">
        <nav>
            <h3 style="padding: 0 20px; color: #ecf0f1; border-bottom: 1px solid #7f8c8d; 
                       padding-bottom: 10px; margin-bottom: 15px;">
                📋 Menu Navigasi
            </h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="border-bottom: 1px solid #2c3e50;">
                    <a href="#" style="display: block; padding: 12px 20px; color: #ecf0f1; 
                            text-decoration: none; transition: background 0.3s;">
                        📈 Overview
                    </a>
                </li>
                <li style="border-bottom: 1px solid #2c3e50;">
                    <a href="#" style="display: block; padding: 12px 20px; color: #ecf0f1; 
                            text-decoration: none; transition: background 0.3s;">
                        📋 Laporan Transaksi
                    </a>
                </li>
                <li style="border-bottom: 1px solid #2c3e50;">
                    <a href="#" style="display: block; padding: 12px 20px; color: #ecf0f1; 
                            text-decoration: none; transition: background 0.3s;">
                        📊 Analisis Data
                    </a>
                </li>
                <li>
                    <a href="#" style="display: block; padding: 12px 20px; color: #ecf0f1; 
                            text-decoration: none; transition: background 0.3s;">
                        ⚙️ Pengaturan
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
```

**Penjelasan Komponen Sidebar:**
- `<div style="display: flex;">`: Membuat tata letak dua kolom (sidebar + konten)
- `<aside>`: Elemen semantik untuk konten sampingan
- `<nav>`: Container navigasi
- `min-height: 500px`: Memastikan sidebar memiliki tinggi minimal
- `list-style: none`: Menghilangkan bullet pada list
- `display: block` pada link: Membuat seluruh area link clickable

#### 📍 Langkah 4: Tambahkan Komponen 3, 4, & 5 (Main Content Area)

**Instruksi:** Tambahkan kode setelah `<aside>` (masih di dalam `<div style="display: flex;">`).

```html
    <!-- AREA KONTEN UTAMA DASHBOARD -->
    <main style="flex: 1; padding: 20px; background: #f8f9fa;">
        
        <!-- [3] ANATOMI 3: STAT CARDS (SUMMARY KPI) -->
        <section style="margin-bottom: 30px;">
            <h2 style="margin-top: 0; color: #2c3e50;">🎯 Ringkasan Metrik (KPI)</h2>
            <div style="display: flex; gap: 20px;">
                <!-- Card 1: Total Transaksi -->
                <div style="flex: 1; background: white; border-radius: 8px; 
                            padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="margin: 0 0 10px 0; color: #7f8c8d; font-size: 14px; font-weight: normal;">
                        📈 Total Transaksi
                    </h3>
                    <p style="margin: 0; font-size: 28px; font-weight: bold; color: #2c3e50;">
                        1,250 <span style="font-size: 16px; font-weight: normal; color: #7f8c8d;">TRX</span>
                    </p>
                    <small style="color: #27ae60;">▲ +12.5% dari bulan lalu</small>
                </div>
                
                <!-- Card 2: Total Nominal -->
                <div style="flex: 1; background: white; border-radius: 8px; 
                            padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="margin: 0 0 10px 0; color: #7f8c8d; font-size: 14px; font-weight: normal;">
                        💰 Total Nominal
                    </h3>
                    <p style="margin: 0; font-size: 28px; font-weight: bold; color: #2c3e50;">
                        Rp 45.200.000
                    </p>
                    <small style="color: #27ae60;">▲ +8.3% dari bulan lalu</small>
                </div>
                
                <!-- Card 3: Tingkat Berhasil -->
                <div style="flex: 1; background: white; border-radius: 8px; 
                            padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="margin: 0 0 10px 0; color: #7f8c8d; font-size: 14px; font-weight: normal;">
                        ✅ Tingkat Berhasil
                    </h3>
                    <p style="margin: 0; font-size: 28px; font-weight: bold; color: #2c3e50;">
                        94.2%
                    </p>
                    <small style="color: #27ae60;">▲ +2.1% dari bulan lalu</small>
                </div>
            </div>
        </section>

        <!-- [4] ANATOMI 4: DATA VISUALIZATION AREA -->
        <section style="margin-bottom: 30px;">
            <h2 style="margin-top: 0; color: #2c3e50;">📊 Visualisasi Grafik</h2>
            <div style="display: flex; gap: 20px;">
                <!-- Area Chart -->
                <div style="flex: 2; background: white; border-radius: 8px; 
                            padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h4 style="margin-top: 0; color: #2c3e50;">Trend Transaksi (7 Hari Terakhir)</h4>
                    <div style="height: 200px; background: #f8f9fa; border-radius: 4px; 
                                display: flex; align-items: center; justify-content: center;
                                border: 2px dashed #dee2e6;">
                        <p style="color: #95a5a6; margin: 0;">
                            <em>[ Bar Chart akan di-render di sini ]</em>
                        </p>
                    </div>
                </div>
                
                <!-- Pie Chart -->
                <div style="flex: 1; background: white; border-radius: 8px; 
                            padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h4 style="margin-top: 0; color: #2c3e50;">Distribusi Kategori</h4>
                    <div style="height: 200px; background: #f8f9fa; border-radius: 4px; 
                                display: flex; align-items: center; justify-content: center;
                                border: 2px dashed #dee2e6;">
                        <p style="color: #95a5a6; margin: 0;">
                            <em>[ Pie Chart akan di-render di sini ]</em>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- [5] ANATOMI 5: DATA TABLE (LOG RECORDS) -->
        <section>
            <h2 style="margin-top: 0; color: #2c3e50;">📋 Log Data Mentah (Raw Records)</h2>
            <div style="background: white; border-radius: 8px; overflow: hidden; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead style="background: #f8f9fa;">
                        <tr>
                            <th style="padding: 12px 15px; text-align: left; border-bottom: 2px solid #dee2e6;">
                                ID TRX
                            </th>
                            <th style="padding: 12px 15px; text-align: left; border-bottom: 2px solid #dee2e6;">
                                Tanggal
                            </th>
                            <th style="padding: 12px 15px; text-align: left; border-bottom: 2px solid #dee2e6;">
                                Pelanggan
                            </th>
                            <th style="padding: 12px 15px; text-align: right; border-bottom: 2px solid #dee2e6;">
                                Nominal
                            </th>
                            <th style="padding: 12px 15px; text-align: center; border-bottom: 2px solid #dee2e6;">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; 
                                       font-family: monospace;">
                                #TRX-9801
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">
                                2026-08-28
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">
                                Budi Santoso
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; 
                                       text-align: right; font-weight: 500;">
                                Rp 350.000
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; 
                                       text-align: center;">
                                <span style="background: #27ae60; color: white; padding: 3px 10px; 
                                             border-radius: 12px; font-size: 12px; font-weight: 500;">
                                    Completed
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; 
                                       font-family: monospace;">
                                #TRX-9802
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">
                                2026-08-28
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">
                                Siti Aminah
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; 
                                       text-align: right; font-weight: 500;">
                                Rp 120.500
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; 
                                       text-align: center;">
                                <span style="background: #f39c12; color: white; padding: 3px 10px; 
                                             border-radius: 12px; font-size: 12px; font-weight: 500;">
                                    Pending
                                </span>
                            </td>
                        </tr>
                        <!-- Tambahkan 3 data lagi untuk total 5 baris -->
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; 
                                       font-family: monospace;">
                                #TRX-9803
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">
                                2026-08-27
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">
                                Toni Susanto
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; 
                                       text-align: right; font-weight: 500;">
                                Rp 75.000
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; 
                                       text-align: center;">
                                <span style="background: #27ae60; color: white; padding: 3px 10px; 
                                             border-radius: 12px; font-size: 12px; font-weight: 500;">
                                    Completed
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; 
                                       font-family: monospace;">
                                #TRX-9804
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">
                                2026-08-27
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">
                                Rina Anggraeni
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; 
                                       text-align: right; font-weight: 500;">
                                Rp 520.000
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; 
                                       text-align: center;">
                                <span style="background: #27ae60; color: white; padding: 3px 10px; 
                                             border-radius: 12px; font-size: 12px; font-weight: 500;">
                                    Completed
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; 
                                       font-family: monospace;">
                                #TRX-9805
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">
                                2026-08-27
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6;">
                                Sari Dwi Lestari
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; 
                                       text-align: right; font-weight: 500;">
                                Rp 85.500
                            </td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #dee2e6; 
                                       text-align: center;">
                                <span style="background: #e74c3c; color: white; padding: 3px 10px; 
                                             border-radius: 12px; font-size: 12px; font-weight: 500;">
                                    Failed
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Tambahkan footer informasi -->
            <div style="margin-top: 10px; color: #7f8c8d; font-size: 14px; text-align: right;">
                Menampilkan 5 dari 1,250 data
            </div>
        </section>

    </main>
</div>
<!-- Tutup div wrapper -->
```

**Penjelasan Komponen Main Content:**
- `<main>`: Konten utama dashboard
- `flex: 1`: Mengisi sisa ruang setelah sidebar
- `gap: 20px`: Jarak antar elemen dalam flex container
- `box-shadow`: Efek bayangan untuk card
- `border-radius`: Sudut melengkung
- `border-collapse: collapse`: Menghilangkan jarak antar sel tabel
- `font-family: monospace`: Untuk ID transaksi

#### 📍 Langkah 5: Tambahkan Footer (Opsional)

**Instruksi:** Tambahkan kode setelah tag `</div>` penutup.

```html
<!-- FOOTER DASHBOARD -->
<footer style="background: #2c3e50; color: #ecf0f1; padding: 15px 20px; 
               text-align: center; margin-top: 0;">
    <p style="margin: 0;">
        &copy; 2026 - Sistem Dashboard Sains Data | 
        Dibangun dengan ❤️ menggunakan HTML5
    </p>
    <p style="margin: 5px 0 0 0; font-size: 12px; color: #7f8c8d;">
        Data diperbarui secara real-time | Versi 1.0.0
    </p>
</footer>
```

---

### 🔹 Sesi C: Menjalankan dan Menguji (15 Menit)

#### C.1 Menjalankan Live Server

1. **Cara 1 - Melalui Status Bar:**
   - Klik kanan pada file `index.html`
   - Pilih "Open with Live Server"
   - Atau klik "Go Live" di status bar bagian bawah VS Code

2. **Cara 2 - Shortcut:**
   - `Alt + L` lalu `Alt + O` (Windows/Linux)
   - `Cmd + L` lalu `Cmd + O` (Mac)

3. **Hasil:**
   - Browser akan terbuka secara otomatis
   - URL: `http://127.0.0.1:5500/materials/week-01/index.html`
   - Setiap kali Anda menyimpan file (`Ctrl+S`), halaman akan otomatis refresh

#### C.2 Menggunakan Chrome DevTools

Untuk inspeksi dan debugging, buka DevTools dengan:
- `F12` atau `Ctrl + Shift + I` (Windows/Linux)
- `Cmd + Option + I` (Mac)

**Fungsi Penting DevTools:**

| Tab | Fungsi |
|-----|--------|
| **Elements** | Melihat dan mengedit struktur HTML secara langsung |
| **Console** | Menjalankan JavaScript dan melihat error |
| **Network** | Memantau request HTTP dan performa loading |
| **Sources** | Debugging JavaScript |
| **Performance** | Analisis performa halaman |
| **Application** | Manajemen storage (cookies, local storage) |

#### C.3 Memvalidasi Output

**Checklist Verifikasi:**
1. [ ] Halaman terbuka tanpa error di browser
2. [ ] Header menampilkan judul dan form filter
3. [ ] Sidebar navigasi muncul di sebelah kiri
4. [ ] 3 Stat Card menampilkan metrik dengan angka
5. [ ] Area visualisasi grafik muncul (meski masih placeholder)
6. [ ] Tabel data menampilkan minimal 5 baris data
7. [ ] Footer muncul di bagian bawah halaman
8. [ ] Semua elemen memiliki styling yang rapi
9. [ ] Responsif (dapat di-scroll saat layar kecil)
10. [ ] Tidak ada error di Console DevTools

---

## 📖 Daftar Referensi

1. **W3C HTML5 Specification** - [https://www.w3.org/TR/html52/](https://www.w3.org/TR/html52/)
2. **MDN Web Docs - HTML** - [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
3. **HTML5 Semantic Elements** - [https://www.w3schools.com/html/html5_semantic_elements.asp](https://www.w3schools.com/html/html5_semantic_elements.asp)
4. **Web Accessibility Initiative (WAI)** - [https://www.w3.org/WAI/](https://www.w3.org/WAI/)
5. **Can I Use** - [https://caniuse.com/](https://caniuse.com/) (Cek kompatibilitas browser)
