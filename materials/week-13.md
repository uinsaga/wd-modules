# Modul Pertemuan 13 | Fetch API & Data Dinamis untuk Dashboard

- **Mata Kuliah:** Desain Web & Visualisasi Data
- **Program Studi:** Sains Data (Semester 3)
- **Prasyarat:** Dashboard Polish & Multi-Chart (Pertemuan 12), Bootstrap 5 (Pertemuan 11), Chart.js (Pertemuan 10)
- **Estimasi Waktu:** 150 menit (3 SKS)

---

## Capaian Pembelajaran

Setelah menyelesaikan modul praktikum ini, mahasiswa diharapkan mampu:

1. Memahami konsep asynchronous JavaScript (Promise, async/await, fetch()) dan perbedaannya dengan kode sinkron.
2. Mengambil data dari sumber eksternal (file JSON lokal & public API) dan mengintegrasikannya ke dashboard Chart.js.
3. Menerapkan state management sederhana — loading, success, error — menggunakan komponen Bootstrap (spinner, alert, tombol disabled).
4. Menyusun narasi visual (storytelling) di dashboard sehingga tidak sekadar menampilkan grafik, tapi mengarahkan audiens pada insight.
5. Memahami rubrik & deliverables UAS yang akan dikerjakan setelah pertemuan ini.

---

## BAGIAN 1 — Teori: Fetch API & State Management

### 1.1 Mengapa Perlu Fetch API?

Sampai P12, data kita hardcoded di `script.js`:

```javascript
let datasetPenjualan = [
    { id: 101, kategori: "Elektronik", terjual: 2150, pendapatan: 625000000 },
    // ...
];
```

Masalahnya: data di dunia nyata tidak hardcoded. Data ada di server (API, database, file CSV/JSON). Untuk mengambilnya, JavaScript menyediakan `fetch()`.

### 1.2 Kode Sinkron vs Asinkron

| Kode Sinkron | Kode Asinkron |
|---|---|
| Dieksekusi baris per baris | Dieksekusi "nanti" (setelah selesai) |
| `let x = 5 + 3` → langsung jadi 8 | `fetch(url)` → langsung return Promise, hasilnya nanti |
| Blokir eksekusi sampai selesai | Tidak memblokir eksekusi |

Karena fetch butuh waktu (jaringan bisa lambat, server bisa down), hasilnya tidak langsung tersedia. JavaScript membungkusnya dalam **Promise** — "janji" bahwa hasilnya akan ada nanti.

### 1.3 Tiga Cara Mengonsumsi fetch()

**Cara 1 — `.then()` (cara lama):**

```javascript
fetch('data.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
```

**Cara 2 — `async/await` (cara modern, direkomendasikan):**

```javascript
async function loadData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
```

**Cara 3 — Top-Level Await** (hanya di ES Module) — skip dulu, tidak perlu.

💡 **Aturan:** Semua kode yang memakai `await` harus berada di dalam fungsi `async` (kecuali top-level module). Ini yang paling sering membuat mahasiswa error: `SyntaxError: await is only valid in async functions`.

### 1.4 Anatomi fetch() — Yang Sering Terlewat

```javascript
const response = await fetch('https://dummyjson.com/products');
```

`fetch()` **tidak** melempar error ketika status HTTP error (404, 500). Ia hanya "gagal" ketika jaringan bermasalah. Jadi wajib cek `response.ok`:

```javascript
const response = await fetch(url);
if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
}
const data = await response.json();
```

Ini salah satu kesalahan paling umum — mahasiswa mengira `.catch()` akan menangkap 404, padahal tidak.

### 1.5 Tiga State Wajib: Loading, Success, Error

Setiap operasi async punya 3 fase:

```text
  [ IDLE ] ──fetch──> [ LOADING ] ──selesai──> [ SUCCESS ]  → render chart
                            │
                            └─gagal──> [ ERROR ]  → tampilkan alert
```

Di Bootstrap, ketiga state ini bisa direpresentasikan dengan komponen bawaan:

| State | Komponen Bootstrap | Visual |
|---|---|---|
| Loading | `<div class="spinner-border">` | Spinner berputar |
| Success | (chart dirender seperti biasa) | Chart muncul |
| Error | `<div class="alert alert-danger">` | Kotak merah + pesan |

### 1.6 Cerita Visual: "Storytelling Dashboard"

Dashboard profesional bukan hanya kumpulan grafik. Ia harus punya alur cerita. Tiga pilar storytelling:

1. **Konteks di atas** — KPI cards & judul yang menjelaskan "ini data apa & periode kapan".
2. **Insight di tengah** — Grafik dipilih karena menjawab pertanyaan tertentu (bukan sekadar semua jenis chart dipakai).
3. **Kesimpulan di bawah** — Satu-dua kalimat insight di bawah dashboard: "Elektronik menyumbang 52% pendapatan meski hanya 25% volume → margin tertinggi."

Ini akan jadi rubrik UAS. Detail di Bagian 5.

---

## BAGIAN 2 — Praktikum A: Fetch dari JSON Lokal

**Target:** Mengganti `datasetPenjualan` hardcoded dengan data dari file `data.json`, lengkap dengan loading & error state.

⚠️ **PENTING — Live Server Wajib!**
`fetch('data.json')` tidak akan berfungsi jika Anda membuka `index.html` langsung dari folder (`file://`). Browser memblokirnya karena alasan keamanan (CORS).
Solusi: gunakan VS Code Live Server (klik kanan `index.html` → "Open with Live Server"), ATAU jalankan dari terminal:

```bash
# Python 3
python -m http.server 8000
# lalu buka http://localhost:8000
```

Tanpa ini, Anda akan melihat error CORS atau `Failed to fetch`.

### Langkah A1: Siapkan `data.json`

Buat file `data.json` di folder yang sama dengan `index.html`. Isinya data P12 (dipindah dari JS ke JSON):

```json
{
    "meta": {
        "sumber": "Data Simulasi Penjualan",
        "periode": "Q1 2025",
        "diperbarui": "2025-04-15"
    },
    "penjualan": [
        { "id": 101, "kategori": "Elektronik",        "terjual": 2150, "pendapatan": 625000000 },
        { "id": 102, "kategori": "Fashion",            "terjual": 3420, "pendapatan": 375000000 },
        { "id": 103, "kategori": "Makanan & Minuman",  "terjual": 1862, "pendapatan": 187500000 },
        { "id": 104, "kategori": "Kesehatan",          "terjual": 1000, "pendapatan":  62500000 },
        { "id": 105, "kategori": "Otomotif",           "terjual":  720, "pendapatan": 240000000 },
        { "id": 106, "kategori": "Perabotan",          "terjual":  540, "pendapatan":  95000000 }
    ]
}
```

💡 Perhatikan struktur: `{ meta, penjualan }`. Ini meniru format API nyata yang biasanya membungkus data utama di dalam sebuah key (`data`, `results`, atau `items`). Kita akan melatih mahasiswa untuk membongkar struktur seperti ini.

### Langkah A2: Tambahkan Komponen Loading & Error di HTML

Buka `index.html`. Di atas blok KPI Cards (sebelum `<div class="row g-3 mb-4">`), tambahkan:

```html
<!-- STATE CONTAINER — loading & error -->
<div id="loading-state" class="text-center py-4 d-none">
    <div class="spinner-border text-primary" role="status"></div>
    <p class="text-muted mt-2 mb-0 small">Memuat data penjualan...</p>
</div>

<div id="error-state" class="alert alert-danger d-none d-flex align-items-center gap-2" role="alert">
    <i class="bi bi-exclamation-triangle-fill"></i>
    <span id="error-message">Gagal memuat data.</span>
    <button id="btn-retry" class="btn btn-sm btn-outline-danger ms-auto">
        <i class="bi bi-arrow-clockwise me-1"></i>Coba Lagi
    </button>
</div>
```

Perhatikan class `d-none` (Bootstrap utility = `display: none`). Saat loading mulai, kita hapus `d-none`; saat selesai, kita tambahkan kembali.

### Langkah A3: Tambahkan Tombol Refresh di Navbar

Di navbar `index.html`, tambahkan tombol refresh di kanan:

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
    <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold" href="#">📊 Sales Analytics Engine</a>
        <div class="d-flex align-items-center gap-2">
            <span class="navbar-text text-white-50 small d-none d-md-inline">Prodi Sains Data</span>
            <button id="btn-refresh" class="btn btn-sm btn-light fw-semibold" title="Muat ulang data">
                <i class="bi bi-arrow-clockwise me-1"></i>Refresh
            </button>
        </div>
    </div>
</nav>
```

### Langkah A4: Refactor `script.js` — Pisahkan Init & Fetch

Buka `script.js`. Hapus baris `let datasetPenjualan = [...hardcoded...]` dan ganti dengan:

```javascript
// ============================================================
// STATE — diisi dari fetch, bukan hardcoded
// ============================================================
let datasetPenjualan = [];
let datasetMeta = null;
```

Kemudian tambahkan referensi DOM untuk state baru:

```javascript
// Di bawah const inputSearch = ...
const loadingState = document.getElementById('loading-state');
const errorState   = document.getElementById('error-state');
const errorMessage = document.getElementById('error-message');
const btnRetry     = document.getElementById('btn-retry');
const btnRefresh   = document.getElementById('btn-refresh');
```

Sekarang tambahkan fungsi state management:

```javascript
// ============================================================
// STATE MANAGEMENT — loading / success / error
// ============================================================
function showLoading() {
    loadingState.classList.remove('d-none');
    errorState.classList.add('d-none');
    btnRefresh.disabled = true;
    btnRefresh.innerHTML = '<span class="spinner-border spinner-border-sm me-1"></span>Memuat...';
}

function showError(message) {
    loadingState.classList.add('d-none');
    errorState.classList.remove('d-none');
    errorMessage.textContent = message;
    btnRefresh.disabled = false;
    btnRefresh.innerHTML = '<i class="bi bi-arrow-clockwise me-1"></i>Refresh';
}

function showSuccess() {
    loadingState.classList.add('d-none');
    errorState.classList.add('d-none');
    btnRefresh.disabled = false;
    btnRefresh.innerHTML = '<i class="bi bi-arrow-clockwise me-1"></i>Refresh';
}
```

### Langkah A5: Fungsi `fetchData()` — Inti Praktikum

Tambahkan fungsi berikut di `script.js`:

```javascript
// ============================================================
// FETCH DATA — Ambil data dari sumber eksternal
// ============================================================
async function fetchData() {
    showLoading();

    try {
        // 1. Kirim request
        const response = await fetch('data.json', { cache: 'no-store' });

        // 2. Cek status HTTP — fetch TIDAK melempar error untuk 404/500
        if (!response.ok) {
            throw new Error(`Server merespons dengan status ${response.status}`);
        }

        // 3. Parse body sebagai JSON
        const json = await response.json();

        // 4. Validasi struktur (defensive programming)
        if (!Array.isArray(json.penjualan)) {
            throw new Error('Struktur data tidak valid: field "penjualan" tidak ditemukan');
        }

        // 5. Simpan ke state
        datasetPenjualan = json.penjualan;
        datasetMeta       = json.meta || null;

        // 6. Render dashboard
        updateDashboard();
        showSuccess();

    } catch (err) {
        console.error('Fetch error:', err);
        showError(`Gagal memuat data: ${err.message}`);
    }
}
```

⚠️ `cache: 'no-store'` memastikan browser tidak memakai cache saat refresh. Penting saat testing & saat `data.json` diubah.

### Langkah A6: Wiring Event & Init

Di paling bawah `script.js`, ubah `updateDashboard();` (dari P11) menjadi:

```javascript
// ============================================================
// EVENT BINDING & INIT
// ============================================================
btnRefresh.addEventListener('click', fetchData);
btnRetry.addEventListener('click', fetchData);

// Mulai: fetch data pertama kali
fetchData();
```

💡 Perhatikan: kita tidak lagi memanggil `updateDashboard()` di awal. Dashboard akan dirender setelah data tiba di `fetchData()`.

### Langkah A7: Handle Submit Form — Tetap Jalan

Form penambahan data di P12 langsung `push` ke array. Sekarang `datasetPenjualan` diisi async, jadi pastikan submit tetap bekerja setelah data ada:

```javascript
formPenjualan.addEventListener('submit', function (event) {
    event.preventDefault();
    datasetPenjualan.push({
        id: Date.now(),
        kategori: inputKategori.value.trim(),
        terjual: parseInt(inputJumlah.value),
        pendapatan: parseInt(inputPendapatan.value)
    });
    updateDashboard();
    formPenjualan.reset();
});
```

Kode ini tidak perlu diubah — selama `datasetPenjualan` sudah berupa array (meski awalnya kosong), `push()` tetap jalan. Ini konsep "array state" yang fleksibel.

### ✅ Cek Point A

☐ Buka via Live Server / localhost. Muncul spinner sebentar, lalu chart render.
☐ Klik tombol Refresh di navbar → muncul spinner di tombol selama fetch.
☐ Rename sementara `data.json` menjadi `data2.json` → klik Refresh → muncul alert merah dengan pesan "Gagal memuat data: ...".
☐ Klik "Coba Lagi" di alert → setelah rename dikembalikan → chart muncul lagi.
☐ Tambahkan kategori via form → chart & tabel update (meski refresh = data hilang, karena masih lokal).
☐ Kosongkan filter search → chart menampilkan semua data dari JSON (bukan data P12 yang lama).

🤔 **Diskusi:** Kenapa data yang ditambahkan via form hilang setelah refresh? Jawab di laporan — ini akan jadi pembuka pembahasan UAS.

---

## BAGIAN 3 — Praktikum B: Fetch dari Public API

**Target:** Mengganti sumber data dari `data.json` lokal ke public API sungguhan, dan mengubah "shape" data agar sesuai struktur kita.

### Langkah B1: Kenalan dengan dummyjson.com

`dummyjson.com` adalah API publik gratis untuk latihan, tanpa API key. Endpoint yang cocok: `/products` — mengembalikan list produk dengan `title`, `price`, `stock`, `category`.

Contoh respons (disederhanakan):

```json
{
    "products": [
        { "id": 1, "title": "Essence Mascara", "price": 9.99, "stock": 94, "category": "beauty" },
        { "id": 2, "title": "Eyeshadow Palette", "price": 19.99, "stock": 34, "category": "beauty" }
    ],
    "total": 194,
    "skip": 0,
    "limit": 30
}
```

Perhatikan: field-nya `title`, `price`, `stock` — bukan `kategori`, `pendapatan`, `terjual`. Kita perlu transformasi.

### Langkah B2: Buat Fungsi Transformasi

API publik jarang punya struktur yang persis sama dengan aplikasi kita. Ini realitas kerja. Tambahkan fungsi ini di `script.js`:

```javascript
// ============================================================
// TRANSFORMASI — Mapping API response → struktur internal kita
// ============================================================
function transformProductsToSales(products) {
    // Agregasi: group by category, jumlahkan stock & price*stock
    const byKategori = {};

    products.forEach(p => {
        const key = p.category;
        if (!byKategori[key]) {
            byKategori[key] = { kategori: key, terjual: 0, pendapatan: 0 };
        }
        byKategori[key].terjual   += p.stock;
        byKategori[key].pendapatan += Math.round(p.price * p.stock * 15000); // asumsi $1 = Rp 15.000
    });

    // Konversi object → array + tambah id
    return Object.values(byKategori).map((item, index) => ({
        id: index + 101,
        kategori: capitalize(item.kategori),
        terjual: item.terjual,
        pendapatan: item.pendapatan
    }));
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
```

💡 **Kenapa `stock` sebagai "terjual"?** Karena dummyjson tidak punya field penjualan. Kita pakai stok sebagai proxy yang realistis untuk latihan. Di UAS, mahasiswa bebas memilih dataset yang memang punya data penjualan (misal `fakestoreapi.com/products`, atau bikin JSON sendiri yang lebih realistis).

### Langkah B3: Refactor `fetchData()` — Support Dua Sumber

Ganti isi `fetchData()` agar bisa fetch dari API maupun JSON lokal, dengan flag di atas file:

```javascript
// ============================================================
// KONFIGURASI SUMBER DATA — ubah di sini untuk switch
// ============================================================
const DATA_SOURCE = {
    type: 'api',   // 'api' atau 'local'
    url:  'https://dummyjson.com/products?limit=100'
};
```

Lalu ubah `fetchData()`:

```javascript
async function fetchData() {
    showLoading();

    try {
        let dataArray = [];
        let meta = null;

        if (DATA_SOURCE.type === 'local') {
            // ---- Sumber: JSON lokal ----
            const response = await fetch(DATA_SOURCE.url, { cache: 'no-store' });
            if (!response.ok) throw new Error(`Status ${response.status}`);
            const json = await response.json();
            if (!Array.isArray(json.penjualan)) throw new Error('Field "penjualan" tidak ditemukan');
            dataArray = json.penjualan;
            meta = json.meta;
        } else {
            // ---- Sumber: Public API (dummyjson) ----
            const response = await fetch(DATA_SOURCE.url, { cache: 'no-store' });
            if (!response.ok) throw new Error(`API error ${response.status}`);
            const json = await response.json();
            if (!Array.isArray(json.products)) throw new Error('Field "products" tidak ditemukan');
            dataArray = transformProductsToSales(json.products);
            meta = {
                sumber: 'dummyjson.com/products',
                periode: 'Live',
                diperbarui: new Date().toLocaleString('id-ID')
            };
        }

        datasetPenjualan = dataArray;
        datasetMeta       = meta;

        updateDashboard();
        showSuccess();

    } catch (err) {
        console.error('Fetch error:', err);
        showError(`Gagal memuat data: ${err.message}`);
    }
}
```

### Langkah B4: Tampilkan Info Sumber di UI

Agar storytelling lebih kuat, tampilkan meta di bawah navbar. Tambahkan HTML ini setelah `</nav>`:

```html
<div class="container-fluid px-4">
    <p class="small text-muted mb-3">
        <i class="bi bi-database me-1"></i>
        Sumber: <strong id="meta-sumber">-</strong>
        &nbsp;•&nbsp; Periode: <span id="meta-periode">-</span>
        &nbsp;•&nbsp; Diperbarui: <span id="meta-diperbarui">-</span>
    </p>
</div>
```

Lalu di `script.js`, tambahkan referensi & update di `updateDashboard()`:

```javascript
// Referensi DOM
const metaSumber     = document.getElementById('meta-sumber');
const metaPeriode    = document.getElementById('meta-periode');
const metaDiperbarui = document.getElementById('meta-diperbarui');

// Di updateDashboard(), di baris paling atas:
if (datasetMeta) {
    metaSumber.textContent     = datasetMeta.sumber || '-';
    metaPeriode.textContent    = datasetMeta.periode || '-';
    metaDiperbarui.textContent = datasetMeta.diperbarui || '-';
}
```

### ✅ Cek Point B

☐ Set `DATA_SOURCE.type = 'api'` → Refresh → chart menampilkan kategori produk dummyjson (beauty, fragrances, furniture, groceries, ...).
☐ Info "Sumber: dummyjson.com/products" muncul di bawah navbar.
☐ Set `DATA_SOURCE.type = 'local'` → Refresh → chart kembali menampilkan data `data.json`.
☐ Matikan koneksi internet (atau DevTools → Network → "Offline") → klik Refresh saat `type = 'api'` → muncul alert error yang rapi.
☐ Aktifkan koneksi → klik Coba Lagi → chart kembali.

### Langkah B5: Insight Singkat — Storytelling dalam Praktik

Di bawah chart Line, tambahkan card "Insight Otomatis" yang menghitung insight sederhana dari data:

```html
<!-- Tambahkan setelah card Line Chart -->
<div class="card border-0 shadow-sm mb-4 border-start border-success border-4">
    <div class="card-body">
        <h6 class="fw-bold text-success mb-2">
            <i class="bi bi-lightbulb me-1"></i>Insight Otomatis
        </h6>
        <p class="mb-0 small text-muted" id="insight-text">Menghitung...</p>
    </div>
</div>
```

Fungsi pembangkit insight di `script.js`:

```javascript
const insightText = document.getElementById('insight-text');

function generateInsight(data) {
    if (!data || data.length === 0) {
        insightText.textContent = 'Belum ada data untuk dianalisis.';
        return;
    }

    const totalPendapatan = data.reduce((a, b) => a + b.pendapatan, 0);
    const totalVolume     = data.reduce((a, b) => a + b.terjual, 0);
    const topPendapatan   = [...data].sort((a, b) => b.pendapatan - a.pendapatan)[0];
    const topVolume       = [...data].sort((a, b) => b.terjual - a.terjual)[0];

    const persenPendapatan = ((topPendapatan.pendapatan / totalPendapatan) * 100).toFixed(1);
    const persenVolume     = ((topVolume.terjual / totalVolume) * 100).toFixed(1);
    const rataRata         = Math.round(totalPendapatan / data.length);

    let kalimat = `Kategori <strong>${topPendapatan.kategori}</strong> menyumbang `;
    kalimat    += `<strong>${persenPendapatan}%</strong> total pendapatan `;
    kalimat    += `(Rp ${formatRupiah(topPendapatan.pendapatan)}). `;

    if (topPendapatan.kategori === topVolume.kategori) {
        kalimat += `Kategori ini juga memimpin volume (${persenVolume}%) — margin per unit relatif tinggi.`;
    } else {
        kalimat += `Volume tertinggi dipegang <strong>${topVolume.kategori}</strong> (${persenVolume}% unit). `;
        kalimat += `<em>${topPendapatan.kategori}</em> menang di nilai, <em>${topVolume.kategori}</em> menang di kuantitas.`;
    }

    kalimat += ` Rata-rata pendapatan per kategori: <strong>Rp ${formatRupiah(rataRata)}</strong>.`;

    insightText.innerHTML = kalimat;
}

// Helper — format angka ke Rupiah (jika belum ada dari P11, tambahkan)
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID').format(angka);
}
```

Panggil `generateInsight()` di baris paling bawah `updateDashboard()`:

```javascript
function updateDashboard() {
    // ... render KPI, chart bar, chart line, tabel (dari P12) ...

    // Tambahan P13
    if (datasetMeta) {
        metaSumber.textContent     = datasetMeta.sumber || '-';
        metaPeriode.textContent    = datasetMeta.periode || '-';
        metaDiperbarui.textContent = datasetMeta.diperbarui || '-';
    }
    generateInsight(datasetPenjualan);
}
```

✅ **Cek Point B (lanjutan)**

☐ Card "Insight Otomatis" muncul di bawah chart Line dan berisi kalimat yang menyebut nama kategori teratas.
☐ Ganti `DATA_SOURCE.type` dari `'api'` ke `'local'` → teks insight ikut berubah mengikuti data.
☐ Tambahkan kategori baru lewat form → insight ter-update setelah `updateDashboard()`.

---

## BAGIAN 4 — Troubleshooting & Latihan Mandiri

### 4.1 Error Umum Saat Fetch

| Pesan Error | Penyebab | Solusi |
|---|---|---|
| `await is only valid in async functions` | `await` di luar fungsi `async` | Bungkus dalam `async function` |
| `TypeError: Failed to fetch` | Buka via `file://` atau server mati | Jalankan Live Server / `python -m http.server` |
| `CORS policy: No 'Access-Control-Allow-Origin'` | Server tidak mengizinkan origin | Pakai API yang CORS-enabled (dummyjson, fakestoreapi) |
| `Unexpected token < in JSON` | Respons berupa HTML (halaman 404) | Cek `response.ok` sebelum `.json()` |
| `Cannot read properties of undefined` | Akses field yang tidak ada (`json.penjualan` padahal field-nya `products`) | `console.log(json)` dulu |

### 4.2 Latihan Mandiri

1. **Skeleton Loading** — Ganti `<div class="spinner-border">` di `#loading-state` dengan 3 skeleton card Bootstrap (`placeholder-glow` + `placeholder`). Tujuannya: memahami bahwa loading state juga bisa di-*design*, bukan hanya spinner default.

2. **Debounce Search** — Setiap ketikan di `inputSearch` langsung memicu filter. Tambahkan debounce 300 ms:

   ```javascript
   function debounce(fn, delay = 300) {
       let timer;
       return function (...args) {
           clearTimeout(timer);
           timer = setTimeout(() => fn.apply(this, args), delay);
       };
   }
   inputSearch.addEventListener('input', debounce(updateDashboard, 300));
   ```

3. **AbortController** — Klik tombol Refresh 5× berturut-turut. Beberapa request berjalan paralel; respons lama bisa menimpa yang baru. Solusinya:

   ```javascript
   let currentController = null;

   async function fetchData() {
       if (currentController) currentController.abort();
       currentController = new AbortController();
       showLoading();
       try {
           const response = await fetch(DATA_SOURCE.url, {
               cache: 'no-store',
               signal: currentController.signal
           });
           // ... sisa kode sama ...
       } catch (err) {
           if (err.name === 'AbortError') return; // request dibatalkan, bukan error
           showError(`Gagal memuat data: ${err.message}`);
       }
   }
   ```

4. **Menjawab Diskusi Praktikum A** — Data form hilang setelah refresh karena `datasetPenjualan` hanya hidup di memori. Solusi opsional: simpan ke `localStorage`:

   ```javascript
   const STORAGE_KEY = 'sales-extra-data';

   // Setelah fetch sukses:
   const extra = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
   datasetPenjualan = [...dataArray, ...extra];

   // Di handler submit:
   datasetPenjualan.push(newItem);
   localStorage.setItem(STORAGE_KEY, JSON.stringify(
       datasetPenjualan.filter(item => item.id > 1_000_000_000)
   ));
   ```

---

## BAGIAN 5 — Rubrik & Deliverables UAS

### 5.1 Ringkasan Tugas

UAS berbentuk **proyek individu**: membangun satu dashboard interaktif yang:

- Mengambil data dari sumber eksternal (API publik, JSON lokal, atau kombinasi).
- Memiliki minimal **3 visualisasi** dari jenis berbeda (contoh: bar, line, doughnut/pie).
- Menerapkan **state management** lengkap: loading, success, error, retry.
- Menyampaikan **narasi visual** dengan minimal **1 insight otomatis** dan **1 kesimpulan** di bawah dashboard.

Tema bebas, tapi harus jelas domainnya (penjualan, kualitas udara, cuaca, kripto, dll).

### 5.2 Deliverables

| # | Deliverable | Format | Keterangan |
|---|---|---|---|
| 1 | Kode sumber | Folder `.zip` (atau link repo GitHub) | Berisi `index.html`, `script.js`, `style.css`, `data.json` (jika ada), `README.md` |
| 2 | Laporan | PDF, maks 5 halaman | Screenshot dashboard, penjelasan sumber data, insight utama, kendala & solusi |
| 3 | Video demo | MP4/link YouTube, 3–5 menit | Menjelaskan alur dari loading → chart → insight, plus demo tombol Refresh & error state |
| 4 | `README.md` | Markdown di repo | Cara menjalankan, dependensi (CDN Bootstrap & Chart.js), sumber data, screenshot |

Semua diunggah ke LMS paling lambat sebelum sesi UAS dimulai. Keterlambatan: potongan 10% per hari.

### 5.3 Rubrik Penilaian (100 poin)

| Kriteria | Bobot | Sangat Baik (85–100) | Cukup (70–84) | Kurang (< 70) |
|---|---|---|---|---|
| **Visualisasi & Chart.js** | 25 | 3+ chart, jenis sesuai data, label/tooltip rapi, warna konsisten | 2–3 chart, minor issue pada label/legend | < 2 chart, atau chart tidak informatif |
| **Integrasi Data & Async** | 25 | Fetch berjalan mulus, ada transformasi data, `response.ok` dicek, abort/dedup | Fetch jalan, tapi tanpa validasi struktur | Hardcoded, atau fetch sering error tanpa penanganan |
| **State Management** | 15 | Loading, error, success, retry lengkap; tombol disabled saat loading | 2 dari 3 state ada | Hanya render data, tanpa loading/error |
| **Storytelling & Insight** | 20 | Ada konteks (KPI cards + meta sumber), narasi insight relevan, kesimpulan jelas | Insight ada tapi generik | Tidak ada narasi; hanya kumpulan chart |
| **Kualitas Kode & Dokumentasi** | 15 | Kode terorganisir (komentar, fungsi kecil, penamaan jelas), README & laporan rapi | Ada komentar sebagian, README singkat | Kode tidak terbaca, dokumentasi minim |

**Bonus (maks +5):** skeleton loading, `localStorage` persistence, dark mode, atau integrasi dua sumber data sekaligus.

### 5.4 Tips Sukses

1. **Mulai dari data, bukan dari chart.** Cari dulu sumber data yang menarik, baru pilih visualisasi yang sesuai.
2. **Satu insight kuat > lima insight lemah.**
3. **Test di network lambat.** DevTools → Network → "Slow 3G". Pastikan spinner/skeleton muncul dan tidak *layout shift*.
4. **Simpan versi stabil.** Tag commit `v1.0-stable` sebelum eksperimen.
5. **Screenshot setiap milestone.** Laporan akan lebih mudah ditulis kalau buktinya sudah terkumpul dari awal.

---

## Rangkuman Pertemuan 13

- `fetch()` bersifat **asinkron** — hasilnya dibungkus `Promise`, tidak langsung tersedia.
- **`response.ok` wajib dicek** karena `fetch()` tidak melempar error untuk status 404/500.
- Setiap operasi async punya **3 state**: loading, success, error — masing-masing punya representasi Bootstrap.
- **Transformasi data** (`transformProductsToSales`) adalah realitas kerja: API publik jarang punya struktur persis sama dengan aplikasi kita.
- **Storytelling dashboard** = konteks (KPI + meta) + insight (narasi otomatis) + kesimpulan (1–2 kalimat di bawah).
- **Deliverables UAS**: kode + laporan + video + README, dengan rubrik berbobot 5 kriteria.

---

## Referensi

- MDN Web Docs — *Using Fetch API*. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- MDN Web Docs — *Async function*. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- JavaScript.info — *Promises, async/await*. https://javascript.info/async
- Bootstrap 5 — *Spinners*, *Alerts*, *Placeholders*. https://getbootstrap.com/docs/5.3/
- Chart.js v4 — *Updating Charts*. https://www.chartjs.org/docs/latest/developers/updates.html
- DummyJSON — *Products endpoint*. https://dummyjson.com/docs/products
- Fake Store API — alternatif latihan. https://fakestoreapi.com/

---

**Akhir Modul Pertemuan 13.**
