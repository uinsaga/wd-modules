# 📖 Pertemuan 02: Ideasi Dashboard & Bikin Sketsa (Wireframe)

**Bobot SKS:** 3 SKS (150 Menit)  
**Metode:** Teori Singkat (30 Min) ➔ Praktek Figma (90 Min) ➔ Review (30 Min)

---

## 🎯 Tujuan Belajar

Setelah pertemuan ini, kamu bisa:

- ✅ Menentukan ide dashboard sederhana
- ✅ Bikin sketsa kasar (wireframe) di Figma
- ✅ Ngatur posisi elemen dashboard dengan benar

---

## 💡 1. Teori Singkat (30 Menit)

### 🔹 1.1 Sebelum Bikin Dashboard, Tanya Dulu: "Siapa Penggunanya?"

Bayangin kamu mau bikin kue. Kamu harus tau dulu:

- Siapa yang makan? (Anak kecil? Orang dewasa?)
- Suka rasa apa? (Manis? Asin?)
- Mau dibawa kemana? (Ke pesta? Dimakan sendiri?)

Nah, sama kayak dashboard. Sebelum bikin, tanya dulu:

**👤 Siapa yang bakal lihat dashboard ini?**
Contoh: "Budi, Manajer Toko Online"

**❓ Apa yang mereka tanyakan?**
Contoh:

- "Hari ini laku berapa?"
- "Produk apa yang paling laris?"
- "Ada transaksi yang gagal?"

**🤔 Kenapa ini penting?**
Karena dari sini kita tau **data apa yang harus ditampilkan**!

### 🔹 1.2 Alur Data: Dari Data Mentah Jadi Informasi

```text
📁 DATA MENTAH          ➡️ 📊 DIOLAH          ➡️ 🎯 JADI INFORMASI
(Transaksi per hari)      (Dihitung totalnya)     (Total penjualan hari ini)
```

**Contoh Sederhana:**

1. Data mentah: 100 transaksi dengan nominal Rp 10.000 - Rp 500.000
2. Diolah: Dihitung totalnya = Rp 15.000.000
3. Jadi informasi: "Total Penjualan Hari Ini: Rp 15.000.000"

### 🔹 1.3 Hierarki Visual: Aturan "Dari Penting ke Detail"

Bayangin dashboard itu kayak **koran**:

| Level                 | Di Koran        | Di Dashboard | Contoh                   |
| --------------------- | --------------- | ------------ | ------------------------ |
| 🔴 **Paling Penting** | Headline Utama  | Stat Cards   | Total transaksi hari ini |
| 🟡 **Sedang**         | Berita utama    | Grafik       | Tren penjualan 7 hari    |
| 🟢 **Detail**         | Artikel lengkap | Data Table   | Daftar transaksi detail  |

**Rules:**

- Yang paling penting ditaruh di ATAS
- Yang detail ditaruh di BAWAH

---

## 🛠️ 2. Praktek Figma: Bikin Sketsa Dashboard (90 Menit)

### 🔹 2.1 Persiapan Figma (5 Menit)

**Step 1:** Buka [figma.com](https://figma.com) dan login (gratis!)

**Step 2:** Klik "New Design File"

**Step 3:** Buat frame ukuran desktop:

- Tekan `F` (shortcut frame)
- Di panel kanan pilih "Desktop 1440x1024"

**Step 4:** Tambah grid 12 kolom:

- Klik frame ➔ Panel kanan ➔ Layout Grid ➔ `+`
- Pilih "Columns"
- Count: `12`, Margin: `24`, Gutter: `20`

**Kenapa 12 kolom?** Karena gampang dibagi 2, 3, 4, 6!

---

### 🔹 2.2 Sesi Ideasi: Pilih Topik & Data (15 Menit)

Pilih salah satu topik di bawah ini (paling gampang):

**Pilihan 1: Dashboard Penjualan Toko**

```
👤 User: Manajer Toko
📊 3 Angka Penting:
   - Total Penjualan: Rp 45.200.000
   - Jumlah Order: 1,250
   - Rate Sukses: 94.2%
📈 Grafik:
   - Tren penjualan 7 hari
   - Perbandingan kategori produk
📋 Tabel:
   ID, Tanggal, Pelanggan, Nominal, Status
```

**Pilihan 2: Dashboard Kualitas Udara**

```
👤 User: Kepala Dinas Lingkungan
📊 3 Angka Penting:
   - Indeks Kualitas Udara: 142
   - PM2.5: 45.2 µg/m³
   - Stasiun Aktif: 18/20
📈 Grafik:
   - Tren AQI 7 hari
   - Perbandingan per stasiun
📋 Tabel:
   Waktu, Stasiun, AQI, PM2.5, Kategori
```

**Pilihan 3: Dashboard Mahasiswa (Paling Gampang!)**

```
👤 User: Dosen / Kaprodi
📊 3 Angka Penting:
   - Total Mahasiswa: 350
   - Rata-rata IPK: 3.45
   - Lulus Tepat Waktu: 78%
📈 Grafik:
   - Sebaran IPK
   - Tren Kelulusan
📋 Tabel:
   NIM, Nama, Program Studi, IPK, Status
```

**Tugas: Isi template ini di kertas/notepad:**

```
Topik pilihan: _______________
3 Stat Cards:
1. _____________: ____________
2. _____________: ____________
3. _____________: ____________
2 Jenis Grafik:
1. _____________: ____________
2. _____________: ____________
Tabel:
Kolom: _____, _____, _____, _____, _____
```

---

### 🔹 2.3 Mulai Menggambar di Figma (40 Menit)

**Prinsip: PAKAI WARNA ABU-ABU AJA DULU! (Grayscale)**

Kita cuma pake warna ini:

| Warna                 | Kode      | Dipakai buat       |
| --------------------- | --------- | ------------------ |
| Hitam                 | `#000000` | Teks utama         |
| Abu-abu               | `#666666` | Teks label         |
| Abu-abu terang        | `#E5E5E5` | Background card    |
| Abu-abu sangat terang | `#F5F5F5` | Background sidebar |
| Putih                 | `#FFFFFF` | Background utama   |

**Shortcut Figma yang Paling Sering Dipake:**

| Shortcut   | Buat apa?  |
| ---------- | ---------- |
| `R`        | Kotak      |
| `T`        | Teks       |
| `V`        | Pilih/move |
| `F`        | Frame      |
| `Ctrl + D` | Duplikat   |

---

### 📍 Langkah 1: Header (15 Menit)

**Target: Bikin bagian atas dashboard**

```text
┌─────────────────────────────────────────────────────────────────────────┐
│  📊 Dashboard Toko Saya          🔍 Cari...  📅 Pilih Tanggal  [🔎]    │
└─────────────────────────────────────────────────────────────────────────┘
```

**Cara bikin:**

1. `R` → buat kotak: width 1440, height 80
2. Isi warna: `#333333`
3. `T` → tulis "📊 Dashboard [Topik-mu]" di kiri, ukuran 20, warna putih
4. `T` → tulis "🔍 Cari...", "📅 Pilih Tanggal", dan "🔎" di kanan, ukuran 14

**Hasil:**
![Header](https://via.placeholder.com/1440x80/333333/FFFFFF?text=Header+Dashboard)

---

### 📍 Langkah 2: Sidebar (10 Menit)

**Target: Bikin menu di samping kiri**

```text
┌─────────┐
│ 📋 Menu  │  ← Kiri, di bawah header
│─────────│
│ 🏠 Home  │
│ 📊 Data  │
│ 📈 Report│
│ ⚙️ Set   │
└─────────┘
```

**Cara bikin:**

1. `R` → buat kotak: width 220, height 944 (sisa layar), warna `#F5F5F5`
2. `T` → tulis "📋 Menu Navigasi", size 16, bold
3. `T` → tulis 4 menu: "🏠 Home", "📊 Data", "📈 Laporan", "⚙️ Setting"

---

### 📍 Langkah 3: Stat Cards - 3 Kotak Angka Penting (20 Menit)

**Target: Bikin 3 kotak di atas untuk angka penting**

```text
┌─────────────────────────────────────────────────────────────────────────┐
│  🎯 Ringkasan KPI                                                      │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐                        │
│  │ 📈 Total    │ │ 💰 Nominal  │ │ ✅ Sukses  │                        │
│  │  1,250 TRX │ │ Rp 45.2 Jt │ │  94.2%     │                        │
│  │  ▲ +12.5%  │ │ ▲ +8.3%    │ │ ▲ +2.1%   │                        │
│  └────────────┘ └────────────┘ └────────────┘                        │
└─────────────────────────────────────────────────────────────────────────┘
```

**Cara bikin:**

1. Posisi: di sebelah kanan sidebar (x=240, y=100)
2. `R` → buat 3 kotak: width 370, height 110
3. Isi warna: putih (`#FFFFFF`), border: `#E5E5E5`
4. Atur jarak: kasih gap 20px antar card
5. `T` → tulis judul (size 12, warna `#666666`)
6. `T` → tulis angka (size 24, bold, warna hitam)
7. `T` → tulis trend (size 12, warna `#666666`)

**Tips:** Pake grid 12 kolom → 1 card = 3 kolom

---

### 📍 Langkah 4: Area Grafik (20 Menit)

**Target: Bikin 2 kotak untuk grafik**

```text
┌─────────────────────────────────────────────────────────────────────────┐
│  📊 Visualisasi Grafik                                                 │
│  ┌─────────────────────────────────┐  ┌────────────────────┐          │
│  │   📈 Tren 7 Hari                │  │  📊 Kategori       │          │
│  │                                 │  │                    │          │
│  │   █████████████████████████    │  │  ████  ████  ████ │          │
│  │   █████████████████████████    │  │  ████  ████  ████ │          │
│  └─────────────────────────────────┘  └────────────────────┘          │
└─────────────────────────────────────────────────────────────────────────┘
```

**Cara bikin:**

1. Posisi: di bawah stat cards (y=240)
2. Buat 2 kotak container:
   - Kiri (grafik utama): width 870
   - Kanan (grafik kecil): width 270
3. `R` → width 1180, height 280, putih, border `#E5E5E5`
4. `T` → tulis judul grafik di atas
5. Di dalam grafik, bikin placeholder:
   - Pake `R` kecil-kecil buat bar chart
   - Atau pake `Line` tool buat garis

---

### 📍 Langkah 5: Data Table (20 Menit)

**Target: Bikin tabel data di bagian bawah**

```text
┌─────────────────────────────────────────────────────────────────────────┐
│  📋 Data Transaksi                                                     │
│  ┌──────┬────────────┬────────────┬──────────┬──────────┐             │
│  │ ID   │ Tanggal    │ Pelanggan  │ Nominal  │ Status   │             │
│  ├──────┼────────────┼────────────┼──────────┼──────────┤             │
│  │ #001 │ 2026-08-28 │ Budi S.    │ Rp 350K  │ ✅ Sukses │             │
│  │ #002 │ 2026-08-28 │ Siti A.    │ Rp 120K  │ ⏳ Proses │             │
│  │ #003 │ 2026-08-27 │ Toni S.    │ Rp 75K   │ ✅ Sukses │             │
│  │ #004 │ 2026-08-27 │ Rina A.    │ Rp 520K  │ ✅ Sukses │             │
│  │ #005 │ 2026-08-27 │ Sari L.    │ Rp 85K   │ ❌ Gagal  │             │
│  └──────┴────────────┴────────────┴──────────┴──────────┘             │
└─────────────────────────────────────────────────────────────────────────┘
```

**Cara bikin:**

1. Posisi: di bawah grafik (y=560)
2. `R` → kotak putih width 1180, height 400, border `#E5E5E5`
3. Bikin header:
   - `R` → kotak abu-abu `#F5F5F5` di atas, height 40
   - `T` → tulis 5 judul kolom
4. Bikin 5 baris data:
   - `R` → kotak height 40 tiap baris
   - `T` → isi data sesuai topik

---

### 🎯 Hasil Akhir yang Diharapkan

Setelah selesai, dashboard kamu kira-kira kayak gini:

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ 📊 Dashboard Penjualan                🔍 Cari...  📅 [____]  [🔎 Filter]  │
├───────────┬────────────────────────────────────────────────────────────────┤
│           │  🎯 RINGKASAN KPI                                             │
│ 📋 Menu   │  ┌────────────┐ ┌────────────┐ ┌────────────┐                │
│           │  │ 📈 Total    │ │ 💰 Nominal  │ │ ✅ Sukses  │                │
│ 🏠 Home   │  │  1,250 TRX │ │ Rp 45.2 Jt │ │  94.2%     │                │
│ 📊 Data   │  │  ▲ +12.5%  │ │ ▲ +8.3%    │ │ ▲ +2.1%   │                │
│ 📈 Report │  └────────────┘ └────────────┘ └────────────┘                │
│ ⚙️ Setting│                                                                 │
│           │  📊 VISUALISASI                                               │
│           │  ┌──────────────────────────┐  ┌────────────────┐             │
│           │  │   📈 Tren 7 Hari         │  │  📊 Kategori   │             │
│           │  │   ████████████████████   │  │  ████ ████     │             │
│           │  │   ████████████████████   │  │  ████ ████     │             │
│           │  └──────────────────────────┘  └────────────────┘             │
│           │                                                                 │
│           │  📋 DATA MENTAH                                                │
│           │  ┌──────┬──────────┬──────────┬──────────┬──────────┐        │
│           │  │ ID   │ Tanggal  │ Pelanggan│ Nominal  │ Status   │        │
│           │  ├──────┼──────────┼──────────┼──────────┼──────────┤        │
│           │  │ #001 │ 28/08/26 │ Budi S.  │ Rp 350K  │ ✅ Sukses │        │
│           │  │ #002 │ 28/08/26 │ Siti A.  │ Rp 120K  │ ⏳ Proses │        │
│           │  │ #003 │ 27/08/26 │ Toni S.  │ Rp 75K   │ ✅ Sukses │        │
│           │  │ #004 │ 27/08/26 │ Rina A.  │ Rp 520K  │ ✅ Sukses │        │
│           │  │ #005 │ 27/08/26 │ Sari L.  │ Rp 85K   │ ❌ Gagal  │        │
│           │  └──────┴──────────┴──────────┴──────────┴──────────┘        │
├───────────┴────────────────────────────────────────────────────────────────┤
│ © 2026 - Dashboard Sains Data | Dibuat dengan ❤️                          │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 📢 3. Review & Evaluasi (30 Menit)

### ✅ Cek Hasil Kerja Kamu

Sebelum lanjut, cek sendiri:

- [ ] Ada frame ukuran 1440x1024
- [ ] Ada 12 kolom grid
- [ ] Ada header dengan judul dan search
- [ ] Ada sidebar dengan 4 menu
- [ ] Ada 3 stat cards dengan angka
- [ ] Ada 2 area grafik
- [ ] Ada tabel dengan 5 kolom dan 5 data
- [ ] Semua pake warna abu-abu doang

### 👥 Review Teman (10 Menit)

1. Share link Figma ke teman
2. Cek punya teman, kasih feedback:
   - "Bagusnya: ********\_********"
   - "Saran: ********\_\_\_\_********"

### 🔧 Perbaiki (5 Menit)

Berdasarkan feedback, perbaiki wireframe-mu.

---

## 📖 Tugas Rumah

### 🎯 Yang Harus Dikerjakan:

1. **Rapikan file Figma** berdasarkan feedback tadi

2. **Ekspor jadi gambar:**
   - Klik frame dashboard di Figma
   - Panel kanan → Export → PNG
   - Beri nama: `low-fi-dashboard.png`

3. **Upload ke GitHub:**
   - Buat folder `materials/week-02/`
   - Upload gambar ke folder itu
   - Commit dan push

4. **Bawa ke pertemuan berikutnya:**
   - File Figma siap diedit
   - Gambar PNG udah di GitHub

---

## 💬 Tips & Trik

### ❌ Jangan Lakukan Ini:

- Pake warna-warni (inget! cuma abu-abu!)
- Pake font keren-keren (pake font standar aja)
- Langsung detail banget (ini masih sketsa kasar!)
- Lupa kasih label (judul harus jelas!)

### ✅ Yang Harus Dilakukan:

- Pake abu-abu semua
- Fokus ke posisi elemen
- Kasih label yang jelas
- Tanya diri sendiri: "Ini mudah dipahami?"

---

## 🎯 Yang Harus Kamu Kuasai Hari Ini:

1. ✅ Bisa pilih topik dashboard
2. ✅ Tahu 3 angka penting yang ditampilkan
3. ✅ Bisa bikin sketsa di Figma
4. ✅ Tahu posisi 5 komponen dashboard

**Selamat! 🎉** Kamu udah bisa bikin sketsa dashboard! Pertemuan selanjutnya kita akan belajar bikin desain yang lebih cantik (High-Fi)!

**See you next week!** 👋
