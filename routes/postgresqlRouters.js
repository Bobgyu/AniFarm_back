const express = require("express");
const router = express.Router();
const { pool } = require("../database/database");

// TOP 10 데이터 조회 API
router.get("/top10", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM top_10_sales");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 마켓 데이터 조회 API
router.get("/market", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM sales_data_2024");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
