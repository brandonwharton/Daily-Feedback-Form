const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const poool = require('../modules/pool');

// GET route to get all the previous feedback for the admin page
router.get('/', (req, res) => {
    // SQL query for GET
    const queryText = `SELECT * FROM "feedback" ORDER BY "id" DESC;`
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


// DELETE route from the admin page to remove a DB feedback entry
router.delete('/:id', (req, res) => {
    // hold the id of feedback to be deleted
    const feedbackId = req.params.id;
    // save a sanitized SQL query to send
    const queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
    // send DELETE request to DB
    pool.query(queryText, [feedbackId])
        .then(result => {
            console.log('DELETE to DB successful');
            res.sendStatus(200);
        })
        .catch(err => {
            console.log('Server error with DELETE request to DB',err);
            res.sendStatus(500);
        });
})

module.exports = router;