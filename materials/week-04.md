# 📖 Pertemuan 4: Slicing Visual UI Design (High-Fidelity Dashboard Layout di Figma)

**Bobot SKS:** 3 SKS (150 Menit Luring / Studio)  
**Metode:** Briefing Teori (30 Min) ➔ Studio Figma High-Fi (90 Min) ➔ Review & Checklist (30 Min)

---

## 📌 Capaian Pembelajaran (Sub-CPMK)
* Mahasiswa mampu mengonversi *Low-Fidelity Wireframe* menjadi *High-Fidelity (High-Fi) Dashboard Design* yang siap di-*slicing*.
* Mahasiswa mampu menerapkan prinsip *Visual Hierarchy*, *Alignment*, dan *Grid Precision* menggunakan komponen dari *Design System*.
* Mahasiswa mampu membuat visualisasi grafik/chart buatan di Figma sebagai representasi data visual.

---

## 💡 1. Teori Dasar & Konsep (30 Menit)

### 🔹 1.1 Transformasi dari Low-Fi ke High-Fi Design
*High-Fidelity Design* adalah tampilan final produk visual sebelum masuk ke fase koding. Di tahap ini, seluruh elemen *grayscale* dari Low-Fi diubah menggunakan *Color Tokens*, *Text Styles*, ikon riil, dan komponen *Auto Layout* yang sudah dibuat pada Pertemuan 3.

```text
 ┌─────────────────────────┐          ┌─────────────────────────┐
 │ LOW-FI (Wireframe)      │          │ HIGH-FI (Final UI)      │
 │ ----------------------- │  ──────► │ ----------------------- │
 │ • Kotak Grayscale       │          │ • Color Styles & Shadow │
 │ • Teks Dummy Standard   │          │ • Real Icons & Typography│
 │ • Placeholder Box Chart │          │ • Detailed Chart Visual │
 └─────────────────────────┘          └─────────────────────────┘

```

---

### 🔹 1.2 Layouting System & Responsive Breakpoints Preview

Dalam membangun *Dashboard*, struktur *layout* harus konsisten dan memiliki penataan spasial yang jelas.

1. **Fixed Sidebar vs Fluid Content:**
* **Sidebar Width:** Umumnya berukuran tetap (*Fixed Width* 240px–280px).
* **Main Content:** Mengisi sisa ruang (*Fluid / Fill Container*) dengan memanfaatkan *Auto Layout* horizontal.


2. **Spacing Grid (8pt Grid System):**
* Semua *margin*, *padding*, dan *gap* menggunakan kelipatan 8 (8px, 16px, 24px, 32px) untuk menjaga konsistensi ritme visual.



---

## 🛠️ 2. Hands-on Studio & Praktik Figma (90 Menit)

### 🔹 Sesi A: Konstruksi Layout Utama Dashboard (40 Menit)

Buka file proyek Figma kamu, buat Frame baru **Desktop (1440 x 1024 px)** dan beri nama `HighFi_Dashboard_Main`:

1. **Membuat Shell Layout (Auto Layout Utama):**
* Buat *Frame* luar dengan *Horizontal Auto Layout* (`Shift + A`). Set Gap: `0px`.
* Masukkan komponen **Sidebar** di sisi kiri (Set Width: `Fixed 260px`, Height: `Fill Container`).
* Masukkan *Frame Main Content* di sisi kanan (Set Width: `Fill Container`, Height: `Fill Container`).


2. **Menyusun Header & Main Canvas:**
* Ubah *Main Content Frame* menjadi *Vertical Auto Layout*.
* Tambahkan komponen **Header/Navbar** di bagian atas (Padding: `24px`, Background: `#FFFFFF`).
* Buat area scrollable **Body Content** di bagian bawah Header (Padding: `32px`, Gap: `24px`, Background: `#F8FAFC`).



---

### 🔹 Sesi B: Slicing Komponen Data & Chart Visual (50 Menit)

#### 1. Menyusun Stat Cards Section:

* Buat container *Horizontal Auto Layout* untuk area KPI Cards. Set Gap: `24px`.
* Tarik 3–4 instansi dari Master Component **Stat Card** yang telah dibuat pada Pertemuan 3.
* Ubah nilai teks dan warna badge sesuai *data specs* ide proyek masing-masing (contoh: *Total Users*, *Monthly Revenue*, *Conversion Rate*). Set semua card ke `Fill Container`.

#### 2. Merancang Component Graphic/Chart Visual:

* Buat 2 buah *Card Container* menggunakan Auto Layout dengan *background* putih dan *border-radius* 12px.
* **Line Chart:** Gunakan *Pen Tool (P)* atau *Plugin Figma* (seperti *Chart* / *Charts*) untuk membuat visualisasi grafik garis. Tambahkan titik *data point* dan label sumbu X/Y.
* **Bar / Donut Chart:** Buat visualisasi grafik batang atau lingkaran sederhana menggunakan *Shapes* & *Vector Tools*.

#### 3. Finishing Data Table Section:

* Masukkan komponen **Data Table Header** dan minimal **5 Data Table Rows**.
* Lengkapi dengan elemen interaktif sederhana seperti *Status Badge* (`Success`, `Pending`, `Failed`), tombol pencarian (*Search Bar*), dan pagination (`Page 1 of 5`).

---

## 📢 3. Review Progress & Peer Checklist (30 Menit)

Tunjukkan tampilan akhir *High-Fidelity Dashboard* kamu kepada Dosen atau Asisten Lab untuk dicek kebersihannya:

### 📋 Checklist Progress Pertemuan 4:

* [ ] Tampilan Dashboard sudah *Full High-Fidelity* (Menggunakan warna resmi, tipografi standar, dan ikon).
* [ ] Struktur Layout Utama menggunakan *Auto Layout* (Sidebar *Fixed*, Main Content *Fill Container*).
* [ ] Menggunakan *8pt Spacing Grid* untuk padding dan gap antar komponen.
* [ ] Memiliki minimal 3 Stat Cards, 2 Visualisasi Grafik (Chart), dan 1 Data Table yang terisi data riil (bukan *Lorem Ipsum*).
* [ ] Semua *layer* dan *frame* di Figma tertata rapi dengan penamaan yang jelas (misal: `Header`, `Sidebar`, `StatCards-Section`, `Chart-Section`).

---

## 📖 Tugas Terstruktur / Mandiri (KM & KPT = 4 Jam)

1. Rapikan kerapian visual, kontras warna, dan *alignment* pada file *High-Fidelity Dashboard* di Figma.
2. Buat variasi mode tampilan **Mobile View (Frame iPhone 14/15 - 393px)** dari dashboard yang sama (ubah layout dari multi-kolom menjadi 1 kolom memanjang ke bawah).
3. Ekspor kedua frame (`HighFi_Desktop.png` dan `HighFi_Mobile.png`) dan simpan di folder `materials/week-04/` pada repositori GitHub kamu.

