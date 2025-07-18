import bcrypt from 'bcryptjs';
import { createUser, findOneUser } from '../dao/user.dao.js'
import jwt from 'jsonwebtoken'
import config from '../config/config.js'

export async function registerController(req, res, next) {
    try {
        const { username, email, password } = req.body;

        const isUserExists = await findOneUser({ $or: [{ username }, { email }] });

        if (isUserExists) {
            return res.status(400).json({
                message: "Username or email already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await createUser({ username, email, password: hashedPassword });

        const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: config.jwtExpiry });

        res.cookie("token", token)

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                bio: user.bio,
                image: user.image,
            },
        });

    } catch (error) {
        next(error);
    }
}

export async function loginController(req, res, next) {
    try {
        const { username, email, password } = req.body;

        const user = await findOneUser({ $or: [{ username }, { email }] });

        if (!user) {
            return res.status(400).json({
                message: "Username or email does not exists",
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Username or password is incorrect",
            });
        }

        const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: config.jwtExpiry });

        res.cookie("token", token)

        return res.status(200).json({
            message: "User logged in successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                bio: user.bio,
                image: user.image,
            },
        });

    } catch (error) {
        next(error);
    }
}