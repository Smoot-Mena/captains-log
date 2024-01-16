const express = require("express");
const methodOverride = require("method-override");

require("dotenv").config();
const mongoConfig = require("./config");

const app = express();

const PORT = 3952;

// Loading Engine
const jsxEngine = require("jsx-view-engine");

// Import Router
const logRoutes = require("./routes/logRoutes");

// Engine Setup
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// POST Request data format
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use("/logs", logRoutes);

// Root Route
app.get("/", (req, res)=> {
    res.send("<h1>Sup, World!</h1>");
});

//Listening Port
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
    mongoConfig();
});