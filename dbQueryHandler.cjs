/*
*  dbQueryHandler.cjs
*
*  Purpose: 1. To execute queries against the database
*           2. To listen on port 3000
*  
*/
require('dotenv').config();
const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
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
});

/* Check Token (prevents users from hitting db endpoints if they aren't logged in
  Can pass function as an argument in endpoints for security*/ 
function checkToken(req, res, next) {
  const header = req.headers['authorization'];

  if (typeof header !== 'undefined') {
    const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
  }else{
    res.sendStatus(403);
  }
};

/* Login Route */
app.get('/db/login', async (req, res) => {
  const { username, password } = req.query;
  let sql = 'SELECT * FROM AUTH_USERS WHERE USERNAME = ' + '"' + username + '"' + ' AND PASSWORD = ' + '"' + password + '"';
    
    pool.query(sql, (err, results) => {
      console.log("/db/login results", results);
      if(results.length){
        const loggedUsername = results[0].USERNAME;
        const loggedAccess = results[0].ACCESS_LEVEL;
        const token = jwt.sign({id: loggedUsername, level: loggedAccess}, process.env.JWT);
        res.json({token});
      }else if(err){
        res.send(err);
        console.log(err);
      }else{
        res.send({message: "Username or Password incorrect, please try again."})
      }
    });
});


//**************************************************************
// Method to get voter data based on voter's FIRST and LAST NAME.

app.get("/db/getVotersByName", (req, res) => {
  const { firstName, lastName, voterTable } = req.query;
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
  const { stateCounty } = req.query;
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
    /* console.log(str); */
    res.json(results);
  });
});

//**************************************************************
//**************************************************************
// Methods to ADD, UPDATE and DELETE Users.
//**************************************************************
//**************************************************************

// Fetch User info.

app.get("/db/getAuthUsers", (req, res) => {
  let sql = 'SELECT * FROM AUTH_USERS ORDER BY LAST_NAME, FIRST_NAME ASC';
  pool.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Error fetching Precinct Count");
      return;
    }
    str = JSON.stringify(results, null, 4); // (Optional) beautiful indented output.
    /* console.log(str); */
    res.json(results);
  });
});

// ADD new user
app.get("/db/addAuthUser", (req, res) => {
  const addedUser = req.query;
  const user = JSON.parse(addedUser.formData);
  let sql = 'INSERT INTO AUTH_USERS (' +
    'USERNAME, `PASSWORD`, FIRST_NAME, LAST_NAME, ROLE_NAME, EMAIL, PHONE) ' +
    'VALUES (' +
    '"' + user.USERNAME + '",' + '"' + user.PASSWORD + '",' +
    '"' + user.FIRST_NAME + '",' + '"' + user.LAST_NAME + '", ' +
    '"' + user.ROLE_NAME + '", ' + '"' + user.EMAIL + '", ' + '"' + user.PHONE + '")'
  console.log(sql);
  pool.query(sql, (err, results) => {
    if (err) {
      console.error("Error adding user: " + err.stack);
      res.send(JSON.stringify(err.stack));
      return;
    }
  })
});

// DELETE User.
app.get("/db/deleteAuthUser", (req, res) => {
  const { USERNAME } = req.query;
  let sql = 'DELETE FROM AUTH_USERS WHERE USERNAME = ' + '"' + USERNAME + '"';
  pool.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Error deleting user");
      return;
    }
    res.send(results)
  });
});

// UPDATE User.
app.get("/db/updateAuthUser", (req, res) => {
  const changedUser = req.query;
  const user = JSON.parse(changedUser.formData);
  let sql = 'UPDATE AUTH_USERS SET ' +
    '`PASSWORD` = ' + '"' + user.PASSWORD + '", ' + /* PASSWORD in back ticks - reserved SQL keyword */
    'FIRST_NAME = ' + '"' + user.FIRST_NAME + '", ' +
    'LAST_NAME = ' + '"' + user.LAST_NAME + '", ' +
    'ROLE_NAME = ' + '"' + user.ROLE_NAME + '", ' +
    'EMAIL = ' + '"' + user.EMAIL + '", ' +
    'PHONE = ' + '"' + user.PHONE + '"' +
    'WHERE USERNAME = ' + '"' + user.USERNAME + '"';
  pool.query(sql, (err, results) => {
    if (err) {
      console.error("Error updating user: " + err.stack);
      res.send(JSON.stringify(err.stack));
      return;
    }
  });
});

//**************************************************************
/* Takes you to MY PROFILE page (testing only)*/
app.get('/db/me', checkToken, async (req, res) => {
  const decoded = await jwt.verify(req.token, process.env.JWT);
  const username = decoded.id;
  const level = decoded.level;

  if(!decoded.id){
    res.sendStatus(403);
    return;
  }else{
    let sql = 'SELECT * FROM AUTH_USERS WHERE USERNAME = ' + '"' + username + '"' + ' AND ACCESS_LEVEL = ' + '"' + level + '"';
    pool.query(sql, (err, results) => {
      if (err) {
        console.error("Error executing query: " + err.stack);
        res.status(500).send("Error fetching users");
        return;
      }
      if(!decoded.id){
        return res.json("Invalid Credentials");
      }else{
        return res.send(results);
      }
    });
  }
});
//**************************************************************
//**************************************************************
//**************************************************************

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
