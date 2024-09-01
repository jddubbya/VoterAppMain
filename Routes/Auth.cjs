/*
* Contains all the User Manager queries
*/
require('dotenv').config();
const express = require("express");
const router = express.Router();
const pool = require('./dbConnetionPool.cjs');  // JDW
const jwt = require('jsonwebtoken');


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

  router.get('/login', async (req, res) => {
    const { username, password } = req.query;
    let sql = 'SELECT * FROM AUTH_USERS WHERE USERNAME = ' + '"' + username + '"' + ' AND PASSWORD = ' + '"' + password + '"';
      
      pool.query(sql, (err, results) => {
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

  // Fetch User info.
  router.get("/getAuthUsers", (req, res) => {
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
  router.get("/addAuthUser", (req, res) => {
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
  router.get("/deleteAuthUser", (req, res) => {
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
  router.get("/updateAuthUser", (req, res) => {
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

  /* Takes you to MY PROFILE page (testing only)*/
  router.get('/me', checkToken, async (req, res) => {
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



module.exports = router;
