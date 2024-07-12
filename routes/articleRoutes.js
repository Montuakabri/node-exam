const express = require("express");
const { requireAuth } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/articles", requireAuth, (req, res) => {});

router.get("/my-articles", requireAuth, (req, res) => {});

module.exports = router;
