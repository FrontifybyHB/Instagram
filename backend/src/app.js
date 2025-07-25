import express from 'express';
import errorHandler from './middlewares/errorHandler.js'
import authRouter from './routers/auth.routes.js'
import postRouter from './routers/post.routes.js'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.use('/auth', authRouter)
app.use('/posts', postRouter)

app.use(errorHandler)

export default app