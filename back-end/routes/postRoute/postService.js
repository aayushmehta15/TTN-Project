const { PostModel } = require("../../Database/model/PostModel");

const getAllPosts = async userData => {
    try {
        const user = await PostModel.find({});
        return user;
    } catch (error) {
        return error.message;
    }
};

module.exports = { getAllPosts };
