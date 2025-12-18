/* 
* Name: dbConnectionPool.cjs
* Type: server side code
* Arguments: none
* Description: Creates and manages a pool of database connections
*/

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'electionstech.ckt226mgqu6e.us-east-1.rds.amazonaws.com',
    user: 'electionstech',
    password: 'Jess176Hiss!',
    database: 'vocheck',
    waitForConnections: true,
    port: 3306,
    queueLimit: 0
});

(async () => {
    try {
        const connection = await pool.getConnection();
        connection.release();
    } catch (err) {
        console.error("dbConnectionPool error:", err);
    }
})();

module.exports = pool;
