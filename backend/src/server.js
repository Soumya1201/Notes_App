import express from "express"
import router from "./routes/notesRoutes.js"
import dotenv from "dotenv"
import mongoose from "mongoose"
import connectDB from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js"
import cors from "cors"

const app = express()

dotenv.config()

const port = process.env.PORT || 5001

app.use(cors({
  origin: "http://localhost:5173"
}))

// this middleware will pasre JSON bodies: req.body
app.use(express.json())

app.use(rateLimiter)



// Our simple custom middleware
// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// })


app.use('/api/notes', router)

const startServer = async () => {
  try {
    await connectDB()
    // console.log(process.env.MONGODB_URI)

    app.listen(port, () => {
      console.log("Server has started on:", port)
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

startServer()