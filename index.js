import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/connection.js"
import cors from "cors"
import userRouter from "./routes/userRoutes.js"
dotenv.config()

const app = express()
const PORT=process.env.PORT||3000
app.use(express.json())
// app.use(urlencoded({extended:true}))

app.use('/',(req,res)=>{
res.send('I am live parbhat')
})

const corsOptions={
    origin:"https://otp-frontend-tau.vercel.app",
    credentials:true
}
app.use(cors(corsOptions))


// API
app.use('/',userRouter)


app.listen(PORT,()=>{
    console.log(`Server running in port:${PORT}`)
    connectDB()
})