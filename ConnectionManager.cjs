const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

console.log("ConnectionManager.cjs loaded..........");

// __dirname is an environment variable that tells you the absolute path 
// of the directory containing the currently executing file.

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(cors());

// https://www.geeksforgeeks.org/rest-api-using-the-express-to-perform-crud-create-read-update-delete/

// MySQL connection parameters

var con = mysql.createConnection({
  
  host: '107.180.114.231',  // GoDaddy server - IP
//  host: "localhost",        // GoDaddy server - localhost
  //host: '104.8.112.148',  // JDW server
  port: 3306,
  database: "rockwall",
  user: "vuser",
  password: "Days206Heat&"
});

// Establish connection to MySQL database

con.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as ID " + con.threadId);
});

// Listen on Server Port 3000

app.listen(PORT, () => {
  console.log("Server running on port 3000");
  console.log(`Server is running at: http://localhost:${PORT}`);
});

// Method to transfer the VoterApp/dist/index.html file (WHERE??) 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
})

 // Method to get voter data based on voter's first and last name.

app.get("/db/get", (req, res) => {
  const { firstName, lastName } = req.query;
  let sql = 'SELECT * FROM voterlookup2 WHERE name like "' + firstName + '%' + lastName + '"';
  console.log("SQL = " . sql)
  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Error fetching users");
      return;
    }
    res.json(results);
  });
});
