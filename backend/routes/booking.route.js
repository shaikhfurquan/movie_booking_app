import express from 'express';
import { isAuthUser , isAuthAdmin } from '../middlewares/isAuth.middleware.js';
import {  getAllBookings, newBooking } from '../controllers/booking.controller.js';


const bookingRouter = express.Router();

bookingRouter.post('/newBooking' , isAuthUser , newBooking)
bookingRouter.get('/bookings' , isAuthUser , getAllBookings)

export default bookingRouter
