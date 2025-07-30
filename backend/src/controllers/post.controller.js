import { generateCaption } from '../services/ai.service.js'
import { uploadFile } from '../services/storage.service.js'
import { v4 as uuidv4 } from 'uuid'
import { createPost, getPosts } from '../dao/post.dao.js'
import { createComment } from '../dao/comment.dao.js'

export async function createPostController(req, res, next) {
    try {
        const { mentions } = req.body;

        const [file, caption] = await Promise.all([
            uploadFile(req.file.buffer, uuidv4()),
            generateCaption(req.file)
        ]);


        const postData = await createPost({
            mentions,
            url: file.url,
            caption,
            user: req.user._id,
        });

        return res.status(201).json({
            message: "Post created successfully",
            post: postData,
        });

    } catch (error) {
        next(error);
    }
}

export async function getPostsController(req, res, next) {
    try {
        const findingPost = await getPosts(req.query.skip, req.query.limit && req.query.limit > 20 ? 20 : req.query.limit);

        return res.status(200).json({
            message: "Posts fetched successfully",
            posts: findingPost,
        });
    } catch (error) {
        next(error);
    }
}

export async function commentController(req, res, next) {
    const { post, text } = req.body;
    const user = req.user._id;

    const comment = await createComment({
        post,
        text,
        user,
    });

    return res.status(201).json({
        message: "Comment created successfully",
        comment,
    });
}