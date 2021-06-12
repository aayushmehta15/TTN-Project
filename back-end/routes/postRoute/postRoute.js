const router = require("express").Router();
const { verifyJwtToken } = require("../../config/jwt-token");
const postController = require("./postController");

router.get("/postData", verifyJwtToken, postController.getAllPosts);

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
