import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import morgan from 'morgan';
import {connectToDB} from './db/connectDB.js';
import userRouter from './routes/user.route.js';
import adminRouter from './routes/admin.route.js';
import movieRouter from './routes/movie.route.js';
import bookingRouter from './routes/booking.route.js';

const app = express();

// express middlewares
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Welcome');
})
// routes
app.use('/api/v1/user', userRouter)
app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/movie', movieRouter)
app.use('/api/v1/booking', bookingRouter)



connectToDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server started at ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log("Failed to connect database", error);
}) 