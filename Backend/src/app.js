import express from "express"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js"
import postRoutes from "./routes/post.routes.js"
import chatRoutes from "./routes/chat.routes.js"
import config from './config/config.js'
import cors from "cors"
import morgan from 'morgan'

const app = express()

app.use(express.static("public"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:3000", config.FRONTEND_URL, "http://localhost:5173"],
    credentials: true
}))


app.get("/helth", (req, res) => {
    res.send("Welcome to the API")
})
app.use('/auth', authRoutes)
app.use('/posts', postRoutes)
app.use('/chat', chatRoutes)


export default app