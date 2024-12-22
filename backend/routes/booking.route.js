import express from 'express';
import { isAuthUser , isAuthAdmin } from '../middlewares/isAuth.middleware.js';
import { newBooking } from '../controllers/booking.controller.js';


const bookingRouter = express.Router();

bookingRouter.post('/newBooking' , isAuthUser , newBooking)

export default bookingRouter
