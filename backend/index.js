import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import morgan from 'morgan';
import routes from './routes/index.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "DELETE","PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(morgan("dev"));
//db connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log("MongoDB connected successfully")}).catch((err)=>{console.log("Failed to connect to MongoDB",err)})
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
    res.status(200).json({
        message: 'Welcome to TaskHub API' 
    });
});

//http:localhost:5001/api-v1/
app.use("/api-v1",routes)

//error middleware
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).json({
        message: "Internal server error",
    })
})

// not found middleware
app.use((req,res)=>{
    res.status(404).json({
        message: "Not found",
    });
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})