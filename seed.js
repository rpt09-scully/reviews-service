const data = require('./quotes').quotes;
const db = require('./database')



const seedDB = (data) => {
  let str = ''
  let trailId = 0;
  for (var i = 0; i < 20; i ++) {
    trailId ++;
    for (var j = 0; j < (Math.random() * (15 - 3) + 3); j ++) {
      let userId = (Math.floor(Math.random() * (100 - 1) + 1));
      let review = data[Math.floor(Math.random() * data.length)]

      str += `INSERT INTO reviews (user_id, trail_id, description, date) VALUES (${userId}, ${trailId}, "${review}", '2018-08-01');\n`
    }
  }
  return str
}


seedDB(data)

module.exports = {
  seedDB
}
// data[Math.floor(Math.random() * data.length)])
// db.insertReview([userId, trailId, review,], (results) => {
//   console.log(results)
// })

