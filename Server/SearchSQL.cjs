const mysql = require('mysql');

const con = mysql.createConnection({
    host: '104.8.112.148',
    port: 3306,
    database: "Larimergop",
    user: "vlookup",
    password: "Days206Heat&"
  });

  const firstName = "Ryan";
  const lastName = "Miller";
  let sql = 'SELECT * FROM rockwall.voterlookup WHERE name like "' + firstName + '%' + lastName + '"';
  
  con.connect((err) => {
    if (err) throw err;
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(con);
      if(result.length > 0) {
      let i;
      for (i = 0; i <= result.length - 1; i++) {
        console.log("Name:\t\t\t" + result[i].NAME);
        console.log("Address:\t\t" + result[i].Address);
        console.log("Voter Status:\t\t" + result[i].voter_status);
        console.log("Registration Date:\t" + 
          ((result[i].REG_DATE).getMonth() + 1) + '/' +  // have to add 1 because month returns 0-11
          (result[i].REG_DATE).getDate() + '/' +
          (result[i].REG_DATE).getFullYear())
      }} else {
         console.log(firstName + " " + lastName + " Not Found.") 
      }
    })});

// module.exports = con;
