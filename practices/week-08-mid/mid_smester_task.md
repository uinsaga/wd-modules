# UJIAN TENGAH SEMESTER (UTS)
**Mata Kuliah:** Desain Web & Visualisasi Data  
**Program Studi:** Sains Data (Semester 3)  
**Model Pengerjaan:** Tim 2 Orang
**Tema Project:** *Dashboard Pemantauan Posyandu & Deteksi Stunting Balita*  
**Teknologi:** Murni HTML5 + CSS Grid/Flexbox + JavaScript DOM 

---

## Deskripsi Tugas
Bekerja sama dalam tim 2 orang untuk merancang dan membangun halaman web **Dashboard Posyandu** dari nol. Dashboard ini digunakan untuk memantau data tumbuh kembang balita dan mendeteksi status stunting secara otomatis berdasarkan tinggi badan anak terhadap usianya.

---

## Starter Dataset (Wajib disalin ke `script.js`)

Setiap tim **wajib** menggunakan data awal 20 balita berikut di dalam file JavaScript Anda:

```javascript
const rawDataset = [
    { id: 101, namaBalita: "Ananda Rizky", usiaBulan: 24, tinggiCm: 85.5, beratKg: 11.2 },
    { id: 102, namaBalita: "Siti Aisyah", usiaBulan: 12, tinggiCm: 68.0, beratKg: 8.1 },
    { id: 103, namaBalita: "Bagas Pratama", usiaBulan: 36, tinggiCm: 90.0, beratKg: 13.5 },
    { id: 104, namaBalita: "Dewi Kirana", usiaBulan: 24, tinggiCm: 78.5, beratKg: 9.8 },
    { id: 105, namaBalita: "Muhammad Fadhil", usiaBulan: 12, tinggiCm: 73.2, beratKg: 9.0 },
    { id: 106, namaBalita: "Nayla Putri", usiaBulan: 36, tinggiCm: 86.0, beratKg: 11.8 },
    { id: 107, namaBalita: "Rian Hidayat", usiaBulan: 24, tinggiCm: 83.0, beratKg: 10.5 },
    { id: 108, namaBalita: "Aisyah Humaira", usiaBulan: 12, tinggiCm: 69.5, beratKg: 8.3 },
    { id: 109, namaBalita: "Budi Santoso", usiaBulan: 36, tinggiCm: 92.5, beratKg: 14.1 },
    { id: 110, namaBalita: "Citra Lestari", usiaBulan: 24, tinggiCm: 80.0, beratKg: 9.5 },
    { id: 111, namaBalita: "Dhani Ahmad", usiaBulan: 12, tinggiCm: 72.0, beratKg: 8.8 },
    { id: 112, namaBalita: "Eka Rahmawati", usiaBulan: 36, tinggiCm: 89.0, beratKg: 12.9 },
    { id: 113, namaBalita: "Fikri Haikal", usiaBulan: 24, tinggiCm: 86.0, beratKg: 11.5 },
    { id: 114, namaBalita: "Gita Gutawa", usiaBulan: 12, tinggiCm: 70.0, beratKg: 8.2 },
    { id: 115, namaBalita: "Hafiz Pratama", usiaBulan: 36, tinggiCm: 87.5, beratKg: 12.0 },
    { id: 116, namaBalita: "Intan Permata", usiaBulan: 24, tinggiCm: 82.5, beratKg: 10.8 },
    { id: 117, namaBalita: "Joko Susilo", usiaBulan: 12, tinggiCm: 74.0, beratKg: 9.2 },
    { id: 118, namaBalita: "Karin Novilda", usiaBulan: 36, tinggiCm: 91.0, beratKg: 13.8 },
    { id: 119, namaBalita: "Luthfi Hasan", usiaBulan: 24, tinggiCm: 79.0, beratKg: 9.7 },
    { id: 120, namaBalita: "Mira Lesmana", usiaBulan: 12, tinggiCm: 71.5, beratKg: 8.9 }
];
```

---

## Aturan Deteksi Stunting (Logika JavaScript)

Sistem harus mengevaluasi status balita secara otomatis saat data dimuat awal maupun saat ada penambahan data baru dari form:

- **Usia $\le$ 12 Bulan:** Jika `tinggiCm < 71.0` $\rightarrow$ Status = **"Stunting"**
- **Usia $\le$ 24 Bulan:** Jika `tinggiCm < 81.0` $\rightarrow$ Status = **"Stunting"**
- **Usia $\le$ 36 Bulan:** Jika `tinggiCm < 88.0` $\rightarrow$ Status = **"Stunting"**
- Selain kondisi di atas, Status = **"Normal"**

---

## Spesifikasi Fitur & Bobot Penilaian

### 1. Tata Letak & Responsivitas Layout (Bobot 30%)
- Gunakan murni **CSS Grid** atau **Flexbox** buatan sendiri (DILARANG menggunakan Bootstrap, Tailwind, atau framework CSS lainnya).
- Halaman dashboard minimal memuat:
  1. **Header Dashboard** (Memuat Judul Dashboard, Nama Posyandu, dan Nama Anggota Tim).
  2. **3 Kartu KPI Ringkasan Data** di bagian atas.
  3. **Tabel Data Balita** di area utama.
  4. **Form Input Data Baru** di sidebar atau bawah tabel.

### 2. DOM Rendering & Kartu KPI Otomatis (Bobot 35%)
- Merender seluruh baris tabel HTML secara dinamis dari *Array Dataset* menggunakan fungsi JavaScript.
- Kolom Status pada tabel wajib diberi penanda visual (misal: penanda warna/badge merah untuk **Stunting** dan hijau untuk **Normal**).
- **3 Kartu KPI** menghitung angka berikut secara otomatis dari dataset menggunakan JavaScript:
  - **KPI 1:** Total Seluruh Balita Terdaftar.
  - **KPI 2:** Total Balita Terdeteksi Stunting.
  - **KPI 3:** Rata-rata Tinggi Badan Balita (cm).

### 3. Interaktif Form & Event Handling (Bobot 35%)
- **Form Tambah Balita:**
  - Menyediakan input untuk Nama Balita, Usia (Bulan), Tinggi (cm), dan Berat (kg).
  - Saat tombol simpan diklik:
    1. Data baru berhasil ditambahkan ke dalam array.
    2. Sistem otomatis menentukan status ("Stunting" atau "Normal") dari data baru tersebut.
    3. Tabel dan Kartu KPI langsung ter-update otomatis tanpa reload halaman (`event.preventDefault()`).
    4. Input form di-reset kembali bersih.
- **Tombol Hapus (Delete):**
  - Setiap baris pada tabel memiliki tombol Hapus untuk menghapus data balita terkait.
  - Saat dihapus, tabel dan 3 Kartu KPI otomatis menghitung ulang datanya.

---

## ❌ Aturan Pengerjaan 
1. Silakan gunakan AI (seperti ChatGPT atau Claude) hanya untuk membantu proses menyusun konsep, ide, atau penulisan teks. Namun, dilarang keras menggunakan AI jenis apa pun untuk membuat, menyalin, atau menghasilkan kode pemrograman (code generation).
2. Tidak diperkenankan menggunakan Library JavaScript eksternal.

## 📩 Instruksi Pengumpulan Tugas

Tugas dikumpulkan dalam bentuk **satu file Laporan PDF** yang diunggah ke **Google Classroom** oleh salah satu perwakilan tim. *(Dilarang keras mengumpulkan file `.zip` / `.rar`)*.

Laporan PDF yang dikumpulkan **wajib** memuat poin-poin berikut secara berurutan:

1. **Identitas Tim**
* Nama Lengkap dan NIM Anggota 1 (Peran: *Driver*)
* Nama Lengkap dan NIM Anggota 2 (Peran: *Navigator*)

2. **Bukti Screenshot Tampilan (Hasil Uji Coba)**
* Lampirkan *screenshot* tampilan utama Dashboard Posyandu saat berhasil dimuat.
* Lampirkan *screenshot* saat form tambah data balita berhasil digunakan.

3. **Link Project JSFiddle (PENTING)** 
* Pindahkan seluruh kode HTML, CSS, dan JavaScript tim Anda ke **[https://jsfiddle.net](https://jsfiddle.net)**.
* Klik tombol **Save** di JSFiddle untuk menghasilkan link publik.
* Sertakan/tempelkan link JSFiddle aktif tersebut di dalam laporan PDF (pastikan link dapat diklik langsung oleh Dosen).

---

### 💡 Petunjuk Singkat Pengisian di JSFiddle:

* Tempelkan kode HTML ke kolom **HTML** *(tidak perlu tag `<html>` atau `<head>`)*.
* Tempelkan kode styling ke kolom **CSS**.
* Tempelkan logika JS dan `rawDataset` 20 balita ke kolom **JavaScript**.
* Klik **Run** untuk menguji tampilan, lalu klik **Save** untuk mendapatkan link URL-nya.
