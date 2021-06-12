const { ProfileModel } = require("../../Database/model/ProfileModel");
// const { UserModel } = require("../../Database/model/UserModel");

const getAllFeeds = async userData => {
    try {
        const user = await ProfileModel.find({ email: userData.email });
        return user;
    } catch (error) {
        return error.message;
    }
};

module.exports = { getAllFeeds };
