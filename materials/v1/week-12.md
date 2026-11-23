# 📖 Pertemuan 12: JavaScript DOM Manipulation (Dynamic Table Rendering & State Management)

**Bobot SKS:** 3 SKS (150 Menit Luring / Studio)  
**Metode:** Briefing Teori (30 Min) ➔ Studio Live Coding DOM Manipulation (90 Min) ➔ Review & Code Inspection (30 Min)

---

## 📌 Capaian Pembelajaran (Sub-CPMK)
* Mahasiswa mampu memahami konsep *Document Object Model* (DOM) dan manipulasi elemen secara dinamis menggunakan JavaScript.
* Mahasiswa mampu menyimpan data masukan formulir ke dalam struktur *Array of Objects* (State Management).
* Mahasiswa mampu merender baris data baru ke dalam *Data Table* HTML secara otomatis tanpa memuat ulang (*refresh*) halaman.

---

## 💡 1. Teori Dasar & Konsep (30 Menit)

### 🔹 1.1 State-Driven UI Rendering
Dalam pengembangan *dashboard* modern, tampilan antarmuka (UI) merupakan cerminan langsung dari data (*State*). Saat data bertambah, diperbarui, atau dihapus, kita tidak lagi merender ulang seluruh halaman HTML secara manual, melainkan memanipulasi elemen DOM target secara presisi.

```text
 ┌──────────────────────────┐      Push Object      ┌──────────────────────────┐
 │ Input Form Data          │ ────────────────────► │ Data State (Array)       │
 └──────────────────────────┘                       │ [ {id, user, status}, ...]│
                                                    └────────────┬─────────────┘
                                                                 │
                                                      renderTable() Loop
                                                                 │
                                                                 ▼
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │ HTML Data Table (DOM Node: <tbody>)                                         │
 │ <tr><td>#TRX-001</td><td>Budi</td><td><span class="...">Completed</span></td>│
 └─────────────────────────────────────────────────────────────────────────────┘

```

#### Komponen Manipulasi DOM Utama:

* `document.querySelector('tbody')` : Mengambil node kontainer baris tabel.
* `document.createElement('tr')` : Membuat elemen baris tabel baru di memori browser.
* `innerHTML` / `appendChild()` : Menyisipkan sintaks HTML atau node elemen baru ke dalam pohon DOM.
* `Array.prototype.forEach()` : Melakukan iterasi terhadap seluruh *record* data untuk dirender ke tabel.

---

## 🛠️ 2. Hands-on Studio & Live Coding (90 Menit)

### 🔹 Sesi A: Menyiapkan Data State & Rendering Engine (30 Menit)

Buat folder `materials/week-12/`, lalu buat file `index.html` (dapat melanjutkan dari minggu ke-11) dan file `script.js`.

Buka file **`script.js`** dan buat struktur data awal (*Mock Data*) serta fungsi *render*:

```javascript
// 1. Data State (Array of Objects)
let transactionData = [
    { id: '#TRX-9801', date: '2026-08-28', customer: 'Budi Santoso', category: 'E-Commerce', status: 'Completed', amount: 350.00 },
    { id: '#TRX-9802', date: '2026-08-28', customer: 'Siti Aminah', category: 'Healthcare', status: 'Pending', amount: 120.50 },
    { id: '#TRX-9803', date: '2026-08-27', customer: 'Dewi Lestari', category: 'IoT Sensor', status: 'Failed', amount: 0.00 }
];

// 2. Tangkap Elemen DOM
const tableBody = document.querySelector('#dataTable tbody');

// 3. Fungsi utama untuk memetakan Array Data ke dalam Tabel HTML
function renderTable(dataArray) {
    // Kosongkan isi tabel terlebih dahulu
    tableBody.innerHTML = '';

    // Jika data kosong
    if (dataArray.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" class="text-center text-muted py-3">Tidak ada data transaksi.</td></tr>`;
        return;
    }

    // Iterasi setiap objek data dan buatkan elemen baris <tr>
    dataArray.forEach((item, index) => {
        const row = document.createElement('tr');
        
        // Tentukan skema warna badge status
        let badgeClass = 'bg-secondary-subtle text-secondary';
        if (item.status === 'Completed') badgeClass = 'bg-success-subtle text-success';
        if (item.status === 'Pending') badgeClass = 'bg-warning-subtle text-warning';
        if (item.status === 'Failed') badgeClass = 'bg-danger-subtle text-danger';

        row.innerHTML = `
            <td class="fw-semibold">${item.id}</td>
            <td>${item.date}</td>
            <td>${item.customer}</td>
            <td>${item.category}</td>
            <td><span class="badge ${badgeClass} px-2 py-1">${item.status}</span></td>
            <td class="fw-bold">$${parseFloat(item.amount).toFixed(2)}</td>
            <td class="text-end">
                <button class="btn btn-light btn-sm text-danger" onclick="deleteRecord(${index})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;

        // Tempelkan baris <tr> ke dalam <tbody>
        tableBody.appendChild(row);
    });
}

// Render data awal saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderTable(transactionData);
});

```

---

### 🔹 Sesi B: Integrasi Form Input ke Dynamic Data State (60 Menit)

Tambahkan fungsi penambahan data baru dan penghapusan data pada file **`script.js`**:

```javascript
// 4. Tangkap Form Element
const formDataEntry = document.getElementById('formDataEntry');

formDataEntry.addEventListener('submit', function (event) {
    event.preventDefault();

    // Ambil nilai masukan dari form
    const customer = document.getElementById('inputCustomer').value.trim();
    const category = document.getElementById('inputCategory').value;
    const date = document.getElementById('inputDate').value;
    const amount = document.getElementById('inputAmount').value;
    
    // Tangkap status dari Radio Button terpilih
    const selectedStatus = document.querySelector('input[name="statusRadio"]:checked').value;

    // Generate ID Transaksi Otomatis
    const newId = `#TRX-${Math.floor(1000 + Math.random() * 9000)}`;

    // Buat objek data baru
    const newRecord = {
        id: newId,
        date: date,
        customer: customer,
        category: category,
        status: selectedStatus,
        amount: parseFloat(amount)
    };

    // Tambahkan objek baru ke dalam Array State (Di posisi paling atas)
    transactionData.unshift(newRecord);

    // Re-render Data Tabel
    renderTable(transactionData);

    // Reset isi form
    formDataEntry.reset();
});

// 5. Fungsi Hapus Data Record berdasarkan Index
function deleteRecord(index) {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        // Hapus 1 elemen dari array berdasarkan index
        transactionData.splice(index, 1);
        
        // Re-render Data Tabel
        renderTable(transactionData);
    }
}

```

---

## 📢 3. Review Progress & Code Review (30 Menit)

Uji interaksi manipulasi DOM pada browser kamu:

### 📋 Checklist Progress Pertemuan 12:

* [ ] Data *Mock Array* berhasil dirender secara otomatis saat halaman pertama kali dibuka.
* [ ] Mengisi formulir dan menekan tombol **Simpan Data** berhasil menambahkan baris baru pada tabel tanpa *refresh*.
* [ ] Badge warna status (`Completed`, `Pending`, `Failed`) berubah secara otomatis sesuai pilihan radio button.
* [ ] Tombol ikon sampah (`bi-trash`) berhasil menghapus baris data terpilih dari *State* dan Tabel.

---

## 📖 Tugas Terstruktur / Mandiri (KM & KPT = 4 Jam)

1. Buat fungsi kalkulasi otomatis untuk memperbarui nilai total angka pada **Stat Card KPI (Total Revenue)** setiap kali ada data transaksi baru yang ditambahkan atau dihapus.
2. Tambahkan fungsi *Fitur Pencarian Real-Time* sederhana menggunakan *Event Listener* `input` pada kotak pencarian tabel.
3. Commit & Push file `index.html` dan `script.js` ke folder `materials/week-12/` di repositori GitHub kamu.
