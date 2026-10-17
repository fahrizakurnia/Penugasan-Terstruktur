const koleksiBuku = [
    { judul: "Anak Undiknas", pengarang: "Fahriza Kurnia Pratama Putra", tahun: 2026, kategori: "Non-Fiksi" },
    { judul: "Pemrograman Web", pengarang: "Adi", tahun: 2011, kategori: "Non-Fiksi" }
];

exports.getKatalog = (req, res) => {
    res.render('pages/buku', {
        pageTitle: 'Katalog Perpustakaan',
        bukuList: koleksiBuku
    });
};

exports.postTambahBuku = (req, res) => {
    console.log("=== Data Buku Baru Diterima ===");
    console.log(req.body);
    
    const bukuBaru = {
        judul: req.body.judulBuku,
        pengarang: req.body.namaPengarang,
        tahun: req.body.tahunTerbit,
        kategori: req.body.kategori
    };
    
    koleksiBuku.push(bukuBaru);
    
    res.redirect('/buku');
};