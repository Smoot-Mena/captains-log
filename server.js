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
const foodRoutes = require("./routes/foodRoutes");

// Engine Setup
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// POST Request data format
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use("/logs", logRoutes);
app.use("/meals", foodRoutes);

// Root Route
app.get("/", (req, res)=> {
    res.send("<body><h1 style='margin: 20px; display: flex; justify-content: space-between'><a href='/logs' style='text-decoration: none; color: dodgerblue; background-color: azure; border: 7px solid darkblue; border-radius: 20px; padding: 10px; box-shadow: 5px 5px 5px #555'>Captain's Logs</a><br /><a href='/meals' style='text-decoration: none; color: #FD6C9E; background-color: #FFF0F5; border: 7px solid #D65282; border-radius: 20px; padding: 10px; box-shadow: 5px 5px 5px #555'>Food Habits</a></h1></body>");
});

//Listening Port
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
    mongoConfig();
});