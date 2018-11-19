const mysql = require('mysql');
const config = require('./config.js');

const con = mysql.createConnection(config);


const insertReview = (params, cb) => {
  let str = `INSERT INTO reviews (user_id, trail_id, description) VALUES (?, ?, ?)`;

  con.query(str, params, (err, results) => {
    if (err) throw err;
    cb(results);
  });
};

const getAll = (cb) => {
  let str = `select * from reviews inner join activities where reviews.act_id = activities.activity_id`;

  con.query(str, (err, results) => {
    if (err) throw err;
    cb(results);
  });
};
//

module.exports = {
  insertReview,
  getAll
};





