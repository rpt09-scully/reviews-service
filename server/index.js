const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/reviews', (req, res) => {
  db.getAll((data) => {
    res.send(data)
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
