import express from 'express'
const router = express.Router()
import multer from 'multer'
import { createPostController, getPostsController } from '../controllers/post.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { getPostValidator } from '../middlewares/validator.middleaware.js'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


router.post(
    '/',
    authMiddleware,
    upload.single('image'),
    createPostController
)

router.get('/',
    getPostValidator,
    authMiddleware, 
    getPostsController
)

export default router