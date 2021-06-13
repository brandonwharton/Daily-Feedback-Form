const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const poool = require('../modules/pool');

// GET route to get all the previous feedback for the admin page
router.get('/', (req, res) => {
    // SQL query for GET
    const queryText = `SELECT * FROM "feedback"`
    // GET data from DB
    pool.query(queryText)
        .then(result => {
            console.log('GET from DB successful');
            res.send(result.rows);
        })
        .catch(err => {
            console.log('Server error with GET request to DB', err);
            res.sendStatus(500);
        });
})


// POST route to send a fully completed feedback form to the DB
router.post('/', (req, res) => {
    // save the values provided from client POST request
    let feedback = req.body;
    let values = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments];
    // save a sanitized SQL query to send
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    // send supplied feedback data to the DB
    pool.query(queryText, values)
        .then(result => {
            console.log('POST to DB successful');
            res.sendStatus(201);
        })
        .catch(err => {
            console.log('Server error with POST request to DB', err);
            res.sendStatus(500);
        })
})

module.exports = router;