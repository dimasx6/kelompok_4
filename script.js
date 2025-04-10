const products = [
    { id: 1, name: "Headset Samsung", buy: "Rp. 10.000", sell: "Rp. 12.000", stock: 4 },
    { id: 2, name: "Paket Simpati", buy: "Rp. 12.000", sell: "Rp. 15.000", stock: 0 },
    { id: 3, name: "Voucher Axis 1.9GB", buy: "Rp. 9.175", sell: "Rp. 11.000", stock: -4 },
    { id: 4, name: "Voucher Axis 1GB", buy: "Rp. 14.000", sell: "Rp. 18.000", stock: 0 },
    { id: 5, name: "Voucher Indosat 1GB", buy: "Rp. 4.826", sell: "Rp. 7.000", stock: 6 },
    { id: 6, name: "Voucher Indosat 2.5GB", buy: "Rp. 10.300", sell: "Rp. 12.000", stock: 7 },
    { id: 7, name: "Voucher Indosat 5.5GB", buy: "Rp. 27.000", sell: "Rp. 33.000", stock: 3 },
];

let currentPage = 1;
const rowsPerPage = 5;

function displayTable(page) {
    const tableBody = document.getElementById("productTable");
    tableBody.innerHTML = "";

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedItems = products.slice(start, end);

    paginatedItems.forEach((product, index) => {
        const row = `
            <tr>
                <td>${start + index + 1}</td>
                <td>${product.name}</td>
                <td>${product.buy}</td>
                <td>${product.sell}</td>
                <td>${product.stock}</td>
                <td>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Hapus</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    document.getElementById("pageNumber").innerText = page;
}

document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayTable(currentPage);
    }
});

document.getElementById("nextPage").addEventListener("click", () => {
    if (currentPage < Math.ceil(products.length / rowsPerPage)) {
        currentPage++;
        displayTable(currentPage);
    }
});

document.getElementById("searchBox").addEventListener("input", function () {
    const value = this.value.toLowerCase();
    const filtered = products.filter(product => product.name.toLowerCase().includes(value));
    displayTable(1, filtered);
});

displayTable(currentPage);
