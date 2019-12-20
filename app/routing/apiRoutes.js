const express = require('express');
const router = express.Router();

const friend = require('../data/friends');

router.get('/', (req, res) => {
    res.send('Success');
});

module.exports = router;