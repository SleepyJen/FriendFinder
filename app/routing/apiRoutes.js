const express = require('express');
const router = express.Router();

const friends = require('../data/friends');

class Friend {
    constructor(name, photo, scores) {
        this.name = name;
        this.photo = photo;
        this.scores = scores;
    }
}

router.get('/', (req, res) => {
    res.send(friends);
});

router.post('/', (req, res) => {
    let userScores = req.body.scores;
    let newFriend = new Friend(req.body.name, req.body.photo, userScores);

    let difference = 1000;
    let friendMatchIndex = 0;
    let score = 0;

    for (let sc = 0; sc < userScores.length; sc++) {
        score += userScores[sc];
    }

    for (let i = 0; i < friends.length; i++) {
        let friendScore = 0;
        for (let j = 0; j < friends.scores.length; j++) {
            friendScore += friends.scores[j];
        }
        let diff = Math.abs(score - friendScore);
        if (diff < difference) {
            difference = diff;
            friendMatchIndex = i;
        }
    }
    friends.push(newFriend);
    res.send(friends[friendMatchIndex]);
});

module.exports = router;