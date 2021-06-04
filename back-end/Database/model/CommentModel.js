const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
    {
        comment: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "profile",
            },
        ],
        commentBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "profile",
        },
        commentDescription: { type: String, default: "" },
        commentCount: { type: Number },
        commentedOn: { type: Date, default: Date.now },
    },
    { timestamps }
);

const CommentModel = new mongoose.model("comment", CommentSchema);

module.exports = { UserModel };
