exports.getHome = (req, res) => {

    const dataDinamis = {
        pageTitle: 'Beranda Perpustakaan',
        waktuAkses: new Date().toLocaleString('id-ID'),
        pesanSambutan: 'Selamat datang di Sistem Katalog Perpustakaan Berbasis MVC!'
    };
    res.render('pages/home', dataDinamis);
};

exports.getAbout = (req, res) => {
    res.render('pages/about', {
        pageTitle: 'Tentang Kami'
    });
};