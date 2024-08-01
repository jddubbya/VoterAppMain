// command prompt: npm MySql driver

var mysql = require('mysql');

var con = mysql.createConnection({
    host: '107.180.114.231',
    port: 3306,
    database: "rockwall",
    user: "vuser",
    password: "Days206Heat&"
  });

let firstName = "Ryan";
let lastName = "Woram";
let sql = 'SELECT * FROM voters_06_2024 WHERE last_name = "' + lastName + '"';

con.connect((err) => {
  if (err) throw err;
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    if(result.length > 0) {
    let i;
    for (i = 0; i <= result.length - 1; i++) {
      console.log("First Name:\t\t\t" + result[i].FIRST_NAME);
      console.log("Last Name:\t\t\t" + result[i].LAST_NAME);
      console.log("Municipality:\t\t" + result[i].MUNICIPALITY);
      console.log("Voter Status:\t\t" + result[i].VOTER_STATUS);
      console.log("Registration Date:\t" + 
        ((result[i].REG_DATE).getMonth() + 1) + '/' +  // have to add 1 because month returns 0-11
        (result[i].REG_DATE).getDate() + '/' +
       (result[i].REG_DATE).getFullYear())
    }} else {
       console.log(firstName + " " + lastName + " Not Found.") 
    }
  })
});