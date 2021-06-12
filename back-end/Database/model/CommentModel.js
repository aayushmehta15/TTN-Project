const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
    {
        profileId: { type: mongoose.Schema.Types.ObjectId, ref: "profile" },
        postId: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
        decription: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

const CommentModel = new mongoose.model("comment", CommentSchema);

module.exports = { CommentModel };
