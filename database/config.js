require('dotenv').config();

console.log({
  host: process.env.RDS_HOST,
  user: process.env.RDS_USER,
  password: process.env.RDS_PASS,
  port: process.env.RDS_PORT,
  database: process.env.RDS_NAME
});

if (process.env.NODE_ENV) {
  module.exports = {
    host: process.env.RDS_HOST,
    user: process.env.RDS_USER,
    password: process.env.RDS_PASS,
    port: process.env.RDS_PORT,
    database: process.env.RDS_NAME
  };
} else {
  module.exports = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'revService'
  };
}

//Stashed
