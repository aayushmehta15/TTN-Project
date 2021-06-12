const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        profileId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "profile",
        },
        description: {
            type: String,
        },
        postImage: {
            type: String,
        },
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "profile" }],
        dislike: [{ type: mongoose.Schema.Types.ObjectId, ref: "profile" }],
    },
    { timestamps: true }
);

const PostModel = new mongoose.model("post", PostSchema);

module.exports = { PostModel };
