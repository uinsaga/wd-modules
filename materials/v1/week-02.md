# 📖 Pertemuan 2: Ideasi Dashboard Data, Data Flow, & Low-Fi Wireframing

**Bobot SKS:** 3 SKS (150 Menit Luring / Studio)  
**Metode:** Briefing Teori (30 Min) ➔ Studio Figma & Ideasi (90 Min) ➔ Review & Presentation (30 Min)

---

## 📌 Capaian Pembelajaran (Sub-CPMK)

- Mahasiswa mampu menentukan _User Persona_ dan _Data Flow_ sederhana untuk ide proyek _Data Dashboard_.
- Mahasiswa mampu merancang tata letak _Low-Fidelity (Low-Fi) Wireframe_ menggunakan Figma.
- Mahasiswa mampu mengimplementasikan prinsip hierarki visual (_Information Architecture_) dalam penyajian informasi data.

---

## 💡 1. Teori Dasar & Konsep (30 Menit)

### 🔹 1.1 Data Flow & Information Architecture (IA)

Sebelum menggambar antarmuka, seorang _Data Scientist_ harus memikirkan alur data dari sudut pandang pengguna. Siapa yang membaca dashboard ini? Keputusan apa yang ingin mereka ambil?

```text
 [ Data Source / CSV ] ──► [ KPI Aggregation ] ──► [ Visual Hierarchy ] ──► [ User Action ]
 (Data Mentah)            (Angka Ringkasan)        (Layout Dashboard)     (Keputusan Bisnis)

```

**Prinsip Hierarki Visual pada Dashboard:**

1. **Top Level (Paling Atas):** KPI utama / Stat Cards (Ringkasan kondisi saat ini).
2. **Mid Level (Tengah):** Trend Analysis / Charts (Visualisasi hubungan & pola data).
3. **Bottom Level (Bawah):** Granular Detail / Data Table (Rincian transaksi/record data).

---

### 🔹 1.2 Low-Fidelity (Low-Fi) Wireframing

_Low-Fi Wireframe_ adalah sketsa kasar tata letak tanpa memikirkan warna, gambar, atau font yang indah.

**Tujuan Low-Fi:**

- Fokus pada **struktur dan posisi informasi**, bukan estetika visual.
- Menghemat waktu refactoring sebelum masuk ke tahap _slicing code_.
- Menghindari bias desain di awal proyek.

```text
  ┌────────────────────────────────────────────────────────┐
  │ [Logo]  Dashboard Monitoring Cuaca      [User Profile] │
  ├──────────┬─────────────────────────────────────────────┤
  │ • Home   │  ┌──────────┐ ┌──────────┐ ┌──────────┐     │
  │ • Data   │  │ Suhu Rata│ │ Kelembap │ │ Curah Hn │     │
  │ • Report │  └──────────┘ └──────────┘ └──────────┘     │
  │          ├─────────────────────────────────────────────┤
  │          │  [ Graphic Area: Line Chart Suhu Harian ]   │
  │          ├─────────────────────────────────────────────┤
  │          │  [ Table Area: Log Data Stasiun Cuaca ]     │
  └──────────┴─────────────────────────────────────────────┘

```

---

## 🛠️ 2. Hands-on Studio & Praktik Figma (90 Menit)

### 🔹 Sesi A: Ideasi Proyek & Data Specification (30 Menit)

Buka file ide proyek minggu lalu, dan kerjakan secara individu/berpasangan:

1. **Definisikan User Persona:**

- Siapa pengguna dashboard ini? (Contoh: _Manajer Operasional_, _Peneliti Lingkungan_, _Admin Penjualan_).

2. **Daftar Spesifikasi Data (Data Specs):**

- **3 Stat Cards KPI:** Sebutkan 3 angka ringkasan (Contoh: _Total Penjualan_, _Produk Terlaris_, _Persentase Target_).
- **2 Jenis Chart:** Tentukan chart yang cocok (Contoh: _Line Chart_ untuk tren bulanan, _Bar Chart_ untuk perbandingan kategori).
- **1 Data Table:** Tentukan kolom tabel mentah yang akan ditampilkan (Contoh: _ID, Tanggal, Nama Barang, Status, Total_).

---

### 🔹 Sesi B: Slicing Wireframe Low-Fi di Figma (60 Menit)

Buka aplikasi **Figma**, buat file baru dengan nama `Project_Dashboard_LowFi_[NamaMahasiswa]`:

1. **Setup Frame:**

- Tekan `F`, pilih preset **Desktop (1440 x 1024 px)**.

2. **Buat Grid System sederana (Layout Grid):**

- Klik Frame ➔ Menu kanan _Layout Grid_ ➔ Ubah ke `Columns`, Count: `12`, Margin: `24`, Gutter: `20`.

3. **Konstruksi Wireframe Low-Fi:**

- Gunakan warna **Grayscale** saja (Hitam, Putih, Abu-abu `#E5E5E5` / `#CCCCCC`).
- Gunakan `Rectangle Tool (R)` untuk kotak Navbar, Sidebar, Card, Chart, dan Table.
- Gunakan `Text Tool (T)` dengan font standar (Inter/Roboto) ukuran sederhana.
- Gunakan _Placeholder Icon_ atau kotak silang untuk area grafik/visualisasi.

---

## 📢 3. Review Progress & Peer Review (30 Menit)

Setiap mahasiswa/kelompok saling menukarkan tautan (_link share_) file Figma ke teman sebelah untuk dilakukan **Quick Usability Check**:

### 📋 Checklist Review Pertemuan 2:

- [ ] Frame Figma berukuran Desktop 1440px dengan 12-Column Grid.
- [ ] Terdiri dari 5 komponen anatomi utama (Header, Sidebar, 3 Stat Cards, Chart Area, Data Table).
- [ ] Desain murni Low-Fi (Hanya menggunakan warna abu-abu/hitam-putih).
- [ ] Posisi data mengikuti _Visual Hierarchy_ (KPI di atas, Chart di tengah, Tabel di bawah).
- [ ] Nama data dan label pada sketsa jelas (Bukan menggunakan teks dummy 'Lorem Ipsum' pada judul KPI).

---

## 📖 Tugas Terstruktur / Mandiri (KM & KPT = 4 Jam)

1. Rapikan file Low-Fi Wireframe di Figma berdasarkan masukan dari dosen/teman saat sesi review kelas.
2. Ekspor (_Export_) halaman frame Low-Fi dari Figma menjadi file `low-fi-dashboard.png`.
3. Commit dan Push file gambar tersebut ke repositori GitHub masing-masing di dalam folder `materials/week-02/low-fi-dashboard.png`.
