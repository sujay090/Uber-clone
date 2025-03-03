import dontenv from 'dotenv'
dontenv.config()
import express from 'express'
import cors from 'cors'
import { connectDB } from './db/db.js'
import userRoutes from './routes/user.routes.js'
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
await connectDB()

app.use("/users",userRoutes)

export default app  
