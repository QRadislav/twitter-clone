// Q1. What is server.js and how is it used?

import express from "express"
// Q2. What are the environments in js?
import dotenv   from 'dotenv'

// Q4. Cloud storage, their usage, what is Cloudinary?
import {v2 as cloudinary} from 'cloudinary'

import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'
import postRoutes from './routes/post.route.js'
import notificationRoutes from './routes/notification.route.js'

import connectMongoDB from "./db/connectMongoDB.js"
import cookieParser from "cookie-parser"


dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUND_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const app = express()
const PORT = process.env.PORT || 5000

// Q3. Middleware, how to determine where to use it and how is it implemented? Their order
// Q. DDoS, why limit is set to 5mb?
app.use(express.json({limit:'5mb'})) // to parse req.body
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use("/api/notifications", notificationRoutes);

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
    connectMongoDB()
})