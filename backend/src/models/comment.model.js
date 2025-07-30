import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
})

const commentModel = mongoose.model("comment", commentSchema);

export default commentModel;