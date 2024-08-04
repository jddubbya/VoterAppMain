const mysql = require("mysql");

const pool = mysql.createPool({
  //host: '107.180.114.231',
  host: 'localhost',
  user: 'vuser',
  password: 'Days206Heat&',
  database: 'rockwall',
  supportBigNumbers: true
})


//function query(sql, args) {
export function query(sql, args) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          return reject(err);
        }
        connection.query(sql, args, function(err, result) {
          connection.release();
          if (err) {
            return reject(err);
          }
          return resolve(result);
        });
      });
    });
  }

  // Listen on Server Port 3000

app.listen(PORT, () => {
  console.log("Server running on port 3000");
  console.log(`Server is running at: http://localhost:${PORT}`);
});

  //export {query};
  //module.exports = {
 //   query
 // };