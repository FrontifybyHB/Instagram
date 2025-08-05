import likeModel from "../models/like.model.js";


export async function isUserLikedPost(userId, postId) {
    return await likeModel.findOne({ user: userId, post: postId });
}

export async function unlikePost(userId, postId) {
    return await likeModel.findOneAndDelete({ user: userId, post: postId });
}

export async function createLike(data) {
    return await likeModel.create(data);
}