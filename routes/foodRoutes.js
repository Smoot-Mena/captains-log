const express = require("express");

const foodRouter = express.Router();

const {mealNew, mealCreate, mealDelete, mealEdit, mealIndex, mealShow, mealUpdate, mealClear, mealSeed} = require("../controllers/foodController");

// Index Route
foodRouter.get("/", mealIndex);

// Clear Route
foodRouter.get("/clear", mealClear);

// New Route
foodRouter.get("/new", mealNew);

// Seed Route
foodRouter.get("/seed", mealSeed);

// Show Route
foodRouter.get("/:id", mealShow);

// Create Route
foodRouter.post("/", mealCreate);

// Edit Route
foodRouter.get("/:id/edit", mealEdit);

// Update Route
foodRouter.put("/:id", mealUpdate);

// Destroy Route
foodRouter.delete("/:id", mealDelete);

module.exports = foodRouter;