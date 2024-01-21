const meals = require("../models/meals");
const Meal = require("../models/Meal");

//Root Route
const mealIndex = async (req, res) => {
    let data;

    try {
        data = await Meal.find();
    } catch (error) {
       console.error(error); 
    }
    res.render("meals/Index", {meals: data});
};

// New Route
const mealNew = (req, res) => {
    res.render("meals/New");
};

// Show Route
const mealShow = async (req, res) => {
    const data = await Meal.findById(req.params.id);

    res.render("meals/Show", { meal: data });
};

// Create Route
const mealCreate = async (req, res) => {
    req.body.servedHot == "on" ? req.body.servedHot = true : req.body.servedHot = false;
    await Meal.create(req.body);
    res.redirect("/meals");
}

// Edit Route
const mealEdit = async (req, res) => {
    const data = await Meal.findById(req.params.id);
    res.render("meals/Edit", { meal: data });
};

// Update Route
const mealUpdate = async (req, res) => {
    
    req.body.servedHot == "on" ? req.body.servedHot = true : req.body.servedHot = false;
    await Meal.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/meals/${req.params.id}`);
};

// Delete Route
const mealDelete = async (req, res) => {
    await Meal.findByIdAndDelete(req.params.id);
    res.redirect("/meals");
};

// Clear Route
const mealClear = async (req, res) => {
    await Meal.deleteMany();
    res.redirect("/meals");
};

// Seed Route
const mealSeed = async (req, res) => {
    console.log("deleting everything");
    await Meal.deleteMany();
    await Meal.create(meals);
    res.redirect("/meals");
};

module.exports = {
    mealIndex, mealNew, mealShow, mealCreate, mealEdit, mealUpdate, mealDelete, mealClear, mealSeed
};