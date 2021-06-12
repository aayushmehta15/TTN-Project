const postService = require("./postService");

const getAllPosts = async (req, res) => {
    let response = await postService.getAllFeeds(req.userData);
    res.send(response);
};

module.exports = { getAllPosts };
