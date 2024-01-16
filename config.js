const mongoose = require("mongoose");

const mongoConfig = async () => {
    try {
        const result = await mongoose.connect(process.env.MONGO_URL);
        console.log("database connected: " + result.connection.host);
    } catch (error) {
        console.error(error);
    }
}

module.exports = mongoConfig;