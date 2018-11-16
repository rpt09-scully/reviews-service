const mysql = require('mysql');
const config = require('./config.js');
const db = require('../database');

const con = mysql.createConnection(config);
