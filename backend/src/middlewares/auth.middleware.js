import jwt from 'jsonwebtoken'
import config from '../config/config.js'
import { findOneUser } from '../dao/user.dao.js'

export async function authMiddleware(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }

    try {
        const decoded = jwt.verify(token, config.jwtSecret);

        const findUser = await findOneUser({ _id: decoded.id });

        req.user = findUser;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token, please login again",
        });
    }
}