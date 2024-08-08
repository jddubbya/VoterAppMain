/*
*  dbQueryHandler.cjs
*
*  Purpose: 1. To execute queries against the database
*           2. To listen on port 3000
*  
*/

const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const pool = require('./dbConnectionPool.cjs');  // JDW

// __dirname is an environment variable that tells you the absolute path 
// of the directory containing the currently executing file.

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
})

//**************************************************************
// Method to get voter data based on voter's first and last name.

app.get("/db/getVoters", (req, res) => {
  const vstate = "texas";
  const county = "rockwall";
  const { firstName, lastName, voterTable} = req.query;
  let sql = 'SELECT * FROM ' + voterTable +  
  ' WHERE FIRST_NAME = "' + firstName + '" AND LAST_NAME = "' + lastName + 
  '" ORDER BY LAST_NAME, FIRST_NAME';
  console.log(sql);
  console.log(sql);
  pool.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Error fetching users");
      return;
    }
    res.json(results);
  });
});

//**************************************************************
// Method to get list of states.

app.get("/db/getStates", (req, res) => {
  let sql = 'SELECT DISTINCT STATE FROM STATE_COUNTY ORDER BY STATE ASC';
  pool.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("Error fetching users");
      return;
    }
    res.json(results);
  });
});

//**************************************************************
// Method to get list of counties based on the State selected.

app.get("/db/getCounties", (req, res) => {
   const { stateName } = req.query;
   let sql = 'SELECT COUNTY FROM STATE_COUNTY WHERE STATE = "' + stateName + '"';
   pool.query(sql, (err, results) => {
     if (err) {
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
