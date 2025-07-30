import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    image: {
        required: true,
        type: String,
    },
    caption: {
        type: String,
        required: true,
    },
    mentions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
})

const postModel = mongoose.model("post", postSchema);

export default postModel;