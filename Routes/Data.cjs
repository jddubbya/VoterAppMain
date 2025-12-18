/* 
* Name: Data.cjs
* Type: server side code
* Arguments: none
* Description: Handles all the data queries.
*/

const express = require("express");
const router = express.Router();

// Reusable helper module to run the database query
const { runQuery } = require("./runDbQuery.cjs");

///////////////// BEGIN HELPER FUNCTIONS ///////////////////////////////

// Get the query pool
const getPool = async (req) => {
  if (!req.getDbPool) {
    throw new Error("Database pool not initialized in request.");
  }
  return await req.getDbPool();
};

// Reusable code to execute a query
async function executeQuery(req, res, sql, params = []) {
  try {
    const pool = await getPool(req);
    const results = await runQuery(pool, sql, params);
    res.json(Array.isArray(results) ? results : []);
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).json({ message: "Database query failed" });
  }
}

// Method to get the list of States and Counties for the dropdown.
router.get("/getStCountyList", async (req, res) => {
  const sql = 'SELECT CONCAT(STATE,"_",COUNTY) AS ST_CNTY FROM STATE_COUNTY ORDER BY STATE, COUNTY ASC';

  await executeQuery(req, res, sql);
});


// Method to find voter data based on voter's FIRST and LAST NAME.
router.get("/getVotersByName", async (req, res) => {
  const { firstName, lastName, voterTable } = req.query;

  const sql = `SELECT * FROM ?? WHERE FIRST_NAME = ? AND LAST_NAME = ? ORDER BY MIDDLE_NAME ASC`;
  const params = [voterTable, firstName, lastName];

  await executeQuery(req, res, sql, params);
});

// Method to find voter data based on voter's ADDRESS.
router.get("/getVoterByAddress", async (req, res) => {
  const { address, voterTable } = req.query;

  const addressPattern = `%` + address + `%`;

  const sql = `SELECT * FROM ?? WHERE ADDRESS LIKE ? ORDER BY LAST_NAME, FIRST_NAME ASC`;

  const params = [voterTable, addressPattern];

  await executeQuery(req, res, sql, params);
});

// Method to get counts of voters by VOTER STATUS.
router.get("/getVoterStatus", async (req, res) => {
  const { stateCounty } = req.query;

  const sql = `SELECT COUNT(*) AS "COUNT", VOTER_STATUS FROM ?? 
                GROUP BY VOTER_STATUS ORDER BY VOTER_STATUS ASC`;
  const params = [stateCounty];

  await executeQuery(req, res, sql, params);
});

// method to get count of voters by gender
router.get("/getVoterGender", async (req, res) => {
  const { stateCounty } = req.query;

  const sql = `SELECT COUNT(*) AS "COUNT", GENDER FROM ??
              GROUP BY GENDER ORDER BY GENDER ASC`;
  const params = [stateCounty];

  await executeQuery(req, res, sql, params);
});

// Method to get count of voters by PARTY.
router.get("/getVoterParty", async (req, res) => {
  const { stateCounty } = req.query;
  const sql = `SELECT COUNT(*) AS "COUNT", PARTY FROM ??
              WHERE PARTY IN ("DEM","REP","UAF","LBR","XX") GROUP BY PARTY ORDER BY PARTY ASC`;
  const params = [stateCounty];

  await executeQuery(req, res, sql, params);
});

// Method to get count of PRECINCTS.
router.get("/getPrecinct", async (req, res) => {
  const { stateCounty } = req.query;
  const sql = `SELECT COUNT(DISTINCT PRECINCT) AS PCT_COUNT FROM ??`;

  const params = [stateCounty];

  await executeQuery(req, res, sql, params);
});


// Method to get the date of the data.
router.get("/getDataDate", async (req, res) => {
  const { stateCounty } = req.query;
  const split = stateCounty.split("_");
  const usState = split[0].toUpperCase();
  const county = split[1].toUpperCase();

  const sql = `SELECT DATA_DATE FROM STATE_COUNTY WHERE STATE = ? AND COUNTY = ?`;

  const params = [usState, county];

  await executeQuery(req, res, sql, params); 
});

module.exports = router;
