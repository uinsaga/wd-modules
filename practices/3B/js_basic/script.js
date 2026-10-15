const dataPenjualan = [
    { id: 101, produk: "iPhone 12", harga: 35000, terjual: 20, pendapatan: 100000 },
    { id: 102, produk: "iPhone 13", harga: 36000, terjual: 0, pendapatan: 200000 },
    { id: 103, produk: "iPhone 14", harga: 37000, terjual: 40, pendapatan: 300000 },
    { id: 104, produk: "iPhone 15", harga: 38000, terjual: 50, pendapatan: 400000 },
    { id: 105, produk: "iPhone 16", harga: 39000, terjual: 60, pendapatan: 500000 },
    { id: 106, produk: "iPhone 17", harga: 310000, terjual: 70, pendapatan: 600000 },
    { id: 107, produk: "iPhone 18", harga: 311000, terjual: 80, pendapatan: 700000 },

];

function formatPrice(harga) {
    return harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

const totalPendapatan = dataPenjualan.reduce((total, item) => total + item.pendapatan, 0);
const totalProductTerjual = dataPenjualan.reduce((total, item) => total + item.terjual, 0);
const populateStatus = dataPenjualan.map(item => {
    return {
        ...item,
        status: item.terjual > 0 ? "Terjual" : "Belum Terjual"
    };
});

//main2 dengan dom
const kpiPendapatanID = document.getElementById("kpi-pendapatan");
kpiPendapatanID.innerHTML = formatPrice(totalPendapatan);

const kpiPesananID = document.getElementById("kpi-pesanan");
kpiPesananID.innerHTML = totalProductTerjual + " Pcs";

const kpiRataRataID = document.getElementById("kpi-rata-rata");
kpiRataRataID.innerHTML = formatPrice(totalPendapatan / totalProductTerjual);

function renderTable() {
    const tabelBody = document.getElementById("tabel-body");
    dataPenjualan.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.produk}</td>
            <td>${item.terjual}</td>
            <td>${formatPrice(item.pendapatan)}</td>
            <td>${item.terjual == 0 ? 0 : (item.pendapatan / item.terjual * 100).toFixed(2)}%</td>`;

        tabelBody.appendChild(row);

    });
}

const totalRecordBadge = document.getElementById("total-record-badge");
totalRecordBadge.innerHTML = `${dataPenjualan.length} Records`;

renderTable();

