import mongoose from "mongoose";
import AdminModel from "../models/admin.model.js";
import MovieModel from "../models/movie.model.js";

export const addMovie = async (req, res, next) => {
    try {
        const adminId = req.admin._id
        if (!adminId) {
            return res.status(401).json({ message: "Unauthorized Admin Access" })
        }
        const { title, description, releaseDate, posterUrl, featured, actors } = req.body
        if (!title || !description || !releaseDate || !posterUrl || !featured || !actors) {
            return res.status(400).json({ message: "Please fill in all fields" })
        }

        // create a new movie instance
        const movie = new MovieModel({
            title,
            description,
            actors,
            releaseDate: new Date(`${releaseDate}`),
            posterUrl,
            featured,
            admin: adminId
        })


        const session = await mongoose.startSession()
        const admin = await AdminModel.findById(adminId)
        // single record to be saved
        session.startTransaction()
        await movie.save({ session })

        // we need to store this movie inside the admin model as well
        admin.addedMovies.push(movie)
        await admin.save({ session })

        // commit the transaction
        await session.commitTransaction()

        res.status(201).json({
            message: "Movie posted successfully",
            movie: movie
        })
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({ message: "Invalid ID", error: error.message });
        }
        return next(error);
        // res.json({error: error.message})
    }
}


export const getAllMovies = async (req, res, next) => {
    try {
        const movies = await MovieModel.find()
        res.status(201).json({
            message: "Movies fetched successfully",
            countOfMovies: movies.length,
            movies: movies
        })
    } catch (error) {
        return next(error);
        // res.json({error: error.message})
    }
}


export const getMovieById = async (req, res, next) => {
    try {
        const movieId = req.params.movieId
        const movie = await MovieModel.findById(movieId)
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" })
        }
        res.status(201).json({
            message: "Movie fetched successfully",
            movie: movie
        })
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({ message: "Invalid movie ID", error: error.message });
        }
        return next(error);
        // res.json({error: error.message})
    }
}


export const updateMovie = async (req, res, next) => {
    try {
        const movieId = req.params.movieId
        const { title, description, releaseDate, posterUrl, featured, actors } = req.body

        // Fetch the movie to verify the admin
        const movie = await MovieModel.findById(movieId)
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" })
        }

        // Check if the authenticated admin is the creator of the movie
        if (String(movie.admin) !== String(req.admin._id)) {
            return res.status(403).json({ message: "Forbidden: You are not allowed to update this movie" });
        }

        const updateMovie = await MovieModel.findByIdAndUpdate(movieId, { title, description, releaseDate, posterUrl, featured, actors }, { new: true })
        res.status(201).json({
            message: "Movie updated successfully",
            updateMovie
        })
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({ message: "Invalid movie ID", error: error.message });
        }
        return next(error);
        // res.json({error: error.message})
    }
}

export const deleteMovie = async (req, res, next) => {
    try {
        const movieId = req.params.movieId
        // Fetch the movie to verify the admin
        const movie = await MovieModel.findById(movieId)
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" })
        }

        // Check if the authenticated admin is the creator of the movie
        if (String(movie.admin) !== String(req.admin._id)) {
            return res.status(403).json({ message: "Forbidden: You are not allowed to delete this movie" });
        }

        await MovieModel.findByIdAndDelete(req.params.movieId)
        res.status(201).json({
            message: "Movie deleted successfully",

        })
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({ message: "Invalid movie ID", error: error.message });
        }
        return next(error);
        // res.json({error: error.message})
    }
}