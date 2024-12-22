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



