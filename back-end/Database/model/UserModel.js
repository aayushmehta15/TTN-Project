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
        profileId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'profile'
        }
    },
    { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = { UserModel };
