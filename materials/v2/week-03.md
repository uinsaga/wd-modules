# 📖 Modul Praktikum Pertemuan 3 
## Pengenalan CSS & Styling Dasar Web
### Konteks: Membangun Fondasi Dashboard Data

**Bobot SKS:** 3 SKS (150 Menit Luring / Lab)
**Metode:** Briefing Teori (40 Min) ➔ Hands-on Coding (80 Min) ➔ Review & Troubleshooting (30 Min)

---

## 🎯 Capaian Pembelajaran (Sub-CPMK)

Setelah mengikuti praktikum ini, mahasiswa diharapkan mampu:

1. **Memahami** dan **menggunakan** elemen HTML untuk menyajikan data terstruktur: `<table>`, `<form>`, `<img>`, dan `<a>`.
2. **Menjelaskan** peran CSS dalam memisahkan konten (HTML) dan presentasi (styling).
3. **Mengimplementasikan** 3 metode penulisan CSS (Inline, Internal, External).
4. **Menguasai** CSS Selector (Tag, Class, ID) dan konsep **CSS Box Model**.
5. **Membangun** fondasi visual dashboard data sederhana menggunakan HTML + CSS.

> 💡 **Catatan Konteks:** Praktikum ini adalah **jembatan** menuju dashboard data. Di pertemuan 2 kita sudah membuat kerangka HTML dasar (heading, paragraf, list, form sederhana). Di pertemuan ini, kita akan **melengkapi elemen HTML** yang belum dibahas (tabel, gambar, link, form lanjutan) **sebelum** mendandaninya dengan CSS. Urutan ini penting: **struktur dulu, baru gaya.**

---

## 📚 BAGIAN A: Teori Dasar HTML Lanjutan (20 Menit)

> ⚠️ **Penting:** Sebelum menghias, kita harus punya "bahan" yang cukup. Dashboard data **tidak bisa lepas dari tabel, gambar, link, dan form**. Mari kita pelajari elemen-elemen HTML yang belum dibahas di pertemuan 2.

---

### A.1 Tabel HTML — Jantung Dashboard Data

Tabel adalah **elemen paling penting** untuk menampilkan data tabular. Struktur dasarnya:

```html
<table>
    <thead>
        <tr>
            <th>Nama Kolom 1</th>
            <th>Nama Kolom 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
        <tr>
            <td>Data 3</td>
            <td>Data 4</td>
        </tr>
    </tbody>
</table>
```

**Anatomi Tabel:**

| Tag | Fungsi |
|---|---|
| `<table>` | Membungkus seluruh tabel |
| `<thead>` | Bagian **kepala** tabel (header) — berisi nama kolom |
| `<tbody>` | Bagian **isi** tabel — berisi data |
| `<tr>` | **Table Row** — satu baris tabel |
| `<th>` | **Table Header** — sel header (teks tebal, rata tengah by default) |
| `<td>` | **Table Data** — sel data biasa |

**Contoh nyata — Tabel Penjualan:**

```html
<table>
    <thead>
        <tr>
            <th>No</th>
            <th>Kategori</th>
            <th>Jumlah Terjual</th>
            <th>Pendapatan</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Elektronik</td>
            <td>2.150</td>
            <td>Rp 625.000.000</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Fashion</td>
            <td>3.420</td>
            <td>Rp 375.000.000</td>
        </tr>
    </tbody>
</table>
```

> 💡 **Tips:** Selalu gunakan `<thead>` dan `<tbody>` untuk memisahkan header dan isi. Ini memudahkan styling CSS dan meningkatkan aksesibilitas.

---

### A.2 Form HTML — Input Data ke Dashboard

Form digunakan untuk **mengumpulkan input dari pengguna**. Di dashboard data, form biasanya dipakai untuk:
- Filter data (mis. pilih rentang tanggal)
- Input data baru (mis. tambah transaksi)
- Pencarian data

**Struktur dasar form:**

```html
<form>
    <label for="nama">Nama:</label>
    <input type="text" id="nama" name="nama" placeholder="Masukkan nama">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <label for="pesan">Pesan:</label>
    <textarea id="pesan" name="pesan" rows="4"></textarea>

    <button type="submit">Kirim</button>
</form>
```

**Elemen Form Penting:**

| Tag | Fungsi |
|---|---|
| `<form>` | Membungkus seluruh form |
| `<label>` | Label untuk input. Atribut `for` harus sama dengan `id` input |
| `<input>` | Kolom input satu baris. `type` menentukan jenisnya |
| `<textarea>` | Kolom input multi-baris |
| `<button>` | Tombol submit |

**Jenis `<input>` yang Umum:**

| `type` | Fungsi | Contoh |
|---|---|---|
| `text` | Teks biasa | Nama, kategori |
| `email` | Email (validasi otomatis) | user@email.com |
| `number` | Angka | Jumlah, harga |
| `date` | Tanggal | Filter rentang waktu |
| `password` | Password (tersembunyi) | Login |
| `checkbox` | Centang (multi-pilih) | Filter kategori |
| `radio` | Pilih satu | Pilih periode |

**Atribut Penting:**

| Atribut | Fungsi |
|---|---|
| `id` | Identitas unik elemen (untuk `<label for>` dan CSS `#id`) |
| `name` | Nama field saat data dikirim ke server |
| `placeholder` | Teks petunjuk di dalam input |
| `required` | Wajib diisi sebelum submit |
| `value` | Nilai default |

---

### A.3 Gambar — `<img>`

```html
<img src="foto.jpg" alt="Deskripsi foto" width="200">
```

| Atribut | Fungsi |
|---|---|
| `src` | Sumber gambar (URL atau path file) |
| `alt` | Teks alternatif jika gambar gagal dimuat (**wajib** untuk aksesibilitas) |
| `width` / `height` | Ukuran gambar (opsional; lebih baik diatur via CSS) |

> 💡 **Untuk latihan:** Gunakan URL placeholder seperti `https://via.placeholder.com/150` agar tidak perlu menyiapkan file gambar.

---

### A.4 Hyperlink — `<a>`

```html
<a href="https://github.com" target="_blank">Kunjungi GitHub</a>
```

| Atribut | Fungsi |
|---|---|
| `href` | Tujuan link (URL, file, atau anchor `#id`) |
| `target="_blank"` | Buka di tab baru |

---

### A.5 Struktur Semantik — `<header>`, `<section>`, `<footer>`

HTML5 menyediakan tag semantik yang **memberi makna** pada struktur halaman:

```html
<header>
    <h1>Judul Dashboard</h1>
</header>

<section>
    <h2>Bagian Data</h2>
    <p>Konten...</p>
</section>

<footer>
    <p>&copy; 2025 Nama Anda</p>
</footer>
```

| Tag | Fungsi |
|---|---|
| `<header>` | Bagian kepala halaman/seksi |
| `<section>` | Bagian tematik |
| `<footer>` | Bagian kaki halaman |
| `<nav>` | Navigasi |

> 🎯 **Mengapa penting?** Tag semantik membantu **SEO**, **aksesibilitas**, dan **memudahkan CSS** menargetkan bagian tertentu.

---

## 🎨 BAGIAN B: Teori Dasar CSS (20 Menit)

### B.1 Apa itu CSS dan Mengapa Penting untuk Data Scientist?

Bayangkan HTML adalah **kerangka tulang** manusia, dan CSS adalah **pakaian, warna kulit, serta gaya visualnya**. Tanpa CSS, halaman web hanya teks polos yang sulit dibaca.

Untuk mahasiswa **Sains Data**, CSS bukan sekadar "mempercantik" halaman. CSS adalah alat untuk:

| Aspek | Peran CSS dalam Dashboard Data |
|---|---|
| **Keterbacaan** | Angka dan tabel data harus mudah dibaca (font, spacing, kontras warna). |
| **Hierarki Visual** | Metrik penting (KPI) harus menonjol; data sekunder tidak mendominasi. |
| **Konsistensi** | Warna, font, dan jarak yang seragam membuat dashboard terasa profesional. |
| **Responsivitas** | Dashboard harus nyaman dilihat di layar laptop maupun proyektor. |
| **Komunikasi Insight** | Warna dapat menyorot anomali, tren, atau kategori data. |

> ⚠️ **Prinsip Penting:** *"Data yang benar tetapi disajikan dengan buruk akan diabaikan. Data yang salah disajikan dengan indah akan menyesatkan."* CSS membantu kita di jalur pertama, bukan kedua.

---

### B.2 Cara Menghubungkan CSS ke HTML

#### A. Inline CSS
```html
<h1 style="color: #1e3a8a; text-align: center;">Dashboard Penjualan</h1>
```
- ✅ Cepat untuk tes kecil.
- ❌ Tidak scalable, sulit dipelihara.
- 🚫 **Kurang direkomendasikan.**

#### B. Internal CSS
```html
<head>
    <style>
        h1 { color: #1e3a8a; text-align: center; }
    </style>
</head>
```
- ✅ Cocok untuk halaman tunggal atau prototipe.
- ❌ Tidak bisa digunakan ulang.

#### C. External CSS ⭐ (Best Practice)
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```
- ✅ **Dapat digunakan ulang** di banyak halaman.
- ✅ **Mudah dipelihara.**
- ✅ **Standar industri** untuk dashboard & aplikasi web.

> 🎯 **Untuk proyek dashboard data, selalu gunakan External CSS.**

---

### B.3 Anatomy Selector CSS

```css
selector {
    property: value;
}
```

| Jenis Selector | Contoh | Kapan Digunakan |
|---|---|---|
| **Tag/Element** | `h1`, `p`, `table` | Styling dasar semua elemen sejenis |
| **Class** | `.metric-card`, `.data-table` | Styling kelompok elemen berfungsi sama |
| **ID** | `#total-sales`, `#main-header` | Styling satu elemen unik |
| **Descendant** | `.card h2` | Styling elemen di dalam elemen lain |
| **Pseudo-class** | `:hover`, `:nth-child()` | Interaksi & pola berulang |

---

### B.4 CSS Box Model — Fondasi Layout Dashboard

Setiap elemen HTML dianggap sebagai **kotak** yang terdiri dari 4 lapisan:

```
┌─────────────────────────────────────────┐
│                MARGIN                   │  ← Jarak LUAR antar elemen
│  ┌───────────────────────────────────┐  │
│  │            BORDER                 │  ← Garis tepi
│  │  ┌─────────────────────────────┐  │  │
│  │  │         PADDING             │  │  │  ← Jarak DALAM (isi ↔ border)
│  │  │  ┌───────────────────────┐  │  │  │
│  │  │  │       CONTENT         │  │  │  │  ← Teks / gambar / data
│  │  │  └───────────────────────┘  │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

| Lapisan | Fungsi | Analogi Dashboard |
|---|---|---|
| **Content** | Isi teks/gambar/data | Angka "Rp 1.250.000" |
| **Padding** | Jarak isi ke border | Ruang napas di dalam kartu metrik |
| **Border** | Garis tepi | Garis pemisah kartu |
| **Margin** | Jarak antar elemen | Jarak antar kartu KPI |

> 🔑 **Kunci:** `box-sizing: border-box;` membuat `width` sudah termasuk padding & border. **Selalu gunakan ini** agar perhitungan lebar konsisten.

---

### B.5 Properti CSS yang Akan Dipelajari

| Kategori | Properti | Fungsi |
|---|---|---|
| **Visual & Warna** | `color`, `background-color`, `border`, `border-radius`, `box-shadow` | Warna teks, latar, sudut membulat, bayangan |
| **Typography** | `font-family`, `font-size`, `font-weight`, `text-align`, `line-height` | Keterbacaan teks & angka |
| **Box Model** | `margin`, `padding`, `width`, `max-width`, `box-sizing` | Jarak & ukuran elemen |
| **Interaktivitas** | `:hover`, `:nth-child()`, `:focus` | Efek hover, selang-seling baris tabel |

---

## 🛠️ BAGIAN C: Tugas Praktikum

### 📌 Skenario: "Dashboard Data Sederhana"

Anda diminta membangun **halaman dashboard data sederhana** yang menampilkan:
- Judul dashboard
- Profil singkat analis data
- Kartu metrik (KPI)
- Tabel data
- Form input data
- Analisis mandiri

**Sifat Tugas:** Individu
**Tenggat Waktu:** 1 Minggu
**Nama File:** `Tugas3_NIM_Nama.html` dan `style.css`

---

### 📋 Langkah 1: Siapkan Struktur HTML

Buat file `Tugas3_NIM_Nama.html` dengan struktur berikut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Data - [Nama Anda]</title>
    <!-- Hubungkan file CSS eksternal di sini -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- ============ HEADER ============ -->
    <header id="main-header">
        <h1>📊 Dashboard Analisis Penjualan</h1>
        <p class="subtitle">Ringkasan performa penjualan bulanan — disusun oleh <strong>[Nama Anda]</strong></p>
    </header>

    <!-- ============ PROFIL ANALIS ============ -->
    <section class="profile-section">
        <h2>Profil Analis Data</h2>
        <img src="https://via.placeholder.com/150" alt="Foto Profil" class="profile-photo">
        <p>
            Halo! Saya <strong>[Nama Anda]</strong>, mahasiswa Sains Data dengan NIM <strong>[NIM]</strong>.
            Saya tertarik pada analisis data penjualan, visualisasi data, dan pengembangan dashboard interaktif.
            Kunjungi <a href="https://github.com/" target="_blank">GitHub saya</a> untuk melihat proyek lainnya.
        </p>
    </section>

    <!-- ============ KARTU METRIK (KPI) ============ -->
    <section class="metrics-section">
        <h2>Metrik Utama (KPI)</h2>
        <div class="metric-card" id="total-revenue">
            <h3>Total Pendapatan</h3>
            <p class="metric-value">Rp 1.250.000.000</p>
            <p class="metric-change positive">▲ 12.5% dari bulan lalu</p>
        </div>
        <div class="metric-card" id="total-orders">
            <h3>Total Pesanan</h3>
            <p class="metric-value">8.432</p>
            <p class="metric-change positive">▲ 5.2% dari bulan lalu</p>
        </div>
        <div class="metric-card" id="avg-order">
            <h3>Rata-rata Nilai Pesanan</h3>
            <p class="metric-value">Rp 148.250</p>
            <p class="metric-change negative">▼ 2.1% dari bulan lalu</p>
        </div>
    </section>

    <!-- ============ TABEL DATA ============ -->
    <section class="table-section">
        <h2>Data Penjualan per Kategori Produk</h2>
        <table class="data-table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Kategori Produk</th>
                    <th>Jumlah Terjual</th>
                    <th>Pendapatan (Rp)</th>
                    <th>Kontribusi (%)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Elektronik</td>
                    <td>2.150</td>
                    <td>625.000.000</td>
                    <td>50.0</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Fashion</td>
                    <td>3.420</td>
                    <td>375.000.000</td>
                    <td>30.0</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Makanan & Minuman</td>
                    <td>1.862</td>
                    <td>187.500.000</td>
                    <td>15.0</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Kesehatan</td>
                    <td>1.000</td>
                    <td>62.500.000</td>
                    <td>5.0</td>
                </tr>
            </tbody>
        </table>
    </section>

    <!-- ============ FORM INPUT ============ -->
    <section class="form-section">
        <h2>Tambah Data Penjualan</h2>
        <form>
            <label for="kategori">Kategori Produk:</label>
            <input type="text" id="kategori" name="kategori" placeholder="Contoh: Elektronik">

            <label for="jumlah">Jumlah Terjual:</label>
            <input type="text" id="jumlah" name="jumlah" placeholder="Contoh: 1500">

            <label for="catatan">Catatan:</label>
            <textarea id="catatan" name="catatan" rows="3" placeholder="Catatan tambahan..."></textarea>

            <button type="submit">Simpan Data</button>
        </form>
    </section>

    <!-- ============ ANALISIS MANDIRI ============ -->
    <section class="analysis-section">
        <h3>Analisis Perubahan Visual (HTML vs HTML+CSS):</h3>
        <p>
            [Jelaskan perbedaan yang paling terasa setelah file HTML Pertemuan 2 / dashboard ini diberi styling CSS.
            Mengapa penggunaan margin, padding, dan warna membuat antarmuka dashboard menjadi jauh lebih nyaman dibaca?
            Kaitkan dengan peran CSS dalam menyajikan data secara efektif.]
        </p>
    </section>

</body>
</html>
```

> 📝 **Catatan:** Perhatikan bahwa HTML ini **sudah lengkap** dengan tabel, form, gambar, dan link. Inilah "bahan mentah" yang akan kita hias dengan CSS.

---

### 📋 Langkah 2: Buat File `style.css`

Salin dan **ketik ulang** kode berikut:

```css
/* ============================================================
   1. RESET & STYLING GLOBAL
   ============================================================ */
* {
    box-sizing: border-box; /* WAJIB: agar padding tidak merusak lebar */
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f6f9;
    color: #333333;
    line-height: 1.6;
    margin: 20px;
    padding: 0;
}

/* ============================================================
   2. HEADER & HIRARKI TEKS
   ============================================================ */
#main-header {
    background-color: #ffffff;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 25px;
}

h1 {
    color: #1e3a8a; /* Biru tua */
    text-align: center;
    border-bottom: 3px solid #3b82f6;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.subtitle {
    text-align: center;
    color: #64748b;
    font-size: 0.95rem;
    margin: 0;
}

h2 {
    color: #2563eb;
    margin-top: 30px;
    margin-bottom: 15px;
}

h3 {
    color: #1e3a8a;
    margin-top: 0;
}

/* ============================================================
   3. PROFIL & GAMBAR
   ============================================================ */
.profile-section {
    background-color: #ffffff;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 25px;
}

.profile-photo {
    border-radius: 50%; /* Membuat foto profil bulat */
    border: 3px solid #3b82f6;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: block;
    margin: 0 auto 15px auto;
}

/* ============================================================
   4. TAUTAN
   ============================================================ */
a {
    color: #2563eb;
    text-decoration: none;
    font-weight: bold;
}

a:hover {
    color: #1d4ed8;
    text-decoration: underline;
}

/* ============================================================
   5. KARTU METRIK (KPI)
   ============================================================ */
.metric-card {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    border-left: 5px solid #3b82f6; /* Aksen kiri */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 15px;
}

.metric-card h3 {
    font-size: 1rem;
    color: #64748b;
    margin-bottom: 5px;
    font-weight: 600;
}

.metric-value {
    font-size: 1.8rem;
    font-weight: bold;
    color: #1e3a8a;
    margin: 5px 0;
}

.metric-change {
    font-size: 0.9rem;
    font-weight: bold;
    margin: 0;
}

.metric-change.positive {
    color: #10b981; /* Hijau */
}

.metric-change.negative {
    color: #ef4444; /* Merah */
}

/* ============================================================
   6. TABEL DATA
   ============================================================ */
.table-section {
    background-color: #ffffff;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 25px;
}

.data-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
    background-color: #ffffff;
}

.data-table th,
.data-table td {
    padding: 12px;
    border: 1px solid #cbd5e1;
    text-align: left;
}

.data-table th {
    background-color: #2563eb;
    color: white;
    font-weight: 600;
}

.data-table tr:nth-child(even) {
    background-color: #f8fafc; /* Selang-seling baris */
}

.data-table tr:hover {
    background-color: #e0f2fe; /* Highlight saat hover */
}

/* ============================================================
   7. FORM INPUT
   ============================================================ */
.form-section {
    background-color: #ffffff;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 25px;
}

form {
    max-width: 500px;
}

label {
    display: block;
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: 600;
    color: #334155;
}

input[type="text"],
textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    box-sizing: border-box;
    font-family: inherit;
    font-size: 0.95rem;
}

input[type="text"]:focus,
textarea:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

button {
    background-color: #10b981; /* Hijau */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 15px;
    font-size: 0.95rem;
}

button:hover {
    background-color: #059669;
}

/* ============================================================
   8. ANALISIS MANDIRI
   ============================================================ */
.analysis-section {
    background-color: #ffffff;
    padding: 20px 30px;
    border-radius: 8px;
    border-left: 5px solid #f59e0b; /* Aksen oranye */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 25px;
}
```

---

### 📋 Langkah 3: Eksperimen Mandiri (Wajib)

Setelah kode di atas berhasil, lakukan **minimal 3 eksperimen** berikut dan catat hasilnya:

1. **Ubah warna aksen** `border-left` pada `.metric-card` menjadi warna lain (mis. ungu `#8b5cf6`). Apa efeknya?
2. **Ubah `border-radius`** pada `.profile-photo` dari `50%` menjadi `10px`. Apa yang terjadi?
3. **Hapus `box-sizing: border-box`** dari selector `*`, lalu perhatikan lebar `input` dan `.metric-card`. Apa yang berubah? Mengapa?
4. **Tambahkan `:hover`** pada `.metric-card` (mis. `transform: translateY(-3px); transition: 0.2s;`). Apa efeknya?

---

### 📋 Langkah 4: Jawab Analisis Mandiri

Isi bagian `<section class="analysis-section">` di file HTML Anda dengan jawaban minimal 2 paragraf yang membahas:
- Perbedaan paling terasa antara HTML polos vs HTML+CSS.
- Mengapa `margin`, `padding`, dan warna penting untuk **keterbacaan data**.
- Kaitkan dengan peran CSS dalam **dashboard data**.

---

## 🎯 Ringkasan

### HTML yang Dipelajari Hari Ini
| Elemen | Fungsi |
|---|---|
| `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` | Menyajikan data tabular |
| `<form>`, `<label>`, `<input>`, `<textarea>`, `<button>` | Mengumpulkan input |
| `<img>` | Menampilkan gambar |
| `<a>` | Hyperlink |
| `<header>`, `<section>`, `<footer>` | Struktur semantik |

### CSS yang Dipelajari Hari Ini
| Kategori | Properti |
|---|---|
| **Visual & Warna** | `color`, `background-color`, `border`, `border-left`, `border-radius`, `box-shadow` |
| **Typography** | `font-family`, `font-size`, `font-weight`, `text-align`, `line-height` |
| **Box Model** | `margin`, `padding`, `width`, `max-width`, `box-sizing` |
| **Layout Dasar** | `display: block`, `margin: 0 auto` |
| **Interaktivitas** | `:hover`, `:nth-child()`, `:focus` |
| **Reset** | `* { box-sizing: border-box; }` |

---

## 📚 Referensi & Persiapan Pertemuan 4

**Referensi:**
- MDN Web Docs — HTML Tables: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
- MDN Web Docs — HTML Forms: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
- MDN Web Docs — CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
- CSS-Tricks — Box Model: https://css-tricks.com/the-css-box-model/

**Persiapan Pertemuan 4 — "Layouting Dashboard dengan Flexbox & Grid":**
- Pastikan file `Tugas3_NIM_Nama.html` dan `style.css` sudah selesai.
- Baca sekilas tentang `display: flex` dan `display: grid`.
- Pikirkan: bagaimana caranya menampilkan 3 kartu KPI **berjajar horizontal** (bukan vertikal seperti sekarang)? Itulah yang akan kita pelajari.

> 🚀 **Preview:** Di pertemuan 4, kita akan mengubah dashboard sederhana ini menjadi **layout grid yang responsif** — kartu KPI berjajar, tabel lebih rapi, dan form lebih proporsional.
