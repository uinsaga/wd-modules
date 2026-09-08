### **Tugas Praktikum Pertemuan 2: Hands-on Tag Dasar HTML & Analisis Tampilan**

**Sifat Tugas:** Individu

**Tenggat Waktu:** 1 Minggu 

---

#### **Petunjuk Pengerjaan:**

1. Buka *text editor* pilihan kalian (VS Code, Notepad, Sublime Text, dll.).
2. **Ketik ulang secara manual (DILARANG COPY-PASTE)** seluruh kode di bawah ini ke dalam editor.
3. Ganti teks di dalam tanda kurung siku `[...]` sesuai data dan jawaban kalian sendiri.
4. Simpan file dengan nama: **`Tugas2_NIM_Nama.html`**.
5. Jalankan file tersebut dengan cara klik dua kali untuk membukanya di browser (Chrome/Firefox/Edge).

---

#### **Kode HTML yang Wajib Diketik:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Praktikum 2 - Tag Dasar HTML</title>
</head>
<body>

    <!-- 1. HEADER & IDENTITAS -->
    <h1>[Isi Nama Lengkap Kalian]</h1>
    <h2>Mahasiswa Data Science - NIM: [Isi NIM Kalian]</h2>
    <p>
        Selamat datang di halaman web pertama saya. Saat ini saya sedang mempelajari 
        <b>dasar-dasar HTML</b> dan <i>User Interface (UI)</i> sederhana.
    </p>

    <hr>

    <!-- 2. GAMBAR & LINK -->
    <h2>Foto & Profil Profesional</h2>
    <!-- Ganti URL gambar di bawah dengan URL foto bebas dari internet -->
    <img src="https://via.placeholder.com/150" alt="Foto Profil Saya" width="150">
    <p>
        Tautan Profil: 
        <a href="[Isi URL LinkedIn/GitHub/Sosmed kalian]">Kunjungi LinkedIn / GitHub Saya</a>
    </p>

    <hr>

    <!-- 3. LIST (DAFTAR) -->
    <h2>Rencana Pembelajaran Data Science</h2>
    
    <h3>Topik yang Ingin Dikuasai (Unordered List):</h3>
    <ul>
        <li>[Topik 1, misal: Data Preprocessing]</li>
        <li>[Topik 2, misal: Machine Learning]</li>
        <li>[Topik 3, misal: Data Visualization]</li>
    </ul>

    <h3>Langkah Belajar Mingguan (Ordered List):</h3>
    <ol>
        <li>Memahami dasar struktur HTML & UI/UX</li>
        <li>Mempelajari styling menggunakan CSS</li>
        <li>Praktik membuat dashboard interaktif</li>
    </ol>

    <hr>

    <!-- 4. TABEL -->
    <h2>Jadwal Kuliah Favorit</h2>
    <table border="1" cellpadding="8">
        <tr>
            <th>Hari</th>
            <th>Mata Kuliah</th>
            <th>Jam</th>
        </tr>
        <tr>
            <td>[Isi Hari]</td>
            <td>Web Design & UI/UX</td>
            <td>[Isi Jam]</td>
        </tr>
        <tr>
            <td>[Isi Hari]</td>
            <td>[Isi Matkul Lain]</td>
            <td>[Isi Jam]</td>
        </tr>
    </table>

    <hr>

    <!-- 5. FORM SEDERHANA -->
    <h2>Form Input Kontak Sederhana</h2>
    <form>
        <label>Nama Pengunjung:</label><br>
        <input type="text" placeholder="Ketik nama Anda..."><br><br>

        <label>Pesan / Masukan:</label><br>
        <textarea rows="4" cols="40" placeholder="Ketik pesan..."></textarea><br><br>

        <button type="button">Kirim Pesan</button>
    </form>

    <hr>

    <!-- 6. PENJELASAN & ANALISIS UI/UX -->
    <h2>Penjelasan & Analisis Mandiri</h2>
    
    <p><strong>1. Pemahaman Fungsi Tag:</strong></p>
    <p>
        Tag <code>&lt;h1&gt;</code> sampai <code>&lt;h3&gt;</code> berfungsi untuk... 
        sedangkan perbedaan utama antara tag <code>&lt;ul&gt;</code> dan <code>&lt;ol&gt;</code> adalah...
    </p>

    <p><strong>2. Analisis UI/UX (Keterbacaan Tampilan):</strong></p>
    <p>
        [Jelaskan bagaimana impresi kalian saat melihat tampilan halaman ini di browser. 
        Apakah susunan informasinya mudah dibaca oleh pengguna meskipun belum diberi warna/desain CSS? 
        Berikan alasannya dari sudut pandang pembaca!]
    </p>

</body>
</html>

```

---

### **Ringkasan Tag yang Dipelajari Mahasiswa di Tugas Ini:**

* **Struktur:** `<!DOCTYPE>`, `<html>`, `<head>`, `<title>`, `<body>`
* **Teks & Hirarki:** `<h1>`–`<h3>`, `<p>`, `<b>`, `<i>`, `<strong>`, `<code>`, `<hr>`, `<br>`
* **Media & Navigasi:** `<img>`, `<a>`
* **Daftar/List:** `<ul>`, `<ol>`, `<li>`
* **Data Terstruktur (Tabel):** `<table>`, `<tr>`, `<th>`, `<td>`
* **Interaksi/Input:** `<form>`, `<label>`, `<input>`, `<textarea>`, `<button>`

---

### Laporan Praktikum (Dikumpulkan):
Mahasiswa wajib mengumpulkan tugas ini dalam bentuk laporan praktikum dalam format PDF. Dengan susunan berikut:

1. Cover / Judul Laporan:
    - Judul: Laporan Praktikum Pertemuan 2 - Tag Dasar HTML & Analisis UI/UX
    - Nama Lengkap, NIM, Kelas, dan Mata Kuliah
2. Bagian 1: Source Code (Kode HTML):
    - Salinan (copy-paste) kode HTML yang sudah diketik lengkap. Gunakan font jenis monospace (seperti Consolas atau Courier New).
3. Bagian 2: Hasil Tampilan (Screenshot):
    - Screenshot halaman web saat dibuka di browser (pastikan seluruh isi dan address bar browser terlihat jelas).
4. Bagian 3: Analisis & Pembahasan:
    - Penjelasan mengenai fungsi tag HTML yang digunakan.
    - Analisis UI/UX sederhana terkait keterbacaan, hirarki visual, dan kemudahan pengguna dalam membaca struktur informasi halaman tersebut


*Note: Submit laporan yang telah dikerjakan ke google classroom.*

~ Selamat Mengerjakan. ~