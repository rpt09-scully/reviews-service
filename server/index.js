const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('../database');
const gets = require('../routes/api/gets.js');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3004;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//server
// app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.static('public'));

app.get('/:trailId(\\d+$)*?', function (req, res) {
  res.status(200).sendFile(path.resolve(__dirname + '/../public/index.html'));
});
//Use Routes
app.use('/', gets)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


