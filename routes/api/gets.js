const express = require('express');
const router = express.Router()
const db = require('../../database');


router.get('/reviews', (req, res) => {
  db.getAll((reviews) => {
    res.status(200).json(reviews)
  })
})

//@route  GET /:trailId/trailRank
//@example http:localhost:3004/6/trailRank
//@desc   retrieves ranking of trail by trailId
router.get('/:trailId/trailRank', (req, res) => {
  let count = 0
  let id = req.params.trailId

  db.getRanking((results) => {
    for (key in results) {
      if (results[key] > results[id]) {
        count ++;
      }
    }
    res.status(200).json(`#${count + 1} ranked trail out of ${Object.keys(results).length}`)
  })
})

//@route  GET /:reviewId/reviewInfo
//@example http:localhost:3004/144/reviewInfo
//@desc   retrieves json review info by reviewId
router.get('/:reviewId/reviewInfo', (req, res) => {
  console.log(req.params.reviewId)
})





module.exports = router;