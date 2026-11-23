# 📖 Pertemuan 3: Design System di Figma (Color Palette, Typography, & Auto Layout)

**Bobot SKS:** 3 SKS (150 Menit Luring / Studio)  
**Metode:** Briefing Teori (30 Min) ➔ Studio Figma Advance (90 Min) ➔ Review & Checklist (30 Min)

---

## 📌 Capaian Pembelajaran (Sub-CPMK)
* Mahasiswa mampu menyusun *Design System* sederhana (Color Tokens & Typography Style) khusus untuk visualisasi data.
* Mahasiswa mampu menguasai fitur *Auto Layout* dan *Components* di Figma untuk efisiensi *layouting*.
* Mahasiswa mampu menerapkan prinsip kontras dan *accessibility* visual pada *Data Dashboard*.

---

## 💡 1. Teori Dasar & Konsep (30 Menit)

### 🔹 1.1 Konsep Design System untuk Data Dashboard
*Design System* adalah kumpulan aturan visual, komponen, dan standar reusable yang digunakan untuk membangun antarmuka secara konsisten. 

Dalam *Data Dashboard*, konsistensi visual menentukan kecepatan analisis pengguna:
* **Color Palette (Warna):** Warna pada dashboard memiliki makna fungsional, bukan sekadar hiasan.
  * **Primary/Brand:** Warna dominan navigasi & struktur (`#2563EB` - Blue).
  * **Semantic Colors:** Mengindikasikan status data (`#10B981` Success/Up, `#EF4444` Danger/Down, `#F59E0B` Warning).
  * **Neutral Colors:** Latar belakang & teks (`#F8FAFC` Canvas, `#0F172A` Text Utama).
* **Typography Hierarchy:** Mengatur ukuran dan ketebalan huruf agar angka KPI mudah dibaca.
  * KPI Number: 28px–36px (Bold/SemiBold)
  * Section Header: 18px–20px (SemiBold)
  * Body/Table Text: 14px (Regular)

```text
 ┌──────────────────────────────────────────────────────────────────┐
 │ COLOR TOKENS:                                                    │
 │ [ Primary ]  [ Success ]  [ Warning ]  [ Danger ]  [ Neutral ]   │
 │   #2563EB      #10B981      #F59E0B      #EF4444     #0F172A     │
 └──────────────────────────────────────────────────────────────────┘

```

---

### 🔹 1.2 Figma Auto Layout (`Shift + A`)

*Auto Layout* adalah fitur Figma yang meniru cara kerja *CSS Flexbox*. Fitur ini memungkinkan komponen (seperti *Stat Card* atau *Table Row*) menyesuaikan ukurannya secara otomatis saat konten data di dalamnya berubah.

* **Direction:** Horizontal (Row) atau Vertical (Column).
* **Padding:** Jarak dalam antara elemen dan border card (misal: 16px).
* **Gap:** Jarak antar elemen di dalam container (misal: 12px).
* **Resizing Rules:** `Fixed`, `Hug Content`, atau `Fill Container`.

---

## 🛠️ 2. Hands-on Studio & Praktik Figma (90 Menit)

### 🔹 Sesi A: Membuat Color Styles & Text Styles (30 Menit)

Buka file Figma proyek kamu dari minggu ke-2:

1. **Membuat Color Tokens:**
* Buat 5 objek *Rectangle* kecil di samping Frame Low-Fi.
* Beri warna: Primary Blue (`#2563EB`), Success Green (`#10B981`), Danger Red (`#EF4444`), Neutral Dark (`#0F172A`), Neutral Light (`#F1F5F9`).
* Seleksi warna ➔ Klik ikon 4 titik di menu right panel (*Color Styles*) ➔ Klik `+` ➔ Beri nama (misal: `Primary/Base`, `Semantic/Success`, `Neutral/Dark`).


2. **Membuat Text Styles:**
* Buat teks contoh untuk `KPI Heading` (Inter, Bold, 32px), `Section Title` (Inter, SemiBold, 18px), dan `Body Text` (Inter, Regular, 14px).
* Simpan masing-masing ke dalam *Text Styles* Figma.



---

### 🔹 Sesi B: Merakit Reusable Components dengan Auto Layout (60 Menit)

#### 1. Membuat Reusable Stat Card Component:

1. Buat teks judul KPI (misal: "Total Revenue") dan teks angka KPI (misal: "$45,200").
2. Buat badge indikator tren (misal: "+12%" dengan latar hijau).
3. Seleksi semua elemen tersebut, tekan **`Shift + A`** (Aktifkan Auto Layout).
4. Atur properti Auto Layout:
* Vertical Direction, Gap: `8px`, Padding: `20px`.
* Fill Color: White (`#FFFFFF`), Corner Radius: `12px`.
* Stroke: Neutral Light (`#E2E8F0`).


5. Ubah frame ini menjadi Component (Tekan **`Ctrl + Alt + K`** atau `Cmd + Option + K`).

#### 2. Membuat Component Table Row:

1. Buat 4-5 teks untuk kolom data (*ID, Date, Customer, Status, Amount*).
2. Seleksi semua teks kolom, tekan `Shift + A` (Horizontal Direction).
3. Set resizing tiap cell ke `Fill Container` agar lebarnya elastis.
4. Jadikan Master Component untuk baris tabel.

---

## 📢 3. Review Progress & Checklist (30 Menit)

Tunjukkan hasil pembuatan *Design System* kamu kepada Dosen atau Asisten Lab:

### 📋 Checklist Progress Pertemuan 3:

* [ ] Memiliki minimal 4 *Color Styles* resmi (Primary, Success, Danger, Neutral) di file Figma.
* [ ] Memiliki minimal 3 *Text Styles* resmi (Heading, Subtitle, Body).
* [ ] Master Component *Stat Card* berhasil dibuat menggunakan **Auto Layout**.
* [ ] Master Component *Table Row* berhasil dibuat menggunakan **Auto Layout**.
* [ ] Paham perbedaan opsi resizing `Hug Content` dan `Fill Container`.

---

## 📖 Tugas Terstruktur / Mandiri (KM & KPT = 4 Jam)

1. Duplikasi *Master Component* Stat Card yang sudah dibuat menjadi 3 variansi visual berbeda (contoh: *Card Primary*, *Card Success*, *Card Warning*).
2. Susun kerangka *Auto Layout* untuk komponen **Sidebar Navigation** yang berisi 4 tombol menu navigasi.
3. Simpan progress file Figma kamu untuk persiapan *High-Fidelity Layouting* di Pertemuan 4 minggu depan.
