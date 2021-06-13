const postService = require("./postService");
const { cloudinary } = require("../../cloudinary");

const createPost = async (req, res) => {
    // console.log(req.body);
    // console.log(req.files);
    const { postImage } = req.files;
    const { url } = await cloudinary.uploader.upload(postImage.path);
    // console.log("THis URL============>>>", url);
    const data = {
        profileId: req.userData._id,
        description: req.body.description,
        postImage: url,
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
