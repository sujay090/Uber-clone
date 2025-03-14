import dontenv from 'dotenv'
dontenv.config()
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { connectDB } from './db/db.js'
import userRoutes from './routes/user.routes.js'
import captainRoutes from './routes/captain.routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
await connectDB()

app.use("/users",userRoutes)
app.use("/captain",captainRoutes)
export default app  
