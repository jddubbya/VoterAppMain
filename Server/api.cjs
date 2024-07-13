const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: "104.8.112.148",
  port: 3306,
  database: "rockwall",
  user: "vlookup",
  password: "Days206Heat&",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as ID " + db.threadId);
});

app.use(express.static(__dirname + '/dist'));

app.get("/db/get", (req, res) => {
  const { firstName, lastName } = req.query;
  let sql = 'SELECT * FROM voterlookup2 WHERE name like "' + firstName + '%' + lastName + '"';
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Error fetching users");
      return;
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
