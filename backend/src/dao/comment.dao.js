import commentModel from "../models/comment.model.js";

export async function createComment(data) {
    return await commentModel.create(data);
}