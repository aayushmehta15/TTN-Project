const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        designation: String,
        myWebsite: String,
        gender: {
            type: String,
        },
        Birthday: {
            type: Date,
            default: Date.now,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        zip: {
            type: Number,
            max: 6,
        },
        email: {
            type: String,
            unique: true,
        },
        role: {
            type: String,
        },
        profileImage: {
            type: String,
        },
        coverImage: {
            type: String,
        },
        posts: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
        },
        comments: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
        },
    },
    { timestamps: true }
);

const ProfileModel = new mongoose.model("profile", ProfileSchema);

module.exports = { ProfileModel };
