import { query, body, validationResult } from 'express-validator';
import mongoose from "mongoose";
export const registerValidator = [
    body('username')
        .notEmpty()
        .withMessage('Username is required')
        .isLength({ min: 3, max: 20 })
        .withMessage('Username must be between 3 and 20 characters'),
    body('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Email is invalid'),
    body('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

export const getPostValidator = [
    query('limit')
        .isInt()
        .withMessage('Limit must be a number')
        .custom((value) => value >= 1 && value <= 20)
        .withMessage('Limit must be between 1 and 20'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

export const createCommentValidator = [
    body('post')
        .notEmpty()
        .withMessage('Post is required')
        .custom((value)=>{
            if(!mongoose.Types.ObjectId.isValid(value)){
                return false;
            }
            return true;
        })
        .withMessage('Post is invalid'),
    body('text')
        .notEmpty()
        .withMessage('Text is required')
        .isLength({ min: 1, max: 500 })
        .withMessage('Text must be between 1 and 500 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]
