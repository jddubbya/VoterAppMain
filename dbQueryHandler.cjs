const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const pool = require('./dbConnectionPool.cjs');  // JDW

console.log("ConnectionManager.cjs loaded..........");

// __dirname is an environment variable that tells you the absolute path 
// of the directory containing the currently executing file.

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
})

// Method to get voter data based on voter's first and last name.

app.get("/db/get", (req, res) => {
  const { firstName, lastName } = req.query;
  let sql = 'SELECT * FROM voterlookup2 WHERE name like "' + firstName + '%' + lastName + '"';
  console.log("SQL = " . sql)
  pool.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Error fetching users");
      return;
    }
    res.json(results);
  });
});

// Listen on Server Port 3000

app.listen(PORT, () => {
  console.log("Server running on port 3000");
  console.log(`Server is running at: http://localhost:${PORT}`);
});