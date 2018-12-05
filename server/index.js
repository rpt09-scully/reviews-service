const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database');
const gets = require('../routes/api/gets.js')
const app = express();
const PORT = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//server
// app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.static('public'));
//Use Routes
app.use('/', gets)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


