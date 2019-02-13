const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const quotes = require('../quotes.js');
const date = require('../seed.js')




let start = new Date();
const main = (async () => {
  const tenMillion = 10000000;

  const csvWriter = createCsvWriter({
    path: './milly.csv',
    header: [
        {id: 'review_id', title: 'review_id'},
        {id: 'user_id', title: 'user_id'},
        {id: 'trail_id', title: 'trail_id'},
        {id: 'description', title: 'description'},
        {id: 'rating', title: 'rating'},
        {id: 'date', title: 'date'},
        {id: 'act_id', title: 'act_id'},

    ]
  });


  csvWriter.writeRecords([])

  const records = [];
  let count = 0;
  let trailId = 1;
  for (let i = 1; i < tenMillion + 1; i++) {
    count ++;
    if (records.length > 99 || i === tenMillion) {
      await csvWriter.writeRecords(records);
      records.length = 0;
    }
    records.push({
      review_id: i,
      user_id: (Math.floor(Math.random() * (10000000 - 1) + 1)),
      trail_id: trailId,
      description: quotes[Math.floor(Math.random() * quotes.length)],
      rating: (Math.floor(Math.random() * (6 - 1) + 1)),
      date: date.dateGen(),
      act_id: (Math.floor(Math.random() * (16 - 1) + 1))

    });
    if (count === 5) {
      trailId ++;
      count = 0;
    }
  }

})();


