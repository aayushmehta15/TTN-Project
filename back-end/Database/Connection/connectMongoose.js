const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BuzzApp", {
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
