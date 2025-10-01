const { Pool } = require("pg");


const pool = new Pool({
  user: "persona",     
  host: "localhost",
  database: "persona",     
  password: "yourpassword", 
  port: 5432,
});

module.exports = pool;
