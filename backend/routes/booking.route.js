import express from 'express';
import { isAuthUser , isAuthAdmin } from '../middlewares/isAuth.middleware.js';
import { deleteBooking, getAllBookings, getBookingById, newBooking } from '../controllers/booking.controller.js';


const bookingRouter = express.Router();

bookingRouter.post('/newBooking' , isAuthUser , newBooking)
bookingRouter.get('/bookings' , isAuthUser , getAllBookings)
bookingRouter.get('/:bookingId' , isAuthUser , getBookingById)
bookingRouter.delete('/:bookingId' , isAuthUser , deleteBooking)

export default bookingRouter
