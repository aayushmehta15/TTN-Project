const router = require("express").Router();
const { verifyJwtToken } = require("../../config/jwt-token");
const profileController = require("./profileController");

router.get("/feedsData", verifyJwtToken, profileController.getAllFeeds);

module.exports = router;
