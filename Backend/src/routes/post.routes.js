import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createPostController } from "../controllers/post.controller.js";
import multer from "multer";


const upload = multer({storage: multer.memoryStorage()});


const router = express.Router();


/* POST /posts */
router.post('/',
    authMiddleware, // req.user
    upload.single("image"), // req.file
    createPostController)


export default router;