const express = require('express');
const router = express.Router();

const bukuController = require('../controllers/buku.controller');

router.get('/buku', bukuController.getKatalog);

router.post('/tambah-buku', bukuController.postTambahBuku);

module.exports = router;