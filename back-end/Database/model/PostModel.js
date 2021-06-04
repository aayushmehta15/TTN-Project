const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        likes: Number,
        dislike: Number,
        postCreated: { type: Date, default: Date.now },
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
    },
    { timestamps: true }
);

const PostModel = new mongoose.model("post", PostSchema);

module.exports = { PostModel };
