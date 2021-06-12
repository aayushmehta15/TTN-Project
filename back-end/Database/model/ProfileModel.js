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
        userName: {
            type: String,
        },
        designation: {
            type: String,
        },
        myWebsite: {
            type: String,
        },
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
            min: 5,
        },
        email: {
            type: String,
        },
        role: {
            type: String,
            default: "user",
        },
        profileImage: {
            type: String,
        },
        coverImage: {
            type: String,
            default:
                "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
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
