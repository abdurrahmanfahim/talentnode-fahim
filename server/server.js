import cors from 'cors';
import "dotenv/config";
import express from 'express';
import multer from 'multer';
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(multer().none())

// Routes
app.get("/", (req, res) => { 
  // console.log("server is running on " + PORT)
  res.status(200).json({ message: "Server is running" });
})
  
// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




