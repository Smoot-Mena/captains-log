const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mealSchema = new Schema({
    name: {type: String},
    rating: {type: Number},
    details: {type: String},
    servedHot: {type: Boolean}
});

const Meal = mongoose.model("meals", mealSchema);

module.exports = Meal;