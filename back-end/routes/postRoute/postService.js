const { PostModel } = require("../../Database/model/PostModel");

const createPost = async data => {
    console.log(data);
    try {
        const user = await PostModel.create({
            profileId: data.profileId,
            description: data.description,
            postImage: data.postImage,
        });
    } catch (error) {
        return error.message;
    }
};

const getAllPosts = async userData => {
    try {
        const user = await PostModel.find({})
            .populate("profileId")
            .sort({ createdAt: -1 })
            .exec();
        console.log(user);
        return user;
    } catch (error) {
        return error.message;
    }
};

module.exports = { getAllPosts, createPost };
