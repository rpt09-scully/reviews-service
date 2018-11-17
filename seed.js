const data = require('./quotes').quotes;
const db = require('./database')


// db.getReviews((results) => {
//   console.log(results)
// })

const seedDB = (data) => {
  let trailId = 0;
  for (var i = 0; i < 20; i ++) {
    trailId ++;
    for (var j = 0; j < (Math.random() * (15 - 3) + 3); j ++) {
      db.insertReview(trailId)

    }
  }
}

seedDB(data)

// data[Math.floor(Math.random() * data.length)])