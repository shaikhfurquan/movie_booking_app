import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Title is required.'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        trim: true,
    },
    actors: [{
        type: String,
        required: [true, 'Actor is required.']
    }],
    releaseDate: {
        type: Date,
        required: [true, 'Release date is required.'],
    },
    posterUrl: {
        type: String,
        required: [true, 'Poster URL is required.'],
        trim: true,
    },
    featured: {
        type: Boolean,
    },
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
    }],
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    }
}, { timestamps: true });

// Create the Movie model
const MovieModel = mongoose.model('Movie', moviesSchema);

export default MovieModel
