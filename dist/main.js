"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Book Management Application - Week 6");
console.log("=====================================");
// Mulai pengujian di bawah ini
const bookManager_1 = require("./functions/bookManager");
// Tambah data buku
(0, bookManager_1.addBook)({
    title: "Anne of Green Gables",
    author: "LM Montfomery",
    publicationYear: 1908
});
(0, bookManager_1.addBook)({
    title: "Heidi",
    author: "Johanna Spyri",
    publicationYear: 1880
});
(0, bookManager_1.addBook)({
    title: "Kambing Jantan",
    author: "Raditya Dika",
    publicationYear: 2014
});
// Tampilkan semua buku
console.log("\n=== LIST SEMUA BUKU ===");
(0, bookManager_1.listBooks)();
// Cari buku dengan judul tertentu
console.log("\n=== CARI BUKU: 'Heidi' ===");
(0, bookManager_1.searchBook)("Heidi");
// Cari tanpa parameter
console.log("\n=== CARI TANPA PARAMETER ===");
(0, bookManager_1.searchBook)();
