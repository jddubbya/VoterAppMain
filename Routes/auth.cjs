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
    const { username, pin } = req.body;

    const results = await runQuery(
      pool,
      "SELECT USERID, USERNAME, PIN_HASH FROM VOCHECK_USERS WHERE USERNAME=?",
      [username]
    );

    if (!results || results.length === 0) {
      return res.status(401).json({ message: "Invalid username or PIN" });
    }

    const user = results[0];
    const valid = await bcrypt.compare(pin, user.PIN_HASH);

    if (!valid) {
      return res.status(401).json({ message: "Invalid username or PIN" });
    }

    const token = jwt.sign(
      { id: user.ID },
      process.env.JWT,
      { expiresIn: "8h" }
    );

    res.json({ token });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
