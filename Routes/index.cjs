const express = require('express');
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute=require("./Auth.cjs");
const dataRoute=require("./Data.cjs");

const app = express();

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '../dist/index.html');
  });

app.use("/auth", authRoute);
app.use("/db", dataRoute);


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });

app.listen(PORT, () => {
    console.log("Server running on port 3000");
    console.log(`Server is running at: http://localhost:${PORT}`);
  });
  
