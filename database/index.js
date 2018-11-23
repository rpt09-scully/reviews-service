const mysql = require('mysql');
const config = require('./config_example.js');

const con = mysql.createConnection(config);

const getAll = cb => {
  let str = `select * from reviews inner join activities where reviews.act_id = activities.activity_id`;

  con.query(str, (err, results) => {
    if (err) throw err;
    cb(results);
  });
};
//

const getRanking = cb => {
  let str = `select * from reviews inner join activities where reviews.act_id = activities.activity_id`;
  let obj = {};

  con.query(str, (err, reviews) => {
    if (err) throw err;
    reviews.forEach(review => {
      if (!obj[review.trail_id]) {
        obj[review.trail_id] = review.rating;
      } else {
        obj[review.trail_id] += review.rating;
      }
    });

    cb(obj);
  });
};

const getReview = (id, cb) => {
  let str = `select * from reviews where review_id = ${id}`

  con.query(str, (err, review) => {
    if (err) throw err;
    let actId = review[0].act_id
    let str1 = `select * from activities where activity_id = ${actId}`

    con.query(str1, (err, act) => {
      if (err) throw err;
     let activity = act[0].body

    })
  })
}

module.exports = {
  getAll,
  getRanking,
  getReview
};
