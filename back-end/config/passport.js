const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { UserModel } = require("../Database/model/UserModel");
const { ProfileModel } = require("../Database/model/ProfileModel");
const dotenv = require("dotenv");

dotenv.config();

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.CALL_BACK_URL,
        },
        async function (accessToken, refreshToken, profile, done) {
            // console.log(profile);
            // console.log(profile._json);
            if (profile._json.hd === "tothenew.com") {
                try {
                    const user = await UserModel.findOne({
                        email: profile._json.email,
                    });
                    if (!user) {
                        // Putting data in User Model
                        const createUser = await UserModel.create({
                            name: profile._json.name,
                            email: profile._json.email,
                            googleImage: profile._json.picture,
                            role:
                                profile._json.email ===
                                "aayush.mehta@tothenew.com"
                                    ? "admin"
                                    : "user",
                        });

                        // Putting data in Profile Model
                        const createProfile = await ProfileModel.create({
                            _id: createUser._id,
                            firstName: profile._json.given_name,
                            lastName: profile._json.family_name,
                            userName: profile._json.name,
                            email: profile._json.email,
                            profileImage: profile._json.picture,
                            role:
                                profile._json.email ===
                                "aayush.mehta@tothenew.com"
                                    ? "admin"
                                    : "user",
                        });
                    }

                    done(null, user);
                } catch (err) {
                    console.log("ERROR", err);
                }
            } else {
                done(null, false);
            }
            // console.log(user);
        }
    )
);

module.exports = passport;
