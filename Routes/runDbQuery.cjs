/* 
* Name: runDbQuery.cjs.cjs
* Type: server side database code
* Arguments: none
* Description: Reusable code to run a query - minimize coderedundancy
*        
*/

async function runQuery(pool, sql, params = []) {
    const connection = await pool.getConnection();

    try {
        const [rows] = await connection.query(sql, params);
        return rows;
    } finally {
        connection.release();
    }
}

module.exports = { runQuery };