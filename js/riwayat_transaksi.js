document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.querySelector(".search-box");
  const tableBody = document.querySelector("tbody");
  const addTransactionForm = document.getElementById("addTransactionForm"); // Form tambah transaksi

  // 🔍 Fungsi Pencarian
  searchBox.addEventListener("input", function () {
    const searchValue = searchBox.value.trim().toLowerCase();
    const tableRows = document.querySelectorAll("tbody tr");

    tableRows.forEach((row) => {
      const idTransaksi = row.cells[1].textContent.toLowerCase(); // Kolom ID Transaksi

      if (idTransaksi.includes(searchValue)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });

  // ➕ Fungsi Menambahkan Transaksi Baru
  addTransactionForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman

    const idTransaksi = document.getElementById("idTransaksi").value;
    const tanggal = document.getElementById("tanggal").value;
    const totalHarga = document.getElementById("totalHarga").value;
    const totalBayar = document.getElementById("totalBayar").value;
    const kembalian = totalBayar - totalHarga;
    const user = "Admin"; // Bisa diganti sesuai sistem user

    // Membuat baris baru
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
            <td></td>
            <td>${idTransaksi}</td>
            <td>${tanggal}</td>
            <td>Rp ${parseInt(totalHarga).toLocaleString()}</td>
            <td>Rp ${parseInt(totalBayar).toLocaleString()}</td>
            <td>Rp ${parseInt(kembalian).toLocaleString()}</td>
            <td>${user}</td>
            <td>
                <button class="edit-btn" onclick="editTransaction(this)">Edit</button>
                <button class="delete-btn" onclick="deleteTransaction(this)">Hapus</button>
            </td>
        `;

    tableBody.appendChild(newRow);
    updateRowNumbers(); // Update nomor urut

    // Reset Form
    addTransactionForm.reset();
  });

  // 🔄 Fungsi Update Nomor Urut
  function updateRowNumbers() {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach((row, index) => {
      row.cells[0].textContent = index + 1;
    });
  }

  // 📝 Fungsi Edit Transaksi
  window.editTransaction = function (button) {
    const row = button.parentElement.parentElement;
    const idTransaksi = row.cells[1].textContent;
    const totalHarga = row.cells[3].textContent
      .replace("Rp ", "")
      .replace(",", "");
    const totalBayar = row.cells[4].textContent
      .replace("Rp ", "")
      .replace(",", "");

    // Isi form dengan data transaksi yang diedit
    document.getElementById("idTransaksi").value = idTransaksi;
    document.getElementById("totalHarga").value = totalHarga;
    document.getElementById("totalBayar").value = totalBayar;
  };

  // 🗑️ Fungsi Hapus Transaksi
  window.deleteTransaction = function (button) {
    const row = button.parentElement.parentElement;
    row.remove();
    updateRowNumbers(); // Update nomor setelah hapus
  };
});
