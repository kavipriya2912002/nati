import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import userRoutes from './routes/user.route.js';
// import authRoutes from './routes/auth.route.js';
// import postRoutes from './routes/post.route.js';
// import commentRoutes from './routes/comment.route.js';
// import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Database is connected');
}).catch(err=>{
    console.log(err);
})

const app = express();

app.listen(3000,()=>{
    console.log('server is running on port 3000!');
})