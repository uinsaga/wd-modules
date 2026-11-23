# 📖 Pertemuan 11: Form Validation & Event Handling dengan JavaScript

**Bobot SKS:** 3 SKS (150 Menit Luring / Studio)  
**Metode:** Briefing Teori (30 Min) ➔ Studio Live Coding JS Events (90 Min) ➔ Review & Code Inspection (30 Min)

---

## 📌 Capaian Pembelajaran (Sub-CPMK)
* Mahasiswa mampu memahami konsep dasar *DOM Event Listener* pada formulir HTML.
* Mahasiswa mampu menerapkan validasi data di sisi klien (*Client-side Form Validation*) menggunakan JavaScript.
* Mahasiswa mampu menghentikan perilaku *default browser* (`preventDefault()`) dan menangkap masukan formulir secara dinamis.

---

## 💡 1. Teori Dasar & Konsep (30 Menit)

### 🔹 1.1 Client-Side Validation & Event Handling
Validasi formulir di sisi klien bertujuan untuk memastikan data yang dimasukkan oleh pengguna sudah sesuai format sebelum diproses lebih jauh. Hal ini mencegah masuknya data kosong atau format yang salah ke dalam visualisasi dashboard.

```text
 User Submit Form ──► event.preventDefault() ──► Check Constraints (Validasi)
                                                         │
                                         ┌───────────────┴───────────────┐
                                         ▼                               ▼
                                  [Data Tidak Valid]              [Data Valid]
                                         │                               │
                                         ▼                               ▼
                              Tampilkan Pesan Error          Proses Data & Trigger
                              (Class: .is-invalid)           Toast Notification

```

#### Komponen JavaScript Utama:

* `document.getElementById()` : Mengambil elemen formulir dan input berdasarkan ID.
* `addEventListener('submit', function)` : Mengamati dan merespons aksi pengiriman formulir oleh pengguna.
* `event.preventDefault()` : Mencegah halaman web melakukan *refresh* otomatis saat formulir dikirim.
* `classList.add('is-invalid')` / `classList.remove('is-invalid')` : Memanipulasi kelas CSS Bootstrap untuk memberi penanda status validasi secara visual.

---

## 🛠️ 2. Hands-on Studio & Live Coding (90 Menit)

### 🔹 Sesi A: Menghubungkan File JavaScript & Event Listener (30 Menit)

Buat folder `materials/week-11/`, lalu buat file `index.html` (dapat menyalin dari minggu sebelumnya) dan file baru `script.js`.

Pastikan file `script.js` terhubung tepat di atas tag penutup `</body>` pada `index.html`:

```html
    <!-- Bootstrap JS CDN -->
    <script src="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/bootstrap.bundle.min.js)"></script>
    <!-- Custom JS Week 11 -->
    <script src="script.js"></script>
</body>
</html>

```

---

### 🔹 Sesi B: Penulisan Logika Validasi Form di JavaScript (60 Menit)

Buka file **`script.js`** dan ketikkan logika validasi formulir berikut:

```javascript
// 1. Tangkap Elemen Form dan Input berdasarkan ID
const formDataEntry = document.getElementById('formDataEntry');
const inputCustomer = document.getElementById('inputCustomer');
const inputCategory = document.getElementById('inputCategory');
const inputDate = document.getElementById('inputDate');
const inputAmount = document.getElementById('inputAmount');

// 2. Tambahkan Event Listener pada Submit Form
formDataEntry.addEventListener('submit', function (event) {
    // Hentikan aksi refresh default browser
    event.preventDefault();

    let isValid = true;

    // Validasi 1: Nama Pelanggan (Minimal 3 Karakter)
    if (inputCustomer.value.trim().length < 3) {
        showError(inputCustomer, 'Nama pelanggan minimal harus 3 karakter!');
        isValid = false;
    } else {
        showSuccess(inputCustomer);
    }

    // Validasi 2: Kategori Data (Wajib Dipilih)
    if (inputCategory.value === '' || inputCategory.value === null) {
        showError(inputCategory, 'Silakan pilih salah satu kategori data!');
        isValid = false;
    } else {
        showSuccess(inputCategory);
    }

    // Validasi 3: Tanggal Transaksi (Tidak Boleh Kosong)
    if (inputDate.value === '') {
        showError(inputDate, 'Tanggal transaksi wajib diisi!');
        isValid = false;
    } else {
        showSuccess(inputDate);
    }

    // Validasi 4: Total Nominal (Bermuatan Positif)
    if (inputAmount.value === '' || parseFloat(inputAmount.value) <= 0) {
        showError(inputAmount, 'Nominal transaksi harus lebih besar dari 0!');
        isValid = false;
    } else {
        showSuccess(inputAmount);
    }

    // 3. Jika Seluruh Validasi Lolos
    if (isValid) {
        alert('Formulir berhasil diproses! Data siap dimasukkan.');
        
        // Reset isi formulir & hapus kelas indikator validasi
        formDataEntry.reset();
        clearValidationState();
    }
});

// Helper Function: Menampilkan Pesan Error
function showError(inputElement, message) {
    inputElement.classList.add('is-invalid');
    inputElement.classList.remove('is-valid');
    
    // Cari elemen feedback bawaan atau atur teks pendamping
    let feedback = inputElement.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = message;
    }
}

// Helper Function: Menampilkan Indikator Sukses
function showSuccess(inputElement) {
    inputElement.classList.add('is-valid');
    inputElement.classList.remove('is-invalid');
}

// Helper Function: Clear State Pasca Submit Sukses
function clearValidationState() {
    const inputs = formDataEntry.querySelectorAll('.form-control, .form-select');
    inputs.forEach(input => {
        input.classList.remove('is-valid', 'is-invalid');
    });
}

```

#### Penambahan Elemen Feedback pada `index.html`:

Pastikan setiap elemen input pada `index.html` memiliki pembungkus pesan kesalahan di bawahnya, contohnya:

```html
<div class="col-md-6">
    <label for="inputCustomer" class="form-label small fw-semibold">Nama Pelanggan</label>
    <input type="text" class="form-control form-control-sm" id="inputCustomer">
    <!-- Container Pesan Error -->
    <div class="invalid-feedback"></div>
</div>

```

---

## 📢 3. Review Progress & Code Review (30 Menit)

Uji interaksi validasi formulir pada browser kamu:

### 📋 Checklist Progress Pertemuan 11:

* [ ] File `script.js` terhubung dengan benar dan bebas dari error pada *Browser Developer Console (F12)*.
* [ ] Pengiriman formulir kosong berhasil dicegah oleh `event.preventDefault()`.
* [ ] Kelas `.is-invalid` (border merah) dan pesan kesalahan muncul saat input tidak sesuai kriteria.
* [ ] Kelas `.is-valid` (border hijau) muncul saat masukan sudah memenuhi syarat.
* [ ] Form otomatis ter-reset bersih setelah pengiriman data berhasil.

---

## 📖 Tugas Terstruktur / Mandiri (KM & KPT = 4 Jam)

1. Tambahkan fungsi validasi untuk mengecek ekstensi berkas lampiran (`.csv` atau `.pdf`) pada elemen file upload.
2. Ganti perintah `alert()` biasa menggunakan komponen **Bootstrap Toast** atau modal pemberitahuan agar umpan balik sukses terlihat lebih profesional.
3. Commit & Push file `index.html` dan `script.js` ke dalam folder `materials/week-11/` di repositori GitHub kamu.

