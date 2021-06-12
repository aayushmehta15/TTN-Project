const postService = require("./postService");

const createPost = async (req, res) => {
    // console.log(req.body);
    const data = {
        profileId: req.userData._id,
        description: req.body.description,
        postImage: req.body.postImage,
    };

    let response = await postService.createPost(data);
    res.status(201).send(response);
};
const getAllPosts = async (req, res) => {
    let response = await postService.getAllPosts(req.userData);
    console.log(response);
    res.send(response);
};

module.exports = { getAllPosts, createPost };
