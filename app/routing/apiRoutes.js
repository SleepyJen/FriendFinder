const express = require('express');
const router = express.Router();

const friends = require('../data/friends');

router.get('/', (req, res) => {
    res.send(friends);
});

router.post('/', (req, res) => {
    let user = req.body;
    console.log(user);
    res.send('success');
});

module.exports = router;