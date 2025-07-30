
import postModel from "../models/post.model.js";

export async function createPost(data) {
    const { mentions, url, caption, user } = data;
    return await postModel.create({
        image: url,
        caption,
        mentions,
        user,
    });
}

export async function getPosts(skip = 0, limit = 10) {
    return await postModel
        .find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
}