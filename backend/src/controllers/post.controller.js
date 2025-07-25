import { generateCaption } from '../services/ai.service.js'
import { uploadFile } from '../services/storage.service.js'
import { v4 as uuidv4 } from 'uuid'
import { createPost } from '../dao/post.dao.js'

export async function createPostController(req, res, next) {
    try {
        const { mentions } = req.body;
        // console.log(req.file);
        const [file, caption] = await Promise.all([
            uploadFile(req.file.buffer, uuidv4()),
            generateCaption(req.file)
        ]);

        // console.log(file, caption);

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