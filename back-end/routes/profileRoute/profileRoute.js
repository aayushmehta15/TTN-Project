const router = require("express").Router();
const { verifyJwtToken } = require("../../config/jwt-token");
const profileController = require("./profileController");

router.get("/feedsData", verifyJwtToken, profileController.getAllFeeds);

module.exports = router;

// const router = require("express").Router();
// const { ProfileModel } = require("../../Database/model/ProfileModel");

// router.get("/profileHeaderData", async (req, res) => {
//     const response = await ProfileModel.find({
//         email: "aayush.mehta@tothenew.com",
//     });
//     res.send(response);
// });

// module.exports = router;
