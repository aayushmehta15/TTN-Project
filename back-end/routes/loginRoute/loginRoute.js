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
        failureRedirect: "http://localhost:3000",
    }),
    (req, res) => {
        let token = generateJwtToken(req, res);
        // console.log(token);
        res.cookie("auth_token", token, {
            httpOnly: false,
            secure: false,
        });
        res.redirect("http://localhost:3000/feeds");
    }
);

module.exports = router;
