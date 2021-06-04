// This model is for saving users google Data
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        googleImage: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "user",
        },
    },
    { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = { UserModel };
