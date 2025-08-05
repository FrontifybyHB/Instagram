import express from 'express'
const router = express.Router()
import multer from 'multer'
import { createPostController, getPostsController, commentController, likeController } from '../controllers/post.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { getPostValidator, createCommentValidator, createLikeValidator } from '../middlewares/validator.middleaware.js'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


router.post(
    '/',
    authMiddleware,
    upload.single('image'),
    createPostController
)

router.get(
    '/',
    getPostValidator,
    authMiddleware,
    getPostsController
)

router.post(
    '/comment',
    createCommentValidator,
    authMiddleware,
    commentController
)

router.post(
    '/like',
    createLikeValidator, 
    authMiddleware, 
    likeController
)

export default router