const express = require('express');
const router = express.Router()
const db = require('../../database');


router.get('/reviews', (req, res) => {
  db.getAll((reviews) => {
    res.status(400).json(reviews)
  })
})

router.get('/ranking', (req, res) => {
  let count = 0
  let id = req.body.trailId

  db.getRanking((results) => {
    for (key in results) {
      if (results[key] > results[id]) {
        count ++;
      }
    }
    res.json(`#${count + 1} ranked trail out of ${Object.keys(results).length}`)
  })
})




module.exports = router;