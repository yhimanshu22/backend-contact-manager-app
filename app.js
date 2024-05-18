import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// Import routes
import userRouter from './routes/user.router.js';
import contactRouter from './routes/contact.router.js';
import { errorHandler } from './middlewares/errorHandler.js';


// Declare routes
app.use('/api/users', userRouter);
app.use('/api/contacts',contactRouter)
app.use(errorHandler)

export { app };
