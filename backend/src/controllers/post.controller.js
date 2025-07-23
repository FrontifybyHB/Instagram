import { generateCaption } from '../services/ai.service.js'
import { uploadFile } from '../services/storage.service.js'
import { v4 as uuidv4 } from 'uuid'

export async function createPostController(req, res, next) {
    try {
        const { mentions } = req.body;

        const [file, caption] = await Promise.all([
            uploadFile(req.file, uuidv4()),
            generateCaption(req.file)
        ]);
        const post = await createPost({
            image: file.url,
            caption,
            mentions,
            user: req.user._id,
        });

        return res.status(201).json({
            message: "Post created successfully",
            post,
        });

    } catch (error) {
        next(error);
    }
}