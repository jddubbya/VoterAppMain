/*
*  dbConnectionPool.cjs
*
*  Purpose: To ceate a pool of database connections
*  Exports: pool - an object used to connect to the database using one of 
*                  the pooled database connections. 
*/

var mysql = require('mysql')

// Database connection parameters

var pool = mysql.createPool({
    connectionLimit: 10,
    host: '107.180.114.231',
    user: 'vuser',
    password: 'Days206Heat&',
    //user: 'vadmin',
    //password: 'Jabra159Fund$',
    database: 'voterdata'
})

// Create a pool of connections - number specified above by
// "connectionLimit"

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})
module.exports = pool;