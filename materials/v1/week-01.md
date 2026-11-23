# 📖 Pertemuan 1: Pengenalan Web Dev Sains Data, Konsep UI/UX, & Anatomi Dashboard

**Bobot SKS:** 3 SKS (150 Menit Luring / Studio)  
**Metode:** Briefing Teori (30 Min) ➔ Studio Hands-on & Setup (90 Min) ➔ Review & Checklist (30 Min)

---

## 📌 Capaian Pembelajaran (Sub-CPMK)

- Mahasiswa mampu menjelaskan pentingnya peran penyajian data visual dalam aplikasi web.
- Mahasiswa memahami perbedaan dasar antara _User Interface_ (UI) dan _User Experience_ (UX) pada konteks _Data Dashboard_.
- Mahasiswa mampu mengidentifikasi 5 komponen utama anatomi _web dashboard_.
- Mahasiswa mampu melakukan setup _development environment_ (VS Code, Git, Browser DevTools, Figma).

---

## 💡 1. Teori Dasar & Konsep (30 Menit)

### 🔹 1.1 Mengapa Sains Data Butuh Web Development?

Sebagai calon _Data Scientist_, pengolahan data mentah (_raw data_) menggunakan Python/R hanyalah separuh perjalanan. Agar hasil analisis atau model _Machine Learning_ dapat digunakan oleh pemangku kepentingan (_business stakeholder / non-technical user_), data tersebut harus disajikan dalam antarmuka yang interaktif.

```text
 [ Raw Data / CSV ] ──► [ Data Processing & ML ] ──► [ Web Dashboard Interaktif ]
                                                              │
                                                   (Dilihat oleh User/Bisnis)

```

Web adalah media paling universal untuk menyajikan hasil analisis data karena:

1. **Interaktif:** Pengguna bisa melakukan _filtering_, _sorting_, dan pencarian data secara _real-time_.
2. **Aksesibilitas Tinggi:** Dapat diakses lewat peramban (_browser_) HP maupun laptop tanpa perlu menginstal aplikasi khusus.

---

### 🔹 1.2 UI vs UX dalam Penyajian Data

- **User Interface (UI):** Segala hal yang terlihat oleh mata. Meliputi pemilihan warna (_color palette_), tipografi, kontras visual, ikon, serta _layouting_ komponen data.
- _Prinsip UI Data:_ Konsisten, _clean_, dan memprioritaskan keterbacaan angka (_readability_).

- **User Experience (UX):** Pengalaman dan kemudahan pengguna saat bernavigasi dan memahami informasi.
- _Prinsip UX Data (Aturan 5 Detik):_ Pengguna harus mampu memahami _insight_ atau KPI utama dalam 5 detik pertama tanpa merasa kebingungan.

---

### 🔹 1.3 Anatomi Data Dashboard System

Secara umum, sebuah _Data Dashboard System_ modern terdiri dari 5 komponen struktur utama:

```text
┌────────────────────────────────────────────────────────────────────────┐
│  [1] HEADER / NAVBAR (Logo, Judul Dashboard, User Profile, Filter)     │
├──────────────┬─────────────────────────────────────────────────────────┤
│              │  [3] STAT CARDS (Summary KPIs / Metric Key Data)        │
│              │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│              │  │ Total Data   │  │ Revenue      │  │ Active User  │    │
│  [2]         │  └──────────────┘  └──────────────┘  └──────────────┘    │
│  SIDEBAR     ├─────────────────────────────────────────────────────────┤
│  NAVIGATION  │  [4] DATA VISUALIZATION (Charts & Graphs Area)          │
│              │  ┌───────────────────────┐  ┌────────────────────────┐  │
│              │  │  [ Bar / Line Chart ] │  │  [ Pie / Donut Chart ] │  │
│              │  └───────────────────────┘  └────────────────────────┘  │
│              ├─────────────────────────────────────────────────────────┤
│              │  [5] DATA TABLE & ACTION (Detail Record & Pagination)   │
└──────────────┴─────────────────────────────────────────────────────────┘

```

1. **Header / Navbar:** Judul sistem, filter tanggal global, dan profil pengguna.
2. **Sidebar Navigation:** Menu navigasi antar halaman laporan data.
3. **Stat Cards (KPI Cards):** Ringkasan angka penting (misal: _Total Penjualan_, _Jumlah Pasien_, _Rata-rata Skor_).
4. **Data Visualization Area:** Grafik (_Line_, _Bar_, _Pie Chart_) untuk melihat tren data.
5. **Data Table:** Rincian tabel data mentah dengan fitur pencarian dan _pagination_.

---

## 🛠️ 2. Hands-on Studio & Praktik (90 Menit)

### 🔹 Sesi A: Setup Development Environment (30 Menit)

Setiap mahasiswa wajib memastikan perangkat laptop masing-masing telah terinstal _tools_ berikut:

1. **Visual Studio Code:**

- Instal ekstensi wajib: `Live Server`, `Prettier - Code formatter`, `Auto Rename Tag`.

2. **Git & GitHub:**

- Cek versi git via terminal: `git --version`.
- Melakukan konfigurasi nama dan email git:

```bash
git config --global user.name "Nama Kamu"
git config --global user.email "email@mahasiswa.ac.id"

```

3. **Figma & Browser:**

- Membuat/login akun [Figma](https://www.figma.com/).
- Membuka Google Chrome / Firefox dan menekan `F12` untuk mencoba _Developer Tools (Inspect Element)_.

---

### 🔹 Sesi B: Analisis & Mockup Reverse Engineering di Figma (60 Menit)

Kerjakan tugas studio berikut secara berpasangan (2 orang):

1. **Eksplorasi (15 Min):** Buka [Dribbble.com](https://dribbble.com) atau [Figma Community](https://www.figma.com/community), cari 1 contoh _Data Dashboard Design_.
2. **Bedah Anatomi (15 Min):** Ambil _screenshot_ dashboard tersebut, tempelkan (_paste_) ke dalam Canvas Figma baru kamu.
3. **Wireframing Dasar (30 Min):**

- Buatlah _frame_ baru ukuran **Desktop (1440 x 1024)** di samping gambar tersebut.
- Gunakan bentuk dasar (_Rectangle Tool [R]_, _Text Tool [T]_) untuk merekonstruksi/membuat ulang kerangka kotak dari 5 komponen anatomi (Header, Sidebar, Stat Cards, Chart Area, Data Table) dari dashboard yang kamu pilih.
- Beri label tulisan pada setiap kotak komponen tersebut.

---

## 📢 3. Review Progress & Assignment Checklist (30 Menit)

Sebelum meninggalkan sesi studio/lab, pastikan kamu menyelesaikan _checklist_ berikut dan menunjukkannya kepada Dosen/Asisten Laboratorium:

### 📋 Checklist Output Pertemuan 1:

- [ ] VS Code sudah terpasang beserta ekstensi `Live Server`.
- [ ] Git terkonfigurasi di komputer dan akun GitHub aktif.
- [ ] Akun Figma aktif dan _file Canvas_ Figma pertama berhasil dibuat.
- [ ] Berhasil membuat wireframing kotak 5 komponen anatomi dashboard di Figma.
- [ ] Memahami 5 komponen utama pembentuk _Data Dashboard_.

---

## 📖 Tugas Terstruktur / Mandiri (KM & KPT = 4 Jam)

1. Carilah 1 tema topik data yang ingin kamu jadikan proyek semester (contoh: _Dashboard Kebakaran Hutan_, _Dashboard Penjualan E-Commerce_, _Monitoring Cuaca & Polusi_).
2. Tuliskan ringkasan ide proyek (maksimal 1 halaman PDF / Markdown) berisi: **Judul Proyek**, **Target User**, dan **3 KPI/Metrik utama yang ingin ditampilkan pada Stat Card**.
3. Upload berkas ide tersebut ke repositori GitHub masing-masing pada folder `assignments/week-01/`.
