const Log = require("../models/Log");

// Root Route
const logIndex = async (req, res) => {
    let data;

    try {
        data = await Log.find();
        console.log(data);
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

const logCreate = async (req, res) => {
    if (req.body.shipIsBroken == "on") {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    await Log.create(req.body);
    res.redirect("/logs");
}

module.exports = {
    logIndex, logNew, logShow, logCreate
};