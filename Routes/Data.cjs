/* 
* Name: Data.cjs
* Type: server side code
* Arguments: none
* Description: Handles all the data queries.
*/

const express = require("express");
const router = express.Router();
const pool = require('./dbConnetionPool.cjs');  // JDW

// Method to find voter data based on voter's FIRST and LAST NAME.
router.get("/getVotersByName", (req, res) => {
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

  // Method to find voters by address
  router.get("/getVoterByAddress", (req, res) => {
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

  // Method to get counts of voters by VOTER STATUS.
  router.get("/getVoterStatus", (req, res) => {
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

  // method to get count of voters by gender
  router.get("/getVoterGender", (req, res) => {
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

  // Method to get count of voters by PARTY.
  router.get("/getVoterParty", (req, res) => {
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

  // Method to get count of PRECINCTS.
  router.get("/getPrecinct", (req, res) => {
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

  // Method to get the date of the data.
  router.get("/getDataDate", (req, res) => {
    const { stateCounty } = req.query;
    const split = stateCounty.split("_");
    let usState = split[0];
    let county = split[1];
    county = county.toUpperCase();
    let sql = "SELECT DATA_DATE FROM STATE_COUNTY WHERE STATE = " + '"' + usState + '" AND COUNTY = ' + '"' + county + '"';
    pool.query(sql, (err, results) => {
      if (err) {
        console.error("Error executing query: " + err.stack);
        res.status(500).send("Error fetching Precinct Count");
        return;
      }
     // str = JSON.stringify(results, null, 4); // (Optional) beautiful indented output.
      // console.log(str);
      res.json(results);
    });
  });

    // Method to get the list of States and Counties for the dropdown.
    router.get("/getStCountyList", (req, res) => {
      let sql = 'SELECT CONCAT(STATE,"_",COUNTY) AS ST_CNTY FROM STATE_COUNTY ORDER BY STATE, COUNTY ASC';
     // console.log(sql);
      pool.query(sql, (err, results) => {
        if (err) {
          console.error("Error executing query: " + err.stack);
          res.status(500).send("Error fetching Precinct Count");
          return;
        }
        //  str = JSON.stringify(results, null, 4); // (Optional) beautiful indented output.
        res.json(results);
      });
    });

module.exports = router;
