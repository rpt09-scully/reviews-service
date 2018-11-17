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

const insertReview = (params, cb) => {
  let str = `INSERT INTO reviews (user_id, trail_id, description) VALUES (?, ?, ?)`


  con.query(str, params, (err, results) => {
    if (err) throw err
    cb(results)
  })

}

module.exports = {
  getReviews,
  insertReview
}