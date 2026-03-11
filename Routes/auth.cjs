const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { runQuery } = require("./runDbQuery.cjs");

// Helper to get DB pool
const getPool = async (req) => {
    if (!req.getDbPool) throw new Error("Database pool not initialized in request.");
    return await req.getDbPool();
};

router.post("/login", async (req, res) => {
    try {
        const pool = await getPool(req);
        const { username, password } = req.body;

        const results = await runQuery(
            pool,
            "SELECT USERID, USERNAME, STATE, COUNTY, PASSWORD_HASH FROM VOCHECK_USERS WHERE USERNAME=?",
            [username]
        );

        if (!results || results.length === 0) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const user = results[0];
        const valid = await bcrypt.compare(password, user.PASSWORD_HASH);

        if (!valid) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const token = jwt.sign(
            { id: user.USERID },
            process.env.JWT,
            { expiresIn: "8h" }
        );

        res.json({
            token: token,
            userId: user.USERID,
            username: user.USERNAME,
            usState: user.STATE,
            usCounty: user.COUNTY
        });

    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
