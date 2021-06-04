// Necessayr package
const express = require("express");
const cors = require("cors");
const { mongoose } = require("./Database/Connection/connectMongoose");

const passport = require("./config/passport");

//import routes
const loginRoute = require("./routes/loginRoute/loginRoute");

// configure express app and configure middleware needed for authentication
const app = express();
const PORT = 9000;

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// use Routes
app.use(loginRoute);

app.listen(PORT, () => console.log("Server is Listening at Port:" + PORT));
