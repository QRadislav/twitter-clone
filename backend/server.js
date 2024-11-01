import express from "express"
import dotenv   from 'dotenv'

import authRoutes from './routes/auth.routes.js'
import connectMongoDB from "./db/connectMondoDB.js"


dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use('/api/auth',authRoutes)
app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
    connectMongoDB()
})