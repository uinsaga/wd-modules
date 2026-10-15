const datasetPenjualan = [
    { id: 101, kategori: "Elektronik", terjual: 2150, pendapatan: 625000 },
    { id: 102, kategori: "Fashion", terjual: 3420, pendapatan: 375000 },
    { id: 103, kategori: "Makanan & Minuman", terjual: 1862, pendapatan: 187500 },
    { id: 104, kategori: "Kesehatan", terjual: 1000, pendapatan: 62500 }
];

function getData() {
    return datasetPenjualan;
}

function getDataById(id) {
    return datasetPenjualan.find(x => x.id === id);
}

function getDataByKategori(kategori) {
    return datasetPenjualan.find(x => x.kategori === kategori);
}

function totalPendapatan() {
    return datasetPenjualan.reduce((subTotal, item) => subTotal + item.pendapatan, 0);
}

function formatIDR(value) {
    return "Rp. " + value.toLocaleString("id-ID");
}


const pendapatan = totalPendapatan();
const totalPendapatanId = document.getElementById("kpi-pendapatan");

totalPendapatanId.innerHTML = formatIDR(pendapatan);

const pesanan = datasetPenjualan.length;
const totalPesananId = document.getElementById("kpi-pesanan");
totalPesananId.innerHTML = pesanan;

const rataPendapatan = totalPendapatan() / pesanan;
const totalRataPendapatanId = document.getElementById("kpi-rata-rata");
totalRataPendapatanId.innerHTML = formatIDR(rataPendapatan);

function renderTable() {
    console.info("rendering table .... ")
    const tableBodyID = document.getElementById("tabel-body");
    tableBodyID.innerHTML = "";

    datasetPenjualan.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.kategori}</td>
            <td>${item.terjual} Pcs</td>
            <td>${formatIDR(item.pendapatan)}</td>
            <td>-</td>
        `;

        tableBodyID.appendChild(row);
    });
}

renderTable();