const mongoose = require("mongoose");
const dotenv = require('dotenv').config();


mongoose.connect(process.env.CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection.on("error", error => {
    console.log("Error", error);
});

mongoose.connection.on("connected", (error, res) => {
    console.log("Mongoose is connected");
});

module.exports = { mongoose };
