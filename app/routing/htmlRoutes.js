const express = require('express');
const router = express.Router();
const PATH = require('path');

router.get('/', (req, res) => {
    res.sendFile(__dirname, '../public/home');
});

router.get('/servey', (req, res) => {
    res.sendFile(__dirname, '../public/servey');
});

module.exports = router;