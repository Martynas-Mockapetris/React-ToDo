import express from 'express';
import mongoose from 'mongoose';
import todoRoutes from './routes/todos.js';
import userRoutes from './routes/user.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/todos', todoRoutes);
app.use('/api/user', userRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to DB & listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });