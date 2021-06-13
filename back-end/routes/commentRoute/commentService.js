const { CommentModel } = require("../../Database/model/CommentModel");

const createComment = async data => {
    console.log(data);
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

// const getAllComments = async userData => {
//     try {
//         const user = await CommentModel.find({})
//             .populate("profileId")
//             .sort({ createdAt: -1 })
//             .exec();
//         console.log(user);
//         return user;
//     } catch (error) {
//         return error.message;
//     }
// };

module.exports = { createComment };
