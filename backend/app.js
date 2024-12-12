import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import connectToDB from './db/connectDB.js';
import morgan from 'morgan';
import userRouter from './routes/user.route.js';
const app = express();

// express middlewares
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(cookieParser());

app.get('/', (req,res)=>{
    res.send('Welcome');
})
// routes
app.use('/api/v1/user', userRouter)


connectToDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server started at ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log("Failed to connect database", error);
})
