const express = require("express");

const router = express.Router();

const {logNew, logCreate, logDelete, logEdit, logIndex, logShow, logUpdate} = require("../controllers/logController");

// Index Route
router.get("/", logIndex);

// New Route
router.get("/new", logNew);

module.exports = router;