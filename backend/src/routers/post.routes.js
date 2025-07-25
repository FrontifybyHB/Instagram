import express from 'express'
const router = express.Router()
import multer from 'multer'
import { createPostController } from '../controllers/post.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


router.post(
    '/',
    authMiddleware,
    upload.single('image'),
    createPostController
)

export default router