import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js"
import cookieParser from 'cookie-parser';
import User from './models/user.model.js';
import path from 'path';
import cors from 'cors';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err);
})

const __dirname = path.resolve();

const app = express();

// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's origin
  }));

const UserModel = import('./models/user.model.js')

app.get('/users',(req,res)=>{
    UserModel.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server Listening on port 3000');
}) 

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})

app.get("/readalluser", async (req, res) => {
    try {
      const userData = await User.find({});
      res.send(userData);
    } catch (error) {
      res.send(error);
    }
  });

