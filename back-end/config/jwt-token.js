const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

//CREATING JWT TOKEN
exports.generateJwtToken = (req, res) => {
    // console.log(req.user);
    // console.log(req.user.email);
    // jwt.sign(payload,secret,options);
    return jwt.sign({ _id: req.user.email }, process.env.JWT_SECRET, {
        algorithm: "HS256",
        expiresIn: "1d",
        // typ:"JWT",
    });
};

exports.verifyJwtToken = (req, res) => {
    // let token = req.headers.authorization.split("=")[1];
    // return jwt.verify(token,process.env.JWT_SECRET,function(err,decoded)=>{
    //     if(err){
    //         res.status(500).send("Unauthorized")
    //     }
    // });
};
