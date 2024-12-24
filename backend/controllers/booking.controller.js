import UserModel from '../models/user.model.js'
import AdminModel from '../models/admin.model.js'
import MovieModel from '../models/movie.model.js'
import BookingModel from '../models/booking.model.js'
import mongoose from 'mongoose'




export const newBooking = async (req, res, next) => {
    try {
        const { movie, date, seatNumber } = req.body
        if (!movie || !seatNumber || !date) {
            return res.status(404).json({ message: "All fields are required" })
        }

        // check if the movie is already there or not
        let existingMovie = await MovieModel.findById(movie)
        let existingUser = await UserModel.findById(req.user._id)
        if (!existingMovie) {
            return res.status(404).json({ message: "Movie not found with given Id" })
        }
        if (!existingUser) {
            return res.status(404).json({ message: "User not found with given Id" })
        }

        // crating the new bookings
        const booking = new BookingModel({
            movie,
            date: new Date(`${date}`),
            seatNumber,
            user: req.user._id
        })

        const session = await mongoose.startSession()
        session.startTransaction()

        existingUser.bookings.push(booking)
        existingMovie.bookings.push(booking)
        await existingUser.save({ session })
        await existingMovie.save({ session })
        await booking.save({ session })
        session.commitTransaction()

        res.status(201).json({
            message: "Booking successfully",
            newBookings: booking

        })
    } catch (error) {
        return next(error);
        // res.json({error: error.message})
    }
}


export const getAllBookings = async (req, res, next) => {
    try {
        const allBookings = await BookingModel.find()
        if (!allBookings) {
            return res.status(404).json({ message: "Booking not found" })
        }
        res.status(200).json({
            message: "All Booking fetched successfully",
            countOfBookings: allBookings.length,
            allBookings

        })
    } catch (error) {
        return next(error);
        // res.json({error: error.message})
    }
}


export const getBookingById = async (req, res, next) => {
    try {
        const bookingId = req.params.bookingId
        const booking = await BookingModel.findById(bookingId)
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" })
        }
        res.status(200).json({
            message: "Booking fetched successfully",
            booking

        })
    } catch (error) {
        return next(error);
        // res.json({error: error.message})
    }
}


export const deleteBooking = async (req, res, next) => {
    try {
        const bookingId = req.params.bookingId
        const booking = await BookingModel.findByIdAndDelete(bookingId).populate("user movie")
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" })
        }

        const session = await mongoose.startSession()
        session.startTransaction()

        // delete booking of user from the bookings
        await booking.user.bookings.pull(booking)
        await booking.movie.bookings.pull(booking)
        await booking.movie.save({ session })
        await booking.user.save({ session })
        session.commitTransaction()
        res.status(200).json({
            message: "Booking deleted successfully"
            // booking
        })
    } catch (error) {
        return next(error);
        // res.json({error: error.message})
    }
}
