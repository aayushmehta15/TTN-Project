const express = require("express");
const router = express.Router();
const passport = require("../../config/passport");
const { generateJwtToken } = require("../../config/jwt-token");
// console.log(generateJwtToken);
router.get(
    "/auth/google",
    passport.authenticate("google", {
        session: false,
        scope: ["profile", "email"],
    })
);

router.get(
    "/auth/google/redirect",
    passport.authenticate("google", {
        session: false,
        failureRedirect: "/auth/google",
    }),
    // function (req, res) {
    //     var token = req.user.token;
    //     res.redirect("http://localhost:3000?token=" + token);
    // }
    (req, res) => {
        let token = generateJwtToken(req, res);
        // console.log(token);
        res.cookie("token", token, { httpOnly: true, secure: false });
        res.redirect("http://localhost:3000/feeds");
    }
);

// router.get("/profile", (req, res) => {
//     res.send("UserAuthenticated");
// });

module.exports = router;
