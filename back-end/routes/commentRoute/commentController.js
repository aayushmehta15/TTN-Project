const commentService = require("./commentService");

const createComment = async (req, res) => {
    // console.log(req.body);
    const data = {
        profileId: req.body.profileId,
        postId: req.body.postId,
        description: req.body.description,
    };
    try {
        let response = await commentService.createComment(data);
        res.status(201).send(response);
    } catch (error) {
        res.send(error);
    }
};

const getAllComments = async (req, res) => {
    let response = await commentService.getAllComments(req.userData);
    // console.log(response);
    res.send(response);
};

module.exports = { getAllComments, createComment };
