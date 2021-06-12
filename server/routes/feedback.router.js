const express = require('express');
const router = express.Router();
const poool = require('../modules/pool');


// POST route to send a fully completed feedback form to the DB
router.post('/', (req, res) => {
    let feedbackData = req.body;
    console.log(feedbackData);
    res.sendStatus(201);
})

module.exports = router;