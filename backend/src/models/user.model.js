import mongoose from "mongoose";

const userShema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    bio:{
        type: String,
        default: "",
        trim: true,
    },

    image: {
        type: String,
        default: "https://i.pinimg.com/1200x/a8/da/22/a8da222be70a71e7858bf752065d5cc3.jpg",
    },
    password: {
        type: String,
        required: true,
    },
})

const userModel = mongoose.model("user", userShema);

export default userModel;
