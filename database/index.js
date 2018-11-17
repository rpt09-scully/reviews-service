const mysql = require('mysql');
const config = require('./config.js');

const con = mysql.createConnection(config);

//FUNCTIONS GO HERE
const getReviews = (cb) => {
  let str = `select * from reviews`

  con.query(str, (err, results) => {
    if (err)  throw err
    cb(results)
  })
}

const insertReview = (params) => {
  let str = `INSERT INTO reviews (reviews_id, user_id, trail_id, description, date)`
  console.log(params)

}

module.exports = {
  getReviews,
  insertReview
}