const mysql = require('mysql');
const config = require('./config_example.js');

const con = mysql.createConnection(config);

const getAll = (cb) => {
  let str = `select * from reviews inner join activities where reviews.act_id = activities.activity_id`;

  con.query(str, (err, results) => {
    if (err) throw err;
    cb(results);
  });
};
//

module.exports = {
  getAll
};





