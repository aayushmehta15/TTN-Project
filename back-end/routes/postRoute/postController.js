const postService = require("./postService");
const { cloudinary } = require("../../cloudinary");

const createPost = async (req, res) => {
    // console.log(req.body);
    // console.log(req.files);
    // Check TO see if we are getting an image or not.
    let postImage = req.files;
    console.log(postImage);
    let postUrl =
        Object.keys(postImage).length == 0
            ? ""
            : await cloudinary.uploader.upload(postImage.postImage.path);
    const data = {
        profileId: req.userData._id,
        description: req.body.description,
        postImage: postUrl === "" ? "" : postUrl.url,
    };

    try {
        let response = await postService.createPost(data);
        res.status(201).send(response);
    } catch (err) {
        res.send(err);
    }
};

const getAllPosts = async (req, res) => {
    try {
        let response = await postService.getAllPosts(req.userData);
        // console.log(response);
        res.send(response);
    } catch (err) {
        res.send(err);
    }
};

module.exports = { getAllPosts, createPost };
