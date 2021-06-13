const router = require("express").Router();
const { verifyJwtToken } = require("../../config/jwt-token");
const commentController = require("./commentController");

router.post("/createComment", verifyJwtToken, commentController.createComment);
// router.get("/getCommentData", verifyJwtToken, postController.getAllPosts);

module.exports = router;
