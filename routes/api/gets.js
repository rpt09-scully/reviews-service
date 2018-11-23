const express = require('express');
const router = express.Router()
const db = require('../../database');


router.get('/reviews', (req, res) => {
  db.getAll((reviews) => {
    res.status(400).json(reviews)
  })
})


module.exports = router;