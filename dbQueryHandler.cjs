/*
*  dbQueryHandler.cjs
*
*  Purpose: 1. To execute queries against the database
*           2. To listen on port 3000
*  
*/

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const pool = require('./dbConnectionPool.cjs');  // JDW
const path = require('path');

// __dirname is an environment variable that tells you the absolute path 
// of the directory containing the currently executing file.

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
})

//**************************************************************
// Method to get voter data based on voter's FIRST and LAST NAME.

app.get("/db/getVotersByName", (req, res) => {
  const { firstName, lastName, voterTable} = req.query;
  let sql = 'SELECT * FROM ' + voterTable +  
  ' WHERE FIRST_NAME = "' + firstName + '" AND LAST_NAME = "' + lastName + 
  '" ORDER BY MIDDLE_NAME ASC';
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
// Method to get voter data based on ADDRESS.

app.get("/db/getVoterByAddress", (req, res) => {
  const { address, voterTable } = req.query;
  let sql = 'SELECT * FROM ' + voterTable +  
  ' WHERE ADDRESS LIKE "' + address + '%" ORDER BY LAST_NAME, FIRST_NAME, MIDDLE_NAME ASC';
  pool.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Error fetching users");
      return;
    }
   /* str = JSON.stringify(results, null, 4); // (Optional) beautiful indented output.
    console.log(str); */
    res.json(results);
  });
});

//**************************************************************
// Method to get counts of voters by VOTER STATUS.

app.get("/db/getVoterStatus", (req, res) => {
  const { stateCounty } = req.query;
  
  let sql = 'SELECT count(*) AS "COUNT", voter_status FROM ' + 
            stateCounty + ' GROUP BY VOTER_STATUS ORDER BY VOTER_STATUS ASC';
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
// Method to get counts of voters by GENDER.

app.get("/db/getVoterGender", (req, res) => {
  const { stateCounty } = req.query;
  
  let sql = 'SELECT count(*) AS "COUNT", GENDER FROM ' + 
  stateCounty + ' GROUP BY GENDER ORDER BY GENDER ASC';
  
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
// Method to get count of voters by PARTY.

app.get("/db/getVoterParty", (req, res) => {
  const { stateCounty} = req.query;
  let sql = 'SELECT count(*) AS "COUNT", PARTY FROM ' 
            + stateCounty + ' WHERE PARTY IN ("DEM","REP","UAF","LBR","XX") GROUP BY PARTY ORDER BY PARTY ASC';
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
// Method to get count of PRECINCTS.

app.get("/db/getPrecinct", (req, res) => {
   const { stateCounty } = req.query;
   let sql = 'SELECT COUNT(DISTINCT PRECINCT) as PCT_COUNT FROM ' + stateCounty;
   pool.query(sql, (err, results) => {
     if (err) {
      console.error("Error executing query: " + err.stack); 
      res.status(500).send("Error fetching Precinct Count");
       return;
     }
   /*  str = JSON.stringify(results, null, 4); // (Optional) beautiful indented output. */
     res.json(results);
   });
 });

//**************************************************************
// Method to get the date of the data.

app.get("/db/getDataDate", (req, res) => {
  const { stateCounty } = req.query;
  let sql = "SELECT DATA_DATE FROM DATA_CURRENCY WHERE STATE_COUNTY = " + '"' + stateCounty + '"';
  pool.query(sql, (err, results) => {
    if (err) {
     console.error("Error executing query: " + err.stack); 
     res.status(500).send("Error fetching Precinct Count");
      return;
    }
    str = JSON.stringify(results, null, 4); // (Optional) beautiful indented output.
    console.log(str);
    res.json(results);
  });
});

//**************************************************************
// Method to get Users.

app.get("/db/getAuthUsers", (req, res) => {
  let sql = 'SELECT * FROM AUTH_USERS ORDER BY LAST_NAME, FIRST_NAME ASC';
  pool.query(sql, (err, results) => {
    if (err) {
     console.error("Error executing query: " + err.stack); 
     res.status(500).send("Error fetching Precinct Count");
      return;
    }
    str = JSON.stringify(results, null, 4); // (Optional) beautiful indented output.
    console.log(str);
    res.json(results);
  });
});

//**************************************************************
// Method to update User info.

app.get("/db/updateAuthUser", (req, res) => {
  const { } = req.query;
  let sql = 'UPDATE AUTH_USERS SET USERNAME = "fred" WHERE USERNAME = "tstuser"';
  pool.query(sql, (err, results) => {
    if (err) {
     console.error("Error executing query: " + err.stack); 
     res.status(500).send("Error fetching Precinct Count");
      return;
    }
  });
}); 

/* Refresh code */
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})

 //**************************************************************
// Listen on Server Port 3000

app.listen(PORT, () => {
  console.log("Server running on port 3000");
  console.log(`Server is running at: http://localhost:${PORT}`);
});