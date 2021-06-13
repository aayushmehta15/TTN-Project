const { CommentModel } = require("../../Database/model/CommentModel");

const createComment = async data => {
    // console.log(data);
    try {
        const user = await CommentModel.create({
            profileId: data.profileId,
            description: data.description,
            postId: data.postId,
        });
        return user;
    } catch (error) {
        return error.message;
    }
};

const getAllComments = async userData => {
    try {
        // console.log("comments");
        const comments = await CommentModel.find({})
            .populate("profileId")
            .populate("postId")
            .exec();
        // console.log(comments);
        return comments;
    } catch (error) {
        return error.message;
    }
};

module.exports = { getAllComments, createComment };
