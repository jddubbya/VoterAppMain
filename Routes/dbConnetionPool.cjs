/* 
* Name: dbConnectionPool.cjs
* Type: server side code
* Arguments: none
* Description: Creates and manages a pool of database connections
*/

var mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'rpm-master.ckt226mgqu6e.us-east-1.rds.amazonaws.com',
    user: 'rpm_root',
    password: 'Hissy621Loot#',
    database: 'vocheck',
    waitForConnections: true,
    port: 3306,
    queueLimit: 0
});

// Create a pool of connections - number specified above by
// "connectionLimit"

pool.getConnection((err, connection) => {
    if (err) {
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
    if (connection) connection.release()
    return;
})
module.exports = pool;
