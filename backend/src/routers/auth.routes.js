import express from 'express';
const router = express.Router();
import { registerController, loginController } from '../controllers/auth.controller.js';
import { registerValidator } from '../middlewares/validator.middleaware.js';

router.post('/register',
    registerValidator,
    registerController
);
router.post('/login', 
    loginController
);

export default router;