const Log = require("../models/Log");
const logs = require("../models/logs");

// Root Route
const logIndex = async (req, res) => {
    let data;

    try {
        data = await Log.find();
    } catch (error) {
        console.error(error);
    }
    res.render("logs/Index", { logs: data });
};

// New Route
const logNew = (req, res) => {
    res.render("logs/New");
};

// Show Route
const logShow = async (req, res) => {
    const data = await Log.findById(req.params.id);

    res.render("logs/Show", { log: data });
};

// Create Route
const logCreate = async (req, res) => {
    req.body.shipIsBroken == "on" ? req.body.shipIsBroken = true : req.body.shipIsBroken = false;
    await Log.create(req.body);
    res.redirect("/logs");
}

// Edit Route
const logEdit = async (req, res) => {
    const data = await Log.findById(req.params.id);
    res.render("logs/Edit", { log: data });
};

// Update Route
const logUpdate = async (req, res) => {
    
    req.body.shipIsBroken == "on" ? req.body.shipIsBroken = true : req.body.shipIsBroken = false;
    await Log.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/logs/${req.params.id}`);
};

// Delete Route
const logDelete = async (req, res) => {
    await Log.findByIdAndDelete(req.params.id);
    res.redirect("/logs");
};

// Clear Route
const logClear = async (req, res) => {
    await Log.deleteMany();
    res.redirect("/logs");
};

// Seed Route
const logSeed = async (req, res) => {
    console.log("deleting everything");
    await Log.deleteMany();
    await Log.create(logs);
    res.redirect("/logs");
};

module.exports = {
    logIndex, logNew, logShow, logCreate, logEdit, logUpdate, logDelete, logClear, logSeed
};