/* 
* Name: dbConnectionPool.cjs
* Type: server side code
* Arguments: none
* Description: Creates and manages a pool of database connections
*/

var mysql = require('mysql')

// Database connection parameters
// var pool = mysql.createPool({
//     connectionLimit: 10,
//     host: '107.180.114.231',
//     user: 'vocheck_user',
//     password: 'Your217With#',
//     database: 'voterdata'
// });


const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'rpm-master.ckt226mgqu6e.us-east-1.rds.amazonaws.com',
    user: 'rpm_root',
    password: 'Hissy621Loot#',
    database: 'vocheck',
    waitForConnections: true,
    multipleStatements: true,
    port: 3306,
    queueLimit: 0
});

// Create a pool of connections - number specified above by
// "connectionLimit"

pool.getConnection((err, connection) => {
    if (err) { 
        console.log("CONNECTION ERROR: ", + err.code);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.');
        } 
    }
    console.log("Connection created." + connection)
    if (connection) connection.release()
    return;
});

module.exports = pool;