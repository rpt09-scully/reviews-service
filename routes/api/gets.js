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
  let id = req.params.reviewId
  let obj = {};
  obj.data = {}
  obj.data.type = 'reviews'
  obj.data.id = null;
  obj.data.attributes = {};

  db.getReview(id, (review) => {
    obj.data.id = review.review_id;
    obj.data.attributes.user_id = review.user_id;
    obj.data.attributes.trail_id = review.trail_id;
    obj.data.attributes.body = review.description;
    obj.data.attributes.activity = review.body;
    obj.data.attributes.rating = review.rating;
    obj.data.attributes.data = review.date;
    res.status(200).json(obj)
  })
})

//@route  GET '/:trailId/newestReviews'
//@example http:localhost:3004/7/newReviews
//@desc   retrieves reviews for trail sorted by most recent
router.get('/:trailId/reviewsNew', (req, res) => {
  let trailId = req.params.trailId

  db.dateSort(trailId, 'DESC', (sortedReviews) => {
    res.status(200).json(sortedReviews)
  })
})

//@route  GET '/:trailId/oldReviews'
//@example http:localhost:3004/7/oldest Reviews
//@desc   retrieves reviews for trail sorted by oldest
router.get('/:trailId/reviewsOld', (req, res) => {
  let trailId = req.params.trailId

  db.dateSort(trailId, 'ASC', (sortedReviews) => {
    res.status(200).json(sortedReviews)
  })
})


//@route  GET '/:trailId/topReviews'
//@example http:localhost:3004/14/topReviews
//@desc   retrieves reviews sorted by highest ratings
router.get('/:trailId/topReviews', (req, res) => {
  let trailId = req.params.trailId

  db.ratedSort(trailId, 'DESC', (sortedReviews) => {
    res.status(200).json(sortedReviews)
  })
})

//@route  GET '/:trailId/bottomReviews'
//@example http:localhost:3004/14/newestReviews
//@desc   retrieves reviews for sorted by lowest rating
router.get('/:trailId/bottomReviews', (req, res) => {
  let trailId = req.params.trailId

  db.dateSort(trailId, 'ASC', (sortedReviews) => {
    res.status(200).json(sortedReviews)
  })
})


module.exports = router;


