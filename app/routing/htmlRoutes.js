const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

router.get('/servey', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/servey.html'));
});

module.exports = router;