import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({

    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    date: {
        type: Date,
        required: [true, 'Release date is required.'],
    },
    seatNumber: {
        type: String,
        required: [true, 'Seat number is required.'],
        trim: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

// Create the Movie model
const BookingModel = mongoose.model('Booking', bookingSchema);

export default BookingModel
