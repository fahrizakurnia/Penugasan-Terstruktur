const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('assets'));

app.use(express.urlencoded({ extended: true }));

const bukuRoutes = require('./routes/buku.routes');
const pageRoutes = require('./routes/page.routes');

app.use('/', bukuRoutes);
app.use('/', pageRoutes); 

app.use((req, res) => {
    res.status(404).send('<h1>Error 404</h1><p>Halaman yang Anda cari tidak ada.</p>');
});

app.listen(3000, () => {
    console.log('Server Tugas 2 Aktif di http://localhost:3000');
});