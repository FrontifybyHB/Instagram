import express from "express"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js"
import postRoutes from "./routes/post.routes.js"
import chatRoutes from "./routes/chat.routes.js"
import config from './config/config.js'
import cors from "cors"
import morgan from 'morgan'
// ...existing code...

// ...existing code...


const app = express()

app.use(express.static("public"))

app.use(cors({
    origin: ["http://localhost:3000", config.FRONTEND_URL],
    credentials: true
}))
app.use(express.json())
app.use(morgan('dev'));
app.use(cookieParser())


app.get("/helth", (req, res) => {
    res.send("Welcome to the API")
})
app.use('/auth', authRoutes)
app.use('/posts', postRoutes)
app.use('/chat', chatRoutes)


export default app