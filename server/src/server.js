require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')
const cookieParser = require('cookie-parser')
const { PORT, ORIGIN } = process.env

app.use(express.json())
app.use(cookieParser())
app.use(multer().none())
app.use(cors({
    origin: ORIGIN || "http://localhost:5173",
    credentials: true
}))

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
