const mysql = require('mysql');
const config = require('./config_example.js');

const con = mysql.createConnection(config);

//Gets all reviews
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
  let str = `select reviews.user_id, reviews.trail_id, reviews.description, reviews.rating, reviews.date, activities.body \
  FROM reviews left join activities on activities.activity_id = reviews.act_id where reviews.review_id = ${id}`

  con.query(str, (err, review) => {
    if (err) throw err
    cb(review[0])
  })
}






// const dateSort = (id, cb) => {
//   let str = `select * from reviews where review_id = ${id}`

//   cons.query(str, (err, review) => {})
// }

// //  select * from reviews order by str_to_date(date, '%m/%d/%Y');

`select reviews.user_id, reviews.description, activities.body FROM reviews left join activities on activities.activity_id = reviews.act_id where reviews.user_id = 2;`

module.exports = {
  getAll,
  getRanking,
  getReview
};
