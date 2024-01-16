const Log = require("../models/Log");

// Root Route
const logIndex = async (req, res) => {
    const data = await Log.find();

    res.render("logs/Index", {
        logs: data
    });
}

// New Route
const logNew = (req, res) => {
    res.render("logs/New");
};

module.exports = {
    logIndex, logNew
};