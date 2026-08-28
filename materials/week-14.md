# 📖 Pertemuan 14: Web Storage API & Client-Side Data Persistence

**Bobot SKS:** 3 SKS (150 Menit Luring / Studio)  
**Metode:** Briefing Teori (30 Min) ➔ Studio Live Coding LocalStorage Integration (90 Min) ➔ Review & Code Inspection (30 Min)

---

## 📌 Capaian Pembelajaran (Sub-CPMK)
* Mahasiswa mampu memahami konsep persistensi data di sisi klien (*Client-side Persistence*) menggunakan **Web Storage API**.
* Mahasiswa mampu mengimplementasikan fitur simpan, baca, dan hapus data *dashboard* menggunakan **`localStorage`**.
* Mahasiswa mampu melakukan *serialization* dan *deserialization* data kompleks (Array of Objects) menggunakan `JSON.stringify()` dan `JSON.parse()`.

---

## 💡 1. Teori Dasar & Konsep (30 Menit)

### 🔹 1.1 Mengapa Membutuhkan LocalStorage?
Tanpa persistensi data, setiap kali halaman peramban (*browser*) di-refresh, seluruh *State* JavaScript di memori akan hilang kembali ke kondisi *default*. **Web Storage API (`localStorage`)** memungkinkan data tetap tersimpan secara permanen di browser pengguna meskipun halaman ditutup atau di-refresh.

```text
 ┌──────────────────────────┐     JSON.stringify()      ┌──────────────────────────┐
 │ Data State (Array/Object)│ ────────────────────────► │ LocalStorage (Browser)   │
 │ [ {id, customer, ...} ]  │ ◄──────────────────────── │ Key: "dashboard_data"    │
 └──────────────────────────┘      JSON.parse()         └──────────────────────────┘
              │                                                      │
              │ Render UI                                            │ Window Reload
              ▼                                                      ▼
 ┌──────────────────────────┐                           ┌──────────────────────────┐
 │ Data Table & Chart UI    │                           │ Persistent State Restored│
 └──────────────────────────┘                           └──────────────────────────┘

```

#### Karakteristik Utama LocalStorage:

* **Kapasitas Penyimpanan:** Sekitar 5MB per domain.
* **Tipe Data:** Hanya dapat menyimpan string teks (butuh konversi format JSON).
* **Life Cycle:** Data tersimpan tanpa batas waktu (*persistent*) sampai dihapus secara eksplisit oleh kode JS atau pengguna membersihkan cache.

---

## 🛠️ 2. Hands-on Studio & Live Coding (90 Menit)

### 🔹 Sesi A: Konsep Serialization & LocalStorage Helper (30 Menit)

Buat folder `materials/week-14/`, lalu persiapkan file `index.html` dan `script.js` (dapat melanjutkan dari minggu ke-13).

Buka file **`script.js`** dan buat dua fungsi bantu (*helper functions*) untuk manajemen penyimpanan data:

```javascript
// Nama Kunci Penyimpanan di LocalStorage
const STORAGE_KEY = 'DASHBOARD_TRANSACTION_DATA_V1';

// 1. Fungsi Menyimpan State Array ke LocalStorage
function saveStateToStorage(dataArray) {
    try {
        // Konversi Array Object ke String JSON (Serialization)
        const serializedData = JSON.stringify(dataArray);
        localStorage.setItem(STORAGE_KEY, serializedData);
    } catch (error) {
        console.error('Gagal menyimpan data ke LocalStorage:', error);
    }
}

// 2. Fungsi Membaca Data dari LocalStorage
function loadStateFromStorage() {
    try {
        const serializedData = localStorage.getItem(STORAGE_KEY);
        // Jika belum ada data tersimpan, kembalikan null
        if (serializedData === null) {
            return null;
        }
        // Konversi String JSON kembali ke Array Object (Deserialization)
        return JSON.parse(serializedData);
    } catch (error) {
        console.error('Gagal membaca data dari LocalStorage:', error);
        return null;
    }
}

```

---

### 🔹 Sesi B: Integrasi Persistensi ke State Management (60 Menit)

Perbarui alur kerja inisialisasi *Data State*, penambahan, dan penghapusan data pada file **`script.js`**:

```javascript
// Data Default (Digunakan HANYA jika LocalStorage masih kosong)
const defaultData = [
    { id: '#TRX-9801', date: '2026-08-28', customer: 'Budi Santoso', category: 'E-Commerce', status: 'Completed', amount: 350.00 },
    { id: '#TRX-9802', date: '2026-08-28', customer: 'Siti Aminah', category: 'Healthcare', status: 'Pending', amount: 120.50 }
];

// Inisialisasi State: Prioritaskan membaca dari LocalStorage
let transactionData = loadStateFromStorage() || defaultData;

// Inisialisasi Halaman
document.addEventListener('DOMContentLoaded', () => {
    // Render Tabel awal dari data persistent
    renderTable(transactionData);
    // Inisialisasi & Update Grafik
    initCharts();
    updateCharts();
});

// Perbarui Fungsi Event Submit Form Input
formDataEntry.addEventListener('submit', function (event) {
    event.preventDefault();

    // ... (Proses tangkap input seperti pada Week 12) ...

    const newRecord = {
        id: `#TRX-${Math.floor(1000 + Math.random() * 9000)}`,
        date: document.getElementById('inputDate').value,
        customer: document.getElementById('inputCustomer').value.trim(),
        category: document.getElementById('inputCategory').value,
        status: document.querySelector('input[name="statusRadio"]:checked').value,
        amount: parseFloat(document.getElementById('inputAmount').value)
    };

    // Tambah Data ke State Array
    transactionData.unshift(newRecord);

    // PERSISTENSI: Simpan State terbaru ke LocalStorage
    saveStateToStorage(transactionData);

    // Sync UI
    renderTable(transactionData);
    updateCharts();
    formDataEntry.reset();
});

// Perbarui Fungsi Hapus Data
function deleteRecord(index) {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        // Hapus elemen dari array
        transactionData.splice(index, 1);
        
        // PERSISTENSI: Simpan State terbaru ke LocalStorage
        saveStateToStorage(transactionData);

        // Sync UI
        renderTable(transactionData);
        updateCharts();
    }
}

// Fitur Tambahan: Reset Data ke Kondisi Awal (Clear Storage)
function resetAllData() {
    if (confirm('Peringatan: Seluruh data penyimpanan akan dihapus kembali ke default!')) {
        localStorage.removeItem(STORAGE_KEY);
        transactionData = [...defaultData];
        renderTable(transactionData);
        updateCharts();
    }
}

```

---

## 📢 3. Review Progress & Code Review (30 Menit)

Uji interaktivitas persistensi data pada browser kamu:

### 📋 Checklist Progress Pertemuan 14:

* [ ] Pengisian data baru dari formulir tetap tersimpan pada Data Table saat halaman di-*refresh* (`F5`).
* [ ] Data yang dihapus tidak muncul kembali saat halaman di muat ulang.
* [ ] Memeriksa data tersimpan melalui **Browser Developer Tools** (`F12` ➔ Tab **Application** / **Storage** ➔ **Local Storage**).
* [ ] Grafik dan komponen Stat Card sinkron dengan data yang dibaca dari LocalStorage.

---

## 📖 Tugas Terstruktur / Mandiri (KM & KPT = 4 Jam)

1. Buat tombol **"Reset All Data"** pada UI *Dashboard Header* yang memicu fungsi penghapusan `localStorage.removeItem()`.
2. Simpan juga preferensi tema pengguna (*Dark Mode / Light Mode*) ke dalam `localStorage` agar pilihan tema tetap aktif saat peramban dibuka kembali.
3. Commit & Push file `index.html` dan `script.js` ke folder `materials/week-14/` di repositori GitHub kamu.

