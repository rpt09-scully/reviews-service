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

module.exports = {
  getAll,
  getRanking
};
