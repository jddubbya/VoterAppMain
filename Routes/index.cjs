/* 
* Name: index.cjs
* Type: server side code
* Arguments: none
* Description: Serves as the entry point for the application.
*   Node.js looks for this file and executes it to set up the
*   React application. Using index.cjs instead of index.js ensures 
*   compatibility with older Node.js versions (pre-Es6) that don’t
*   support ESM by default.
*/

const express = require('express');
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
const app = express();
const dataRoute = require("./Data.cjs");

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../dist/index.html');
  });

// The Routes used for the various query .cjs files
app.use("/db", dataRoute);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
  });

app.listen(PORT, () => {
    console.log("Server running on port 3000");
    console.log(`Server is running at: http://localhost:${PORT}`);
  });
  
