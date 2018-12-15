const moment = require('moment');

const delorean = (date) => {
  let now = moment().format('YYYY/MM/DD').split('/');
  let nowM = parseInt(now[1]);
  let nowY = parseInt(now[0]);
  let nowD = parseInt(now[2]);

  let then = date.split('/')
  let thenY = parseInt(then[2]);
  let thenM = parseInt(then[1]);
  let thenD = parseInt(then[0]);

  let past = moment([thenY, thenM - 1, thenD]);
  let present = moment([nowY, nowM - 1, nowD]);

  return present.from(past);
};

module.exports = {
  delorean
}