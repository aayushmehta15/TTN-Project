const router = require("express").Router();

const { verifyJwtToken } = require("../../config/jwt-token");
const postController = require("./postController");

router.post("/createPost", verifyJwtToken, postController.createPost);
router.get("/getPostData", verifyJwtToken, postController.getAllPosts);

module.exports = router;
