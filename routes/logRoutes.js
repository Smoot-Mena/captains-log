const express = require("express");

const router = express.Router();

const {logNew, logCreate, logDelete, logEdit, logIndex, logShow, logUpdate, logClear, logSeed} = require("../controllers/logController");

// Index Route
router.get("/", logIndex);

// Clear Route
router.get("/clear", logClear);

// New Route
router.get("/new", logNew);

// Seed Route
router.get("/seed", logSeed);

// Show Route
router.get("/:id", logShow);

// Create Route
router.post("/", logCreate);

// Edit Route
router.get("/:id/edit", logEdit);

// Update Route
router.put("/:id", logUpdate);

// Destroy Route
router.delete("/:id", logDelete);

module.exports = router;