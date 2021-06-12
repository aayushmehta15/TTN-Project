const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

//CREATING JWT TOKEN
exports.generateJwtToken = (req, res) => {
    console.log(req.user);
    // console.log(req.user.email);
    // jwt.sign(payload,secret,options);
    return jwt.sign(
        { _id: req.user._id, email: req.user.email },
        process.env.JWT_SECRET,
        {
            algorithm: "HS256",
            expiresIn: "1d",
        }
    );
};

exports.verifyJwtToken = (req, res, next) => {
    // console.log(req.headers);
    let token = req.headers.authorization;
    // console.log(token);
    if (!token) {
        return res.status(401).send("Unauthorized User...");
    }

    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(tokenData);
        req.userData = tokenData;
        next();
    } catch (err) {
        return res.status(403).send("Forbidden");
    }
};
