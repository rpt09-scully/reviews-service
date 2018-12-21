const mysql = require('mysql');
const config = require('./config_example.js');
const moment = require('moment');
const con = mysql.createConnection(config);


//Gets all reviews
const getAll = cb => {
  let str = `SELECT * FROM reviews INNER JOIN activities WHERE reviews.act_id = activities.activity_id`;

  con.query(str, (err, results) => {
    if (err) throw err;
    cb(results);
  });
};
//
const getRanking = cb => {
  let str = `SELECT * FROM reviews INNER JOIN activities WHERE reviews.act_id = activities.activity_id`;
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

const getStats = (trailId, cb) => {
  let str =  `SELECT count(*) from reviews WHERE trail_id = ${trailId}`
  let str2 = `SELECT avg(rating) from reviews where trail_id = ${trailId}`;

  con.query(str, (err, total) => {
    con.query(str2, (err, avg) => {
      if (err) throw err;
      let avg1 =  avg[0]
      let total1 = total[0]

      let avg2 = Math.ceil(avg1[Object.keys(avg1)[0]])
      let total2 = Math.ceil(total1[Object.keys(total1)[0]])
      cb([avg2, total2])
    })
  })
}



const getReview = (reviewId, cb) => {
  let str = `SELECT reviews.review_id, reviews.user_id, reviews.trail_id, reviews.description, reviews.rating, reviews.date, activities.body \
  FROM reviews left join activities on activities.activity_id = reviews.act_id WHERE reviews.review_id = ${reviewId}`

  con.query(str, (err, review) => {
    if (err) throw err;
    cb(review[0])
  })
}

const dateSort = (trailId, sortBy, cb) => {
  let str = `SELECT reviews.review_id, reviews.user_id, reviews.trail_id, reviews.description, reviews.rating, reviews.date, activities.body \
  FROM reviews LEFT JOIN activities on activities.activity_id = reviews.act_id where reviews.trail_id = ${trailId} \
  ORDER BY str_to_date(date, '%m/%d/%Y') ${sortBy}`

  con.query(str, (err, reviews) => {
    if (err) throw err;
    cb(reviews)
  })
}

const ratedSort = (trailId, sortBy, cb) => {
  let str = `SELECT reviews.review_id, reviews.user_id, reviews.trail_id, reviews.description, reviews.rating, reviews.date, activities.body \
  FROM reviews LEFT JOIN activities on activities.activity_id = reviews.act_id where reviews.trail_id = ${trailId} \
  ORDER by rating ${sortBy}`

  con.query(str, (err, reviews) => {
    if (err) throw err;
    cb(reviews)
  })
}
const jsonFormat = (id, review) => {

  let obj = {};
  obj.data = {};
  obj.data.type = 'reviews'
  obj.data.id = null;
  obj.data.attributes = {};

    obj.data.id = review.review_id;
    obj.data.attributes.user_id = review.user_id;
    obj.data.attributes.trail_id = review.trail_id;
    obj.data.attributes.body = review.description;
    obj.data.attributes.activity = review.body;
    obj.data.attributes.rating = review.rating;
    obj.data.attributes.date = review.date;
    return obj;
}

const dateFormat = (date, cb) => {
  console.log(date)
  let arr = '1,2,3,4,5,6,7,8,9'.split(',');
  let years = ['2016', '2017', '2018']
  if (date.length === 7 && arr.indexOf(date[0] > -1)) {
    console.log('true')
    date = '0' + date;
    let timeAgo = moment(date, 'MM/DD/YYYY').fromNow();
    cb(timeAgo)
  } else if (date.length !== 8 && years.indexOf(date.slice(date.length - 4)) > -1) {
    date = '0' + date[0] + '0' + date[1] + date.slice(date.length - 4)

    let timeAgo = moment(date, 'MM/DD/YYYY').fromNow();
    cb(timeAgo)
  } else {
    let timeAgo = moment(date, 'MM/DD/YYYY').fromNow();
    cb(timeAgo)
  }
};





dateFormat('122016', (time) => {
  console.log(time)
})


module.exports = {
  getAll,
  getRanking,
  getReview,
  dateSort,
  ratedSort,
  jsonFormat,
  getStats,
  dateFormat
};
