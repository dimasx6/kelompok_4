document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.querySelector(".search-box");
    const tableBody = document.querySelector("tbody");
    const addTransactionForm = document.getElementById("addTransactionForm"); // Form tambah transaksi

    // 🔍 Fungsi Pencarian
    searchBox.addEventListener("input", function () {
        const searchValue = searchBox.value.trim().toLowerCase();
        const tableRows = document.querySelectorAll("tbody tr");

        tableRows.forEach(row => {
            const idTransaksi = row.cells[1].textContent.toLowerCase(); // Kolom ID Transaksi
            
            if (idTransaksi.includes(searchValue)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });

})
